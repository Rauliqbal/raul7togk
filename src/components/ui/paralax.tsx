import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Paralax() {
   const container = useRef<HTMLDivElement | null>(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   });

   const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "30vh"]);

   return (
      <div ref={container} className=" overflow-hidden">
         <motion.div
            style={{ y }}
            className="relative w-[30rem]  aspect-[3/4]  h-full mx-auto "
         >
            <Image
               src="/images/me.jpg"
               fill
               alt="image"
               className="object-cover"
            />
         </motion.div>
      </div>
   );
}
