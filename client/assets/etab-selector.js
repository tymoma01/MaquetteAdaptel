// Sélecteur client / chantier du header, commun à toutes les pages de l'espace client.
// Reconstruit le contenu de #etab-menu : on peut choisir un client entier (tous ses chantiers) ou un
// chantier précis. Le survol d'un client affiche les services auxquels l'utilisateur a accès chez ce client.
// La sélection est mémorisée (localStorage) pour suivre l'utilisateur d'une page à l'autre.

const ETAB_CLIENTS = [
  {
    nom: "Hyatt Regency Paris Étoile",
    services: ["Hébergement", "Housekeeping", "Restauration"],
    chantiers: ["FLEXI HOTE/HOTESSE", "FLEXI BAGAGERIE", "FLEXI HOUSEKEEPING", "FLEXI BANQUET", "FLEXI SOUS-CHEF"]
  },
  {
    nom: "Hyatt Regency Paris Madeleine",
    services: ["Hébergement", "Restauration"],
    chantiers: ["FLEXI RECEPTION", "FLEXI BANQUET"]
  }
];

const ETAB_STORAGE_KEY = 'adaptel-client-selection';
let etabSelection = { client: 0, chantier: null }; // chantier = index dans client.chantiers, null = tout le client

try {
  const saved = JSON.parse(localStorage.getItem(ETAB_STORAGE_KEY));
  if (saved && ETAB_CLIENTS[saved.client] && (saved.chantier === null || ETAB_CLIENTS[saved.client].chantiers[saved.chantier])) etabSelection = saved;
} catch (e) {}

const ETAB_CHECK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-[#A63629] flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>`;

// Sélection courante exposée aux pages (ex. pré-remplir le chantier d'une nouvelle demande).
function getEtabSelection() {
  const c = ETAB_CLIENTS[etabSelection.client];
  return { client: c.nom, chantier: etabSelection.chantier === null ? null : c.chantiers[etabSelection.chantier], services: c.services };
}

function renderEtabMenu() {
  const menu = document.getElementById('etab-menu');
  if (!menu) return;
  menu.classList.remove('w-72');
  menu.classList.add('w-80');
  menu.innerHTML = `
    <p class="px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Vos clients et chantiers</p>
    ${ETAB_CLIENTS.map((c, ci) => {
      const clientActive = etabSelection.client === ci && etabSelection.chantier === null;
      return `
      <div class="${ci > 0 ? 'border-t border-gray-100 mt-1 pt-1' : ''}">
        <div class="relative group">
          <button type="button" onclick="setEtablissement(${ci}, null)" class="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center justify-between gap-2">
            <span class="min-w-0">
              <span class="block font-semibold truncate ${clientActive ? 'text-[#A63629]' : 'text-gray-800'}">${c.nom}</span>
              <span class="block text-[11px] text-gray-400">Tous les chantiers (${c.chantiers.length})</span>
            </span>
            ${clientActive ? ETAB_CHECK_ICON : ''}
          </button>
          <div class="hidden group-hover:block absolute left-full top-0 ml-2 w-60 bg-white rounded-xl shadow-xl border border-gray-200 p-3 z-40">
            <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Services accessibles</p>
            <div class="flex flex-wrap gap-1.5">
              ${c.services.map(s => `<span class="text-xs font-semibold text-[#A63629] bg-red-50 border border-[#A63629]/20 px-2 py-0.5 rounded-full">${s}</span>`).join('')}
            </div>
            <p class="text-[11px] text-gray-400 mt-2">Selon vos droits d'accès chez ce client.</p>
          </div>
        </div>
        ${c.chantiers.map((ch, chi) => {
          const active = etabSelection.client === ci && etabSelection.chantier === chi;
          return `
          <button type="button" onclick="setEtablissement(${ci}, ${chi})" class="w-full text-left pl-8 pr-4 py-1.5 text-xs hover:bg-gray-50 flex items-center justify-between gap-2">
            <span class="truncate ${active ? 'font-semibold text-[#A63629]' : 'text-gray-600'}">${ch}</span>
            ${active ? ETAB_CHECK_ICON : ''}
          </button>`;
        }).join('')}
      </div>`;
    }).join('')}`;
}

function renderEtabLabel() {
  const label = document.getElementById('etab-label');
  if (!label) return;
  const sel = getEtabSelection();
  label.innerHTML = sel.chantier
    ? `${sel.client} <span class="font-normal text-gray-400">/ ${sel.chantier}</span>`
    : sel.client;
}

// Remplace la version locale de chaque page : (index client, index chantier | null).
function setEtablissement(clientIndex, chantierIndex) {
  etabSelection = { client: clientIndex, chantier: chantierIndex };
  try { localStorage.setItem(ETAB_STORAGE_KEY, JSON.stringify(etabSelection)); } catch (e) {}
  renderEtabLabel();
  renderEtabMenu();
  document.getElementById('etab-menu').classList.add('hidden');
  document.dispatchEvent(new CustomEvent('etab-change', { detail: getEtabSelection() }));
}

renderEtabMenu();
renderEtabLabel();
