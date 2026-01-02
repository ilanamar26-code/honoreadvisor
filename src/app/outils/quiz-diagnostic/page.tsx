import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

export default function QuizDiagnosticPage() {
  return (
    <SectionShell
      eyebrow="Quiz"
      title="Diagnostic fiscal structuré"
      description="Obtenez un plan d'action personnalisé en moins de 5 minutes."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Le quiz interactif qualifiera votre situation (expatriation, immobilier,
        résidence fiscale) et proposera des recommandations personnalisées.
      </div>
      <div className="mt-8">
        <Link
          href="/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Démarrer ma consultation
        </Link>
      </div>
    </SectionShell>
  );
}
