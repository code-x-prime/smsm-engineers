"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CheckCircle2, ShieldAlert, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "query" }),
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
    <main className="bg-brand-bg pt-28">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#071A35] text-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <span className="text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-extrabold block mb-4">Request Proposal</span>
          <h1 className="hero-heading text-4xl md:text-6xl tracking-tight max-w-4xl">
            Equipment Inquiry
          </h1>
          <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Fill in details below to receive specialized blueprints, price listings, and configuration specifications.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
        <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Request Quote</span>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="bg-brand-bg border border-slate-200 p-8 md:p-12 rounded-sm shadow-sm">
              <h2 className="text-2xl font-bold text-[#071A35] mb-6 font-display">Enterprise Quotation Request</h2>

              {status === "success" && (
                <div className="bg-[#16A34A]/10 border border-[#16A34A] text-[#16A34A] p-4 rounded-sm mb-6 flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span className="text-sm">Inquiry sent successfully! Our sales team will mail customized layouts.</span>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-550/10 border border-red-500 text-red-600 p-4 rounded-sm mb-6 flex gap-3">
                  <ShieldAlert className="h-5 w-5 shrink-0" />
                  <span className="text-sm">Failed to submit. Please check parameters.</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Your Name</label>
                    <input
                      type="text"
                      {...register("name")}
                      className="w-full bg-white border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#00AEEF]"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Company Name</label>
                    <input
                      type="text"
                      {...register("company")}
                      className="w-full bg-white border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#00AEEF]"
                      placeholder="e.g. Berger Alliance UP"
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Email Address</label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full bg-white border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#00AEEF]"
                      placeholder="procurement@berger.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Phone Number</label>
                    <input
                      type="text"
                      {...register("phone")}
                      className="w-full bg-white border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#00AEEF]"
                      placeholder="+91 9876543210"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Product of Interest</label>
                    <select
                      {...register("productInterest")}
                      className="w-full bg-white border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#00AEEF]"
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
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Monthly Production Volume</label>
                    <select
                      {...register("estimatedVolume")}
                      className="w-full bg-white border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#00AEEF]"
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
                  <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Additional Requirements (Optional)</label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    className="w-full bg-white border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#00AEEF]"
                    placeholder="Specify number of canisters (e.g. 16 vs 24), customized decals, or specialized step-motor configurations..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#071A35] hover:bg-[#0A4ABF] text-white font-bold p-3 rounded-sm text-sm transition-colors flex items-center justify-center gap-2"
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
