import React from "react";
import { HoverImageLink, SectionHeading, SlideIn, Transition } from "./ui";
import { SERVICES } from "@/utils/data";

export default function Service() {
   return (
      <section className="px-2 relative" id="services">
         <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10" />
         <SectionHeading className="md:pl-16 overflow-hidden">
            <SlideIn className="text-white/40">Here&apos;s how</SlideIn> <br />
            <SlideIn>I can help you</SlideIn>
         </SectionHeading>
         <div className="mx-auto pt-10">
            {SERVICES.map((service, index) => (
               <Transition key={index}>
                  <HoverImageLink
                     heading={service.name}
                     href=""
                     price={service.charge}
                     imgSrc={service.image}
                     subheading={service.desc}
                  />
               </Transition>
            ))}
         </div>
         <Transition className="flex items-center py-10 md:hidden">
            <div className="p-4 rounded-full border border-white/50">
               <span>Discuss the project</span>
            </div>
         </Transition>
      </section>
   );
}
