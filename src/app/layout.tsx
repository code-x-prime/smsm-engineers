import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smsmengineers.com"),
  title: "SMSM Engineers - Dedicated to Innovation & Engineering Excellence",
  description: "SMSM Engineers Private Limited - Premier provider of industrial paint tinting systems, auto & manual color dispensers, gyroshakers, universal stainers, custom PCB design, and color consultancy services.",
  keywords: "SMSM Engineers, Colorant, Color Card, Color Dispenser, Gyroshaker, Universal Stainers, AMC, PCB Designing, Software Development, Color Consultancy",
  openGraph: {
    title: "SMSM Engineers - Industrial Solutions & Engineering Excellence",
    description: "Enterprise paint tinting systems, color machinery, PCB design, and engineering services.",
    url: "https://www.smsmengineers.com",
    siteName: "SMSM Engineers",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoSlab.variable}>
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="545f69cb-7006-494d-bd26-001a9d3666d3"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <Script
            id="recaptcha-v3"
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="antialiased bg-brand-bg text-brand-primary min-h-screen flex flex-col font-sans">
        <PageLoader />
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        {/* GLOBAL FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/918130720777"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 h-12 w-12 md:h-16 md:w-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full grid place-items-center shadow-[0_10px_35px_-8px_rgba(37,211,102,0.6)] ring-4 ring-white/40 hover:scale-105 transition-all"
          title="Chat on WhatsApp"
        >
          <IconBrandWhatsapp className="h-6 w-6 md:h-8 md:w-8" />
        </a>
      </body>
    </html>
  );
}
