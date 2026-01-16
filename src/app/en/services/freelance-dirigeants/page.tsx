import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function FreelanceDirigeantsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/en/services" className="text-sm font-semibold text-primary-600">
        ← Back to services
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Freelancers, consultants, executives: structure your UAE tax setup
      </h1>
      <p className="mt-4 text-muted">
        Status, income flows, and France–UAE obligations aligned with your activity.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Symptoms</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Multi-country invoicing</li>
            <li>Unclear tax status</li>
            <li>Poorly structured mixed income</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Risks</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Double taxation</li>
            <li>Residency reclassification</li>
            <li>Heightened tax audits</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">What we do</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Status and structure selection</li>
            <li>Flow and contract alignment</li>
            <li>Evidence documentation</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">What you get</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Clear tax action plan</li>
            <li>Compliance checklist</li>
            <li>Execution timeline</li>
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
          <li>Client contracts</li>
          <li>Invoices</li>
          <li>Bank statements</li>
          <li>Current legal structure</li>
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
