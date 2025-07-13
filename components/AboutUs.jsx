'use client'

import Image from "next/image"
import { FaLeaf, FaHandsHelping, FaFlask } from "react-icons/fa"
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <motion.section
      className=" dark:bg-zinc-900 py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-extrabold text-[#264b17] dark:text-white mb-6">
            About <span className="text-yellow-600">Ghee Bazar</span>
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
            Ghee Bazar is your trusted source for pure, farm-fresh desi ghee made using traditional methods. Our mission is to revive heritage nutrition while supporting local farmers and ensuring 100% chemical-free, authentic products.
          </p>

          <p className="text-md text-zinc-500 dark:text-zinc-400 leading-relaxed ">
            Whether you're cooking, using it for rituals, or as a health supplement, we promise quality you can trust and taste you’ll love.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative w-full h-80 md:h-[500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/logo.png"
            alt="About Ghee Bazar"
            fill
            className="object-contain md:object-cover rounded-2xl"
          />
        </motion.div>
      </div>

      {/* Values Section */}
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5">
          {[
            {
              icon: <FaLeaf className="text-3xl text-yellow-600" />,
              title: "100% Natural",
              desc: "Our ghee is free from additives, preservatives, and chemicals.",
            },
            {
              icon: <FaHandsHelping className="text-3xl text-yellow-600" />,
              title: "Supporting Farmers",
              desc: "We source milk directly from rural farmers across Bangladesh.",
            },
            {
              icon: <FaFlask className="text-3xl text-yellow-600" />,
              title: "Traditional Method",
              desc: "Hand-churned and slow-cooked to preserve nutrients and taste.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {item.icon}
              <h4 className="text-lg font-semibold text-zinc-800 dark:text-white">
                {item.title}
              </h4>
              <p className="text-sm text-zinc-600 text-center dark:text-zinc-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3 mt-7 font-semibold text-[#2E8B57] border-2 border-[#2E8B57] bg-white hover:bg-[#2E8B57] hover:text-white transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-transparent active:scale-95 cursor-pointer"
          style={{
            boxShadow:
              "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
          }}
        >
          Shop Now
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
