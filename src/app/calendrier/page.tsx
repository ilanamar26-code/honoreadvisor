import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function CalendarPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-accent-darkBlue">Calendrier de consultation</h1>
      <p className="mt-4 text-muted">
        Intégration calendrier à venir. Merci de confirmer votre éligibilité via le questionnaire
        avant de réserver.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          href="/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Démarrer une consultation fiscale
        </Link>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary-700"
        >
          WhatsApp (question rapide)
        </a>
      </div>
    </section>
  );
}
