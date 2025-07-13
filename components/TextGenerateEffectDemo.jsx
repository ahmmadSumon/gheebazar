"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = ` 100% Pure Desi Ghee.

Crafted from the milk of grass-fed cows, without any chemicals or preservatives.

At GheeBazar, we bring you lab-tested, traditionally made ghee — rich in aroma, flavor, and purity. 

Support local farmers. Taste the tradition. Live healthy.

`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
