import React from "react";
import { ParallaxText } from "./ui/ScrollVelocity";
import { SKILLS } from "@/utils/data";

export default function VelocityText() {
   return (
      <section id="skills">
         <ParallaxText baseVelocity={-5}>
            {SKILLS.map((skill, index) => (
               <span
                  key={index}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
               >
                  {skill.name} •
               </span>
            ))}
         </ParallaxText>
         <ParallaxText baseVelocity={5}>
            {SKILLS.map((skill, index) => (
               <span
                  key={index}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
               >
                  {skill.name} •
               </span>
            ))}
         </ParallaxText>
         <ParallaxText baseVelocity={-5}>
            {SKILLS.map((skill, index) => (
               <span
                  key={index}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
               >
                  {skill.name} •
               </span>
            ))}
         </ParallaxText>
      </section>
   );
}
