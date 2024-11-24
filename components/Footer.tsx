import Link from "next/link";
import React from "react";

export default function Footer() {
   const date = new Date();

   return (
      <footer className="px-4 md:px-8">
         <p className="text-[14vw] leading-none mx-auto text-center font-bold font-instrument-sans">
            RAULIQBAL
         </p>
         <div className="flex items-center justify-between py-8">
            <div>
               <p>&copy; {`${date.getFullYear()} RAULIQBAL`}</p>
            </div>

            <Link href={"/"}>GO BACK TO TOP</Link>
         </div>
      </footer>
   );
}
