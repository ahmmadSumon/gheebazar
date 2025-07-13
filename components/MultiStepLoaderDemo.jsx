"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
   {
    text: "Collecting fresh cow milk",
  },
  {
    text: "Boiling and churning with care",
  },
  {
    text: "Separating pure desi ghee",
  },
  {
    text: "Lab testing for purity",
  },
  {
    text: "Filling glass jars",
  },
  {
    text: "Sealing and packing",
  },
  {
    text: "Preparing for delivery",
  },
  {
    text: "Your ghee is on the way!",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full my-10 flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        onClick={() => setLoading(true)}
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3 font-semibold text-[#2E8B57] border-2 border-[#2E8B57] bg-white hover:bg-[#2E8B57] hover:text-white transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]   hover:shadow-transparent active:scale-95 cursor-pointer"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}>
        Start Ghee Journey
      </button>
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}>
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
