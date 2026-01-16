import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "UAE relocation planning",
    description: "Tax preparation, residency, and a secure departure plan.",
    href: "/en/services/expratriation-emirats"
  },
  {
    title: "Exit Tax filing",
    description: "Assessment, filing, and coordination with the tax authorities.",
    href: "/en/services/exit-tax"
  },
  {
    title: "Company setup & UAE visa",
    description: "Structuring, incorporation, and visas aligned with your project.",
    href: "/en/services/human-resources-consulting"
  },
  {
    title: "DIFC Will registration",
    description: "Drafting and registration to secure succession planning.",
    href: "/en/services/testament-difc"
  }
];

const fitList = [
  "Entrepreneurs with multi-country companies",
  "Executives on UAE mobility",
  "Investors with France + UAE assets"
];

const noFitList = [
  "Low-income cases without cross-border stakes",
  "Aggressive tax optimization requests",
  "Undocumented situations"
];

const deliverables = [
  "Cross-border tax diagnosis (risks / opportunities)",
  "France–UAE flow mapping",
  "Prioritized action plan (30/60/90 days)",
  "Document checklist and evidence to prepare"
];

const stats = [
  { value: "14+", label: "years of experience" },
  { value: "2600+", label: "clients supported" },
  { value: "100+", label: "verified client reviews" }
];

