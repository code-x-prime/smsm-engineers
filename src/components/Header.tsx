"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconChevronDown,
  IconMenu2,
  IconX,
  IconArrowUpRight,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconDownload,
  IconHelpCircle,
  IconShieldCheck,
  IconSettings,
  IconStack,
  IconAdjustmentsHorizontal,
  IconRotateClockwise,
  IconCpu,
  IconDatabase
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type MenuItem = { label: string; to: string; desc: string; icon: any };

type MegaCol = {
  col: string;
  items: MenuItem[];
};

type Nav =
  | { label: string; to: string }
  | { label: string; mega: MegaCol[]; featured: { title: string; desc: string; to: string } };

const navList: Nav[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Products",
    mega: [
      {
        col: "Tinting Systems",
        items: [
          { label: "Colorant", to: "/products/colorant", desc: "Universal stainers & industrial pigments", icon: IconStack },
          { label: "Shade Card", to: "/products/shade-card", desc: "Chromatic fan decks & swatch cards", icon: IconAdjustmentsHorizontal },
          { label: "Universal Stainer", to: "/products/universal-stainer", desc: "POS custom stainer concentrates", icon: IconAdjustmentsHorizontal },
        ],
      },
      {
        col: "Machinery",
        items: [
          { label: "Automatic Color Dispenser", to: "/products/automatic-color-dispenser", desc: "Step-motor driven sequential dosing", icon: IconSettings },
          { label: "Manual Color Dispenser", to: "/products/manual-color-dispenser", desc: "Mechanical piston retail dispensers", icon: IconRotateClockwise },
          { label: "Gyroshaker Mixer", to: "/products/gyroshaker", desc: "High-viscosity bidirectional mixing", icon: IconRotateClockwise },
        ],
      },
    ],
    featured: {
      title: "Automatic Dispenser v4",
      desc: "Sub-drop precision calibration at 1/384 fl. oz.",
      to: "/products/automatic-color-dispenser"
    }
  },
  {
    label: "Services",
    mega: [
      {
        col: "Core Engineering",
        items: [
          { label: "AMC Services", to: "/services/amc", desc: "Any make machinery field support & SLAs", icon: IconShieldCheck },
          { label: "PCB Designing", to: "/services/pcb-design", desc: "Custom control boards & embedded firmware", icon: IconCpu },
          { label: "Software Development", to: "/services/software", desc: "Formulation databases & paint POS apps", icon: IconDatabase },
        ],
      },
      {
        col: "Consulting & Resources",
        items: [
          { label: "Color Consultancy", to: "/services/color-consultancy", desc: "Spectrophotometric calibration", icon: IconStack },
          { label: "Technical Support", to: "/services/technical-support", desc: "Remote diagnostic support & hotlines", icon: IconHelpCircle },
          { label: "Engineering Consultancy", to: "/services/engineering-consultancy", desc: "Coating factory layouts & lines planning", icon: IconSettings },
          { label: "Downloads & Credentials", to: "/services/downloads", desc: "Official recommendation letters & DIPP PDFs", icon: IconDownload },
        ],
      },
    ],
    featured: {
      title: "24/7 AMC Support",
      desc: "Emergency diagnostic call outs across India in 24 hours.",
      to: "/services/amc"
    }
  },
  { label: "Become Partner", to: "/become-partner" },
  { label: "Group Companies", to: "/group-companies" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
      {/* TOP INFORMATION BAR */}
      <div className="relative bg-[#071A35]/95 border-b border-white/5 text-white/80 text-xs py-2 px-6 backdrop-blur-md hidden md:block overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-[0.06] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-[#00AEEF] transition-colors">
              <IconPhone className="h-3.5 w-3.5 text-[#00AEEF]" /> +91 813-0720-777
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#00AEEF] transition-colors">
              <IconMail className="h-3.5 w-3.5 text-[#00AEEF]" /> support@smsmengineers.in
            </span>
            <span className="flex items-center gap-1.5 text-white/60">
              <IconClock className="h-3.5 w-3.5 text-[#00AEEF]" /> Mon - Sat: 9:00 AM - 6:00 PM
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-white/60">
              <IconMapPin className="h-3.5 w-3.5 text-[#00AEEF]" /> Agra, India
            </span>
            <span className="h-3.5 w-px bg-white/15" />
            <a href="https://www.facebook.com/share/1JDuTRUisj/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#00AEEF] hover:-translate-y-0.5 transition-all inline-block">
              <IconBrandFacebook className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/company/smsm-engineers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#00AEEF] hover:-translate-y-0.5 transition-all inline-block">
              <IconBrandLinkedin className="h-4 w-4" />
            </a>
            <a href="https://wa.me/918130720777" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#00AEEF] hover:-translate-y-0.5 transition-all inline-block">
              <IconBrandWhatsapp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* HEADER BAR */}
      <header
        className={cn(
          "w-full transition-all duration-300 border-b",
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-xl border-slate-200 shadow-[0_8px_30px_-15px_rgba(7,26,53,0.15)]"
            : "py-4 bg-white border-slate-100"
        )}
        onMouseLeave={() => setOpen(null)}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 sm:gap-8 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/images/smsm_logo.png"
              alt="SMSM Engineers Logo"
              width={200}
              height={60}
              className="object-contain transition-all duration-300"
              style={{ height: scrolled ? "36px" : "44px", width: "auto" }}
              priority
            />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink-0">
            {navList.map((item) => {
              if ("to" in item) {
                const isActive = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
                return (
                  <Link
                    key={item.label}
                    href={item.to}
                    className={cn(
                      "px-2.5 xl:px-3.5 py-2 text-sm font-medium transition-all relative group/link rounded-full whitespace-nowrap",
                      isActive ? "text-[#0A4ABF] bg-[#00AEEF]/10" : "text-[#071A35]/80 hover:text-[#0A4ABF] hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                    <span className={cn(
                      "absolute bottom-0 left-3 right-3 h-[2px] bg-[#0A4ABF] transform scale-x-0 transition-transform group-hover/link:scale-x-100 origin-left",
                      isActive && "scale-x-100"
                    )} />
                  </Link>
                );
              }

              const isOpen = open === item.label;
              const hasActiveChild = item.mega.some((col) =>
                col.items.some((mi) => pathname === mi.to)
              );

              return (
                <div key={item.label} onMouseEnter={() => setOpen(item.label)}>
                  <button
                    className={cn(
                      "px-2.5 xl:px-3.5 py-2 text-sm font-medium flex items-center gap-1 transition-all rounded-full whitespace-nowrap",
                      isOpen || hasActiveChild ? "text-[#0A4ABF] bg-[#00AEEF]/10" : "text-[#071A35]/80 hover:text-[#0A4ABF] hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                    <IconChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", isOpen && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 12, x: "-50%" }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full mt-3 w-[calc(100vw-3rem)] max-w-[850px] bg-white/95 backdrop-blur-xl text-[#071A35] rounded-2xl shadow-[0_30px_60px_-15px_rgba(7,26,53,0.25)] border border-slate-100 overflow-hidden z-50 grid grid-cols-12"
                      >
                        {/* Mega Menu Columns */}
                        <div className="col-span-8 p-8 grid grid-cols-2 gap-8 border-r border-slate-100">
                          {item.mega.map((col) => (
                            <div key={col.col} className="space-y-4">
                              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium border-b border-slate-100 pb-2">
                                {col.col}
                              </div>
                              <ul className="space-y-1.5">
                                {col.items.map((mi) => (
                                  <li key={mi.to}>
                                    <Link
                                      href={mi.to}
                                      onClick={() => setOpen(null)}
                                      className="group/item flex gap-3 rounded-xl p-2.5 hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
                                    >
                                      <div className="h-9 w-9 icon-chip shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                                        <mi.icon className="h-4 w-4" />
                                      </div>
                                      <div className="leading-tight">
                                        <div className="font-semibold text-sm text-[#071A35] group-hover/item:text-[#0A4ABF] transition-colors flex items-center gap-1">
                                          {mi.label}
                                          <IconArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                        </div>
                                        <p className="text-xs text-slate-500 font-light mt-0.5 leading-snug">
                                          {mi.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Featured Showcase Block */}
                        <div className="col-span-4 relative bg-gradient-to-br from-[#071A35] to-[#0A4ABF] p-8 flex flex-col justify-between overflow-hidden">
                          <div className="absolute -top-10 -right-10 h-40 w-40 bg-[#00AEEF]/25 rounded-full blur-[60px] pointer-events-none" />
                          <div className="absolute inset-0 grid-lines opacity-[0.06] pointer-events-none" />
                          <div className="relative">
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#00AEEF] block mb-2">Featured Showcase</span>
                            <h4 className="font-medium text-sm text-white">{item.featured.title}</h4>
                            <p className="text-xs text-white/60 mt-2 font-light leading-relaxed">
                              {item.featured.desc}
                            </p>
                          </div>
                          <Link
                            href={item.featured.to}
                            onClick={() => setOpen(null)}
                            className="relative inline-flex items-center justify-between bg-[#00AEEF] hover:bg-white text-[#071A35] font-medium text-xs uppercase tracking-wider p-3.5 rounded-xl transition-all mt-6 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(0,174,239,0.5)]"
                          >
                            Explore Detail <IconArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right Action Stack */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="tel:+918130720777" className="hidden xl:inline-flex h-10 w-10 items-center justify-center border border-slate-200 rounded-full hover:bg-slate-50 hover:border-[#00AEEF]/40 hover:-translate-y-0.5 transition-all text-[#071A35]">
              <IconPhone className="h-4 w-4 text-[#0A4ABF]" />
            </a>
            <a href="mailto:support@smsmengineers.in" className="hidden xl:inline-flex h-10 w-10 items-center justify-center border border-slate-200 rounded-full hover:bg-slate-50 hover:border-[#00AEEF]/40 hover:-translate-y-0.5 transition-all text-[#071A35]">
              <IconMail className="h-4 w-4 text-[#0A4ABF]" />
            </a>
            <Link
              href="/query-form"
              className="hidden sm:inline-flex items-center gap-2 bg-[#00AEEF] text-[#071A35] font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-full hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(0,174,239,0.5)] transition-all whitespace-nowrap shrink-0"
            >
              Request Quote <IconArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              className="lg:hidden text-[#071A35] p-2 rounded-full hover:bg-slate-50 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <IconX className="h-6 w-6" /> : <IconMenu2 className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-[#071A35] border-t border-white/10 relative"
            >
              <div className="absolute inset-0 grid-lines opacity-[0.05] pointer-events-none" />
              <div className="relative px-6 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
                {navList.map((item) =>
                  "to" in item ? (
                    <Link
                      key={item.label}
                      href={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3.5 px-3 rounded-xl text-white/90 border-b border-white/5 font-medium hover:text-[#00AEEF] hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div key={item.label} className="border-b border-white/5 py-3">
                      <div className="text-xs uppercase tracking-wider text-[#00AEEF] font-medium mb-3 px-3 flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#00AEEF]" />
                        {item.label}
                      </div>
                      <div className="grid grid-cols-1 gap-1 pl-2">
                        {item.mega.flatMap((c) => c.items).map((mi) => (
                          <Link
                            key={mi.to}
                            href={mi.to}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 text-sm transition-colors"
                          >
                            <div className="h-7 w-7 rounded-lg bg-white/5 grid place-items-center shrink-0">
                              <mi.icon className="h-3.5 w-3.5 text-[#00AEEF]" />
                            </div>
                            {mi.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                )}
                <Link
                  href="/query-form"
                  onClick={() => setMobileOpen(false)}
                  className="mt-6 w-full justify-center inline-flex items-center gap-2 bg-[#00AEEF] text-[#071A35] font-medium py-3.5 rounded-full hover:bg-white transition-colors shadow-[0_8px_20px_-4px_rgba(0,174,239,0.5)]"
                >
                  Request Quote <IconArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
