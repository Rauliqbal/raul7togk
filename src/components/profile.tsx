"use client";

import React from "react";
import Paralax from "./ui/paralax";

export default function Profile() {
   return (
      <div>
         <div className="flex justify-center my-10">
            <p className="text-[7.5vw] uppercase text-center max-w-[50vw] leading-none">
               MORE ABOUT <br />
               RAUL IQBAL
            </p>
         </div>
         <Paralax />
         <div className="flex flex-col justify-center my-10 max-w-[50vw] mx-auto">
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
      </div>
   );
}
