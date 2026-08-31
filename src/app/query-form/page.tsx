"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CheckCircle2, ShieldAlert, Send, FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getRecaptchaToken } from "@/lib/recaptcha";

const querySchema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters"),
  email: zod.string().email("Invalid email address"),
  phone: zod.string().min(10, "Phone number is required"),
  company: zod.string().min(2, "Company name is required"),
  productInterest: zod.string().min(1, "Please select a product"),
  canisterSpec: zod.string().optional(),
  estimatedVolume: zod.string().min(1, "Please select monthly volume"),
  message: zod.string().optional(),
});

type QueryForm = zod.infer<typeof querySchema>;

export default function QueryFormPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QueryForm>({
    resolver: zodResolver(querySchema),
  });

  const onSubmit = async (data: QueryForm) => {
    setStatus("loading");
    try {
      const recaptchaToken = await getRecaptchaToken("query_form");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "query", recaptchaToken }),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-brand-bg min-h-screen pt-28">
      {/* Hero Header */}
      <section className="relative min-h-[420px] md:min-h-[46vh] flex items-end bg-slate-950 text-white overflow-hidden pb-14 md:pb-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071A35] via-slate-950 to-[#0A4ABF]/30" />
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20 md:pb-14">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-semibold">
              Request Proposal
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight font-display leading-[1.08]">
              Equipment Inquiry
            </h1>
            <p className="text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Fill in details below to receive specialized blueprints, price listings, and configuration specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Request Quote</span>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="brand-card bg-brand-bg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 icon-chip shrink-0">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-medium text-[#071A35] font-display">Enterprise Quotation Request</h2>
                  <p className="text-slate-500 text-xs font-light mt-0.5">Our sales team responds within 24 hours</p>
                </div>
              </div>

              {status === "success" && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-2xl mb-6 flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm">Inquiry sent successfully! Our sales team will mail customized layouts.</span>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl mb-6 flex gap-3">
                  <ShieldAlert className="h-5 w-5 shrink-0 text-red-600" />
                  <span className="text-sm">Failed to submit. Please check parameters.</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-medium text-slate-500 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      {...register("name")}
                      className={`w-full bg-white border ${errors.name ? "border-red-400" : "border-slate-200"} p-3 rounded-xl text-sm focus:outline-none focus:border-[#00AEEF] transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium text-slate-500 mb-1.5">Company Name</label>
                    <input
                      type="text"
                      {...register("company")}
                      className={`w-full bg-white border ${errors.company ? "border-red-400" : "border-slate-200"} p-3 rounded-xl text-sm focus:outline-none focus:border-[#00AEEF] transition-colors`}
                      placeholder="e.g. Berger Alliance UP"
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-medium text-slate-500 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`w-full bg-white border ${errors.email ? "border-red-400" : "border-slate-200"} p-3 rounded-xl text-sm focus:outline-none focus:border-[#00AEEF] transition-colors`}
                      placeholder="procurement@berger.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium text-slate-500 mb-1.5">Phone Number</label>
                    <input
                      type="text"
                      {...register("phone")}
                      className={`w-full bg-white border ${errors.phone ? "border-red-400" : "border-slate-200"} p-3 rounded-xl text-sm focus:outline-none focus:border-[#00AEEF] transition-colors`}
                      placeholder="+91 9876543210"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-medium text-slate-500 mb-1.5">Product of Interest</label>
                    <select
                      {...register("productInterest")}
                      className={`w-full bg-white border ${errors.productInterest ? "border-red-400" : "border-slate-200"} p-3 rounded-xl text-sm focus:outline-none focus:border-[#00AEEF] transition-colors`}
                    >
                      <option value="">Select machinery / solution...</option>
                      <option value="Automatic Dispenser">Automatic Color Dispenser</option>
                      <option value="Gyroshaker Mixer">Gyroshaker Mixer</option>
                      <option value="Universal Stainers">Universal Stainers (Base / Pigment)</option>
                      <option value="Colorant Universal System">16-Colorant universal system</option>
                      <option value="PCB Custom Controller Design">PCB Custom design service</option>
                    </select>
                    {errors.productInterest && <p className="text-red-500 text-xs mt-1">{errors.productInterest.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium text-slate-500 mb-1.5">Monthly Production Volume</label>
                    <select
                      {...register("estimatedVolume")}
                      className={`w-full bg-white border ${errors.estimatedVolume ? "border-red-400" : "border-slate-200"} p-3 rounded-xl text-sm focus:outline-none focus:border-[#00AEEF] transition-colors`}
                    >
                      <option value="">Select volume...</option>
                      <option value="Under 5,000 Liters">Under 5,000 Liters</option>
                      <option value="5,000 - 20,000 Liters">5,000 - 20,000 Liters</option>
                      <option value="20,000 - 100,000 Liters">20,000 - 100,000 Liters</option>
                      <option value="Over 100,000 Liters">Over 100,000 Liters</option>
                    </select>
                    {errors.estimatedVolume && <p className="text-red-500 text-xs mt-1">{errors.estimatedVolume.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium text-slate-500 mb-1.5">Additional Requirements (Optional)</label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    className="w-full bg-white border border-slate-200 p-3 rounded-xl text-sm focus:outline-none focus:border-[#00AEEF] transition-colors"
                    placeholder="Specify number of canisters (e.g. 16 vs 24), customized decals, or specialized step-motor configurations..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#071A35] hover:bg-[#0A4ABF] text-white font-medium p-3.5 rounded-full text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === "loading" ? "Submitting..." : "Send Proposal Request"}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
