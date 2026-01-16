"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function OrientationPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-accent-darkBlue">Thank you.</h1>
      <p className="mt-4 text-muted">
        A tax advisor will contact you shortly. Your situation does not fit a standard path and
        requires a deeper assessment. A targeted review will determine whether and under what
        conditions a relevant structuring can be considered.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/en/eligibilite"
          onClick={() => trackEvent("click_cta_eligibilite")}
          className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary-700"
        >
          Back to the questionnaire
        </Link>
      </div>

    </section>
  );
}
