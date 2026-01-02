"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function OrientationPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-accent-darkBlue">Merci.</h1>
      <p className="mt-4 text-muted">
        Un fiscaliste va vous recontacter dans les plus brefs délais. Votre situation ne relève pas
        d’un schéma standard et nécessite une appréciation approfondie. Une analyse ciblée permettra
        de déterminer si et dans quelles conditions une structuration pertinente peut être envisagée.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/eligibilite"
          onClick={() => trackEvent("click_cta_eligibilite")}
          className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary-700"
        >
          Revenir au questionnaire
        </Link>
      </div>

    </section>
  );
}
