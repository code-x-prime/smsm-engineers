import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: "#071A35",
          secondary: "#0A4ABF",
          accent: "#00AEEF",
          bg: "#F8FAFC",
          dark: "#111827",
          success: "#16A34A",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto-slab)", "Georgia", "serif"],
        display: ["var(--font-roboto-slab)", "Georgia", "serif"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
