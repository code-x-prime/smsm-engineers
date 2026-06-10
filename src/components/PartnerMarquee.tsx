"use client";

import Image from "next/image";

const clientLogos = [
  { name: "Shalimar Paints", src: "/images/logos/shalimar.png" },
  { name: "Zar", src: "/images/logos/zar.gif" },
  { name: "Raymax", src: "/images/logos/raymax.png" },
  { name: "Popular Paints", src: "/images/logos/popular.png" },
  { name: "Ozell Cooner", src: "/images/logos/ozell.jpg" },
  { name: "Nexon Paints", src: "/images/logos/nexon.jpg" },
  { name: "Nippon Paint", src: "/images/logos/nippon-paint.png" },
  { name: "National Paints", src: "/images/logos/national.jpg" },
  { name: "Modi Paints", src: "/images/logos/modi-paints.jpg" },
  { name: "Woodco Paints", src: "/images/logos/woodco.png" },
  { name: "Kamdhenu Paints", src: "/images/logos/kamdhenu.jpg" },
  { name: "JK Protomax", src: "/images/logos/jk-protomax.png" },
  { name: "AkzoNobel", src: "/images/logos/akzonobel.jpg" },
  { name: "JSW Dulux", src: "/images/logos/jsw-dulux.webp" },
  { name: "Toyo Ink", src: "/images/logos/toyo-ink.png" }
];

interface PartnerMarqueeProps {
  title?: string;
}

export function PartnerMarquee({ title = "Trusted by Paint Operators & Corporate Partners" }: PartnerMarqueeProps) {
  return (
    <section className="bg-white py-16 overflow-hidden border-t border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 mb-8">
        <div className="text-center text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">
          {title}
        </div>
      </div>
      <div className="flex overflow-hidden select-none gap-10 w-full relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex gap-16 shrink-0 animate-marquee min-w-full justify-around items-center py-4">
          {clientLogos.concat(clientLogos).map((logo, idx) => (
            <div key={idx} className="relative h-12 w-36 shrink-0 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
