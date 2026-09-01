import type { Metadata } from "next";
import { DownloadSection } from "@/components/DownloadSection";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { HardDrive, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Official Downloads & Technical Manuals | SMSM Engineers",
  description: "Download official software installers, calibration utilities, brochures, and technical bulletins for SMSM Automatic Dispensers and Gyroshakers.",
  alternates: {
    canonical: "https://www.smsmengineers.com/downloads",
  },
};

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28">
      {/* Hero Strip */}
      <section className="bg-[#071A35] text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute -top-24 right-[10%] h-64 w-64 bg-[#00AEEF]/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider border border-white/10">
            <HardDrive className="h-3.5 w-3.5" /> Technical Resource Center
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium leading-tight">
            Downloads & Technical Manuals
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Instant access to verified machine software, serial communication drivers, product catalogs, and corporate certificates.
          </p>
        </div>
      </section>

      {/* Embedded Download Section Accordions */}
      <DownloadSection />

      {/* Technical Support Strip */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-[1100px] mx-auto px-6 grid sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
            <ShieldCheck className="h-6 w-6 text-[#00AEEF] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-[#071A35]">Verified Safe Files</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                All executable packages are digitally scanned and malware-checked before distribution.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
            <HardDrive className="h-6 w-6 text-[#00AEEF] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-[#071A35]">Driver Compatibility</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Full 64-bit support across Windows 10 and 11 environments with USB/RS232 auto-detection.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
            <Headphones className="h-6 w-6 text-[#00AEEF] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-[#071A35]">Live Tech Support</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Need remote installation? Our service engineers offer quick AnyDesk / TeamViewer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Marquee */}
      <PartnerMarquee title="Trusted by Paint Operators & Corporate Partners" />
    </main>
  );
}
