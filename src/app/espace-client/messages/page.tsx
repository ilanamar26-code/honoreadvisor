import { SectionShell } from "@/components/section-shell";

export default function MessagesPage() {
  return (
    <SectionShell
      eyebrow="Messages"
      title="Échanges sécurisés"
      description="Discutez avec votre fiscaliste et partagez des documents."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Messagerie sécurisée à intégrer avec Supabase.
      </div>
    </SectionShell>
  );
}
