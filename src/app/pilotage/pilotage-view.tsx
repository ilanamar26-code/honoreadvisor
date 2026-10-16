"use client";

import { useMemo, useState } from "react";
import type { Pilotage } from "@/lib/pipedrive-deals";

const nf = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 });
const pf = new Intl.NumberFormat("fr-FR", { style: "percent", maximumFractionDigits: 0 });
const compact = new Intl.NumberFormat("fr-FR", { notation: "compact", maximumFractionDigits: 1 });
const moisFmt = new Intl.DateTimeFormat("fr-FR", { month: "short", year: "2-digit", timeZone: "UTC" });
const dateFmt = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const heureFmt = new Intl.DateTimeFormat("fr-FR", { dateStyle: "short", timeStyle: "short", timeZone: "Asia/Dubai" });

const GOLD = "#D4AF37";
const NAVY = "#1a1f36";

function Delta({ v, kind }: { v: number | null; kind: "rel" | "abs" | "pts" }) {
  if (v == null) return <span className="opacity-50">—</span>;
  const txt = kind === "rel" ? pf.format(v) : kind === "pts" ? `${nf.format(v * 100)} pts` : nf.format(v);
  return <span className={v >= 0 ? "text-emerald-600" : "text-red-600"}>{v > 0 ? "+" : ""}{txt}</span>;
}

function Tile({ label, value, unit, foot }: { label: string; value: string; unit?: string; foot?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
      <div className="text-xs uppercase tracking-wide opacity-60">{label}</div>
      <div className="mt-2 whitespace-nowrap font-[family-name:var(--font-space)] text-3xl tabular-nums">
        {value}{unit ? <span className="ml-1 text-base opacity-60">{unit}</span> : null}
      </div>
      {foot ? <div className="mt-1 text-xs tabular-nums opacity-80">{foot}</div> : null}
    </div>
  );
}

