"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import wholesketch from "../../public-img/wholesketch.jpg";
import ProgressCard from "../ProgressCard";

export default function AnimatedHero() {
  // const titleRef = useRef(null);

  // useEffect(() => {
  //   const lines = titleRef.current.querySelectorAll("span");

  //   gsap.from(lines, {
  //     y: 100,
  //     opacity: 0,
  //     duration: 1.2,
  //     stagger: 0.2,
  //     ease: "power3.out",
  //   });
  // }, []);

  return (
    <section className="relative min-h-screen bg-[#f7f3eb] overflow-hidden">
  {/* texture overlay */}
  <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

  <div className="relative z-10 max-w-10xl mx-auto px-8 py-24 grid grid-cols-2 gap-20">
    
    {/* LEFT SIDE */}
    <div>
      <p className="tracking-[0.3em] text-sm mb-6">
        IMAGINING ARCHITECTURE
      </p>

      <h1 className="text-7xl leading-[0.9] font-bold">
        SPACES <br />
        MADE <br />
        HUMAN
      </h1>

      <p className="mt-8 text-black/60 max-w-md">
        Architecture rooted in material, atmosphere,
        and physical experience.
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-black/20" />

      <div className="space-y-20">
        <ProgressCard
          number="01"
          title="Concept"
          image="/sketch.jpg"
          rotate="-rotate-3"
        />

        <ProgressCard
          number="02"
          title="Development"
          image="/model.jpg"
          rotate="rotate-2"
        />

        <ProgressCard
          number="03"
          title="Final Form"
          image="/final.jpg"
          rotate="-rotate-2"
        />
      </div>
    </div>

  </div>
</section>
  );
}