import React from "react";
import BackgroundParallax from "./ui/BacktroundParallax";
import { SlideIn, Transition } from "./ui/Transition";
import { SectionHeading } from "./ui/Typography";
import Image from "next/image";

export default function Motivation() {
   return (
      <section>
         <div className="grid lg:grid-cols-1 xl:grid-cols-3 md:gap-10 pb-20 px-4 md:px-8">
            <Transition className="col-span-1">
               <SectionHeading>
                  <SlideIn className="text-white/40">MY</SlideIn>
                  <br />
                  <SlideIn>MOTIVATION</SlideIn>
               </SectionHeading>
            </Transition>
            <div className="col-span-2">
               <Transition>
                  <p className="text-base md:text-3xl tracking-wide leading-relaxed    font-inter-thin">
                     More than a job, web design is an outlet for your vision.
                     You have the power to take an idea from concept to reality.
                     Your sites can tell a story,{" "}
                     <i>&quot;show off a brand&quot;</i>, or change lives. As
                     the web expands, so do the possibilities. You also have the
                     flexibility to work remotely or in a fun agency setting.
                     And nothing beats the rush of seeing your live sites in
                     action.
                  </p>
               </Transition>
               <Transition>
                  <p className="text-base md:text-3xl tracking-wide leading-relaxed  mt-8  font-inter-thin">
                     As a web designer, you get to blend art and technology to
                     create <i>&quot;digital experiences&quot;</i> that inform,
                     entertain, and inspire. Every day is different - one day
                     you may be sketching site layouts on paper, the next
                     you&apos;re coding up responsive page templates. Web design
                     keeps you on your toes!
                  </p>
               </Transition>
               <Transition className="font-yellow-tail text-4xl md:text-5xl pr-4 pb-4 mt-14">
                  Rauliqbal.
               </Transition>
            </div>
         </div>
         <BackgroundParallax />
         <div className="md:hidden overflow-hidden rounded-2xl h-80 max-w-96 mx-auto">
            <Image
               src="/images/bg-parallax.png"
               alt="Im Rauliqbal"
               className=" w-full h-full  object-cover transition hover:scale-105 duration-500 ease-out"
               width={500}
               height={500}
            />
         </div>
      </section>
   );
}
