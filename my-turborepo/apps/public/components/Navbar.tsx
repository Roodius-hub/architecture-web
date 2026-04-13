"use client"
import AnimatedNavbarLogo from "./motionedcompo/AnimatedNavbarLogo"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion,  AnimatePresence } from "motion/react"

export default function Navbar() {
  const navigate = useRouter();
  const [open, setOpen] = useState(false); // ✅ mobile menu state

  const routeAndScroll = (id: string) => {
    setOpen(false); // ✅ close menu on click (important for mobile)

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">

      {/* Glass Navbar */}
      <div className="
        flex items-center justify-between 
        px-6 md:px-8 py-2
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        rounded-full
        bg-gradient-to-b from-white/20 to-white/5
        backdrop-blur-md
        border border-white/20
        shadow-[0_10px_40px_rgba(0,0,0,0.4)]
        w-[90%] md:w-auto
      ">

        {/* Logo */}
        <div className="
          transform-gpu transition-transform duration-200 ease-out 
          hover:scale-[1.02]
        ">
          <AnimatedNavbarLogo />
        </div>

        {/* ✅ Desktop Menu */}
        <div className="
          hidden md:flex 
          items-center gap-6 md:gap-8 
          text-gray-300 font-medium
        ">

          <div onClick={() => routeAndScroll("home")} className="cursor-pointer hover:text-white transition-colors duration-200">
            Home
          </div>

          <div onClick={() => routeAndScroll("about")} className="cursor-pointer hover:text-white transition-colors duration-200">
            About
          </div>

          <div onClick={() => routeAndScroll("projects")} className="cursor-pointer hover:text-white transition-colors duration-200">
            Projects
          </div>

          <div onClick={() => routeAndScroll("services")} className="cursor-pointer hover:text-white transition-colors duration-200">
            Services
          </div>

          <div onClick={() => routeAndScroll("contact")} className="cursor-pointer hover:text-white transition-colors duration-200">
            Contact
          </div>

        </div>

        {/* ✅ Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>

      </div>

      {/* ✅ Mobile Full Screen Menu */}
     <AnimatePresence>
        {open && (
          <motion.div
          initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
          className="
            absolute top-full mt-30 right-7
            w-52
            bg-white/10 backdrop-blur-md
            border border-white/20
            rounded-xl shadow-lg
            p-4 flex flex-col gap-4
            text-white text-sm
          ">

      <p onClick={() => routeAndScroll("home")}>Home</p>
      <p onClick={() => routeAndScroll("about")}>About</p>
      <p onClick={() => routeAndScroll("projects")}>Projects</p>
      <p onClick={() => routeAndScroll("services")}>Services</p>
      <p onClick={() => routeAndScroll("contact")}>Contact</p>

      <button
        onClick={() => setOpen(false)}
        className="absolute top-6 right-6 text-3xl"
      >
        ✕
      </button>

    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}