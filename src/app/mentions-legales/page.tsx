import { SectionShell } from "@/components/section-shell";

export default function LegalPage() {
  return (
    <SectionShell
      eyebrow="Legal"
      title="Mentions légales"
      description="Informations juridiques sur HonorAdvisor."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Contenu légal à compléter.
      </div>
    </SectionShell>
  );
}
