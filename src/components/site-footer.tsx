"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinksFr = [
  { label: "Services", href: "/services" },
  { label: "Méthode", href: "/methode" },
  { label: "À propos", href: "/a-propos" }
];

const footerLinksEn = [
  { label: "Services", href: "/services" },
  { label: "Method", href: "/methode" },
  { label: "About", href: "/a-propos" }
];

export function SiteFooter() {
  const pathname = usePathname();
  const basePath = pathname?.startsWith("/en") ? "/en" : "";
  const isEnglish = Boolean(basePath);
  const withBasePath = (href: string) => {
    if (!basePath) {
      return href;
    }
    if (href === "/") {
      return basePath;
    }
    if (href === basePath || href.startsWith(`${basePath}/`)) {
      return href;
    }
    return `${basePath}${href}`;
  };

  return (
    <footer className="border-t border-primary-100/60 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-100 bg-white shadow-sm">
                <Image
                  src="/logo-mark.png"
                  alt="Honoré Advisor"
                  width={44}
                  height={44}
                  className="h-10 w-10"
                />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-accent-darkBlue">Honoré Advisor</p>
                <p className="text-xs text-muted">
                  {isEnglish ? "Your tax advisor in Dubai" : "Votre fiscaliste à Dubaï"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {(isEnglish ? footerLinksEn : footerLinksFr).map((link) => (
              <Link key={link.href} href={withBasePath(link.href)} className="hover:text-primary-600">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
          <span>{isEnglish ? "Paris - Dubai" : "Paris - Dubaï"}</span>
          <span>Honoré Advisor 2026.</span>
        </div>
      </div>
    </footer>
  );
}
