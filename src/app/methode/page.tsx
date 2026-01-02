import Link from "next/link";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    title: "Diagnostic",
    description:
      "Analyse de votre situation réelle, identification des risques fiscaux et des points de fragilité avant toute décision."
  },
  {
    title: "Structuration",
    description:
      "Construction d’une architecture fiscale et patrimoniale cohérente, défendable et alignée avec la convention France–Émirats."
  },
  {
    title: "Exécution",
    description:
      "Mise en œuvre opérationnelle, suivi dans le temps et sécurisation des obligations en France et aux Émirats."
  }
];

export default function MethodePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal className="space-y-5" delay={0}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Méthode</p>
          <h1 className="text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
            Un processus clair, pensé pour les dossiers à forts enjeux
          </h1>
          <p className="text-muted">
            Notre méthode privilégie la sécurité juridique, la preuve de substance et un plan
            d'action exécutable.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            <span>Preuves</span>
            <span>Substance</span>
            <span>Conformité France–Émirats</span>
          </div>
          <Link
            href="/eligibilite"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
          >
            Démarrer ma consultation
          </Link>
        </Reveal>
        <Reveal className="neo-card" delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            Ce que vous obtenez
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>Analyse des risques fiscaux et des points de fragilité.</li>
            <li>Plan d'action priorisé avec calendrier d'exécution.</li>
            <li>Liste des preuves à sécuriser en France et aux Émirats.</li>
            <li>Recommandations réalistes, défendables et documentées.</li>
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
            Nous privilégions des décisions solides, cohérentes et pleinement alignées avec les cadres applicables.
          </span>
          <span className="quote-signature">Honoré Advisor</span>
        </blockquote>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal className="neo-card" delay={0}>
          <p className="text-sm font-semibold text-accent-darkBlue">Pourquoi cette méthode ?</p>
          <p className="mt-3 text-sm text-muted">
            Parce qu'une expatriation mal documentée peut être requalifiée. Nous construisons un
            dossier robuste et défendable, avec des preuves concrètes et un suivi dans le temps.
          </p>
        </Reveal>
        <Reveal className="neo-card" delay={120}>
          <p className="text-sm font-semibold text-accent-darkBlue">Ce que nous évitons</p>
          <p className="mt-3 text-sm text-muted">
            Les montages fragiles, les promesses vagues et l'optimisation déconnectée de la réalité.
            Chaque décision est cadrée, justifiée et assumable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
