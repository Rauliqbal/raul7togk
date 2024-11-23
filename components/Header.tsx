"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { SocialMedia } from "@/utils/interfaces";
import { menu } from "@/utils/animation";
import Navlink from "./Navlink";
import { TextReveal } from "./ui/Typography";
import { Transition } from "./ui/Transition";
import Link from "next/link";

interface HeaderProps {
   social: SocialMedia[];
}
export default function Header({ social }: HeaderProps) {
   const [isActive, setIsActive] = useState(false);
   const isMobile = useMediaQuery("(max-width:768px)");

   return (
      <motion.div
         initial={{
            height: isActive ? "100%" : "0",
         }}
         animate={{
            height: isActive ? (isMobile ? "100%" : "94%") : "0",
         }}
         className="fixed top-0 md:top-12 md:right-12 right-0 z-20"
      >
         <motion.div
            className="md:w-[480px] w-full h-full bg-black relative rounded-3xl"
            variants={menu(isMobile)}
            animate={isActive ? "open" : "closed"}
            initial="closed"
         >
            <AnimatePresence>
               {isActive && (
                  <Navlink social={social} setIsActive={setIsActive} />
               )}
            </AnimatePresence>
         </motion.div>
         <Button
            isActive={isActive}
            toggleMenu={() => {
               setIsActive(!isActive);
            }}
         />
      </motion.div>
   );
}

function Button({
   isActive,
   toggleMenu,
}: {
   isActive: boolean;
   toggleMenu: () => void;
}) {
   return (
      <>
         <div className="fixed md:top-10 top-6 md:left-8 left-6 z-30 hover:text-white/80 text-white/40">
            <Transition>
               <Link href="/">
                  <TextReveal className="font-semibold font-instrument-sans">
                     RAULIQBAL
                  </TextReveal>
               </Link>
            </Transition>
         </div>
         <div className="absolute md:top-0 top-4 right-4 md:right-0 w-[100px] h-10 rounded-full overflow-hidden cursor-pointer">
            <motion.div
               className="relative w-full h-full"
               animate={{ top: isActive ? "-100%" : "0%" }}
               transition={{
                  duration: 0.5,
                  type: "tween",
                  ease: [0.76, 0, 0.24, 1],
               }}
            >
               <motion.div
                  className="bg-gradient-to-br from-violet-400 to-primary h-full w-full grid place-items-center text-white"
                  onClick={() => {
                     toggleMenu();
                  }}
               >
                  <TextReveal>Menu</TextReveal>
               </motion.div>
               <motion.div
                  className="bg-black h-full w-full grid place-items-center"
                  onClick={() => {
                     toggleMenu();
                  }}
               >
                  <TextReveal>Close</TextReveal>
               </motion.div>
            </motion.div>
         </div>
      </>
   );
}
