import { SectionShell } from "@/components/section-shell";

export default function MessagesPage() {
  return (
    <SectionShell
      eyebrow="Messages"
      title="Secure messaging"
      description="Chat with your tax advisor and share documents."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Secure messaging to be integrated with Supabase.
      </div>
    </SectionShell>
  );
}
