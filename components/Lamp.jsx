"use client";
import React from "react";
import { motion } from "motion/react"; // or 'framer-motion'
import { LampContainer } from "../components/ui/lamp";
import Image from "next/image";

// Wrap Next.js Image with motion
const MotionImage = motion(Image);

export function LampDemo() {
  return (
    <LampContainer>
   
       <div className="mx-auto  flex max-w-7xl md:h-[100vh] flex-col flex-col-reverse items-center justify-center px-4 py-10 md:flex-row pt-[95vh] md:pt-[65vh]   md:px-8">
             <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-extrabold leading-tight text-[#264b17] md:text-7xl"
        >
          Pure Deshi Ghee
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-xl text-[#5A4635]"
        >
          Taste the warmth of 100&nbsp;% organic cow‑milk ghee, sourced
          directly from village farms and delivered to your door.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start"
        >
          <button className="rounded-full bg-[#2E8B57] px-8 py-3 font-semibold text-white transition hover:bg-[#276E48]">
            Shop&nbsp;Now
          </button>

          <button className="rounded-full border-2 border-[#2E8B57] px-8 py-3 font-semibold text-[#2E8B57] transition hover:bg-[#2E8B57] hover:text-white">
            Learn&nbsp;More
          </button>
        </motion.div>
      </motion.div>
        <div className="w-full md:w-1/2 text-center md:text-left">
  <MotionImage
        src="/ghee.png"
        alt="Lamp Demo"
        width={600}     // specify width and height for Next.js Image
        height={600}
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mx-auto mt-8 rounded-lg"
      />
        </div>
       </div>
     
    
      
    </LampContainer>
  );
}
