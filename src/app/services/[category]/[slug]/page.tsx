import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

const fallbackCopy: Record<string, string> = {
  "preparation-depart": "Anticipez les impacts fiscaux avant le départ pour éviter les surprises.",
  "exit-tax": "Simulez vos plus-values latentes et structurez un calendrier fiable.",
  "residence-fiscale": "Clarifiez les critères de résidence et documentez votre présence.",
  "residence-visa": "Obtenez le visa adapté et sécurisez votre statut local.",
  "certificat-residence": "Constituez un dossier solide pour le certificat fiscal émirien.",
  france: "Optimisez votre fiscalité immobilière en France depuis les Émirats.",
  emirats: "Structurez vos investissements immobiliers locaux avec efficacité.",
  "structuration-internationale": "Harmonisez votre structure internationale pour limiter les risques."
};

type PageProps = {
  params: { slug: string; category: string };
};

export default function ServiceDetailPage({ params }: PageProps) {
  const description = fallbackCopy[params.slug] ??
    "Un expert fiscal vous accompagnera avec une stratégie sur mesure.";

  return (
    <SectionShell
      eyebrow="Service"
      title={params.slug.replace(/-/g, " ")}
      description={description}
    >
      <div className="mb-6 flex flex-wrap gap-3 text-sm">
        <Link href="/services" className="font-semibold text-primary-600">
          ← Retour aux services
        </Link>
        <span className="text-muted">/</span>
        <Link href={`/services/${params.category}`} className="font-semibold text-primary-600">
          {params.category.replace(/-/g, " ")}
        </Link>
      </div>
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Notre équipe analysera votre situation et proposera un plan d'action précis
        incluant calendrier, obligations et solutions de structuration.
      </div>
      <div className="mt-6">
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
