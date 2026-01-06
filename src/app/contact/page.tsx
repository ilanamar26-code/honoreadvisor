import { SectionShell } from "@/components/section-shell";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ContactPage() {
  return (
    <SectionShell
      eyebrow="Contact"
      title="Parlons de votre situation fiscale"
      description="Choisissez un format d'échange: appel, visioconférence ou rendez-vous à Paris ou Dubaï."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <p className="font-semibold text-accent-darkBlue">Rendez-vous rapide</p>
          <p className="mt-3">
            Nous proposons des entretiens sous 24h avec un fiscaliste senior.
          </p>
          <div className="mt-6 rounded-2xl border border-primary-100 bg-white/90 p-4">
            Intégration Cal.com à venir.
          </div>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wide text-primary-700"
          >
            WhatsApp (question rapide)
          </a>
        </div>
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <p className="font-semibold text-accent-darkBlue">Contact direct</p>
          <p className="mt-3">contact@honoradvisor.com</p>
          <p className="mt-2">Paris - Dubaï</p>
        </div>
      </div>
      <div className="mt-10">
        <a
          href="/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Démarrer une consultation fiscale
        </a>
      </div>
    </SectionShell>
  );
}
