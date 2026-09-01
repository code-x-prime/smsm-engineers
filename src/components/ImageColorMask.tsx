"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ImageColorMaskProps {
  src: string;
  alt: string;
  badge: string;
  title: string;
  subtitle?: string;
  specs?: string[];
  href?: string;
  aspectRatio?: string;
  className?: string;
  sizes?: string;
  objectFit?: "cover" | "contain";
}

export function ImageColorMask({
  src,
  alt,
  badge,
  title,
  subtitle,
  specs,
  href,
  aspectRatio = "aspect-[16/10]",
  className = "",
  sizes = "(max-w-768px) 100vw, 50vw",
  objectFit = "cover",
}: ImageColorMaskProps) {
  const [active, setActive] = useState(false);

  const isContain = objectFit === "contain";

  const content = (
    <div
      className={`relative ${aspectRatio} rounded-2xl overflow-hidden group border border-slate-200/80 shadow-xl cursor-pointer select-none ${
        isContain
          ? "bg-gradient-to-b from-slate-100 via-white to-slate-50"
          : "bg-slate-900"
      } ${className}`}
      onClick={() => setActive(!active)}
      onMouseLeave={() => setActive(false)}
    >
      {/* Base Image */}
      <Image
        src={src}
        alt={alt}
        fill
        className={
          isContain
            ? "object-contain p-4 sm:p-6 drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-105"
            : "object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        }
        sizes={sizes}
      />

      {/* Default subtle gradient for unhovered readability */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0 ${
          isContain
            ? "bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"
            : "bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"
        }`}
      />
      <div className="absolute bottom-5 left-6 z-20 transition-opacity duration-500 group-hover:opacity-0">
        <span className="text-[11px] uppercase font-semibold text-[#00AEEF] tracking-wider block mb-1">
          {badge}
        </span>
        <h4 className="text-xl sm:text-2xl font-semibold text-white font-display">
          {title}
        </h4>
      </div>

      {/* HOVER / ACTIVE COLOR MASK (SMSM Brand Blue Overlay) */}
      <div
        className={`absolute inset-0 z-30 bg-gradient-to-br from-[#071A35]/95 via-[#0A4ABF]/90 to-[#00AEEF]/85 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-[2px] transition-all duration-500 ease-out ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        {/* Top Section: Frosted Pill Tag & Circular Arrow Button */}
        <div className="flex items-start justify-between">
          <span className="px-3.5 py-1.5 rounded-md bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider shadow-sm transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            {badge}
          </span>
          <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white text-[#0A4ABF] grid place-items-center shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-500 group-hover:rotate-45 shrink-0">
            <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
          </div>
        </div>

        {/* Bottom Section: Subtitle, Title & Specs */}
        <div className="space-y-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
          {subtitle && (
            <span className="text-white/75 text-[11px] uppercase tracking-widest font-mono block">
              {subtitle}
            </span>
          )}
          <h3 className="text-2xl sm:text-3xl font-medium text-white font-display leading-tight">
            {title}
          </h3>

          {specs && specs.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-white/95 font-light">
              {specs.slice(0, 2).map((spec, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-black/25 backdrop-blur-sm px-3 py-1 rounded-full border border-white/15"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#00AEEF] shrink-0" />
                  <span className="truncate max-w-[220px]">{spec}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
