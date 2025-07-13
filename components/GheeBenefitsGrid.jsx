'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Good For Heart",
    description:
      "A2 Desi Ghee contains Vitamin K2, which maintains an unrestricted flow of blood and a healthy balance of cholesterol for a healthy heart.",
    image: "/heart.png",
  },
  {
    title: "Rich in Nutrients",
    description:
      "Swaarnim's Vedic ghee is enriched with calcium, vitamins, proteins, and OMEGA 3 & OMEGA 6 fatty acids, nourishing all the tissues.",
    image: "/salad.webp",
  },
  {
    title: "For Healthy Gut",
    description:
      "A2 Ghee is rich in naturally-occurring short-chain fatty acids and CLA that improve gut health, regulate metabolism, and help you maintain weight.",
    image: "/stomach.webp",
  },
  {
    title: "Lower Cholesterol",
    description:
      "According to Ayurveda, ghee is rich in fatty acids that support a healthy cardiovascular system and reduce unhealthy cholesterol levels.",
    image: "/cholesterol.webp",
  },
]

// Animation variants for parent and children
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function GheeBenefitsGrid() {
  return (
    <section className="bg-yellow-50 dark:bg-zinc-800 py-10 px-6">
<motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {benefits.map((item, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-col items-center text-center dark:bg-zinc-900 p-6 rounded-2xl shadow hover:shadow-md transition"
          >
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold text-zinc-800 dark:text-white mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}
