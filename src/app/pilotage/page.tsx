import type { Metadata } from "next";
import { computePilotage, fetchDeals } from "@/lib/pipedrive-deals";
import { PilotageView } from "./pilotage-view";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pilotage commercial | Honoré",
  robots: { index: false, follow: false }
};

export default async function PilotagePage() {
  const taux = Number(process.env.PILOTAGE_EUR_AED ?? "4.12");
  try {
    const deals = await fetchDeals();
    return <PilotageView data={computePilotage(deals, taux)} />;
  } catch (e) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl font-semibold">Pilotage commercial</h1>
        <p className="mt-4 text-red-600">Impossible de lire Pipedrive : {(e as Error).message}</p>
      </main>
    );
  }
}
