"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PageLoader } from "./ui/PageLoader";
import { SlideIn, Transition } from "./ui/Transition";
import { TextReveal } from "./ui/Typography";

export default function Hero() {
   const [hideLoader, setHideLoader] = useState(true); // Default True

   return (
      <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden ">
         <span className="blob size-1/4 absolute top-20 left-0 blur-[100px] -z-10" />
         <span className="blob w-1/4 h-2/3 absolute -right-40 rotate-180 bottom-52 blur-[100px] -z-10" />

         {hideLoader ? (
            <PageLoader hideLoader={hideLoader} setHideLoader={setHideLoader} />
         ) : (
            <div className="w-full px-4 md:px-8">
               <div className="flex items-center justify-center flex-col h-[90vh]">
                  <div className="py-6 flex items-center flex-col">
                     <h1 className="md:text-9xl text-5xl font-bold overflow-hidden text-center font-instrument-sans">
                        <SlideIn>
                           MUHAMAD <br />
                           RAUL IQBAL
                        </SlideIn>
                     </h1>
                  </div>
                  <Transition viewport={{ once: true }}>
                     <p className="text-secondary text-center md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
                        I am a developer and designer who has a passion for
                        building responsive, cool looking, and easy to visit
                        website applications.
                     </p>
                  </Transition>
                  <Transition viewport={{ once: true }}>
                     <Link
                        href={"#contact"}
                        className="px-5 py-3 mt-4 rounded-full border border-white/50 flex items-center gap-4 group"
                     >
                        <TextReveal>Let&apos;s talk</TextReveal>
                        <ArrowRight
                           size={20}
                           className="group-hover:rotate-90 transition-transform"
                        />
                     </Link>
                  </Transition>
               </div>
               <Transition
                  viewport={{ once: true }}
                  className="justify-between hidden md:flex w-full px-6"
               >
                  <p className="text-lg font-medium">
                     BASED IN BEKASI
                     <span className="text-white/40">, INDONESIA</span>
                  </p>
                  <p className="text-lg font-medium">
                     FRONT-END DEVELOPER{" "}
                     <span className="text-white/40">+ UI DESIGNER</span>
                  </p>
               </Transition>
            </div>
         )}
      </section>
   );
}
