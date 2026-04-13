"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import wholesketch from "../../public-img/wholesketch.jpg";

export default function AnimatedHero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const lines = titleRef.current.querySelectorAll("span");

    gsap.from(lines, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="h-screen relative flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={wholesketch}
        alt="background"
        fill
        priority
        className="object-cover hover:scale-105 transition duration-700"
        quality={70}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative text-center max-w-2xl z-10">
    
        <h1
          ref={titleRef}
          className="hero-title    tracking-tight leading-[1.1]"
        >
          <span className="block font-[clash]  font-bold text-8xl  tracking-tight leading-[1.05]">Where Vision Meets <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
    Structure
  </span></span>
          <span className="text-lg md:text-xl text-gray-300 font-semibold font-satoshi">We turn ideas into timeless architectural experiences.</span>
        </h1> 
      </div>
    </section>
  );
}