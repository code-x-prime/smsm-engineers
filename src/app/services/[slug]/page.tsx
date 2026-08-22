import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Sparkles, FileCheck2, MessageCircleQuestion } from "lucide-react";

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
    name: "Annual Maintenance Contract (AMC)",
    category: "Engineering Support",
    desc: "At SMSM Engineers, we provide both comprehensive and non-comprehensive Tinting System support for Auto Color Dispensers, Manual Color Dispensers (including OS), and Gyro systems.",
    overview: "We take the complexity out of machine maintenance. Services are aligned with stringent SLAs and delivered cost-effectively, ensuring maximum uptime through rapid breakdown resolution and preventive maintenance. Our IT Helpdesk Services, built on ITIL methodology, act as a Single Point of Contact (SPOC) for customers — managing every support request end-to-end, from call logging to call closure.",
    benefits: [
      "Services aligned with stringent SLAs, delivered cost-effectively",
      "Maximum uptime ensured through rapid breakdown resolution and preventive maintenance",
      "Strong capabilities in spare parts availability, technical expertise, and coordinated support across a wide product range",
      "State-of-the-art facilities in 35 locations across India for faster, seamless service support nationwide",
      "Integrated quality systems ensure IT infrastructure availability and business continuity",
      "Proven expertise across tinting services has made us a preferred AMC service provider in India",
    ],
    timeline: [
      { step: "Coverage", label: "Comprehensive & Non-Comprehensive", desc: "Full support for Auto Color Dispensers, Manual Color Dispensers (including OS), and Gyro systems." },
      { step: "Helpdesk", label: "Single Point of Contact (SPOC)", desc: "End-to-end management of support requests, from call logging to call closure, on an ITIL-based framework." },
      { step: "Activities", label: "Break-fix, PM & Upgrades", desc: "Break-fix support, preventive maintenance, installation & implementation, plus software upgrades and updates." },
    ],
    expertise: {
      "Coverage Type": "Comprehensive & Non-Comprehensive AMC",
      "Service Locations": "35 locations across India",
      "Helpdesk Standard": "ITIL methodology, Single Point of Contact (SPOC)",
    },
    image: "/images/about_laboratory.png",
  },
  "color-consultancy": {
    name: "Color Consultancy",
    category: "Consulting",
    desc: "At SMSM Engineers, we provide a complete end-to-end solution for tinting systems, ensuring accuracy, consistency, and customer satisfaction.",
    overview: "Our consulting team assists paint manufacturing companies in defining chemical color recipes, universal stainer formulations, and optimizing base-coat reflection indexes — from 16 colourants and colour fandecks to full technical sales and secondary sales enablement support.",
    benefits: [
      "16 Colourants",
      "Colour Fandecks & Databank",
      "Formulations on all popular shade cards",
      "Auto Color Dispensers, Manual Color Dispensers & Gyroshakers",
      "Base Development & Ready-made Bases",
      "Technical Sales & Service Support",
      "Product Promotions",
      "Secondary Sales Enablement",
    ],
    timeline: [
      { step: "Phase 1", label: "Spectral Mapping", desc: "Scanning master color targets using spectrophotometers." },
      { step: "Phase 2", label: "Recipe Formulation", desc: "Calculating cost-optimized raw pigment loads across 16 colourants." },
      { step: "Phase 3", label: "Sales & Field Enablement", desc: "Technical sales support, product promotions, and secondary sales enablement at dealer level." },
    ],
    expertise: {
      "Colourant System": "16 Colourants with full fandeck & databank",
      "Shade Compatibility": "Formulations on all popular shade cards",
      "Machinery Support": "Auto, Manual Dispensers & Gyroshakers",
    },
    image: "/images/product_shade_card.png",
  },
  "pcb-design": {
    name: "PCB Designing",
    category: "Electronics",
    desc: "At SMSM Engineers, we specialize in 2-layer and multilayer, high-density, compact PCB designs that form the backbone of modern electronic hardware.",
    overview: "A Printed Circuit Board (PCB) — also known as a Printed Wiring Board (PWB) — is the essential platform that supports and interconnects all electronic components. Our capabilities span PCB layout design, prototyping, and assembly integrated into every custom electronics hardware project, as well as standalone PCB design and prototyping services that convert existing schematic diagrams into fully assembled prototypes.",
    benefits: [
      "Medical Diagnostic Instruments & Analyzers — ECG, Blood Pressure, Blood Sugar, Electrolyte, Hb/HbA1c, Blood Gas Analyzers, Temperature & Heart Rate Monitors, PT/INR Analyzer",
      "Internet of Things (IoT) — Home Automation, Industrial Automation, Wi-Fi, Bluetooth, GSM/2G/3G/LTE devices",
      "Test & Measurement Equipment — Instrumentation systems, Data Acquisition Systems, Data Loggers",
      "Human Machine Interface (HMI) — Color LCD & Touchscreen systems for industrial and consumer applications",
      "Telemetry & Remote Monitoring — LTE/3G/GSM/GPRS based solutions, GPS-enabled location tracking",
      "Wireless Systems — wireless control, data acquisition, wireless mouse, wireless water level indicators",
      "Control & Monitoring Systems — Temperature/humidity controllers with PID control, remote alarm monitoring",
      "Power & Energy Solutions — Low power SMPS, battery chargers (NiCd, NiMH, Li-Ion, Li-Polymer), PID process control",
    ],
    timeline: [
      { step: "Phase 1", label: "Schematic Mapping", desc: "Creating hardware logic flow diagrams from existing or new schematics." },
      { step: "Phase 2", label: "Layout Routing", desc: "2-layer to multilayer, high-density, compact PCB layout and routing." },
      { step: "Phase 3", label: "Prototyping & Assembly", desc: "Converting schematics into fully assembled, tested prototypes." },
    ],
    expertise: {
      "Board Types": "2-layer & multilayer, high-density, compact PCBs",
      "Applications": "Medical, IoT, HMI, Telemetry, Wireless, Power Electronics",
      "Services": "Layout design, prototyping, and full assembly integration",
    },
    image: "/images/hero2.png",
  },
  software: {
    name: "Software Development",
    category: "Software Solutions",
    desc: "At SMSM Engineers, we position ourselves as an effective and reliable Software Development Company, delivering professional and contemporary solutions that modernize business operations and help maximize organizational goals.",
    overview: "From startups to corporate enterprises, SMSM Engineers serves as a strategic software partner, committed to providing the best results in software development and turnkey solutions. By leveraging proven methodologies and modern technologies, we create solutions that transform the way businesses operate. We believe in building value-driven business relationships — through sophisticated project management techniques and advanced software engineering practices, we ensure successful outcomes that align with shared business objectives.",
    benefits: [
      "Strategic software partnership for startups and corporate enterprises alike",
      "Turnkey software solutions built on proven methodologies and modern technologies",
      "Sophisticated project management techniques and advanced engineering practices",
      "Value-driven business relationships focused on shared objectives",
    ],
    timeline: [
      { step: "Phase 1", label: "Discovery & Planning", desc: "Understanding business objectives and mapping the software solution scope." },
      { step: "Phase 2", label: "Engineering & Development", desc: "Building the solution using modern technologies and proven engineering practices." },
      { step: "Phase 3", label: "Deployment & Partnership", desc: "Turnkey delivery followed by an ongoing, value-driven business relationship." },
    ],
    expertise: {
      "Engagement Model": "Strategic software partner — startups to enterprises",
      "Delivery Style": "Turnkey solutions with sophisticated project management",
      "Focus": "Business process modernization and organizational goal alignment",
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
      <section className="relative py-16 md:py-24 bg-[#071A35] text-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0A4ABF]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <Link href="/services" className="inline-flex items-center gap-2 text-[#00AEEF] hover:text-white transition-colors text-sm font-semibold">
                <ArrowLeft className="h-4 w-4" /> Back to Services
              </Link>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[#00AEEF] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                  {service.category}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight font-display leading-[1.08]">
                  {service.name}
                </h1>
              </div>
              <p className="text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                {service.desc}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/query-form"
                  className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-white text-[#071A35] font-semibold px-7 py-3.5 rounded-full transition-all text-sm shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Request Service Assessment <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-slate-950">
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
              {/* Floating badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white shadow-2xl rounded-2xl p-5 items-center gap-3 border border-slate-100 max-w-[220px] z-20">
                <div className="h-11 w-11 icon-chip shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#071A35] font-display leading-snug">Engineered Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-slate-800 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">{service.name}</span>
        </div>
      </div>

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-8 space-y-6">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block">Overview</span>
            <h2 className="text-2xl md:text-3xl font-medium text-[#071A35] font-display">Service Overview</h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">{service.overview}</p>

            {/* Benefits */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xl font-medium text-[#071A35] font-display">Key Service Benefits</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((b, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-relaxed bg-slate-50 border border-slate-200 rounded-2xl p-4 hover:border-[#00AEEF]/40 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-[#00AEEF] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 brand-card bg-brand-bg p-6 h-fit space-y-4">
            <div className="h-11 w-11 icon-chip">
              <MessageCircleQuestion className="h-5 w-5" />
            </div>
            <h3 className="font-medium text-[#071A35] font-display text-lg">Inquire About This Service</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Need specific customized pricing or a technician site visit?</p>
            <Link
              href="/query-form"
              className="w-full text-center block bg-[#0A4ABF] hover:bg-[#071A35] text-white font-medium p-3.5 rounded-full text-sm transition-all shadow-lg hover:-translate-y-0.5"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Download Portal for downloads page */}
      {slug === "downloads" && (
        <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg to-white border-b border-slate-100">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-[#0A4ABF] text-xs uppercase tracking-[0.2em] font-semibold block">Verified Documents</span>
              <h2 className="text-2xl md:text-4xl font-medium text-[#071A35] font-display">Corporate Credentials & Technical Catalog</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {/* DIPP */}
              <div className="brand-card bg-white p-6 flex flex-col justify-between">
                <div>
                  <div className="h-11 w-11 icon-chip mb-4">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <span className="text-[#00AEEF] text-xs font-medium uppercase">Government Registry</span>
                  <h3 className="text-lg font-medium text-[#071A35] mt-1 mb-3 font-display">Startup India DPIIT Recognition</h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                    Verify our official certificate of recognition issued by the Department for Promotion of Industry and Internal Trade (DIPP8079).
                  </p>
                </div>
                <a
                  href="/downloads/dipp_recognition.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0A4ABF] hover:bg-[#071A35] text-white font-medium text-sm py-3 rounded-full transition-all w-full shadow-lg hover:-translate-y-0.5"
                >
                  Download Certificate (PDF)
                </a>
              </div>

              {/* Kamdhenu */}
              <div className="brand-card bg-white p-6 flex flex-col justify-between">
                <div>
                  <div className="h-11 w-11 icon-chip mb-4">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <span className="text-[#00AEEF] text-xs font-medium uppercase">Client Verification</span>
                  <h3 className="text-lg font-medium text-[#071A35] mt-1 mb-3 font-display">Kamdhenu Paints Recommendation</h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                    Official evaluation letter detailing engineering service parameters, calibration audits, and operational maintenance SLA compliance.
                  </p>
                </div>
                <a
                  href="/downloads/kamdhenu_recommendation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0A4ABF] hover:bg-[#071A35] text-white font-medium text-sm py-3 rounded-full transition-all w-full shadow-lg hover:-translate-y-0.5"
                >
                  Download Letter (PDF)
                </a>
              </div>

              {/* Popular */}
              <div className="brand-card bg-white p-6 flex flex-col justify-between sm:col-span-2 md:col-span-1">
                <div>
                  <div className="h-11 w-11 icon-chip mb-4">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <span className="text-[#00AEEF] text-xs font-medium uppercase">Client Verification</span>
                  <h3 className="text-lg font-medium text-[#071A35] mt-1 mb-3 font-display">Popular Paints Recommendation</h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                    Corporate quality endorsement certifying SMSM Engineers&apos; equipment maintenance logs and spectrophotometric calibration audits.
                  </p>
                </div>
                <a
                  href="/downloads/popular_recommendation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0A4ABF] hover:bg-[#071A35] text-white font-medium text-sm py-3 rounded-full transition-all w-full shadow-lg hover:-translate-y-0.5"
                >
                  Download Letter (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-semibold block">How It Works</span>
            <h2 className="text-2xl md:text-4xl font-medium font-display">Service Implementation Timeline</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {service.timeline.map((item, idx) => (
              <div key={item.step} className="relative bg-white/[0.04] border border-white/10 p-6 rounded-2xl hover:bg-white/[0.08] hover:border-[#00AEEF]/40 transition-all hover:-translate-y-1 overflow-hidden">
                <span className="absolute right-4 top-2 text-5xl font-medium text-white/[0.05] font-display select-none">0{idx + 1}</span>
                <span className="text-[#00AEEF] text-xs font-medium uppercase tracking-wider relative z-10">{item.step}</span>
                <h3 className="text-lg font-medium text-white font-display mt-1 mb-2 relative z-10">{item.label}</h3>
                <p className="text-white/65 text-sm font-light leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise Parameters */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-[#071A35] font-display mb-6 text-center">Technical Parameters & Standards</h2>
          <div className="border border-slate-200 rounded-2xl overflow-x-auto shadow-sm">
            <table className="w-full text-sm text-left min-w-[420px]">
              <tbody>
                {Object.entries(service.expertise).map(([key, val]) => (
                  <tr key={key} className="border-b border-slate-200 last:border-b-0">
                    <td className="bg-brand-bg px-6 py-4 font-medium text-[#071A35] w-2/5 whitespace-nowrap">{key}</td>
                    <td className="px-6 py-4 text-slate-600">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg to-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block mb-2">Explore More</span>
          <h2 className="text-2xl md:text-3xl font-medium text-[#071A35] font-display mb-10">Related Support Programs</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedServices.map(([key, item]) => (
              <Link key={key} href={`/services/${key}`} className="brand-card bg-white p-6 group">
                <span className="text-xs uppercase text-slate-400 font-medium">{item.category}</span>
                <h3 className="text-lg font-medium text-[#071A35] group-hover:text-[#0A4ABF] mt-1 mb-2 font-display transition-colors">{item.name}</h3>
                <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">{item.desc}</p>
                <div className="text-[#00AEEF] text-xs font-medium mt-4 inline-flex items-center gap-1">
                  Learn Details <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-16 md:py-24 bg-[#071A35] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] to-[#0A4ABF]/50" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium font-display">Need Custom Engineering Solutions?</h2>
          <p className="text-white/70 text-sm md:text-base font-light">Contact our engineering group today to schedule a detailed factory overview or system configuration analysis.</p>
          <div className="pt-2">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-white text-[#071A35] font-semibold px-8 py-3.5 rounded-full transition-all text-sm shadow-lg hover:-translate-y-0.5">
              Contact Systems Engineer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
