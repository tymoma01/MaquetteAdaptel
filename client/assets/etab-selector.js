// Sélecteur client / chantier du header, commun à toutes les pages de l'espace client.
// #etab-menu ne liste que les clients. Une fois le client choisi, un second sélecteur (créé ici, à côté
// du bouton client) permet de choisir un chantier : on tape une partie du nom pour filtrer la liste, ce qui
// reste utilisable même pour un client qui a une centaine de chantiers.
// La sélection est mémorisée (localStorage) pour suivre l'utilisateur d'une page à l'autre.

const ETAB_CLIENTS = [
  {
    nom: "Hyatt Regency Paris Étoile",
    chantiers: ["FLEXI HOTE/HOTESSE", "FLEXI BAGAGERIE", "FLEXI HOUSEKEEPING", "FLEXI BANQUET", "FLEXI SOUS-CHEF", "FLEXI ROOM SERVICE", "FLEXI SPA", "FLEXI PLONGE", "FLEXI CONCIERGERIE", "FLEXI VOITURIER"]
  },
  {
    nom: "Hyatt Regency Paris Madeleine",
    chantiers: ["FLEXI RECEPTION", "FLEXI BANQUET"]
  },
  {
    // Client fictif à forte volumétrie, pour éprouver la recherche de chantier.
    nom: "ACCECIT",
    // Un chantier par hôtel, au format « ACC / <nom de l'hôtel> ».
    chantiers: (() => {
      const hotels = ["HÔTEL DU PARC", "GRAND HÔTEL", "HÔTEL DES ARTS", "HÔTEL LE MÉTROPOLE", "HÔTEL LES TERRASSES", "HÔTEL DE LA GARE", "HÔTEL LE CONTINENTAL", "HÔTEL DES VOYAGEURS", "HÔTEL LE PANORAMA", "HÔTEL DE L'EUROPE"];
      const villes = ["PARIS 8", "PARIS 15", "LA DÉFENSE", "ROISSY CDG", "ORLY", "MARNE-LA-VALLÉE", "VERSAILLES", "SAINT-DENIS", "BOULOGNE", "NANTERRE"];
      return villes.flatMap(v => hotels.map(h => `ACC / ${h} ${v}`));
    })()
  }
];

const ETAB_STORAGE_KEY = 'adaptel-client-selection';
let etabSelection = { client: 0, chantier: null }; // chantier = index dans client.chantiers, null = tout le client

try {
  const saved = JSON.parse(localStorage.getItem(ETAB_STORAGE_KEY));
  if (saved && ETAB_CLIENTS[saved.client] && (saved.chantier === null || ETAB_CLIENTS[saved.client].chantiers[saved.chantier])) etabSelection = saved;
} catch (e) {}

const ETAB_CHECK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-[#A63629] flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>`;
const ETAB_CHEVRON_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-gray-400 flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg>`;
const ETAB_SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>`;
const ETAB_SITE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-[#A63629] flex-shrink-0"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

// Sélection courante exposée aux pages (ex. pré-remplir le chantier d'une nouvelle demande).
function getEtabSelection() {
  const c = ETAB_CLIENTS[etabSelection.client];
  return { client: c.nom, chantier: etabSelection.chantier === null ? null : c.chantiers[etabSelection.chantier] };
}

const etabEscape = s => s.replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
// Recherche insensible à la casse et aux accents.
const etabNormalize = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// ---------- Menu client ----------
function renderEtabMenu() {
  const menu = document.getElementById('etab-menu');
  if (!menu) return;
  menu.innerHTML = `
    <p class="px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Vos clients</p>
    ${ETAB_CLIENTS.map((c, ci) => {
      const active = etabSelection.client === ci;
      return `
      <button type="button" onclick="setEtablissement(${ci}, null)" class="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center justify-between gap-2">
        <span class="min-w-0">
          <span class="block font-semibold truncate ${active ? 'text-[#A63629]' : 'text-gray-800'}">${etabEscape(c.nom)}</span>
          <span class="block text-[11px] text-gray-400">${c.chantiers.length} chantier${c.chantiers.length > 1 ? 's' : ''}</span>
        </span>
        ${active ? ETAB_CHECK_ICON : ''}
      </button>`;
    }).join('')}`;
}

function renderEtabLabel() {
  const label = document.getElementById('etab-label');
  if (label) label.textContent = getEtabSelection().client;
  const chLabel = document.getElementById('chantier-label');
  if (chLabel) {
    const sel = getEtabSelection();
    chLabel.textContent = sel.chantier || 'Tous les chantiers';
    chLabel.classList.toggle('text-gray-500', !sel.chantier);
    chLabel.classList.toggle('text-gray-800', !!sel.chantier);
  }
}

// ---------- Sélecteur de chantier (recherche) ----------
let chantierHighlight = 0; // index de l'option surlignée (navigation clavier)

function buildChantierPicker() {
  const etabBtn = document.getElementById('etab-btn');
  if (!etabBtn || document.getElementById('chantier-picker')) return;
  const host = etabBtn.parentElement; // div.relative du bouton client

  const group = document.createElement('div');
  group.className = 'flex items-center gap-1 min-w-0';
  host.parentNode.insertBefore(group, host);
  group.appendChild(host);

  const sep = document.createElement('span');
  sep.className = 'text-gray-300 text-lg select-none';
  sep.textContent = '/';
  group.appendChild(sep);

  const picker = document.createElement('div');
  picker.id = 'chantier-picker';
  picker.className = 'relative min-w-0';
  picker.innerHTML = `
    <button id="chantier-btn" type="button" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 max-w-[320px]">
      ${ETAB_SITE_ICON}
      <span id="chantier-label" class="text-sm font-semibold truncate"></span>
      ${ETAB_CHEVRON_ICON}
    </button>
    <div id="chantier-menu" class="hidden absolute left-0 mt-1 w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-30">
      <div class="p-2 border-b border-gray-100">
        <div class="relative">
          ${ETAB_SEARCH_ICON}
          <input id="chantier-search" type="text" autocomplete="off" placeholder="Rechercher un chantier…" class="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:border-[#A63629] focus:ring-2 focus:ring-[#A63629]/15">
        </div>
        <p id="chantier-count" class="px-1 pt-1.5 text-[11px] text-gray-400"></p>
      </div>
      <div id="chantier-options" class="max-h-80 overflow-y-auto py-1"></div>
    </div>`;
  group.appendChild(picker);

  const btn = picker.querySelector('#chantier-btn');
  const menu = picker.querySelector('#chantier-menu');
  const search = picker.querySelector('#chantier-search');

  btn.addEventListener('click', () => {
    const opening = menu.classList.contains('hidden');
    document.querySelectorAll('[id$="-menu"]').forEach(el => { if (el !== menu) el.classList.add('hidden'); });
    menu.classList.toggle('hidden', !opening);
    if (opening) {
      search.value = '';
      renderChantierOptions(true);
      search.focus();
    }
  });
  search.addEventListener('input', () => renderChantierOptions(false));
  search.addEventListener('keydown', e => {
    const opts = [...menu.querySelectorAll('[data-chantier-index]')];
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!opts.length) return;
      chantierHighlight = (chantierHighlight + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length;
      highlightChantierOption(true);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (opts[chantierHighlight]) opts[chantierHighlight].click();
    } else if (e.key === 'Escape') {
      menu.classList.add('hidden');
      btn.focus();
    }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('#chantier-picker')) menu.classList.add('hidden');
  });
}

