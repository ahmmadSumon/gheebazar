import Image from "next/image";

import HeroSection from "../components/HeroSection";
import { CanvasRevealEffectDemo } from "../components/CanvasRevealEffectDemo";
import WhyUs from "../components/WhyUs";
import { LampDemo } from "../components/Lamp";
import { TextGenerateEffectDemo } from "../components/TextGenerateEffectDemo";
import { MultiStepLoaderDemo } from "../components/MultiStepLoaderDemo";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCardsDemo";
import AboutUs from "../components/AboutUs";
import GheeBenefitsGrid from "../components/GheeBenefitsGrid";
import CartSheet from "@/components/CartSheet";

export default function Home() {
  return (
    <div >
     

    <div className="bg-[url('/hero-bg.svg')] bg-cover bg-center">
     <HeroSection/>
    </div>
    <div className="hidden md:block">
 <GheeBenefitsGrid/>
    </div>
   
    <div className="bg-[url('/products.svg')] bg-no-repeat bg-[#FDFCEF] rounded-b-[410px]">
    <CanvasRevealEffectDemo/>
    </div>
      <div className="block md:hidden">
 <GheeBenefitsGrid/>
    </div>
<div className="" >
    
       <h2 className="text-center font-extrabold text-5xl py-10 leading-tightfont-bold text-[#264b17] dark:text-white">
          why <span className="text-yellow-600">Ghee Bazar</span>
        </h2>
      <div className="max-w-6xl mx-auto my-10">
        <TextGenerateEffectDemo/>
        <MultiStepLoaderDemo/>
      </div>
       <WhyUs/>
    </div>
   
    <div className="bg-[url('/customers.svg')] bg-cover bg-center"> 
      <InfiniteMovingCardsDemo/>
    </div>
  <AboutUs/>
  <CartSheet/>
    
    
    </div>
  );
}
