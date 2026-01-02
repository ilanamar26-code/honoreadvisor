import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ImmobilierPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/services" className="text-sm font-semibold text-primary-600">
        ← Retour aux services
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Immobilier France & international : sécuriser revenus et fiscalité
      </h1>
      <p className="mt-4 text-muted">
        Plus-values, IFI, revenus fonciers et structuration immobilière transfrontalière.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Symptômes</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Revenus fonciers France</li>
            <li>Plus-values en préparation</li>
            <li>IFI non-résident</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Risques</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Double imposition</li>
            <li>Redressement fiscal</li>
            <li>Blocages bancaires</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Ce qu'on fait</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Analyse des revenus immobiliers</li>
            <li>Structuration et optimisation légale</li>
            <li>Déclarations et conformité</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Ce que vous obtenez</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Stratégie immobilière claire</li>
            <li>Plan déclaratif complet</li>
            <li>Réduction des risques</li>
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
          <li>Revenus locatifs</li>
          <li>Historique des acquisitions</li>
          <li>Dettes et emprunts</li>
          <li>Statuts juridiques</li>
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
