"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Méthode", href: "/methode" },
  { label: "À propos", href: "/a-propos" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-primary-100/60 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary-100 bg-white shadow-sm">
            <Image src="/logo-mark.png" alt="Honoré Advisor" width={36} height={36} className="h-9 w-9" priority />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-accent-darkBlue">Honoré Advisor</p>
            <p className="text-xs text-muted">Votre fiscaliste à Dubaï</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-accent-darkBlue lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-primary-600">
              {link.label}
            </Link>
          ))}
          <Link
            href="/eligibilite"
            onClick={() => trackEvent("click_cta_eligibilite")}
            className="rounded-full bg-primary-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white"
          >
            Démarrer une consultation fiscale
          </Link>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary-200 text-primary-700 lg:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-primary-100 bg-white/90 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold text-accent-darkBlue">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 transition hover:bg-primary-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/eligibilite"
              className="rounded-full bg-primary-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white"
              onClick={() => {
                trackEvent("click_cta_eligibilite");
                setOpen(false);
              }}
            >
              Démarrer une consultation fiscale
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
