import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

const calculators = [
  "Exit Tax",
  "IFI for non-residents",
  "Real estate capital gains",
  "Wealth optimization"
];

export default function CalculatorsPage() {
  return (
    <SectionShell
      eyebrow="Tools"
      title="Tax calculators"
      description="Reliable simulations to steer your tax strategy."
    >
      <div className="grid gap-4">
        {calculators.map((calc) => (
          <div key={calc} className="glass rounded-2xl p-5 text-sm text-muted">
            <p className="font-semibold text-accent-darkBlue">{calc}</p>
            <p className="mt-2">Calculation model in progress.</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/en/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Start a tax consultation
        </Link>
      </div>
    </SectionShell>
  );
}
