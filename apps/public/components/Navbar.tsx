"use client";

import AnimatedNavbarLogo from "./motionedcompo/AnimatedNavbarLogo";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  House,
  Building2,
  FolderKanban,
  PencilRuler,
  Send,
} from "lucide-react";

function NavItem({
  icon,
  text,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="
      relative overflow-hidden
      px-4 py-2
      rounded-full
      border border-blue-500
      text-blue-500
      cursor-pointer
      group
      "
    >
      {/* Animated Background */}
      <span
        className="
        absolute inset-0
        bg-black
        origin-left
        scale-x-0
        transition-transform
        duration-500
        ease-out
        group-hover:scale-x-100
        "
      />

      {/* Content */}
      <span
        className="
        relative z-10
        flex items-center gap-2
        font-semibold
        transition-colors
        duration-500
        group-hover:text-white
        "
      >
        {icon}
        {text}
      </span>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const routeAndScroll = (id: string) => {
    setOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Navbar */}
      <div
        className="
        flex items-center justify-between
        px-6 md:px-8 py-2
        fixed top-6 left-1/2 -translate-x-1/2 z-50

        rounded-full
        bg-gradient-to-b from-white/20 to-white/5
        backdrop-blur-md
        border border-white/20
        shadow-[0_10px_40px_rgba(0,0,0,0.15)]

        w-[95%] md:w-auto
      "
      >
        {/* Logo */}
        <div
          className="
          mr-5
          transform-gpu
          transition-transform
          duration-300
          hover:scale-[1.03]
        "
        >
          <AnimatedNavbarLogo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <NavItem
            icon={<House size={18} />}
            text="Home"
            onClick={() => routeAndScroll("home")}
          />

          <NavItem
            icon={<Building2 size={18} />}
            text="About"
            onClick={() => routeAndScroll("about")}
          />

          <NavItem
            icon={<FolderKanban size={18} />}
            text="Projects"
            onClick={() => routeAndScroll("projects")}
          />

          <NavItem
            icon={<PencilRuler size={18} />}
            text="Services"
            onClick={() => routeAndScroll("services")}
          />

          <NavItem
            icon={<Send size={18} />}
            text="Contact"
            onClick={() => routeAndScroll("contact")}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
            fixed
            top-24
            right-5

            w-64
            p-6

            rounded-2xl
            bg-white/20
            backdrop-blur-xl
            border border-white/30
            shadow-xl

            flex flex-col gap-4
          "
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <div onClick={() => routeAndScroll("home")}>Home</div>
            <div onClick={() => routeAndScroll("about")}>About</div>
            <div onClick={() => routeAndScroll("projects")}>Projects</div>
            <div onClick={() => routeAndScroll("services")}>Services</div>
            <div onClick={() => routeAndScroll("contact")}>Contact</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}