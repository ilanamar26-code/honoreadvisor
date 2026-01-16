import Link from "next/link";

const pricingGroups = [
  {
    title: "Analysis & tax management",
    items: [
      {
        name: "Tax consultation",
        description:
          "1-hour session with a senior tax advisor. Review of your current situation, identification of key issues, first practical recommendations, and watch points.",
        price: "From €790"
      },
      {
        name: "Relocation tax analysis",
        description:
          "In-depth review of tax impacts of your departure from France (income, capital gains, real estate, companies). Tax residency determination. Structuring scenarios (direct vs holding). Wealth strategy recommendations.",
        price: "From €4,800"
      },
      {
        name: "Exit Tax",
        description:
          "Exit Tax filing, with calculation of latent gains at expatriation. Assets ≤ €2.5M: simplified management and precise computation. Assets > €2.5M: flow optimization, simulations, and structuring to limit tax impact.",
        price: "From €4,800"
      },
      {
        name: "Annual Exit Tax follow-up filing",
        description:
          "Preparation and submission of the mandatory annual follow-up declaration. Monitoring of deadlines and compliance to avoid penalties.",
        price: "From €880"
      },
      {
        name: "Tax Residency Certificate (TRC)",
        description:
          "Official certificate issued by UAE tax authorities confirming your UAE tax residency.",
        price: "From €880"
      }
    ]
  },
  {
    title: "Tax obligations",
    items: [
      {
        name: "Forms 5000 & 5001",
        description:
          "Preparation and procurement of forms required for treaty relief (dividends, interest, royalties). Optimization of cross-border flows and withholding reduction.",
        price: "From €2,400"
      },
      {
        name: "Income tax & IFI (non-residents)",
        description:
          "Annual French filing for French-source income and real estate assets. Prior analysis to optimize taxation.",
        price: "From €1,200"
      },
      {
        name: "Tax audit assistance",
        description:
          "File review, argument preparation, communication with tax authorities, representation and defense throughout the process.",
        price: "From €4,000"
      },
      {
        name: "Real estate tax optimization (non-residents)",
        description:
          "Review of French real estate holdings (furnished rentals, LMNP/LMP, SCI, direct holding). Optimized structures to reduce tax and improve yield.",
        price: "From €2,800"
      }
    ]
  },
  {
    title: "Legal structuring",
    items: [
      {
        name: "UAE residency visa",
        description:
          "Full file including investor visa or company-linked visa. Support for medical steps and Emirates ID.",
        price: "From €1,500"
      },
      {
        name: "Annual accounting (UAE)",
        description:
          "Annual accounts for local companies (Free Zone or Mainland). Tax filings (VAT, ESR, CBCR if applicable). Audit support if required.",
        price: "From €900 / year"
      },
      {
        name: "UAE real estate acquisition support",
        description:
          "Full assistance with UAE property acquisition: direct vs company holding comparison, tax study, legal structuring, and banking support.",
        price: "From €1,800"
      },
      {
        name: "Will drafting (UAE)",
        description:
          "Drafting and registration of a will compliant with local law (DIFC or Dubai Courts). Secure asset transmission to heirs.",
        price: "From €3,500"
      },
      {
        name: "Bank account opening (UAE or Europe)",
        description:
          "Assistance with opening professional or personal accounts. KYC file preparation, bank coordination, and fund release support if needed.",
        price: "From €1,500"
      },
      {
        name: "Free Zone or Mainland company setup",
        description:
          "Full package including license, registered address, incorporation, and administrative support.",
        price: "From €12,500"
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
            Pricing
          </p>
          <h1 className="section-title text-3xl font-semibold text-accent-darkBlue sm:text-5xl">
            A clear grid aligned with high-stakes dossiers
          </h1>
          <p className="text-sm text-muted sm:text-base">
            The prices below are indicative. Each file is validated after diagnosis and scoping to
            ensure tax coherence and execution.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            <span>Relocation</span>
            <span>Structuring</span>
            <span>UAE</span>
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
                <span className="text-right">Price</span>
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
        <h2 className="text-2xl font-semibold">Let’s plan your project with confidence</h2>
        <p className="mt-3 text-sm text-white/80">
          A fast diagnosis confirms scope and the right proposal.
        </p>
        <div className="mt-6">
          <Link href="/en/eligibilite" className="neo-button neo-button-light">
            Start a tax consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
