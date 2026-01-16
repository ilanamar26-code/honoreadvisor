"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { buildWhatsAppLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

function WhatsAppContent() {
  const params = useSearchParams();
  const ref = params.get("ref") ?? "";
  const intent = params.get("intent") ?? "";
  const timing = params.get("timing") ?? "";
  const proposal = params.get("proposal") ?? "";

  const message = `Hello Ilan Amar & Roy Masliah, I completed the HonorAdvisor questionnaire. Reference: ${ref}. Intent: ${intent}. Timing: ${timing}. Proposal: ${proposal}.`;

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
        Thank you. Your reference is <span className="font-semibold">{ref}</span>.
      </p>
      <p className="mt-2 text-sm text-muted">
        You will be redirected to WhatsApp to finalize your request.
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
          Open WhatsApp
        </a>
      </div>

      <div className="mt-10">
        <Link
          href="/en/eligibilite"
          onClick={() => trackEvent("click_cta_eligibilite")}
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Start a tax consultation
        </Link>
      </div>
    </section>
  );
}

export default function WhatsAppPage() {
  return (
    <Suspense
      fallback={
        <section className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-3xl font-semibold text-accent-darkBlue">Confirmation</h1>
          <p className="mt-4 text-muted">Loading...</p>
        </section>
      }
    >
      <WhatsAppContent />
    </Suspense>
  );
}
