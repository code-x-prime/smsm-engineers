import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "SMSM Engineers - Dedicated to Innovation & Engineering Excellence",
  description: "SMSM Engineers Private Limited - Premier provider of industrial paint tinting systems, auto & manual color dispensers, gyroshakers, universal stainers, custom PCB design, and color consultancy services.",
  keywords: "SMSM Engineers, Colorant, Color Card, Color Dispenser, Gyroshaker, Universal Stainers, AMC, PCB Designing, Software Development, Color Consultancy",
  openGraph: {
    title: "SMSM Engineers - Industrial Solutions & Engineering Excellence",
    description: "Enterprise paint tinting systems, color machinery, PCB design, and engineering services.",
    url: "https://smsmengineers.in",
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
    <html lang="en">
      <body className="antialiased bg-brand-bg text-brand-primary min-h-screen flex flex-col font-sans">
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
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 h-12 w-12 md:h-16 md:w-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full grid place-items-center shadow-2xl hover:scale-105 transition-all"
          title="Chat on WhatsApp"
        >
          <IconBrandWhatsapp className="h-6 w-6 md:h-8 md:w-8" />
        </a>
      </body>
    </html>
  );
}
