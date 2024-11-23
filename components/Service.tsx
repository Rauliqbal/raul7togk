import React from "react";
import { SectionHeading } from "./ui/Typography";
import { SlideIn, Transition } from "./ui/Transition";
import { SERVICES } from "@/utils/data";
import HoverImageLink from "./ui/HoverImage";

export default function Service() {
   return (
      <section className="px-2  relative" id="services">
         <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10" />
         <SectionHeading className="md:pl-16 overflow-hidden">
            <SlideIn className="text-white/40">services</SlideIn> <br />
            <SlideIn>that i can do</SlideIn>
         </SectionHeading>
         <div className="mx-auto pt-10">
            {SERVICES.map((service) => (
               <Transition key={service.id}>
                  <HoverImageLink
                     href="#contact"
                     heading={service.name}
                     imgSrc={`/images/${service.image}`}
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
