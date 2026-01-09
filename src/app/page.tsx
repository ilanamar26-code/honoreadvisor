import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Expatriation aux Emirats",
    description: "Préparation fiscale, résidence et sécurisation du départ.",
    href: "/services/expratriation-emirats"
  },
  {
    title: "Déclaration d'Exit Tax",
    description: "Analyse, déclaration et suivi auprès de l'administration.",
    href: "/services/exit-tax"
  },
  {
    title: "Création de société et obtention de visa aux Emirats",
    description: "Structuration, immatriculation et visas liés au projet.",
    href: "/services/human-resources-consulting"
  },
  {
    title: "Obtention d'un testament auprès de DIFC",
    description: "Rédaction et enregistrement pour sécuriser la transmission.",
    href: "/services/testament-difc"
  }
];

const fitList = [
  "Entrepreneurs avec sociétés multi-pays",
  "Cadres dirigeants en mobilité UAE",
  "Investisseurs avec actifs France + UAE"
];

const noFitList = [
  "Petits revenus sans enjeux transfrontaliers",
  "Recherche d'optimisation agressive",
  "Situation non documentée"
];

const deliverables = [
  "Diagnostic fiscal transfrontalier (risques / opportunités)",
  "Cartographie France–Émirats de vos flux",
  "Plan d'action priorisé (30/60/90 jours)",
  "Liste des documents et preuves à réunir"
];

const stats = [
  { value: "14+", label: "années d'expérience" },
  { value: "2600+", label: "clients acompagnés" },
  { value: "100+", label: "Avis positifs de nos clients" }
];

