import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function CalendarPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-accent-darkBlue">Consultation calendar</h1>
      <p className="mt-4 text-muted">
        Calendar integration coming soon. Please confirm eligibility via the questionnaire before
        booking.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          href="/en/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Start a tax consultation
        </Link>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary-700"
        >
          WhatsApp (quick question)
        </a>
      </div>
    </section>
  );
}
