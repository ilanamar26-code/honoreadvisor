"use client";

import { usePathname } from "next/navigation";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function ChatbotFab() {
  const pathname = usePathname();
  const basePath = pathname?.startsWith("/en") ? "/en" : "";
  const isEnglish = Boolean(basePath);
  const eligibilityHref = basePath ? `${basePath}/eligibilite` : "/eligibilite";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        aria-label={isEnglish ? "Start a tax consultation" : "Démarrer une consultation fiscale"}
        href={eligibilityHref}
        onClick={() => trackEvent("click_cta_eligibilite")}
        className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-lg"
      >
        <span className="text-lg" aria-hidden="true">📅</span>
        <span className="sr-only">
          {isEnglish ? "Start a tax consultation" : "Démarrer une consultation fiscale"}
        </span>
      </a>
      <a
        aria-label={isEnglish ? "WhatsApp (quick question)" : "WhatsApp (question rapide)"}
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("click_whatsapp")}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/5 transition hover:scale-105"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
        <span className="sr-only">
          {isEnglish ? "WhatsApp (quick question)" : "WhatsApp (question rapide)"}
        </span>
      </a>
    </div>
  );
}
