import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smsmengineers.com"),
  title: "SMSM Engineers - From Innovation to Application — One Tinting Solution",
  description: "Enterprise paint tinting systems, color machinery, PCB design, and engineering services.",
  keywords: "SMSM Engineers, Paint Mixing Machine, Paint Tinting Machine, Automatic Paint Dispenser, Gyroshaker Mixer, Universal Stainers, Colorant, Color Card, AMC, PCB Designing, Software Development, Color Consultancy",
  openGraph: {
    title: "SMSM Engineers - From Innovation to Application — One Tinting Solution",
    description: "Enterprise paint tinting systems, color machinery, PCB design, and engineering services.",
    url: "https://www.smsmengineers.com",
    siteName: "SMSM Engineers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMSM Engineers - From Innovation to Application — One Tinting Solution",
    description: "Enterprise paint tinting systems, color machinery, PCB design, and engineering services.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.smsmengineers.com",
  },
  verification: {
    google: [
      "7iSQOOOQP3odcSJk8Xjp2KoPkVPgpSMwSR_BJiHGkq8",
      "google-site-verification=7iSQOOOQP3odcSJk8Xjp2KoPkVPgpSMwSR_BJiHGkq8",
    ],
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
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="7iSQOOOQP3odcSJk8Xjp2KoPkVPgpSMwSR_BJiHGkq8" />
        <meta name="google-site-verification" content="google-site-verification=7iSQOOOQP3odcSJk8Xjp2KoPkVPgpSMwSR_BJiHGkq8" />
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="545f69cb-7006-494d-bd26-001a9d3666d3"
          data-blockingmode="auto"
          type="text/javascript"
        ></script>
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
        {/* GLOBAL SCROLL-TRIGGERED FLOATING WHATSAPP BUTTON */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
