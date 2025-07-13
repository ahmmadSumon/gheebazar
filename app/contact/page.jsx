'use client'

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

export default function ContactUs() {
  return (
    <motion.section
      className="bg-gradient-to-b from-yellow-50 to-white dark:from-zinc-800 dark:to-zinc-900 py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-20">
        {/* Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2E8B57] dark:text-white">
            Let’s Talk!
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed max-w-md">
            Whether you have a question about our ghee, need assistance, or just want to share feedback — we’re here to help.
          </p>

          <div className="space-y-4 text-base">
            <ContactInfo
              icon={<FaPhone className="text-yellow-600 text-xl" />}
              label="Phone"
              value="+880 1234-567890"
            />
            <ContactInfo
              icon={<FaEnvelope className="text-yellow-600 text-xl" />}
              label="Email"
              value="support@gheebazar.com"
            />
            <ContactInfo
              icon={<FaMapMarkerAlt className="text-yellow-600 text-xl" />}
              label="Address"
              value="Dhaka, Bangladesh"
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-xl space-y-6 border border-zinc-200 dark:border-zinc-700"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <FormField label="Your Name" name="name" type="text" />
          <FormField label="Email Address" name="email" type="email" />
          <FormField label="Message" name="message" type="textarea" />

          <button
            type="submit"
            className="w-full rounded-full bg-[#2E8B57] text-white font-medium py-3 px-6 hover:bg-green-700 transition-all duration-300 shadow-md"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  )
}

// Contact Info Row
const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-start gap-4 text-zinc-700 dark:text-zinc-200">
    {icon}
    <div>
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{label}</p>
      <p>{value}</p>
    </div>
  </div>
)

// Reusable Input/Textarea Field
const FormField = ({ label, name, type = "text" }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={name}
        name={name}
        rows={5}
        className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />
    )}
  </div>
)
