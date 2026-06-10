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
      name: "SMSM Construction",
      industry: "Civic Infrastructures & Corporate Buildings",
      desc: "SMSM Construction delivers civil engineering projects including industrial warehouses, high-strength factory foundations, and modern residential apartments. We specialize in vibration-dampening foundations for heavy machinery.",
      vision: "Building structures that combine architectural beauty with mechanical safety compliance.",
      logo: Building2,
      image: "/images/company_construction.png",
      achievements: [
        "40+ industrial projects completed across Northern India",
        "Zero accident reports over a decade of high-rise builds",
        "Specialized in precast vibration-dampening heavy foundations",
      ],
      ctaText: "Contact Construction Desk",
      color: "from-[#071A35] to-[#0A4ABF]",
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

  return (
    <main className="bg-slate-50 min-h-screen pt-28">
      {/* SECTION 1: Hero Banner */}
      <section className="relative h-[60vh] flex items-center bg-slate-950 text-white overflow-hidden">
        <Image
          src="/images/hero_group.png"
          alt="Our Group Companies Hero Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        <div className="absolute inset-0 grid-lines opacity-10 z-10" />
        
        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20">
          <div className="max-w-3xl space-y-6">
            <span className="text-[#00AEEF] text-xs uppercase tracking-[0.3em] font-extrabold block">SMSM Holdings</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display" style={{ fontFamily: "Georgia, serif" }}>
              Our Group Companies
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Integrating coatings chemistry, civic infrastructures, heavy hydraulics, hospital calibrations, and social outreach.
            </p>
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
      <section className="py-[140px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 space-y-[140px]">
          {companies.map((c, idx) => {
            const Icon = c.logo;
            const isLeft = idx % 2 === 0;

            return (
              <Reveal key={c.name}>
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isLeft ? "lg:order-1" : "lg:order-2"} relative aspect-[16/11] rounded-sm overflow-hidden group shadow-2xl`}>
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-w-1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 grid-lines opacity-10 z-10" />
                    <div className="absolute top-6 left-6 h-14 w-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm grid place-items-center z-20">
                      <Icon className="h-6 w-6 text-[#00AEEF]" />
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className={`lg:col-span-6 ${isLeft ? "lg:order-2" : "lg:order-1"} space-y-6`}>
                    <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block">{c.industry}</span>
                    <h3 className="text-3xl md:text-4xl text-[#071A35] font-display font-bold" style={{ fontFamily: "Georgia, serif" }}>{c.name}</h3>
                    <p className="text-slate-600 text-base font-light leading-relaxed">{c.desc}</p>
                    
                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-sm">
                      <h4 className="text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Division Vision</h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">{c.vision}</p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs uppercase font-extrabold text-[#071A35] tracking-wider">Division Achievements</h4>
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
                        className="inline-flex items-center gap-2 bg-[#071A35] hover:bg-[#0A4ABF] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-sm transition-colors"
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
      <section className="py-[140px] bg-slate-900 text-white relative">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-extrabold block mb-2">Conglomerate Synergies</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold" style={{ fontFamily: "Georgia, serif" }}>
              SMSM Group Ecosystem
            </h2>
            <p className="text-white/70 font-light mt-4">
              How our diverse industrial operations coordinate under a unified corporate framework.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            <Reveal delay={0.05} className="border border-white/10 bg-white/5 p-6 rounded-sm text-center">
              <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-sm grid place-items-center text-[#00AEEF] mx-auto mb-4">
                <Layers className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">ACT India Chemical Synthesis</h4>
              <p className="text-white/60 text-xs font-light leading-relaxed">Synthesizes liquid pigments and universal paint colorants supplied directly to paint dealers.</p>
            </Reveal>

            <Reveal delay={0.1} className="border border-white/10 bg-white/5 p-6 rounded-sm text-center">
              <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-sm grid place-items-center text-[#00AEEF] mx-auto mb-4">
                <Network className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Electronics & Firmware Bay</h4>
              <p className="text-white/60 text-xs font-light leading-relaxed">Engineers step-motor control boards, calibration logic, and database software for machinery.</p>
            </Reveal>

            <Reveal delay={0.15} className="border border-white/10 bg-white/5 p-6 rounded-sm text-center">
              <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-sm grid place-items-center text-[#00AEEF] mx-auto mb-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">SMSM Machinery Assembly</h4>
              <p className="text-white/60 text-xs font-light leading-relaxed">Assembles automatic sequential paint dispensers and gyroscopic mixers for coating factories.</p>
            </Reveal>

            <Reveal delay={0.2} className="border border-white/10 bg-white/5 p-6 rounded-sm text-center">
              <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-sm grid place-items-center text-[#00AEEF] mx-auto mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">SMSM Pumps & Construction</h4>
              <p className="text-white/60 text-xs font-light leading-relaxed">Constructs heavy foundations, pipelines, and booster pumps to support large-scale factories.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <PartnerMarquee title="Trusted by Paint Operators & Corporate Partners" />

      {/* SECTION 5: CTA */}
      <section className="py-[140px] bg-[#071A35] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] to-[#0A4ABF]/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight font-display" style={{ fontFamily: "Georgia, serif" }}>
              Become a Strategic Partner
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg mt-4 font-light">
              Connect with our corporate strategy desk to explore distributor rights, joint ventures, or project consulting.
            </p>
            <div className="pt-8">
              <Link href="/become-partner" className="bg-[#00AEEF] text-[#071A35] font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-white hover:text-[#071A35] transition-colors">
                Become a Partner
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {stylejsx}
    </main>
  );
}

const stylejsx = (
  <style jsx global>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
  `}</style>
);
