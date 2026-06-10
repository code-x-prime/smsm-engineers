"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  CheckCircle2, AlertCircle, Send, ShieldAlert, 
  TrendingUp, Settings, Award, Globe, GraduationCap, LifeBuoy, ChevronDown,
  FileText, Cpu, Eye, Network
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const partnerSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  type: z.string().min(1, "Please select partnership type"),
  region: z.string().min(2, "Please specify your target operational territory"),
  message: z.string().optional(),
});

type PartnerFormData = z.infer<typeof partnerSchema>;

export default function BecomePartner() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
  });

  const onSubmit = async (data: PartnerFormData) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "partner" }),
      });
      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const partnerBenefits = [
    { icon: TrendingUp, title: "Business Growth", desc: "Access high-margin B2B contracts, universal colorant distributions, and parts supply networks." },
    { icon: Settings, title: "Technical Support", desc: "Receive direct backing from our hardware calibration engineers and custom PCB reflow experts." },
    { icon: Award, title: "Brand Value", desc: "Align with a trusted decade-old engineering alliance supplying India's top coating majors." },
    { icon: Globe, title: "Market Expansion", desc: "Unlock exclusive rights to operational territories, paint dealer networks, and logistics hubs." },
    { icon: GraduationCap, title: "Dedicated Training", desc: "Complimentary calibration courses, step-motor diagnostics, and chemical safety certifications." },
    { icon: LifeBuoy, title: "Dedicated Assistance", desc: "24-hour hotline access and guaranteed service dispatch dispatches within 24 hours." },
  ];

  const partnerJourney = [
    { step: "Step 01", title: "Apply", desc: "Fill out our strategic partnership registration form.", icon: FileText },
    { step: "Step 02", title: "Review", desc: "Our corporate strategy desk evaluates target market demand.", icon: Eye },
    { step: "Step 03", title: "Approval", desc: "Receive pricing models, catalog margins, and contract terms.", icon: CheckCircle2 },
    { step: "Step 04", title: "Onboarding", desc: "Technical tools setups, staff certifications, and stock delivery.", icon: Network },
  ];

  const faqs = [
    { q: "What qualifications are required to become a dealer?", a: "Dealers must have an active commercial shop or pigment distribution warehouse, a GST registration certificate, and regional transport access." },
    { q: "How are regional territories allocated?", a: "We guarantee territory exclusivity to distributors handling heavy machinery (Dispensers and Shakers) to avoid pricing conflicts." },
    { q: "Is there an upfront capital requirement?", a: "Yes, initial security deposits and minimum stock allocations vary depending on the product margin tier and territory size." },
    { q: "What technical support do partners receive?", a: "Partners receive remote database calibration updates, marketing swatches, fan decks, and on-site support for complex machinery installations." },
  ];

  return (
    <main className="bg-slate-50 min-h-screen pt-28">
      {/* SECTION 1: Hero Banner */}
      <section className="relative h-[50vh] flex items-center bg-slate-950 text-white overflow-hidden">
        <Image
          src="/images/hero_group.png"
          alt="Partnership Hero Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        <div className="absolute inset-0 grid-lines opacity-10 z-10" />
        
        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20">
          <div className="max-w-3xl space-y-6">
            <span className="text-[#00AEEF] text-xs uppercase tracking-[0.3em] font-extrabold block">B2B Alliances</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display" style={{ fontFamily: "Georgia, serif" }}>
              Become a Strategic Partner
            </h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Become Partner</span>
        </div>
      </div>

      {/* SECTION 2: Why Partner With SMSM */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative aspect-[16/11] rounded-sm overflow-hidden group shadow-2xl">
            <Image
              src="/images/office_about.png"
              alt="Partnership Infographic Placeholder"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-w-1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 grid-lines opacity-10 z-10" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block">Why Partner With Us</span>
              <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-bold" style={{ fontFamily: "Georgia, serif" }}>Collaborate with SMSM Engineers</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                SMSM Engineers brings structural reliability and premium chemical color-matching systems under one unified holding group. We back our dealer networks with nationwide campaigns, spare parts pools, and technical support SLAs.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Partner Benefits */}
      <section className="py-[120px] bg-slate-900 text-white relative">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="max-w-[1400px] mx-auto px-6 space-y-16 relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-extrabold block mb-2">Partner Benefits</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold" style={{ fontFamily: "Georgia, serif" }}>Mutual Growth Framework</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerBenefits.map((b) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} className="p-8 border border-white/10 bg-white/5 rounded-sm hover:bg-white/10 transition-colors">
                  <div className="h-10 w-10 bg-[#00AEEF]/10 rounded-sm grid place-items-center text-[#00AEEF] mb-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-white mb-2 font-display">{b.title}</h4>
                  <p className="text-white/60 text-xs font-light leading-relaxed">{b.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 & 6: Partner Journey & Registration Form */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-16">
          {/* Journey timeline */}
          <div className="lg:col-span-7 space-y-12">
            <Reveal className="mb-6">
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block">Onboarding Path</span>
              <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-bold" style={{ fontFamily: "Georgia, serif" }}>Strategic Partner Journey</h2>
            </Reveal>

            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-12 pl-6 md:pl-10 space-y-8">
              {partnerJourney.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.step} delay={idx * 0.05} className="relative">
                    <div className="absolute -left-[35px] md:-left-[51px] top-1.5 h-6 w-6 bg-white border-4 border-[#00AEEF] rounded-full z-10 flex items-center justify-center shadow-md" />
                    <div className="bg-slate-50 p-6 border border-slate-200 rounded-sm flex gap-6 items-start hover:shadow-md transition-shadow">
                      <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-sm grid place-items-center text-[#00AEEF] shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-lg font-extrabold text-[#00AEEF] font-mono block mb-1">{step.step}</span>
                        <h4 className="font-bold text-[#071A35] font-display text-sm mb-2">{step.title}</h4>
                        <p className="text-xs text-slate-500 font-light leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-8 rounded-sm shadow-sm h-fit">
            <Reveal>
              <h3 className="text-xl font-bold font-display text-[#071A35] mb-6">Partnership Registration</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Company Name *</label>
                  <input
                    type="text"
                    {...register("companyName")}
                    className={`w-full bg-white border ${errors.companyName ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Contact Person *</label>
                  <input
                    type="text"
                    {...register("contactPerson")}
                    className={`w-full bg-white border ${errors.contactPerson ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.contactPerson && <p className="text-red-500 text-xs mt-1">{errors.contactPerson.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full bg-white border ${errors.email ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Phone Number *</label>
                  <input
                    type="text"
                    {...register("phone")}
                    className={`w-full bg-white border ${errors.phone ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Partnership Category *</label>
                  <select
                    {...register("type")}
                    className={`w-full bg-white border ${errors.type ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  >
                    <option value="">Select a category...</option>
                    <option value="Dealer">Dealer Partner</option>
                    <option value="Distributor">Regional Distributor</option>
                    <option value="Contractor">Project Contractor</option>
                    <option value="Vendor">Component Vendor</option>
                  </select>
                  {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Target Territory *</label>
                  <input
                    type="text"
                    {...register("region")}
                    className={`w-full bg-white border ${errors.region ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                    placeholder="e.g. Uttar Pradesh, India"
                  />
                  {errors.region && <p className="text-red-500 text-xs mt-1">{errors.region.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Brief Proposal (Optional)</label>
                  <textarea
                    rows={3}
                    {...register("message")}
                    className="w-full bg-white border border-slate-300 p-3 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]"
                    placeholder="Describe your capabilities..."
                  />
                </div>

                {status === "success" && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm flex gap-3 text-emerald-800 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <h5 className="font-bold">Application Sent</h5>
                      <p className="text-xs mt-0.5 text-emerald-700">Thank you. An email confirmation has been dispatched. Our team will contact you shortly.</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-sm flex gap-3 text-rose-800 text-sm">
                    <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
                    <div>
                      <h5 className="font-bold">Submission Failed</h5>
                      <p className="text-xs mt-0.5 text-rose-700">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#071A35] hover:bg-[#00AEEF] text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? "Sending..." : "Submit Proposal"} <Send className="h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-[120px] bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block mb-2">FAQ</span>
            <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-bold" style={{ fontFamily: "Georgia, serif" }}>Frequently Asked Questions</h2>
          </Reveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <Reveal key={idx}>
                  <div className="border border-slate-200 rounded-sm bg-white overflow-hidden shadow-sm">
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                      className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-[#071A35] text-sm md:text-base font-display">{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 text-[#071A35] transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                    {isExpanded && (
                      <div className="p-6 border-t border-slate-200 bg-slate-50 text-xs md:text-sm text-slate-600 font-light leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: Final CTA */}
      <section className="py-[120px] bg-[#071A35] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] to-[#0A4ABF]/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight font-display" style={{ fontFamily: "Georgia, serif" }}>
              Let's Grow Together
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg mt-4 font-light">
              Connect with our alliance management desk today to register your interest in our B2B partner network.
            </p>
            <div className="pt-8">
              <Link href="/contact" className="bg-[#00AEEF] text-[#071A35] font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-white hover:text-[#071A35] transition-colors">
                Contact Strategy Desk
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
