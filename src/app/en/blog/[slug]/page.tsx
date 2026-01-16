import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

type PageProps = {
  params: { slug: string };
};

export default function BlogDetailPage({ params }: PageProps) {
  const title = params.slug.replace(/-/g, " ");

  return (
    <SectionShell
      eyebrow="Article"
      title={title}
      description="Article in progress."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        We will publish the full content and related resources soon.
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
