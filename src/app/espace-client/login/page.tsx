import { SectionShell } from "@/components/section-shell";

export default function LoginPage() {
  return (
    <SectionShell
      eyebrow="Connexion"
      title="Accès client"
      description="Identification sécurisée avec email et mot de passe."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Formulaire de connexion à implémenter avec Supabase Auth.
      </div>
    </SectionShell>
  );
}
