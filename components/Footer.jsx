// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-t border-gray-200 dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Ghee Bazar Info */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-zinc-800 dark:text-white">Ghee Bazar</h2>
          <p className="text-sm leading-relaxed">
            Bringing you the purest, traditionally-made ghee directly from trusted farms. Experience health, taste, and tradition in every drop.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-zinc-800 dark:text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-zinc-800 dark:text-white">Contact</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              <span>support@gheebazar.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-zinc-800 dark:text-white">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 dark:bg-zinc-800 text-sm text-center py-4 border-t border-gray-300 dark:border-zinc-700">
        © {new Date().getFullYear()} Ghee Bazar. All rights reserved.
      </div>
    </footer>
  );
}
