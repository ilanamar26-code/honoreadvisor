"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, ShieldCheck, Sparkles, Users } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const container = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function HeroIntro() {
  return (
    <motion.div className="flex-1 space-y-6" variants={container} initial="hidden" animate="show">
      <motion.div
        variants={item}
        className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/70 px-4 py-2 text-sm font-medium text-primary-900 shadow-sm"
      >
        <Sparkles className="h-4 w-4 text-primary-500" />
        Plateforme fiscale premium pour expatriés
      </motion.div>
      <motion.h1
        variants={item}
        className="section-title text-4xl font-semibold text-accent-darkBlue sm:text-5xl lg:text-6xl"
      >
        Cabinet fiscal premium
        <span className="block text-primary-600">pour expatriés français aux Émirats</span>
      </motion.h1>
      <motion.p variants={item} className="text-lg text-muted sm:text-xl">
        Une présence opérationnelle à Dubaï depuis plus de 5 ans, adossée à Honoré
        Patrimoine France, cabinet établi depuis 15+ ans.
      </motion.p>
      <motion.div variants={item} className="flex flex-wrap gap-4">
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition hover:bg-primary-700"
        >
          Contacter via WhatsApp
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-900 transition hover:border-primary-400"
        >
          Demander un rendez-vous
        </a>
      </motion.div>
      <motion.div variants={item} className="flex flex-wrap items-center gap-6 text-sm text-muted">
        <div className="flex items-center gap-2">
          <CalendarCheck className="h-4 w-4 text-primary-600" />
          Rendez-vous sous 24h
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary-600" />
          Conformité GDPR
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary-600" />
          Filiale d'Honoré Patrimoine
        </div>
      </motion.div>
    </motion.div>
  );
}
