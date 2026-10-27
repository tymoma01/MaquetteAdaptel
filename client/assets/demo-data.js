// Données de démo des pages de l'espace client, selon la sélection client / chantier du header (etab-selector.js).
// Les données de Hyatt Étoile sont saisies à la main dans chaque page. Pour les autres clients (jusqu'à une
// centaine de chantiers), on les génère à partir du nom du client et du chantier : un même chantier affiche
// toujours les mêmes données, et deux chantiers différents des données différentes.
// Chaque chantier a un « profil » (secteur, qualifications, intérimaires habituels) commun à toutes les pages,
// pour que le tableau de bord, le planning, les qualifications… racontent la même histoire.

const DEMO_HAND_CLIENT = "Hyatt Regency Paris Étoile";

const DEMO_QUALIFS = [
  { nom: "Réceptionniste", secteur: "Hébergement", taux: 13.5, horaires: [{ libelle: "Matin", debut: "07:00", fin: "15:00", pause: 30 }, { libelle: "Soir", debut: "15:00", fin: "23:00", pause: 30 }], consignes: "Tenue noire élégante, badge visible. Accueil en front-desk, ton chaleureux et professionnel." },
  { nom: "Hôtesse d'accueil", secteur: "Hébergement", taux: 14.0, horaires: [{ libelle: "Matin", debut: "07:00", fin: "15:00", pause: 30 }], consignes: "Tenue noire élégante, badge visible." },
  { nom: "Veilleur de nuit", secteur: "Hébergement", taux: 13.0, horaires: [{ libelle: "Nuit", debut: "23:00", fin: "07:00", pause: 30 }], consignes: "" },
  { nom: "Concierge", secteur: "Hébergement", taux: 15.5, horaires: [{ libelle: "Journée", debut: "08:00", fin: "16:00", pause: 30 }], consignes: "Costume sombre. Anglais courant exigé." },
  { nom: "Bagagiste", secteur: "Hébergement", taux: 12.6, horaires: [{ libelle: "Matin", debut: "06:00", fin: "14:00", pause: 30 }], consignes: "Tenue technique fournie sur place. Chaussures fermées obligatoires." },
  { nom: "Voiturier", secteur: "Hébergement", taux: 12.8, horaires: [{ libelle: "Soir", debut: "16:00", fin: "00:00", pause: 30 }], consignes: "Permis B obligatoire." },
  { nom: "Femme de chambre", secteur: "Housekeeping", taux: 13.0, horaires: [{ libelle: "Journée", debut: "09:00", fin: "17:00", pause: 30 }], consignes: "Chaussures antidérapantes obligatoires. Passage au vestiaire du personnel à l'arrivée." },
  { nom: "Gouvernante", secteur: "Housekeeping", taux: 15.8, horaires: [{ libelle: "Journée", debut: "08:00", fin: "16:00", pause: 30 }], consignes: "" },
  { nom: "Chef de rang", secteur: "Restauration", taux: 14.2, horaires: [{ libelle: "Midi", debut: "11:00", fin: "19:00", pause: 30 }, { libelle: "Soir", debut: "18:00", fin: "02:00", pause: 20 }, { libelle: "Coupure", debut: "11:00", fin: "15:00", debut2: "18:30", fin2: "23:00", pause: 0 }], consignes: "Tenue de service noire. Briefing 20 min avant le service." },
  { nom: "Serveur", secteur: "Restauration", taux: 13.9, horaires: [{ libelle: "Soir", debut: "18:00", fin: "02:00", pause: 20 }], consignes: "Tenue de service noire." },
  { nom: "Barman", secteur: "Restauration", taux: 15.0, horaires: [{ libelle: "Soir", debut: "18:00", fin: "02:00", pause: 20 }], consignes: "" },
  { nom: "Commis de cuisine", secteur: "Restauration", taux: 13.1, horaires: [{ libelle: "Journée", debut: "09:00", fin: "17:00", pause: 45 }], consignes: "Veste de cuisine blanche + charlotte. Norme HACCP à respecter strictement." },
  { nom: "Cuisinier", secteur: "Restauration", taux: 14.5, horaires: [{ libelle: "Journée", debut: "09:00", fin: "17:00", pause: 45 }], consignes: "Veste de cuisine blanche + charlotte." },
  { nom: "Plongeur", secteur: "Restauration", taux: 12.8, horaires: [{ libelle: "Journée", debut: "11:00", fin: "19:00", pause: 30 }], consignes: "" }
];

