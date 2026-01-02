import { SectionShell } from "@/components/section-shell";

export default function DashboardPage() {
  return (
    <SectionShell
      eyebrow="Dashboard"
      title="Vue d'ensemble"
      description="Suivi des rendez-vous, documents et prochains jalons."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Tableau de bord client à connecter à Supabase.
      </div>
    </SectionShell>
  );
}
