import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

const resources = [
  "Guide expatriation France -> UAE",
  "Checklist dossier exit tax",
  "Mémo résidence fiscale",
  "Schéma structuration internationale"
];

export default function ResourcesPage() {
  return (
    <SectionShell
      eyebrow="Ressources"
      title="Bibliothèque de contenus"
      description="Accédez aux guides et checklists préparatoires."
    >
      <div className="grid gap-4">
        {resources.map((item) => (
          <div key={item} className="glass rounded-2xl p-5 text-sm text-muted">
            <p className="font-semibold text-accent-darkBlue">{item}</p>
            <p className="mt-2">Téléchargement disponible prochainement.</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Démarrer une consultation fiscale
        </Link>
      </div>
    </SectionShell>
  );
}
