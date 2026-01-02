import Link from "next/link";

const resources = [
  {
    title: "Checklist expatriation UAE",
    description: "Les preuves clés pour sécuriser votre résidence fiscale."
  },
  {
    title: "Guide flux France–Émirats",
    description: "Comprendre les enjeux de substance et de conventions fiscales."
  },
  {
    title: "Documents essentiels",
    description: "La liste des pièces pour votre dossier stratégique."
  }
];

const faqs = [
  {
    q: "Quels types de services offrez-vous ?",
    a: "Nous offrons une large gamme de services de consultations fiscales, notamment en matière d'expatriation, d'impatriation, de créations d'entreprise, de résidences fiscales, ainsi que d'obtentions de visas."
  },
  {
    q: "Pourquoi vous faire confiance ?",
    a: "Avec plus de 15 années d'expertise dans l'accompagnement de clients à l'international sur leurs sujets fiscaux, nous avons ouvert un bureau à Dubaï en 2021 pour répondre à cette demande grandissante de notre clientèle."
  },
  {
    q: "Comment peut-on débuter le processus ?",
    a: "Contactez-nous simplement par téléphone ou par e-mail pour planifier une première consultation. Au cours de cette réunion, nous discuterons en détail de vos besoins et élaborerons un plan sur mesure pour y répondre efficacement."
  }
];

export default function RessourcesPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Ressources</p>
      <h1 className="mt-4 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Ressources expertes (accès réservé)
      </h1>
      <p className="mt-4 text-muted">
        Guides et checklists pour préparer votre consultation stratégique.
      </p>
      <p className="mt-2 text-sm text-muted">
        Nous offrons une large gamme de services de consultations fiscales, notamment en matière d'expatriation, d'impatriation, de créations d’entreprise, de résidences fiscales, ainsi que d'obtentions de visas.
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
        <h2 className="mt-3 text-2xl font-semibold text-accent-darkBlue">Les questions les plus communes</h2>
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
          href="/eligibilite"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Démarrer ma consultation
        </Link>
        <span aria-hidden="true">‍</span>
      </div>
    </section>
  );
}
