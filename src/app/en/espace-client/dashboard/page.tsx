import { SectionShell } from "@/components/section-shell";

export default function DashboardPage() {
  return (
    <SectionShell
      eyebrow="Dashboard"
      title="Overview"
      description="Track appointments, documents, and upcoming milestones."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Client dashboard to be connected to Supabase.
      </div>
    </SectionShell>
  );
}
