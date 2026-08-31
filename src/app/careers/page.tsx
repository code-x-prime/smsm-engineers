"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ChevronDown, Send, CheckCircle2, AlertCircle, ArrowRight,
  Award, Briefcase, GraduationCap, Users, Heart, FileText, Settings, Cpu
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getRecaptchaToken } from "@/lib/recaptcha";

const applySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  position: z.string().min(1, "Please select a position"),
  coverLetter: z.string().optional(),
});

type ApplyFormData = z.infer<typeof applySchema>;

export default function Careers() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
  });

  const positions = [
    {
      id: "se",
      title: "Service Engineer",
      location: "Agra, India",
      type: "Full-Time",
      dept: "Engineering Support",
      desc: "Perform hardware repairs and mechanical calibrations on automatic color dispensers and paint gyroshaker mixers at customer sites.",
      reqs: ["BE/BTech or Diploma in Mechanical/Electrical Engineering", "1-3 years experience in machinery field support", "Knowledge of stepper motors and calibration math"],
    },
    {
      id: "tse",
      title: "Trainee Service Engineer",
      location: "Agra, India",
      type: "Full-Time",
      dept: "Engineering Support",
      desc: "Entry-level training program for field engineering. Learn fluid dynamic calibrations, dispenser nozzle purging, and customer SLA management.",
      reqs: ["Diploma or ITI in Mechanical/Electrical trade", "Freshers welcome to apply", "Strong learning attitude and regional travel readiness"],
    },
    {
      id: "so",
      title: "Sales Officer",
      location: "UP Region",
      type: "Full-Time",
      dept: "Corporate Sales",
      desc: "Manage regional paint dealer accounts and promote SMSM universal stainers and swatches packages.",
      reqs: ["Bachelor's degree in Business, Chemistry, or Marketing", "1-2 years B2B product sales experience", "Excellent communication and negotiation skills"],
    },
    {
      id: "am",
      title: "Area Manager",
      location: "Regional Office",
      type: "Full-Time",
      dept: "Operations",
      desc: "Coordinate service technician teams and oversee regional machinery deployment and parts warehousing.",
      reqs: ["BTech / MBA with operational experience", "4+ years team management track record", "Strong analytical skills and CRM/ERP management familiarity"],
    },
    {
      id: "tse_field",
      title: "Territory Service Engineer",
      location: "Delhi NCR / Noida",
      type: "Full-Time",
      dept: "Engineering Support",
      desc: "Lead customer repair tickets and AMC renewals across the designated Delhi/NCR territory.",
      reqs: ["BE in Electronics/Mechanical", "3+ years specialized field repairs experience", "Deep knowledge of multi-brand tinting hardware configurations"],
    },
    {
      id: "doc",
      title: "Doctor / Medical Officer",
      location: "SMSM Healthcare Facility",
      type: "Part-Time / Full-Time",
      dept: "Healthcare Division",
      desc: "Provide clinical checkups and occupational health guidance for SMSM Group factory employees and nearby communities.",
      reqs: ["MBBS degree from a recognized medical council", "2+ years clinical or industrial doctor experience", "Dedication to rural healthcare campaigns"],
    },
  ];

  const benefits = [
    { icon: Heart, title: "Medical Coverage", desc: "Provident Fund (PF) & comprehensive health insurance coverage." },
    { icon: GraduationCap, title: "Continuous Training", desc: "Hardware skill training certifications and chemical synthesis workshops." },
    { icon: Award, title: "Performance Bonus", desc: "Bi-annual performance-linked bonus matrices and team recognition events." },
    { icon: Settings, title: "Modern Workspaces", desc: "Fully loaded laboratory diagnostic tools and high-performance workstations." },
  ];

  const processSteps = [
    { step: "01", title: "Apply", desc: "Submit your details and cover letter.", icon: FileText },
    { step: "02", title: "Technical Review", desc: "Our engineering leads evaluate your qualifications.", icon: Cpu },
    { step: "03", title: "Interview", desc: "Participate in clinical, sales, or hardware discussions.", icon: Users },
    { step: "04", title: "Joining", desc: "Get onboarded with our technical trainers.", icon: CheckCircle2 },
  ];

  const lifeImages = [
    { src: "/images/office_about.png", alt: "Team Collaborations" },
    { src: "/images/about_laboratory.png", alt: "Laboratory Inspections" },
    { src: "/images/hero2.png", alt: "Firmware Programming" },
    { src: "/images/hero3.png", alt: "Chemical Formulation R&D" },
  ];

  const stats = [
    { value: `${positions.length}`, label: "Open Positions" },
    { value: "6", label: "Departments" },
    { value: "24h", label: "Response Time" },
  ];

  const onSubmit = async (data: ApplyFormData) => {
    setStatus("submitting");
    try {
      const recaptchaToken = await getRecaptchaToken("career_form");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "career", recaptchaToken }),
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

  const toggleJob = (id: string) => {
    setExpandedJob((prev) => (prev === id ? null : id));
  };

  return (
    <main className="bg-brand-bg min-h-screen pt-28">
      {/* SECTION 1: Hero Banner */}
      <section className="relative min-h-[500px] md:min-h-[70vh] flex items-end bg-slate-950 text-white overflow-hidden pb-16 md:pb-0">
        <Image
          src="/images/hero_about.png"
          alt="Careers Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/10 z-10" />

        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20 md:pb-16">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-semibold">
              Careers Desk
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight font-display leading-[1.08]">
              Build Your Career With SMSM Engineers
            </h1>
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
          <span className="text-slate-800 font-medium">Careers</span>
        </div>
      </div>

      {/* SECTION 2: Why Work With Us */}
      <section className="py-16 md:py-24 lg:py-[130px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden group shadow-2xl">
              <Image
                src="/images/about_laboratory.png"
                alt="SMSM Laboratory Team"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 grid-lines opacity-10 z-10" />
            </div>
            <div className="hidden sm:flex absolute -bottom-8 -right-6 lg:-right-10 bg-white shadow-2xl rounded-2xl p-6 items-center gap-4 border border-slate-100 max-w-[260px]">
              <div className="h-12 w-12 icon-chip shrink-0">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl font-medium text-[#071A35] font-display leading-none">{positions.length} Open Roles</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Across India</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <Reveal>
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block">Why Work With Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#071A35] font-display font-medium leading-tight mt-2">
                Grow Your Potential At SMSM Holdings
              </h2>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mt-5">
                Join a highly specialized team of system designers, chemical engineers, and operational coordinators. We foster an environment of continuous hardware skill upgrading and research validation.
              </p>
              <div className="pt-6">
                <a href="#apply" className="inline-flex items-center gap-2 bg-[#071A35] hover:bg-[#0A4ABF] text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl">
                  View Open Roles <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Open Positions Accordion + Application Form */}
      <section id="apply" className="py-16 md:py-24 lg:py-[130px] bg-brand-bg border-t border-b border-slate-200 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-10">
            <Reveal>
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block">Current Vacancies</span>
              <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-medium mt-2">Explore Open Positions</h2>
            </Reveal>

            <div className="space-y-4">
              {positions.map((p, idx) => {
                const isExpanded = expandedJob === p.id;
                return (
                  <Reveal key={p.id} delay={idx * 0.04}>
                    <div className={`border rounded-2xl bg-white overflow-hidden transition-all ${isExpanded ? "border-[#00AEEF] shadow-lg" : "border-slate-200 shadow-sm"}`}>
                      <button
                        onClick={() => toggleJob(p.id)}
                        className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="font-medium text-[#071A35] font-display text-lg">{p.title}</h3>
                            <span className="bg-slate-100 text-[10px] px-2 py-0.5 rounded-full font-medium text-slate-600 uppercase tracking-wide">
                              {p.type}
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                            Dept: {p.dept} | Loc: {p.location}
                          </div>
                        </div>
                        <div className={`h-8 w-8 rounded-full grid place-items-center shrink-0 transition-all ${isExpanded ? "bg-[#00AEEF] text-white rotate-180" : "bg-slate-100 text-slate-500"}`}>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-6 border-t border-slate-200 bg-white space-y-4 text-sm text-slate-600">
                          <p className="font-light">{p.desc}</p>
                          <div className="space-y-2">
                            <h4 className="font-medium text-[#071A35] text-xs uppercase tracking-wider">Requirements</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {p.reqs.map((req, i) => (
                                <li key={i} className="font-light text-xs">{req}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Submit Application Form */}
          <div className="lg:col-span-5 brand-card bg-white p-8 h-fit">
            <Reveal>
              <h3 className="text-xl font-medium font-display text-[#071A35] mb-6">Submit Application</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Full Name *</label>
                  <input
                    type="text"
                    {...register("name")}
                    className={`w-full bg-slate-50 border ${errors.name ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full bg-slate-50 border ${errors.email ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Phone Number *</label>
                  <input
                    type="text"
                    {...register("phone")}
                    className={`w-full bg-slate-50 border ${errors.phone ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Position of Interest *</label>
                  <select
                    {...register("position")}
                    className={`w-full bg-slate-50 border ${errors.position ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  >
                    <option value="">Select a role...</option>
                    {positions.map((pos) => (
                      <option key={pos.id} value={pos.title}>{pos.title}</option>
                    ))}
                  </select>
                  {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Cover Letter / Message (Optional)</label>
                  <textarea
                    rows={3}
                    {...register("coverLetter")}
                    className="w-full bg-slate-50 border border-slate-300 p-3 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]"
                    placeholder="Briefly state your relevant background..."
                  />
                </div>

                {status === "success" && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex gap-3 text-emerald-800 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <h5 className="font-medium">Application Submitted</h5>
                      <p className="text-xs mt-0.5 text-emerald-700">An auto email confirmation has been dispatched. Our team will review your CV.</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex gap-3 text-rose-800 text-sm">
                    <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
                    <div>
                      <h5 className="font-medium">Submission Failed</h5>
                      <p className="text-xs mt-0.5 text-rose-700">Please try again or send your CV directly.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#071A35] hover:bg-[#0A4ABF] text-white font-semibold text-xs uppercase tracking-wider py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5"
                >
                  {status === "submitting" ? "Sending..." : "Submit CV"} <Send className="h-4 w-4" />
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

      {/* SECTION 4: Application Process */}
      <section className="py-16 md:py-24 lg:py-[130px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 space-y-16">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block mb-3">Joining Journey</span>
            <h2 className="text-3xl md:text-5xl text-[#071A35] font-display font-medium">Our Hiring Process</h2>
            <div className="h-1 w-16 bg-[#00AEEF] mx-auto mt-6 rounded-full" />
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, idx) => {
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
      </section>

      {/* SECTION 5: Employee Benefits */}
      <section className="py-16 md:py-24 lg:py-[130px] bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A4ABF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 space-y-16 relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-semibold block mb-3">Corporate Care</span>
            <h2 className="text-3xl md:text-5xl font-display font-medium">Employee Benefits</h2>
            <div className="h-1 w-16 bg-[#00AEEF] mx-auto mt-6 rounded-full" />
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((b, idx) => {
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

      {/* SECTION 6: Life At SMSM Gallery */}
      <section className="py-16 md:py-24 lg:py-[130px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block mb-2">Culture & Events</span>
            <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-medium">Life At SMSM</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {lifeImages.map((img, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="aspect-[4/3] relative rounded-2xl overflow-hidden group shadow-md border border-slate-200">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4" />
                <span className="absolute bottom-4 left-4 z-20 text-white font-display font-medium text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Final CTA */}
      <section className="py-16 md:py-24 lg:py-[130px] bg-[#071A35] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] to-[#0A4ABF]/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight leading-tight font-display">
              Ready To Join The Team?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg mt-4 font-light">
              Explore our open positions and submit your application to start your journey with SMSM Engineers.
            </p>
            <div className="pt-8">
              <a href="#apply" className="inline-flex items-center gap-2 bg-[#00AEEF] text-[#071A35] font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white hover:text-[#071A35] transition-all hover:-translate-y-0.5 shadow-lg">
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
