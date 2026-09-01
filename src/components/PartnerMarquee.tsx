"use client";

import Image from "next/image";

const clientLogos = [
  { name: "JSW Dulux", src: "/images/logos/jsw-dulux.webp" },
  { name: "AkzoNobel", src: "/images/logos/akzonobel.png" },
  { name: "Nippon Paint", src: "/images/logos/nippon-paint.png" },
  { name: "Shalimar Paints", src: "/images/logos/shalimar.png" },
  { name: "Kamdhenu Paints", src: "/images/logos/kamdhenu.jpg" },
  { name: "National Paints", src: "/images/logos/national.jpg" },
  { name: "Nexon Paints", src: "/images/logos/nexon.jpg" },
  { name: "Raymax Paints", src: "/images/logos/raymax.png" },
  { name: "Valcoat Paints", src: "/images/logos/valcoat.png" },
  { name: "Colour Pacific", src: "/images/logos/popular.png" },
  { name: "Modi Paints", src: "/images/logos/modi-paints.jpg" },
  { name: "JK Protomax", src: "/images/logos/jk-protomax.png" },
  { name: "Toyo Ink", src: "/images/logos/toyo-ink.png" },
  { name: "Woodco Paints", src: "/images/logos/woodco.png" },
  { name: "Ozell Cooner", src: "/images/logos/ozell.jpg" },
  { name: "Zar", src: "/images/logos/zar.gif" },
];

interface PartnerMarqueeProps {
  title?: string;
}

export function PartnerMarquee({ title = "Trusted by Paint Operators & Corporate Partners" }: PartnerMarqueeProps) {
  return (
    <section className="bg-slate-50/70 py-16 sm:py-20 overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-6 mb-10 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0A4ABF]/10 border border-[#0A4ABF]/20 rounded-full text-[#0A4ABF] text-[11px] uppercase tracking-[0.25em] font-semibold mb-3">
          Industry Alliances
        </span>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#071A35]">
          {title}
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm font-light mt-2 max-w-xl mx-auto">
          Supplying high-performance tinting machinery, colorants, and AMC solutions to India&apos;s foremost coatings manufacturers.
        </p>
      </div>

      <div className="flex overflow-hidden select-none gap-6 w-full relative">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Marquee track with pause on hover */}
        <div className="flex gap-6 shrink-0 animate-marquee min-w-full items-center py-4 hover:[animation-play-state:paused]">
          {clientLogos.concat(clientLogos).map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="relative h-20 sm:h-24 w-44 sm:w-56 shrink-0 bg-white border border-slate-200/90 rounded-2xl px-5 py-3.5 flex items-center justify-center shadow-[0_2px_8px_rgba(7,26,53,0.04)] hover:shadow-[0_8px_24px_rgba(7,26,53,0.1)] hover:border-[#00AEEF]/50 transition-all duration-300 hover:scale-[1.04] group cursor-pointer"
            >
              <div className="relative h-full w-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 180px, 230px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
