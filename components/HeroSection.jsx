// components/HeroSection.tsx
import Image from "next/image";
import { LampContainer } from "./ui/lamp";
import { LampDemo } from "./Lamp";

const HeroSection = () => {
  return (
    <section className=" ">
      <div className="mx-auto flex justify-center h-[94vh]  md:h-[94vh] items-center">
        <LampDemo/>
      </div>
    </section>
  );
};

export default HeroSection;
