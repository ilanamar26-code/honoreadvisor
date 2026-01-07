"use client";

import { CalendarCheck, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function ChatbotFab() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        aria-label="Démarrer une consultation fiscale"
        href="/eligibilite"
        onClick={() => trackEvent("click_cta_eligibilite")}
        className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-lg"
      >
        <CalendarCheck className="hidden h-4 w-4 md:block" />
        <span className="text-lg md:hidden" aria-hidden="true">📅</span>
        <span className="hidden md:inline">Démarrer une consultation fiscale</span>
      </a>
      <a
        aria-label="WhatsApp (question rapide)"
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("click_whatsapp")}
        className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-primary-700 shadow-sm"
      >
        <MessageCircle className="hidden h-4 w-4 md:block" />
        <span className="text-lg md:hidden" aria-hidden="true">💬</span>
        <span className="hidden md:inline">WhatsApp (question rapide)</span>
      </a>
    </div>
  );
}
