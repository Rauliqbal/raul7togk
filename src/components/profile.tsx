"use client";

import React from "react";
import Paralax from "./ui/paralax";
import { SectionHeading, SlideIn } from "./ui";

export default function Profile() {
   return (
      <section className="px-4 md:px-8 relative">
         <span className="blob absolute top-[20%] left-0 w-1/3 h-5/6 blur-[100px] -z-10" />

         <div className="flex justify-center my-10">
            <SectionHeading className="md:pl-16 text-center">
               <SlideIn className="text-white/40">MORE ABOUT</SlideIn>
               <br />
               <SlideIn>RAUL IQBAL</SlideIn>
            </SectionHeading>
         </div>
         <Paralax />
         <div className="flex flex-col justify-center my-10 max-w-[60rem]  mx-auto">
            <p className="text-3xl font-bold tracking-wide leading-relaxed uppercase text-center  ">
               I&apos;M AN FRONT-END DEVELOPER AND UI/UX DESIGNER. MY PASSION IS
               BUILDING RESPONSIVE WEBSITE APPLICATIONS THAT LOOK COOL AND ARE
               EASY FOR USERS TO VISIT.
            </p>

            <p className="mt-10 text-2xl text-white/40 tracking-wide leading-relaxed  text-center">
               I&apos;m a Front-End Developer who allows me to bring my creative
               vision to life. I love finding “unexpected solutions” and believe
               that with the right perspective, design can enhance the human
               experience.
            </p>
         </div>

         <div className="h-screen"></div>
      </section>
   );
}
