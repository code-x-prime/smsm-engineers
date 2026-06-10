import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Activity, Cpu, Code, HelpCircle, BookOpen, Compass } from "lucide-react";

type ServiceDetails = {
  name: string;
  category: string;
  desc: string;
  overview: string;
  benefits: string[];
  timeline: { step: string; label: string; desc: string }[];
  expertise: Record<string, string>;
  image: string;
};

const servicesData: Record<string, ServiceDetails> = {
  amc: {
    name: "AMC — Any Make Tinting Equipment",
    category: "Engineering Support",
    desc: "Comprehensive Annual Maintenance Contracts (AMC) and emergency breakdown troubleshooting services. Our experienced technicians are trained to repair, calibrate, and service paint tinting equipment of any manufacturer.",
    overview: "We take the complexity out of machine maintenance. With standardized response protocols, monthly diagnostic checks, and direct components tracking, we keep paint-dosing channels fully operational.",
    benefits: [
      "Minimize retail dispensing downtime by 90%",
      "Guaranteed calibration alignment (Delta E < 0.5)",
      "Genuine step-motors and valves spare parts inventory",
      "24/7 hotline with remote diagnostic capability",
    ],
    timeline: [
      { step: "Phase 1", label: "Initial Calibration Audit", desc: "Our technicians run a color deviation analysis on all canisters." },
      { step: "Phase 2", label: "Purging & Nozzle Tune-up", desc: "Clearing fluid lines and replacing worn valve gaskets." },
      { step: "Phase 3", label: "Database Calibration Link", desc: "Calibrating software variables with manual dosing checks." },
    ],
    expertise: {
      "Supported Brands": "Fast & Fluid, Corob, Hero, Dromont, and others",
      "Response SLA": "Within 24 hours for metro cities",
      "Testing standard": "Spectrophotometric delta checks",
    },
    image: "/images/about_laboratory.png",
  },
  "color-consultancy": {
    name: "Color Consultancy",
    category: "Consulting",
    desc: "Our consulting team assists paint manufacturing companies in defining chemical color recipes, universal stainer formulations, and optimizing base-coat reflection indexes.",
    overview: "We help factories design the chemistry of color. By calculating optimal pigment loading and conducting weatherometer weathering tests, we ensure consistent coatings formulations.",
    benefits: [
      "Optimized Pigment Volume Concentration (PVC) costs",
      "High weather and lightfastness ratings",
      "Custom shade recipe development databases",
      "SOP implementation for Point of Sale tinting networks",
    ],
    timeline: [
      { step: "Phase 1", label: "Spectral Mapping", desc: "Scanning master color targets using spectrophotometers." },
      { step: "Phase 2", label: "Recipe Formulation", desc: "Calculating cost-optimized raw pigment loads." },
      { step: "Phase 3", label: "Weather Durability Testing", desc: "Conducting accelerated weathering check cycles." },
    ],
    expertise: {
      "Calculation engine": "Kubelka-Munk color matching math",
      "Standard compliance": "ASTM, ISO weathering parameters",
      "Substrates tested": "Gypsum board, concrete panels, sheet metal",
    },
    image: "/images/product_shade_card.png",
  },
  "pcb-design": {
    name: "PCB Designing",
    category: "Electronics",
    desc: "Industrial-grade electronic control board design, schematic layout, and firmware design for machinery step-motor controls.",
    overview: "We design robust, noise-tolerant hardware controllers capable of operating in high-temperature manufacturing environments. From prototype design to high-volume PCB printing, we handle the entire vertical stack.",
    benefits: [
      "Highly noise-immune industrial control traces",
      "Custom firmware programmed in optimized C/C++",
      "RoHS compliant, lead-free board specifications",
      "Onboard diagnostic LEDs and remote logging ports",
    ],
    timeline: [
      { step: "Phase 1", label: "Schematic Mapping", desc: "Creating hardware logic flow diagrams." },
      { step: "Phase 2", label: "Layout Routing", desc: "Optimizing electromagnetic interference (EMI) paths." },
      { step: "Phase 3", label: "Reflow & Assembly", desc: "Solder reflow, parts assembly, and thermal load testing." },
    ],
    expertise: {
      "Board layers": "1 to 8 Layers (FR4, Aluminum base)",
      "Controllers": "STM32, ARM Cortex, PIC series",
      "EDA Software": "Altium Designer, KiCad",
    },
    image: "/images/hero2.png",
  },
  software: {
    name: "Software Development",
    category: "Software Solutions",
    desc: "Custom formulation database managers, paint visualizer apps, and POS software modules tailored for retail and factory setups.",
    overview: "We build modern software modules that link paint machinery to enterprise ERPs. With secure APIs and simple touch interfaces, we make paint mixing intuitive and reliable.",
    benefits: [
      "Direct USB/Serial interfaces with automatic dispensers",
      "Cloud formulation database sync and offline fallback modes",
      "Intuitive client-facing color matching visualizers",
      "Responsive interfaces tailored for retail shops",
    ],
    timeline: [
      { step: "Phase 1", label: "Database Indexing", desc: "Importing paint manufacturer formulation tables." },
      { step: "Phase 2", label: "Driver Customization", desc: "Writing canister step-motor rotation instructions." },
      { step: "Phase 3", label: "POS Integration", desc: "Deploying user interface at retail paint outlets." },
    ],
    expertise: {
      "Tech stack": "React, Next.js, Electron, PostgreSQL, SQLite",
      "Communication": "USB COM ports, Bluetooth BLE, RS-232",
      "Operating Systems": "Windows 10/11, Android, iOS, Linux",
    },
    image: "/images/hero3.png",
  },
  "technical-support": {
    name: "Technical Support Desk",
    category: "Engineering Support",
    desc: "Remote database syncing, emergency step-motor diagnosis, and field engineer dispatch for immediate retail repairs.",
    overview: "Our dedicated support desk coordinates maintenance tickets between paint manufacturers and field technicians, ensuring fast, certified repairs.",
    benefits: [
      "Real-time ticket logging system for tracking problems",
      "Remote desktop access to resolve software calibrations",
      "Priority parts shipping from regional warehouses",
      "Monthly performance reports sent to corporate clients",
    ],
    timeline: [
      { step: "Phase 1", label: "Ticket Creation", desc: "Logging machinery fault codes onto our tracking system." },
      { step: "Phase 2", label: "Remote Diagnostics", desc: "Accessing POS terminals to check calibration logs." },
      { step: "Phase 3", label: "Technician Dispatch", desc: "Deploying a regional field tech with spare parts." },
    ],
    expertise: {
      "Support channels": "Phone support, WhatsApp logs, Remote Desktop",
      "Target Response": "Under 4 hours for priority partners",
      "Ticketing tools": "SMSM Internal Helpdesk CRM",
    },
    image: "/images/office_about.png",
  },
  "engineering-consultancy": {
    name: "Engineering Consultancy",
    category: "Consulting",
    desc: "Plant design, manufacturing line optimization, and machinery layout plans custom-designed for new coating factories.",
    overview: "We help new paint enterprises layout efficient, safe, and highly productive paint mixing plants. From chemical storage configurations to dispenser placement, we optimize floor operations.",
    benefits: [
      "Reduce manufacturing floor foot-traffic delays",
      "Ensure compliance with environmental and fire regulations",
      "Calibrate optimal machinery load distributions",
      "Integrate automated tracking and quality gates",
    ],
    timeline: [
      { step: "Phase 1", label: "Floor Layout Review", desc: "Analyzing spatial constraints of manufacturing bays." },
      { step: "Phase 2", label: "Machinery Allocation", desc: "Positioning shakers, dispensers, and chemical pipelines." },
      { step: "Phase 3", label: "Safety Integration", desc: "Designing emergency stop triggers and ventilation paths." },
    ],
    expertise: {
      "Modeling tools": "AutoCAD, SolidWorks",
      "Compliance rules": "National Fire Safety, ISO factory mandates",
      "Target Capacity": "Up to 500,000 Liters / Month designs",
    },
    image: "/images/hero_about.png",
  },
  downloads: {
    name: "Downloads & Manuals",
    category: "Technical Library",
    desc: "Access user guides, calibration manuals, safety datasheets, and software updates.",
    overview: "We provide open access to technical datasheets and guidelines to support independent servicing and compliance checks.",
    benefits: [
      "Official manuals for dispensers and shakers",
      "Up-to-date MSDS chemical safety sheets",
      "Latest USB communication drivers",
      "Firmware update instructions and FAQs",
    ],
    timeline: [
      { step: "Step 1", label: "Select Document", desc: "Choose machine model or chemical batch." },
      { step: "Step 2", label: "Verify Format", desc: "Download Adobe PDF or ZIP files." },
      { step: "Step 3", label: "Apply Guidelines", desc: "Follow installation instructions." },
    ],
    expertise: {
      "Document class": "Technical datasheets, MSDS sheets",
      "File types": "PDF, ZIP, MSI installation files",
      "Access": "Public access repository",
    },
    image: "/images/hero_group.png",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // Schema structured JSON-LD data
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://smsmengineers.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://smsmengineers.in/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.name,
        "item": `https://smsmengineers.in/services/${slug}`,
      },
    ],
  };

  const relatedServices = Object.entries(servicesData)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <main className="bg-brand-bg pt-28">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Hero Banner */}
      <section className="relative py-20 bg-[#071A35] text-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0A4ABF]/20 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <Link href="/services" className="inline-flex items-center gap-2 text-[#00AEEF] hover:text-white transition-colors text-sm font-semibold">
                <ArrowLeft className="h-4 w-4" /> Back to Services
              </Link>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#00AEEF] font-bold block mb-2">{service.category}</span>
                <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl tracking-tight font-display font-bold leading-tight">
                  {service.name}
                </h1>
              </div>
              <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                {service.desc}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/query-form"
                  className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-white text-[#071A35] font-bold px-6 py-3 rounded-sm transition-colors text-sm"
                >
                  Request Service Assessment <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-2xl group bg-slate-950">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Decorative design elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#00AEEF]/40 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#00AEEF]/40 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
        <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/services" className="hover:text-slate-800 transition-colors">Services</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">{service.name}</span>
      </div>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-8 space-y-6">
            <h2 className="text-2xl font-bold text-[#071A35] font-display">Service Overview</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light">{service.overview}</p>

            {/* Benefits */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xl font-bold text-[#071A35] font-display">Key Service Benefits</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((b, idx) => (
                  <li key={idx} className="flex gap-2 text-slate-600 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#00AEEF] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 bg-brand-bg border border-slate-200 p-6 rounded-sm h-fit space-y-4">
            <h3 className="font-bold text-[#071A35] font-display text-lg">Inquire About This Service</h3>
            <p className="text-xs text-slate-500">Need specific customized pricing or a technician site visit?</p>
            <Link
              href="/query-form"
              className="w-full text-center block bg-[#0A4ABF] hover:bg-[#071A35] text-white font-bold p-3 rounded-sm text-sm transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Download Portal for downloads page */}
      {slug === "downloads" && (
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#071A35] font-display mb-8 text-center">Corporate Credentials & Technical Catalog</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* DIPP */}
              <div className="border border-slate-200 p-6 rounded-sm bg-brand-bg hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[#00AEEF] text-xs font-bold uppercase">Government Registry</span>
                  <h3 className="text-lg font-bold text-[#071A35] mt-1 mb-3">Startup India DPIIT Recognition</h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
                    Verify our official certificate of recognition issued by the Department for Promotion of Industry and Internal Trade (DIPP8079).
                  </p>
                </div>
                <a
                  href="/downloads/dipp_recognition.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0A4ABF] hover:bg-[#071A35] text-white font-bold text-sm py-2.5 rounded-sm transition-colors w-full"
                >
                  Download Certificate (PDF)
                </a>
              </div>

              {/* Kamdhenu */}
              <div className="border border-slate-200 p-6 rounded-sm bg-brand-bg hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[#00AEEF] text-xs font-bold uppercase">Client Verification</span>
                  <h3 className="text-lg font-bold text-[#071A35] mt-1 mb-3">Kamdhenu Paints Recommendation</h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
                    Official evaluation letter detailing engineering service parameters, calibration audits, and operational maintenance SLA compliance.
                  </p>
                </div>
                <a
                  href="/downloads/kamdhenu_recommendation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0A4ABF] hover:bg-[#071A35] text-white font-bold text-sm py-2.5 rounded-sm transition-colors w-full"
                >
                  Download Letter (PDF)
                </a>
              </div>

              {/* Popular */}
              <div className="border border-slate-200 p-6 rounded-sm bg-brand-bg hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[#00AEEF] text-xs font-bold uppercase">Client Verification</span>
                  <h3 className="text-lg font-bold text-[#071A35] mt-1 mb-3">Popular Paints Recommendation</h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
                    Corporate quality endorsement certifying SMSM Engineers' equipment maintenance logs and spectrophotometric calibration audits.
                  </p>
                </div>
                <a
                  href="/downloads/popular_recommendation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0A4ABF] hover:bg-[#071A35] text-white font-bold text-sm py-2.5 rounded-sm transition-colors w-full"
                >
                  Download Letter (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Timeline */}
      <section className="py-16 bg-brand-bg border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A35] font-display mb-10 text-center">Service Implementation Timeline</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.timeline.map((item) => (
              <div key={item.step} className="bg-white border border-slate-200 p-6 rounded-sm">
                <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-wider">{item.step}</span>
                <h3 className="text-lg font-bold text-[#071A35] font-display mt-1 mb-2">{item.label}</h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise Parameters */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A35] font-display mb-6 text-center">Technical Parameters & Standards</h2>
          <div className="border border-slate-200 rounded-sm overflow-hidden">
            <table className="w-full text-sm text-left">
              <tbody>
                {Object.entries(service.expertise).map(([key, val]) => (
                  <tr key={key} className="border-b border-slate-200 last:border-b-0">
                    <td className="bg-brand-bg px-6 py-4 font-bold text-[#071A35] w-2/5">{key}</td>
                    <td className="px-6 py-4 text-slate-600">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-brand-bg border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A35] font-display mb-8">Related Support Programs</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedServices.map(([key, item]) => (
              <Link key={key} href={`/services/${key}`} className="bg-white border border-slate-200 p-6 rounded-sm hover:shadow-lg transition-all group">
                <span className="text-xs uppercase text-slate-400 font-bold">{item.category}</span>
                <h3 className="text-lg font-bold text-[#071A35] group-hover:text-[#0A4ABF] mt-1 mb-2 font-display">{item.name}</h3>
                <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">{item.desc}</p>
                <div className="text-[#00AEEF] text-xs font-bold mt-4 inline-flex items-center gap-1">
                  Learn Details <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-16 bg-[#071A35] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold font-display">Need Custom Engineering Solutions?</h2>
          <p className="text-white/70 text-sm font-light">Contact our engineering group today to schedule a detailed factory overview or system configuration analysis.</p>
          <div className="pt-2">
            <Link href="/contact" className="bg-[#00AEEF] hover:bg-white text-[#071A35] font-bold px-8 py-3 rounded-sm transition-colors text-sm inline-block">
              Contact Systems Engineer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
