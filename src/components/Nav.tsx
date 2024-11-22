"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { perspective, slideIn } from "@/utils/anim";
import { TextReveal } from "./ui";
import { ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { SocialMedia } from "@/utils/interfaces";

interface NavProps {
   setIsActive: Dispatch<SetStateAction<boolean>>;
   social: SocialMedia[];
}

const Nav = ({ setIsActive, social }: NavProps) => {
   const MotionLink = motion(Link);

   return (
      <div className="flex justify-between flex-col w-full  h-full px-10 pt-[100px] pb-[50px]">
         <div className="flex gap-2 flex-col">
            {navLinks.map((link, i) => {
               const { title, href } = link;
               return (
                  <div
                     key={i}
                     className="linkContainer"
                     onClick={() => setIsActive(false)}
                  >
                     <Link
                        href={href}
                        className="flex flex-wrap overflow-hidden"
                     >
                        <motion.div
                           variants={perspective}
                           custom={i}
                           initial="initial"
                           animate="enter"
                           whileHover="whileHover"
                           whileTap="whileHover"
                           exit="exit"
                           className="text-5xl text-white flex items-center justify-between"
                        >
                           <motion.span
                              variants={{
                                 initial: { x: -20 },
                                 whileHover: { x: 0 },
                              }}
                           >
                              <ArrowRight />
                           </motion.span>
                           <motion.span
                              variants={{
                                 initial: { x: 0 },
                                 whileHover: { x: 20 },
                              }}
                           >
                              {title}
                           </motion.span>
                        </motion.div>
                     </Link>
                  </div>
               );
            })}
         </div>
         <motion.div className="flex flex-wrap">
            {social.map((link, i) => {
               const { platform, url } = link;
               return (
                  <MotionLink
                     href={url}
                     className="w-1/2 mt-1 "
                     variants={slideIn}
                     custom={i}
                     initial="initial"
                     animate="enter"
                     exit="exit"
                     key={i}
                  >
                     <TextReveal>{platform}</TextReveal>
                  </MotionLink>
               );
            })}
         </motion.div>
      </div>
   );
};

export default Nav;

export const navLinks = [
   {
      title: "Home",
      href: "/",
   },
   {
      title: "Projects",
      href: "#projects",
   },
   {
      title: "About",
      href: "#about",
   },
   {
      title: "Services",
      href: "#services",
   },
   {
      title: "Contact",
      href: "#contact",
   },
];
