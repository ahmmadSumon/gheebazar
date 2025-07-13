"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
       
        <h2 className="text-center font-extrabold text-3xl md:text-5xl py-10 leading-tight text-[#264b17] dark:text-white">
          What <span className="text-yellow-600">Ghee Bazar</span> Customers Are Saying
        </h2>
      <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
      <InfiniteMovingCards items={reviews} direction="left" speed="slow" />
    </div>
  );
}

const reviews = [
  {
    quote: "Absolutely loved the desi ghee! Pure, aromatic, and nostalgic.",
    name: "Rahima Khatun",
    title: "Verified Buyer, Dhaka",
    rating: 5,
  },
  {
    quote: "The flavor and texture are unmatched. A must-try!",
    name: "Md. Rafiq",
    title: "Restaurant Owner, Sylhet",
    rating: 5,
  },
  {
    quote: "Safe for kids and feels truly natural. Thank you Ghee Bazar!",
    name: "Tanjina Akter",
    title: "Mother & Homemaker",
    rating: 4,
  },
  {
    quote: "Timely delivery and premium packaging. Will buy again.",
    name: "Shahriar Hasan",
    title: "Fitness Enthusiast, Chittagong",
    rating: 5,
  },
  {
    quote: "Golden and fresh—reminds me of homemade ghee!",
    name: "Afsana Jahan",
    title: "Food Blogger, Rajshahi",
    rating: 5,
  },
];
