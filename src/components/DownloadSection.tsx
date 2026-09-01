"use client";

import { useState } from "react";
import { Download, FileText, Cpu, ShieldCheck, ChevronDown, ChevronUp, ExternalLink, HardDrive, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";

interface DownloadItem {
  title: string;
  category: string;
  version?: string;
  size: string;
  format: string;
  description: string;
  href: string;
  isExternal?: boolean;
}

const softwareDownloads: DownloadItem[] = [
  {
    title: "SMSM Tinting Suite & Machine Drivers",
    category: "Dispenser Operating System",
    version: "v4.2.8",
    size: "48.5 MB",
    format: "EXE / ZIP",
    description: "Official calibration and stepper motor communication driver for SMSM Automatic Color Dispensers and Gyroshakers.",
    href: "/query-form?subject=Software+Download+Request+-+SMSM+Tinting+Suite",
  },
  {
    title: "Dispenser Calibration & COM Port Setup Tool",
    category: "Hardware Utility",
    version: "v2.1.0",
    size: "14.2 MB",
    format: "EXE",
    description: "Diagnostic utility for RS232/USB serial port configuration, pump timing calibration, and nozzle purging test.",
    href: "/query-form?subject=Software+Download+Request+-+Calibration+Tool",
  },
  {
    title: "Color Formula Sync & Database Client",
    category: "Cloud Sync Utility",
    version: "v3.0.4",
    size: "22.8 MB",
    format: "MSI",
    description: "Database client software to synchronize base paint formulations, custom color codes, and batching recipes.",
    href: "/query-form?subject=Software+Download+Request+-+Color+Formula+Sync",
  }
];

const brochureDownloads: DownloadItem[] = [
  {
    title: "SMSM Corporate & Machinery Master Catalog",
    category: "Product Brochure",
    size: "8.4 MB",
    format: "PDF",
    description: "Complete technical specifications for Automatic Dispensers, Manual Dispensers, and Gyroshaker Mixers.",
    href: "/downloads/dipp_recognition.pdf",
  },
  {
    title: "SMSM Technical Bulletin — Color Technology",
    category: "Engineering Whitepaper",
    size: "3.2 MB",
    format: "PDF",
    description: "In-depth industrial guide on color dispensing precision, volumetric accuracy, and pigment rheology management.",
    href: "/downloads/dipp_recognition.pdf",
  },
  {
    title: "SMSM Technical Bulletin — Pumping Terminology",
    category: "Technical Guide",
    size: "2.8 MB",
    format: "PDF",
    description: "Industrial terminology and diagnostic principles for positive displacement pumps and stepper dosing mechanics.",
    href: "/downloads/dipp_recognition.pdf",
  },
  {
    title: "DIPP Government of India Recognition Certificate",
    category: "Statutory Credential",
    size: "1.2 MB",
    format: "PDF",
    description: "Department for Promotion of Industry and Internal Trade (DIPP) official startup recognition certificate.",
    href: "/downloads/dipp_recognition.pdf",
  },
  {
    title: "Kamdhenu Paints Corporate Recommendation Letter",
    category: "Client Endorsement",
    size: "1.5 MB",
    format: "PDF",
    description: "Official performance recommendation and validation letter from Kamdhenu Paints management.",
    href: "/downloads/kamdhenu_recommendation.pdf",
  },
  {
    title: "Popular Paints & Coatings Endorsement Letter",
    category: "Client Endorsement",
    size: "1.1 MB",
    format: "PDF",
    description: "Operational reliability and after-sales support certificate from Popular Paints executive leadership.",
    href: "/downloads/popular_recommendation.pdf",
  }
];

export function DownloadSection() {
  const [softwareOpen, setSoftwareOpen] = useState(true);
  const [brochureOpen, setBrochureOpen] = useState(true);

  return (
    <section id="downloads" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section Header with classic underline aesthetic */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium uppercase tracking-[0.18em] text-[#071A35]">
            Download
          </h2>
          <div className="w-24 h-0.5 bg-[#071A35] mx-auto mt-3 relative">
            <div className="w-8 h-1 bg-[#00AEEF] absolute left-1/2 -top-[1.5px] -translate-x-1/2 rounded-full" />
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-light max-w-xl mx-auto mt-4">
            Access official machine software drivers, diagnostic calibration utilities, product catalogs, and corporate credentials.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-6">
          {/* ACCORDION 1: SOFTWARE DOWNLOAD */}
          <div className="border border-slate-300/80 rounded-lg overflow-hidden shadow-sm transition-all duration-300">
            <button
              onClick={() => setSoftwareOpen(prev => !prev)}
              className={`w-full py-4 px-6 md:px-8 flex items-center justify-between text-left transition-colors duration-200 ${
                softwareOpen
                  ? "bg-[#071A35] text-white"
                  : "bg-[#1E293B] hover:bg-[#071A35] text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5 text-[#00AEEF] shrink-0" />
                <span className="font-display font-medium text-base sm:text-lg uppercase tracking-wider">
                  Software Download
                </span>
              </div>
              <span className="text-xl font-light font-mono text-[#00AEEF]">
                {softwareOpen ? "−" : "+"}
              </span>
            </button>

            {softwareOpen && (
              <div className="bg-white p-6 sm:p-8 divide-y divide-slate-100 animate-fadeIn">
                <div className="grid md:grid-cols-3 gap-6">
                  {softwareDownloads.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 hover:border-[#00AEEF] hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span className="bg-[#0A4ABF]/10 text-[#0A4ABF] px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                            {item.format}
                          </span>
                          {item.version && <span>{item.version}</span>}
                        </div>
                        <h4 className="font-display font-medium text-sm sm:text-base text-[#071A35] group-hover:text-[#0A4ABF] transition-colors leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                          <HardDrive className="h-3 w-3 text-slate-400" /> {item.size}
                        </span>
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1.5 bg-[#071A35] text-white hover:bg-[#00AEEF] hover:text-[#071A35] text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
                        >
                          <Download className="h-3 w-3" /> Get Installer
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/80 rounded-lg p-3 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00AEEF] shrink-0" />
                    <span>All installers are digitally authenticated and verified for Windows 10/11 (64-bit).</span>
                  </div>
                  <Link href="/contact" className="text-[#0A4ABF] hover:underline font-medium shrink-0">
                    Need installation help? Contact Support →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* ACCORDION 2: BROCHURE DOWNLOAD */}
          <div className="border border-slate-300/80 rounded-lg overflow-hidden shadow-sm transition-all duration-300">
            <button
              onClick={() => setBrochureOpen(prev => !prev)}
              className={`w-full py-4 px-6 md:px-8 flex items-center justify-between text-left transition-colors duration-200 ${
                brochureOpen
                  ? "bg-[#071A35] text-white"
                  : "bg-[#1E293B] hover:bg-[#071A35] text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-[#00AEEF] shrink-0" />
                <span className="font-display font-medium text-base sm:text-lg uppercase tracking-wider">
                  Brochure Download
                </span>
              </div>
              <span className="text-xl font-light font-mono text-[#00AEEF]">
                {brochureOpen ? "−" : "+"}
              </span>
            </button>

            {brochureOpen && (
              <div className="bg-white p-6 sm:p-8 animate-fadeIn">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {brochureDownloads.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 hover:border-[#00AEEF] hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span className="bg-red-50 text-red-700 border border-red-200/60 px-2 py-0.5 rounded font-semibold uppercase tracking-wider flex items-center gap-1">
                            <FileText className="h-3 w-3" /> PDF
                          </span>
                          <span>{item.size}</span>
                        </div>
                        <h4 className="font-display font-medium text-sm sm:text-base text-[#071A35] group-hover:text-[#0A4ABF] transition-colors leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 font-medium">
                          {item.category}
                        </span>
                        <a
                          href={item.href}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#071A35] text-white hover:bg-[#00AEEF] hover:text-[#071A35] text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
                        >
                          <Download className="h-3 w-3" /> Download PDF
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
