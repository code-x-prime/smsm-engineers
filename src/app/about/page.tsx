"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Shield, Target, HeartHandshake, ArrowRight, CheckCircle2, 
  Award, Eye, Sparkles, Building, Landmark, Compass, AwardIcon,
  Briefcase, Users, Globe, Calendar, Cpu, Layers, TrendingUp
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export default function About() {
  const milestones = [
    { year: "2013", title: "Inception & Consulting", desc: "Founded as a specialized diagnostic service consultant for paint tinting and retail paint dispensing machinery.", icon: Compass },
    { year: "2016", title: "Universal Stainers Lab", desc: "Launched in-house universal colorants chemical formulations under the ACT India holding, supplying national paint majors.", icon: Layers },
    { year: "2018", title: "Custom PCB Design Bay", desc: "Established the electrical engineering division to design custom PCBs and program micro-stepping motor controllers.", icon: Cpu },
    { year: "2021", title: "Machinery Assembly Line", desc: "Initiated mechanical assemblies for automated tinting carousels, sequential dispensers, and high-wear gyroscopic shakers.", icon: TrendingUp },
    { year: "2024", title: "Holding Group Expansion", desc: "Expanded the company ecosystem to encompass heavy hydraulic fluid pumps, civil foundations, and CSR initiatives.", icon: Award },
  ];

  const valueBlocks = [
    { icon: Shield, title: "Integrity", desc: "We adhere strictly to CE specifications, electrical safety guidelines, and honest corporate SLAs." },
    { icon: Sparkles, title: "Innovation", desc: "In-house R&D drives our proprietary firmware design and spectrophotometric color algorithms." },
    { icon: Target, title: "Commitment", desc: "24/7 technical hotlines and guaranteed field technician dispatches in under 24 hours across India." },
    { icon: Award, title: "Excellence", desc: "Continuous improvement in step-motor dosing precision, aiming for sub-drop calibrations down to 1/384 fl. oz." },
    { icon: Landmark, title: "Quality", desc: "ISO 9001:2015 certified quality controls implemented across chemical synthesis and mechanical reflow bays." },
    { icon: HeartHandshake, title: "Customer Satisfaction", desc: "A decade of building reliable partnerships with paint dealers, coating factories, and public entities." },
  ];

  const stats = [
    { value: 12, label: "Years Experience", suffix: "+", icon: Shield },
    { value: 1800, label: "Projects Completed", suffix: "+", icon: Briefcase },
    { value: 500, label: "Happy Clients", suffix: "+", icon: Users },
    { value: 22, label: "States Served", suffix: "", icon: Globe },
  ];

  return (
    <main className="bg-slate-50 min-h-screen pt-28">
      {/* SECTION 1: Premium Hero Banner */}
      <section className="relative h-[60vh] flex items-center bg-slate-950 text-white overflow-hidden">
        <Image
          src="/images/hero_about.png"
          alt="About SMSM Engineers Hero Background"
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        <div className="absolute inset-0 grid-lines opacity-10 z-10" />
        
        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20">
          <div className="max-w-3xl space-y-6">
            <span className="text-[#00AEEF] text-xs uppercase tracking-[0.3em] font-extrabold block">Corporate Heritage</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display" style={{ fontFamily: "Georgia, serif" }}>
              About SMSM Engineers
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Engineering Innovation, Industrial Excellence, Trusted Since 2013.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">About Us</span>
        </div>
      </div>

      {/* SECTION 2: Company Overview */}
      <section className="py-[140px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          {/* Left image column */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden group shadow-2xl">
            <Image
              src="/images/office_about.png"
              alt="SMSM Engineers Corporate Office"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-w-1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 grid-lines opacity-10 z-10" />
          </div>

          {/* Right details column */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block">Enterprise Profile</span>
              <h2 className="text-4xl md:text-5xl text-[#071A35] font-display font-bold leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                Pioneering Paint Tinting, Electronics, & Machinery
              </h2>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
                SMSM Engineers is a highly diversified industrial conglomerate. Launched in 2013 as specialized service consultants, we have expanded to become design and integration leaders in paint machinery, chemicals, construction, and hydraulics.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                <div>
                  <h4 className="font-extrabold text-[#071A35] text-sm mb-1 uppercase tracking-wider">Our Mission</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    To deliver uncompromised precision, robust step-motor dosing stability, and proactive diagnostic support across Indian B2B markets.
                  </p>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#071A35] text-sm mb-1 uppercase tracking-wider">Our Vision</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    To expand the Make-in-India movement globally by synthesizing zero-VOC paint bases and exporting custom electronic boards.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#071A35] hover:bg-[#0A4ABF] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-sm transition-colors shadow-lg"
                >
                  Contact Our Alliance Desk <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Leadership Section */}
      <section className="py-[140px] bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="max-w-[1400px] mx-auto px-6 space-y-16 relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-extrabold block mb-2">Executive Leadership</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold" style={{ fontFamily: "Georgia, serif" }}>
              Board of Directors Message
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Chairman Card */}
            <Reveal delay={0.05}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors flex flex-col justify-between h-full group">
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="h-16 w-16 rounded-full relative overflow-hidden shrink-0 border-2 border-[#00AEEF]">
                      <Image
                        src="/images/founder_sharma.png"
                        alt="Mr. Satish Sharma"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display text-white">Mr. Satish Sharma</h3>
                      <p className="text-xs text-white/50 font-semibold uppercase tracking-wide">Chairman & Executive Director</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm italic font-light leading-relaxed border-l-2 border-[#00AEEF] pl-4">
                    "Our mission is to establish SMSM Engineers as the absolute benchmark for tinting hardware stability. Through strategic alliances and in-house chemical manufacturing, we drive Make-in-India technology to global paint majors."
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6 text-[10px] text-white/40 uppercase tracking-widest font-bold font-mono">
                  Satish Sharma &mdash; Signature
                </div>
              </div>
            </Reveal>

            {/* Founder Card */}
            <Reveal delay={0.1}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors flex flex-col justify-between h-full group">
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="h-16 w-16 rounded-full relative overflow-hidden shrink-0 border-2 border-[#00AEEF]">
                      <Image
                        src="/images/founder_sharma.png"
                        alt="Mr. S. M. Sharma"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display text-white">Mr. S. M. Sharma</h3>
                      <p className="text-xs text-white/50 font-semibold uppercase tracking-wide">Founder & Chief Consultant</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm italic font-light leading-relaxed border-l-2 border-[#00AEEF] pl-4">
                    "Having started as maintenance consultants, we realized that industrial coating plants need robust integration. By designing custom PCBs in-house, we eliminate motor calibration mismatches and dispenser failures."
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6 text-[10px] text-white/40 uppercase tracking-widest font-bold font-mono">
                  S. M. Sharma &mdash; Signature
                </div>
              </div>
            </Reveal>

            {/* Managing Director Card */}
            <Reveal delay={0.15}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors flex flex-col justify-between h-full group">
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="h-16 w-16 rounded-full relative overflow-hidden shrink-0 border-2 border-[#0A4ABF]">
                      <Image
                        src="/images/md_sharma.png"
                        alt="Mrs. Minakshi Sharma"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display text-white">Mrs. Minakshi Sharma</h3>
                      <p className="text-xs text-white/50 font-semibold uppercase tracking-wide">Managing Director</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm italic font-light leading-relaxed border-l-2 border-[#0A4ABF] pl-4">
                    "Operational precision and human resources are the twin pillars of SMSM. We have structured our support channels to coordinate field technician dispatches in under 24 hours across multiple states."
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6 text-[10px] text-white/40 uppercase tracking-widest font-bold font-mono">
                  M. Sharma &mdash; Signature
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: Interactive Growth Timeline */}
      <section className="py-[140px] bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block mb-2">Legacy & Evolution</span>
            <h2 className="text-4xl md:text-5xl text-[#071A35] font-display font-extrabold" style={{ fontFamily: "Georgia, serif" }}>
              Our Growth Journey
            </h2>
          </Reveal>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-12 pl-6 md:pl-10 space-y-12">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.year} delay={idx * 0.05}>
                  <div className="relative">
                    <div className="absolute -left-[35px] md:-left-[51px] top-1.5 h-6 w-6 bg-white border-4 border-[#00AEEF] rounded-full z-10 flex items-center justify-center shadow-md" />
                    <div className="bg-slate-50 p-6 md:p-8 border border-slate-200 rounded-sm hover:border-[#00AEEF] transition-all hover:shadow-lg flex gap-6 items-start">
                      <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-sm grid place-items-center text-[#00AEEF] shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-[#00AEEF] font-mono mb-1">{m.year}</div>
                        <h3 className="text-xl font-bold text-[#071A35] font-display mb-1">{m.title}</h3>
                        <p className="text-slate-600 text-sm font-light leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: Mission, Vision & Core Values */}
      <section className="py-[140px] bg-slate-900 text-white relative">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="max-w-[1400px] mx-auto px-6 space-y-16 relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-extrabold block mb-2">Our Foundation</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold" style={{ fontFamily: "Georgia, serif" }}>
              Core Values & Principles
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueBlocks.map((vb, idx) => {
              const Icon = vb.icon;
              return (
                <Reveal key={vb.title} delay={idx * 0.05}>
                  <div className="border border-white/10 bg-white/5 p-8 rounded-sm hover:bg-white/10 transition-all hover:-translate-y-1 flex flex-col justify-between h-full group">
                    <div>
                      <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-sm grid place-items-center text-[#00AEEF] mb-6">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 font-display group-hover:text-[#00AEEF] transition-colors">{vb.title}</h3>
                      <p className="text-white/70 text-sm font-light leading-relaxed">{vb.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: Company Statistics */}
      <section className="bg-white border-y border-slate-200 py-16 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="space-y-3 flex flex-col items-center">
                  <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-sm grid place-items-center text-[#00AEEF]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl md:text-5xl font-extrabold text-[#071A35] font-display">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA Banner */}
      <section className="py-[140px] bg-[#071A35] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] to-[#0A4ABF]/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight font-display" style={{ fontFamily: "Georgia, serif" }}>
              Let's Build the Future Together
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg mt-4 font-light">
              SMSM Engineers invites B2B partners, chemical distributors, and machinery operators to join our nationwide alliance network.
            </p>
            <div className="pt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-[#00AEEF] text-[#071A35] font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-white hover:text-[#071A35] transition-colors">
                Contact Us
              </Link>
              <Link href="/become-partner" className="border border-white/20 hover:bg-white/5 font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-sm transition-colors">
                Become a Partner
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
