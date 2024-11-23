"use client";
import React from "react";
import SmoothScroll from "./SmoothScroll";
import { ContextProvider } from "@/utils/context";
import { Cursor } from "./Cursor";

export default function Provider({
   children,
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <div>
         <SmoothScroll>
            <ContextProvider>
               <Cursor />
               {children}
            </ContextProvider>
         </SmoothScroll>
      </div>
   );
}
