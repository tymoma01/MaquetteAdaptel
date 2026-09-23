/* Adaptel — Espace Intérimaire — assets partagés (maquette statique) */

/* ---------- Icônes (style lucide, tracées à la main pour la maquette) ---------- */
const ICONS = {
  home: '<path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  calendarDays: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  calendarCheck: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  euro: '<path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/>',
  fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  logOut: '<path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  clock: '<path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/>',
  checkBig: '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  fileCheck: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  search: '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
  funnel: '<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/>',
  layoutGrid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  list: '<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',
  mapPin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  buildingOffice: '<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  wallet: '<path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14a2 2 0 0 1 2 2v3h-5a2 2 0 0 0 0 4h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z"/><path d="M3 7v11a2 2 0 0 0 2 2h14"/>',
  phone: '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',
  externalLink: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  alertTriangle: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  circleAlert: '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
  car: '<path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L19 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/>',
  monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  shieldOff: '<path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"/><path d="M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38"/><path d="m2 2 20 20"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  upload: '<path d="M12 3v12"/><path d="m7 8 5-5 5 5"/><path d="M20.4 18a1 1 0 0 1-1 1H4.6a1 1 0 0 1-1-1"/>',
  smartphone: '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
  refresh: '<path d="M21 12a9 9 0 0 1-15.3 6.4L3 15"/><path d="M3 12a9 9 0 0 1 15.3-6.4L21 9"/><path d="M21 3v6h-6"/><path d="M3 21v-6h6"/>',
  eyeOff: '<path d="M10.7 5.1A9 9 0 0 1 21 12c0 .8-.1 1.5-.3 2.2"/><path d="M6.2 6.2C4 7.8 2.3 10 1.5 12c1.6 4.1 5.7 7 10.5 7 1.6 0 3.1-.3 4.4-.9"/><path d="M14.1 14.1a3 3 0 1 1-4.2-4.2"/><path d="m2 2 20 20"/>'
};
function icon(name, cls){
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls||'w-4 h-4'}" aria-hidden="true">${ICONS[name]||''}</svg>`;
}

/* ---------- Thème clair / sombre ---------- */
function initTheme(){
  const saved = localStorage.getItem('adaptel-interimaire-theme');
  const theme = saved === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  updateThemeIcon(theme);
}
function toggleTheme(){
  const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('adaptel-interimaire-theme', next);
  updateThemeIcon(next);
}
function updateThemeIcon(theme){
  const sun = document.getElementById('icon-sun');
  const moon = document.getElementById('icon-moon');
  if(!sun || !moon) return;
  sun.classList.toggle('hidden', theme === 'dark');
  moon.classList.toggle('hidden', theme !== 'dark');
}

/* ---------- Navigation ---------- */
const NAV_ITEMS = [
  { href: 'interimaire-dashboard.html', label: 'Accueil', icon: 'home', web: false },
  { href: 'interimaire-planning.html', label: 'Planning & missions', icon: 'calendar', web: false },
  { href: 'interimaire-disponibilites.html', label: 'Disponibilités', icon: 'calendarCheck', web: false },
  { href: 'interimaire-profil.html', label: 'Profil', icon: 'user', web: true },
  { href: 'interimaire-recettes.html', label: 'Recettes', icon: 'euro', web: true },
  { href: 'interimaire-administratif.html', label: 'Espace administratif', icon: 'fileText', web: true }
];
function renderNav(activeHref){
  const el = document.getElementById('main-nav');
  if(!el) return;
  el.innerHTML = NAV_ITEMS.map(item => `
    <a href="${item.href}" class="nav-pill ${item.href === activeHref ? 'active' : ''} flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap">
      ${icon(item.icon, 'w-4 h-4 flex-shrink-0')}
      <span>${item.label}</span>
      ${item.web ? '<span class="web-only-dot w-1.5 h-1.5 rounded-full flex-shrink-0" title="Disponible sur le web uniquement"></span>' : ''}
    </a>
  `).join('');
}

