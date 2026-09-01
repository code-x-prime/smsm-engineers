"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  CheckCircle2, AlertCircle, Send, ArrowRight,
  TrendingUp, Settings, Award, Globe, GraduationCap, LifeBuoy, ChevronDown,
  FileText, Eye, Network, Handshake
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getRecaptchaToken } from "@/lib/recaptcha";

const partnerSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  partnershipType: z.string().min(1, "Please select partnership type"),
  region: z.string().min(2, "Please specify your target operational territory"),
  message: z.string().optional(),
});

type PartnerFormData = z.infer<typeof partnerSchema>;

export default function BecomePartner() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
  });

  const onSubmit = async (data: PartnerFormData) => {
    setStatus("submitting");
    try {
      const recaptchaToken = await getRecaptchaToken("partner_form");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "partner", recaptchaToken }),
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
    { icon: LifeBuoy, title: "Dedicated Assistance", desc: "24-hour hotline access and guaranteed service dispatch within 24 hours." },
  ];

  const partnerJourney = [
    { step: "01", title: "Apply", desc: "Fill out our strategic partnership registration form.", icon: FileText },
    { step: "02", title: "Review", desc: "Our corporate strategy desk evaluates target market demand.", icon: Eye },
    { step: "03", title: "Approval", desc: "Receive pricing models, catalog margins, and contract terms.", icon: CheckCircle2 },
    { step: "04", title: "Onboarding", desc: "Technical tools setup, staff certifications, and stock delivery.", icon: Network },
  ];

  const faqs = [
    { q: "What qualifications are required to become a dealer?", a: "Dealers must have an active commercial shop or pigment distribution warehouse, a GST registration certificate, and regional transport access." },
    { q: "How are regional territories allocated?", a: "We guarantee territory exclusivity to distributors handling heavy machinery (Dispensers and Shakers) to avoid pricing conflicts." },
    { q: "Is there an upfront capital requirement?", a: "Yes, initial security deposits and minimum stock allocations vary depending on the product margin tier and territory size." },
    { q: "What technical support do partners receive?", a: "Partners receive remote database calibration updates, marketing swatches, fan decks, and on-site support for complex machinery installations." },
  ];

  const stats = [
    { value: "40+", label: "Active Partners" },
    { value: "22", label: "States Covered" },
    { value: "24h", label: "Dispatch SLA" },
  ];

  return (
    <main className="bg-slate-50 min-h-screen pt-28">
      {/* SECTION 1: Hero Banner */}
      <section className="relative min-h-[500px] md:min-h-[70vh] flex items-end bg-slate-950 text-white overflow-hidden pb-16 md:pb-0">
        <Image
          src="/images/partner_hero.jpg"
          alt="Partnership Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/10 z-10" />

        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20 md:pb-16">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-semibold">
              B2B Alliances
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight font-display leading-[1.08]">
              Become a Strategic Partner
            </h1>
            <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              Join SMSM Engineers&apos; nationwide alliance network of dealers, distributors, and technical partners.
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
          <span className="text-slate-800 font-medium">Become Partner</span>
        </div>
      </div>

      {/* SECTION 2: Why Partner With SMSM */}
      <section className="py-16 md:py-24 lg:py-[130px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden group shadow-2xl">
              <Image
                src="/images/product_automatic_dispenser.png"
                alt="SMSM Engineers Partnership"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 grid-lines opacity-10 z-10" />
            </div>
            <div className="hidden sm:flex absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 lg:-right-8 bg-[#071A35] text-white shadow-[0_20px_50px_rgba(7,26,53,0.45)] rounded-2xl p-5 sm:p-6 items-center gap-4 border border-white/15 max-w-[270px] z-20">
              <div className="h-12 w-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] grid place-items-center shrink-0 border border-[#00AEEF]/30 shadow-inner">
                <Handshake className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl font-semibold text-white font-display leading-none">40+ Partners</div>
                <div className="text-xs text-[#00AEEF] font-medium mt-1.5 tracking-wide">Nationwide Alliance</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <Reveal>
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block">Why Partner With Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#071A35] font-display font-medium leading-tight mt-2">
                Collaborate with SMSM Engineers
              </h2>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mt-5">
                SMSM Engineers brings structural reliability and premium chemical color-matching systems under one unified holding group. We back our dealer networks with nationwide campaigns, spare parts pools, and technical support SLAs.
              </p>
              <div className="pt-6">
                <a href="#apply" className="inline-flex items-center gap-2 bg-[#071A35] hover:bg-[#0A4ABF] text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Partner Benefits */}
      <section className="py-16 md:py-24 lg:py-[130px] bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A4ABF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 space-y-16 relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-semibold block mb-3">Partner Benefits</span>
            <h2 className="text-3xl md:text-5xl font-display font-medium">Mutual Growth Framework</h2>
            <div className="h-1 w-16 bg-[#00AEEF] mx-auto mt-6 rounded-full" />
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={idx * 0.05}>
                  <div className="p-8 border border-white/10 bg-white/[0.04] rounded-2xl hover:bg-white/[0.08] hover:border-[#00AEEF]/40 transition-all hover:-translate-y-1.5 h-full">
                    <div className="h-12 w-12 bg-[#00AEEF]/10 rounded-xl grid place-items-center text-[#00AEEF] mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-medium text-white mb-3 font-display">{b.title}</h4>
                    <p className="text-white/65 text-sm font-light leading-relaxed">{b.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Partner Journey & Registration Form */}
      <section id="apply" className="py-16 md:py-24 lg:py-[130px] bg-white scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Journey timeline */}
          <div className="lg:col-span-7 space-y-10">
            <Reveal>
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block">Onboarding Path</span>
              <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-medium mt-2">Strategic Partner Journey</h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {partnerJourney.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.step} delay={idx * 0.06}>
                    <div className="relative bg-slate-50 p-6 lg:p-7 border border-slate-200 rounded-2xl hover:border-[#00AEEF] transition-all hover:shadow-xl hover:-translate-y-0.5 h-full overflow-hidden">
                      <span className="absolute right-4 top-2 text-6xl font-medium text-slate-100 font-display select-none">{step.step}</span>
                      <div className="h-12 w-12 icon-chip mb-5 relative z-10">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium text-[#071A35] font-display text-base mb-2 relative z-10">{step.title}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed relative z-10">{step.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-5 brand-card bg-slate-50 p-8 h-fit">
            <Reveal>
              <h3 className="text-xl font-medium font-display text-[#071A35] mb-6">Partnership Registration</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Company Name *</label>
                  <input
                    type="text"
                    {...register("companyName")}
                    className={`w-full bg-white border ${errors.companyName ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Contact Person *</label>
                  <input
                    type="text"
                    {...register("contactPerson")}
                    className={`w-full bg-white border ${errors.contactPerson ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.contactPerson && <p className="text-red-500 text-xs mt-1">{errors.contactPerson.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full bg-white border ${errors.email ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Phone Number *</label>
                  <input
                    type="text"
                    {...register("phone")}
                    className={`w-full bg-white border ${errors.phone ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Partnership Category *</label>
                  <select
                    {...register("partnershipType")}
                    className={`w-full bg-white border ${errors.partnershipType ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  >
                    <option value="">Select a category...</option>
                    <option value="Dealer">Dealer Partner</option>
                    <option value="Distributor">Regional Distributor</option>
                    <option value="Contractor">Project Contractor</option>
                    <option value="Vendor">Component Vendor</option>
                  </select>
                  {errors.partnershipType && <p className="text-red-500 text-xs mt-1">{errors.partnershipType.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Target Territory *</label>
                  <input
                    type="text"
                    {...register("region")}
                    className={`w-full bg-white border ${errors.region ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                    placeholder="e.g. Uttar Pradesh, India"
                  />
                  {errors.region && <p className="text-red-500 text-xs mt-1">{errors.region.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Brief Proposal (Optional)</label>
                  <textarea
                    rows={3}
                    {...register("message")}
                    className="w-full bg-white border border-slate-300 p-3 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]"
                    placeholder="Describe your capabilities..."
                  />
                </div>

                {status === "success" && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex gap-3 text-emerald-800 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <h5 className="font-medium">Application Sent</h5>
                      <p className="text-xs mt-0.5 text-emerald-700">Thank you. An email confirmation has been dispatched. Our team will contact you shortly.</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex gap-3 text-rose-800 text-sm">
                    <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
                    <div>
                      <h5 className="font-medium">Submission Failed</h5>
                      <p className="text-xs mt-0.5 text-rose-700">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#071A35] hover:bg-[#0A4ABF] text-white font-semibold text-xs uppercase tracking-wider py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5"
                >
                  {status === "submitting" ? "Sending..." : "Submit Proposal"} <Send className="h-4 w-4" />
                </button>
                <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0A4ABF]">Privacy Policy</a> and{" "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0A4ABF]">Terms of Service</a> apply.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="py-16 md:py-24 lg:py-[130px] bg-gradient-to-b from-brand-bg to-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block mb-2">FAQ</span>
            <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-medium">Frequently Asked Questions</h2>
          </Reveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <Reveal key={idx}>
                  <div className={`border rounded-2xl bg-white overflow-hidden transition-all ${isExpanded ? "border-[#00AEEF] shadow-lg" : "border-slate-200 shadow-sm"}`}>
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                      className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-medium text-[#071A35] text-sm md:text-base font-display">{faq.q}</span>
                      <div className={`h-8 w-8 rounded-full grid place-items-center shrink-0 transition-all ${isExpanded ? "bg-[#00AEEF] text-white rotate-180" : "bg-slate-100 text-slate-500"}`}>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>
                    {isExpanded && (
                      <div className="px-6 pb-6 text-xs md:text-sm text-slate-600 font-light leading-relaxed">
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

      {/* SECTION 6: Final CTA */}
      <section className="py-16 md:py-24 lg:py-[130px] bg-[#071A35] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] to-[#0A4ABF]/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight leading-tight font-display">
              Let&apos;s Grow Together
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg mt-4 font-light">
              Connect with our alliance management desk today to register your interest in our B2B partner network.
            </p>
            <div className="pt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00AEEF] text-[#071A35] font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white hover:text-[#071A35] transition-all hover:-translate-y-0.5 shadow-lg">
                Contact Strategy Desk
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