// Chaque intérimaire a 1 ou 2 qualifications, d'un même secteur : ce sont les seules qu'il exerce, quel que soit le chantier.
const DEMO_INTERIMAIRES = [
  { nom: "Marco De Luca", photo: "https://i.pravatar.cc/150?img=33", quals: ["Chef de rang", "Serveur"] },
  { nom: "Léa Richard", photo: "https://i.pravatar.cc/150?img=47", quals: ["Femme de chambre"] },
  { nom: "Anna Pizzol", photo: "https://i.pravatar.cc/150?img=13", quals: ["Réceptionniste", "Hôtesse d'accueil"] },
  { nom: "Julie Bernard", photo: "https://i.pravatar.cc/150?img=29", quals: ["Veilleur de nuit", "Réceptionniste"] },
  { nom: "Karim Traoré", photo: "https://i.pravatar.cc/150?img=52", quals: ["Bagagiste", "Voiturier"] },
  { nom: "Julien Martin", photo: "https://i.pravatar.cc/150?img=15", quals: ["Commis de cuisine", "Cuisinier"] },
  { nom: "Sofia Nguyen", photo: "https://i.pravatar.cc/150?img=65", quals: ["Femme de chambre", "Gouvernante"] },
  { nom: "Samir Benali", photo: "https://i.pravatar.cc/150?img=12", quals: ["Barman", "Serveur"] },
  { nom: "Claire Moreau", photo: "https://i.pravatar.cc/150?img=44", quals: ["Gouvernante"] },
  { nom: "Nadia Diallo", photo: "https://i.pravatar.cc/150?img=26", quals: ["Femme de chambre"] },
  { nom: "Emma Laurent", photo: "https://i.pravatar.cc/150?img=20", quals: ["Concierge", "Réceptionniste"] },
  { nom: "Yanis Haddad", photo: "https://i.pravatar.cc/150?img=59", quals: ["Plongeur", "Commis de cuisine"] },
  { nom: "Pablo Garcia", photo: "https://i.pravatar.cc/150?img=68", quals: ["Cuisinier"] },
  { nom: "Inès Fontaine", photo: "https://i.pravatar.cc/150?img=38", quals: ["Hôtesse d'accueil"] }
];

