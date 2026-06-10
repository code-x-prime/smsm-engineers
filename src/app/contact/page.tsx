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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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

  return (
    <main className="bg-slate-50 min-h-screen pt-28">
      {/* SECTION 1: Hero Banner */}
      <section className="relative h-[50vh] flex items-center bg-slate-950 text-white overflow-hidden">
        <Image
          src="/images/hero_group.png"
          alt="Contact Hero Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        <div className="absolute inset-0 grid-lines opacity-10 z-10" />
        
        <div className="relative max-w-[1400px] w-full mx-auto px-6 z-20">
          <div className="max-w-3xl space-y-6">
            <span className="text-[#00AEEF] text-xs uppercase tracking-[0.3em] font-extrabold block">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display" style={{ fontFamily: "Georgia, serif" }}>
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
      <section className="py-[120px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block">Contact Channels</span>
              <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>Our Office Address</h2>
              <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                Connect with our systems architects today for a personalized quotation, hardware demo, or to request custom AMC support.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-sm">
                  <Phone className="h-6 w-6 text-[#00AEEF] shrink-0" />
                  <div>
                    <h4 className="font-extrabold text-[#071A35] text-xs uppercase tracking-wider">Phone</h4>
                    <p className="text-sm text-slate-600 mt-1 font-mono font-medium">+91 813-0720-777</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-sm">
                  <Mail className="h-6 w-6 text-[#00AEEF] shrink-0" />
                  <div>
                    <h4 className="font-extrabold text-[#071A35] text-xs uppercase tracking-wider">Email</h4>
                    <p className="text-sm text-slate-600 mt-1 font-mono">support@smsmengineers.in</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-sm">
                  <MapPin className="h-6 w-6 text-[#00AEEF] shrink-0" />
                  <div>
                    <h4 className="font-extrabold text-[#071A35] text-xs uppercase tracking-wider">Corporate Office</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">Agra, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-sm">
                  <Clock className="h-6 w-6 text-[#00AEEF] shrink-0" />
                  <div>
                    <h4 className="font-extrabold text-[#071A35] text-xs uppercase tracking-wider">Working Hours</h4>
                    <p className="text-sm text-slate-600 mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-sm shadow-sm">
            <Reveal>
              <h3 className="text-2xl font-bold font-display text-[#071A35] mb-6">Send A Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Full Name *</label>
                    <input
                      type="text"
                      {...register("name")}
                      className={`w-full bg-white border ${errors.name ? "border-red-500" : "border-slate-300"} p-3.5 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`w-full bg-white border ${errors.email ? "border-red-500" : "border-slate-300"} p-3.5 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Phone Number *</label>
                    <input
                      type="text"
                      {...register("phone")}
                      className={`w-full bg-white border ${errors.phone ? "border-red-500" : "border-slate-300"} p-3.5 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Company Name</label>
                    <input
                      type="text"
                      {...register("company")}
                      className="w-full bg-white border border-slate-300 p-3.5 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Subject *</label>
                  <input
                    type="text"
                    {...register("subject")}
                    className={`w-full bg-white border ${errors.subject ? "border-red-500" : "border-slate-300"} p-3.5 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[#071A35] tracking-wider mb-2">Message *</label>
                  <textarea
                    rows={5}
                    {...register("message")}
                    className={`w-full bg-white border ${errors.message ? "border-red-500" : "border-slate-300"} p-3.5 text-sm rounded-sm focus:outline-none focus:border-[#00AEEF] text-[#071A35]`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {status === "success" && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm flex gap-3 text-emerald-800 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <h5 className="font-bold">Inquiry Sent Successfully!</h5>
                      <p className="text-xs mt-0.5 text-emerald-700">Thank you. An email confirmation has been dispatched. Our team will contact you shortly.</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-sm flex gap-3 text-rose-800 text-sm">
                    <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
                    <div>
                      <h5 className="font-bold">Submission Failed</h5>
                      <p className="text-xs mt-0.5 text-rose-700">Please try again later or contact us directly.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#071A35] hover:bg-[#00AEEF] text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>

        </div>
      </section>

      {/* SECTION 3: Interactive Contact Cards */}
      <section className="py-[120px] bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block mb-2">Direct Directory</span>
            <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-bold" style={{ fontFamily: "Georgia, serif" }}>Connect With Specific Departments</h2>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {departments.map((dept, idx) => {
              const Icon = dept.icon;
              return (
                <Reveal key={dept.title} delay={idx * 0.05}>
                  <div className="bg-white border border-slate-200 p-6 rounded-sm space-y-4 hover:shadow-md transition-shadow">
                    <div className="h-10 w-10 bg-[#00AEEF]/10 rounded-sm grid place-items-center text-[#00AEEF]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold text-[#071A35] font-display text-sm">{dept.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{dept.desc}</p>
                    <a href={`mailto:${dept.email}`} className="text-xs font-mono text-[#0A4ABF] font-bold block hover:underline">
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
      <section className="relative h-[450px] bg-slate-200 overflow-hidden border-y border-slate-300">
        <div className="absolute inset-0 bg-[#071A35]/10 flex flex-col items-center justify-center p-8 z-10 text-center">
          <div className="max-w-md bg-white border border-slate-200 p-8 rounded-sm shadow-xl space-y-4">
            <MapPin className="h-10 w-10 text-[#00AEEF] mx-auto" />
            <h3 className="text-xl font-bold font-display text-[#071A35]">Agra R&D Campus Map</h3>
            <p className="text-xs text-slate-500 font-light">SMSM Engineers complex, industrial calibration hub and circuit designing facility, Agra, India.</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#071A35] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-[#0A4ABF] transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: Office Gallery */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-extrabold block mb-2">Our Campus</span>
            <h2 className="text-3xl md:text-4xl text-[#071A35] font-display font-bold" style={{ fontFamily: "Georgia, serif" }}>Office Gallery</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="aspect-[4/3] relative rounded-sm overflow-hidden group shadow-md border border-slate-200">
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

      {/* SECTION 7: CTA Banner */}
      <section className="py-[120px] bg-[#071A35] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] to-[#0A4ABF]/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight font-display" style={{ fontFamily: "Georgia, serif" }}>
              Let's Discuss Your Next Project
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg mt-4 font-light">
              Connect with our corporate strategy desk to explore business integrations, system upgrades, or technical SLAs.
            </p>
            <div className="pt-8">
              <a href="https://wa.me/918130720777" className="bg-[#25D366] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-emerald-600 transition-colors inline-flex items-center gap-2">
                Chat On WhatsApp <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
