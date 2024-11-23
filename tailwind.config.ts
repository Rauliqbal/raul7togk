import type { Config } from "tailwindcss";

export default {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            "instrument-sans": ["var(--font-instrument-sans)"],
            "inter-thin": ["var(--font-inter-tight)"],
            "yellow-tail": ["var(--font-yellow-tail)"],
         },
         container: {
            center: true,
         },
         colors: {
            white: "#f1f1f1",
            primary: "#525CEB",
            secondary: "#64748b",
         },
         animation: {
            scroll:
               "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            marquee: "marquee var(--duration) linear infinite",
         },
         keyframes: {
            scroll: {
               to: {
                  transform: "translate(calc(-50% - 0.5rem))",
               },
            },
            marquee: {
               from: { transform: "translateX(0)" },
               to: { transform: "translateX(calc(-100% - var(--gap)))" },
            },
         },
      },
   },
   plugins: [],
} satisfies Config;
