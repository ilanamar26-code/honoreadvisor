import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function StructurationPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/en/services" className="text-sm font-semibold text-primary-600">
        ← Back to services
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Structure international flows without weakening compliance
      </h1>
      <p className="mt-4 text-muted">International company structuring.</p>
      <p className="mt-2 text-sm text-muted">A structure aligned with your tax situation.</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Symptoms</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Undocumented intercompany flows</li>
            <li>Mislocated IP</li>
            <li>Suboptimal dividends</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Risks</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>French tax exposure</li>
            <li>Management fee reclassification</li>
            <li>Substance conflicts</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">What we do</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Flow mapping</li>
            <li>Holding/IP architecture</li>
            <li>Documentation and pricing</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">What you get</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Validated structural scheme</li>
            <li>Contracts and documentation</li>
            <li>Execution plan</li>
          </ul>
        </div>
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

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-accent-darkBlue">Required documents</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">
          <li>Organization chart</li>
          <li>Bylaws</li>
          <li>Intercompany contracts</li>
          <li>Revenue by country</li>
          <li>Annual accounts</li>
        </ul>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <h2 className="text-lg font-semibold text-accent-darkBlue">
            Benefits of international structuring
          </h2>
          <p className="mt-3">
            International structuring can support growth and deliver tax efficiencies when designed
            carefully. We help build a structure aligned with your goals and compliance needs.
          </p>
          <p className="mt-3">
            The right arbitration between jurisdictions must be done upstream to avoid later
            fragility. We design structures that are defensible and operationally coherent.
          </p>
        </div>
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <h2 className="text-lg font-semibold text-accent-darkBlue">International management & compliance</h2>
          <p className="mt-3">
            Once in place, governance and compliance become critical. We support ongoing obligations
            across jurisdictions to ensure long-term durability.
          </p>
          <p className="mt-3 font-semibold text-accent-darkBlue">Our support in brief:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>International structuring expertise</li>
            <li>Jurisdiction selection and arbitration</li>
            <li>Cross-border compliance management</li>
            <li>Legal and tax alignment across countries</li>
          </ul>
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
