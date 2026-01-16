import Link from "next/link";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    title: "Diagnosis",
    description:
      "We analyze your real situation, identify tax risks, and surface fragility points before any decision."
  },
  {
    title: "Structuring",
    description:
      "We build a coherent, defensible tax and wealth architecture aligned with the France–UAE treaty."
  },
  {
    title: "Execution",
    description:
      "Operational rollout, ongoing monitoring, and secured compliance in France and the UAE."
  }
];

export default function MethodePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal className="space-y-5" delay={0}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Method</p>
          <h1 className="text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
            A clear process built for high-stakes dossiers
          </h1>
          <p className="text-muted">
            Our method prioritizes legal security, evidence of substance, and an executable action plan.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            <span>Evidence</span>
            <span>Substance</span>
            <span>France–UAE compliance</span>
          </div>
          <Link
            href="/en/eligibilite"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
          >
            Start a tax consultation
          </Link>
        </Reveal>
        <Reveal className="neo-card" delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            What you receive
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>Risk analysis and identification of fragile points.</li>
            <li>Prioritized action plan with execution timeline.</li>
            <li>Evidence checklist for France and the UAE.</li>
            <li>Realistic, defensible, documented recommendations.</li>
          </ul>
        </Reveal>
      </div>

      <div className="mt-12 method-timeline">
        {steps.map((step, index) => (
          <Reveal
            key={step.title}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            delay={80 + index * 60}
          >
            <div className="timeline-dot">
              <span>0{index + 1}</span>
            </div>
            <div className="timeline-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                {step.title}
              </p>
              <p className="mt-3 text-sm text-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <blockquote className="quote-card">
          <span className="quote-mark">“</span>
          <span className="quote-text">
            We favor sound, coherent decisions fully aligned with the applicable frameworks.
          </span>
          <span className="quote-signature">Honoré Advisor</span>
        </blockquote>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal className="neo-card" delay={0}>
          <p className="text-sm font-semibold text-accent-darkBlue">Why this method?</p>
          <p className="mt-3 text-sm text-muted">
            Because poorly documented expatriations can be reclassified. We build robust, defensible
            files with concrete evidence and ongoing follow-up.
          </p>
        </Reveal>
        <Reveal className="neo-card" delay={120}>
          <p className="text-sm font-semibold text-accent-darkBlue">What we avoid</p>
          <p className="mt-3 text-sm text-muted">
            Fragile setups, vague promises, and optimization disconnected from reality. Every
            decision is framed, justified, and defensible.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
