import { SectionShell } from "@/components/section-shell";

export default function PrivacyPage() {
  return (
    <SectionShell
      eyebrow="Confidentialité"
      title="Politique de confidentialité"
      description="Notre engagement GDPR et gestion des données."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Politique de confidentialité à rédiger.
      </div>
    </SectionShell>
  );
}
