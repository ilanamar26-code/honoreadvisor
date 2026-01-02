import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/section-shell";

const tools = [
  {
    title: "Calculateurs fiscaux",
    href: "/outils/calculateurs",
    description: "Exit tax, IFI, plus-values et simulations avancees."
  },
  {
    title: "Quiz diagnostic",
    href: "/outils/quiz-diagnostic",
    description: "Qualification structurée pour prioriser vos décisions."
  },
  {
    title: "Ressources",
    href: "/outils/ressources",
    description: "Guides pratiques, checklists et memos fiscaux."
  }
];

export default function ToolsPage() {
  return (
    <SectionShell
      eyebrow="Outils"
      title="Des outils pour clarifier chaque decision"
      description="Automatisez vos simulations et obtenez des recommandations immédiates."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {tools.map((tool) => (
          <article key={tool.title} className="glass rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-accent-darkBlue">{tool.title}</h2>
            <p className="mt-3 text-sm text-muted">{tool.description}</p>
            <Link
              href={tool.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
            >
              Ouvrir
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
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