// Générateur pseudo-aléatoire déterministe (même clé → même suite de nombres).
function demoRandom(key) {
  let seed = 2166136261;
  for (const ch of key) seed = Math.imul(seed ^ ch.charCodeAt(0), 16777619);
  return () => {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const demoPick = (rand, arr) => arr[Math.floor(rand() * arr.length)];
const demoInt = (rand, min, max) => min + Math.floor(rand() * (max - min + 1));
const demoShuffle = (rand, arr) => arr.map(v => [rand(), v]).sort((a, b) => a[0] - b[0]).map(p => p[1]);
// Date de septembre 2026 entre deux jours (inclus), au format JJ/MM/AAAA.
const demoDate = (rand, from, to) => `${String(demoInt(rand, from, to)).padStart(2, '0')}/09/2026`;
// "Prénom Nom" → "P. Nom" (format court du planning / tableau de bord).
const demoShortName = nom => { const [p, ...rest] = nom.split(' '); return `${p[0]}. ${rest.join(' ')}`; };
// ---------- Horaires ----------
// Un horaire (type ou de mission) : { debut, fin, pause } et, pour un horaire en coupure — deux services dans la
// même journée, ex. midi puis soir —, la reprise { debut2, fin2 }. La pause se déduit du total de la journée.
const demoAvecCoupure = h => !!(h && h.debut2 && h.fin2);
const demoMinutes = t => { const [hh, mm] = t.split(':').map(Number); return hh * 60 + mm; };
const demoHeureAjoutee = (t, min) => { const m = (demoMinutes(t) + min + 1440) % 1440; return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`; };
// Durée d'une plage en minutes (passe minuit si besoin).
const demoDureePlage = (debut, fin) => (demoMinutes(fin) - demoMinutes(debut) + 1440) % 1440 || 1440;
// Heures travaillées sur la journée : les deux services en cas de coupure, pause déduite.
const demoHeuresHoraire = h => Math.max(0, demoDureePlage(h.debut, h.fin) + (demoAvecCoupure(h) ? demoDureePlage(h.debut2, h.fin2) : 0) - (h.pause || 0)) / 60;
// Durée de la coupure (de la fin du 1er service à la reprise), en minutes.
const demoDureeCoupure = h => (demoMinutes(h.debut2) - demoMinutes(h.fin) + 1440) % 1440;
// Message d'erreur d'une coupure mal saisie, ou null : la reprise suit le 1er service, sans chevauchement, le tout sur moins de 24h.
function demoErreurCoupure(h) {
  if (!demoAvecCoupure(h)) return null;
  const rel = t => (demoMinutes(t) - demoMinutes(h.debut) + 1440) % 1440;
  const fin1 = rel(h.fin) || 1440, reprise = rel(h.debut2), fin2 = rel(h.fin2);
  if (reprise <= fin1) return "La reprise doit commencer après la fin du 1er service.";
  if (fin2 <= reprise) return "Le 2e service doit finir après la reprise (et le même jour).";
  return null;
}
// Coupure proposée quand on l'active sur un horaire : si l'amplitude saisie est large (≥ 9h, ex. 10h–23h), on garde
// ses bornes avec 4h de service de chaque côté ; sinon 4h de service, 3h de coupure, 4h de service. Toujours modifiable.
function demoCoupureParDefaut(h) {
  const amplitude = demoDureePlage(h.debut, h.fin);
  const fin = demoHeureAjoutee(h.debut, 240);
  if (amplitude >= 540) return { fin, debut2: demoHeureAjoutee(h.fin, -240), fin2: h.fin };
  const debut2 = demoHeureAjoutee(fin, 180);
  return { fin, debut2, fin2: demoHeureAjoutee(debut2, 240) };
}
// "18:30" → "18h30", "07:00" → "7h".
const demoHeure = t => { const [hh, mm] = t.split(':'); return `${parseInt(hh, 10)}h${mm !== '00' ? mm : ''}`; };
// Plage horaire "07:00"–"15:00" → "7h–15h" ; en coupure "11h–15h / 18h30–23h".
const demoHoraire = h => `${demoHeure(h.debut)}–${demoHeure(h.fin)}` + (demoAvecCoupure(h) ? ` / ${demoHeure(h.debut2)}–${demoHeure(h.fin2)}` : '');
// Même chose au format HH:MM : "11:00–15:00 / 18:30–23:00".
const demoPlage = h => `${h.debut}–${h.fin}` + (demoAvecCoupure(h) ? ` / ${h.debut2}–${h.fin2}` : '');

// ---------- Statuts & notes des demandes ----------
// Libellés des statuts d'une demande / mission, communs aux pages Demandes, fiche demande et Planning.
const DEMO_STATUTS = {
  encours: { label: "En recherche", pluriel: "En recherche", cls: "bg-amber-100 text-amber-700" },
  staffee: { label: "Pourvue", pluriel: "Pourvues", cls: "bg-blue-100 text-blue-700" },
  validee: { label: "Confirmée", pluriel: "Confirmées", cls: "bg-green-100 text-green-700" },
  termine: { label: "Terminée", pluriel: "Terminées", cls: "bg-gray-100 text-gray-600" },
  annulee: { label: "Annulée", pluriel: "Annulées", cls: "bg-red-100 text-red-700" }
};
// Notes de mission : chaque intérimaire positionné sur une demande est noté séparément ({ [nom]: note sur 5 }).
const demoNotes = d => d.notes || {};
// Intérimaires d'une demande réalisée dont la mission n'est pas encore notée.
const demoANoter = d => d.statut === 'termine' ? (d.interimaires || []).filter(n => !demoNotes(d)[n]) : [];

const demoProfiles = {};
// Profil d'un chantier : secteur, des qualifications de ce secteur et 2 à 4 intérimaires habituels.
function demoProfile(client, chantier) {
  const key = client + '|' + chantier;
  if (demoProfiles[key]) return demoProfiles[key];
  const rand = demoRandom('profil|' + key);
  // Secteur déduit du nom du chantier quand il l'indique (ex. FLEXI RECEPTION), sinon tiré au sort (ex. ACC / <hôtel>).
  const tire = demoPick(rand, ["Hébergement", "Housekeeping", "Restauration"]);
  const secteur = /HOUSEKEEPING/.test(chantier) ? "Housekeeping"
    : /BANQUET|CHEF|CUISINE|PLONGE|ROOM SERVICE|BAR\b/.test(chantier) ? "Restauration"
    : /RECEPTION|HOTE|BAGAGERIE|CONCIERGERIE|VOITURIER|SPA/.test(chantier) ? "Hébergement"
    : tire;
  const pool = DEMO_QUALIFS.filter(q => q.secteur === secteur);
  const qualifs = demoShuffle(rand, pool).slice(0, demoInt(rand, 1, Math.min(4, pool.length)));
  // Intérimaires du secteur ; chacun exerce une de ses qualifications, ajoutée au chantier s'il ne l'avait pas.
  const candidats = DEMO_INTERIMAIRES.filter(i => pool.some(q => q.nom === i.quals[0]));
  const interimaires = demoShuffle(rand, candidats).slice(0, demoInt(rand, 2, Math.min(4, candidats.length)))
    .map(i => {
      const siennes = pool.filter(q => i.quals.includes(q.nom));
      const q = siennes.find(q => qualifs.includes(q)) || demoPick(rand, siennes);
      if (!qualifs.includes(q)) qualifs.push(q);
      return { ...i, q };
    });
  return demoProfiles[key] = { secteur, qualifs, interimaires };
}

// Chantiers couverts par la sélection du header : le chantier choisi, ou tous ceux du client.
function demoChantiers() {
  const sel = getEtabSelection();
  return sel.chantier ? [sel.chantier] : ETAB_CLIENTS.find(c => c.nom === sel.client).chantiers;
}

const demoCache = {};
// Lignes d'une page pour la sélection du header :
// - Hyatt Étoile : `handRows` (saisies à la main, avec un champ `chantier`), filtrées sur le chantier choisi ;
// - autres clients : `generate(chantier, rand, profil)` pour chaque chantier couvert.
// Les lignes générées sont gardées en cache : les modifications faites dans la page (favori, validation…)
// sont conservées tant qu'on reste sur la page.
// `tousChantiers` : ignore le chantier choisi dans le header et couvre tous les chantiers du client.
function demoRows(namespace, handRows, generate, tousChantiers = false) {
  const sel = getEtabSelection();
  const chantier = tousChantiers ? null : sel.chantier;
  if (sel.client === DEMO_HAND_CLIENT) return handRows.filter(r => !chantier || r.chantier === chantier);
  const chantiers = chantier ? [chantier] : ETAB_CLIENTS.find(c => c.nom === sel.client).chantiers;
  return chantiers.flatMap(ch => {
    const key = [namespace, sel.client, ch].join('|');
    return demoCache[key] || (demoCache[key] = generate(ch, demoRandom(key), demoProfile(sel.client, ch)));
  });
}

// Demandes de mission d'un chantier — partagé entre la liste (client-demandes.html) et la fiche détail
// (client-demande-detail.html), qui doivent retrouver la même demande à partir de son numéro.
// Numéro = 3000 + 10 × rang du chantier chez le client + n° de la demande : unique au sein d'un client.
function demoDemandes(chantier, rand, profil) {
  const sel = getEtabSelection();
  const rang = ETAB_CLIENTS.find(c => c.nom === sel.client).chantiers.indexOf(chantier);
  return Array.from({ length: demoInt(rand, 1, 4) }, (_, k) => {
    const qualif = demoPick(rand, profil.qualifs);
    const h = demoPick(rand, qualif.horaires);
    const jour = String(demoInt(rand, 15, 28)).padStart(2, '0');
    const statut = jour > '24' ? 'encours' : jour >= '23' ? 'staffee' : rand() < 0.15 ? 'annulee' : 'termine';
    const capacite = demoInt(rand, 1, 2);
    const pourvus = statut === 'staffee' || statut === 'termine' ? capacite : statut === 'encours' ? demoInt(rand, 0, capacite - 1) : 0;
    const interimaires = pourvus ? demoShuffle(rand, profil.interimaires).slice(0, pourvus).map(i => i.nom) : undefined;
    const notes = statut === 'termine' ? Object.fromEntries(interimaires.filter(() => rand() < 0.5).map(n => [n, demoInt(rand, 3, 5)])) : undefined;
    return {
      id: `DEM-${3000 + rang * 10 + k}`, q: qualif.nom, chantier, lieu: sel.client,
      dateISO: `2026-09-${jour}`, date: `${jour}/09/2026`, horaire: demoHoraire(h), debutISO: `2026-09-${jour}T${h.debut}:00`,
      statut, capacite, pourvus, enAttente: statut === 'encours' ? demoInt(rand, 0, 1) : 0, refuses: 0, taux: qualif.taux, lot: null,
      interimaires, notes,
      annulationMotif: statut === 'annulee' ? demoPick(rand, DEMO_MOTIFS_ANNULATION.slice(0, -1)) : undefined
    };
  });
}

// Motifs proposés lorsqu'un client demande l'annulation d'une demande (« Autre » impose une précision).
const DEMO_MOTIFS_ANNULATION = [
  "Baisse d'activité / réservations annulées",
  "Événement reporté ou annulé",
  "Besoin couvert en interne",
  "Erreur de saisie (date, horaire, qualification)",
  "Demande en double",
  "Autre"
];

// Dépenses du mois d'un chantier (client-depenses.html, et budget du tableau de bord).
function demoDepenses(chantier, rand, profil) {
  return profil.qualifs.flatMap(q => Array.from({ length: demoInt(rand, 1, 2) }, () => {
    const heures = demoInt(rand, 1, 15) * 8;
    const date = demoDate(rand, 1, 23);
    // Relevé d'heures : les missions anciennes sont le plus souvent déjà validées, les récentes rarement.
    const releve = rand() < (Number(date.slice(0, 2)) < 16 ? 0.85 : 0.3) ? 'valide' : 'a_valider';
    return { id: `DEM-${demoInt(rand, 2000, 9999)}`, q: q.nom, chantier, date, heures, taux: q.taux, montant: Math.round(heures * q.taux * 100) / 100, releve };
  }));
}

// Ligne de planning d'un chantier pour la semaine du 21 au 27/09 (client-planning.html, et prochaines
// missions du tableau de bord). day = 0 (lundi) … 6 (dimanche) ; aujourd'hui = mercredi 23/09 (day 2).
function demoPlanning(chantier, rand, profil) {
  const missions = [];
  for (let day = 0; day < 7; day++) {
    if (rand() < 0.45) continue;
    const i = demoPick(rand, profil.interimaires);
    const encours = day > 2 && rand() < 0.3; // pas encore pourvue
    missions.push({
      day, nom: encours ? "—" : demoShortName(i.nom), photo: encours ? null : i.photo, q: i.q.nom,
      horaire: demoHoraire(demoPick(rand, i.q.horaires)),
      statut: encours ? "encours" : day < 2 ? "termine" : day === 2 ? "validee" : demoPick(rand, ["validee", "staffee"])
    });
  }
  return [{ chantier, label: chantier, missions }];
}

// ---------- Intérimaires favoris ----------
// Un favori vaut pour un intérimaire chez un client (tous chantiers confondus). Il se marque depuis la page
// Intérimaires ou depuis la fiche d'une demande staffée : on le mémorise (localStorage) pour que les deux pages
// restent d'accord. Sans choix mémorisé, on prend la valeur de démo.
const DEMO_FAVORIS_KEY = 'adaptel-favoris';
const DEMO_FAVORIS_ETOILE = ["Marco De Luca", "Léa Richard", "Karim Traoré"];

function demoFavorisSauves() {
  try { return JSON.parse(localStorage.getItem(DEMO_FAVORIS_KEY)) || {}; } catch (e) { return {}; }
}

function demoEstFavori(nom) {
  const client = getEtabSelection().client;
  const sauve = (demoFavorisSauves()[client] || {})[nom];
  if (sauve !== undefined) return sauve;
  return client === DEMO_HAND_CLIENT ? DEMO_FAVORIS_ETOILE.includes(nom) : demoRandom(`favori|${client}|${nom}`)() < 0.3;
}

function demoSetFavori(nom, favori) {
  const client = getEtabSelection().client;
  const favoris = demoFavorisSauves();
  (favoris[client] = favoris[client] || {})[nom] = favori;
  try { localStorage.setItem(DEMO_FAVORIS_KEY, JSON.stringify(favoris)); } catch (e) {}
}

let demoNextId = 10000;
// Identifiant numérique unique pour les lignes générées (utilisé dans les onclick / id du DOM).
const demoId = () => demoNextId++;

// ---------- Qualifications ----------
// Partagées entre l'onglet Qualifications et les fiches de liaison de la rubrique Légal.
// Qualifications réelles (métiers) proposées à la demande, regroupées par chantier — les mêmes
// intitulés que ceux utilisés côté Opérations (planning, fiches intérimaires…).
const DEMO_QUALIFICATIONS_ETOILE = [
  { id: "q1", nom: "Réceptionniste", chantier: "FLEXI HOTE/HOTESSE", taux: 13.5, horaires: [{ libelle: "Matin", debut: "07:00", fin: "15:00", pause: 30 }, { libelle: "Soir", debut: "15:00", fin: "23:00", pause: 30 }], consignes: "Tenue noire élégante, badge visible. Accueil en front-desk, ton chaleureux et professionnel." },
  { id: "q2", nom: "Hôtesse d'accueil", chantier: "FLEXI HOTE/HOTESSE", taux: 14.0, horaires: [{ libelle: "Matin", debut: "07:00", fin: "15:00", pause: 30 }], consignes: "Tenue noire élégante, badge visible. Accueil en front-desk, ton chaleureux et professionnel." },
  { id: "q3", nom: "Bagagiste", chantier: "FLEXI BAGAGERIE", taux: 12.6, horaires: [{ libelle: "Matin", debut: "06:00", fin: "14:00", pause: 30 }], consignes: "Tenue technique fournie sur place. Port de charges — chaussures fermées obligatoires." },
  { id: "q4", nom: "Femme de chambre", chantier: "FLEXI HOUSEKEEPING", taux: 13.0, horaires: [{ libelle: "Journée", debut: "09:00", fin: "17:00", pause: 30 }], consignes: "Chaussures antidérapantes obligatoires. Passage au vestiaire du personnel à l'arrivée." },
  { id: "q5", nom: "Chef de rang", chantier: "FLEXI BANQUET", taux: 14.2, horaires: [{ libelle: "Midi", debut: "11:00", fin: "19:00", pause: 30 }, { libelle: "Soir", debut: "18:00", fin: "02:00", pause: 20 }, { libelle: "Coupure", debut: "11:00", fin: "15:00", debut2: "18:30", fin2: "23:00", pause: 0 }], consignes: "Tenue de service noire, nœud papillon fourni sur place. Briefing 20 min avant le service." },
  { id: "q6", nom: "Maître d'hôtel", chantier: "FLEXI BANQUET", taux: 17.0, horaires: [{ libelle: "Soir", debut: "18:00", fin: "02:00", pause: 20 }], consignes: "Tenue de service noire, nœud papillon fourni sur place. Briefing 20 min avant le service." },
  { id: "q7", nom: "Serveuse", chantier: "FLEXI BANQUET", taux: 13.9, horaires: [{ libelle: "Soir", debut: "18:00", fin: "02:00", pause: 20 }], consignes: "Tenue de service noire, nœud papillon fourni sur place. Briefing 20 min avant le service." },
  { id: "q8", nom: "Sommelière", chantier: "FLEXI BANQUET", taux: 16.5, horaires: [{ libelle: "Soir", debut: "18:00", fin: "02:00", pause: 20 }], consignes: "" },
  { id: "q9", nom: "Barman", chantier: "FLEXI BANQUET", taux: 15.0, horaires: [{ libelle: "Soir", debut: "18:00", fin: "02:00", pause: 20 }], consignes: "" },
  { id: "q10", nom: "Cuisinier", chantier: "FLEXI SOUS-CHEF", taux: 14.5, horaires: [{ libelle: "Journée", debut: "09:00", fin: "17:00", pause: 45 }], consignes: "Veste de cuisine blanche + charlotte. Norme HACCP à respecter strictement." },
  { id: "q11", nom: "Chef cuisinier", chantier: "FLEXI SOUS-CHEF", taux: 18.0, horaires: [{ libelle: "Journée", debut: "09:00", fin: "17:00", pause: 45 }], consignes: "Veste de cuisine blanche + charlotte. Norme HACCP à respecter strictement." },
  { id: "q12", nom: "Commis de cuisine", chantier: "FLEXI SOUS-CHEF", taux: 13.1, horaires: [{ libelle: "Journée", debut: "09:00", fin: "17:00", pause: 45 }], consignes: "Veste de cuisine blanche + charlotte. Norme HACCP à respecter strictement." },
  { id: "q13", nom: "Pâtissière", chantier: "FLEXI SOUS-CHEF", taux: 15.0, horaires: [{ libelle: "Journée", debut: "09:00", fin: "17:00", pause: 45 }], consignes: "" },
  { id: "q14", nom: "Plongeur", chantier: "FLEXI SOUS-CHEF", taux: 12.8, horaires: [{ libelle: "Journée", debut: "09:00", fin: "17:00", pause: 45 }, { libelle: "Coupure", debut: "10:00", fin: "14:30", debut2: "18:00", fin2: "22:30", pause: 0 }], consignes: "" }
];

// Secteur d'activité de chaque chantier : il détermine les champs spécifiques affichés ci-dessous.
const DEMO_CHANTIER_SECTEUR_ETOILE = {
  "FLEXI HOTE/HOTESSE": "Hébergement",
  "FLEXI BAGAGERIE": "Hébergement",
  "FLEXI HOUSEKEEPING": "Housekeeping",
  "FLEXI BANQUET": "Restauration",
  "FLEXI SOUS-CHEF": "Restauration",
  "FLEXI ROOM SERVICE": "Restauration",
  "FLEXI SPA": "Hébergement",
  "FLEXI PLONGE": "Restauration",
  "FLEXI CONCIERGERIE": "Hébergement",
  "FLEXI VOITURIER": "Hébergement"
};

// Secteur d'un chantier : saisi à la main pour Hyatt Étoile, issu du profil de démo pour les autres clients.
function demoSecteur(chantier) {
  if (!chantier) return null;
  const sel = getEtabSelection();
  return sel.client === DEMO_HAND_CLIENT ? DEMO_CHANTIER_SECTEUR_ETOILE[chantier] : demoProfile(sel.client, chantier).secteur;
}

// Qualifications ajoutées / retirées par le client depuis l'onglet Qualifications, par client. Gardées dans le
// navigateur pour que la rubrique Légal (une fiche de liaison par qualification) suive les mêmes qualifications.
const DEMO_QUALIFS_KEY = 'adaptel-qualifications';
let demoQualifsEtat = null;
function demoQualifsModifs() {
  if (!demoQualifsEtat) {
    try { demoQualifsEtat = JSON.parse(localStorage.getItem(DEMO_QUALIFS_KEY)) || {}; } catch (e) { demoQualifsEtat = {}; }
  }
  const client = getEtabSelection().client;
  return demoQualifsEtat[client] || (demoQualifsEtat[client] = { ajoutees: [], retirees: [] });
}
function demoQualifsSauver() {
  try { localStorage.setItem(DEMO_QUALIFS_KEY, JSON.stringify(demoQualifsEtat)); } catch (e) {}
}
const demoQualifCle = q => q.chantier + '|' + q.nom;

// Qualifications du client / chantier choisi dans le header (de tous ses chantiers avec `tousChantiers`).
function demoQualifications(tousChantiers = false) {
  const sel = getEtabSelection();
  const chantier = tousChantiers ? null : sel.chantier;
  const modifs = demoQualifsModifs();
  return demoRows('qualifications', DEMO_QUALIFICATIONS_ETOILE, (chantier, rand, profil) =>
    profil.qualifs.map(q => ({
      id: `g${demoId()}`, nom: q.nom, chantier, taux: q.taux,
      horaires: q.horaires.map(h => ({ ...h })), consignes: q.consignes
    })), tousChantiers)
    .filter(q => !modifs.retirees.includes(demoQualifCle(q)))
    .concat(modifs.ajoutees.filter(q => !chantier || q.chantier === chantier));
}

// Qualifications qu'Adaptel propose pour un secteur (taux de référence et horaire type par défaut).
function demoCatalogueQualifs(secteur) {
  const etoile = DEMO_QUALIFICATIONS_ETOILE.map(q => ({ ...q, secteur: DEMO_CHANTIER_SECTEUR_ETOILE[q.chantier] }));
  const vus = new Set();
  return [...DEMO_QUALIFS, ...etoile]
    .filter(q => q.secteur === secteur && !vus.has(q.nom) && vus.add(q.nom))
    .sort((a, b) => a.nom.localeCompare(b.nom));
}

function demoAjouterQualif(nom, chantier) {
  const modifs = demoQualifsModifs();
  const cle = demoQualifCle({ nom, chantier });
  // Qualification d'origine retirée puis rajoutée : on la restaure telle quelle.
  if (modifs.retirees.includes(cle)) modifs.retirees = modifs.retirees.filter(c => c !== cle);
  else {
    const c = demoCatalogueQualifs(demoSecteur(chantier)).find(q => q.nom === nom);
    modifs.ajoutees.push({
      id: `a${Date.now().toString(36)}`, nom, chantier, taux: c.taux,
      horaires: c.horaires.map(h => ({ ...h })), consignes: c.consignes || '', ajoutee: true
    });
  }
  demoQualifsSauver();
}

function demoRetirerQualif(q) {
  const modifs = demoQualifsModifs();
  if (q.ajoutee) modifs.ajoutees = modifs.ajoutees.filter(a => a.id !== q.id);
  else modifs.retirees.push(demoQualifCle(q));
  demoQualifsSauver();
}
