"use client";

import { Project } from "@/utils/interfaces";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useCursorVariants } from "@/utils/context";
import Filters from "./ui/Filter";
import { ProjectsProvider, useProjects } from "@/utils/projectContext";
import { SectionHeading, TextReveal } from "./ui/Typography";
import { SlideIn, Transition } from "./ui/Transition";
import { useMediaQuery } from "@/utils/useMediaQuery";
import Link from "next/link";

interface ProjectProps {
   data: Project[];
}

export default function Projects({ data }: ProjectProps) {
   return (
      <ProjectsProvider data={data}>
         <section className="md:px-10 px-4 relative" id="projects">
            <SectionHeading className="md:pl-16">
               <SlideIn className="text-white/40">Selected</SlideIn>
               <br />
               <SlideIn>works</SlideIn>
            </SectionHeading>
            <Filters />
            <ProjectContainer />
         </section>
      </ProjectsProvider>
   );
}

const ProjectContainer = () => {
   const { filteredProjects, setSingleProject } = useProjects();
   const [showMore, setShowMore] = useState(false);
   // const [showDialog, setShowDialog] = useState(false);

   const isMobile = useMediaQuery("(max-width: 768px)");

   const numProjectToShow = isMobile ? 6 : 8;

   return (
      <AnimatePresence>
         <Transition>
            <motion.div
               layout
               className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3"
            >
               {filteredProjects
                  .slice(
                     0,
                     showMore ? filteredProjects.length : numProjectToShow
                  )
                  .map((project, index) => (
                     <Transition
                        transition={{ delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        key={project.id}
                        onClick={() => {
                           setSingleProject(project);
                        }}
                     >
                        <Card image={`/images/work/${project.image}`} id={project.id} liveurl={project.liveurl} githuburl={project.githuburl} title={project.title} category={project.category} description={project.description}  />
                     </Transition>
                  ))}
            </motion.div>
         </Transition>
        
      </AnimatePresence>
   );
};

const Card = ({ title, image, liveurl, category }: Project) => {
   const [hover, setHover] = useState(false);
   const { setVariant } = useCursorVariants();

   const mouseEnter = () => {
      setHover(true);
      setVariant("PROJECT");
   };
   const mouseLeave = () => {
      setHover(false);
      setVariant("DEFAULT");
   };

   return (
      <motion.div
         layout
         className="relative rounded-xl md:rounded-3xl overflow-hidden  bg-secondary/30 p-4 md:p-6 group"
         onMouseEnter={mouseEnter}
         onMouseLeave={mouseLeave}
      >
         <div className="absolute top-2 right-2 w-full h-full flex justify-end md:hidden">
            <div className="bg-white size-8 rounded-full text-black grid place-items-center">
               <ArrowUpRight size={20} />
            </div>
         </div>
         <Link
            href={liveurl}
            target="_blank"
            className="flex flex-col gap-4 md:gap-8"
         >
            <div className="overflow-hidden rounded-xl md:rounded-2xl">
               <Image
                  src={image}
                  width={500}
                  height={500}
                  alt={title}
                  className="object-cover h-full md:h-[35rem] w-full object-center  group-hover:scale-110 transition duration-500 ease-out"
                  unoptimized
               />
            </div>
            <div className="relative ">
               <motion.div
                  animate={{ y: hover ? -10 : 0 }}
                  className="flex justify-between items-center max-md:hidden"
               >
                  <p className="text-sm md:text-xl uppercase tracking-wider font-semibold max-md:opacity-0">
                     {title}
                  </p>
                  <button className="flex gap-2 items-center justify-center max-md:px-4">
                     <TextReveal className="max-md:text-sm">Visit</TextReveal>
                     <span className="bg-black text-white/80 rounded-full p-1 z-10">
                        <ArrowUpRight className="size-4 md:size-6" />
                     </span>
                  </button>
               </motion.div>
               <div className="overflow-hidden max-md:hidden">
                  <motion.p
                     initial={{ y: 0, opacity: 0 }}
                     animate={{ y: hover ? -10 : 0, opacity: hover ? 1 : 0 }}
                     className="absolute text-white/50"
                  >
                     {category}
                  </motion.p>
               </div>
            </div>
         </Link>
      </motion.div>
   );
};
