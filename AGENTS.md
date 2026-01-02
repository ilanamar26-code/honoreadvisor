# HonorAdvisor Project Instructions

## Purpose
Build a modernized, premium redesign of HonorAdvisor.com for French expatriates in the UAE, using the stack defined in the spec.

## Stack Requirements
- Next.js 14 App Router + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion for key animations
- React Hook Form + Zod for forms
- Lucide React for icons

## Design System
- Primary color: #0ea5e9 (with full palette)
- Accent: gold #D4AF37, dark blue #1a1f36
- Typography: Inter for body/headings, Space Grotesk for numeric highlights
- Style: premium minimalist, bento grids, glassmorphism CTAs, subtle parallax
- Must support dark mode and mobile-first responsiveness

## IA Targets (Phase 1)
- Home page with hero + AI chatbot CTA, services bento, process, social proof, stats, CTA
- Services and tools structure should match the spec site architecture

## Implementation Notes
- Prefer CSS variables for palette and spacing tokens in globals.css
- Keep components in `src/components` when reused
- Use accessible, semantic HTML and keyboard-friendly interactions
- Avoid placeholder content once real copy is available

## Testing
- Add lightweight unit tests only when logic is non-trivial

