"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function BackgroundParallax() {
   const container = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   });
   const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

   return (
      <div
         ref={container}
         className="relative hidden md:flex items-center justify-center h-[80vh] overflow-hidden"
         style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
         <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
            <motion.div style={{ y }} className="relative w-full h-full">
               <Image
                  src="/images/bg-parallax.png"
                  fill
                  alt="image"
                  style={{ objectFit: "cover" }}
                  unoptimized
               />
            </motion.div>
         </div>
      </div>
   );
}