/* ---------- Données de démonstration ---------- */
const MISSIONS = [
  { id:'m1', statut:'proposee', qualification:'FLEXI SOUS-CHEF', etablissement:'Hyatt Regency Paris Étoile', dateDebut:'2026-09-28', dateFin:'2026-09-28', horaireDebut:'09:00', horaireFin:'17:00', lieu:'203 rue de Vaugirard, 75015 Paris', taux:13.10, tenue:'Tenue noire fournie sur place', consignes:'Se présenter à l’accueil du personnel 15 min avant le service.' },
  { id:'m2', statut:'proposee', qualification:'FLEXI HÔTE/HÔTESSE', etablissement:'Novotel Paris Vaugirard', dateDebut:'2026-10-03', dateFin:'2026-10-03', horaireDebut:'15:00', horaireFin:'23:00', lieu:'257 rue de Vaugirard, 75015 Paris', taux:12.50, tenue:'Tenue professionnelle sombre (non fournie)', consignes:'Accueil clientèle événementielle. Anglais courant requis.' },
  { id:'m3', statut:'validee', qualification:'CHEF DE RANG', etablissement:'Hyatt Regency Paris Étoile', dateDebut:'2026-10-04', dateFin:'2026-10-04', horaireDebut:'08:00', horaireFin:'17:00', lieu:'203 rue de Vaugirard, 75015 Paris', taux:12.31, tenue:'Tenue de service fournie par l’établissement', consignes:'Service petit-déjeuner puis banquet midi. Pointeuse badge n°4.' },
  { id:'m4', statut:'validee', qualification:'FLEXI HOUSEKEEPING', etablissement:'Hyatt Regency Paris Madeleine', dateDebut:'2026-09-30', dateFin:'2026-09-30', horaireDebut:'07:00', horaireFin:'15:00', lieu:'24 boulevard Malesherbes, 75008 Paris', taux:11.88, tenue:'Tenue technique fournie par Adaptel', consignes:'Chariot et matériel fournis. Passage obligatoire au local linge avant prise de poste.' },
  { id:'m5', statut:'validee', qualification:'FLEXI BANQUET', etablissement:'Hyatt Regency Paris Étoile', dateDebut:'2026-10-09', dateFin:'2026-10-09', horaireDebut:'18:00', horaireFin:'02:00', lieu:'203 rue de Vaugirard, 75015 Paris', taux:12.31, tenue:'Tenue noire fournie sur place', consignes:'Service soirée gala, 220 couverts.' },
  { id:'m6', statut:'validee', qualification:'FLEXI HOUSEKEEPING', etablissement:'Hyatt Regency Paris Madeleine', dateDebut:'2026-10-12', dateFin:'2026-10-12', horaireDebut:'07:00', horaireFin:'15:00', lieu:'24 boulevard Malesherbes, 75008 Paris', taux:11.88, tenue:'Tenue technique fournie par Adaptel', consignes:'' },
  { id:'m7', statut:'validee', qualification:'FLEXI SOUS-CHEF', etablissement:'Novotel Paris Vaugirard', dateDebut:'2026-10-15', dateFin:'2026-10-15', horaireDebut:'09:00', horaireFin:'17:00', lieu:'257 rue de Vaugirard, 75015 Paris', taux:13.10, tenue:'Tenue noire fournie sur place', consignes:'' },
  { id:'m8', statut:'terminee', qualification:'FLEXI HOUSEKEEPING', etablissement:'Hyatt Regency Paris Madeleine', dateDebut:'2026-09-16', dateFin:'2026-09-16', horaireDebut:'07:00', horaireFin:'15:00', lieu:'24 boulevard Malesherbes, 75008 Paris', taux:11.88, tenue:'Tenue technique fournie par Adaptel', consignes:'', releveValide:true, heuresValidees:'07:00–15:00', montant:95.04 },
  { id:'m9', statut:'terminee', qualification:'CHEF DE RANG', etablissement:'Hyatt Regency Paris Étoile', dateDebut:'2026-09-11', dateFin:'2026-09-11', horaireDebut:'08:00', horaireFin:'17:00', lieu:'203 rue de Vaugirard, 75015 Paris', taux:12.31, tenue:'Tenue de service fournie par l’établissement', consignes:'', releveValide:true, heuresValidees:'08:00–17:00', montant:110.79 },
  { id:'m10', statut:'terminee', qualification:'FLEXI BANQUET', etablissement:'Hyatt Regency Paris Étoile', dateDebut:'2026-09-04', dateFin:'2026-09-04', horaireDebut:'18:00', horaireFin:'02:00', lieu:'203 rue de Vaugirard, 75015 Paris', taux:12.31, tenue:'Tenue noire fournie sur place', consignes:'', releveValide:true, heuresValidees:'18:00–01:30', montant:92.33 },
  { id:'m11', statut:'terminee', qualification:'FLEXI HÔTE/HÔTESSE', etablissement:'Novotel Paris Vaugirard', dateDebut:'2026-08-27', dateFin:'2026-08-27', horaireDebut:'15:00', horaireFin:'23:00', lieu:'257 rue de Vaugirard, 75015 Paris', taux:12.50, tenue:'Tenue professionnelle sombre (non fournie)', consignes:'', releveValide:true, heuresValidees:'15:00–23:00', montant:100.00 },
  { id:'m12', statut:'annulee', qualification:'FLEXI SOUS-CHEF', etablissement:'Novotel Paris Vaugirard', dateDebut:'2026-09-20', dateFin:'2026-09-20', horaireDebut:'09:00', horaireFin:'17:00', lieu:'257 rue de Vaugirard, 75015 Paris', taux:13.10, tenue:'Tenue noire fournie sur place', consignes:'', annulePar:'Client' }
];

