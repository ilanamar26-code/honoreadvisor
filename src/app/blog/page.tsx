import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

const posts = [
  {
    title: "Exit tax: les points d'attention 2024",
    slug: "exit-tax-2024",
    excerpt: "Ce qui change et comment préparer votre départ."
  },
  {
    title: "Résidence fiscale UAE: preuve de substance",
    slug: "residence-fiscale-uae",
    excerpt: "Les critères incontournables pour votre dossier."
  }
];

export default function BlogPage() {
  return (
    <SectionShell
      eyebrow="Blog"
      title="Conseils fiscaux et analyses"
      description="Des articles experts pour guider vos décisions internationales."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="glass rounded-3xl p-6">
            <h2 className="text-lg font-semibold text-accent-darkBlue">{post.title}</h2>
            <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Démarrer ma consultation
        </Link>
      </div>
    </SectionShell>
  );
}
