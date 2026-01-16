import Link from "next/link";

const posts = [
  {
    title: "Exit Tax: key points before your departure",
    slug: "exit-tax-2024",
    excerpt:
      "Understand filing obligations and the critical steps to secure your expatriation.",
    category: "Expatriation",
    date: "December 2026",
    read: "6 min"
  },
  {
    title: "UAE tax residency: evidence of substance",
    slug: "residence-fiscale-uae",
    excerpt:
      "Essential criteria to document your non-resident status for France.",
    category: "Tax residency",
    date: "December 2026",
    read: "5 min"
  },
  {
    title: "Forms 5000 & 5001: what to anticipate",
    slug: "formulaires-5000-5001",
    excerpt:
      "Optimize France–UAE flows and reduce withholding with full compliance.",
    category: "Tax treaties",
    date: "November 2026",
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
            Tax insights, experience feedback, and key decisions
          </h1>
          <p className="text-sm text-muted sm:text-base">
            Short, actionable formats for your France–UAE projects.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            <span>Relocation</span>
            <span>Tax residency</span>
            <span>Structuring</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <Link href={`/en/blog/${featured.slug}`} className="glass group block rounded-3xl p-8">
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
            Read article <span aria-hidden="true">→</span>
          </div>
        </Link>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 lg:grid-cols-3">
        {rest.map((post) => (
          <Link key={post.slug} href={`/en/blog/${post.slug}`} className="glass rounded-3xl p-6">
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
        <h2 className="text-2xl font-semibold">Let’s plan your project with confidence</h2>
        <p className="mt-3 text-sm text-white/80">
          A fast diagnosis helps confirm your priorities and action sequence.
        </p>
        <div className="mt-6">
          <Link href="/en/eligibilite" className="neo-button neo-button-light">
            Start a tax consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
