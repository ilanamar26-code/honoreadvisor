import { SectionShell } from "@/components/section-shell";

export default function DocumentsPage() {
  return (
    <SectionShell
      eyebrow="Documents"
      title="Secure storage"
      description="Centralize all your supporting documents and tax deliverables."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Document management to be finalized (upload, sorting, security).
      </div>
    </SectionShell>
  );
}
