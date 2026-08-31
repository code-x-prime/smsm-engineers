"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Phone, Mail, MapPin, Clock, MessageSquare,
  Send, Users, HelpCircle, Briefcase, FileText, CheckCircle2, AlertCircle
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getRecaptchaToken } from "@/lib/recaptcha";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      const recaptchaToken = await getRecaptchaToken("contact_form");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "contact", recaptchaToken }),
      });
      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const departments = [
    { title: "Sales & Proposals", desc: "For machinery procurement and quotations.", email: "sales@smsmengineers.in", icon: FileText },
    { title: "Technical Support", desc: "For AMC SLAs and diagnostic dispatches.", email: "support@smsmengineers.in", icon: HelpCircle },
    { title: "Partnership Desk", desc: "For distributor rights and holding alliances.", email: "partners@smsmengineers.in", icon: Users },
    { title: "Careers", desc: "Connect with our human resources team.", email: "careers@smsmengineers.in", icon: Briefcase },
  ];

  const galleryImages = [
    { src: "/images/office_about.png", alt: "Corporate Office Desk" },
    { src: "/images/about_laboratory.png", alt: "R&D Laboratory Bay" },
    { src: "/images/hero2.png", alt: "Electronics Calibration" },
    { src: "/images/hero3.png", alt: "Chemistry Synthesis Plant" },
  ];

  const infoBlocks = [
    { icon: Phone, label: "Phone", value: "+91 813-0720-777", mono: true, bold: true },
    { icon: Mail, label: "Email", value: "support@smsmengineers.in", mono: true, bold: false },
    { icon: MapPin, label: "Corporate Office", value: "89 A, Jawahar Puram, Alwatia Road, Agra — 282010, U.P., India", mono: false, bold: false },
    { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM", mono: false, bold: false },
  ];

  return (
    <main className="bg-slate-50 min-h-screen pt-28">
      {/* SECTION 1: Hero Banner */}
      <section className="relative min-h-[440px] md:min-h-[54vh] flex items-end bg-slate-950 text-white overflow-hidden pb-14 md:pb-0">
        <Image
          src="/images/office_about.png"
          alt="Contact Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/10 z-10" />
        <div className="absolute inset-0 grid-lines opacity-10 z-10" />

        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20 md:pb-16">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-semibold">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight font-display leading-[1.08]">
              Get In Touch With SMSM Engineers
            </h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Contact</span>
        </div>
      </div>

      {/* SECTION 2 & 5: Contact Info & Form */}
      <section className="py-14 md:py-20 lg:py-[120px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block">Contact Channels</span>
              <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-medium mb-4 mt-2">Our Office Address</h2>
              <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                Connect with our systems architects today for a personalized quotation, hardware demo, or to request custom AMC support.
              </p>

              <div className="space-y-5">
                {infoBlocks.map((block) => {
                  const Icon = block.icon;
                  return (
                    <div key={block.label} className="brand-card flex gap-4 p-5">
                      <div className="h-11 w-11 icon-chip shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#071A35] text-xs uppercase tracking-wider">{block.label}</h4>
                        <p className={`text-sm text-slate-600 mt-1 ${block.mono ? "font-mono" : ""} ${block.bold ? "font-medium" : ""} leading-relaxed`}>
                          {block.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Follow Us / Social Channels Card */}
              <div className="brand-card p-6 mt-6 border border-slate-200/90 bg-gradient-to-br from-white to-slate-50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#0A4ABF] font-semibold block">Social Presence</span>
                    <h3 className="text-lg font-semibold text-[#071A35] font-display">Follow Us</h3>
                  </div>
                  <span className="text-xs text-slate-400 font-light">Official Handles</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="https://www.facebook.com/share/1JDuTRUisj/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all group text-center shadow-sm hover:shadow"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] grid place-items-center group-hover:scale-110 transition-transform mb-2">
                      <IconBrandFacebook className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#071A35] group-hover:text-[#1877F2] transition-colors">Facebook</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">@smsm</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/smsm-engineers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all group text-center shadow-sm hover:shadow"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] grid place-items-center group-hover:scale-110 transition-transform mb-2">
                      <IconBrandLinkedin className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#071A35] group-hover:text-[#0A66C2] transition-colors">LinkedIn</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">@smsm-engineers</span>
                  </a>

                  <a
                    href="https://wa.me/918130720777"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group text-center shadow-sm hover:shadow"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#25D366]/10 text-[#25D366] grid place-items-center group-hover:scale-110 transition-transform mb-2">
                      <IconBrandWhatsapp className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#071A35] group-hover:text-[#25D366] transition-colors">WhatsApp</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">Direct Chat</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 brand-card bg-slate-50 p-8 md:p-12">
            <Reveal>
              <h3 className="text-2xl font-medium font-display text-[#071A35] mb-6">Send A Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Full Name *</label>
                    <input
                      type="text"
                      {...register("name")}
                      className={`w-full bg-white border ${errors.name ? "border-red-500" : "border-slate-300"} p-3.5 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`w-full bg-white border ${errors.email ? "border-red-500" : "border-slate-300"} p-3.5 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Phone Number *</label>
                    <input
                      type="text"
                      {...register("phone")}
                      className={`w-full bg-white border ${errors.phone ? "border-red-500" : "border-slate-300"} p-3.5 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Company Name</label>
                    <input
                      type="text"
                      {...register("company")}
                      className="w-full bg-white border border-slate-300 p-3.5 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Subject *</label>
                  <input
                    type="text"
                    {...register("subject")}
                    className={`w-full bg-white border ${errors.subject ? "border-red-500" : "border-slate-300"} p-3.5 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#071A35] tracking-wider mb-2">Message *</label>
                  <textarea
                    rows={5}
                    {...register("message")}
                    className={`w-full bg-white border ${errors.message ? "border-red-500" : "border-slate-300"} p-3.5 text-sm rounded-xl focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {status === "success" && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex gap-3 text-emerald-800 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <h5 className="font-medium">Inquiry Sent Successfully!</h5>
                      <p className="text-xs mt-0.5 text-emerald-700">Thank you. An email confirmation has been dispatched. Our team will contact you shortly.</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex gap-3 text-rose-800 text-sm">
                    <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
                    <div>
                      <h5 className="font-medium">Submission Failed</h5>
                      <p className="text-xs mt-0.5 text-rose-700">Please try again later or contact us directly.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#071A35] hover:bg-[#0A4ABF] text-white font-semibold text-xs uppercase tracking-wider py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
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

      {/* SECTION 3: Interactive Contact Cards */}
      <section className="py-14 md:py-20 lg:py-[120px] bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A4ABF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 space-y-12 relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#00AEEF] text-xs uppercase tracking-widest font-semibold block mb-2">Direct Directory</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Connect With Specific Departments</h2>
            <div className="h-1 w-16 bg-[#00AEEF] mx-auto mt-6 rounded-full" />
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {departments.map((dept, idx) => {
              const Icon = dept.icon;
              return (
                <Reveal key={dept.title} delay={idx * 0.05}>
                  <div className="p-6 border border-white/10 bg-white/[0.04] rounded-2xl space-y-4 hover:bg-white/[0.08] hover:border-[#00AEEF]/40 transition-all hover:-translate-y-1.5 h-full">
                    <div className="h-11 w-11 bg-[#00AEEF]/10 rounded-xl grid place-items-center text-[#00AEEF]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-medium text-white font-display text-sm">{dept.title}</h4>
                    <p className="text-xs text-white/60 font-light leading-relaxed">{dept.desc}</p>
                    <a href={`mailto:${dept.email}`} className="text-xs font-mono text-[#00AEEF] font-medium block hover:underline">
                      {dept.email}
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Google Maps Placeholder */}
      <section className="py-14 md:py-20 lg:py-[100px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative h-[280px] sm:h-[350px] md:h-[420px] bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
            <div className="absolute inset-0 bg-[#071A35]/10 flex flex-col items-center justify-center p-8 z-10 text-center">
              <div className="max-w-md brand-card p-8 space-y-4">
                <div className="h-14 w-14 icon-chip mx-auto">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium font-display text-[#071A35]">Our Agra Facility</h3>
                <p className="text-xs text-slate-500 font-light">89 A, Jawahar Puram, Alwatia Road, Agra — 282010, Uttar Pradesh, India.</p>
                <a
                  href="https://maps.google.com/?q=89+A+Jawahar+Puram+Alwatia+Road+Agra+282010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#071A35] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#0A4ABF] transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Office Gallery */}
      <section className="py-14 md:py-20 lg:py-[120px] bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block mb-2">Our Campus</span>
            <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-medium">Office Gallery</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="aspect-[4/3] relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200">
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

      {/* SECTION 7: CTA Banner */}
      <section className="py-14 md:py-20 lg:py-[120px] bg-[#071A35] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] to-[#0A4ABF]/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight leading-tight font-display">
              Let&apos;s Discuss Your Next Project
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg mt-4 font-light">
              Connect with our corporate strategy desk to explore business integrations, system upgrades, or technical SLAs.
            </p>
            <div className="pt-8">
              <a href="https://wa.me/918130720777" className="bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-emerald-600 transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2">
                Chat On WhatsApp <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
