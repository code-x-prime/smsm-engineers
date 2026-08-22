"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CheckCircle2, ShieldAlert, Send, MessageSquareHeart } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const feedbackSchema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters"),
  email: zod.string().email("Invalid email address"),
  rating: zod.string().min(1, "Please rate your experience"),
  serviceType: zod.string().min(1, "Please select the service used"),
  comments: zod.string().min(10, "Comments must be at least 10 characters"),
});

type FeedbackForm = zod.infer<typeof feedbackSchema>;

export default function FeedbackFormPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FeedbackForm>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = async (data: FeedbackForm) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "feedback" }),
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
              Quality Desk
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight font-display leading-[1.08]">
              Customer Feedback
            </h1>
            <p className="text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Your evaluation helps us keep our field AMC response rates and mechanical tolerances at peak levels.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Feedback</span>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="brand-card bg-brand-bg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 icon-chip shrink-0">
                  <MessageSquareHeart className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-medium text-[#071A35] font-display">Quality Assessment Form</h2>
                  <p className="text-slate-500 text-xs font-light mt-0.5">Takes less than 2 minutes to complete</p>
                </div>
              </div>

              {status === "success" && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-2xl mb-6 flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm">Feedback submitted successfully! Thank you for helping us maintain peak standards.</span>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl mb-6 flex gap-3">
                  <ShieldAlert className="h-5 w-5 shrink-0 text-red-600" />
                  <span className="text-sm">Submission failed. Please check input parameters.</span>
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
                    <label className="block text-xs uppercase font-medium text-slate-500 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`w-full bg-white border ${errors.email ? "border-red-400" : "border-slate-200"} p-3 rounded-xl text-sm focus:outline-none focus:border-[#00AEEF] transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-medium text-slate-500 mb-1.5">Performance Rating</label>
                    <select
                      {...register("rating")}
                      className={`w-full bg-white border ${errors.rating ? "border-red-400" : "border-slate-200"} p-3 rounded-xl text-sm focus:outline-none focus:border-[#00AEEF] transition-colors`}
                    >
                      <option value="">Choose rating...</option>
                      <option value="5 - Exceptional">5 — Exceptional Service</option>
                      <option value="4 - Excellent">4 — Highly Satisfied</option>
                      <option value="3 - Satisfied">3 — Met Expectations</option>
                      <option value="2 - Needs Improvement">2 — Needs Adjustments</option>
                      <option value="1 - Unsatisfied">1 — Unsatisfactory</option>
                    </select>
                    {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium text-slate-500 mb-1.5">Service or Machine Evaluated</label>
                    <select
                      {...register("serviceType")}
                      className={`w-full bg-white border ${errors.serviceType ? "border-red-400" : "border-slate-200"} p-3 rounded-xl text-sm focus:outline-none focus:border-[#00AEEF] transition-colors`}
                    >
                      <option value="">Select category...</option>
                      <option value="AMC Support Service">AMC Field Troubleshooting</option>
                      <option value="Automatic Color Dispenser">Automatic Dispenser Accuracy</option>
                      <option value="Gyroshaker Performance">Gyroshaker Bidirectional Mixing</option>
                      <option value="Software/Database Dosing App">Color Formulation Software</option>
                      <option value="PCB Controller Unit">PCB Electronic Controller Unit</option>
                    </select>
                    {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium text-slate-500 mb-1.5">Details & Comments</label>
                  <textarea
                    rows={5}
                    {...register("comments")}
                    className={`w-full bg-white border ${errors.comments ? "border-red-400" : "border-slate-200"} p-3 rounded-xl text-sm focus:outline-none focus:border-[#00AEEF] transition-colors`}
                    placeholder="Tell us about the speed of dispenser nozzle cleaning, quality of universal stainers, or responsiveness of local service crew..."
                  />
                  {errors.comments && <p className="text-red-500 text-xs mt-1">{errors.comments.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#071A35] hover:bg-[#0A4ABF] text-white font-medium p-3.5 rounded-full text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === "loading" ? "Submitting..." : "Send Feedback"}
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
