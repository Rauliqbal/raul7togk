import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/ui/Provider";
import { Instrument_Sans, Inter_Tight, Yellowtail } from "next/font/google";

export const metadata: Metadata = {
   title: "Rauliqbal - Front-End Dev and UI Designer",
   description:
      "I am a developer and designer who has a passion for building responsive, cool looking, and easy to visit website applications.",
};

const instrumentSans = Instrument_Sans({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-instrument-sans",
});

const interTight = Inter_Tight({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-inter-tight",
});

const yelloTail = Yellowtail({
   weight: "400",
   variable: "--font-yellow-tail",
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html
         lang="en"
         className={`${instrumentSans.variable} ${interTight.variable} ${yelloTail.variable} `}
      >
         <body>
            <Provider>{children}</Provider>
         </body>
      </html>
   );
}
