"use client";
import React from "react";
import Parallax from "./ui/Parallax";
import { SectionHeading } from "./ui/Typography";
import { SlideIn, Transition } from "./ui/Transition";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
   return (
      <section id="contact" className="px-4 md:px-8 relative text-center">
         <span className="blob absolute top-[20%] -right-40 rotate-90 w-1/3 h-5/6 blur-[100px] -z-10" />

         <Transition className="flex justify-center ">
            <SectionHeading className="text-center">
               <SlideIn className="text-white/40">LET&apos;S WORK</SlideIn>
               <br />
               <SlideIn>TOGETHER</SlideIn>
            </SectionHeading>
         </Transition>

         <Link
            href="/contact"
            className="btn bg-white hover:bg-black hover:text-white ring-2 ring-white text-black "
         >
            contact now
         </Link>

         <Transition className="flex flex-col justify-center  max-w-[60rem] mt-14 mx-auto">
            <p className="text-base md:text-3xl font-bold tracking-wide leading-relaxed uppercase text-center   font-inter-thin">
               I&apos;M AN DEVELOPER AND INNOVATIVE DESIGNER. MY PASSION FOR
               MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND INTUITIVE DESIGN
               IS EVIDENT IN MY WORK.
            </p>
         </Transition>
      </section>
   );
}
