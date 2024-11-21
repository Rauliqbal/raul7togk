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
         colors: {
            white: "#f1f1f1",
         },
         animation: {
            scroll:
               "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
         },
         keyframes: {
            scroll: {
               to: {
                  transform: "translate(calc(-50% - 0.5rem))",
               },
            },
         },
      },
   },
   plugins: [],
};
export default config;
