import Link from "next/link";

const pricingGroups = [
  {
    title: "Analyse et Gestion fiscale",
    items: [
      {
        name: "Consultation fiscale",
        description:
          "1h d’échange avec un fiscaliste expert. Analyse de votre situation actuelle, identification de vos problématiques, premières recommandations pratiques et points d’attention à surveiller.",
        price: "À partir de 790 €"
      },
      {
        name: "Analyse fiscale d’un projet d’expatriation",
        description:
          "Étude approfondie des incidences fiscales liées à votre départ de France (revenus, plus-values, immobilier, sociétés). Détermination de la résidence fiscale. Scénarios comparés de structuration (direct vs holding). Recommandations sur la mise en place d’une stratégie patrimoniale adaptée.",
        price: "À partir de 4 800 €"
      },
      {
        name: "Exit Tax",
        description:
          "Déclaration d’Exit Tax, avec calcul et détermination de l’imposition latente sur les plus-values lors de l’expatriation. Actifs ≤ 2,5 M€ : gestion simplifiée, calcul précis, dépôt du dossier. Actifs > 2,5 M€ : optimisation des flux, simulations, structuration adaptée pour limiter l’impact fiscal.",
        price: "À partir de 4 800 €"
      },
      {
        name: "Déclaration annuelle de suivi de l’Exit Tax",
        description:
          "Rédaction et dépôt de la déclaration annuelle de suivi (obligatoire). Suivi du respect des délais et obligations déclaratives, afin d’éviter toute sanction fiscale.",
        price: "À partir de 880 €"
      },
      {
        name: "Obtention d’un TRC (Tax Residency Certificate)",
        description:
          "Attestation officielle émise par l’administration fiscale émiratie confirmant votre résidence fiscale aux Émirats.",
        price: "À partir de 880 €"
      }
    ]
  },
  {
    title: "Obligations fiscales",
    items: [
      {
        name: "Formulaires 5000 & 5001",
        description:
          "Préparation et obtention des formulaires nécessaires pour appliquer les conventions fiscales (dividendes, intérêts, royalties). Optimisation des flux transfrontaliers et réduction des retenues à la source.",
        price: "À partir de 2 400 €"
      },
      {
        name: "Déclaration IR & IFI (non-résidents)",
        description:
          "Déclaration annuelle en France de vos revenus de source française et de votre patrimoine immobilier. Analyse préalable de votre situation pour optimiser l’imposition.",
        price: "À partir de 1 200 €"
      },
      {
        name: "Assistance au contrôle fiscal",
        description:
          "Analyse du dossier, préparation des arguments, communication avec l’administration fiscale, représentation et défense de vos intérêts tout au long de la procédure.",
        price: "À partir de 4 000 €"
      },
      {
        name: "Optimisation fiscale immobilière (non-résidents)",
        description:
          "Étude de votre situation immobilière en France (location meublée, LMNP/LMP, SCI, détention en direct). Proposition de schémas optimisés pour réduire la fiscalité et améliorer le rendement.",
        price: "À partir de 2 800 €"
      }
    ]
  },
  {
    title: "Structuration juridique",
    items: [
      {
        name: "Obtention d’un visa de résidence (Émirats)",
        description:
          "Dossier complet incluant visa investisseur ou visa lié à la société. Assistance aux démarches médicales et Emirates ID.",
        price: "À partir de 1 500 €"
      },
      {
        name: "Comptabilité annuelle (Émirats)",
        description:
          "Tenue des comptes annuels d’une société locale (Free Zone ou Mainland). Déclarations fiscales (VAT, ESR, CBCR si applicable). Assistance à l’audit si requis.",
        price: "À partir de 900 € / an"
      },
      {
        name: "Accompagnement acquisition immobilière (Émirats)",
        description:
          "Assistance complète dans l’acquisition d’un bien immobilier aux Émirats : comparaison entre acquisition directe et via société. Étude fiscale, structuration juridique, accompagnement bancaire.",
        price: "À partir de 1 800 €"
      },
      {
        name: "Obtention d’un testament (Émirats)",
        description:
          "Rédaction et enregistrement d’un testament conforme aux lois locales (DIFC ou Dubai Courts). Sécurisation de la transmission de vos biens aux héritiers.",
        price: "À partir de 3 500 €"
      },
      {
        name: "Ouverture de compte bancaire (Émirats ou Europe)",
        description:
          "Assistance pour l’ouverture de compte professionnel ou personnel. Préparation des dossiers KYC, coordination avec la banque, et accompagnement au déblocage de fonds le cas échéant.",
        price: "À partir de 1 500 €"
      },
      {
        name: "Création de société Free Zone ou Mainland",
        description:
          "Package complet incluant licence, siège social, enregistrement et accompagnement administratif.",
        price: "À partir de 12 500 €"
      }
    ]
  }
];

export default function TarifsPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
            Tarifs
          </p>
          <h1 className="section-title text-3xl font-semibold text-accent-darkBlue sm:text-5xl">
            Une grille claire, alignée avec des dossiers à forts enjeux
          </h1>
          <p className="text-sm text-muted sm:text-base">
            Les tarifs ci-dessous sont présentés à titre indicatif. Chaque dossier est validé
            après diagnostic et cadrage, afin de garantir la cohérence fiscale et l’exécution.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            <span>Expatriation</span>
            <span>Structuration</span>
            <span>Émirats</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 pb-16">
        {pricingGroups.map((group) => (
          <div key={group.title} className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="section-title text-2xl font-semibold text-accent-darkBlue">
                {group.title}
              </h2>
              <div className="hidden h-px flex-1 bg-primary-100 sm:ml-6 sm:block" />
            </div>
            <div className="overflow-hidden rounded-3xl border border-primary-100 bg-white/70 shadow-soft">
              <div className="hidden items-center gap-6 border-b border-primary-100 px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 md:grid md:grid-cols-[1.1fr,2fr,auto]">
                <span>Service</span>
                <span>Description</span>
                <span className="text-right">Tarif</span>
              </div>
              <div className="divide-y divide-primary-100">
                {group.items.map((item, index) => (
                  <div
                    key={item.name}
                    className={`grid gap-4 px-6 py-5 md:grid-cols-[1.1fr,2fr,auto] md:items-center ${index % 2 === 0 ? "bg-white" : "bg-primary-50/40"}`}
                  >
                    <h3 className="text-base font-semibold text-accent-darkBlue">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted">{item.description}</p>
                    <div className="text-right">
                      <span className="inline-flex shrink-0 whitespace-nowrap rounded-full border border-primary-200 bg-white px-4 py-2 text-xs font-semibold text-primary-600">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="section-cta px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-semibold">Planifions sereinement votre projet</h2>
        <p className="mt-3 text-sm text-white/80">
          Un diagnostic rapide permet de confirmer le périmètre exact et la proposition adaptée.
        </p>
        <div className="mt-6">
          <Link href="/eligibilite" className="neo-button neo-button-light">
            Démarrer une consultation fiscale
          </Link>
        </div>
      </section>
    </div>
  );
}