const methodSteps = [
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

const useCases = [
  {
    title: "Entrepreneur français s’installant aux Émirats avec sa famille",
    detail: "activité, revenus, visas, scolarité"
  },
  {
    title: "Dirigeant ou cadre supérieur vivant aux Émirats avec intérêts économiques en France",
    detail: "actions, management package, revenus différés"
  },
  {
    title: "Investisseur immobilier français devenu résident fiscal aux Émirats",
    detail: "location, arbitrages, détention"
  },
  {
    title: "Société basée aux Émirats opérant avec la France",
    detail: "facturation, prestations, redevances"
  },
  {
    title: "Expatriation partielle ou situation fiscale incertaine",
    detail: "famille en France, activité à l’étranger, allers-retours"
  },
  {
    title: "Retour en France après une expatriation aux Émirats",
    detail: "famille, patrimoine, fiscalité"
  }
];

const faqs = [
  {
    q: "Est-ce que mon expatriation peut être remise en cause ?",
    a: "Cela dépend de votre situation réelle (lieu de vie, activité, famille, revenus). Un diagnostic permet d’identifier les points sensibles et de les corriger, mais oui c'est tout à fait possible."
  },
  {
    q: "Est-ce que mes liens en France posent problème ?",
    a: "Pas en soi. Immobilier, famille ou société doivent simplement être intégrés dans une structuration cohérente."
  },
  {
    q: "Est-ce grave si je me suis installé sans structuration préalable ?",
    a: "C’est fréquent. Dans la majorité des cas, il est possible de clarifier et sécuriser la situation a posteriori. Mais ce n'est pas à prendre à la légère."
  },
  {
    q: "Comment savoir ce que je dois faire dans mon cas précis ?",
    a: "Chaque situation est unique. Nous commençons toujours par une analyse complète avant toute recommandation."
  },
  {
    q: "Dois-je créer une société ou une holding aux Émirats ?",
    a: "Pas systématiquement. La structure dépend de votre activité, de vos revenus et de vos objectifs personnels."
  },
  {
    q: "Est-ce que je peux gérer mon expatriation et celle de ma famille en même temps ?",
    a: "Oui. Les aspects personnels, professionnels et patrimoniaux doivent être pensés ensemble dès le départ."
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
                <span className="hero-pill">Cabinet francophone à Dubaï</span>
                <h1 className="section-title text-4xl font-semibold text-accent-darkBlue sm:text-5xl lg:text-6xl">
                  Le fiscaliste des Français qui s’installent et investissent à Dubai
                </h1>
                <p className="text-lg text-muted sm:text-xl">
                  Honoré Advisor accompagne expatriés, non-résidents et impatriés dans leur fiscalité
                  entre Paris et Dubaï.
                </p>
                <div className="flex flex-wrap gap-3 -mt-2">
                  {["Expatriation", "Exit Tax", "Résidence fiscale"].map((item) => (
                    <span key={item} className="hero-tag">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 -mt-2">
                  <Link
                    href="/eligibilite"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-glow button-sheen"
                  >
                    Démarrer une consultation fiscale
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
              <Reveal className="grid gap-3 lg:-mt-6" delay={120}>
                <div className="relative overflow-hidden rounded-[28px] shadow-lg hover-card">
                  <Image
                    src="/images/consultation.jpg"
                    alt="Consultation stratégique Honoré Advisor"
                    width={900}
                    height={620}
                    className="h-64 w-full object-cover"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-2 text-xs font-semibold text-accent-darkBlue shadow-sm">
                    Consultation stratégique
                  </div>
                </div>
                <div className="neo-card p-3">
                  <div className="grid gap-2 divide-y divide-primary-100/60">
                    <div className="pt-0">
                      <p className="text-xs font-semibold uppercase text-primary-600">
                        Présence opérationnelle
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        À Dubaï depuis +5 ans.
                      </p>
                    </div>
                    <div className="pt-3">
                      <p className="text-xs font-semibold uppercase text-primary-600">Bureau de Dubai</p>
                      <p className="mt-1 text-xs text-muted">
                        Adresse : Al Fattan Downton, Dubai
                      </p>
                      <a
                        href="https://maps.app.goo.gl/fbyVKcPXPaSJgzki7"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex items-center gap-2 text-[11px] text-primary-600"
                      >
                        voir sur la carte <span aria-hidden="true">→</span>
                      </a>
                    </div>
                    <div className="pt-3">
                      <p className="text-xs font-semibold uppercase text-primary-600">
                        Bureau de Paris
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        Adresse : 54 avenue Marceau 75008 Paris
                      </p>
                      <a
                        href="https://maps.app.goo.gl/z7VFQTSuK9F9GR917"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex items-center gap-2 text-[11px] text-primary-600"
                      >
                        voir sur la carte <span aria-hidden="true">→</span>
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
                Notre méthode
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
                  Notre rôle n’est pas d’optimiser sur le papier, mais de sécuriser dans la réalité.
                </span>
                <span className="quote-signature">Honoré Advisor</span>
              </blockquote>
            </Reveal>
            <Reveal className="mt-8 neo-card" delay={120}>
              <p className="text-lg font-semibold text-accent-darkBlue">
                Votre fiscaliste en France et aux Emirats
              </p>
              <p className="mt-3 text-sm text-muted">
                Le cabinet propose des services en optimisation fiscale, création de sociétés,
                gestion des déclarations fiscales et conseils en expatriation ou retour en France.
                Spécialisé dans les stratégies fiscales transfrontalières, Honoré Advisor assure une
                gestion sereine des obligations fiscales, du départ à l’installation, jusqu’au
                retour. C’est le partenaire privilégié pour une maîtrise complète des enjeux fiscaux
                à l’international.
              </p>
            </Reveal>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <Reveal className="flex flex-wrap items-end justify-between gap-4" delay={0}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
                  Nos services
                </p>
                <h2 className="section-title text-3xl font-semibold text-accent-darkBlue">
                  Découvrez la liste des services
                </h2>
              </div>
              <Link href="/services" className="text-sm font-semibold text-primary-600">
                Voir la liste de nos services <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
            <p className="mt-4 text-muted">
              Une approche structurée pour l'expatriation, les obligations fiscales françaises et la
              mise en place d'une présence conforme aux Émirats, avec un suivi clair à chaque étape.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-4">
              {services.map((service, index) => (
                <Reveal
                  key={service.title}
                  className="neo-card"
                  delay={80 + index * 40}
                >
                  <h3 className="text-lg font-semibold text-accent-darkBlue">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted">{service.description}</p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <Reveal className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] shadow-lg" delay={0}>
                <Image
                  src="/images/paris.jpg"
                  alt="Paris et Dubaï"
                  width={860}
                  height={620}
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-accent-darkBlue">
                  France ↔ UAE
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="section-title text-3xl font-semibold text-accent-darkBlue">
                  Cas d'usage
                </h2>
                <p className="mt-3 text-sm text-muted">
                  Des situations concrètes que nous traitons chaque mois.
                </p>
                <div className="mt-6 grid gap-3">
                  {useCases.map((item) => (
                    <div key={item.title} className="case-pill">
                      <p className="text-sm font-semibold text-accent-darkBlue">{item.title}</p>
                      <p className="mt-1 text-xs text-muted">({item.detail})</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href="/eligibilite"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
                  >
                    Démarrer une consultation fiscale
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <Reveal className="cta-surface text-center" delay={0}>
              <h2 className="text-2xl font-semibold text-white">
                Planifions sereinement votre projet aux Émirats
              </h2>
              <p className="mt-3 text-sm text-white/80">
                De Paris à Dubaï, nous sommes à votre écoute.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/eligibilite"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-accent-darkBlue"
                >
                  Démarrer une consultation fiscale
                </Link>
              </div>
            </Reveal>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-20">
            <Reveal delay={0}>
              <h2 className="section-title text-3xl font-semibold text-accent-darkBlue">FAQ</h2>
            </Reveal>
            <div className="mt-6 grid gap-4">
              {faqs.map((item) => (
                <Reveal key={item.q} className="neo-card neo-card-compact" delay={80}>
                  <summary className="cursor-pointer text-sm font-semibold text-accent-darkBlue">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-sm text-muted">{item.a}</p>
                </Reveal>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
