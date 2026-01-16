import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function TrcPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/en/services" className="text-sm font-semibold text-primary-600">
        ← Back to services
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Declare French income as a UAE resident without exposure
      </h1>
      <p className="mt-4 text-muted">
        We frame French obligations, treaty relief, and required documentation.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <h2 className="text-lg font-semibold text-accent-darkBlue">
            Form 2074 - non-resident share disposals
          </h2>
          <p className="mt-2 text-sm text-muted">
            Income tax filing for non-resident share disposals (Form 2074).
          </p>
          <h3 className="mt-3 text-sm font-semibold text-accent-darkBlue">
            Specific tax rules for share disposals
          </h3>
          <p className="mt-3">
            Form 2074 is required for non-residents selling shares in French companies. We guide you
            through the process and compliance requirements.
          </p>
          <p className="mt-3">
            We also assist with capital gains computation and the associated tax calculation.
          </p>
          <h3 className="mt-3 text-sm font-semibold text-accent-darkBlue">
            Optimizing tax on share disposals
          </h3>
          <p className="mt-3">
            We provide legal, tailored strategies to reduce tax exposure while staying compliant.
          </p>
          <p className="mt-3 font-semibold text-accent-darkBlue">
            Honoré Advisor delivers:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Form 2074 expertise for non-residents</li>
            <li>Personalized assessment of French tax exposure</li>
            <li>Tax optimization guidance within the rules</li>
            <li>Full preparation and submission support</li>
            <li>Ongoing compliance follow-up</li>
          </ul>
        </div>

        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <h2 className="text-lg font-semibold text-accent-darkBlue">
            French real estate wealth tax (IFI)
          </h2>
          <p className="mt-2 text-sm text-muted">
            Annual IFI filing for non-residents.
          </p>
          <h3 className="mt-3 text-sm font-semibold text-accent-darkBlue">
            IFI filing for non-residents
          </h3>
          <p className="mt-3">
            We handle IFI obligations with an optimization mindset while preserving full compliance.
          </p>
          <p className="mt-3">
            Our goal is to optimize IFI while maintaining credibility with tax authorities.
          </p>
          <p className="mt-3">
            In case of review or revaluation, we assist to limit adjustments.
          </p>
          <p className="mt-3 font-semibold text-accent-darkBlue">We optimize:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Scope of taxable assets</li>
            <li>Valuation methodology</li>
            <li>Debt deductibility and caps</li>
            <li>IFI caps and reliefs</li>
            <li>Professional asset classification</li>
            <li>Statute of limitations strategy</li>
          </ul>
        </div>

        <div className="glass rounded-3xl p-6 text-sm text-muted lg:col-span-2">
          <h2 className="text-lg font-semibold text-accent-darkBlue">
            Non-resident real estate capital gains
          </h2>
          <p className="mt-2 text-sm text-muted">
            Capital gains reporting for non-residents.
          </p>
          <h3 className="mt-3 text-sm font-semibold text-accent-darkBlue">
            Understand the specific rules
          </h3>
          <p className="mt-3">
            We guide you through the rules governing non-resident real estate capital gains and help
            optimize your position within French law.
          </p>
          <h3 className="mt-3 text-sm font-semibold text-accent-darkBlue">
            Transparent capital gains calculation
          </h3>
          <p className="mt-3">
            We explain the calculation method and help you file properly.
          </p>
          <h3 className="mt-3 text-sm font-semibold text-accent-darkBlue">
            Advanced optimization strategies
          </h3>
          <p className="mt-3">
            We provide tailored strategies to reduce tax legally and maximize outcomes.
          </p>
          <p className="mt-3 font-semibold text-accent-darkBlue">
            Honoré Advisor delivers:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Expertise in non-resident capital gains</li>
            <li>Personalized review of your French tax exposure</li>
            <li>Legal tax optimization strategies</li>
            <li>Full preparation and submission support</li>
            <li>Compliance follow-up</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-accent-darkBlue">Required documents</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">
          <li>French income (IR, rental, dividends)</li>
          <li>UAE residency certificate</li>
          <li>Tax history</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-accent-darkBlue">Process</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {"Qualification,Structuring,Execution".split(",").map((step) => (
            <div key={step} className="glass rounded-2xl p-4 text-sm text-muted">
              {step}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/en/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Start a tax consultation
        </Link>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary-700"
        >
          WhatsApp (quick question)
        </a>
      </div>
    </section>
  );
}
