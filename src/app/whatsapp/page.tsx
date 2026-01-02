"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { buildWhatsAppLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function WhatsAppPage() {
  const params = useSearchParams();
  const ref = params.get("ref") ?? "";
  const intent = params.get("intent") ?? "";
  const timing = params.get("timing") ?? "";
  const proposal = params.get("proposal") ?? "";

  const message = `Bonjour Ilan Amar & Roy Masliah, j’ai complété le questionnaire HonorAdvisor. Référence: ${ref}. Intention: ${intent}. Timing: ${timing}. Proposition: ${proposal}.`;

  const link = useMemo(() => {
    if (typeof window === "undefined") return buildWhatsAppLink(message);
    const isMobile = /iphone|ipad|ipod|android/i.test(window.navigator.userAgent);
    const encoded = encodeURIComponent(message);
    return isMobile
      ? `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encoded}`
      : buildWhatsAppLink(message);
  }, [message]);

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-accent-darkBlue">Confirmation</h1>
      <p className="mt-4 text-muted">
        Merci. Votre référence est <span className="font-semibold">{ref}</span>.
      </p>
      <p className="mt-2 text-sm text-muted">
        Vous êtes redirigé vers WhatsApp pour finaliser la demande.
      </p>

      <div className="mt-8">
        <a
          href={link}
          onClick={() => {
            trackEvent("qualified_routed", { ref });
            trackEvent("click_whatsapp", { ref });
          }}
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Ouvrir WhatsApp
        </a>
      </div>

      <div className="mt-10">
        <Link
          href="/eligibilite"
          onClick={() => trackEvent("click_cta_eligibilite")}
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Démarrer ma consultation
        </Link>
      </div>
    </section>
  );
}
