"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CheckCircle2, ShieldAlert, Send } from "lucide-react";
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
    <main className="bg-brand-bg pt-28">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#071A35] text-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <span className="text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-extrabold block mb-4">Quality Desk</span>
          <h1 className="hero-heading text-4xl md:text-6xl tracking-tight max-w-4xl">
            Customer Feedback
          </h1>
          <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Your evaluation helps us keep our field AMC response rates and mechanical tolerances at peak levels.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
        <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Feedback</span>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="bg-brand-bg border border-slate-200 p-8 md:p-12 rounded-sm shadow-sm">
              <h2 className="text-2xl font-bold text-[#071A35] mb-6 font-display">Quality Assessment Form</h2>

              {status === "success" && (
                <div className="bg-[#16A34A]/10 border border-[#16A34A] text-[#16A34A] p-4 rounded-sm mb-6 flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span className="text-sm">Feedback submitted successfully! Thank you for helping us maintain peak standards.</span>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-550/10 border border-red-500 text-red-600 p-4 rounded-sm mb-6 flex gap-3">
                  <ShieldAlert className="h-5 w-5 shrink-0" />
                  <span className="text-sm">Submission failed. Please check input parameters.</span>
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
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Email Address</label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full bg-white border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#00AEEF]"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Performance Rating</label>
                    <select
                      {...register("rating")}
                      className="w-full bg-white border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#00AEEF]"
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
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Service or Machine Evaluated</label>
                    <select
                      {...register("serviceType")}
                      className="w-full bg-white border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#00AEEF]"
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
                  <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Details & Comments</label>
                  <textarea
                    rows={5}
                    {...register("comments")}
                    className="w-full bg-white border border-slate-200 p-3 rounded-sm text-sm focus:outline-none focus:border-[#00AEEF]"
                    placeholder="Tell us about the speed of dispenser nozzle cleaning, quality of universal stainers, or responsiveness of local service crew..."
                  />
                  {errors.comments && <p className="text-red-500 text-xs mt-1">{errors.comments.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#071A35] hover:bg-[#0A4ABF] text-white font-bold p-3 rounded-sm text-sm transition-colors flex items-center justify-center gap-2"
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