const methodSteps = [
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

const useCases = [
  {
    title: "French entrepreneur relocating to the UAE with family",
    detail: "activity, income, visas, schooling"
  },
  {
    title: "Senior executive in the UAE with economic interests in France",
    detail: "equity, management package, deferred income"
  },
  {
    title: "French real estate investor now tax resident in the UAE",
    detail: "rental income, arbitrage, holding structure"
  },
  {
    title: "UAE-based company doing business with France",
    detail: "invoicing, services, royalties"
  },
  {
    title: "Partial expatriation or uncertain tax residency",
    detail: "family in France, activity abroad, frequent travel"
  },
  {
    title: "Return to France after UAE expatriation",
    detail: "family, assets, tax impact"
  }
];

const faqs = [
  {
    q: "Can my expatriation be challenged?",
    a: "It depends on your real-life facts (where you live, work, family, income). A diagnosis identifies sensitive points and how to fix them—so yes, it can be challenged."
  },
  {
    q: "Do my ties to France create issues?",
    a: "Not by themselves. Property, family, or a company just need to be integrated into a coherent structure."
  },
  {
    q: "Is it serious if I moved without prior structuring?",
    a: "It is common. In most cases, we can clarify and secure the situation afterward—but it should be handled carefully."
  },
  {
    q: "How do I know what I should do in my case?",
    a: "Every situation is unique. We always start with a full analysis before making recommendations."
  },
  {
    q: "Should I create a company or holding in the UAE?",
    a: "Not systematically. The structure depends on your activity, income, and personal goals."
  },
  {
    q: "Can I manage my expatriation and my family’s at the same time?",
    a: "Yes. Personal, professional, and wealth components must be planned together from the start."
  }
];

export default function HomePage() {
  return (
    <div className="bg-aurora">
      <div className="bg-grid">
        <header className="relative overflow-hidden pb-16">
          <div className="mx-auto max-w-6xl px-6 pb-8 pt-12 lg:pb-12 lg:pt-16">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <Reveal className="space-y-6 lg:-mt-6" delay={0}>
                <span className="hero-pill">French-speaking tax firm in Dubai</span>
                <h1 className="section-title text-4xl font-semibold text-accent-darkBlue sm:text-5xl lg:text-6xl">
                  The tax advisor for French clients relocating and investing in Dubai
                </h1>
                <p className="text-lg text-muted sm:text-xl">
                  Honoré Advisor supports expatriates, non-residents, and returning residents on cross-border tax matters
                  between Paris and Dubai.
                </p>
                <div className="flex flex-wrap gap-3 -mt-2">
                  {["Relocation", "Exit Tax", "Tax residency"].map((item) => (
                    <span key={item} className="hero-tag">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 -mt-2">
                  <Link
                    href="/en/eligibilite"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-glow button-sheen"
                  >
                    Start a tax consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
              <Reveal className="grid gap-3 lg:-mt-6" delay={120}>
                <div className="relative overflow-hidden rounded-[28px] shadow-lg hover-card">
                  <Image
                    src="/images/consultation.jpg"
                    alt="Honoré Advisor strategic consultation"
                    width={900}
                    height={620}
                    className="h-64 w-full object-cover"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-2 text-xs font-semibold text-accent-darkBlue shadow-sm">
                    Strategic consultation
                  </div>
                </div>
                <div className="neo-card p-3">
                  <div className="grid gap-2 divide-y divide-primary-100/60">
                    <div className="pt-0">
                      <p className="text-xs font-semibold uppercase text-primary-600">
                        Local presence
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        Based in Dubai for 5+ years.
                      </p>
                    </div>
                    <div className="pt-3">
                      <p className="text-xs font-semibold uppercase text-primary-600">Dubai office</p>
                      <p className="mt-1 text-xs text-muted">
                        Address: Al Fattan Downtown, Dubai
                      </p>
                      <a
                        href="https://maps.app.goo.gl/fbyVKcPXPaSJgzki7"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex items-center gap-2 text-[11px] text-primary-600"
                      >
                        view on map <span aria-hidden="true">→</span>
                      </a>
                    </div>
                    <div className="pt-3">
                      <p className="text-xs font-semibold uppercase text-primary-600">
                        Paris office
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        Address: 54 avenue Marceau 75008 Paris
                      </p>
                      <a
                        href="https://maps.app.goo.gl/z7VFQTSuK9F9GR917"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex items-center gap-2 text-[11px] text-primary-600"
                      >
                        view on map <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </header>

        <main>
          <section className="mx-auto max-w-6xl px-6 pb-12 pt-6 -mt-28">
            <Reveal className="grid gap-3 sm:grid-cols-3" delay={0}>
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card flex h-full items-baseline gap-2">
                  <p className="text-2xl font-semibold text-accent-darkBlue">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <Reveal delay={0}>
              <h2 className="section-title text-3xl font-semibold text-accent-darkBlue">
                Our method
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {methodSteps.map((step, index) => (
                <Reveal key={step.title} className="method-card" delay={80 + index * 60}>
                  <div className="method-index">0{index + 1}</div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                    {step.title}
                  </p>
                  <p className="mt-3 text-sm text-muted">{step.description}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8">
              <blockquote className="quote-card">
                <span className="quote-mark">“</span>
                <span className="quote-text">
                  Our role isn’t to optimize on paper. It’s to secure real-world compliance.
                </span>
                <span className="quote-signature">Honoré Advisor</span>
              </blockquote>
            </Reveal>
            <Reveal className="mt-8 neo-card" delay={120}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
                    Process
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-accent-darkBlue">
                    A structured, decision-ready advisory flow.
                  </h3>
                </div>
                <Link
                  href="/en/methode"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
                >
                  View the method <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <Reveal className="mb-8" delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                Services
              </p>
              <h2 className="section-title text-3xl font-semibold text-accent-darkBlue">
                Core engagement areas
              </h2>
              <p className="mt-3 text-sm text-muted sm:text-base">
                From relocation to tax residency and UAE structuring, we cover the full decision
                journey.
              </p>
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-2">
              {services.map((service, index) => (
                <Reveal key={service.title} className="neo-card" delay={80 + index * 60}>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-accent-darkBlue">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted">{service.description}</p>
                    </div>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <Reveal className="mb-8" delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                For whom
              </p>
              <h2 className="section-title text-3xl font-semibold text-accent-darkBlue">
                We focus on complex, high-stakes files.
              </h2>
              <p className="mt-3 text-sm text-muted sm:text-base">
                We prioritize dossiers where cross-border compliance, evidence, and timing matter.
              </p>
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal className="neo-card" delay={0}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
                  Good fit
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {fitList.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="neo-card" delay={120}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
                  Not a fit
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {noFitList.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-muted" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <Reveal className="mb-8" delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                Deliverables
              </p>
              <h2 className="section-title text-3xl font-semibold text-accent-darkBlue">
                What you receive after the diagnosis
              </h2>
            </Reveal>
            <div className="grid gap-4">
              {deliverables.map((item, index) => (
                <Reveal key={item} className="neo-card" delay={80 + index * 40}>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
                      0{index + 1}
                    </span>
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8" delay={120}>
              <Link
                href="/en/eligibilite"
                className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
              >
                Start a tax consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <Reveal className="mb-8" delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                Use cases
              </p>
              <h2 className="section-title text-3xl font-semibold text-accent-darkBlue">
                Typical situations we handle
              </h2>
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-3">
              {useCases.map((item, index) => (
                <Reveal key={item.title} className="neo-card" delay={80 + index * 40}>
                  <p className="text-sm font-semibold text-accent-darkBlue">{item.title}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary-600">
                    {item.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <Reveal className="mb-8" delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                FAQ
              </p>
              <h2 className="section-title text-3xl font-semibold text-accent-darkBlue">
                Most common questions
              </h2>
            </Reveal>
            <div className="grid gap-4">
              {faqs.map((item) => (
                <details key={item.q} className="neo-card neo-card-compact">
                  <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="section-cta px-6 py-16 text-center text-white">
            <h2 className="text-2xl font-semibold">Let’s map your next steps with clarity</h2>
            <p className="mt-3 text-sm text-white/80">
              A short diagnostic confirms your priorities and the right sequence of actions.
            </p>
            <div className="mt-6">
              <Link href="/en/eligibilite" className="neo-button neo-button-light">
                Start a tax consultation
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
