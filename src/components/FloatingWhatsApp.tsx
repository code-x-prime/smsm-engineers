"use client";

import { useEffect, useState } from "react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide while in the top hero area (scrollY <= 320)
      // Smoothly appear once scrolled past hero
      if (window.scrollY > 320) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="https://wa.me/918130720777"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className={`fixed bottom-4 left-4 md:bottom-5 md:left-5 z-50 h-9 w-9 md:h-10 md:w-10 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full grid place-items-center shadow-lg shadow-[#25D366]/30 ring-2 ring-white/60 hover:scale-110 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-8 scale-75 pointer-events-none"
      }`}
    >
      <IconBrandWhatsapp className="h-5 w-5" />
    </a>
  );
}
