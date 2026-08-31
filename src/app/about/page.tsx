"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Shield, Target, HeartHandshake, ArrowRight,
  Award, Sparkles, Landmark, Compass,
  Briefcase, Users, Globe, Cpu, Layers, TrendingUp,
  Rocket, Lightbulb, Handshake, Quote
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

type Milestone = { year: string; title: string; desc: string; icon: any };

function TimelineCard({ m, Icon, align }: { m: Milestone; Icon: any; align: "left" | "right" }) {
  return (
    <div
      className={`flex ${align === "right" ? "flex-row-reverse text-right ml-auto" : "flex-row text-left mr-auto"} gap-4 items-start bg-slate-50 p-6 lg:p-7 border border-slate-200 rounded-2xl hover:border-[#00AEEF] transition-all hover:shadow-xl hover:-translate-y-0.5 w-full max-w-md`}
    >
      <div className="h-12 w-12 icon-chip shrink-0">
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <div className="text-2xl font-semibold text-[#00AEEF] font-mono mb-1">{m.year}</div>
        <h3 className="text-lg font-medium text-[#071A35] font-display mb-1">{m.title}</h3>
        <p className="text-slate-600 text-sm font-light leading-relaxed">{m.desc}</p>
      </div>
    </div>
  );
}

export default function About() {
  const milestones = [
    { year: "2013", title: "Inception & Consulting", desc: "Founded as a specialized diagnostic service consultant for paint tinting and retail paint dispensing machinery.", icon: Compass },
    { year: "2016", title: "Universal Stainers Lab", desc: "Launched in-house universal colorants chemical formulations under the ACT India holding, supplying national paint majors.", icon: Layers },
    { year: "2018", title: "Custom PCB Design Bay", desc: "Established the electrical engineering division to design custom PCBs and program micro-stepping motor controllers.", icon: Cpu },
    { year: "2021", title: "Machinery Assembly Line", desc: "Initiated mechanical assemblies for automated tinting carousels, sequential dispensers, and high-wear gyroscopic shakers.", icon: TrendingUp },
    { year: "2024", title: "Holding Group Expansion", desc: "Expanded the company ecosystem to encompass heavy hydraulic fluid pumps, civil foundations, and CSR initiatives.", icon: Award },
  ];

  const missionPillars = [
    { num: "01", title: "Brand Recognition", desc: "We are dedicated to delivering the highest quality of customer service with warmth, friendliness, individual pride, and strong company spirit.", icon: Sparkles },
    { num: "02", title: "Growth", desc: "We aim to drive economic growth through infrastructure and energy development, offering solutions that support communities and protect the planet.", icon: TrendingUp },
    { num: "03", title: "Innovation", desc: "Our constant endeavor is to innovate and provide high quality products that set new standards of excellence.", icon: Lightbulb },
    { num: "04", title: "Commitment", desc: "Our foremost commitment is to deliver the best business solutions for every customer — from the very first interaction to the final delivery — ensuring reliability, trust, and satisfaction at every stage.", icon: Target },
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
    { value: 500, label: "Projects Completed", suffix: "+", icon: Briefcase },
    { value: 450, label: "Happy Clients", suffix: "+", icon: Users },
    { value: 22, label: "States Served", suffix: "", icon: Globe },
  ];

  const partnerReasons = [
    { title: "Accelerated Growth", desc: "Unlock faster business expansion through our established distribution network and technical infrastructure.", icon: Rocket },
    { title: "Reduced Risk", desc: "Minimize operational risks with our proven engineering processes, quality systems, and field-tested machinery.", icon: Shield },
    { title: "Expanded Reach", desc: "Extend your market presence through shared resources, joint expertise, and cross-regional service capabilities.", icon: Handshake },
  ];

  const leaders = [
    {
      name: "Acharya Umesh Bhardwaj",
      role: "Chairman & Executive Director",
      image: "/images/umesh_bhardwaj.jpg",
      imagePosition: "50% 16%",
      signature: "/images/signature_umesh.png",
      quote: "SMSM Engineers aims to be recognized as the industry leader through its unique service offerings, specialized high quality solutions, and value added services. We are dedicated to safeguarding the interests of both outbound and inbound clients while strengthening the reputation of SMSM in India's fast paced and competitive environment.",
      accent: "#00AEEF",
      initials: "UB",
    },
    {
      name: "Mrs. Priyanka Bhardwaj",
      role: "Managing Director",
      image: "/images/priyanka_bhardwaj.jpg",
      imagePosition: "50% 20%",
      signature: "/images/signature_priyanka.jpg",
      quote: "SMSM Engineers operates on the twin pillars of operational precision and human resource excellence. Through structured support channels, we coordinate field technician dispatches in under 24 hours, ensuring seamless service delivery across diverse regions.",
      accent: "#38BDF8",
      initials: "PB",
    },
    {
      name: "Mr. Nipunesh Bhardwaj",
      role: "Associate Director",
      image: "/images/nipunesh_bhardwaj.png",
      imagePosition: "50% 8%",
      signature: "/images/signature_nipunesh.jpg",
      quote: "SMSM Engineers is proud to be recognized as one of India's leading service providers. Our vision is to set industry benchmarks through specialized, high quality, and value added services. We remain committed to safeguarding the interests of both domestic and international clients while strengthening the reputation of SMSM in today's fast paced and competitive environment.",
      accent: "#00AEEF",
      initials: "NB",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen pt-28">
      {/* SECTION 1: Premium Hero Banner */}
      <section className="relative min-h-[560px] md:min-h-[70vh] flex items-end bg-slate-950 text-white overflow-hidden pb-16 md:pb-0">
        <Image
          src="/images/service_engineering_consultancy.jpg"
          alt="About SMSM Engineers Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/10 z-10" />

        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20 pt-24 md:pt-0 md:pb-20">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-semibold">
              Corporate Heritage
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight font-display leading-[1.05]">
              About SMSM Engineers
            </h1>
            <p className="text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Engineering Innovation, Industrial Excellence, Trusted Since 2013.
            </p>
          </div>

          {/* Floating quick-stats strip */}
          <div className="hidden md:grid grid-cols-4 gap-6 mt-14 max-w-3xl border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl lg:text-3xl font-semibold text-white font-display">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-white/50 font-medium mt-1">{stat.label}</div>
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
          <span className="text-slate-800 font-medium">About Us</span>
        </div>
      </div>

      {/* Mobile-only stats strip (hero didn't show them below md) */}
      <div className="md:hidden bg-white border-b border-slate-200">
        <div className="grid grid-cols-2 gap-6 max-w-[1400px] mx-auto px-6 py-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-semibold text-[#071A35] font-display">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Company Overview / Enterprise Profile */}
      <section className="py-16 md:py-24 lg:py-[140px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left image column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-2xl">
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
            {/* Floating badge card with rich brand contrast */}
            <div className="hidden sm:flex absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 lg:-right-8 bg-[#071A35] text-white shadow-[0_20px_50px_rgba(7,26,53,0.45)] rounded-2xl p-5 sm:p-6 items-center gap-4 border border-white/15 max-w-[260px] z-20">
              <div className="h-12 w-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] grid place-items-center shrink-0 border border-[#00AEEF]/30 shadow-inner">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl font-semibold text-white font-display leading-none">Since 2013</div>
                <div className="text-xs text-[#00AEEF] font-medium mt-1.5 tracking-wide">Agra, Uttar Pradesh</div>
              </div>
            </div>
          </div>

          {/* Right details column */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <Reveal>
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block">Enterprise Profile</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#071A35] font-display font-medium leading-tight mt-2">
                Pioneering Paint Tinting, Electronics, & Machinery
              </h2>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mt-5">
                SMSM Engineers Private Limited is an Indian private company based in Agra, Uttar Pradesh. Founded in 2013, it specializes in global color solutions, tinting systems, and manufacturing color presentation tools like color cards, fan decks, colorants, and dispensing equipment for the paints and coatings industry.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 border-t border-slate-100 pt-6 mt-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 icon-chip shrink-0"><Target className="h-4 w-4" /></div>
                    <h4 className="font-semibold text-[#071A35] text-sm uppercase tracking-wider">Our Mission</h4>
                  </div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed pl-10">
                    To deliver uncompromised precision, robust step-motor dosing stability, and proactive diagnostic support across Indian B2B markets.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 icon-chip shrink-0"><Sparkles className="h-4 w-4" /></div>
                    <h4 className="font-semibold text-[#071A35] text-sm uppercase tracking-wider">Our Vision</h4>
                  </div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed pl-10">
                    We work hard every day to make SMSM Engineers the world&apos;s most respected service brand.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#071A35] hover:bg-[#0A4ABF] text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Contact Our Alliance Desk <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Leadership Section */}
      <section className="py-16 md:py-24 lg:py-[140px] bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A4ABF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 space-y-16 relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-semibold block mb-3">Executive Leadership</span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold">
              Board of Directors Message
            </h2>
            <div className="h-1 w-16 bg-[#00AEEF] mx-auto mt-6 rounded-full" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <Reveal key={leader.name} delay={idx * 0.05}>
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl hover:bg-white/[0.07] hover:border-white/20 transition-all flex flex-col h-full group overflow-hidden">
                  {/* Portrait band */}
                  <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: leader.imagePosition }}
                        sizes="400px"
                      />
                    ) : (
                      <div
                        className="h-full w-full grid place-items-center text-white font-semibold text-4xl font-display"
                        style={{ background: `linear-gradient(135deg, ${leader.accent}, #071A35)` }}
                      >
                        {leader.initials}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent" />
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-white/20" />
                  </div>

                  <div className="p-8 pt-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-lg font-medium font-display text-white">{leader.name}</h3>
                      <p className="text-xs font-semibold uppercase tracking-wide mt-1 mb-5" style={{ color: leader.accent }}>{leader.role}</p>
                      <p className="text-white/70 text-sm italic font-light leading-relaxed border-l-2 pl-4" style={{ borderColor: leader.accent }}>
                        &ldquo;{leader.quote}&rdquo;
                      </p>
                    </div>
                    <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between">
                      {leader.signature ? (
                        <div className="bg-white rounded-lg px-3 py-1.5">
                          <Image
                            src={leader.signature}
                            alt={`${leader.name} signature`}
                            width={110}
                            height={40}
                            className="h-6 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium font-mono">
                          {leader.name}
                        </span>
                      )}
                      <span className="text-[9px] text-white/30 uppercase tracking-widest font-medium">Signed</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Growth Timeline — alternating spine on desktop, rail on mobile */}
      <section className="py-16 md:py-24 lg:py-[140px] bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block mb-2">Legacy & Evolution</span>
            <h2 className="text-4xl md:text-5xl text-[#071A35] font-display font-semibold">
              Our Growth Journey
            </h2>
          </Reveal>

          {/* Mobile: left rail */}
          <div className="md:hidden relative border-l-2 border-slate-200 ml-4 pl-8 space-y-10">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.year} delay={idx * 0.05}>
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 h-6 w-6 bg-white border-4 border-[#00AEEF] rounded-full z-10" />
                    <div className="bg-slate-50 p-6 border border-slate-200 rounded-2xl hover:border-[#00AEEF] transition-all hover:shadow-xl flex gap-4 items-start">
                      <div className="h-11 w-11 icon-chip shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xl font-semibold text-[#00AEEF] font-mono mb-1">{m.year}</div>
                        <h3 className="text-lg font-medium text-[#071A35] font-display mb-1">{m.title}</h3>
                        <p className="text-slate-600 text-sm font-light leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Desktop: alternating center-spine timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2" />
            <div className="space-y-4">
              {milestones.map((m, idx) => {
                const Icon = m.icon;
                const isEven = idx % 2 === 0;
                return (
                  <Reveal key={m.year} delay={idx * 0.06}>
                    <div className="grid grid-cols-2 gap-x-16 items-stretch relative min-h-[1px]">
                      {/* Node on spine */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-[#00AEEF] rounded-full ring-4 ring-white shadow-[0_0_0_2px_rgba(0,174,239,0.3)] z-10" />

                      {isEven ? (
                        <>
                          <TimelineCard m={m} Icon={Icon} align="right" />
                          <div />
                        </>
                      ) : (
                        <>
                          <div />
                          <TimelineCard m={m} Icon={Icon} align="left" />
                        </>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Vision & Mission Pillars */}
      <section className="py-16 md:py-24 lg:py-[140px] bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 space-y-16 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-semibold block mb-3">Our Foundation</span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
              Vision
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed italic max-w-2xl mx-auto">
              &ldquo;We work hard every day to make SMSM Engineers the world&apos;s most respected service brand.&rdquo;
            </p>
          </Reveal>

          <div>
            <Reveal className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-semibold">Our Mission</h3>
              <div className="h-1 w-14 bg-[#00AEEF] mx-auto mt-4 rounded-full" />
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {missionPillars.map((mp, idx) => {
                const Icon = mp.icon;
                return (
                  <Reveal key={mp.title} delay={idx * 0.05}>
                    <div className="border border-white/10 bg-white/[0.04] p-6 md:p-8 rounded-2xl hover:bg-white/[0.08] hover:border-[#00AEEF]/40 transition-all hover:-translate-y-1.5 flex flex-col h-full group relative overflow-hidden">
                      <span className="absolute right-4 top-2 text-6xl font-semibold text-white/[0.04] font-display select-none group-hover:text-white/[0.08] transition-colors">{mp.num}</span>
                      <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-xl grid place-items-center text-[#00AEEF] mb-6 relative z-10">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-medium text-white mb-3 font-display group-hover:text-[#00AEEF] transition-colors relative z-10">{mp.title}</h4>
                      <p className="text-white/65 text-sm font-light leading-relaxed relative z-10">{mp.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Core Values & Principles */}
      <section className="py-16 md:py-24 lg:py-[140px] bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 space-y-16 relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block mb-2">What Drives Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-[#071A35]">
              Core Values & Principles
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueBlocks.map((vb, idx) => {
              const Icon = vb.icon;
              return (
                <Reveal key={vb.title} delay={idx * 0.05}>
                  <div className="brand-card p-8 flex flex-col justify-between h-full group">
                    <div>
                      <div className="h-12 w-12 icon-chip mb-6">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-medium text-[#071A35] mb-4 font-display group-hover:text-[#0A4ABF] transition-colors">{vb.title}</h3>
                      <p className="text-slate-600 text-sm font-light leading-relaxed">{vb.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: Why Partner With Us */}
      <section className="py-16 md:py-24 lg:py-[140px] bg-gradient-to-b from-brand-bg to-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block mb-2">Strategic Alliances</span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-[#071A35] mb-4">
              Why Partner With Us
            </h2>
            <p className="text-slate-600 text-base font-light leading-relaxed">
              Partnering with us unlocks accelerated business growth, reduces operational risks, and expands your market reach through shared resources and expertise.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerReasons.map((pr, idx) => {
              const Icon = pr.icon;
              return (
                <Reveal key={pr.title} delay={idx * 0.05}>
                  <div className="p-8 bg-white brand-card flex flex-col h-full">
                    <div className="h-14 w-14 bg-gradient-to-br from-[#071A35] to-[#0A4ABF] rounded-xl grid place-items-center text-[#00AEEF] mb-6 shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-medium text-[#071A35] font-display mb-3">{pr.title}</h3>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">{pr.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <Link href="/become-partner" className="inline-flex items-center gap-2 bg-[#0A4ABF] hover:bg-[#071A35] text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl">
              Become a Partner <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA Banner */}
      <section className="py-16 md:py-24 lg:py-[140px] bg-[#071A35] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] to-[#0A4ABF]/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-tight font-display">
              Let&apos;s Build the Future Together
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg mt-4 font-light">
              SMSM Engineers invites B2B partners, chemical distributors, and machinery operators to join our nationwide alliance network.
            </p>
            <div className="pt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-[#00AEEF] text-[#071A35] font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white hover:text-[#071A35] transition-all hover:-translate-y-0.5 shadow-lg">
                Contact Us
              </Link>
              <Link href="/become-partner" className="border border-white/20 hover:bg-white/5 hover:border-white/40 font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all">
                Become a Partner
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
