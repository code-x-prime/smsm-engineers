"use client";

import Link from "next/link";
import { ArrowRight, Settings, Wrench, Shield, Database, Download } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function ServicesPage() {
  const services = [
    {
      slug: "amc",
      name: "Annual Maintenance Contract (AMC)",
      category: "Engineering Support",
      desc: "Comprehensive and non-comprehensive Tinting System support for Auto, Manual, and Gyro dispensers, backed by an ITIL-based helpdesk across 35 locations in India.",
      icon: Wrench,
    },
    {
      slug: "pcb-design",
      name: "PCB Designing",
      category: "Electronics",
      desc: "2-layer and multilayer, high-density, compact PCB designs — from schematic mapping to full prototyping and assembly for medical, IoT, and industrial hardware.",
      icon: Settings,
    },
    {
      slug: "software",
      name: "Software Development",
      category: "Software Solutions",
      desc: "A strategic software partner for startups and enterprises alike, delivering turnkey solutions built on proven methodologies and modern technologies.",
      icon: Database,
    },
    {
      slug: "color-consultancy",
      name: "Color Consultancy",
      category: "Consulting",
      desc: "End-to-end tinting system solutions — 16 colourants, fandecks & databank, shade card formulations, base development, and technical sales support.",
      icon: Shield,
    },
    {
      slug: "downloads",
      name: "Downloads & Manuals",
      category: "Consulting",
      desc: "Access technical blueprints, user guides, software patches, and MSDS (Material Safety Data Sheets).",
      icon: Download,
    },
  ];

  return (
    <main className="bg-brand-bg pt-28">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#071A35] text-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <span className="text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-semibold block mb-4">Engineering Capabilities</span>
          <h1 className="hero-heading text-4xl md:text-6xl tracking-tight max-w-4xl">
            Our Services & Support
          </h1>
          <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            From emergency field maintenance to customized electronic hardware board design, we provide complete technical assistance.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
        <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Services</span>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <Reveal key={s.slug} delay={idx * 0.05}>
                <div className="border border-slate-200 p-8 rounded-xl hover:shadow-xl transition-all h-full bg-brand-bg flex flex-col justify-between group">
                  <div>
                    <div className="h-10 w-10 bg-[#00AEEF]/10 rounded-xl grid place-items-center mb-6">
                      <s.icon className="h-5 w-5 text-[#00AEEF]" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block mb-2">{s.category}</span>
                    <h2 className="text-2xl font-medium text-[#071A35] font-display mb-4 group-hover:text-[#0A4ABF] transition-colors">{s.name}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">{s.desc}</p>
                  </div>
                  <div>
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 bg-[#071A35] text-white font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-[#0A4ABF] transition-colors"
                    >
                      Learn Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
