import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Testimonials from "@/components/testimonials";
import {
   HoverImageLink,
   ParallaxText,
   SectionHeading,
   SlideIn,
   TextReveal,
   Transition,
} from "@/components/ui";

import Experience from "@/components/experience";
import { ContactUs } from "@/components/ContactUs";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ScrollText } from "@/components/scroll-text";
import { PROJECTS, SOCIAL_MEDIA } from "@/utils/data";
import Service from "@/components/Service";

export default async function Home() {
   return (
      <main className="relative">
         <Transition className="fixed md:top-8 top-6 md:left-8 left-6 z-30 hover:text-white/80 text-white/40">
            <Link href="/">
               <TextReveal className="font-semibold ">Rauliqbal</TextReveal>
            </Link>
         </Transition>
         <Header social={SOCIAL_MEDIA} />
         <Hero />
         <ScrollText />
         <Projects data={PROJECTS} />
         <About />
         <Service />

         {/*
         <Experience timeline={timeline} /> */}
         {/* ===SKILLS SECTION=== */}
         {/* <section id="skills">
            <ParallaxText baseVelocity={-5}>
               {skills
                  .sort((a, b) => a.sequence - b.sequence)
                  .map((skill) =>
                     skill.enabled ? (
                        <span
                           key={skill._id}
                           className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                        >
                           {skill.name} •
                        </span>
                     ) : null
                  )}
            </ParallaxText>
            <ParallaxText baseVelocity={5}>
               {skills
                  .sort((a, b) => a.sequence - b.sequence)
                  .map((skill) =>
                     skill.enabled ? (
                        <span
                           key={skill._id}
                           className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                        >
                           {skill.name} •
                        </span>
                     ) : null
                  )}
            </ParallaxText>
            <ParallaxText baseVelocity={-5}>
               {skills
                  .sort((a, b) => a.sequence - b.sequence)
                  .map((skill) =>
                     skill.enabled ? (
                        <span
                           key={skill._id}
                           className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                        >
                           {skill.name} •
                        </span>
                     ) : null
                  )}
            </ParallaxText>
         </section> */}
         {/* ===SERVICES SECTION=== */}

         {/* ===PROJECTS SECTION=== */}

         {/* ===TESTIMONIALS SECTION=== */}
         {/* <section className="py-20 relative" id="testimonials">
            <span className="blob size-1/2 absolute -top-20 left-0 blur-[100px] -z-10" />
            <SectionHeading className="md:pl-28">
               <SlideIn className="text-white/40">What Our</SlideIn> <br />
               <SlideIn className="">Clients Say</SlideIn>
            </SectionHeading>
            <Testimonials data={testimonials} speed="normal" pauseOnHover />
            <Testimonials
               data={testimonials}
               pauseOnHover
               speed="normal"
               direction="left"
            />
         </section> */}

         {/* ===CONTACT US=== */}
         <div
            className="rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden"
            id="contact"
         >
            {/* <ContactUs
               email={email}
               about={about}
               social_handle={social_handles}
            /> */}
         </div>
      </main>
   );
}
