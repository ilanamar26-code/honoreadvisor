// Lecture des affaires Pipedrive et calcul des indicateurs du tableau de pilotage.
// Le jeton API reste côté serveur : ce module ne doit jamais être importé par un composant client.

const PROVENANCE_FIELD = "2d6f561dfbdfbfafba6e395ebed9eb7a03b730bf";
const PROVENANCE_LABELS: Record<string, string> = {
  "28": "Site internet Honoré Advisor",
  "29": "Site internet Honoré Patrimoine",
  "30": "Contact Roy",
  "31": "Contact Ilan"
};

export type Deal = {
  id: number;
  affaire: string;
  statut: "open" | "won" | "lost";
  valeur: number;
  devise: string;
  creeLe: string | null;
  gagneLe: string | null;
  perduLe: string | null;
  motifPerte: string | null;
  provenance: string | null;
};

const normalizeDomain = (d: string) => d.replace(/^https?:\/\//, "").replace(/\/.*$/, "");

// Pipedrive renvoie des heures UTC ; le cabinet raisonne en heure de Dubaï (UTC+4).
const dubaiDate = (t: string | null | undefined): string | null => {
  if (!t) return null;
  const d = new Date(t.replace(" ", "T") + "Z");
  if (Number.isNaN(d.getTime())) return t.slice(0, 10);
  return new Date(d.getTime() + 4 * 3600 * 1000).toISOString().slice(0, 10);
};

export async function fetchDeals(): Promise<Deal[]> {
  const token = process.env.PIPEDRIVE_API_TOKEN;
  const domain = process.env.PIPEDRIVE_DOMAIN;
  if (!token || !domain) throw new Error("PIPEDRIVE_API_TOKEN ou PIPEDRIVE_DOMAIN manquant");
  const base = `https://${normalizeDomain(domain)}/api/v1/deals`;

  const raw: Record<string, unknown>[] = [];
  let start = 0;
  for (let page = 0; page < 10; page++) {
    const res = await fetch(`${base}?status=all_not_deleted&limit=500&start=${start}&api_token=${token}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Pipedrive a répondu ${res.status}`);
    const json = await res.json();
    if (!json.success) throw new Error(json.error ?? "Pipedrive a refusé la requête");
    raw.push(...(json.data ?? []));
    const pg = json.additional_data?.pagination;
    if (!pg?.more_items_in_collection) break;
    start = pg.next_start;
  }

  return raw.map((d: any) => {
    const p = d[PROVENANCE_FIELD];
    const pid = p == null ? null : String(typeof p === "object" ? p.id ?? p.value : p);
    return {
      id: d.id,
      affaire: d.title,
      statut: d.status,
      valeur: Number(d.value) || 0,
      devise: d.currency,
      creeLe: dubaiDate(d.add_time),
      gagneLe: dubaiDate(d.won_time),
      perduLe: dubaiDate(d.lost_time),
      motifPerte: d.lost_reason ?? null,
      provenance: pid ? PROVENANCE_LABELS[pid] ?? null : null
    };
  });
}

const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
export function familleMotif(r: string | null): string {
  const t = norm(r ?? "");
  if (!t || t.length <= 2 || t === "ok") return "Non précisé";
  if (/cher|gratter|rien payer/.test(t)) return "Prix";
  if (/reponse|repond|nouvelle|son, plus/.test(t)) return "Plus de nouvelles";
  if (/timing|pret|reflexion|pause|stand by/.test(t)) return "Timing, pas prêt";
  if (/guerre|dechauffe/.test(t)) return "Contexte régional";
  if (/ailleurs|avocat|destination/.test(t)) return "Parti ailleurs";
  if (/avorte|changement|besoin|vendu/.test(t)) return "Projet abandonné";
  return "Autre";
}

export type PeriodStats = {
  ca: number;
  ticket: number | null;
  gagnees: number;
  perdues: number;
  taux: number | null;
  dCa: number | null;
  dGagnees: number | null;
  dTaux: number | null;
  comparaison: string | null;
};

export type Pilotage = {
  majLe: string;
  tauxEurAed: number;
  autresDevises: number;
  periodes: string[];
  stats: Record<string, PeriodStats>;
  ouvertes: number;
  ouvert: number;
  mensuel: { mois: string; ca: number; gagnees: number; perdues: number }[];
  pertes: Record<string, { motif: string; n: number }[]>;
  provenance: Record<string, { provenance: string; total: number; gagnees: number }[]>;
  signees: { id: number; affaire: string; date: string; montantAed: number | null; valeur: number; devise: string; provenance: string | null }[];
};

export function computePilotage(deals: Deal[], tauxEurAed: number, now = new Date()): Pilotage {
  const aed = (d: Deal) => (d.devise === "AED" ? d.valeur : d.devise === "EUR" ? d.valeur * tauxEurAed : 0);
  const today = new Date(now.getTime() + 4 * 3600 * 1000).toISOString().slice(0, 10);
  const cur = today.slice(0, 4);
  const won = deals.filter((d) => d.statut === "won" && d.gagneLe);
  const lost = deals.filter((d) => d.statut === "lost" && d.perduLe);
  const years = Array.from(new Set([...won.map((d) => d.gagneLe!.slice(0, 4)), ...lost.map((d) => d.perduLe!.slice(0, 4))])).sort();
  const periodes = [...years, "tout"];

  const base = (yr: string, ytd: boolean) => {
    const inP = (date: string) => yr === "tout" || (date.startsWith(yr) && (!ytd || date.slice(5) <= today.slice(5)));
    const g = won.filter((d) => inP(d.gagneLe!));
    const p = lost.filter((d) => inP(d.perduLe!));
    const ca = g.reduce((s, d) => s + aed(d), 0);
    const clos = g.length + p.length;
    return { ca, ticket: g.length ? ca / g.length : null, gagnees: g.length, perdues: p.length, taux: clos ? g.length / clos : null };
  };

  const stats: Record<string, PeriodStats> = {};
  for (const yr of periodes) {
    const s = base(yr, false);
    const prev = yr === "tout" ? null : String(Number(yr) - 1);
    const pv = prev && years.includes(prev) ? base(prev, yr === cur) : null;
    stats[yr] = {
      ...s,
      dCa: pv && pv.ca ? (s.ca - pv.ca) / pv.ca : null,
      dGagnees: pv ? s.gagnees - pv.gagnees : null,
      dTaux: pv && s.taux != null && pv.taux != null ? s.taux - pv.taux : null,
      comparaison: pv ? (yr === cur ? `vs ${prev} à date` : `vs ${prev}`) : null
    };
  }

  const open = deals.filter((d) => d.statut === "open");

  const mensuel: Pilotage["mensuel"] = [];
  if (years.length) {
    let [y, m] = [Number(years[0]), 1];
    const first = [...won.map((d) => d.gagneLe!), ...lost.map((d) => d.perduLe!)].sort()[0];
    m = Number(first.slice(5, 7));
    const [ey, em] = [Number(today.slice(0, 4)), Number(today.slice(5, 7))];
    while (y < ey || (y === ey && m <= em)) {
      const mois = `${y}-${String(m).padStart(2, "0")}`;
      const g = won.filter((d) => d.gagneLe!.startsWith(mois));
      mensuel.push({ mois, ca: g.reduce((s, d) => s + aed(d), 0), gagnees: g.length, perdues: lost.filter((d) => d.perduLe!.startsWith(mois)).length });
      m++;
      if (m > 12) { m = 1; y++; }
    }
  }

  const pertes: Pilotage["pertes"] = {};
  const provenance: Pilotage["provenance"] = {};
  for (const yr of periodes) {
    const cnt: Record<string, number> = {};
    lost.filter((d) => yr === "tout" || d.perduLe!.startsWith(yr)).forEach((d) => {
      const f = familleMotif(d.motifPerte);
      cnt[f] = (cnt[f] ?? 0) + 1;
    });
    pertes[yr] = Object.entries(cnt).map(([motif, n]) => ({ motif, n })).sort((a, b) => b.n - a.n);

    const grp: Record<string, { total: number; gagnees: number }> = {};
    deals.filter((d) => d.creeLe && (yr === "tout" || d.creeLe.startsWith(yr))).forEach((d) => {
      const k = d.provenance ?? "Non renseignée";
      grp[k] = grp[k] ?? { total: 0, gagnees: 0 };
      grp[k].total++;
      if (d.statut === "won") grp[k].gagnees++;
    });
    provenance[yr] = Object.entries(grp).map(([p, v]) => ({ provenance: p, ...v })).sort((a, b) => b.total - a.total);
  }

  return {
    majLe: now.toISOString(),
    tauxEurAed,
    autresDevises: won.filter((d) => d.devise !== "AED" && d.devise !== "EUR").length,
    periodes,
    stats,
    ouvertes: open.length,
    ouvert: open.reduce((s, d) => s + aed(d), 0),
    mensuel,
    pertes,
    provenance,
    signees: won
      .map((d) => ({
        id: d.id,
        affaire: d.affaire,
        date: d.gagneLe!,
        montantAed: d.devise === "AED" ? d.valeur : d.devise === "EUR" ? d.valeur * tauxEurAed : null,
        valeur: d.valeur,
        devise: d.devise,
        provenance: d.provenance
      }))
      .sort((a, b) => b.date.localeCompare(a.date))
  };
}
