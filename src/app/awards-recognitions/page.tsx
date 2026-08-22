"use client";

import Link from "next/link";
import { Award, ShieldCheck, Trophy, Sparkles, ArrowRight, FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function Awards() {
  const awardsList = [
    { title: "Best Coating Equipment Maintenance", organization: "Regional Paint Distributors Forum", year: "2018" },
    { title: "Industrial Innovation Award", organization: "UP Machinery Manufacturers Consortium", year: "2020" },
    { title: "Excellence in Make In India Dosing Systems", organization: "SME Engineering Summit", year: "2022" },
  ];

  const certificates = [
    { title: "ISO 9001:2015 Standards", desc: "Our manufacturing units follow ISO aligned workflows to guarantee calibrated structural integrity." },
    { title: "CE Mechanical Clearance", desc: "Our dispensers and gyroshakers comply with international safety rules and electric insulation parameters." },
  ];

  const credentials = [
    {
      badge: "Govt",
      accent: "#00AEEF",
      title: "DPIIT Recognition Certificate",
      org: "Ministry of Commerce & Industry",
      desc: "Official recognition issued to SMSM Engineers Private Limited under registration DIPP8079 for innovative paint tinting machinery development.",
      href: "/downloads/dipp_recognition.pdf",
      cta: "View & Verify PDF Certificate",
    },
    {
      badge: "B2B",
      accent: "#0A4ABF",
      title: "Kamdhenu Recommendation Letter",
      org: "Kamdhenu Paints Limited",
      desc: "Official endorsement detailing operational efficiency, calibration performance, and quality of service provided to their POS tinting channels.",
      href: "/downloads/kamdhenu_recommendation.pdf",
      cta: "View & Verify PDF Letter",
    },
    {
      badge: "Audit",
      accent: "#071A35",
      title: "Popular Paints Recommendation",
      org: "Popular Paints & Chemicals",
      desc: "Corporate performance certificate certifying SMSM Engineers’ maintenance reliability and delta-E color calibration parameters.",
      href: "/downloads/popular_recommendation.pdf",
      cta: "View & Verify PDF Letter",
    },
  ];

  const stats = [
    { value: "3+", label: "Industry Awards" },
    { value: "2", label: "Global Certifications" },
    { value: "3", label: "Verified Credentials" },
  ];

  return (
    <main className="bg-brand-bg min-h-screen pt-28">
      {/* Hero Header */}
      <section className="relative min-h-[480px] md:min-h-[52vh] flex items-end bg-slate-950 text-white overflow-hidden pb-16 md:pb-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071A35] via-slate-950 to-[#0A4ABF]/30" />
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#00AEEF]/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-72 h-72 bg-[#0A4ABF]/20 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20 md:pb-16">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-semibold">
              Milestones Achieved
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight font-display leading-[1.08]">
              Awards & Recognitions
            </h1>
            <p className="text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              CE certified, ISO aligned, and recognized by national coating organizations for uncompromised engineering services.
            </p>
          </div>

          <div className="hidden md:flex gap-10 mt-14 max-w-3xl border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl lg:text-3xl font-medium text-white font-display">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/50 font-semibold mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Awards & Recognitions</span>
        </div>
      </div>

      {/* Main content grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Certificates list */}
          <Reveal className="space-y-8">
            <span className="text-[#0A4ABF] text-sm uppercase tracking-widest font-semibold block">Standards Compliance</span>
            <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-medium">Quality Certifications</h2>
            <div className="space-y-6">
              {certificates.map((c) => (
                <div key={c.title} className="p-6 brand-card bg-brand-bg">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 icon-chip shrink-0">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#071A35] font-display">{c.title}</h3>
                      <p className="text-slate-600 text-sm mt-1 leading-relaxed font-light">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Awards List */}
          <Reveal className="space-y-8">
            <span className="text-[#0A4ABF] text-sm uppercase tracking-widest font-semibold block">Industry Standing</span>
            <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-medium">Accolades</h2>
            <div className="space-y-4">
              {awardsList.map((a) => (
                <div key={a.title} className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-[#00AEEF]/40 hover:shadow-md transition-all">
                  <div className="h-11 w-11 bg-[#00AEEF]/10 rounded-xl grid place-items-center shrink-0 text-[#0A4ABF]">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">{a.year}</div>
                    <h3 className="text-lg font-medium text-[#071A35] font-display mt-0.5">{a.title}</h3>
                    <p className="text-slate-600 text-sm font-light">{a.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Official Credentials & Recommendation Letters */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg to-white border-t border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-[0.2em] font-semibold block">Corporate Verification</span>
            <h2 className="text-3xl md:text-5xl font-medium text-[#071A35] font-display">Credentials & Recommendations</h2>
            <p className="text-slate-600 font-light leading-relaxed">
              Verify our official startup recognition certificates and direct endorsement letters from leading national paint conglomerates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((c) => (
              <div key={c.title} className="brand-card bg-white p-8 flex flex-col justify-between group">
                <div>
                  <div
                    className="h-12 w-12 rounded-xl grid place-items-center mb-6 font-medium text-xs uppercase"
                    style={{ background: `${c.accent}1A`, color: c.accent }}
                  >
                    {c.badge}
                  </div>
                  <h3 className="text-xl font-medium text-[#071A35] font-display mb-2 group-hover:text-[#0A4ABF] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-4">{c.org}</p>
                  <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                    {c.desc}
                  </p>
                </div>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-flex items-center justify-center gap-2 bg-[#071A35] hover:bg-[#0A4ABF] text-white font-medium text-sm px-6 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <FileCheck2 className="h-4 w-4" /> {c.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-[#071A35] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] to-[#0A4ABF]/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
          <Reveal>
            <div className="h-14 w-14 rounded-2xl bg-white/10 grid place-items-center mx-auto mb-2">
              <Sparkles className="h-7 w-7 text-[#00AEEF]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight font-display">
              Trusted Engineering, Verified Standards
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg mt-4 font-light">
              Connect with our alliance desk to request additional compliance documentation or discuss a custom engineering project.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00AEEF] text-[#071A35] font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white hover:text-[#071A35] transition-all hover:-translate-y-0.5 shadow-lg">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
