import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { webflowServiceItems } from "@/data/webflow-services";

export default function ServicesPage() {
  return (
    <div>
      <section>
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
              Services
            </p>
            <h1 className="section-title text-3xl font-semibold text-accent-darkBlue sm:text-5xl">
              La liste de nos services
            </h1>
            <p className="text-sm text-muted sm:text-base">
              Découvrez la gamme complète des services de conseil et d'accompagnement que nous
              proposons, conçus spécifiquement pour vos besoins.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
              <span>Fiscalité</span>
              <span>Expatriation</span>
              <span>Structuration</span>
            </div>
          </div>
          <div className="neo-card flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
              Approche cabinet
            </p>
            <h3 className="mt-3 text-xl font-semibold text-accent-darkBlue">
              Un accompagnement structuré, sans promesses inutiles.
            </h3>
            <p className="mt-3 text-sm text-muted">
              Nous analysons votre situation, puis nous sécurisons vos obligations en France et aux
              Émirats avant toute décision opérationnelle.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="/eligibilite" className="neo-button neo-button-purple">
                Démarrer une consultation fiscale
              </Link>
              <Link href="/methode" className="text-sm font-semibold text-primary-600">
                Voir la méthode <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {webflowServiceItems.map((service) => (
            <article key={service.href} className="neo-card">
              <h2 className="text-lg font-semibold text-accent-darkBlue">{service.title}</h2>
              <p className="mt-3 text-sm text-muted">{service.description}</p>
              <Link
                href={service.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
              >
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-cta px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-semibold">Planifions sereinement votre projet</h2>
        <div className="mt-6">
          <Link href="/eligibilite" className="neo-button neo-button-light">
            DÉMARRER MA CONSULTATION
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">FAQ</p>
          <h2 className="section-title text-2xl font-semibold text-accent-darkBlue">
            Les questions les plus communes
          </h2>
        </div>
        <div className="grid gap-4">
          <details className="neo-card neo-card-compact">
            <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
              Est-ce que mon expatriation peut être remise en cause ?
            </summary>
            <p className="mt-3 text-sm text-muted">
              Cela dépend de votre situation réelle (lieu de vie, activité, famille, revenus). Un
              diagnostic permet d’identifier les points sensibles et de les corriger, mais oui c'est
              tout à fait possible.
            </p>
          </details>
          <details className="neo-card neo-card-compact">
            <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
              Est-ce que mes liens en France posent problème ?
            </summary>
            <p className="mt-3 text-sm text-muted">
              Pas en soi. Immobilier, famille ou société doivent simplement être intégrés dans une
              structuration cohérente.
            </p>
          </details>
          <details className="neo-card neo-card-compact">
            <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
              Est-ce grave si je me suis installé sans structuration préalable ?
            </summary>
            <p className="mt-3 text-sm text-muted">
              C’est fréquent. Dans la majorité des cas, il est possible de clarifier et sécuriser la
              situation a posteriori. Mais ce n'est pas à prendre à la légère.
            </p>
          </details>
          <details className="neo-card neo-card-compact">
            <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
              Comment savoir ce que je dois faire dans mon cas précis ?
            </summary>
            <p className="mt-3 text-sm text-muted">
              Chaque situation est unique. Nous commençons toujours par une analyse complète avant
              toute recommandation.
            </p>
          </details>
          <details className="neo-card neo-card-compact">
            <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
              Dois-je créer une société ou une holding aux Émirats ?
            </summary>
            <p className="mt-3 text-sm text-muted">
              Pas systématiquement. La structure dépend de votre activité, de vos revenus et de vos
              objectifs personnels.
            </p>
          </details>
          <details className="neo-card neo-card-compact">
            <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
              Est-ce que je peux gérer mon expatriation et celle de ma famille en même temps ?
            </summary>
            <p className="mt-3 text-sm text-muted">
              Oui. Les aspects personnels, professionnels et patrimoniaux doivent être pensés
              ensemble dès le départ.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
