"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar";
import { useState } from "react";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { GiBeachBag } from "react-icons/gi";
import Link from "next/link";
import CartSheet from "../components/CartSheet";

export function NavbarDemo() {
  const navItems = [
   
     {
      name: "SHOP",
      link: "/shop",
    },
    {
      name: "ABOUT US",
      link: "/about",
    },
    {
      name: "CONTACT",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const handleCallClick = () => {
  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent)

  const phoneNumber = "01751260010" // 🔁 Replace with your actual number

  if (isMobile) {
    window.location.href = `tel:${phoneNumber}`
  } else {
    window.open(`https://wa.me/88${phoneNumber}`, "_blank")
  }
}
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
             <div className="text-2xl text-[#2E8B57] cursor-pointer z-50"> <CartSheet/> </div>
           <div className="text-2xl text-[#2E8B57] z-50 cursor-pointer"> 
              <Link href="/account">
              <RiAccountPinCircleFill />
              </Link>
              </div>
           
          
          <button
  type="button"
   onClick={handleCallClick} // ✅ Add this
  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3 font-semibold text-[#2E8B57] border-2 border-[#2E8B57] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]  hover:text-white hover:shadow-transparent active:scale-95"
>
  <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2E8B57] opacity-0 transition-[width,height,opacity] duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100" />
  
  <svg
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="pointer-events-none absolute left-0 h-6 w-6 fill-current -translate-x-[120%] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-[7rem] group-hover:fill-white"
>
  <path
    d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
    fill="currentColor"
  />
</svg>


  <span className="relative z-[1] -translate-x-3 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer ">
    Make a Call
  </span>

  <svg
    viewBox="0 0 24 24"
    className="pointer-events-none absolute right-4 h-6 w-6 fill-current transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-[3rem] group-hover:fill-white"
  >
    <path d="M16.1716 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.1716 13H4v-2h12.1716Z" />
  </svg>
</button>

          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
              <div className="text-2xl text-[#2E8B57] cursor-pointer z-50"> <CartSheet/> </div>
            <div className="text-2xl text-[#2E8B57] z-50 cursor-pointer"> 
              <Link href="/account">
              <RiAccountPinCircleFill />
              </Link>
              </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>
         

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Login
              </NavbarButton>
             <button
  type="button"
  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-9 py-4 font-semibold text-lime-300 shadow-[0_0_0_2px_theme(colors.lime.300)] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-xl hover:text-neutral-900 hover:shadow-transparent active:scale-95"
>
  <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300 opacity-0 transition-[width,height,opacity] duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100" />
  
  <svg
    viewBox="0 0 24 24"
    className="pointer-events-none absolute left-0 h-6 w-6 fill-current -translate-x-[110%] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-[4rem] group-hover:fill-neutral-900"
  >
    <path d="M16.1716 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.1716 13H4v-2h12.1716Z" />
  </svg>

  <span className="relative z-[1] -translate-x-3 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3">
    Modern Button
  </span>

  <svg
    viewBox="0 0 24 24"
    className="pointer-events-none absolute right-4 h-6 w-6 fill-current transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-full group-hover:fill-neutral-900"
  >
    <path d="M16.1716 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.1716 13H4v-2h12.1716Z" />
  </svg>
</button>

            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
     
      {/* Navbar */}
    </div>
  );
}

