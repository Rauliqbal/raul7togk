"use client";
import React from "react";
import Parallax from "./ui/Parallax";
import { SectionHeading } from "./ui/Typography";
import { SlideIn, Transition } from "./ui/Transition";
import Image from "next/image";

export default function About() {
   return (
      <section className="px-4 md:px-8 relative">
         <span className="blob absolute top-[20%] left-0 w-1/3 h-5/6 blur-[100px] -z-10" />

         <Transition className="flex justify-center my-8">
            <SectionHeading className="text-center">
               <SlideIn className="text-white/40">MORE ABOUT</SlideIn>
               <br />
               <SlideIn>RAUL IQBAL</SlideIn>
            </SectionHeading>
         </Transition>
         <Parallax background="/images/me.jpg" />
         <div className="md:hidden overflow-hidden rounded-2xl h-80 max-w-96 mx-auto">
            <Image
               src="/images/me.jpg"
               alt="Im Rauliqbal"
               className=" w-full h-full  object-cover transition hover:scale-105 duration-500 ease-out"
               width={500}
               height={500}
            />
         </div>
         <Transition className="flex flex-col justify-center my-10 max-w-[60rem]  mx-auto">
            <p className="text-base md:text-3xl font-bold tracking-wide leading-relaxed uppercase text-center   font-inter-thin">
               I&apos;M AN FRONT-END DEVELOPER AND UI/UX DESIGNER. MY PASSION IS
               BUILDING RESPONSIVE WEBSITE APPLICATIONS THAT LOOK COOL AND ARE
               EASY FOR USERS TO VISIT.
            </p>

            <p className="mt-10  md:text-2xl text-white/40 tracking-wide leading-relaxed  text-center font-inter-thin">
               I&apos;m a Front-End Developer who allows me to bring my creative
               vision to life. I love finding <i>“unexpected solutions”</i> and
               believe that with the right perspective, design can enhance the
               human experience.
            </p>
         </Transition>
      </section>
   );
}
