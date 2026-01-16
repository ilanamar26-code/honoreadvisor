import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

const resources = [
  "Relocation guide France → UAE",
  "Exit Tax file checklist",
  "Tax residency memo",
  "International structuring framework"
];

export default function ResourcesPage() {
  return (
    <SectionShell
      eyebrow="Resources"
      title="Content library"
      description="Access preparatory guides and checklists."
    >
      <div className="grid gap-4">
        {resources.map((item) => (
          <div key={item} className="glass rounded-2xl p-5 text-sm text-muted">
            <p className="font-semibold text-accent-darkBlue">{item}</p>
            <p className="mt-2">Download available soon.</p>
          </div>
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
