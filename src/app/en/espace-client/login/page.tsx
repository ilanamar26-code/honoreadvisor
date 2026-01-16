import { SectionShell } from "@/components/section-shell";

export default function LoginPage() {
  return (
    <SectionShell
      eyebrow="Login"
      title="Client access"
      description="Secure identification with email and password."
    >
      <div className="glass rounded-3xl p-6 text-sm text-muted">
        Login form to be implemented with Supabase Auth.
      </div>
    </SectionShell>
  );
}
