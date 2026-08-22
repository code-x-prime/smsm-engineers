"use client";

import Link from "next/link";
import { Award, ShieldCheck, Trophy, Sparkles } from "lucide-react";
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

  return (
    <main className="bg-brand-bg pt-28">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#071A35] text-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <span className="text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-semibold block mb-4">Milestones achieved</span>
          <h1 className="hero-heading text-4xl md:text-6xl tracking-tight max-w-4xl">
            Awards & Recognitions
          </h1>
          <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            CE certified, ISO aligned, and recognized by national coating organizations for uncompromised engineering services.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
        <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Awards & Recognitions</span>
      </div>

      {/* Main content grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Certificates list */}
          <Reveal className="space-y-8">
            <span className="text-[#0A4ABF] text-sm uppercase tracking-widest font-semibold block">Standards Compliance</span>
            <h2 className="section-heading text-3xl md:text-4xl text-[#071A35]">Quality Certifications</h2>
            <div className="space-y-6">
              {certificates.map((c) => (
                <div key={c.title} className="p-6 border border-slate-200 hover:border-[#00AEEF] rounded-xl transition-all bg-brand-bg">
                  <div className="flex gap-4">
                    <ShieldCheck className="h-8 w-8 text-[#00AEEF] shrink-0" />
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
            <h2 className="section-heading text-3xl md:text-4xl text-[#071A35]">Accolades</h2>
            <div className="space-y-6">
              {awardsList.map((a) => (
                <div key={a.title} className="flex gap-4 p-6 border-b border-slate-100 last:border-b-0">
                  <div className="h-10 w-10 bg-[#00AEEF]/10 rounded-xl grid place-items-center shrink-0">
                    <Trophy className="h-5 w-5 text-[#00AEEF]" />
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
      <section className="py-20 bg-brand-bg border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-[0.2em] font-semibold block">Corporate Verification</span>
            <h2 className="text-3xl md:text-5xl font-medium text-[#071A35] font-display">Credentials & Recommendations</h2>
            <p className="text-slate-600 font-light leading-relaxed">
              Verify our official startup recognition certificates and direct endorsement letters from leading national paint conglomerates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* DIPP */}
            <div className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-xl grid place-items-center mb-6 text-[#0A4ABF] font-medium text-xs uppercase">
                  Govt
                </div>
                <h3 className="text-xl font-medium text-[#071A35] font-display mb-2 group-hover:text-[#0A4ABF] transition-colors">
                  DPIIT Recognition Certificate
                </h3>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-4">Ministry of Commerce & Industry</p>
                <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                  Official recognition issued to SMSM Engineers Private Limited under registration DIPP8079 for innovative paint tinting machinery development.
                </p>
              </div>
              <div>
                <a
                  href="/downloads/dipp_recognition.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block bg-[#071A35] hover:bg-[#00AEEF] hover:text-white text-white font-medium text-sm px-6 py-3 rounded-xl transition-all"
                >
                  View & Verify PDF Certificate
                </a>
              </div>
            </div>

            {/* Kamdhenu */}
            <div className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 bg-[#0A4ABF]/10 rounded-xl grid place-items-center mb-6 text-[#0A4ABF] font-medium text-xs uppercase">
                  B2B
                </div>
                <h3 className="text-xl font-medium text-[#071A35] font-display mb-2 group-hover:text-[#0A4ABF] transition-colors">
                  Kamdhenu Recommendation Letter
                </h3>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-4">Kamdhenu Paints Limited</p>
                <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                  Official endorsement detailing operational efficiency, calibration performance, and quality of service provided to their POS tinting channels.
                </p>
              </div>
              <div>
                <a
                  href="/downloads/kamdhenu_recommendation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block bg-[#071A35] hover:bg-[#00AEEF] hover:text-white text-white font-medium text-sm px-6 py-3 rounded-xl transition-all"
                >
                  View & Verify PDF Letter
                </a>
              </div>
            </div>

            {/* Popular */}
            <div className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 bg-[#071A35]/10 rounded-xl grid place-items-center mb-6 text-[#071A35] font-medium text-xs uppercase">
                  Audit
                </div>
                <h3 className="text-xl font-medium text-[#071A35] font-display mb-2 group-hover:text-[#0A4ABF] transition-colors">
                  Popular Paints Recommendation
                </h3>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-4">Popular Paints & Chemicals</p>
                <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                  Corporate performance certificate certifying SMSM Engineers&apos; maintenance reliability and delta-E color calibration parameters.
                </p>
              </div>
              <div>
                <a
                  href="/downloads/popular_recommendation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block bg-[#071A35] hover:bg-[#00AEEF] hover:text-white text-white font-medium text-sm px-6 py-3 rounded-xl transition-all"
                >
                  View & Verify PDF Letter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
