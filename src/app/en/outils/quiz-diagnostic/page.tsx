import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

export default function QuizDiagnosticPage() {
  return (
    <SectionShell
      eyebrow="Quiz"
      title="Structured tax diagnostic"
      description="Get a tailored action plan in under 5 minutes."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        The interactive quiz qualifies your situation (relocation, real estate,
        tax residency) and provides personalized recommendations.
      </div>
      <div className="mt-8">
        <Link
          href="/en/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Start a tax consultation
        </Link>
      </div>
    </SectionShell>
  );
}
