"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Settings } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function ProductsPage() {
  const products = [
    {
      slug: "colorant",
      name: "COLORANT",
      category: "Tinting Systems",
      desc: "16-colourant universal water and solvent-based industrial colorant systems. Engineered for high consistency, zero VOC parameters, and long container shelf-life.",
      spec: "Zero VOC, VOC-compliant universal options",
    },
    {
      slug: "color-card-deck",
      name: "COLOR CARD & DECK",
      category: "Tinting Systems",
      desc: "Bespoke fan decks, color matching cards, and industrial swatch catalogs produced with precise spectrophotometer alignment.",
      spec: "High durability paper, matte/gloss finishes",
    },
    {
      slug: "color-dispenser",
      name: "COLOR DISPENSER",
      category: "Machinery",
      desc: "Automatic and manual color dosing dispensers. Built with industrial step-motors, sub-drop precision, and automated circulation manifolds to prevent nozzle clogging.",
      spec: "Canister: 16 to 24 canisters, min. dosing 1/384 fl. oz.",
    },
    {
      slug: "gyroshaker",
      name: "GYROSHAKER",
      category: "Machinery",
      desc: "Heavy-duty gyroscopic bidirectional mixers. Engineered for intense mixing cycles of variable viscosity paints. Features automatic container height clamping.",
      spec: "Clamping range: 50mm - 410mm, max weight: 40kg",
    },
    {
      slug: "universal-stainers",
      name: "UNIVERSAL STAINERS",
      category: "Tinting Systems",
      desc: "High-strength tinters customized for direct POS (Point of Sale) integrations. Provides exceptional resistance to light weathering and alkaline paint binders.",
      spec: "Compatible with acrylic, solvent base coats",
    },
  ];

  return (
    <main className="bg-brand-bg pt-28">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#071A35] text-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <span className="text-[#00AEEF] text-xs uppercase tracking-[0.25em] font-semibold block mb-4">Precision Machinery</span>
          <h1 className="hero-heading text-4xl md:text-6xl tracking-tight max-w-4xl">
            Our Products Showcase
          </h1>
          <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Industrial dispensers, heavy-duty gyroscopic shakers, and highly precise universal tinting formulations.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
        <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Products</span>
      </div>

      {/* Product List Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, idx) => (
              <Reveal key={p.slug} delay={idx * 0.05}>
                <div className="border border-slate-200 p-8 rounded-xl hover:shadow-xl transition-all h-full bg-brand-bg flex flex-col justify-between group">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#00AEEF] font-medium block mb-2">{p.category}</span>
                    <h2 className="text-2xl font-medium text-[#071A35] font-display mb-4 group-hover:text-[#0A4ABF] transition-colors">{p.name}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">{p.desc}</p>
                    <div className="text-xs text-slate-400 bg-white border border-slate-100 p-3 rounded-xl font-semibold mb-6">
                      Spec: {p.spec}
                    </div>
                  </div>
                  <div>
                    <Link
                      href={`/products/${p.slug}`}
                      className="inline-flex items-center gap-2 bg-[#071A35] text-white font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-[#0A4ABF] transition-colors"
                    >
                      Specifications <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
