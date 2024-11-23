import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Motivation from "@/components/Motivation";
import Projects from "@/components/Project";
import ScrollText from "@/components/ScrollText";
import Service from "@/components/Service";
import VelocityText from "@/components/VelocityText";
import { EXPERIENCE, PROJECTS, SOCIAL_MEDIA } from "@/utils/data";

export default function Home() {
   return (
      <>
         <Header social={SOCIAL_MEDIA} />
         <Hero />
         <ScrollText />
         <Projects data={PROJECTS} />
         <About />
         <VelocityText />
         <Service />
         <Motivation />
         <Experience experience={EXPERIENCE} />
         <div className="h-screen"></div>
      </>
   );
}
