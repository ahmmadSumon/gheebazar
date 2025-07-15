"use client"

import React from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect"
import { useCartStore } from "../store/cartStore" // <-- 👈 Import your Zustand store
import { toast } from "sonner"
export function CanvasRevealEffectDemo() {
  const cards = [
    {
      title: "GAWA GHEE",
      src: "/gawa.webp",
      price: 1200,
      discountPrice: 950,
      weight: 500,
      effectProps: { animationSpeed: 5.1, containerClassName: "bg-emerald-900" },
    },
    {
      title: "A2B GHEE",
      src: "/32.webp",
      price: 1400,
      discountPrice: 1090,
      weight: 500,
      effectProps: {
        animationSpeed: 3,
        containerClassName: "bg-black",
        colors: [
          [236, 72, 153],
          [232, 121, 249],
        ],
        dotSize: 2,
      },
    },
  ]

  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-4 px-8 py-5 lg:flex-row dark:bg-black max-w-7xl mx-auto w-full cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {cards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </motion.section>
  )
}

const Card = ({
  title,
  src,
  price,
  discountPrice,
  weight,
  effectProps,
}) => {
  const [hovered, setHovered] = React.useState(false)

  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = () => {
    const item = {
      id: `${title}-${weight}`,
      name: title,
      price: discountPrice,
      image: src,
      quantity: 1,
    }
    addToCart(item)
    toast.success(`${title} (${weight}g) added to cart 🛒`) // ✅ Toast using Sonner
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative h-[17rem] md:h-[22rem] w-[390px] md:w-[600px] overflow-hidden border border-black/20 p-4 dark:border-white/20"
    >
      <Image
        src={src}
        alt={title}
        fill
        className="absolute inset-0 z-0 h-full w-full object-cover"
        priority
      />

      <AnimatePresence>
        {hovered && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 h-full w-full"
            >
              <CanvasRevealEffect {...effectProps} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center"
            >
              <h2 className="mb-2 text-2xl font-extrabold text-white drop-shadow-lg">
                {title}
              </h2>

              <div className="mb-4 flex items-center gap-2">
                <span className="text-lg font-semibold text-white/70 line-through">
                  ৳{price}
                </span>
                <span className="text-2xl font-bold text-yellow-300">
                  ৳{discountPrice}
                </span>
                <span className="text-xl font-bold text-yellow-300 ml-2">
                  {weight}g
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className="rounded-full bg-[#2E8B57] px-6 py-2 font-semibold text-white shadow transition hover:bg-[#276E48] cursor-pointer"
              >
                Add&nbsp;to&nbsp;Cart
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CornerIcon position="-top-3 -left-3" />
      <CornerIcon position="-bottom-3 -left-3" />
      <CornerIcon position="-top-3 -right-3" />
      <CornerIcon position="-bottom-3 -right-3" />
    </div>
  )
}

const CornerIcon = ({ position }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`absolute h-6 w-6 text-black dark:text-white ${position}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)
