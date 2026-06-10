"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ChevronDown, Send, CheckCircle2, AlertCircle, 
  Award, Briefcase, GraduationCap, Users, Heart, ShieldAlert, FileText, Check, Settings, Cpu
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

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

  const onSubmit = async (data: ApplyFormData) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "career" }),
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
    <main className="bg-slate-50 min-h-screen pt-28">
      {/* SECTION 1: Hero Banner */}
      <section className="relative h-[50vh] flex items-center bg-slate-950 text-white overflow-hidden">
        <Image
          src="/images/hero_about.png"
          alt="Careers Hero Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        <div className="absolute inset-0 grid-lines opacity-10 z-10" />
        
        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20">
          <div className="max-w-3xl space-y-6">
            <span className="text-[#00AEEF] text-xs uppercase tracking-[0.3em] font-extrabold block">Careers Desk</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display" style={{ fontFamily: "Georgia, serif" }}>
              Build Your Career With SMSM Engineers
            </h1>
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
      <section className="py-[120px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative aspect-[16/11] rounded-sm overflow-hidden group shadow-2xl">
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

          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block">Why Work With Us</span>
              <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-bold" style={{ fontFamily: "Georgia, serif" }}>Grow Your Potential At SMSM Holdings</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                Join a highly specialized team of system designers, chemical engineers, and operational coordinators. We foster an environment of continuous hardware skill upgrading and research validation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Open Positions Accordion */}
      <section className="py-[120px] bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-6">
            <Reveal className="mb-6">
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block">Current Vacancies</span>
              <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-bold" style={{ fontFamily: "Georgia, serif" }}>Explore Open Positions</h2>
            </Reveal>

            <div className="space-y-4">
              {positions.map((p) => {
                const isExpanded = expandedJob === p.id;
                return (
                  <Reveal key={p.id}>
                    <div className="border border-slate-200 rounded-sm bg-white overflow-hidden transition-all shadow-sm">
                      <button
                        onClick={() => toggleJob(p.id)}
                        className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="font-bold text-[#071A35] font-display text-lg">{p.title}</h3>
                            <span className="bg-slate-100 text-[10px] px-2 py-0.5 rounded-full font-bold text-slate-600 uppercase tracking-wide">
                              {p.type}
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                            Dept: {p.dept} | Loc: {p.location}
                          </div>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-[#071A35] transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                      </button>

                      {isExpanded && (
                        <div className="p-6 border-t border-slate-200 bg-white space-y-4 text-sm text-slate-600">
                          <p className="font-light">{p.desc}</p>
                          <div className="space-y-2">
                            <h4 className="font-bold text-[#071A35] text-xs uppercase tracking-wider">Requirements</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {p.reqs.map((req, idx) => (
                                <li key={idx} className="font-light text-xs">{req}</li>
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

          {/* SECTION 7: Submit Application Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-8 rounded-sm shadow-md h-fit">
            <Reveal>
              <h3 className="text-xl font-bold font-display text-[#071A35] mb-6">Submit Application</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Full Name *</label>
                  <input
                    type="text"
                    {...register("name")}
                    className={`w-full bg-slate-50 border ${errors.name ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full bg-slate-50 border ${errors.email ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Phone Number *</label>
                  <input
                    type="text"
                    {...register("phone")}
                    className={`w-full bg-slate-50 border ${errors.phone ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Position of Interest *</label>
                  <select
                    {...register("position")}
                    className={`w-full bg-slate-50 border ${errors.position ? "border-red-500" : "border-slate-300"} p-3 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  >
                    <option value="">Select a role...</option>
                    {positions.map((pos) => (
                      <option key={pos.id} value={pos.title}>{pos.title}</option>
                    ))}
                  </select>
                  {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Cover Letter / Message (Optional)</label>
                  <textarea
                    rows={3}
                    {...register("coverLetter")}
                    className="w-full bg-slate-50 border border-slate-300 p-3 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]"
                    placeholder="Briefly state your relevant background..."
                  />
                </div>

                {status === "success" && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm flex gap-3 text-emerald-800 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <h5 className="font-bold">Application Submitted</h5>
                      <p className="text-xs mt-0.5 text-emerald-700">An auto email confirmation has been dispatched. Our team will review your CV.</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-sm flex gap-3 text-rose-800 text-sm">
                    <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
                    <div>
                      <h5 className="font-bold">Submission Failed</h5>
                      <p className="text-xs mt-0.5 text-rose-700">Please try again or send your CV directly.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#071A35] hover:bg-[#00AEEF] text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? "Sending..." : "Submit CV"} <Send className="h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: Application Process Timeline */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 space-y-16">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block mb-2">Joining Journey</span>
            <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-bold" style={{ fontFamily: "Georgia, serif" }}>Our Hiring Process</h2>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.step} className="p-6 bg-slate-50 border border-slate-200 rounded-sm relative flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-3xl font-extrabold text-[#00AEEF]/30 font-mono">{step.step}</div>
                      <div className="h-10 w-10 bg-[#00AEEF]/10 rounded-sm grid place-items-center text-[#00AEEF]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h4 className="font-bold text-[#071A35] font-display text-sm mb-2">{step.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: Employee Benefits */}
      <section className="py-[120px] bg-slate-900 text-white relative">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="max-w-[1400px] mx-auto px-6 space-y-16 relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-extrabold block mb-2">Corporate Care</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold" style={{ fontFamily: "Georgia, serif" }}>Employee Benefits</h2>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((b) => {
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

      {/* SECTION 6: Life At SMSM Gallery */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block mb-2">Culture & Events</span>
            <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-bold" style={{ fontFamily: "Georgia, serif" }}>Life At SMSM</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {lifeImages.map((img, idx) => (
              <Reveal key={idx} className="aspect-[4/3] relative rounded-sm overflow-hidden group shadow-md border border-slate-200">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4" />
                <span className="absolute bottom-4 left-4 z-20 text-white font-display font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
