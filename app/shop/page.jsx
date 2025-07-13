// app/shop/page.tsx or app/(your-path)/page.tsx
"use client";

import React from "react";
import { CanvasRevealEffectDemo } from "../../components/CanvasRevealEffectDemo";
import GheeBenefitsGrid from "../../components/GheeBenefitsGrid";
import { TextGenerateEffectDemo } from "../../components/TextGenerateEffectDemo";
import { MultiStepLoaderDemo } from "../../components/MultiStepLoaderDemo";
import WhyUs from "../../components/WhyUs";

const ShopPage = () => {
  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-zinc-900 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2E8B57] dark:text-white mb-4">
          Explore Our <span className="text-yellow-600">Pure Ghee</span> Collection
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 text-base max-w-2xl mx-auto">
          Handcrafted desi ghee made with love and tradition — straight from rural farms to your kitchen. Choose your favorite from our curated selection.
        </p>
      </div>

      {/* Products / Cards */}
      <CanvasRevealEffectDemo />

      {/* Optional CTA */}
      <div className="flex justify-center mt-14">
       <GheeBenefitsGrid/>
      </div>
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
  );
};

export default ShopPage;
