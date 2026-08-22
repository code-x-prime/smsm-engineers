"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IconArrowUpRight,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconAward
} from "@tabler/icons-react";

export function Footer() {
  return (
    <div className="w-full flex flex-col relative z-20">
      {/* PREMIUM CALL TO ACTION BANNER ABOVE FOOTER */}
      <section className="bg-gradient-to-r from-[#0A4ABF] to-[#071A35] text-white py-16 px-6 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute -top-24 right-[10%] h-72 w-72 bg-[#00AEEF]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 left-[5%] h-56 w-56 bg-[#00AEEF]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 z-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold font-display leading-tight">
              Ready To Transform Your Engineering Operations?
            </h2>
            <p className="text-white/70 font-light text-sm">
              Connect with our senior technical advisors today for a customized configuration review, spare parts supply, or AMC contract quote.
            </p>
          </div>
          <Link
            href="/query-form"
            className="inline-flex items-center gap-2 bg-[#00AEEF] text-[#071A35] font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white hover:text-[#071A35] transition-all shrink-0 hover:shadow-[0_8px_25px_-4px_rgba(0,174,239,0.5)] hover:-translate-y-0.5"
          >
            Request A Consultation <IconArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* LARGE ENTERPRISE FOOTER */}
      <footer className="relative bg-slate-50 text-slate-800 border-t border-slate-200 overflow-hidden">
        <div className="noise-overlay opacity-5" />
        <div className="absolute inset-0 grid-lines opacity-[0.03]" />
        <div className="relative max-w-[1400px] mx-auto px-6 py-20 z-10">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Column 1: Logo & Info */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/smsm_logo.png"
                  alt="SMSM Engineers Logo"
                  width={200}
                  height={60}
                  className="object-contain"
                  style={{ height: "44px", width: "auto" }}
                />
              </Link>
              <p className="text-slate-600 text-sm leading-relaxed font-light max-w-sm">
                Engineering precision into the global paint and coatings industry — tinting systems, dispensers, color science, and the custom hardware running them.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#0A4ABF] hover:text-white hover:border-transparent hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(10,74,191,0.5)] transition-all text-slate-600">
                  <IconBrandLinkedin className="h-4 w-4" />
                </a>
                <a href="https://wa.me/918130720777" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#0A4ABF] hover:text-white hover:border-transparent hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(10,74,191,0.5)] transition-all text-slate-600">
                  <IconBrandWhatsapp className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Columns 2-5 Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 lg:pl-10 lg:border-l lg:border-slate-200">
              {/* Column 2: Quick Links */}
              <div>
                <div className="text-xs uppercase tracking-wider text-[#0A4ABF] font-medium mb-5 border-b border-slate-200 pb-2">Company</div>
                <ul className="space-y-3 text-sm text-slate-600 font-light">                  <li><Link href="/" className="hover:text-[#0A4ABF] transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-[#0A4ABF] transition-colors">About Us</Link></li>
                  <li><Link href="/awards-recognitions" className="hover:text-[#0A4ABF] transition-colors font-semibold flex items-center gap-1"><IconAward className="h-4 w-4 text-[#0A4ABF]" /> Awards & PDFs</Link></li>
                  <li><Link href="/services/downloads" className="hover:text-[#0A4ABF] transition-colors">Downloads & PDFs</Link></li>
                  <li><Link href="/products" className="hover:text-[#0A4ABF] transition-colors">Products</Link></li>
                  <li><Link href="/services" className="hover:text-[#0A4ABF] transition-colors">Services</Link></li>
                  <li><Link href="/careers" className="hover:text-[#0A4ABF] transition-colors">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-[#0A4ABF] transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Column 3: Products */}
              <div>
                <div className="text-xs uppercase tracking-wider text-[#0A4ABF] font-medium mb-5 border-b border-slate-200 pb-2">Products</div>
                <ul className="space-y-3 text-sm text-slate-600 font-light">
                  <li><Link href="/products/colorant" className="hover:text-[#0A4ABF] transition-colors">Colorant</Link></li>
                  <li><Link href="/products/shade-card" className="hover:text-[#0A4ABF] transition-colors">Shade Card</Link></li>
                  <li><Link href="/products/automatic-color-dispenser" className="hover:text-[#0A4ABF] transition-colors">Auto Dispenser</Link></li>
                  <li><Link href="/products/manual-color-dispenser" className="hover:text-[#0A4ABF] transition-colors">Manual Dispenser</Link></li>
                  <li><Link href="/products/gyroshaker" className="hover:text-[#0A4ABF] transition-colors">Gyroshaker</Link></li>
                  <li><Link href="/products/universal-stainer" className="hover:text-[#0A4ABF] transition-colors">Universal Stainer</Link></li>
                </ul>
              </div>

              {/* Column 4: Services */}
              <div>
                <div className="text-xs uppercase tracking-wider text-[#0A4ABF] font-medium mb-5 border-b border-slate-200 pb-2">Services</div>
                <ul className="space-y-3 text-sm text-slate-600 font-light">
                  <li><Link href="/services/amc" className="hover:text-[#0A4ABF] transition-colors">AMC Support</Link></li>
                  <li><Link href="/services/color-consultancy" className="hover:text-[#0A4ABF] transition-colors">Consultancy</Link></li>
                  <li><Link href="/services/pcb-design" className="hover:text-[#0A4ABF] transition-colors">PCB Designing</Link></li>
                  <li><Link href="/services/software" className="hover:text-[#0A4ABF] transition-colors">Software Dev</Link></li>
                  <li><Link href="/services/technical-support" className="hover:text-[#0A4ABF] transition-colors">Technical Support</Link></li>
                </ul>
              </div>

              {/* Column 5: Contact Info */}
              <div>
                <div className="text-xs uppercase tracking-wider text-[#0A4ABF] font-medium mb-5 border-b border-slate-200 pb-2">Reach Us</div>
                <ul className="space-y-4 text-xs text-slate-600 font-light">
                  <li className="flex gap-2">
                    <IconMapPin className="h-4 w-4 text-[#0A4ABF] shrink-0" />
                    <span>112, Pushpanjali Vedanta, Vayu Vihar Road, Agra — 282010, U.P, India</span>
                  </li>
                  <li className="flex gap-2 hover:text-[#0A4ABF] transition-colors">
                    <IconPhone className="h-4 w-4 text-[#0A4ABF] shrink-0" />
                    <a href="tel:+918130720777">+91 813-0720-777</a>
                  </li>
                  <li className="flex gap-2 hover:text-[#0A4ABF] transition-colors">
                    <IconMail className="h-4 w-4 text-[#0A4ABF] shrink-0" />
                    <a href="mailto:support@smsmengineers.in">support@smsmengineers.in</a>
                  </li>
                  <li className="flex gap-2 hover:text-[#0A4ABF] transition-colors">
                    <IconBrandWhatsapp className="h-4 w-4 text-[#0A4ABF] shrink-0" />
                    <a href="https://wa.me/918130720777" target="_blank" rel="noopener noreferrer">WhatsApp Support</a>
                  </li>
                  <li className="flex gap-2 hover:text-[#0A4ABF] transition-colors">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#0A4ABF] hover:underline flex items-center gap-1 font-semibold">
                      Google Maps Location <IconArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-400">
            <div>© {new Date().getFullYear()} SMSM Engineers. All rights reserved.</div>
            <div className="flex gap-3">
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500">ISO-Aligned Quality Systems</span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500">Make in India</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
