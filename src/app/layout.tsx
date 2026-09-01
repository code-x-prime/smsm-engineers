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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NCVQDD8X');`,
          }}
        />
        {/* End Google Tag Manager */}
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NCVQDD8X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