function Bars({ rows, series, fmt }: {
  rows: { mois: string; [k: string]: number | string }[];
  series: { key: string; label: string; color: string }[];
  fmt: (v: number) => string;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const W = 800, H = 240, ml = 48, mb = 24;
  const max = Math.max(1, ...rows.flatMap((r) => series.map((s) => Number(r[s.key]))));
  const step = (W - ml) / Math.max(rows.length, 1);
  const bw = Math.min(28, (step * 0.75) / series.length);
  const y = (v: number) => H - mb - (v / max) * (H - mb - 8);
  const ticks = [0, max / 2, max];
  const every = Math.max(1, Math.ceil(rows.length / 12));
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img">
        {ticks.map((t) => (
          <g key={t}>
            <line x1={ml} x2={W} y1={y(t)} y2={y(t)} stroke="currentColor" strokeOpacity={0.1} />
            <text x={ml - 6} y={y(t)} dy="0.32em" textAnchor="end" fontSize={11} fill="currentColor" fillOpacity={0.6}>{fmt(t)}</text>
          </g>
        ))}
        {rows.map((r, i) => {
          const x0 = ml + i * step + (step - bw * series.length) / 2;
          return (
            <g key={r.mois} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <rect x={ml + i * step} y={0} width={step} height={H - mb} fill="transparent" />
              {series.map((s, j) => {
                const v = Number(r[s.key]);
                return <rect key={s.key} x={x0 + j * bw} y={y(v)} width={bw - 2} height={Math.max(0, H - mb - y(v))} rx={3} fill={s.color} opacity={hover == null || hover === i ? 1 : 0.45} />;
              })}
              {i % every === 0 ? (
                <text x={ml + i * step + step / 2} y={H - 6} textAnchor="middle" fontSize={11} fill="currentColor" fillOpacity={0.6}>
                  {moisFmt.format(new Date(`${r.mois}-01T00:00:00Z`))}
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
      {hover != null ? (
        <div className="pointer-events-none absolute right-2 top-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs shadow-lg dark:border-white/10 dark:bg-[#11152a]">
          <div className="opacity-60">{moisFmt.format(new Date(`${rows[hover].mois}-01T00:00:00Z`))}</div>
          {series.map((s) => (
            <div key={s.key}><span className="mr-2 inline-block h-2 w-2 rounded-sm" style={{ background: s.color }} />{s.label} : {nf.format(Number(rows[hover][s.key]))}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function PilotageView({ data }: { data: Pilotage }) {
  const cur = String(new Date().getFullYear());
  const [periode, setPeriode] = useState(data.periodes.includes(cur) ? cur : data.periodes[data.periodes.length - 1]);
  const [q, setQ] = useState("");
  const s = data.stats[periode];
  const rows = data.mensuel.filter((r) => periode === "tout" || r.mois.startsWith(periode));
  const pertes = data.pertes[periode] ?? [];
  const maxPerte = Math.max(1, ...pertes.map((p) => p.n));
  const signees = useMemo(
    () => data.signees.filter((d) => (periode === "tout" || d.date.startsWith(periode)) && (!q || d.affaire.toLowerCase().includes(q.toLowerCase()))),
    [data.signees, periode, q]
  );

  const logout = async () => {
    await fetch("/api/pilotage/login", { method: "DELETE" });
    window.location.href = "/pilotage/login";
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Pilotage commercial</h1>
          {s ? (
            <p className="mt-2 opacity-70">
              {periode === "tout" ? "Depuis le début" : periode === cur ? `En ${periode} à date` : `En ${periode}`} :{" "}
              <b>{nf.format(s.gagnees)}</b> affaires signées sur <b>{nf.format(s.gagnees + s.perdues)}</b> conclues, taux de closing{" "}
              <b>{s.taux == null ? "—" : pf.format(s.taux)}</b>.
            </p>
          ) : null}
        </div>
        <div className="flex items-center gap-3">
          <div className="inline-flex overflow-hidden rounded-lg border border-black/15 text-sm dark:border-white/20">
            {data.periodes.map((p) => (
              <button key={p} onClick={() => setPeriode(p)} aria-pressed={p === periode}
                className={`px-3 py-1.5 ${p === periode ? "bg-[#1a1f36] text-white" : "opacity-70"}`}>
                {p === "tout" ? "Depuis le début" : p}
              </button>
            ))}
          </div>
          <button onClick={logout} className="text-sm underline opacity-60">Déconnexion</button>
        </div>
      </div>

      <section className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
        <Tile label="CA signé" value={nf.format(s?.ca ?? 0)} unit="AED" foot={<><Delta v={s?.dCa ?? null} kind="rel" /> {s?.comparaison}</>} />
        <Tile label="Ticket moyen" value={s?.ticket == null ? "—" : nf.format(s.ticket)} unit="AED" foot="par affaire signée" />
        <Tile label="Affaires signées" value={nf.format(s?.gagnees ?? 0)} foot={<><Delta v={s?.dGagnees ?? null} kind="abs" /> {s?.comparaison}</>} />
        <Tile label="Taux de closing" value={s?.taux == null ? "—" : pf.format(s.taux)} foot={<><Delta v={s?.dTaux ?? null} kind="pts" /> {s?.comparaison}</>} />
        <Tile label="Pipeline ouvert" value={nf.format(data.ouvertes)} unit="affaires" foot={`${nf.format(data.ouvert)} AED en jeu`} />
      </section>

      <section className="mt-6 rounded-2xl border border-black/10 p-5 dark:border-white/10">
        <h2 className="font-medium">CA signé par mois</h2>
        <p className="mb-3 text-xs opacity-60">En AED, à la date de gain. Euros convertis à 1 EUR = {data.tauxEurAed} AED.</p>
        <Bars rows={rows} series={[{ key: "ca", label: "CA signé (AED)", color: GOLD }]} fmt={(v) => compact.format(v)} />
      </section>

      <section className="mt-6 rounded-2xl border border-black/10 p-5 dark:border-white/10">
        <h2 className="font-medium">Affaires gagnées et perdues par mois</h2>
        <p className="mb-3 text-xs opacity-60">
          <span className="mr-1 inline-block h-2 w-2 rounded-sm" style={{ background: NAVY }} />Gagnées
          <span className="ml-4 mr-1 inline-block h-2 w-2 rounded-sm bg-red-400" />Perdues
        </p>
        <Bars rows={rows} series={[{ key: "gagnees", label: "Gagnées", color: NAVY }, { key: "perdues", label: "Perdues", color: "#f87171" }]} fmt={(v) => nf.format(v)} />
      </section>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-black/10 p-5 dark:border-white/10">
          <h2 className="font-medium">Pourquoi on perd</h2>
          <p className="mb-4 text-xs opacity-60">Motifs de perte saisis dans Pipedrive, regroupés en familles.</p>
          <div className="grid grid-cols-[auto_1fr_2rem] items-center gap-x-3 gap-y-2 text-sm">
            {pertes.map((p, i) => (
              <div key={p.motif} className="contents">
                <div>{p.motif}</div>
                <div className="h-3 rounded bg-black/5 dark:bg-white/10">
                  <div className="h-3 rounded" style={{ width: `${(p.n / maxPerte) * 100}%`, background: i === 0 ? "#ef4444" : "#94a3b8" }} />
                </div>
                <div className="text-right tabular-nums">{p.n}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-2xl border border-black/10 p-5 dark:border-white/10">
          <h2 className="font-medium">Provenance des affaires</h2>
          <p className="mb-4 text-xs opacity-60">Affaires créées sur la période, par provenance du lead, et part signée.</p>
          <table className="w-full text-sm tabular-nums">
            <thead className="text-left text-xs opacity-60">
              <tr><th className="pb-2">Provenance</th><th className="pb-2 text-right">Créées</th><th className="pb-2 text-right">Signées</th><th className="pb-2 text-right">Taux</th></tr>
            </thead>
            <tbody>
              {(data.provenance[periode] ?? []).map((p) => (
                <tr key={p.provenance} className="border-t border-black/5 dark:border-white/10">
                  <td className="py-1.5">{p.provenance}</td>
                  <td className="text-right">{p.total}</td>
                  <td className="text-right">{p.gagnees}</td>
                  <td className="text-right">{p.total ? pf.format(p.gagnees / p.total) : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-black/10 p-5 dark:border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-medium">Affaires signées</h2>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher une affaire" aria-label="Rechercher une affaire"
            className="w-56 rounded-lg border border-black/15 bg-transparent px-3 py-1.5 text-sm dark:border-white/20" />
        </div>
        <div className="mt-4 max-h-[28rem] overflow-auto">
          <table className="w-full text-sm tabular-nums">
            <thead className="sticky top-0 bg-white text-left text-xs opacity-80 dark:bg-[#0b0f1f]">
              <tr><th className="pb-2">Affaire</th><th className="pb-2">Signée le</th><th className="pb-2 text-right">Montant AED</th><th className="pb-2 text-right">Montant d&apos;origine</th><th className="pb-2 pl-3">Provenance</th></tr>
            </thead>
            <tbody>
              {signees.map((d) => (
                <tr key={d.id} className="border-t border-black/5 dark:border-white/10">
                  <td className="py-1.5 pr-3">{d.affaire}</td>
                  <td className="whitespace-nowrap pr-3">{dateFmt.format(new Date(`${d.date}T00:00:00Z`))}</td>
                  <td className="text-right">{d.montantAed == null ? "—" : nf.format(d.montantAed)}</td>
                  <td className="whitespace-nowrap text-right">{nf.format(d.valeur)} {d.devise}</td>
                  <td className="pl-3">{d.provenance ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="mt-6 text-xs opacity-50">
        Données Pipedrive lues le {heureFmt.format(new Date(data.majLe))}.
        {data.autresDevises ? ` ${data.autresDevises} affaire(s) dans une autre devise non comptée(s) dans le CA.` : ""}
      </p>
    </main>
  );
}
