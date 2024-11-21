import { Sparkle } from "lucide-react";
import Marquee from "./ui/marquee";

export function ScrollText() {
   return (
      <section className="overflow-hidden px-6">
         <div className="relative flex flex-col items-center justify-center overflow-hidden py-3 bg-gradient-to-br from-primary to-indigo-400 -rotate-1">
            <Marquee className="[--duration:20s]">
               <span className="px-4 font-bold">WEB DEVELOPMENT</span>
               <Sparkle fill="#fff" size={20} />
               <span className="px-4 font-bold">UI/UX DESIGNER</span>
               <Sparkle fill="#fff" size={20} />
               <span className="px-4 font-bold">CREATIVE DIGITAL</span>
               <Sparkle fill="#fff" size={20} />
               <span className="px-4 font-bold">TECT ENTHUSIAST</span>
               <Sparkle fill="#fff" size={20} />
            </Marquee>
         </div>
      </section>
   );
}
