import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilotage | Accès réservé",
  robots: { index: false, follow: false }
};

export default function PilotageLogin({ searchParams }: { searchParams: { erreur?: string } }) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-4 py-16">
      <h1 className="text-2xl font-semibold">Pilotage commercial</h1>
      <p className="mt-2 text-sm opacity-70">Accès réservé à l&apos;équipe Honoré.</p>
      <form method="post" action="/api/pilotage/login" className="mt-8 flex flex-col gap-3">
        <label htmlFor="password" className="text-sm font-medium">Mot de passe</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="rounded-lg border border-black/15 bg-transparent px-3 py-2 dark:border-white/20"
        />
        {searchParams.erreur ? <p className="text-sm text-red-600">Mot de passe incorrect.</p> : null}
        <button type="submit" className="mt-2 rounded-lg bg-[#1a1f36] px-4 py-2 font-medium text-white">
          Entrer
        </button>
      </form>
    </main>
  );
}
