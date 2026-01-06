import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function StructurationPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/services" className="text-sm font-semibold text-primary-600">
        ← Retour aux services
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Structurez vos flux internationaux sans fragiliser votre conformité
      </h1>
      <p className="mt-4 text-muted">
        Structuration de société internationnale
      </p>
      <p className="mt-2 text-sm text-muted">Structuration adaptée à votre situation fiscale.</p>

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

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <h2 className="text-lg font-semibold text-accent-darkBlue">
            Les avantages d'une structuration internationale
          </h2>
          <p className="mt-3">
            La structuration de vos activités au niveau international peut offrir des avantages significatifs en termes de croissance et d'optimisation fiscale. Au sein du cabinet Honoré Advisor, notre expertise en fiscalité internationnale des entreprises vous guide dans la création et la gestion d'une structuration internationale efficace.
          </p>
          <p className="mt-3">
            La structuration internationnale permet de diversifier ses activités et de tirer parti des opportunités mondiales. Elle offre également des avantages fiscaux majeurs découlant principalement d'arbitrages devant être fait en amont de toute restructuration. Les fiscalistes du cabinet vous aident à concevoir une structuration adaptée à vos besoins et à vos objectifs internationnaux, dans un soucis constant de conformité fiscale.
          </p>
        </div>
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Gestion et conformité internationales</h2>
          <p className="mt-3">
            Une fois votre structure internationale en place, la gestion et la conformité deviennent essentielles. Vous devrez vous conformer aux lois fiscales de chaque juridiction où vous opérez. Nos fiscalistes vous accompagne dans ces défis pour assurer la perennité de votre structuration internationale.
          </p>
          <p className="mt-3 font-semibold text-accent-darkBlue">L'intervention du cabinet Honoré Advisor en bref :</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Expertise en structuration de société internationale.</li>
            <li>Arbitrage financier et fiscal sur le choix des juridictions.</li>
            <li>Gestion internationale des obligations fiscales.</li>
            <li>Conformité légale et fiscale dans plusieurs pays.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Démarrer une consultation fiscale
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
