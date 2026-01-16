"use client";

import { Reveal } from "@/components/reveal";

export default function AboutPage() {
  return (
    <div className="bg-aurora">
      <div className="bg-grid">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">About</p>
            <h1 className="mt-4 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
              Honoré Advisor is a premium firm specializing in France–UAE expatriation and tax
              structuring.
            </h1>
            <p className="mt-4 text-muted">A dedicated team focused on your priorities.</p>
          </Reveal>

          <div className="mt-12">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Leadership</p>
              <h2 className="mt-3 text-2xl font-semibold text-accent-darkBlue">
                Honoré Advisor is led by Roy Masliah & Ilan Amar.
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
                    Founder, Honoré Patrimoine, FR/International tax expertise
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    French tax expertise, wealth structuring, and international compliance.
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
                    Entrepreneur, UAE implementation, field execution
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Local operations management, implementation, and ongoing execution support.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-12 about-grid">
            <Reveal className="about-card mission" delay={0}>
              <p className="about-kicker">Mission</p>
              <h2 className="about-title">
                A clear, defensible, executable tax strategy.
              </h2>
              <p className="about-text">
                Deliver a solid framework for expatriation, structuring, and France–UAE compliance
                with operational support from diagnosis to execution.
              </p>
            </Reveal>
            <Reveal className="about-card vision" delay={80}>
              <p className="about-kicker">Vision</p>
              <h2 className="about-title">
                The leading francophone reference for high-stakes dossiers.
              </h2>
              <p className="about-text">
                Become the benchmark for complex tax matters between France and the UAE with a
                rigorous, transparent, and lasting approach.
              </p>
            </Reveal>
            <Reveal className="about-card trust" delay={120}>
              <p className="about-kicker">Trust</p>
              <h2 className="about-title">
                15+ years of expertise, local presence in Dubai.
              </h2>
              <p className="about-text">
                We combine Honoré Patrimoine’s French expertise with on-the-ground UAE execution for
                secure, documented decisions.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-12 neo-card" delay={0}>
            <h2 className="text-lg font-semibold text-accent-darkBlue">Our offices in Paris and Dubai</h2>
            <div className="mt-4 grid gap-6 text-sm text-muted lg:grid-cols-2">
              <div>
                <p className="font-semibold text-accent-darkBlue">Paris</p>
                <p>Address: 54 avenue Marceau 75008 Paris</p>
                <a
                  href="https://maps.app.goo.gl/z7VFQTSuK9F9GR917"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-600"
                >
                  View on map
                </a>
              </div>
              <div>
                <p className="font-semibold text-accent-darkBlue">Dubai</p>
                <p>Address: Al Fattan, Downtown, Dubai</p>
                <a
                  href="https://maps.app.goo.gl/fbyVKcPXPaSJgzki7"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-600"
                >
                  View on map
                </a>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 neo-card text-sm text-muted">
            <p className="font-semibold text-accent-darkBlue">Honoré Advisor FZCO</p>
            <p>RCS Dubai - License Number: 8678</p>
            <p>Phone: +971 50 245 2842</p>
            <p>Email: contact@honoreadvisor.com</p>
            <p>All rights reserved. 2026 - Honoré Advisor - Tax advisory Dubai - www.honoreadvisor.com © 2026</p>
          </div>

        </section>
      </div>
    </div>
  );
}
