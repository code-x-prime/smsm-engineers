"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function LoaderContent() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [renderDOM, setRenderDOM] = useState(true);
  const isFirstLoad = useRef(true);
  const previousPathname = useRef(pathname);

  // Function to run a progress sequence
  const startLoadingAnimation = (durationMs: number, onComplete?: () => void) => {
    setLoading(true);
    setRenderDOM(true);
    setProgress(0);

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));

      // Ease-out easing curve for dynamic realistic feel
      const eased = Math.min(100, Math.round(100 * Math.sin((pct / 100) * (Math.PI / 2))));
      setProgress(eased);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            setRenderDOM(false);
            if (onComplete) onComplete();
          }, 450); // wait for fade-out transition
        }, 150);
      }
    }, 20);

    return () => clearInterval(interval);
  };

  // Initial site load
  useEffect(() => {
    const cleanup = startLoadingAnimation(1200);
    isFirstLoad.current = false;
    return cleanup;
  }, []);

  // On route / page changes
  useEffect(() => {
    if (isFirstLoad.current) return;

    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      const cleanup = startLoadingAnimation(450);
      return cleanup;
    }
  }, [pathname]);

  // Global listener for internal links to trigger transition immediately upon click
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("//") &&
        !href.startsWith("/#") &&
        href !== pathname &&
        target.target !== "_blank" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey
      ) {
        // Trigger quick surge
        setLoading(true);
        setRenderDOM(true);
        setProgress((prev) => (prev < 15 ? 15 : prev));
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => document.removeEventListener("click", handleAnchorClick, { capture: true });
  }, [pathname]);

  if (!renderDOM) return null;

  return (
    <div
      aria-hidden={!loading}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050D1A] transition-all duration-500 ease-out select-none pointer-events-auto ${
        loading ? "opacity-100 scale-100" : "opacity-0 scale-[1.02] pointer-events-none"
      }`}
    >
      {/* Background Subtle Tech Ambient Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,74,191,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 grid-lines opacity-[0.03] pointer-events-none" />

      {/* Tech HUD Corner Brackets matching reference */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-rose-500/70 sm:border-t-[3px] sm:border-l-[3px] pointer-events-none" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-rose-500/70 sm:border-t-[3px] sm:border-r-[3px] pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-rose-500/70 sm:border-b-[3px] sm:border-l-[3px] pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-rose-500/70 sm:border-b-[3px] sm:border-r-[3px] pointer-events-none" />

      {/* Center Logo & Loading Bar */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Glowing SMSM Round Emblem */}
        <div className="relative mb-8 transform transition-transform duration-300">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,174,239,0.75),0_0_25px_rgba(56,189,248,0.4)] border border-[#00AEEF]/40">
            <Image
              src="/images/smsm_round_cropped.png"
              alt="SMSM Engineers"
              fill
              priority
              className="object-contain rounded-full"
            />
          </div>
        </div>

        {/* Futuristic Glowing Progress Bar */}
        <div className="relative w-64 sm:w-80 h-[4px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-500 via-[#00AEEF] to-[#38BDF8] rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(0,174,239,0.9)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Numeric Percentage */}
        <div className="mt-3 text-xs sm:text-sm font-mono tracking-widest text-[#00AEEF] font-semibold">
          {progress}%
        </div>
      </div>

      {/* Bottom Technical Tagline */}
      <div className="absolute bottom-8 sm:bottom-10 text-[10px] sm:text-xs tracking-[0.35em] uppercase text-white/40 font-light text-center px-4">
        ONE STOP SOLUTION FOR ALL TINTING NEEDS &bull; DEDICATED TO INNOVATION
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <Suspense fallback={null}>
      <LoaderContent />
    </Suspense>
  );
}
