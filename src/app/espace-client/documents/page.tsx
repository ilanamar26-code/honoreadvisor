import { SectionShell } from "@/components/section-shell";

export default function DocumentsPage() {
  return (
    <SectionShell
      eyebrow="Documents"
      title="Stockage sécurisé"
      description="Centralisez tous vos justificatifs et livrables fiscaux."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Gestion documentaire à finaliser (upload, tri, sécurité).
      </div>
    </SectionShell>
  );
}
