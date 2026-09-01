"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronLeft, ChevronRight, Shield, Settings,
  Layers, Sliders, RefreshCw, Cpu, Database,
  Award, ShieldCheck, CheckCircle2,
  HeartHandshake, ArrowUpRight, Syringe,
} from "lucide-react";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { ImageColorMask } from "@/components/ImageColorMask";
import { DownloadSection } from "@/components/DownloadSection";

const slides = [
  {
    img: "/images/hero.png",
    tagline: "Trusted Tinting Solutions Partner — Serving Since 2013",
    title1: "One",
    titleHighlight: "Solution",
    title2: "For All Your Tinting Needs",
    desc: "Delivering complete color tinting excellence from innovation to application — colorants, dispensers, shade cards, and the engineering behind them."
  },
  {
    img: "/images/hero1.png",
    tagline: "Trusted B2B Engineering Alliance",
    title1: "Engineering",
    titleHighlight: "Excellence",
    title2: "Powers Modern Industries",
    desc: "SMSM Engineers delivers industrial automation systems, color technology solutions, engineering consultancy, manufacturing support, and enterprise services across India."
  },
  {
    img: "/images/hero2.png",
    tagline: "Industrial Electronics & Calibration",
    title1: "Advanced",
    titleHighlight: "PCB Designs",
    title2: "Built for Heavy Machinery",
    desc: "Our electronics engineering division designs custom Printed Circuit Boards and programs robust stepper motor firmware to eliminate operation downtime."
  },
  {
    img: "/images/hero3.png",
    tagline: "Chemistry & Pigment Synthesis",
    title1: "Precision",
    titleHighlight: "Colorants",
    title2: "Formulated for Global Brands",
    desc: "Synthesizing zero-VOC universal paint tinters and high-concentration pigment bases calibrated to exact spectrophotometric parameters."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const trustStats = [
    { value: 12, label: "Years Experience", suffix: "+" },
    { value: 500, label: "Projects Completed", suffix: "+" },
    { value: 450, label: "Happy Clients", suffix: "+" },
    { value: 15, label: "Industry Partners", suffix: "" },
    { value: 22, label: "States Served", suffix: "+" },
  ];



  const productsShowcase = [
    {
      id: "colorant",
      name: "COLORANT",
      category: "Tinting Systems",
      desc: "Our universal paint colorants represent a decade of chemical refinement. Synthesized locally at ACT India plants, these colorants support both water-based emulsions and solvent-based paints without viscosity shifts.",
      specs: ["100% Zero VOC Formulations", "Weather weathering tested (Delta E < 0.5)", "Compatible with acrylic and solvent coatings"],
      imageSide: "left",
      image: "/images/product_colorant.png",
      color: "from-[#0A4ABF]/20 via-[#071A35]/35 to-transparent",
      link: "/products/colorant"
    },
    {
      id: "shade-card",
      name: "SHADE CARD",
      category: "Tinting Systems",
      desc: "High-precision chromatic shade books, fan decks, and paint catalog swatches. Calibrated with high-end spectrophotometers to guarantee exact color representation at retail paint stores.",
      specs: ["300gsm premium artboard substrates", "Delta E < 0.3 color accuracy", "Satin, matte, and gloss options"],
      imageSide: "right",
      image: "/images/product_shade_card.png",
      color: "from-[#00AEEF]/20 via-[#071A35]/35 to-transparent",
      link: "/products/shade-card"
    },
    {
      id: "automatic-dispenser",
      name: "AUTOMATIC COLOR DISPENSER",
      category: "Color Machinery",
      desc: "The SMSM Automatic Color Dispenser features precision step-motor dosing, sequential syringe/bellows mechanics, and automated canister circulation loops to prevent nozzle sedimentation.",
      specs: ["Canister limit: 16 to 24 canisters", "Minimum dosing accuracy: 1/384 fl. oz.", "RoHS compliant custom control PCB"],
      imageSide: "left",
      image: "/images/product_automatic_dispenser.png",
      color: "from-[#0A4ABF]/30 via-[#00AEEF]/20 to-transparent",
      link: "/products/automatic-color-dispenser"
    },
    {
      id: "gyroshaker",
      name: "GYROSHAKER MIXER",
      category: "Color Machinery",
      desc: "Heavy-duty gyroscopic bidirectional mixer engineered to homogenize high-viscosity coatings. Supports automated clamping height calibration and heavy-duty steel damping frames.",
      specs: ["Clamping range: 50mm - 410mm", "Maximum load limit: 40kg", "Bidirectional rotational mixing"],
      imageSide: "right",
      image: "/images/product_gyroshaker.png",
      color: "from-[#071A35]/40 via-[#0A4ABF]/35 to-transparent",
      link: "/products/gyroshaker"
    },
    {
      id: "universal-stainer",
      name: "UNIVERSAL STAINER",
      category: "Tinting Systems",
      desc: "Concentrated POS manual stainer squeeze bottles. Designed for quick micro-shade changes and formulation calibrations at dealer shops.",
      specs: ["High pigment solid ratio (up to 60%)", "Calibrated drop nozzles", " Weather weather fastness"],
      imageSide: "left",
      image: "/images/product_universal_stainer.png",
      color: "from-[#00AEEF]/30 via-[#071A35]/40 to-transparent",
      link: "/products/universal-stainer"
    }
  ];

  const servicesShowcase = [
    {
      slug: "amc",
      name: "Annual Maintenance Contract (AMC)",
      desc: "Comprehensive and non-comprehensive Tinting System support for Auto, Manual, and Gyro dispensers with an ITIL-based helpdesk.",
      icon: ShieldCheck,
      details: ["State-of-the-art facilities in 35 locations", "SLA-aligned breakdown resolution", "Preventive maintenance & upgrades"],
    },
    {
      slug: "color-consultancy",
      name: "Color Consultancy",
      desc: "End-to-end tinting system solutions — colourants, fandecks, shade card formulations, and technical sales support.",
      icon: Layers,
      details: ["16 Colourants & Databank", "Formulations on popular shade cards", "Base development & sales enablement"],
    },
    {
      slug: "pcb-design",
      name: "PCB Designing",
      desc: "2-layer and multilayer, high-density PCB designs for medical, IoT, HMI, and industrial control hardware.",
      icon: Cpu,
      details: ["Layout design, prototyping & assembly", "Medical, IoT & wireless applications", "RoHS compliant assemblies"],
    },
    {
      slug: "software",
      name: "Software Development",
      desc: "A strategic software partner delivering turnkey solutions built on proven methodologies for startups and enterprises.",
      icon: Database,
      details: ["Turnkey business solutions", "Advanced engineering practices", "Value-driven partnerships"],
    },
    {
      slug: "engineering-consultancy",
      name: "Engineering Consultancy",
      desc: "Layout planning, structural flow charts, and safety compliance integrations for large coating factories.",
      icon: Settings,
      details: ["AutoCAD line planning layouts", "Fire safety compliance", "Spatial logistics optimization"],
    },
    {
      slug: "technical-support",
      name: "Technical Support",
      desc: "Remote database calibrations, software updates, step-motor diagnostics, and CRM ticket tracking support.",
      icon: RefreshCw,
      details: ["Remote desktop assistance", "MSDS sheets downloads", "24-hour response matrix"],
    }
  ];

  const groupCompanies = [
    {
      name: "ACT India",
      industry: "Coatings Chemistry & Pigment Synthesis",
      desc: "ACT India is our chemical manufacturing arm. Equipped with automated grinding mills, it produces universal colorants and pigment stainers supplied directly to top national paint brands.",
      achievements: ["10,000+ Metric Tons annual output", "Supplying 3 of India's top 5 paint brands"],
      icon: Layers,
      color: "from-[#0A4ABF] to-[#071A35]",
    },
    {
      name: "SMSM Pumps",
      industry: "Fluid Dynamics & Industrial Pumps",
      desc: "Manufacturing high-durability submersibles, booster pumps, and agricultural fluid dynamic impellers built for heavy-viscosity fluids.",
      achievements: ["50,000+ units deployed", "IS 8472 engineering compliance"],
      icon: DropletIcon,
      color: "from-[#0A4ABF] to-[#00AEEF]",
    },
        {
      name: "SMSM Healthcare",
      industry: "Medical Equipment Calibration & Sanitization Pumps",
      desc: "SMSM Healthcare provides calibration, maintenance, and setup services for hospital operations, clean-air ventilation control grids, and medical diagnostic pumps.",
      achievements: [
        "Maintenance SLAs with 15 regional hospital networks",
        "ISO 13485 aligned medical calibration systems",
      ],
      icon: Syringe,
      color: "from-[#00AEEF] to-[#071A35]",
    },
    {
      name: "UB Foundation",
      industry: "Social Outreach & Community Welfare",
      desc: "A non-profit foundation sponsoring school computer installations, clean-water wells, and technical vocational courses.",
      achievements: ["Sponsoring 200+ students annually", "12 clean water installations completed"],
      icon: HeartHandshake,
      color: "from-[#071A35] to-[#00AEEF]",
    }
  ];

  const strengths = [
    { title: "Precision Dosing", desc: "Our dispensing systems support step-motor control with accurate calibration to 1/384 fl. oz.", icon: Sliders },
    { title: "24/7 AMC Support", desc: "Expert technicians deployed globally for rapid hardware replacement and machinery tuning.", icon: ShieldCheck },
    { title: "In-house R&D", desc: "Proprietary software, PCB engineering, and fluid dynamic testing conducted in-house.", icon: Cpu },
    { title: "Global Standards", desc: "ISO-aligned manufacturing frameworks ensuring robust compliance and product consistency.", icon: Award },
    { title: "End-to-End Solutions", desc: "We provide colorants, stainers, dispensers, shakers, color cards, and software suite.", icon: Layers },
    { title: "Make in India", desc: "Advanced engineering proudly engineered and manufactured locally, built to serve global clients.", icon: HeartHandshake },
  ];

  function DropletIcon(props: any) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" /></svg>
    );
  }

  return (
    <main className="relative min-h-screen">

      {/* 100VH CINEMATIC SLIDESHOW HERO SECTION (SLJ Solutions Inspired) */}
      <section className="relative h-screen flex items-center justify-start bg-slate-950 text-white overflow-hidden">

        {/* Fullscreen Carousel Background Images */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.55, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].img})` }}
            />
          </AnimatePresence>
          {/* Rich Grid Lines and Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071A35]/30 via-transparent to-[#071A35] z-10" />
          <div className="absolute inset-0 grid-lines opacity-15 z-10" />
        </div>

        {/* Content Overlay */}
        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20 pt-20">
          <div className="max-w-4xl space-y-6">
            <motion.div
              key={`slide-content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-medium uppercase tracking-widest text-[#00AEEF] w-fit">
                <Shield className="h-4 w-4" /> {slides[currentSlide].tagline}
              </div>

              {/* Clean modern sans typography, tight tracking, fully responsive */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.08] font-semibold tracking-tight">
                {slides[currentSlide].title1}{" "}
                <span className="text-[#00AEEF] block sm:inline">
                  {slides[currentSlide].titleHighlight}
                </span>
                <span className="text-white/85 block mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-normal normal-case">
                  {slides[currentSlide].title2}
                </span>
              </h1>

              <p className="text-white/80 text-base md:text-lg max-w-2xl font-light leading-relaxed">
                {slides[currentSlide].desc}
              </p>
            </motion.div>

            {/* Premium CTA Buttons matching SLJ Solutions style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-white text-[#071A35] font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/query-form"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white bg-white/5 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Carousel Side Controls (SLJ outline arrows) */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all z-30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all z-30"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Bottom Slide Progress Counter (SLJ Inspired 01 / 03) */}
        <div className="absolute bottom-12 left-6 z-20 flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-white/60">
          <span className="text-white text-lg font-display">0{currentSlide + 1}</span>
          <div className="w-16 h-[2px] bg-white/20 relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-[#00AEEF]"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span>0{slides.length}</span>
        </div>

        {/* Bottom Status & Indicators */}
        <div className="absolute bottom-12 right-6 z-20 flex items-center gap-6">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 transition-all ${currentSlide === i ? "w-6 bg-[#00AEEF]" : "w-2 bg-white/30"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP SECTION */}
      <section className="bg-white border-y border-slate-100 py-10 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center">
            {trustStats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="text-3xl md:text-5xl font-semibold text-[#071A35] font-display">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT COMPANY (Padding 140px) */}
      <section className="py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          {/* Large Image Left */}
          <div className="lg:col-span-6 relative">
            <Reveal>
              <div className="aspect-[4/3] rounded-xl text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                <Image
                  src="/images/about_laboratory.png"
                  alt="SMSM Engineers R&D Laboratory"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A35] via-[#071A35]/60 to-[#071A35]/10 z-10" />
                <div className="absolute inset-0 grid-lines opacity-10 z-10" />
                <div className="h-16 w-16 bg-[#00AEEF]/20 rounded-xl grid place-items-center relative z-20 m-8">
                  <Shield className="h-8 w-8 text-[#00AEEF]" />
                </div>
                <div className="relative z-20 p-8 pt-0">
                  <span className="text-[10px] uppercase tracking-wider text-white/80 block mb-1">Establishment</span>
                  <h3 className="text-3xl font-semibold font-display">Engineered Since 2013</h3>
                  <p className="text-sm text-white/80 font-light mt-2 max-w-sm">
                    Agra based campus supporting R&D laboratories, custom electronic circuit reflow lines, and assembly setups.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Content Right */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block">About SMSM Engineers</span>
              <h2 className="section-heading text-4xl md:text-5xl text-[#071A35] font-display">
                Precision & Quality in Industrial Operations
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-light">
                SMSM Engineers is a highly diversified industrial engineering enterprise. Originally launched as specialized machinery trouble-shooters, we have expanded to establish automated paint dispensing lines, universal stainers synthesis at ACT India, custom PCB controllers, and plant-level layout consulting.
              </p>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-medium text-slate-800 text-sm mb-4">Key Corporate Achievements</h4>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-[#00AEEF] shrink-0" /> ISO-aligned quality compliance</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-[#00AEEF] shrink-0" /> Supply chains across 22+ states</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-[#00AEEF] shrink-0" /> In-house PCB board assembly</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-[#00AEEF] shrink-0" /> Custom B2B software solutions</li>
                </ul>
              </div>

              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-[#0A4ABF] hover:underline">
                  Read Corporate Message <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUCT SHOWCASE (Apple-Style Alternating Huge Rows, Padding 140px) */}
      <section className="py-14 md:py-16 bg-brand-bg border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 space-y-[100px]">

          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block mb-2">Our Catalog</span>
            <h2 className="section-heading text-4xl md:text-5xl text-[#071A35] font-display">
              Preserved Industrial Products
            </h2>
          </Reveal>

          {productsShowcase.map((prod, idx) => {
            const isLeft = prod.imageSide === "left";
            return (
              <Reveal key={prod.id}>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isLeft ? "lg:order-1" : "lg:order-2"}`}>
                    <ImageColorMask
                      src={prod.image}
                      alt={prod.name}
                      badge={prod.category}
                      title={prod.name}
                      subtitle={`Product 0${idx + 1}`}
                      specs={prod.specs}
                      href={prod.link}
                      aspectRatio="aspect-[16/10]"
                      objectFit={prod.id === "automatic-dispenser" ? "contain" : "cover"}
                    />
                  </div>

                  {/* Details Column */}
                  <div className={`lg:col-span-6 ${isLeft ? "lg:order-2" : "lg:order-1"} space-y-4 sm:space-y-6`}>
                    <span className="text-xs uppercase text-[#0A4ABF] font-medium tracking-wide">{prod.category}</span>
                    <h3 className="text-2xl sm:text-3xl font-medium text-[#071A35] font-display">{prod.name}</h3>
                    <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">{prod.desc}</p>

                    <ul className="space-y-2 text-sm text-slate-500 font-medium">
                      {prod.specs.map((spec, i) => (
                        <li key={i} className="flex gap-2 items-center">
                          <CheckCircle2 className="h-4.5 w-4.5 text-[#00AEEF]" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <Link
                        href={prod.link}
                        className="inline-flex items-center gap-2 bg-[#071A35] hover:bg-[#0A4ABF] text-white font-medium text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors"
                      >
                        View Specifications <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}

        </div>
      </section>

      {/* SECTION 4: SERVICES SHOWCASE (Alternating Layouts, Padding 140px) */}
      <section className="py-14 md:py-16 bg-[#071A35] text-white relative">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">

          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-semibold block mb-2">Our Capabilities</span>
            <h2 className="section-heading text-4xl md:text-5xl font-display">
              Preserved Technical Services
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesShowcase.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Reveal key={srv.slug} delay={idx * 0.05}>
                  <div className="border border-white/10 bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-all hover-lift flex flex-col justify-between h-full group">
                    <div>
                      <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-xl grid place-items-center text-[#00AEEF] mb-6">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-medium text-white mb-4 font-display group-hover:text-[#00AEEF] transition-colors">{srv.name}</h3>
                      <p className="text-white/70 text-sm font-light leading-relaxed mb-6">{srv.desc}</p>

                      <ul className="space-y-2 text-xs text-white/50 border-t border-white/5 pt-4 mb-6">
                        {srv.details.map((dt, i) => (
                          <li key={i} className="flex gap-2 items-center">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#00AEEF]" />
                            <span>{dt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={`/services/${srv.slug}`} className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#00AEEF] font-medium hover:underline">
                      Learn Details <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: AWARDS & CERTIFICATIONS (Padding 140px) */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          {/* Certificate Lightbox */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block">Standards Compliance</span>
              <h2 className="section-heading text-3xl md:text-4xl text-[#071A35] font-display">Certifications</h2>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                SMSM Engineers operates under rigid quality checking codes aligned with international directives to guarantee mechanical structural performance.
              </p>

              <div className="space-y-4 pt-4">
                <div className="p-5 border border-slate-200 bg-brand-bg rounded-xl flex gap-4">
                  <Award className="h-8 w-8 text-[#00AEEF] shrink-0" />
                  <div>
                    <h4 className="font-medium text-[#071A35] text-sm">ISO 9001:2015 Standards</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Certified quality management frameworks implemented across our manufacturing plants.</p>
                  </div>
                </div>
                <div className="p-5 border border-slate-200 bg-brand-bg rounded-xl flex gap-4">
                  <ShieldCheck className="h-8 w-8 text-[#00AEEF] shrink-0" />
                  <div>
                    <h4 className="font-medium text-[#071A35] text-sm">CE Mechanical Clearances</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Compliance with global machinery safety parameters, electrical insulation, and step-motor calibration.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Achievement Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <h2 className="section-heading text-3xl text-[#071A35] font-display">Recognition Timeline</h2>
              <div className="space-y-6 pt-6">
                {[
                  { year: "2018", title: "Best Tinting Equipment Maintenance", org: "Regional Paint Distributors Forum" },
                  { year: "2020", title: "Industrial Innovation Award", org: "UP Machinery Manufacturers Consortium" },
                  { year: "2022", title: "Excellence in Make In India Dosing Systems", org: "SME Engineering Summit" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 border-l-2 border-[#00AEEF] bg-brand-bg ml-4">
                    <span className="text-xl font-semibold text-[#071A35] font-display shrink-0 w-12">{item.year}</span>
                    <div>
                      <h4 className="font-medium text-[#071A35] text-sm font-display">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 6: LEADERSHIP (Founder, MD Address, Large Portraits, Padding 140px) */}
      <section className="py-14 md:py-16 bg-brand-bg border-t border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 space-y-16">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block mb-2">Executive Desk</span>
            <h2 className="section-heading text-3xl md:text-5xl text-[#071A35] font-display">Board of Directors Message</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Chairman Message */}
            <Reveal>
              <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-xl space-y-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4 items-center">
                  <div className="h-16 w-16 rounded-full relative overflow-hidden shrink-0 border-2 border-[#00AEEF]">
                    <Image
                      src="/images/umesh_bhardwaj_face.jpg"
                      alt="Acharya Umesh Bhardwaj"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#071A35] font-display">Acharya Umesh Bhardwaj</h3>
                    <p className="text-xs text-slate-400 font-semibold uppercase">Chairman & Executive Director</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic font-light border-l-4 border-[#00AEEF] pl-4">
                  &ldquo;SMSM Engineers aims to be recognized as the industry leader through its unique service offerings, specialized high quality solutions, and value added services. We are dedicated to safeguarding the interests of both outbound and inbound clients while strengthening the reputation of SMSM in India&apos;s fast paced and competitive environment.&rdquo;
                </p>
              </div>
            </Reveal>

            {/* MD Message */}
            <Reveal>
              <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-xl space-y-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4 items-center">
                  <div className="h-16 w-16 rounded-full relative overflow-hidden shrink-0 border-2 border-[#0A4ABF]">
                    <Image
                      src="/images/priyanka_bhardwaj_executive_face.jpg"
                      alt="Mrs. Priyanka Bhardwaj"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#071A35] font-display">Mrs. Priyanka Bhardwaj</h3>
                    <p className="text-xs text-slate-400 font-semibold uppercase">Managing Director</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic font-light border-l-4 border-[#0A4ABF] pl-4">
                  &ldquo;SMSM Engineers operates on the twin pillars of operational precision and human resource excellence. Through structured support channels, we coordinate field technician dispatches in under 24 hours, ensuring seamless service delivery across diverse regions.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 7: GROUP COMPANIES (Showcases alternate rows, Padding 140px) */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 space-y-16">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block mb-2">SMSM Holdings</span>
            <h2 className="section-heading text-3xl md:text-5xl text-[#071A35] font-display">Our Group Companies</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {groupCompanies.map((gc) => {
              const Icon = gc.icon;
              return (
                <Reveal key={gc.name}>
                  <div className="p-8 border border-slate-200 bg-brand-bg rounded-xl flex flex-col justify-between h-full group hover:border-[#00AEEF] transition-all">
                    <div>
                      <div className="h-12 w-12 bg-[#071A35] rounded-xl grid place-items-center text-white mb-6">
                        <Icon className="h-6 w-6 text-[#00AEEF]" />
                      </div>
                      <span className="text-[10px] uppercase font-medium text-[#00AEEF] tracking-wider">{gc.industry}</span>
                      <h3 className="text-2xl font-medium text-[#071A35] font-display mt-1 mb-3">{gc.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">{gc.desc}</p>

                      <div className="space-y-2 border-t border-slate-200 pt-4 mb-6">
                        {gc.achievements.map((ach, i) => (
                          <div key={i} className="flex gap-2 text-xs text-slate-500 font-medium">
                            <CheckCircle2 className="h-4 w-4 text-[#0A4ABF] shrink-0" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link href="/group-companies" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#071A35] font-medium group-hover:text-[#0A4ABF]">
                      Explore Holding <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY CHOOSE SMSM (Our Advantage - Premium Light Grid) */}
      <section className="py-14 md:py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden border-t border-b border-slate-100">
        {/* Decorative Grid and Background Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#00AEEF]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#0A4ABF]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
              Our Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight font-display text-[#071A35]">
              Engineered for Dependability
            </h2>
            <div className="h-1.5 w-16 bg-[#00AEEF] mx-auto mt-6 rounded-full" />
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((st, idx) => {
              const Icon = st.icon;
              return (
                <Reveal key={st.title} delay={idx * 0.05}>
                  <div className="group relative p-8 md:p-10 bg-white border border-slate-100 rounded-xl hover:border-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(7,26,53,0.08)] flex flex-col justify-between h-full overflow-hidden">
                    {/* Top colored accent line that expands on hover */}
                    <div className="absolute top-0 left-0 h-[4px] w-16 bg-gradient-to-r from-[#00AEEF] to-[#0A4ABF] group-hover:w-full transition-all duration-500 ease-out" />

                    <div className="relative">
                      {/* Large background number */}
                      <span className="absolute right-0 top-0 text-7xl font-semibold font-display text-slate-100 select-none group-hover:text-slate-200/50 transition-colors duration-300">
                        0{idx + 1}
                      </span>

                      {/* Icon container */}
                      <div className="h-16 w-16 bg-gradient-to-br from-[#00AEEF]/5 to-[#0A4ABF]/5 rounded-xl flex items-center justify-center text-[#0A4ABF] group-hover:from-[#00AEEF] group-hover:to-[#0A4ABF] group-hover:text-white transition-all duration-500 ease-out mb-8 shadow-sm">
                        <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-[#071A35] mb-4 font-display tracking-tight group-hover:text-[#0A4ABF] transition-colors duration-300">
                        {st.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-light group-hover:text-slate-600 transition-colors duration-300">
                        {st.desc}
                      </p>
                    </div>

                    {/* Minimal interactive footer indicator */}
                    <div className="pt-6 border-t border-slate-50 mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#0A4ABF] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span>Reliability Verified</span>
                      <div className="h-1 w-8 bg-[#00AEEF] rounded-full" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 9: DOWNLOAD CENTER (Software & Brochures) */}
      <DownloadSection />

      <PartnerMarquee title="Trusted by Leading Global Paint Brands & Operators" />

      {/* SECTION 10: CONTACT CTA (Padding 140px) */}
      <section className="py-14 md:py-16 bg-[#071A35] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] to-[#0A4ABF]/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight font-display">
              Let&apos;s Build Better Engineering Solutions Together
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg mt-4 font-light">
              Connect with our systems architects today for a personalized quotation, hardware demo, or to request custom AMC support.
            </p>
            <div className="pt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-[#00AEEF] text-[#071A35] font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-white hover:text-[#071A35] transition-colors">
                Contact Us
              </Link>
              <Link href="/query-form" className="border border-white/20 hover:bg-white/5 font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-colors">
                Request Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
