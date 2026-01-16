import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ExpatriationPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/en/services" className="text-sm font-semibold text-primary-600">
        ← Back to services
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Secure your UAE tax residency without grey areas
      </h1>
      <p className="mt-4 text-muted">
        We frame tax residency, proof of substance, and France–UAE coherence.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Symptoms</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Uncertainty about tax residency</li>
            <li>Active contracts in France</li>
            <li>Unstructured time spent in France</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Risks</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Tax residency reclassification</li>
            <li>Double taxation</li>
            <li>Penalties and assessments</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">What we do</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Presence & flow audit</li>
            <li>UAE residency evidence</li>
            <li>France–UAE alignment</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-accent-darkBlue">What you get</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Clear strategy + evidence checklist</li>
            <li>Compliance plan</li>
            <li>Transition timeline</li>
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
          <li>Passport / visa</li>
          <li>Employment contracts / mandates</li>
          <li>Travel tickets / entry-exit logs</li>
          <li>Bank accounts</li>
          <li>French assets</li>
        </ul>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <h2 className="text-lg font-semibold text-accent-darkBlue">
            UAE Tax Residency Certificate (TRC)
          </h2>
          <p className="mt-2 text-sm text-muted">Official UAE tax residency documentation.</p>
          <h3 className="mt-3 text-sm font-semibold text-accent-darkBlue">
            Simplified TRC process
          </h3>
          <p className="mt-3">
            The UAE Tax Residency Certificate is a critical step for expatriates.
          </p>
          <p className="mt-3">
            Whether you need to prove residency to French authorities or apply the France–UAE treaty
            to reduce withholding, the TRC is required.
          </p>
          <p className="mt-3">
            Honoré Advisor assists in obtaining the TRC and signature of French treaty forms (Cerfa
            5000, 5001, 5002).
          </p>
        </div>
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <h2 className="text-lg font-semibold text-accent-darkBlue">Impatriate tax regime</h2>
          <p className="mt-2 text-sm text-muted">
            Tax consequences of returning to France and the impatriate regime.
          </p>
          <p className="mt-3">
            The impatriate regime (Art. 155B CGI) is open to non-resident employees relocating to
            France within a group or recruited from abroad.
          </p>
          <p className="mt-3">
            It offers significant benefits for the first 8 years in France, provided the rules are
            applied correctly.
          </p>
          <p className="mt-3 font-semibold text-accent-darkBlue">You want to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Verify eligibility for the impatriate regime</li>
            <li>Optimize the regime based on your situation</li>
            <li>Understand the benefits available</li>
            <li>Assess tax impacts in France and abroad</li>
            <li>Clarify all French tax obligations</li>
            <li>File your tax returns in an optimal way</li>
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
