import Link from "next/link";

export default function DiagnosticRedirectPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-accent-darkBlue">Eligibility</h1>
      <p className="mt-4 text-muted">
        The diagnostic has been replaced by the eligibility questionnaire.
      </p>
      <div className="mt-6">
        <Link
          href="/en/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Start a tax consultation
        </Link>
      </div>
    </section>
  );
}
