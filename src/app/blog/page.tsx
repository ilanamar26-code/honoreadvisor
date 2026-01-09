import Link from "next/link";

const posts = [
  {
    title: "Exit Tax : les points d’attention avant votre départ",
    slug: "exit-tax-2024",
    excerpt:
      "Comprendre les obligations déclaratives et les étapes clés pour sécuriser votre expatriation.",
    category: "Expatriation",
    date: "Décembre 2026",
    read: "6 min"
  },
  {
    title: "Résidence fiscale aux Émirats : preuves de substance",
    slug: "residence-fiscale-uae",
    excerpt:
      "Les critères incontournables pour documenter votre statut de non‑résident français.",
    category: "Résidence fiscale",
    date: "Décembre 2026",
    read: "5 min"
  },
  {
    title: "Formulaires 5000 & 5001 : ce qu’il faut anticiper",
    slug: "formulaires-5000-5001",
    excerpt:
      "Optimiser les flux France–Émirats et limiter les retenues à la source en toute conformité.",
    category: "Conventions fiscales",
    date: "Novembre 2026",
    read: "7 min"
  }
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
            Blog
          </p>
          <h1 className="section-title text-3xl font-semibold text-accent-darkBlue sm:text-5xl">
            Analyses fiscales, retours d’expérience et décisions clés
          </h1>
          <p className="text-sm text-muted sm:text-base">
            Des formats courts, concrets et orientés décision pour vos projets France–Émirats.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            <span>Expatriation</span>
            <span>Résidence fiscale</span>
            <span>Structuration</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <Link href={`/blog/${featured.slug}`} className="glass group block rounded-3xl p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
            <span>{featured.category}</span>
            <span>• {featured.date}</span>
            <span>• {featured.read}</span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-accent-darkBlue transition group-hover:text-primary-600">
            {featured.title}
          </h2>
          <p className="mt-3 text-sm text-muted">{featured.excerpt}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            Lire l’article <span aria-hidden="true">→</span>
          </div>
        </Link>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 lg:grid-cols-3">
        {rest.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="glass rounded-3xl p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
              {post.category}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-accent-darkBlue">{post.title}</h3>
            <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
            <div className="mt-6 flex items-center justify-between text-xs text-primary-600">
              <span>{post.date}</span>
              <span>{post.read}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="section-cta px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-semibold">Planifions sereinement votre projet</h2>
        <p className="mt-3 text-sm text-white/80">
          Un diagnostic rapide permet de confirmer vos priorités et la bonne séquence d’action.
        </p>
        <div className="mt-6">
          <Link href="/eligibilite" className="neo-button neo-button-light">
            Démarrer une consultation fiscale
          </Link>
        </div>
      </section>
    </div>
  );
}
