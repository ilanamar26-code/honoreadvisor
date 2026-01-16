import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { webflowServiceItemsEn } from "@/data/webflow-services.en";

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
              Our service offering
            </h1>
            <p className="text-sm text-muted sm:text-base">
              Explore the full range of advisory services we deliver, tailored to cross-border
              France–UAE situations.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
              <span>Tax</span>
              <span>Relocation</span>
              <span>Structuring</span>
            </div>
          </div>
          <div className="neo-card flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
              Firm approach
            </p>
            <h3 className="mt-3 text-xl font-semibold text-accent-darkBlue">
              Structured support without empty promises.
            </h3>
            <p className="mt-3 text-sm text-muted">
              We analyze your situation, then secure compliance in France and the UAE before any
              operational decision.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="/en/eligibilite" className="neo-button neo-button-purple">
                Start a tax consultation
              </Link>
              <Link href="/en/methode" className="text-sm font-semibold text-primary-600">
                View the method <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {webflowServiceItemsEn.map((service) => (
            <article key={service.href} className="neo-card">
              <h2 className="text-lg font-semibold text-accent-darkBlue">{service.title}</h2>
              <p className="mt-3 text-sm text-muted">{service.description}</p>
              <Link
                href={service.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-cta px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-semibold">Let’s plan your project with clarity</h2>
        <div className="mt-6">
          <Link href="/en/eligibilite" className="neo-button neo-button-light">
            START MY CONSULTATION
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">FAQ</p>
          <h2 className="section-title text-2xl font-semibold text-accent-darkBlue">
            Most common questions
          </h2>
        </div>
        <div className="grid gap-4">
          <details className="neo-card neo-card-compact">
            <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
              Can my expatriation be challenged?
            </summary>
            <p className="mt-3 text-sm text-muted">
              It depends on your real situation (where you live, work, family, income). A diagnosis
              identifies sensitive points and how to address them—so yes, it can be challenged.
            </p>
          </details>
          <details className="neo-card neo-card-compact">
            <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
              Do my ties to France create issues?
            </summary>
            <p className="mt-3 text-sm text-muted">
              Not by themselves. Property, family, or a company must simply be integrated into a
              coherent structure.
            </p>
          </details>
          <details className="neo-card neo-card-compact">
            <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
              Is it a problem if I moved without prior structuring?
            </summary>
            <p className="mt-3 text-sm text-muted">
              It is common. In most cases, the situation can be clarified and secured afterward, but
              it should be handled carefully.
            </p>
          </details>
          <details className="neo-card neo-card-compact">
            <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
              How do I know what I should do in my case?
            </summary>
            <p className="mt-3 text-sm text-muted">
              Every situation is unique. We always start with a full analysis before making
              recommendations.
            </p>
          </details>
          <details className="neo-card neo-card-compact">
            <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
              Should I create a company or holding in the UAE?
            </summary>
            <p className="mt-3 text-sm text-muted">
              Not systematically. The structure depends on your activity, income, and personal
              goals.
            </p>
          </details>
          <details className="neo-card neo-card-compact">
            <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
              Can I manage my expatriation and my family’s at the same time?
            </summary>
            <p className="mt-3 text-sm text-muted">
              Yes. Personal, professional, and wealth components should be planned together from
              the start.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
