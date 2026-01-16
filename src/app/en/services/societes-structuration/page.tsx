import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function SocietesStructurationPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/en/services" className="text-sm font-semibold text-primary-600">
        ← Back to services
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Companies & international structuring
      </h1>
      <p className="mt-4 text-muted">
        Holdings, IP, management fees, and documented cross-border flows.
      </p>

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
