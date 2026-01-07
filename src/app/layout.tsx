import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ChatbotFab } from "@/components/chatbot-fab";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Honoré Advisor | Cabinet Fiscal de référence entre la France et les Emirats",
  description:
    "Votre fiscaliste à Dubai, expatriation, Exit Tax, Créations de société à Dubai, Résidence fiscal",
  openGraph: {
    title: "Honoré Advisor | Cabinet Fiscal de référence entre la France et les Emirats",
    description:
      "Votre fiscaliste à Dubai, expatriation, Exit Tax, Créations de société à Dubai, Résidence fiscal",
    images: ["/logo-mark.png"]
  },
  twitter: {
    title: "Honoré Advisor | Cabinet Fiscal de référence entre la France et les Emirats",
    description:
      "Votre fiscaliste à Dubai, expatriation, Exit Tax, Créations de société à Dubai, Résidence fiscal",
    images: ["/logo-mark.png"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <ChatbotFab />
      </body>
    </html>
  );
}
