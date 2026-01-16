import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/section-shell";

const tools = [
  {
    title: "Tax calculators",
    href: "/en/outils/calculateurs",
    description: "Exit Tax, IFI, capital gains, and advanced simulations."
  },
  {
    title: "Diagnostic quiz",
    href: "/en/outils/quiz-diagnostic",
    description: "Structured qualification to prioritize decisions."
  },
  {
    title: "Resources",
    href: "/en/outils/ressources",
    description: "Practical guides, checklists, and tax memos."
  }
];

export default function ToolsPage() {
  return (
    <SectionShell
      eyebrow="Tools"
      title="Tools to clarify every decision"
      description="Automate your simulations and receive immediate guidance."
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
              Open
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
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
