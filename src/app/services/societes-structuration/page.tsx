import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function SocietesStructurationPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/services" className="text-sm font-semibold text-primary-600">
        ← Retour aux services
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Sociétés & structuration internationale
      </h1>
      <p className="mt-4 text-muted">
        Holding, IP, management fees et flux transfrontaliers structurés et documentés.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Symptômes</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Flux inter-sociétés non documentés</li>
            <li>IP mal localisée</li>
            <li>Dividendes peu optimisés</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Risques</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Risque fiscal France</li>
            <li>Requalification de management fees</li>
            <li>Conflits de substance</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Ce qu'on fait</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Cartographie des flux</li>
            <li>Architecture holding/IP</li>
            <li>Documentation et pricing</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Ce que vous obtenez</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Schéma structurel validé</li>
            <li>Contrats et documentation</li>
            <li>Plan d'exécution</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-accent-darkBlue">Process</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {["Qualification", "Structuration", "Exécution"].map((step) => (
            <div key={step} className="glass rounded-2xl p-4 text-sm text-muted">
              {step}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-accent-darkBlue">Documents nécessaires</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">
          <li>Organigramme</li>
          <li>Statuts</li>
          <li>Contrats intra-groupe</li>
          <li>CA par pays</li>
          <li>Comptes annuels</li>
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Démarrer ma consultation
        </Link>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary-700"
        >
          WhatsApp (question rapide)
        </a>
      </div>
    </section>
  );
}
