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
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative text-center max-w-2xl z-10">
        
        <p className="text-sm tracking-widest uppercase mb-4">
          Imaginiring Architecture 
        </p>

        <h1
          ref={titleRef}
          className="hero-title text-5xl md:text-7xl  leading-tight mb-6"
        >
          <span className="block font-[Bungee]">Where Vision Meets Structure</span>
          <span className="block text-xl ">We turn ideas into timeless architectural experiences.</span>
        </h1>

        <p className="text-gray-300 mb-8">
          Minimal. Functional. Timeless.
        </p>

      </div>
    </section>
  );
}