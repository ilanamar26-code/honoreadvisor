import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

export default function ClientPortalPage() {
  return (
    <SectionShell
      eyebrow="Espace client"
      title="Votre portail sécurisé"
      description="Accédez à vos documents, rendez-vous et messages avec l'équipe HonorAdvisor."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        <p className="font-semibold text-accent-darkBlue">Connexion requise</p>
        <p className="mt-3">Veuillez vous connecter pour accéder à votre espace.</p>
        <Link
          href="/espace-client/login"
          className="mt-6 inline-flex rounded-full bg-primary-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Se connecter
        </Link>
      </div>
    </SectionShell>
  );
}
