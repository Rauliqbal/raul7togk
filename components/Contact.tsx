"use client";
import React, { FormEvent, useState } from "react";
import { SectionHeading, TextReveal } from "./ui/Typography";
import { SlideIn, Transition } from "./ui/Transition";
import { sendMail } from "@/lib/send-mail";
import { Button } from "./ui/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [detail, setDetail] = useState("");
   const [isLoading, setIsLoading] = useState<boolean>(false);

   async function formContact(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setIsLoading(true);

      await sendMail({
         name: name,
         email: email,
         subject: subject,
         detail: detail,
      })
         .then(() => {
            toast.success("Message sent, and will be replied soon!");
            setName("");
            setEmail("");
            setSubject("");
            setDetail("");
            setIsLoading(false);
         })
         .catch((err) => {
            toast.error("Message failed to send, there is a problem");
         });
   }
   return (
      <section id="contact" className="px-4 md:px-8 relative text-center ">
         <ToastContainer
            position="top-right"
            theme="dark"
            closeOnClick
            draggable
            pauseOnFocusLoss
            pauseOnHover={false}
         />
         <span className="  blob absolute top-[20%] right-0 md:-right-40 rotate-90 w-1/3 h-5/6 blur-[100px] -z-10" />

         <Transition className="flex justify-center ">
            <SectionHeading className="text-center">
               <SlideIn className="text-white/40">LET&apos;S WORK</SlideIn>
               <br />
               <SlideIn>TOGETHER</SlideIn>
            </SectionHeading>
         </Transition>

         <Transition className="flex flex-col justify-center  max-w-[60rem]  mx-auto">
            <p className="text-base md:text-3xl font-bold tracking-wide leading-relaxed uppercase text-center   font-inter-thin">
               I&apos;M AN DEVELOPER AND INNOVATIVE DESIGNER. MY PASSION FOR
               MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND INTUITIVE DESIGN
               IS EVIDENT IN MY WORK.
            </p>
         </Transition>

         <div className="max-w-3xl mx-auto mt-14">
            <div>
               <form className="flex flex-col gap-4" onSubmit={formContact}>
                  <input
                     type="text"
                     placeholder="Name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     className="p-4 rounded-xl bg-slate-900/60 outline-none focus:ring-2 focus:ring-primary transition-all"
                     required
                  />

                  <input
                     type="email"
                     placeholder="Email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="p-4 rounded-xl bg-slate-900/60 outline-none focus:ring-2 focus:ring-primary transition-all"
                     required
                  />

                  <input
                     type="text"
                     placeholder="Subject"
                     value={subject}
                     onChange={(e) => setSubject(e.target.value)}
                     className="p-4 rounded-xl bg-slate-900/60 outline-none focus:ring-2 focus:ring-primary transition-all"
                     required
                  />
                  <textarea
                     value={detail}
                     onChange={(e) => setDetail(e.target.value)}
                     rows={4}
                     placeholder="Message"
                     className="p-4 rounded-xl bg-slate-900/60 outline-none focus:ring-2 focus:ring-primary transition-all"
                     required
                  />

                  <Button
                     type="submit"
                     className="btn btn-primary mt-4"
                     disabled={isLoading}
                  >
                     <TextReveal>
                        {isLoading ? "Loading..." : "Submit"}
                     </TextReveal>
                  </Button>
               </form>
            </div>
         </div>
      </section>
   );
}