// Liste filtrée : "Tous les chantiers" (si pas de recherche) + les chantiers du client qui contiennent le texte tapé.
function renderChantierOptions(scrollToActive) {
  const box = document.getElementById('chantier-options');
  if (!box) return;
  const client = ETAB_CLIENTS[etabSelection.client];
  const query = document.getElementById('chantier-search').value.trim();
  const q = etabNormalize(query);
  const matches = client.chantiers
    .map((nom, i) => ({ nom, i }))
    .filter(c => !q || etabNormalize(c.nom).includes(q));

  const highlightMatch = nom => {
    if (!q) return etabEscape(nom);
    const start = etabNormalize(nom).indexOf(q);
    return etabEscape(nom.slice(0, start)) + `<mark class="bg-[#A63629]/15 text-inherit rounded-sm">${etabEscape(nom.slice(start, start + q.length))}</mark>` + etabEscape(nom.slice(start + q.length));
  };
  const option = (index, content, active) => `
    <button type="button" data-chantier-index="${index}" onclick="setEtablissement(${etabSelection.client}, ${index})" class="chantier-option w-full text-left px-4 py-2 text-sm flex items-center justify-between gap-2">
      <span class="truncate ${active ? 'font-semibold text-[#A63629]' : 'text-gray-700'}">${content}</span>
      ${active ? ETAB_CHECK_ICON : ''}
    </button>`;

  let html = '';
  if (!q) {
    html += option('null', `Tous les chantiers <span class="text-gray-400 font-normal">(${client.chantiers.length})</span>`, etabSelection.chantier === null);
    html += `<div class="border-t border-gray-100 my-1"></div>`;
  }
  html += matches.map(c => option(c.i, highlightMatch(c.nom), etabSelection.chantier === c.i)).join('');
  if (!matches.length) html += `<p class="px-4 py-6 text-sm text-gray-400 text-center">Aucun chantier ne correspond à « ${etabEscape(query)} ».</p>`;
  box.innerHTML = html;

  document.getElementById('chantier-count').textContent = q
    ? `${matches.length} chantier${matches.length > 1 ? 's' : ''} sur ${client.chantiers.length}`
    : `${client.chantiers.length} chantier${client.chantiers.length > 1 ? 's' : ''} pour ${client.nom}`;

  // Surligne le chantier sélectionné à l'ouverture, sinon le premier résultat de la recherche.
  const opts = [...box.querySelectorAll('[data-chantier-index]')];
  const activeIdx = opts.findIndex(o => o.dataset.chantierIndex === String(etabSelection.chantier));
  chantierHighlight = scrollToActive && activeIdx >= 0 ? activeIdx : 0;
  highlightChantierOption(scrollToActive);
  opts.forEach((o, i) => o.addEventListener('mouseenter', () => { chantierHighlight = i; highlightChantierOption(false); }));
}

function highlightChantierOption(scroll) {
  document.querySelectorAll('#chantier-options [data-chantier-index]').forEach((o, i) => {
    o.classList.toggle('bg-gray-100', i === chantierHighlight);
    if (i === chantierHighlight && scroll) o.scrollIntoView({ block: 'nearest' });
  });
}

// Remplace la version locale de chaque page : (index client, index chantier | null).
function setEtablissement(clientIndex, chantierIndex) {
  etabSelection = { client: clientIndex, chantier: chantierIndex };
  try { localStorage.setItem(ETAB_STORAGE_KEY, JSON.stringify(etabSelection)); } catch (e) {}
  renderEtabLabel();
  renderEtabMenu();
  document.getElementById('etab-menu').classList.add('hidden');
  const chMenu = document.getElementById('chantier-menu');
  if (chMenu) chMenu.classList.add('hidden');
  document.dispatchEvent(new CustomEvent('etab-change', { detail: getEtabSelection() }));
}

buildChantierPicker();
renderEtabMenu();
renderEtabLabel();
