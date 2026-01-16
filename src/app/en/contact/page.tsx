import { SectionShell } from "@/components/section-shell";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ContactPage() {
  return (
    <SectionShell
      eyebrow="Contact"
      title="Let’s discuss your tax situation"
      description="Choose your format: call, video meeting, or in-person in Paris or Dubai."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <p className="font-semibold text-accent-darkBlue">Fast appointment</p>
          <p className="mt-3">
            We offer meetings within 24h with a senior tax advisor.
          </p>
          <div className="mt-6 rounded-2xl border border-primary-100 bg-white/90 p-4">
            Cal.com integration coming soon.
          </div>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wide text-primary-700"
          >
            WhatsApp (quick question)
          </a>
        </div>
        <div className="glass rounded-3xl p-6 text-sm text-muted">
          <p className="font-semibold text-accent-darkBlue">Direct contact</p>
          <p className="mt-3">contact@honoradvisor.com</p>
          <p className="mt-2">Paris - Dubai</p>
        </div>
      </div>
      <div className="mt-10">
        <a
          href="/en/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Start a tax consultation
        </a>
      </div>
    </SectionShell>
  );
}