const STATUT_LABEL = { proposee:'Proposée', validee:'Confirmée', terminee:'Terminée', annulee:'Annulée' };

function formatDateFR(iso){
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('fr-FR', { weekday:'short', day:'numeric', month:'short', year:'numeric' }).replace('.', '');
}
function formatDateShortFR(iso){
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('fr-FR', { day:'numeric', month:'short' });
}
function euro(n){ return n.toLocaleString('fr-FR', { minimumFractionDigits:2, maximumFractionDigits:2 }) + ' €'; }

function statusBadge(statut){
  return `<span class="badge badge-${statut}">${STATUT_LABEL[statut]}</span>`;
}

/* ---------- Carte mission réutilisable ---------- */
function missionCardHTML(m, opts){
  opts = opts || {};
  const periode = m.dateDebut === m.dateFin ? formatDateFR(m.dateDebut) : `${formatDateShortFR(m.dateDebut)} → ${formatDateFR(m.dateFin)}`;
  const actionable = m.statut === 'proposee' && !opts.hideActions;
  return `
  <div class="card rounded-2xl p-5 hover:shadow-lg transition-all duration-200 cursor-pointer border-default" onclick="openMissionModal('${m.id}')">
    <div class="flex items-start justify-between gap-4 flex-wrap">
      <div class="flex items-start gap-4 flex-1 min-w-[220px]">
        <div class="p-3 rounded-2xl shrink-0" style="background:${m.statut === 'proposee' ? '#fef3c7' : m.statut === 'validee' ? '#d1fae5' : m.statut === 'terminee' ? '#ede9fe' : '#f3f4f6'}; color:${m.statut === 'proposee' ? '#92400e' : m.statut === 'validee' ? '#065f46' : m.statut === 'terminee' ? '#5b21b6' : '#6b7280'}">
          ${icon('briefcase', 'w-5 h-5')}
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <h3 class="text-base font-bold text-primary">${m.qualification}</h3>
            ${statusBadge(m.statut)}
          </div>
          <p class="text-sm text-secondary mb-1.5">${m.etablissement}</p>
          <div class="flex items-center gap-3 text-xs text-secondary flex-wrap">
            <span class="flex items-center gap-1">${icon('calendar','w-3.5 h-3.5')} ${periode}</span>
            <span class="flex items-center gap-1 font-medium" style="color:var(--brand-primary)">${icon('clock','w-3.5 h-3.5')} ${m.horaireDebut}→${m.horaireFin}</span>
            <span class="flex items-center gap-1 truncate max-w-[220px]">${icon('mapPin','w-3.5 h-3.5')} ${m.lieu}</span>
            <span class="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">${icon('euro','w-3.5 h-3.5')} ${m.taux.toFixed(2)} €/h</span>
          </div>
        </div>
      </div>
      ${actionable ? `
      <div class="flex items-center gap-2 shrink-0" onclick="event.stopPropagation()">
        <button onclick="respondMission('${m.id}', 'decline')" class="btn-ghost inline-flex items-center gap-1.5 h-9 px-3 rounded-lg text-xs font-semibold">${icon('x','w-3.5 h-3.5')} Décliner</button>
        <button onclick="respondMission('${m.id}', 'confirm')" class="btn-primary inline-flex items-center gap-1.5 h-9 px-3 rounded-lg text-xs font-semibold">${icon('check','w-3.5 h-3.5')} Confirmer</button>
      </div>` : `
      <div class="shrink-0 text-secondary">
        ${icon('chevronRight', 'w-5 h-5')}
      </div>`}
    </div>
  </div>`;
}

