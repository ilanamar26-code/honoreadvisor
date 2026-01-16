import Link from "next/link";

const resources = [
  {
    title: "UAE relocation checklist",
    description: "Key evidence to secure your tax residency."
  },
  {
    title: "France–UAE flow guide",
    description: "Understand substance requirements and tax treaty mechanics."
  },
  {
    title: "Essential documents",
    description: "The core list for your strategic file."
  }
];

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide a full range of tax advisory services: expatriation, impatriation, company setup, tax residency, and visa support."
  },
  {
    q: "Why trust you?",
    a: "With 15+ years of experience supporting international clients, we opened our Dubai office in 2021 to meet growing demand."
  },
  {
    q: "How do we start?",
    a: "Contact us by phone or email to schedule an initial consultation. We will review your needs and build a tailored plan."
  }
];

export default function RessourcesPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Resources</p>
      <h1 className="mt-4 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Expert resources (restricted access)
      </h1>
      <p className="mt-4 text-muted">
        Guides and checklists to prepare your strategic consultation.
      </p>
      <p className="mt-2 text-sm text-muted">
        We offer a broad range of tax advisory services including expatriation, impatriation, company
        creation, tax residency, and visa support.
      </p>

      <div className="mt-10 grid gap-6">
        {resources.map((resource) => (
          <div key={resource.title} className="glass rounded-3xl p-6">
            <h2 className="text-lg font-semibold text-accent-darkBlue">{resource.title}</h2>
            <p className="mt-3 text-sm text-muted">{resource.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">FAQ</p>
        <h2 className="mt-3 text-2xl font-semibold text-accent-darkBlue">Most common questions</h2>
        <div className="mt-6 grid gap-4">
          {faqs.map((item) => (
            <div key={item.q} className="glass rounded-2xl p-5">
              <p className="text-sm font-semibold text-accent-darkBlue">{item.q}</p>
              <p className="mt-2 text-sm text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/en/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Start a tax consultation
        </Link>
        <span aria-hidden="true">‍</span>
      </div>
    </section>
  );
}
