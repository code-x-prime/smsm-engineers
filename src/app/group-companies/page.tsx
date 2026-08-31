"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Building2, Syringe, Droplet, HeartHandshake, Layers,
  CheckCircle2, ArrowRight, ArrowUpRight, ShieldCheck, Network
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export default function GroupCompanies() {
  const companies = [
    {
      name: "ACT India",
      industry: "Coatings Chemistry & Pigment Synthesis",
      desc: "ACT India is our chemical manufacturing arm. Operating high-capacity grinding mills, the facility synthesizes premium universal paint colorants and liquid tinting pigments supplied directly to leading national paint brands.",
      vision: "To formulate zero-VOC, sustainable, and spectrophotometrically precise colorants.",
      logo: Layers,
      image: "/images/product_colorant.png",
      achievements: [
        "10,000+ metric tons annual output capacity",
        "Formulation supplier to 3 of India's top 5 paint brands",
        "Weather weather fastness validated under ISO standard frameworks",
      ],
      ctaText: "Inquire Chemical Solutions",
      color: "from-[#0A4ABF] to-[#071A35]",
    },
    {
      name: "SMSM Pumps",
      industry: "Fluid Dynamics & Industrial Pumps",
      desc: "SMSM Pumps manufactures heavy-duty submersibles, hydraulic boosters, and agricultural fluid dynamic impellers. Built in-house to withstand heavy-viscosity fluids and chemicals.",
      vision: "Engineering zero-friction fluid circulation loops for extreme factory environments.",
      logo: Droplet,
      image: "/images/hero1.png",
      achievements: [
        "50,000+ units deployed across agricultural and industrial states",
        "Complete compliance with IS 8472 engineering standards",
        "Proprietary high-wear impellers designed by our fluid dynamics bay",
      ],
      ctaText: "Explore Pumps Catalog",
      color: "from-[#0A4ABF] to-[#00AEEF]",
    },
    {
      name: "SMSM Healthcare",
      industry: "Medical Equipment Calibration & Sanitization Pumps",
      desc: "SMSM Healthcare provides calibration, maintenance, and setup services for hospital operations. We support clean-air ventilation control grids and medical diagnostic pumps.",
      vision: "Ensuring hospital operations maintain 100% uptime with diagnostic accuracy.",
      logo: Syringe,
      image: "/images/company_healthcare.png",
      achievements: [
        "Maintenance SLAs with 15 regional hospital networks",
        "ISO 13485 aligned medical diagnostic calibration systems",
        "Emergency diagnostic dispatches active 24/7",
      ],
      ctaText: "Contact Healthcare Division",
      color: "from-[#00AEEF] to-[#071A35]",
    },
    {
      name: "UB Foundation",
      industry: "Social Outreach & Community Welfare (CSR)",
      desc: "UB Foundation is our dedicated non-profit social organization. We fund primary school computer lab setups, construct clean-water boreholes, and sponsor skill development programs.",
      vision: "Empowering rural communities through clean water, education, and vocational skills.",
      logo: HeartHandshake,
      image: "/images/about_laboratory.png",
      achievements: [
        "Sponsoring vocational technical training for 200+ students annually",
        "12 clean-water borehole installations completed in remote regions",
        "Plantation drives offsetting 100% of SMSM factory carbon outputs",
      ],
      ctaText: "Connect with UB Foundation",
      color: "from-[#071A35] to-[#00AEEF]",
    },
  ];

  const stats = [
    { value: "4", label: "Group Companies" },
    { value: "12+", label: "Years Combined" },
    { value: "22", label: "States Served" },
  ];

  return (
    <main className="bg-slate-50 min-h-screen pt-28">
      {/* SECTION 1: Hero Banner */}
      <section className="relative min-h-[500px] md:min-h-[70vh] flex items-end bg-slate-950 text-white overflow-hidden pb-16 md:pb-0">
        <Image
          src="/images/hero3.png"
          alt="Our Group Companies Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/10 z-10" />

        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20 md:pb-16">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-semibold">
              SMSM Holdings
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight font-display leading-[1.08]">
              Our Group Companies
            </h1>
            <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              Integrating coatings chemistry, civic infrastructures, heavy hydraulics, hospital calibrations, and social outreach.
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

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Group Companies</span>
        </div>
      </div>

      {/* SECTION 2: Group Companies Showcase */}
      <section className="py-16 md:py-24 lg:py-[130px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 space-y-20 md:space-y-28 lg:space-y-[150px]">
          {companies.map((c, idx) => {
            const Icon = c.logo;
            const isLeft = idx % 2 === 0;

            return (
              <Reveal key={c.name}>
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isLeft ? "lg:order-1" : "lg:order-2"} relative`}>
                    <div className="relative aspect-[16/11] rounded-2xl overflow-hidden group shadow-2xl">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-w-1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />
                      <div className="absolute inset-0 grid-lines opacity-10 z-10" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-15 mix-blend-overlay z-10`} />
                    </div>
                    <div className={`hidden sm:flex absolute -bottom-7 ${isLeft ? "-right-6 lg:-right-8" : "-left-6 lg:-left-8"} bg-white shadow-2xl rounded-2xl p-5 items-center gap-4 border border-slate-100 max-w-[240px] z-20`}>
                      <div className="h-12 w-12 icon-chip shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-base font-medium text-[#071A35] font-display leading-snug">{c.name}</div>
                        <div className="text-[11px] text-slate-400 font-medium mt-1 uppercase tracking-wide">Group Division</div>
                      </div>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className={`lg:col-span-6 ${isLeft ? "lg:order-2" : "lg:order-1"} space-y-6`}>
                    <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block">{c.industry}</span>
                    <h3 className="text-3xl md:text-4xl text-[#071A35] font-display font-medium">{c.name}</h3>
                    <p className="text-slate-600 text-base font-light leading-relaxed">{c.desc}</p>

                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                      <h4 className="text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Division Vision</h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">{c.vision}</p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs uppercase font-semibold text-[#071A35] tracking-wider">Division Achievements</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {c.achievements.map((ach, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <CheckCircle2 className="h-4.5 w-4.5 text-[#00AEEF] shrink-0 mt-0.5" />
                            <span className="font-light text-xs">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#071A35] hover:bg-[#0A4ABF] text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                      >
                        {c.ctaText} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: Group Ecosystem Visual Infographic */}
      <section className="py-16 md:py-24 lg:py-[130px] bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A4ABF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-semibold block mb-3">Conglomerate Synergies</span>
            <h2 className="text-3xl md:text-5xl font-display font-medium">
              SMSM Group Ecosystem
            </h2>
            <div className="h-1 w-16 bg-[#00AEEF] mx-auto mt-6 rounded-full" />
            <p className="text-white/70 font-light mt-6">
              How our diverse industrial operations coordinate under a unified corporate framework.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <Reveal delay={0.05} className="p-6 border border-white/10 bg-white/[0.04] rounded-2xl text-center hover:bg-white/[0.08] hover:border-[#00AEEF]/40 transition-all hover:-translate-y-1.5 h-full">
              <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-xl grid place-items-center text-[#00AEEF] mx-auto mb-4">
                <Layers className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-lg mb-2 font-display">ACT India Chemical Synthesis</h4>
              <p className="text-white/60 text-xs font-light leading-relaxed">Synthesizes liquid pigments and universal paint colorants supplied directly to paint dealers.</p>
            </Reveal>

            <Reveal delay={0.1} className="p-6 border border-white/10 bg-white/[0.04] rounded-2xl text-center hover:bg-white/[0.08] hover:border-[#00AEEF]/40 transition-all hover:-translate-y-1.5 h-full">
              <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-xl grid place-items-center text-[#00AEEF] mx-auto mb-4">
                <Network className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-lg mb-2 font-display">Electronics & Firmware Bay</h4>
              <p className="text-white/60 text-xs font-light leading-relaxed">Engineers step-motor control boards, calibration logic, and database software for machinery.</p>
            </Reveal>

            <Reveal delay={0.15} className="p-6 border border-white/10 bg-white/[0.04] rounded-2xl text-center hover:bg-white/[0.08] hover:border-[#00AEEF]/40 transition-all hover:-translate-y-1.5 h-full">
              <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-xl grid place-items-center text-[#00AEEF] mx-auto mb-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-lg mb-2 font-display">SMSM Machinery Assembly</h4>
              <p className="text-white/60 text-xs font-light leading-relaxed">Assembles automatic sequential paint dispensers and gyroscopic mixers for coating factories.</p>
            </Reveal>

            <Reveal delay={0.2} className="p-6 border border-white/10 bg-white/[0.04] rounded-2xl text-center hover:bg-white/[0.08] hover:border-[#00AEEF]/40 transition-all hover:-translate-y-1.5 h-full">
              <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-xl grid place-items-center text-[#00AEEF] mx-auto mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-lg mb-2 font-display">SMSM Pumps</h4>
              <p className="text-white/60 text-xs font-light leading-relaxed">Manufactures heavy-duty submersibles, booster pumps, and pipelines to support large-scale factories.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <PartnerMarquee title="Trusted by Paint Operators & Corporate Partners" />

      {/* SECTION 5: CTA */}
      <section className="py-16 md:py-24 lg:py-[130px] bg-[#071A35] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] to-[#0A4ABF]/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight leading-tight font-display">
              Become a Strategic Partner
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg mt-4 font-light">
              Connect with our corporate strategy desk to explore distributor rights, joint ventures, or project consulting.
            </p>
            <div className="pt-8">
              <Link href="/become-partner" className="inline-flex items-center gap-2 bg-[#00AEEF] text-[#071A35] font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white hover:text-[#071A35] transition-all hover:-translate-y-0.5 shadow-lg">
                Become a Partner <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
