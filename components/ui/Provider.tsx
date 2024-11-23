"use client";
import React from "react";
import SmoothScroll from "./SmoothScroll";
import { ContextProvider } from "@/utils/context";

export default function Provider({
   children,
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <div>
         <SmoothScroll>
            <ContextProvider>{children}</ContextProvider>
         </SmoothScroll>
      </div>
   );
}
