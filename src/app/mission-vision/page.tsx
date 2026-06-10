"use client";

import Link from "next/link";
import { Compass, Target, Shield, Recycle, Award, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function MissionVision() {
  const policies = [
    { title: "ISO 9001 Alignment", desc: "Rigorous quality check protocols implemented across all mechanical dispenser assemblies and universal colorant batches." },
    { title: "Eco-Friendly Operations", desc: "Developing zero-VOC (Volatile Organic Compounds) universal tinters to protect environment and indoor air safety." },
    { title: "Continuous Technical Training", desc: "Empowering our service engineers with certified updates on latest hydraulics and step-motor configurations." },
  ];

  return (
    <main className="bg-brand-bg pt-28">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#071A35] text-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <span className="text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-extrabold block mb-4">Values & Direction</span>
          <h1 className="hero-heading text-4xl md:text-6xl tracking-tight max-w-4xl">
            Our Mission & Vision
          </h1>
          <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            The foundation principles guiding SMSM Engineers towards precision, safety, and global expansion in the industrial solutions industry.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
        <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Mission & Vision</span>
      </div>

      {/* Vision & Mission Split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Vision card */}
          <Reveal>
            <div className="bg-brand-bg border border-slate-200 p-10 rounded-sm h-full flex flex-col justify-between hover-lift">
              <div>
                <div className="h-14 w-14 rounded-sm bg-[#0A4ABF]/10 grid place-items-center mb-6">
                  <Compass className="h-8 w-8 text-[#0A4ABF]" />
                </div>
                <h2 className="text-3xl font-bold text-[#071A35] mb-4 font-display">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed font-light">
                  To become the world's most trusted engineering alliance for paint-tinting technology and control board integrations, facilitating uncompromised precision, environmental safety, and zero-defect efficiency in global coatings industries.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Mission card */}
          <Reveal>
            <div className="bg-[#071A35] text-white p-10 rounded-sm h-full flex flex-col justify-between hover-lift relative overflow-hidden">
              <div className="absolute inset-0 grid-lines opacity-10" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-sm bg-[#00AEEF]/20 grid place-items-center mb-6">
                  <Target className="h-8 w-8 text-[#00AEEF]" />
                </div>
                <h2 className="text-3xl font-bold mb-4 font-display">Our Mission</h2>
                <p className="text-white/70 leading-relaxed font-light">
                  We are committed to delivering highly robust, automated paint machinery, custom PCB systems, and green chemical colorants. We provide dependable, 24/7 technical AMC support, enabling local and multinational coating manufacturers to scale production seamlessly.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0A4ABF] text-sm uppercase tracking-widest font-extrabold block mb-2">Quality Standards</span>
            <h2 className="section-heading text-3xl md:text-5xl text-[#071A35]">
              Our Quality Commitments
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {policies.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 0.1}>
                <div className="bg-white border border-slate-200 p-8 rounded-sm hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 bg-[#00AEEF]/10 rounded-sm grid place-items-center mb-6">
                    <CheckCircle className="h-5 w-5 text-[#00AEEF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#071A35] mb-3 font-display">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
