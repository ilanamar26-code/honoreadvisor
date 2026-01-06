import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { webflowServiceDetails } from "@/data/webflow-services";

const categoryMap: Record<
  string,
  { title: string; description: string; items: { label: string; href: string }[] }
> = {
  expatriation: {
    title: "Expatriation aux Émirats",
    description: "Préparation fiscale avant départ, exit tax et résidence fiscale.",
    items: [
      { label: "Préparation du départ", href: "/services/expatriation/preparation-depart" },
      { label: "Exit tax", href: "/services/expatriation/exit-tax" },
      { label: "Résidence fiscale", href: "/services/expatriation/residence-fiscale" }
    ]
  },
  "fiscalite-emirats": {
    title: "Fiscalité aux Émirats",
    description: "Visa, certificat de résidence et obligations locales.",
    items: [
      { label: "Résidence et visa", href: "/services/fiscalite-emirats/residence-visa" },
      {
        label: "Certificat de résidence",
        href: "/services/fiscalite-emirats/certificat-residence"
      }
    ]
  },
  immobilier: {
    title: "Fiscalité immobilière",
    description: "Investissements, loyers et plus-values France & Émirats.",
    items: [
      { label: "Immobilier France", href: "/services/immobilier/france" },
      { label: "Immobilier Émirats", href: "/services/immobilier/emirats" }
    ]
  },
  "creation-societe": {
    title: "Création de société",
    description: "Structuration internationale et implantation aux Émirats.",
    items: [
      { label: "Société France", href: "/services/creation-societe/france" },
      { label: "Société Émirats", href: "/services/creation-societe/emirats" },
      {
        label: "Structuration internationale",
        href: "/services/creation-societe/structuration-internationale"
      }
    ]
  }
};

type PageProps = {
  params: { category: string };
};

export default function ServiceCategoryPage({ params }: PageProps) {
  const detail = webflowServiceDetails[params.category];
  if (detail) {
    return (
      <div>
        <section className="section-hero">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200/80">
              Service
            </p>
            <h1 className="section-title mt-4 text-3xl font-semibold text-white sm:text-4xl">
              {detail.title}
            </h1>
            <p className="mt-4 text-sm text-white/80">{detail.description}</p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-6 py-16">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
          >
            ← Retour à la liste des services
          </Link>
          <div
            className="neo-card service-richtext"
            dangerouslySetInnerHTML={{ __html: detail.bodyHtml }}
          />
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
          >
            ← Retour à la liste des services
          </Link>
        </section>
        <section className="section-cta px-6 py-16 text-center text-white">
          <h2 className="text-2xl font-semibold">Planifions sereinement votre projet aux Emirats</h2>
          <div className="mt-6">
            <Link
              href="/eligibilite"
              className="neo-button neo-button-light"
            >
              Je demande une consultation
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const category = categoryMap[params.category];

  if (!category) {
    return (
      <SectionShell
        eyebrow="Services"
        title="Catégorie inconnue"
        description="Cette catégorie sera bientôt disponible."
      />
    );
  }

  return (
    <SectionShell
      eyebrow="Services"
      title={category.title}
      description={category.description}
    >
      <Link
        href="/services"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
      >
        ← Retour à la liste des services
      </Link>
      <div className="grid gap-4">
        {category.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="glass flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-semibold text-accent-darkBlue"
          >
            <span>{item.label}</span>
            <ArrowRight className="h-4 w-4 text-primary-600" />
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Démarrer une consultation fiscale
        </Link>
      </div>
    </SectionShell>
  );
}
