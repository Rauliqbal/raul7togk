"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type Parallax = {
   background: string;
};

export default function Parallax({ background }: Parallax) {
   const container = useRef<HTMLDivElement>(null);

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   });

   const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "20vh"]);
   return (
      <div ref={container} className="h-[50vh] overflow-hidden -mt-16">
         <motion.div
            style={{ y }}
            className="relative w-[30rem]  md:80 h-full mx-auto "
         >
            <Image
               src={background}
               width={500}
               height={500}
               alt="image"
               className="object-cover object-center w-full h-full"
            />
         </motion.div>
      </div>
   );
}
