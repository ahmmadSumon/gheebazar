// app/about/page.tsx
"use client";

import React from "react";
import AboutUs from "../../components/AboutUs";
import WhyUs from "../../components/WhyUs";
import { TextGenerateEffectDemo } from "../../components/TextGenerateEffectDemo";
import { MultiStepLoaderDemo } from "../../components/MultiStepLoaderDemo";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <AboutUs />
        <div className="" >
            
               <h2 className="text-center font-extrabold text-5xl py-10 leading-tightfont-bold text-[#264b17] dark:text-white">
                  why <span className="text-yellow-600">Ghee Bazar</span>
                </h2>
              <div className="max-w-7xl mx-auto my-10">
                <TextGenerateEffectDemo/>
                <MultiStepLoaderDemo/>
                
              </div>
               <WhyUs/>
            </div>
      </section>
    </main>
  );
};

export default AboutPage;
