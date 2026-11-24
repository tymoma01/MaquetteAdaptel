// Maquette mobile — Espace client Adaptel : coque commune à tous les écrans.
// - cadre de téléphone (ordinateur) / plein écran (téléphone), barre du haut, barre d'onglets ;
// - sélecteur client / chantier en feuille du bas (même sélection que l'espace web : etab-selector.js) ;
// - feuilles, toasts, aperçu par rôle ;
// - données : on reprend les données de démo de l'espace web (../../client/assets/demo-data.js) et, pour
//   Hyatt Étoile, les lignes saisies à la main dans les pages web, pour que web et mobile racontent la même histoire.
// Les actions faites dans la maquette (relevé validé, note, annulation, nouvelle demande…) sont gardées dans le
// navigateur (localStorage) pour suivre d'un écran à l'autre.

tailwind.config = { theme: { extend: { colors: { brand: { DEFAULT: '#A63629', dark: '#8B2B1F' } } } } };

const App = {};

// ---------- Icônes (Lucide) ----------
const ICONS = {
  home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  clock: '<path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/>',
  euro: '<path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  minus: '<path d="M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  phone: '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  filter: '<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/>',
  pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>',
  building: '<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>',
  pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  logout: '<path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>',
  settings: '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  download: '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
  repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  sort: '<path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/>',
  list: '<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  sparkle: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
};
App.ic = (name, cls = 'w-5 h-5', extra = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}" ${extra}>${ICONS[name] || ''}</svg>`;

