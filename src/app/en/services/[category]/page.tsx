import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { webflowServiceDetailsEn } from "@/data/webflow-services.en";

const categoryMap: Record<
  string,
  { title: string; description: string; items: { label: string; href: string }[] }
> = {
  expatriation: {
    title: "UAE relocation",
    description: "Departure planning, Exit Tax, and tax residency strategy.",
    items: [
      { label: "Departure preparation", href: "/en/services/expatriation/preparation-depart" },
      { label: "Exit Tax", href: "/en/services/expatriation/exit-tax" },
      { label: "Tax residency", href: "/en/services/expatriation/residence-fiscale" }
    ]
  },
  "fiscalite-emirats": {
    title: "UAE taxation",
    description: "Visa, tax residency certificate, and local compliance.",
    items: [
      { label: "Residency and visa", href: "/en/services/fiscalite-emirats/residence-visa" },
      {
        label: "Tax residency certificate",
        href: "/en/services/fiscalite-emirats/certificat-residence"
      }
    ]
  },
  immobilier: {
    title: "Real estate taxation",
    description: "Investments, rental income, and capital gains in France & UAE.",
    items: [
      { label: "France real estate", href: "/en/services/immobilier/france" },
      { label: "UAE real estate", href: "/en/services/immobilier/emirats" }
    ]
  },
  "creation-societe": {
    title: "Company setup",
    description: "International structuring and UAE incorporation.",
    items: [
      { label: "France company", href: "/en/services/creation-societe/france" },
      { label: "UAE company", href: "/en/services/creation-societe/emirats" },
      {
        label: "International structuring",
        href: "/en/services/creation-societe/structuration-internationale"
      }
    ]
  }
};

type PageProps = {
  params: { category: string };
};

export default function ServiceCategoryPage({ params }: PageProps) {
  const detail = webflowServiceDetailsEn[params.category];
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
            href="/en/services"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
          >
            ← Back to services
          </Link>
          <div
            className="neo-card service-richtext"
            dangerouslySetInnerHTML={{ __html: detail.bodyHtml }}
          />
          <Link
            href="/en/services"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
          >
            ← Back to services
          </Link>
        </section>
        <section className="section-cta px-6 py-16 text-center text-white">
          <h2 className="text-2xl font-semibold">Let’s plan your UAE project with confidence</h2>
          <div className="mt-6">
            <Link
              href="/en/eligibilite"
              className="neo-button neo-button-light"
            >
              Request a consultation
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
        title="Unknown category"
        description="This category will be available soon."
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
        href="/en/services"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
      >
        ← Back to services
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
          href="/en/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Start a tax consultation
        </Link>
      </div>
    </SectionShell>
  );
}
