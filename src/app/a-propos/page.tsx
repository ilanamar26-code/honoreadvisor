"use client";

import { Reveal } from "@/components/reveal";

export default function AboutPage() {
  return (
    <div className="bg-aurora">
      <div className="bg-grid">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">À propos</p>
            <h1 className="mt-4 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
              Honoré Advisor est un cabinet premium spécialisé dans l’expatriation et la
              structuration fiscale France–Émirats.
            </h1>
            <p className="mt-4 text-muted">Une équipe dédiée à votre écoute.</p>
          </Reveal>

          <div className="mt-12">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Direction</p>
              <h2 className="mt-3 text-2xl font-semibold text-accent-darkBlue">
                Honoré Advisor est dirigé par Roy Masliah & Ilan Amar.
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Reveal className="portrait-card" delay={80}>
                <div className="portrait-frame portrait-frame-tall">
                  <img
                    src="/images/roy-masliah.jpg"
                    alt="Roy Masliah"
                    className="portrait-image portrait-image--bright"
                    loading="lazy"
                  />
                </div>
                <div className="portrait-meta">
                  <p className="text-lg font-semibold text-accent-darkBlue">Roy Masliah</p>
                  <p className="text-xs uppercase tracking-wide text-primary-600">
                    Fondateur Honoré Patrimoine, expertise fiscale FR/International
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Expertise fiscale française, structuration patrimoniale et conformité internationale.
                  </p>
                </div>
              </Reveal>
              <Reveal className="portrait-card" delay={120}>
                <div className="portrait-frame portrait-frame-tall">
                  <img
                    src="/images/ilan-amar.jpg"
                    alt="Ilan Amar"
                    className="portrait-image portrait-image--bright"
                    loading="lazy"
                  />
                </div>
                <div className="portrait-meta">
                  <p className="text-lg font-semibold text-accent-darkBlue">Ilan Amar</p>
                  <p className="text-xs uppercase tracking-wide text-primary-600">
                    Entrepreneur, implantation UAE, exécution terrain
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Pilotage des opérations locales, mise en œuvre et suivi des plans d'action.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-12 about-grid">
            <Reveal className="about-card mission" delay={0}>
              <p className="about-kicker">Mission</p>
              <h2 className="about-title">
                Une stratégie fiscale claire, défendable et exécutable.
              </h2>
              <p className="about-text">
                Apporter une méthode solide pour l’expatriation, la structuration et la conformité
                France–Émirats, avec un accompagnement opérationnel du diagnostic à la mise en œuvre.
              </p>
            </Reveal>
            <Reveal className="about-card vision" delay={80}>
              <p className="about-kicker">Vision</p>
              <h2 className="about-title">
                La référence francophone des dossiers à forts enjeux.
              </h2>
              <p className="about-text">
                Devenir la référence pour les dossiers fiscaux complexes entre la France et les
                Émirats, avec une approche rigoureuse, transparente et durable.
              </p>
            </Reveal>
            <Reveal className="about-card trust" delay={120}>
              <p className="about-kicker">Confiance</p>
              <h2 className="about-title">
                15+ ans d’expertise, présence locale à Dubaï.
              </h2>
              <p className="about-text">
                Nous combinons l’expertise française d’Honoré Patrimoine avec une exécution terrain
                aux Émirats, pour des décisions sécurisées et documentées.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-12 neo-card" delay={0}>
            <h2 className="text-lg font-semibold text-accent-darkBlue">Nos bureaux à Paris et à Dubaï</h2>
            <div className="mt-4 grid gap-6 text-sm text-muted lg:grid-cols-2">
              <div>
                <p className="font-semibold text-accent-darkBlue">Paris</p>
                <p>Adresse : 54 avenue Marceau 75008 Paris</p>
                <a
                  href="https://maps.app.goo.gl/z7VFQTSuK9F9GR917"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-600"
                >
                  Voir sur la carte
                </a>
              </div>
              <div>
                <p className="font-semibold text-accent-darkBlue">Dubaï</p>
                <p>Adresse : Al Fattan, Downtown, Dubai</p>
                <a
                  href="https://maps.app.goo.gl/fbyVKcPXPaSJgzki7"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-600"
                >
                  Voir sur la carte
                </a>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 neo-card text-sm text-muted">
            <p className="font-semibold text-accent-darkBlue">Honoré Advisor FZCO</p>
            <p>RCS Dubai - License Number : 8678</p>
            <p>Téléphone : +971 50 245 2842</p>
            <p>Mail : contact@honoreadvisor.com</p>
            <p>Tous droits réservés. 2024 - Honoré Advisor - Fiscaliste Dubaï - www.honoreadvisor.com © 2024</p>
          </div>

        </section>
      </div>
    </div>
  );
}
