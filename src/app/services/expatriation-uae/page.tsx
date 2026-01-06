import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ExpatriationPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/services" className="text-sm font-semibold text-primary-600">
        ← Retour aux services
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Sécurisez votre résidence fiscale aux Émirats, sans zone grise
      </h1>
      <p className="mt-4 text-muted">
        Nous cadrons la résidence fiscale, la preuve de substance et la cohérence France–Émirats.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Symptômes</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Doute sur la résidence fiscale</li>
            <li>Contrats France encore actifs</li>
            <li>Temps passé en France non cadré</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Risques</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Requalification fiscale</li>
            <li>Double imposition</li>
            <li>Sanctions et redressements</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Ce qu'on fait</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Audit de présence et flux</li>
            <li>Preuves de résidence UAE</li>
            <li>Alignement France–Émirats</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Ce que vous obtenez</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Stratégie claire + checklist preuves</li>
            <li>Plan de mise en conformité</li>
            <li>Calendrier de bascule</li>
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
          <li>Passeport / visa</li>
          <li>Contrats de travail / mandats</li>
          <li>Billets / entrées-sorties</li>
          <li>Comptes bancaires</li>
          <li>Actifs France</li>
        </ul>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <h2 className="text-lg font-semibold text-accent-darkBlue">
            Obtention de certification de résidence fiscale aux Emirats
          </h2>
          <p className="mt-2 text-sm text-muted">Obtention des documents officiels.</p>
          <h3 className="mt-3 text-sm font-semibold text-accent-darkBlue">
            Processus simplifié pour l'obtention du TRC
          </h3>
          <p className="mt-3">
            La Certification de Résidence Fiscale aux Émirats-Arabes-Unis est une étape cruciale pour les expatriés.
          </p>
          <p className="mt-3">
            Que vous souhaitiez justifier de votre résidence fiscale auprès de l'adminsitration fiscale Francaise ou que vous souhaitiez simplement faire application de la convention fiscale Franco-Emiratie pour par exemple eviter la retenue à la source sur les dividendes d'une société Francaise, l'obtention du TRC (Tax Residency Certificate) est obligatoire.
          </p>
          <p className="mt-3">
            Le cabinet Honoré Advisor vous assiste pour obtenir ce certificat de résidence fiscale TRC et obtenir la signature des formulaires fiscaux francais pour l'application de la convention fiscale. (Cerfa 5000, 5001, 5002)
          </p>
        </div>
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Régime fiscal des impatriés</h2>
          <p className="mt-2 text-sm text-muted">
            Conséquence fiscale d'un retour en France et régime fiscal des impatriés.
          </p>
          <p className="mt-3">
            Le régime fiscal des impatriés (Art 155B du CGI) est ouvert aux salariés non-résidents, ayant décidé de venir travailler en France dans le cadre d'une mobilité intra-groupe ou ayant été recruté en France depuis l'étranger.
          </p>
          <p className="mt-3">
            L'option pour ce régime offre de nombreux avantages fiscaux permettant ainsi de bénéficier d'une fiscalité allégée pendant les 8 premières années en France, encore faut-il optimiser au mieux l'application des règles fiscales applicables au régime des impatriès.
          </p>
          <p className="mt-3 font-semibold text-accent-darkBlue">Vous désirez :</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Vérifier votre éligibilité au statut d’impatrié,</li>
            <li>Optimiser l'application du régime selon votre propre situation,</li>
            <li>Comprendre les avantages que vous octroi le statut d’impatrié,</li>
            <li>Connaitre les incidences fiscales en France et à l’étranger de votre nouveau statut,</li>
            <li>Connaitre l’ensemble de vos obligations fiscales en France,</li>
            <li>Remplir, de manière optimale, vos déclarations d'impôt.</li>
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
