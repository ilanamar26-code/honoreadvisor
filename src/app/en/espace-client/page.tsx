import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

export default function ClientPortalPage() {
  return (
    <SectionShell
      eyebrow="Client portal"
      title="Your secure dashboard"
      description="Access your documents, appointments, and messages with the HonorAdvisor team."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        <p className="font-semibold text-accent-darkBlue">Login required</p>
        <p className="mt-3">Please sign in to access your space.</p>
        <Link
          href="/en/espace-client/login"
          className="mt-6 inline-flex rounded-full bg-primary-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Sign in
        </Link>
      </div>
    </SectionShell>
  );
}
