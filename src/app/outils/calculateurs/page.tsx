import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

const calculators = [
  "Exit tax",
  "IFI non-résidents",
  "Plus-value immobilière",
  "Optimisation patrimoine"
];

export default function CalculatorsPage() {
  return (
    <SectionShell
      eyebrow="Outils"
      title="Calculateurs fiscaux"
      description="Des simulations fiables pour piloter votre stratégie fiscale."
    >
      <div className="grid gap-4">
        {calculators.map((calc) => (
          <div key={calc} className="glass rounded-2xl p-5 text-sm text-muted">
            <p className="font-semibold text-accent-darkBlue">{calc}</p>
            <p className="mt-2">Modèle de calcul en cours de finalisation.</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Démarrer ma consultation
        </Link>
      </div>
    </SectionShell>
  );
}
