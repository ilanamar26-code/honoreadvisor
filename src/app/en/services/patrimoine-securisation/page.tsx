import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function PatrimoinePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/en/services" className="text-sm font-semibold text-primary-600">
        ← Back to services
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Wealth & long-term protection
      </h1>
      <p className="mt-4 text-muted">
        Protection, optimization, and transmission in a France–UAE context.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Symptoms</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Multi-jurisdiction assets</li>
            <li>Unstructured succession planning</li>
            <li>Insufficient protection</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Risks</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Tax exposure</li>
            <li>Succession conflicts</li>
            <li>Limited long-term visibility</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">What we do</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Wealth mapping</li>
            <li>Protection structuring</li>
            <li>France–UAE tax alignment</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">What you get</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Clear wealth strategy</li>
            <li>Long-term protection plan</li>
            <li>Compliant documentation</li>
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
          <li>Asset inventory</li>
          <li>Financial and real estate assets</li>
          <li>Family situation</li>
          <li>Existing structures</li>
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
