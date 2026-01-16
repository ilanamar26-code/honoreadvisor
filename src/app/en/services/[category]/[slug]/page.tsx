import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

const fallbackCopy: Record<string, string> = {
  "preparation-depart": "Anticipate tax impacts before departure to avoid surprises.",
  "exit-tax": "Model latent gains and build a reliable Exit Tax timeline.",
  "residence-fiscale": "Clarify residency criteria and document your presence.",
  "residence-visa": "Secure the right visa and local residency status.",
  "certificat-residence": "Build a solid file for the UAE tax residency certificate.",
  france: "Optimize your French real estate taxation from the UAE.",
  emirats: "Structure local real estate investments efficiently.",
  "structuration-internationale": "Align your international structure to limit risk."
};

type PageProps = {
  params: { slug: string; category: string };
};

export default function ServiceDetailPage({ params }: PageProps) {
  const description = fallbackCopy[params.slug] ??
    "A tax specialist will support you with a tailored strategy.";

  return (
    <SectionShell
      eyebrow="Service"
      title={params.slug.replace(/-/g, " ")}
      description={description}
    >
      <div className="mb-6 flex flex-wrap gap-3 text-sm">
        <Link href="/en/services" className="font-semibold text-primary-600">
          ← Back to services
        </Link>
        <span className="text-muted">/</span>
        <Link href={`/en/services/${params.category}`} className="font-semibold text-primary-600">
          {params.category.replace(/-/g, " ")}
        </Link>
      </div>
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Our team will analyze your situation and propose a precise action plan
        including timeline, obligations, and structuring options.
      </div>
      <div className="mt-6">
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
