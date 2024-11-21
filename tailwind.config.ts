import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   darkMode: ["class"],
   theme: {
      extend: {
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
};
export default config;
