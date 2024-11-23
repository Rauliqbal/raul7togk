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
      <div
         ref={container}
         className="hidden md:block h-[50vh] w-[30rem] mx-auto rounded-2xl overflow-hidden -mt-16"
      >
         <motion.div
            style={{ y }}
            className="relative w-[30rem]   h-full mx-auto "
         >
            <Image
               src={background}
               width={500}
               height={500}
               alt="image"
               className="object-cover rounded-2xl object-center w-full h-full"
               unoptimized
            />
         </motion.div>
      </div>
   );
}