// ---------- Utilitaires ----------
App.esc = s => String(s ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
App.js = s => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
App.euros = (n, dec = 0) => n.toLocaleString('fr-FR', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + ' €';
App.plural = (n, mot, motPl) => `${n} ${n > 1 ? (motPl || mot + 's') : mot}`;
App.TODAY = new Date(2026, 8, 23);           // « aujourd'hui » de la démo, comme l'espace web
App.NOW = new Date(2026, 8, 23, 9, 0);
App.JOURS = ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'];
App.MOIS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
App.parseFr = s => { const [j, m, a] = s.split('/').map(Number); return new Date(a, m - 1, j); };
App.fmtFr = d => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
App.addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
App.jourLong = d => d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).replace(/^./, c => c.toUpperCase());
App.param = k => new URLSearchParams(location.search).get(k);

App.initials = nom => nom === '—' ? '?' : nom.split(' ').map(p => p.replace('.', '')[0] || '').join('').toUpperCase().slice(0, 2);
// Photo d'un intérimaire, par nom complet (« Léa Richard ») ou court (« L. Richard »).
App.photo = nom => {
  const i = DEMO_INTERIMAIRES.find(i => i.nom === nom || demoShortName(i.nom) === nom);
  return i ? i.photo : null;
};
App.avatar = (nom, size = 'w-10 h-10', text = 'text-xs') => {
  const fallback = `<div class="${size} rounded-full bg-gradient-to-br from-gray-500 to-gray-600 text-white ${text} font-bold flex items-center justify-center flex-shrink-0">${App.esc(App.initials(nom))}</div>`;
  const photo = nom !== '—' && App.photo(nom);
  if (!photo) return fallback;
  return `<img src="${photo}" alt="" class="${size} rounded-full object-cover flex-shrink-0 bg-gray-200" onerror="this.outerHTML=this.dataset.f" data-f="${App.esc(fallback)}">`;
};
App.badge = statut => {
  const m = DEMO_STATUTS[statut];
  return `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ${m.cls}">${m.label}</span>`;
};
App.RELEVE = {
  valide: { label: 'Validé', cls: 'bg-green-100 text-green-700', bar: '#16a34a' },
  a_valider: { label: 'À valider', cls: 'bg-amber-100 text-amber-700', bar: '#f59e0b' },
  a_venir: { label: 'À venir', cls: 'bg-blue-100 text-blue-700', bar: '#93c5fd' },
};
App.releveBadge = r => `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ${App.RELEVE[r].cls}">${App.RELEVE[r].label}</span>`;

// ---------- Utilisateur, interlocuteur ----------
App.USER = { nom: 'Thomas Yamini', prenom: 'Thomas', fonction: "Directeur d'exploitation", email: 'thomas.yamini@hyattparis.com' };
App.INTERLOCUTEUR = { nom: 'Julien Castex', fonction: 'Commercial grands comptes', email: 'j.castex@adaptel.fr', tel: '06 71 22 45 90', fixe: '01 53 58 30 30' };

// ---------- Rôle (aperçu) ----------
const ROLE_KEY = 'adaptel-mobile-role';
App.role = () => { try { return localStorage.getItem(ROLE_KEY) || 'Manager'; } catch (e) { return 'Manager'; } };
App.isPriv = () => App.role() !== 'Standard';
App.setRole = r => { try { localStorage.setItem(ROLE_KEY, r); } catch (e) {} location.reload(); };

// ---------- État de la maquette (actions de l'utilisateur) ----------
const ETAT_KEY = 'adaptel-mobile-etat';
App.etat = (() => { try { return JSON.parse(localStorage.getItem(ETAT_KEY)) || {}; } catch (e) { return {}; } })();
['releves', 'demandes', 'nouvelles', 'lus'].forEach(k => App.etat[k] = App.etat[k] || {});
App.save = () => { try { localStorage.setItem(ETAT_KEY, JSON.stringify(App.etat)); } catch (e) {} };
App.resetDemo = () => { try { localStorage.removeItem(ETAT_KEY); localStorage.removeItem('adaptel-favoris'); localStorage.removeItem('adaptel-derniere-demande'); } catch (e) {} location.reload(); };

// ---------- Sélection client / chantier ----------
App.sel = () => getEtabSelection();
App.scopeLabel = () => { const s = App.sel(); return s.chantier || 'Tous les chantiers'; };
App.setSelection = (clientIndex, chantierIndex) => {
  etabSelection = { client: clientIndex, chantier: chantierIndex };
  try { localStorage.setItem(ETAB_STORAGE_KEY, JSON.stringify(etabSelection)); } catch (e) {}
  App.closeSheet();
  App.renderAppbar();
  App.renderTabbar();
  document.dispatchEvent(new CustomEvent('etab-change', { detail: getEtabSelection() }));
};

// =====================================================================
// DONNÉES — reprises des pages web (Hyatt Étoile) et de demo-data.js
// =====================================================================
const DEMANDES_ETOILE = [
  { id: "DEM-1042", q: "Réceptionniste", chantier: "FLEXI HOTE/HOTESSE", dateISO: "2026-09-24", date: "24/09/2026", horaire: "15h–23h", debutISO: "2026-09-24T15:00:00", statut: "encours", capacite: 1, pourvus: 0, enAttente: 0, refuses: 0, taux: 14.5, lot: "LOT-118" },
  { id: "DEM-1043", q: "Réceptionniste", chantier: "FLEXI HOTE/HOTESSE", dateISO: "2026-09-25", date: "25/09/2026", horaire: "15h–23h", debutISO: "2026-09-25T15:00:00", statut: "encours", capacite: 1, pourvus: 0, enAttente: 1, refuses: 0, taux: 14.5, lot: "LOT-118" },
  { id: "DEM-1044", q: "Chef de rang", chantier: "FLEXI BANQUET", dateISO: "2026-09-26", date: "26/09/2026", horaire: "18h–02h", debutISO: "2026-09-26T18:00:00", statut: "encours", capacite: 2, pourvus: 0, enAttente: 0, refuses: 1, taux: 15.2, lot: null },
  { id: "DEM-1045", q: "Chef de rang", chantier: "FLEXI BANQUET", dateISO: "2026-09-27", date: "27/09/2026", horaire: "11h–15h / 18h30–23h", debutISO: "2026-09-27T11:00:00", statut: "encours", capacite: 2, pourvus: 1, enAttente: 0, refuses: 0, taux: 14.2, lot: null, interimaires: ["Marco De Luca"], motif: "Accroissement temporaire d'activité", justification: "Séminaire client — 180 couverts midi et soir" },
  { id: "DEM-1039", q: "Femme de chambre", chantier: "FLEXI HOUSEKEEPING", dateISO: "2026-09-23", date: "23/09/2026", horaire: "7h–15h", debutISO: "2026-09-23T07:00:00", statut: "staffee", capacite: 2, pourvus: 2, enAttente: 0, refuses: 0, taux: 13.8, lot: null, interimaires: ["Léa Richard", "Sofia Nguyen"] },
  { id: "DEM-1040", q: "Chef de rang", chantier: "FLEXI BANQUET", dateISO: "2026-09-23", date: "23/09/2026", horaire: "18h–02h", debutISO: "2026-09-23T18:00:00", statut: "staffee", capacite: 1, pourvus: 1, enAttente: 0, refuses: 0, taux: 15.2, lot: null, interimaires: ["Marco De Luca"], annulationDemandee: true, annulationDate: "22/09/2026 14:32", annulationMotif: "Événement reporté ou annulé" },
  { id: "DEM-1030", q: "Réceptionniste", chantier: "FLEXI HOTE/HOTESSE", dateISO: "2026-09-22", date: "22/09/2026", horaire: "7h–15h", debutISO: "2026-09-22T07:00:00", statut: "termine", capacite: 1, pourvus: 1, enAttente: 0, refuses: 0, taux: 14.5, lot: null, interimaires: ["Anna Pizzol"], notes: { "Anna Pizzol": 5 } },
  { id: "DEM-1031", q: "Femme de chambre", chantier: "FLEXI HOUSEKEEPING", dateISO: "2026-09-22", date: "22/09/2026", horaire: "9h–17h", debutISO: "2026-09-22T09:00:00", statut: "termine", capacite: 2, pourvus: 2, enAttente: 0, refuses: 0, taux: 13.0, lot: null, interimaires: ["Léa Richard", "Sofia Nguyen"], notes: { "Léa Richard": 4 } },
  { id: "DEM-1029", q: "Réceptionniste", chantier: "FLEXI HOTE/HOTESSE", dateISO: "2026-09-21", date: "21/09/2026", horaire: "7h–15h", debutISO: "2026-09-21T07:00:00", statut: "termine", capacite: 1, pourvus: 1, enAttente: 0, refuses: 0, taux: 14.5, lot: null, interimaires: ["Anna Pizzol"] },
  { id: "DEM-1021", q: "Commis de cuisine", chantier: "FLEXI SOUS-CHEF", dateISO: "2026-09-19", date: "19/09/2026", horaire: "9h–17h", debutISO: "2026-09-19T09:00:00", statut: "termine", capacite: 1, pourvus: 1, enAttente: 0, refuses: 0, taux: 16.0, lot: null, interimaires: ["Julien Martin"], notes: { "Julien Martin": 4 } },
  { id: "DEM-1018", q: "Bagagiste", chantier: "FLEXI BAGAGERIE", dateISO: "2026-09-20", date: "20/09/2026", horaire: "7h–15h", debutISO: "2026-09-20T07:00:00", statut: "annulee", capacite: 1, pourvus: 0, enAttente: 0, refuses: 0, taux: 13.5, lot: null, annulationMotif: "Besoin couvert en interne" }
].map(d => ({ ...d, lieu: DEMO_HAND_CLIENT }));

const RELEVES_ETOILE = [
  { nom: "Anna Pizzol", q: "Réceptionniste", chantier: "FLEXI HOTE/HOTESSE", date: "22/09/2026", prevu: "7h00", debut: "06:55", fin: "15:30", pause: 30, statut: "valide" },
  { nom: "Anna Pizzol", q: "Réceptionniste", chantier: "FLEXI HOTE/HOTESSE", date: "21/09/2026", prevu: "7h00", debut: "07:00", fin: "14:30", pause: 30, statut: "a_valider" },
  { nom: "Julien Martin", q: "Commis de cuisine", chantier: "FLEXI SOUS-CHEF", date: "19/09/2026", prevu: "7h30", debut: "07:00", fin: "15:00", pause: 30, statut: "valide" },
  { nom: "Léa Richard", q: "Femme de chambre", chantier: "FLEXI HOUSEKEEPING", date: "22/09/2026", prevu: "7h30", debut: "08:00", fin: "16:15", pause: 30, statut: "a_valider" },
  { nom: "Léa Richard", q: "Femme de chambre", chantier: "FLEXI HOUSEKEEPING", date: "21/09/2026", prevu: "7h30", debut: "08:00", fin: "16:00", pause: 30, statut: "a_valider" },
  { nom: "Marco De Luca", q: "Chef de rang", chantier: "FLEXI BANQUET", date: "20/09/2026", prevu: "7h30", debut: "11:00", fin: "19:20", pause: 30, statut: "a_valider" },
  { nom: "Karim Traoré", q: "Bagagiste", chantier: "FLEXI BAGAGERIE", date: "19/09/2026", prevu: "7h30", debut: "07:00", fin: "15:00", pause: 30, statut: "valide" }
];

const DEPENSES_ETOILE = [
  { id: "DEM-1039", q: "Femme de chambre", chantier: "FLEXI HOUSEKEEPING", date: "23/09/2026", heures: 16, taux: 13.8, montant: 220.8, releve: "a_valider" },
  { id: "DEM-1035", q: "Femme de chambre", chantier: "FLEXI HOUSEKEEPING", date: "18/09/2026", heures: 60, taux: 13.8, montant: 828.0, releve: "valide" },
  { id: "DEM-1040", q: "Chef de rang", chantier: "FLEXI BANQUET", date: "23/09/2026", heures: 8, taux: 15.2, montant: 121.6, releve: "a_valider" },
  { id: "DEM-1033", q: "Chef de rang", chantier: "FLEXI BANQUET", date: "17/09/2026", heures: 120, taux: 15.2, montant: 1824.0, releve: "valide" },
  { id: "DEM-1021", q: "Commis de cuisine", chantier: "FLEXI SOUS-CHEF", date: "19/09/2026", heures: 60, taux: 16.0, montant: 960.0, releve: "valide" },
  { id: "DEM-1030", q: "Réceptionniste", chantier: "FLEXI HOTE/HOTESSE", date: "22/09/2026", heures: 100, taux: 14.5, montant: 1450.0, releve: "a_valider" },
  { id: "DEM-1029", q: "Réceptionniste", chantier: "FLEXI HOTE/HOTESSE", date: "21/09/2026", heures: 60, taux: 14.5, montant: 870.0, releve: "a_valider" },
  { id: "DEM-1018", q: "Bagagiste", chantier: "FLEXI BAGAGERIE", date: "20/09/2026", heures: 80, taux: 13.5, montant: 1080.0, releve: "a_valider" },
  { id: "DEM-1012", q: "Veilleur de nuit", chantier: "FLEXI HOTE/HOTESSE", date: "15/09/2026", heures: 50, taux: 13.0, montant: 650.0, releve: "valide" },
  { id: "DEM-1005", q: "EMPLOYE POLYVALENT", chantier: "FLEXI BANQUET", date: "10/09/2026", heures: 90, taux: 13.9, montant: 1251.0, releve: "valide" },
  { id: "DEM-1043", q: "Chef de rang", chantier: "FLEXI BANQUET", date: "26/09/2026", heures: 48, taux: 15.2, montant: 729.6, releve: "a_venir" },
  { id: "DEM-1044", q: "Femme de chambre", chantier: "FLEXI HOUSEKEEPING", date: "25/09/2026", heures: 32, taux: 13.8, montant: 441.6, releve: "a_venir" },
  { id: "DEM-1046", q: "Réceptionniste", chantier: "FLEXI HOTE/HOTESSE", date: "28/09/2026", heures: 40, taux: 14.5, montant: 580.0, releve: "a_venir" },
  { id: "DEM-1047", q: "Commis de cuisine", chantier: "FLEXI SOUS-CHEF", date: "30/09/2026", heures: 24, taux: 16.0, montant: 384.0, releve: "a_venir" }
];

// Planning de la semaine du 21 au 27/09 (day = 0 lundi … 6 dimanche ; aujourd'hui = mercredi, day 2).
const PLANNING_ETOILE = (() => {
  const M = [
    ["FLEXI HOTE/HOTESSE", 1, "A. Pizzol", "Réceptionniste", "7h–15h", "validee"],
    ["FLEXI HOTE/HOTESSE", 2, "A. Pizzol", "Réceptionniste", "7h–15h", "validee"],
    ["FLEXI HOTE/HOTESSE", 3, "A. Pizzol", "Réceptionniste", "15h–23h", "staffee"],
    ["FLEXI HOTE/HOTESSE", 4, "—", "Réceptionniste", "15h–23h", "encours"],
    ["FLEXI BAGAGERIE", 2, "K. Traoré", "Bagagiste", "7h–15h", "validee"],
    ["FLEXI BAGAGERIE", 4, "K. Traoré", "Bagagiste", "7h–15h", "validee"],
    ["FLEXI HOUSEKEEPING", 0, "L. Richard", "Femme de chambre", "7h–15h", "termine"],
    ["FLEXI HOUSEKEEPING", 1, "L. Richard", "Femme de chambre", "7h–15h", "termine"],
    ["FLEXI HOUSEKEEPING", 2, "L. Richard", "Femme de chambre", "7h–15h", "validee", true],
    ["FLEXI HOUSEKEEPING", 3, "L. Richard", "Femme de chambre", "7h–15h", "validee", true],
    ["FLEXI HOUSEKEEPING", 4, "S. Nguyen", "Femme de chambre", "9h–17h", "staffee"],
    ["FLEXI BANQUET", 2, "M. De Luca", "Chef de rang", "18h–02h", "staffee"],
    ["FLEXI BANQUET", 4, "M. De Luca", "Chef de rang", "18h–02h", "validee"],
    ["FLEXI BANQUET", 5, "—", "Chef de rang", "18h–02h", "encours"],
    ["FLEXI SOUS-CHEF", 4, "J. Martin", "Commis de cuisine", "9h–17h", "validee"],
    ["FLEXI SOUS-CHEF", 5, "J. Martin", "Commis de cuisine", "9h–17h", "validee"],
  ].map(([chantier, day, nom, q, horaire, statut, heuresup]) => ({ chantier, day, nom, q, horaire, statut, heuresup: !!heuresup }));
  return ETAB_CLIENTS[0].chantiers.map(ch => ({ chantier: ch, label: ch, missions: M.filter(m => m.chantier === ch) }));
})();

const INTERIMAIRES_ETOILE = [
  { nom: "Marco De Luca", quals: ["Chef de rang"], chantier: "FLEXI BANQUET", missions: ["23/09/2026", "20/09/2026", "17/09/2026"], enMission: true },
  { nom: "Léa Richard", quals: ["Femme de chambre"], chantier: "FLEXI HOUSEKEEPING", missions: ["22/09/2026", "21/09/2026", "18/09/2026", "15/09/2026"], enMission: true },
  { nom: "Anna Pizzol", quals: ["Réceptionniste"], chantier: "FLEXI HOTE/HOTESSE", missions: ["23/09/2026", "22/09/2026", "21/09/2026"], enMission: true },
  { nom: "Julie Bernard", quals: ["Veilleur de nuit"], chantier: "FLEXI HOTE/HOTESSE", missions: ["18/09/2026"], enMission: false },
  { nom: "Karim Traoré", quals: ["Bagagiste"], chantier: "FLEXI BAGAGERIE", missions: ["20/09/2026", "19/09/2026"], enMission: false },
  { nom: "Julien Martin", quals: ["Commis de cuisine"], chantier: "FLEXI SOUS-CHEF", missions: ["19/09/2026"], enMission: false },
  { nom: "Sofia Nguyen", quals: ["Femme de chambre"], chantier: "FLEXI HOUSEKEEPING", missions: ["21/09/2026", "14/09/2026"], enMission: false }
];

const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
App.dureeMin = (debut, fin, pause) => { let d = toMin(fin) - toMin(debut); if (d <= 0) d += 1440; return d - (Number(pause) || 0); };
App.fmtDuree = min => `${Math.floor(min / 60)}h${String(min % 60).padStart(2, '0')}`;
App.fmtH = h => { const hh = Math.floor(h), mm = Math.round((h - hh) * 60); return mm ? `${hh}h${String(mm).padStart(2, '0')}` : `${hh}h`; };

App.data = {
  // Demandes du client / chantier choisi, + celles créées dans la maquette, avec les actions faites (notes, annulations).
  demandes(tousChantiers = false) {
    const sel = App.sel();
    const nouvelles = (App.etat.nouvelles[sel.client] || []).filter(d => tousChantiers || !sel.chantier || d.chantier === sel.chantier);
    return [...nouvelles, ...demoRows('demandes', DEMANDES_ETOILE, demoDemandes, tousChantiers)]
      .map(d => ({ ...d, ...(App.etat.demandes[d.id] || {}) }));
  },
  demande(id) {
    return App.data.demandes(true).find(d => d.id === id);
  },
  majDemande(id, champs) {
    App.etat.demandes[id] = { ...(App.etat.demandes[id] || {}), ...champs };
    App.save();
  },
  releves() {
    return demoRows('releves', RELEVES_ETOILE, (chantier, rand, profil) =>
      profil.interimaires.flatMap(i => Array.from({ length: demoInt(rand, 1, 2) }, () => {
        const h = demoPick(rand, i.q.horaires);
        const hhmm = m => { m = (m + 1440) % 1440; return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`; };
        return {
          nom: i.nom, q: i.q.nom, chantier, date: demoDate(rand, 14, 22),
          prevu: App.fmtDuree(App.dureeMin(h.debut, h.fin, h.pause)),
          debut: hhmm(toMin(h.debut) + demoPick(rand, [-10, -5, 0, 0, 5, 15])),
          fin: hhmm(toMin(h.fin) + demoPick(rand, [-30, 0, 0, 10, 20, 45])),
          pause: h.pause, statut: rand() < 0.5 ? "a_valider" : "valide"
        };
      })))
      .map(r => { const key = `${App.sel().client}|${r.nom}|${r.chantier}|${r.date}`; return { ...r, key, ...(App.etat.releves[key] || {}) }; })
      .sort((a, b) => App.parseFr(b.date) - App.parseFr(a.date));
  },
  majReleve(key, champs) {
    App.etat.releves[key] = { ...(App.etat.releves[key] || {}), ...champs };
    App.save();
  },
  depenses() {
    // Une dépense « à valider » dont tous les relevés ont été validés dans la maquette passe en « validé ».
    const releves = App.data.releves();
    return demoRows('depenses', DEPENSES_ETOILE, demoDepenses).map(d => {
      if (d.releve !== 'a_valider') return d;
      const lies = releves.filter(r => r.date === d.date && r.q === d.q && r.chantier === d.chantier);
      return lies.length && lies.every(r => r.statut === 'valide') ? { ...d, releve: 'valide' } : d;
    });
  },
  planning() {
    return demoRows('planning', PLANNING_ETOILE, demoPlanning);
  },
  interimaires() {
    const TODAY = App.TODAY;
    const lignes = demoRows('interimaires', INTERIMAIRES_ETOILE, (chantier, rand, profil) =>
      profil.interimaires.map(i => ({
        nom: i.nom, quals: [i.q.nom], chantier,
        missions: [...new Set(Array.from({ length: demoInt(rand, 1, 3) }, () => demoInt(rand, 0, 13)))]
          .sort((a, b) => a - b).map(n => App.fmtFr(App.addDays(TODAY, -n))),
        enMission: rand() < 0.1
      })));
    const parNom = {};
    lignes.forEach(r => {
      const p = parNom[r.nom] || (parNom[r.nom] = { nom: r.nom, lignes: [], missions: [] });
      p.lignes.push(r);
      r.missions.forEach(date => p.missions.push({ date, chantier: r.chantier, q: r.quals[0] }));
    });
    return Object.values(parNom).map(p => {
      p.missions.sort((a, b) => App.parseFr(b.date) - App.parseFr(a.date));
      return { ...p, quals: [...new Set(p.missions.map(m => m.q))], derniere: p.missions[0].date, favori: demoEstFavori(p.nom), enMission: p.lignes.some(r => r.enMission) };
    });
  },
  // Contrats de mise à disposition en attente de signature sur Coffreo (démo : une mission pourvue sur deux,
  // un contrat par intérimaire). À signer sous 2 jours ouvrés après le début de la mission.
  // Tous chantiers du client : Coffreo est au niveau du client, la liste ne doit pas dépendre du chantier choisi.
  signatures() {
    return this.demandes(true)
      .filter(d => ['staffee', 'termine'].includes(d.statut) && (d.interimaires || []).length && !d.annulationDemandee && d.dateISO >= '2026-09-16')
      .sort((a, b) => a.dateISO.localeCompare(b.dateISO))
      .filter((d, i) => i % 2 === 0)
      .flatMap(d => d.interimaires.map(nom => ({ id: d.id, nom, q: d.q, chantier: d.chantier, date: d.date, urgent: App.parseFr(d.date) < App.addDays(App.TODAY, -1) })));
  },
};

// Notifications reçues (boîte de réception de l'application).
App.NOTIFS = [
  { id: 'n1', type: 'alert', titre: 'Retard signalé', texte: "Léa Richard signale un retard de 15 min sur sa mission Femme de chambre (FLEXI HOUSEKEEPING).", quand: "Il y a 12 min", lien: 'planning.html' },
  { id: 'n2', type: 'clock', titre: 'Relevés à valider', texte: "4 relevés d'heures attendent votre validation, dont 2 de la semaine dernière.", quand: "Ce matin, 8h00", lien: 'releves.html' },
  { id: 'n3', type: 'check', titre: 'Demande pourvue', texte: "DEM-1039 · Femme de chambre du 23/09 : 2 intérimaires positionnés.", quand: "Hier, 17h42", lien: 'demande.html?id=DEM-1039' },
  { id: 'n4', type: 'briefcase', titre: "Demande d'annulation reçue", texte: "Votre demande d'annulation de DEM-1040 a été transmise à Adaptel. Réponse sous 24h.", quand: "Hier, 14h32", lien: 'demande.html?id=DEM-1040' },
  { id: 'n5', type: 'star', titre: 'Mission à noter', texte: "La mission de Sofia Nguyen (22/09) n'est pas encore notée.", quand: "22/09, 18h00", lien: 'demande.html?id=DEM-1031' },
  { id: 'n6', type: 'chat', titre: 'Réponse du support', texte: "Le service administratif a répondu à votre question sur la facture d'août.", quand: "21/09, 11h05", lien: 'support.html' },
];
App.nbNonLues = () => App.NOTIFS.filter(n => !App.etat.lus[n.id]).length;

// =====================================================================
// COQUE
// =====================================================================
const TABS = [
  { id: 'accueil', label: 'Accueil', icon: 'home', href: 'index.html' },
  { id: 'planning', label: 'Planning', icon: 'calendar', href: 'planning.html' },
  { id: 'demandes', label: 'Demandes', icon: 'briefcase', href: 'demandes.html' },
  { id: 'releves', label: 'Relevés', icon: 'clock', href: 'releves.html' },
  { id: 'depenses', label: 'Dépenses', icon: 'euro', href: 'depenses.html' },
];

// Sommaire affiché à côté du téléphone (ordinateur uniquement) — pour parcourir la maquette.
const SOMMAIRE = [
  ['Onglets', [['index.html', 'Accueil'], ['planning.html', 'Planning'], ['demandes.html', 'Demandes'], ['releves.html', "Relevés d'heures"], ['depenses.html', 'Dépenses prévisionnelles']]],
  ['Parcours', [['nouvelle-demande.html', 'Faire une demande'], ['demande.html?id=DEM-1031', 'Fiche demande (à noter)'], ['demande.html?id=DEM-1044', 'Fiche demande (annulable)'], ['accident.html', 'Déclarer un accident']]],
  ['Menu', [['menu.html', 'Menu & compte'], ['interimaires.html', 'Intérimaires'], ['notifications.html', 'Notifications'], ['support.html', 'Messagerie support'], ['fiches.html', 'Fiches de liaison']]],
];

App.opts = {};
App.mount = (opts = {}) => {
  App.opts = opts;
  const page = document.getElementById('page');
  const current = location.pathname.split('/').pop() + location.search;
  const role = App.role();

  const stage = document.createElement('div');
  stage.className = 'stage';
  stage.innerHTML = `
    <aside class="desk">
      <p class="text-2xl font-light text-brand tracking-tight">Adaptel</p>
      <p class="text-xs text-gray-500 uppercase tracking-wider font-semibold">Maquette application mobile · Client</p>
      <p class="text-sm text-gray-600 mt-4 leading-relaxed">Reprise de l'espace client web en application mobile. Les paramètres d'administration (qualifications, utilisateurs, rôles) restent sur l'espace web.</p>
      <div class="mt-5">
        <p class="label mb-2">Aperçu rôle</p>
        <div class="flex gap-1.5 bg-white rounded-xl p-1 border border-gray-200">
          ${['Admin', 'Manager', 'Standard'].map(r => `<button onclick="App.setRole('${r}')" class="flex-1 h-8 rounded-lg text-xs font-bold ${r === role ? 'brand-grad text-white' : 'text-gray-600 hover:bg-gray-50'}">${r}</button>`).join('')}
        </div>
      </div>
      <nav class="mt-5 space-y-4">
        ${SOMMAIRE.map(([titre, liens]) => `
          <div>
            <p class="label mb-1.5">${titre}</p>
            ${liens.map(([href, l]) => `<a href="${href}" class="block px-3 py-1.5 rounded-lg text-sm ${href === current || (href === 'index.html' && current === '') ? 'bg-white font-bold text-brand shadow-sm' : 'text-gray-700 hover:bg-white/70'}">${l}</a>`).join('')}
          </div>`).join('')}
      </nav>
      <button onclick="App.resetDemo()" class="mt-5 text-xs text-gray-500 underline hover:text-brand">Réinitialiser les données de la démo</button>
    </aside>
    <div class="phone" id="phone">
      <div class="statusbar"><span>9:41</span><span class="flex items-center gap-1.5 text-xs">●●●● 5G <span class="inline-block w-6 h-3 rounded-sm border border-gray-900 relative"><span class="absolute inset-[1px] right-[5px] bg-gray-900 rounded-[1px]"></span></span></span></div>
      <header class="appbar" id="appbar"></header>
      <main class="scroll" id="scroll"></main>
      ${opts.tab ? `<nav class="tabbar" id="tabbar"></nav>` : ''}
      <div id="toast" class="toast"></div>
    </div>`;
  document.body.prepend(stage);
  const scroll = stage.querySelector('#scroll');
  if (page) { scroll.appendChild(page); page.hidden = false; }
  if (opts.fab) {
    const fab = document.createElement('a');
    fab.href = opts.fab.href;
    fab.className = `fab brand-grad press ${opts.tab ? '' : 'no-tabbar'}`;
    fab.innerHTML = `${App.ic('plus', 'w-5 h-5')}${opts.fab.label}`;
    stage.querySelector('#phone').appendChild(fab);
  }
  App.renderAppbar();
  App.renderTabbar();
};

App.renderTabbar = () => {
  const bar = document.getElementById('tabbar');
  if (!bar) return;
  const nbReleves = App.data.releves().filter(r => r.statut === 'a_valider').length;
  bar.innerHTML = TABS.map(t => {
    const locked = t.id === 'depenses' && !App.isPriv();
    const dot = t.id === 'releves' && nbReleves ? `<span class="dot">${nbReleves}</span>` : '';
    return `<a href="${t.href}" class="tab ${App.opts.tab === t.id ? 'active' : ''} ${locked ? 'opacity-40' : ''}">
      ${App.ic(locked ? 'lock' : t.icon, 'w-[22px] h-[22px]')}${dot}<span>${t.label}</span></a>`;
  }).join('');
};

// Barre du haut : sélecteur client / chantier sur les onglets, titre + retour sur les écrans secondaires.
App.renderAppbar = () => {
  const bar = document.getElementById('appbar');
  if (!bar) return;
  const o = App.opts;
  const nb = App.nbNonLues();
  const bell = `<a href="notifications.html" class="relative w-10 h-10 rounded-full flex items-center justify-center text-gray-700 active:bg-gray-100" aria-label="Notifications">
      ${App.ic('bell', 'w-[22px] h-[22px]')}
      ${nb ? `<span class="absolute top-1 right-1 min-w-[16px] h-4 px-1 rounded-full bg-brand text-white text-[9.5px] font-bold flex items-center justify-center border-2 border-white">${nb}</span>` : ''}
    </a>`;
  if (o.tab) {
    const s = App.sel();
    bar.innerHTML = `
      <div class="flex items-center gap-1 pl-3 pr-2 h-14">
        <button onclick="App.openSitePicker()" class="flex-1 min-w-0 flex items-center gap-2 text-left px-1 py-1 rounded-xl active:bg-gray-100">
          <span class="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">${App.ic('building', 'w-[18px] h-[18px]')}</span>
          <span class="min-w-0">
            <span class="block text-[13.5px] font-bold text-gray-900 truncate leading-tight">${App.esc(s.client)}</span>
            <span class="flex items-center gap-1 text-[12px] ${s.chantier ? 'text-brand font-semibold' : 'text-gray-500'} leading-tight"><span class="truncate">${App.esc(App.scopeLabel())}</span>${App.ic('down', 'w-3.5 h-3.5 flex-shrink-0')}</span>
          </span>
        </button>
        ${bell}
        <a href="menu.html" class="w-9 h-9 rounded-full brand-grad text-white text-xs font-bold flex items-center justify-center ml-1" aria-label="Menu et compte">TY</a>
      </div>`;
  } else {
    bar.innerHTML = `
      <div class="flex items-center gap-1 px-2 h-14">
        <a href="${o.back || 'index.html'}" ${o.backJs ? `onclick="${o.backJs}; return false;"` : ''} class="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 active:bg-gray-100" aria-label="Retour">${App.ic('left', 'w-6 h-6')}</a>
        <div class="flex-1 min-w-0">
          <p class="text-[16px] font-bold text-gray-900 truncate leading-tight" id="appbar-title">${App.esc(o.title || '')}</p>
          ${o.subtitle ? `<p class="text-[12px] text-gray-500 truncate leading-tight" id="appbar-sub">${App.esc(o.subtitle)}</p>` : ''}
        </div>
        ${o.right || ''}
      </div>`;
  }
};

// ---------- Feuille du bas ----------
let sheetStack = [];
App.sheet = ({ title, subtitle, body, footer, full = false, onClose } = {}) => {
  const phone = document.getElementById('phone');
  const back = document.createElement('div');
  back.className = 'sheet-backdrop';
  const sh = document.createElement('div');
  sh.className = `sheet ${full ? 'full' : ''}`;
  sh.innerHTML = `
    ${full ? '' : '<div class="sheet-grip"></div>'}
    ${title ? `<div class="flex items-start gap-2 px-5 ${full ? 'pt-4' : 'pt-3'} pb-3">
      <div class="flex-1 min-w-0"><h3 class="text-[17px] font-bold text-gray-900 leading-snug">${title}</h3>${subtitle ? `<p class="text-[13px] text-gray-500 mt-0.5">${subtitle}</p>` : ''}</div>
      <button onclick="App.closeSheet()" class="w-9 h-9 -mr-2 rounded-full flex items-center justify-center text-gray-500 active:bg-gray-100" aria-label="Fermer">${App.ic('x', 'w-5 h-5')}</button>
    </div>` : ''}
    <div class="sheet-body px-5 pb-4">${body || ''}</div>
    ${footer ? `<div class="px-5 pt-3 pb-5 border-t border-gray-100 bg-white">${footer}</div>` : ''}`;
  back.onclick = () => App.closeSheet();
  phone.append(back, sh);
  requestAnimationFrame(() => { back.classList.add('open'); sh.classList.add('open'); });
  sheetStack.push({ back, sh, onClose });
  return sh;
};
App.closeSheet = () => {
  const s = sheetStack.pop();
  if (!s) return;
  s.back.classList.remove('open'); s.sh.classList.remove('open');
  setTimeout(() => { s.back.remove(); s.sh.remove(); }, 250);
  if (s.onClose) s.onClose();
};

// ---------- Toast ----------
let toastTimer;
App.toast = (msg, type = 'ok') => {
  const t = document.getElementById('toast');
  t.className = `toast ${type === 'ok' ? 'bg-green-600' : type === 'warn' ? 'bg-amber-600' : 'bg-gray-900'}`;
  t.innerHTML = `${App.ic(type === 'ok' ? 'checkCircle' : 'info', 'w-5 h-5 flex-shrink-0')}<span>${msg}</span>`;
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
};

// ---------- Sélecteur client / chantier ----------
App.openSitePicker = () => {
  const sh = App.sheet({
    title: 'Établissement',
    subtitle: "Toutes les données de l'application suivent ce choix",
    body: `
      <div class="hscroll -mx-5 px-5 pb-3" id="sp-clients"></div>
      <div class="relative mb-2">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">${App.ic('search', 'w-4 h-4')}</span>
        <input id="sp-search" type="search" autocomplete="off" placeholder="Rechercher un chantier…" class="field pl-9 !h-11 !text-[14px]">
      </div>
      <p id="sp-count" class="text-[11.5px] text-gray-400 mb-1 px-1"></p>
      <div id="sp-list" class="-mx-2"></div>`,
  });
  let clientIdx = etabSelection.client;
  const render = () => {
    sh.querySelector('#sp-clients').innerHTML = ETAB_CLIENTS.map((c, i) =>
      `<button class="chip ${i === clientIdx ? 'active' : ''}" data-c="${i}">${App.esc(c.nom)}</button>`).join('');
    sh.querySelectorAll('[data-c]').forEach(b => b.onclick = () => { clientIdx = Number(b.dataset.c); sh.querySelector('#sp-search').value = ''; render(); });
    const client = ETAB_CLIENTS[clientIdx];
    const q = etabNormalize(sh.querySelector('#sp-search').value.trim());
    const matches = client.chantiers.map((nom, i) => ({ nom, i })).filter(c => !q || etabNormalize(c.nom).includes(q));
    const actif = i => clientIdx === etabSelection.client && etabSelection.chantier === i;
    const row = (i, label, sub) => `
      <button class="row-link w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left" onclick="App.setSelection(${clientIdx}, ${i})">
        <span class="w-8 h-8 rounded-lg ${actif(i) ? 'bg-brand text-white' : 'bg-gray-100 text-gray-500'} flex items-center justify-center flex-shrink-0">${App.ic(i === null ? 'building' : 'pin', 'w-4 h-4')}</span>
        <span class="flex-1 min-w-0"><span class="block text-[14px] truncate ${actif(i) ? 'font-bold text-brand' : 'font-semibold text-gray-800'}">${label}</span>${sub ? `<span class="block text-[11.5px] text-gray-400">${sub}</span>` : ''}</span>
        ${actif(i) ? App.ic('check', 'w-5 h-5 text-brand') : ''}
      </button>`;
    sh.querySelector('#sp-count').textContent = q ? `${matches.length} chantier(s) sur ${client.chantiers.length}` : `${client.chantiers.length} chantier(s)`;
    sh.querySelector('#sp-list').innerHTML =
      (q ? '' : row(null, 'Tous les chantiers', 'Vue consolidée du client')) +
      matches.map(c => row(c.i, App.esc(c.nom))).join('') +
      (matches.length ? '' : `<p class="text-center text-sm text-gray-400 py-8">Aucun chantier ne correspond.</p>`);
  };
  sh.querySelector('#sp-search').oninput = render;
  render();
};

// ---------- Étoiles ----------
App.stars = (value, onPick, size = 'w-8 h-8') => {
  const wrap = document.createElement('div');
  wrap.className = 'flex gap-1';
  for (let i = 1; i <= 5; i++) {
    const b = document.createElement(onPick ? 'button' : 'span');
    b.innerHTML = App.ic('star', `${size} ${i <= value ? 'text-amber-400' : 'text-gray-200'}`, `fill="currentColor"`);
    if (onPick) { b.type = 'button'; b.onclick = () => onPick(i); b.setAttribute('aria-label', `${i} sur 5`); }
    wrap.appendChild(b);
  }
  return wrap;
};

// Appeler l'interlocuteur (feuille d'action).
App.contactSheet = () => {
  const i = App.INTERLOCUTEUR;
  App.sheet({
    title: 'Votre interlocuteur Adaptel',
    body: `
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 rounded-full brand-grad text-white font-bold flex items-center justify-center">JC</div>
        <div><p class="font-bold text-gray-900">${i.nom}</p><p class="text-sm text-gray-500">${i.fonction}</p></div>
      </div>
      <div class="space-y-2">
        <a href="tel:${i.tel.replace(/ /g, '')}" class="btn btn-primary w-full">${App.ic('phone', 'w-5 h-5')}Appeler le ${i.tel}</a>
        <a href="tel:${i.fixe.replace(/ /g, '')}" class="btn btn-outline w-full">${App.ic('phone', 'w-5 h-5')}Agence · ${i.fixe}</a>
        <a href="support.html" class="btn btn-outline w-full">${App.ic('chat', 'w-5 h-5')}Écrire au support</a>
        <a href="mailto:${i.email}" class="btn btn-ghost w-full">${App.ic('mail', 'w-5 h-5')}${i.email}</a>
      </div>`,
  });
};