function respondMission(id, action){
  const m = MISSIONS.find(x => x.id === id);
  if(!m) return;
  if(action === 'confirm'){
    m.statut = 'validee';
    toast(`Mission "${m.qualification}" confirmée — elle apparaît maintenant dans votre planning.`, 'success');
  } else {
    m.statut = 'annulee';
    m.annulePar = 'Intérimaire';
    toast(`Mission "${m.qualification}" déclinée.`, 'default');
  }
  document.dispatchEvent(new CustomEvent('missions-updated'));
}

/* ---------- Modale détail mission ---------- */
function ensureMissionModal(){
  if(document.getElementById('mission-modal')) return;
  const div = document.createElement('div');
  div.id = 'mission-modal';
  div.className = 'fixed inset-0 z-[70] hidden items-center justify-center p-4 modal-overlay';
  div.innerHTML = `
    <div class="card rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden" onclick="event.stopPropagation()">
      <div class="brand-grad text-white px-6 py-5 flex items-start justify-between">
        <div>
          <p id="mm-statut" class="text-[11px] uppercase tracking-[0.2em] opacity-80 mb-1"></p>
          <h3 id="mm-titre" class="text-lg font-bold"></h3>
          <p id="mm-etab" class="text-sm opacity-90"></p>
        </div>
        <button onclick="closeMissionModal()" class="p-1.5 rounded-lg hover:bg-white/15">${icon('x','w-4 h-4')}</button>
      </div>
      <div class="p-6 space-y-4">
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div><p class="text-secondary text-xs mb-0.5">Période</p><p id="mm-periode" class="font-semibold text-primary"></p></div>
          <div><p class="text-secondary text-xs mb-0.5">Horaires</p><p id="mm-horaires" class="font-semibold text-primary"></p></div>
          <div class="col-span-2"><p class="text-secondary text-xs mb-0.5">Lieu de mission</p><p id="mm-lieu" class="font-semibold text-primary"></p></div>
          <div><p class="text-secondary text-xs mb-0.5">Qualification</p><p id="mm-qualif" class="font-semibold text-primary"></p></div>
          <div><p class="text-secondary text-xs mb-0.5">Taux horaire</p><p id="mm-taux" class="font-semibold text-emerald-600 dark:text-emerald-400"></p></div>
          <div class="col-span-2"><p class="text-secondary text-xs mb-0.5">Tenue</p><p id="mm-tenue" class="font-semibold text-primary"></p></div>
        </div>
        <div>
          <p class="text-secondary text-xs mb-1">Consignes de la qualification</p>
          <p id="mm-consignes" class="text-sm text-primary muted rounded-xl p-3"></p>
        </div>
        <div class="locked-field rounded-xl p-3 flex items-center gap-2 text-xs">
          ${icon('lock', 'w-3.5 h-3.5 flex-shrink-0')}
          <span>Motif de la commande : information interne réservée aux équipes Adaptel — non communiquée à l'intérimaire.</span>
        </div>
        <div id="mm-actions" class="flex items-center justify-end gap-2 pt-1"></div>
      </div>
    </div>`;
  document.body.appendChild(div);
  div.addEventListener('click', closeMissionModal);
}
function openMissionModal(id){
  ensureMissionModal();
  const m = MISSIONS.find(x => x.id === id);
  if(!m) return;
  const periode = m.dateDebut === m.dateFin ? formatDateFR(m.dateDebut) : `${formatDateShortFR(m.dateDebut)} → ${formatDateFR(m.dateFin)}`;
  document.getElementById('mm-statut').textContent = STATUT_LABEL[m.statut] + (m.statut === 'annulee' && m.annulePar ? ` · par ${m.annulePar}` : '');
  document.getElementById('mm-titre').textContent = m.qualification;
  document.getElementById('mm-etab').textContent = m.etablissement;
  document.getElementById('mm-periode').textContent = periode;
  document.getElementById('mm-horaires').textContent = `${m.horaireDebut} → ${m.horaireFin}`;
  document.getElementById('mm-lieu').textContent = m.lieu;
  document.getElementById('mm-qualif').textContent = m.qualification;
  document.getElementById('mm-taux').textContent = m.taux.toFixed(2) + ' €/h';
  document.getElementById('mm-tenue').textContent = m.tenue || 'Non communiquée';
  document.getElementById('mm-consignes').textContent = m.consignes && m.consignes.length ? m.consignes : 'Aucune consigne particulière transmise pour cette mission.';
  const actions = document.getElementById('mm-actions');
  if(m.statut === 'proposee'){
    actions.innerHTML = `
      <button onclick="respondMission('${m.id}','decline'); closeMissionModal();" class="btn-ghost inline-flex items-center gap-1.5 h-9 px-4 rounded-lg text-xs font-semibold">${icon('x','w-3.5 h-3.5')} Décliner</button>
      <button onclick="respondMission('${m.id}','confirm'); closeMissionModal();" class="btn-primary inline-flex items-center gap-1.5 h-9 px-4 rounded-lg text-xs font-semibold">${icon('check','w-3.5 h-3.5')} Confirmer ma disponibilité</button>`;
  } else {
    actions.innerHTML = '';
  }
  document.getElementById('mission-modal').classList.remove('hidden');
  document.getElementById('mission-modal').classList.add('flex');
}
function closeMissionModal(){
  const el = document.getElementById('mission-modal');
  if(el){ el.classList.add('hidden'); el.classList.remove('flex'); }
}

/* ---------- Toasts légers ---------- */
function toast(message, type){
  let host = document.getElementById('toast-host');
  if(!host){
    host = document.createElement('div');
    host.id = 'toast-host';
    host.className = 'fixed bottom-4 right-4 z-[90] flex flex-col gap-2 items-end';
    document.body.appendChild(host);
  }
  const el = document.createElement('div');
  el.className = 'card rounded-xl shadow-xl px-4 py-3 text-sm font-medium max-w-xs flex items-center gap-2 border-default';
  el.style.borderLeft = `4px solid ${type === 'success' ? '#10b981' : 'var(--brand-primary)'}`;
  el.innerHTML = (type === 'success' ? icon('check','w-4 h-4 text-emerald-500 flex-shrink-0') : icon('circleAlert','w-4 h-4 flex-shrink-0')) + `<span>${message}</span>`;
  host.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; setTimeout(() => el.remove(), 300); }, 3800);
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  const active = document.body.getAttribute('data-active-nav');
  if(active) renderNav(active);
});
