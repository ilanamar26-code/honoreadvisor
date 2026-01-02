type EventPayload = Record<string, unknown> | undefined;

type AnalyticsEvent =
  | "click_cta_eligibilite"
  | "form_step_completed"
  | "form_submitted"
  | "qualified_routed"
  | "nonqualified_routed"
  | "click_whatsapp";

export const trackEvent = (event: AnalyticsEvent, payload?: EventPayload) => {
  if (typeof window !== "undefined") {
    // Replace with real analytics provider when available.
    console.log(`[analytics] ${event}`, payload ?? {});
  }
};
