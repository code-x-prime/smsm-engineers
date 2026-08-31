import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

type ProductDetails = {
  name: string;
  category: string;
  desc: string;
  features: string[];
  specs: Record<string, string>;
  image: string;
};

const productsData: Record<string, ProductDetails> = {
  colorant: {
    name: "Universal Paint Colorant",
    category: "Tinting Systems",
    desc: "Our universal colorants represent a decade of chemical refinement. Synthesized locally at our ACT India plants, these colorants support both water-based emulsions and solvent-based paints without viscosity shifts or flocculation.",
    features: [
      "16-Colorant universal system configuration matching standard point-of-sale machines.",
      "Eco-friendly formulations with zero VOC outputs.",
      "Strict spectrophotometric tolerance checking (Delta E < 0.5) to ensure consistent tinting.",
      "High pigment loading providing maximum hiding power.",
    ],
    specs: {
      "Base compatibility": "Acrylic, alkyd, polyurethane emulsions",
      "VOC Level": "Under 1g / Liter (Zero VOC class)",
      "Weather resistance": "Excellent (tested 500+ hours QUV)",
      "Average Shelf Life": "24 months in sealed canister",
    },
    image: "/images/product_colorant.png",
  },
  "shade-card": {
    name: "Color Shade Card & Fan Deck",
    category: "Tinting Systems",
    desc: "Color Cards & Decks are crucial point-of-sale branding items. SMSM Engineers produces custom paint catalogs, fan decks, and architectural shade books calibrated to exact chromatic parameters.",
    features: [
      "High-precision color deposition on heavy coated stocks.",
      "Calibrated using high-end spectrophotometers to avoid optical differences.",
      "Fully customized layouts, custom branding, and corporate logo integration.",
      "Durable matte, satin, or high-gloss protective finishes.",
    ],
    specs: {
      "Stock weight": "250gsm - 350gsm premium artboard",
      "Color accuracy": "Delta E < 0.3 vs master formulation",
      "Binding options": "Screw-post, wire-o, book-bound",
      "Customization": "Full corporate decals and customized indices",
    },
    image: "/images/product_shade_card.png",
  },
  "automatic-color-dispenser": {
    name: "Automatic Color Dispenser",
    category: "Machinery",
    desc: "The SMSM Automatic Color Dispenser (ACD) is designed for continuous operational accuracy. Driven by industrial-grade step-motors, it provides sub-drop precision dosing while running automated recycling routines to eliminate nozzle clogging.",
    features: [
      "Sub-drop dosing precision to 1/384 fl. oz. for micro-matching.",
      "Continuous internal recirculation preventing fluid sedimentation.",
      "Stainless-steel and chemical-resistant polymer canister manifolds.",
      "Integrated electronic control board designed by our PCB team.",
    ],
    specs: {
      "Canister quantity": "16 to 24 canisters",
      "Dispensing method": "Sequential piston/bellows dosing",
      "Minimum Dosing": "0.077 ml (1/384 fl. oz.)",
      "Operating voltage": "220V AC / 110V AC, 50-60Hz",
    },
    image: "/images/product_automatic_dispenser.png",
  },
  "manual-color-dispenser": {
    name: "Manual Color Dispenser",
    category: "Machinery",
    desc: "A robust, low-maintenance mechanical dosing dispenser engineered for retail shops and remote areas with irregular power supplies. Features double-stroke pump configurations.",
    features: [
      "No power required — fully manual mechanical operation.",
      "Spring-loaded gauge locks for precise piston stroke limitation.",
      "Dual-acting turnable canister plate for quick color selection.",
      "Hardened gauge rods with anti-wear markings.",
    ],
    specs: {
      "Canister volume": "2.0 Liters to 2.5 Liters each",
      "Plunger style": "Single-stroke calibrated syringe pump",
      "Minimum Dosing": "1/48 fl. oz. or 0.1 ml",
      "Base unit dimensions": "820mm x 820mm x 1100mm",
    },
    image: "/images/product_manual_dispenser.png",
  },
  gyroshaker: {
    name: "Gyroshaker Mixer Machine",
    category: "Machinery",
    desc: "Our heavy-duty gyroscopic bidirectional clamping mixer is built for high-viscosity coatings. It rotates containers along two axes simultaneously, creating a perfectly homogenous paint mix in under 2 minutes.",
    features: [
      "Simultaneous double-axis rotation for uniform mixing.",
      "Automatic clamping pressure control based on canister height.",
      "Slide-out base tray allowing easy operator loading of heavy cans.",
      "Reinforced steel structural frame reducing floor vibrations.",
    ],
    specs: {
      "Mixing range": "0.5 Liters to 20 Liters cans",
      "Maximum Load": "40 kg",
      "Rotation speed": "Clamped variable up to 320 RPM",
      "Safety switch": "Automatic door interlock sensor",
    },
    image: "/images/product_gyroshaker.png",
  },
  "universal-stainer": {
    name: "Universal Color Stainer",
    category: "Tinting Systems",
    desc: "SMSM Universal Stainers are high-strength tinting concentrates designed for paint dealer shops. Ideal for customizing tint shades on site, they provide high stability and compatibility across solvent and latex products.",
    features: [
      "High pigment concentration for cost-effective color modifications.",
      "Anti-settling stabilizers preventing formulation separation.",
      "Superior light-fastness resisting weathering and sun exposure.",
      "Calibrated nozzle bottle caps for drop-wise manual addition.",
    ],
    specs: {
      "Solvent compatibility": "Water-borne and solvent-borne enamels",
      "Active solid ratio": "45% - 60% pigment weight",
      "Standard sizes": "50ml, 100ml, 200ml squeeze bottles",
      "Color range": "12 standard architectural tint shades",
    },
    image: "/images/product_universal_stainer.png",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productsData[slug];

  if (!product) {
    notFound();
  }

  // Schema structured JSON-LD data
  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.desc,
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "price": "Call for quote",
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://smsmengineers.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://smsmengineers.in/products",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `https://smsmengineers.in/products/${slug}`,
      },
    ],
  };

  const relatedProducts = Object.entries(productsData)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <main className="bg-brand-bg pt-28">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Product Hero */}
      <section className="relative py-16 md:py-24 bg-[#071A35] text-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0A4ABF]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Link href="/products" className="inline-flex items-center gap-2 text-[#00AEEF] hover:text-white transition-colors text-sm font-semibold">
                <ArrowLeft className="h-4 w-4" /> Back to Products Catalog
              </Link>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[#00AEEF] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight font-display leading-[1.08]">
                  {product.name}
                </h1>
              </div>
              <p className="text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                {product.desc}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/query-form"
                  className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-white text-[#071A35] font-semibold px-7 py-3.5 rounded-full transition-all text-sm shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Request Technical Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-gradient-to-br from-white via-slate-50 to-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white shadow-2xl rounded-2xl p-5 items-center gap-3 border border-slate-100 max-w-[220px] z-20">
                <div className="h-11 w-11 icon-chip shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#071A35] font-display leading-snug">Engineered for Precision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 text-sm text-slate-500 flex gap-2">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-slate-800 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">{product.name}</span>
        </div>
      </div>

      {/* Technical Specifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Key Features */}
          <div className="space-y-6">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block">What Sets It Apart</span>
            <h2 className="text-2xl md:text-3xl font-medium text-[#071A35] font-display">Key Engineering Features</h2>
            <ul className="space-y-4">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-relaxed bg-slate-50 border border-slate-200 rounded-2xl p-4 hover:border-[#00AEEF]/40 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specs Table */}
          <div className="space-y-6">
            <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block">Specification Sheet</span>
            <h2 className="text-2xl md:text-3xl font-medium text-[#071A35] font-display">Technical Parameters</h2>
            <div className="border border-slate-200 rounded-2xl overflow-x-auto shadow-sm">
              <table className="w-full text-sm text-left min-w-[420px]">
                <tbody>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <tr key={key} className="border-b border-slate-200 last:border-b-0">
                      <td className="bg-brand-bg px-6 py-4 font-medium text-[#071A35] w-1/3 whitespace-nowrap">{key}</td>
                      <td className="px-6 py-4 text-slate-600">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pt-2">
              <Link
                href="/query-form"
                className="inline-flex items-center gap-2 bg-[#0A4ABF] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#071A35] transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
              >
                Inquire Configuration Price <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg to-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <span className="text-[#0A4ABF] text-xs uppercase tracking-widest font-semibold block mb-2">Explore More</span>
          <h2 className="text-2xl md:text-3xl font-medium text-[#071A35] font-display mb-10">Related Solutions</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedProducts.map(([key, item]) => (
              <Link key={key} href={`/products/${key}`} className="brand-card bg-white p-6 group">
                <span className="text-xs uppercase text-slate-400 font-medium">{item.category}</span>
                <h3 className="text-lg font-medium text-[#071A35] group-hover:text-[#0A4ABF] mt-1 mb-2 font-display transition-colors">{item.name}</h3>
                <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">{item.desc}</p>
                <div className="text-[#00AEEF] text-xs font-medium mt-4 inline-flex items-center gap-1">
                  View Specs <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
