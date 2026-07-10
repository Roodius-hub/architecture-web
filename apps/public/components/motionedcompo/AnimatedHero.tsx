"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProgressCard from "../ProgressCard";
import { useAtom } from "jotai";
import { isDarkAtom } from "@/lib/Theme";

export default function AnimatedHero() {
    const titleRef = useRef<HTMLHeadingElement>(null);

    const line1 = "Designed "
    const line2 = "Walls"
    useEffect(() => {

    if (!titleRef.current) return;

    const letters = titleRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      {
        y: 120,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 2.2,
        ease: "power4.out",
      }
    );

  }, []);

  return (
    <section className="relative min-h-screen pt-20  rounded-2xl  mt-30 bg-[#f7f3eb]  dark:bg-[#161616] w-full">
  {/* need a bg -> texture overlay */}
  <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

  <div className="relative z-10 max-w-10xl mx-auto px-8 py-24 grid grid-cols-2 gap-20">
    
    {/* TEXT -> LEFT SIDE */}
    <div>
      <p className="tracking-[0.3em]  text-sm font-semibold mb-4 ml-3">
        IMAGINERING ARCHITECTURE
      </p>

      <h1
            ref={titleRef}
            className="text-7xl leading-[0.9] font-bowlby font-semibold overflow-hidden"
          >

            {/* LINE 1 */}
            <div>
              {line1.split("").map((char, i) => (
                <span
                  key={i}
                  className="letter inline-block dark:text-[#f7f3eb]"
                >
                  {char}
                </span>
              ))}
            </div>

            {/* LINE 2 */}
            <div className="text-purple-700">
              Beyond 
            </div>

            {/* LINE 3 */}
            <div className="text-transparent [-webkit-text-stroke:0.5px_black]">
              {line2.split("").map((char, i) => (
                <span
                  key={i}
                  className="letter inline-block dark:[-webkit-text-stroke:0.5px_#50a2ff]"
                >
                  {char}
                </span>
              ))}
            </div>

          </h1>

      <p className="mt-8 text-black/60 max-w-md text-xs dark:text-[#9CA3AF]">
        Architecture rooted in material, atmosphere,
        and physical experience.
      </p>
    </div>

    {/* PICS -> RIGHT SIDE */}
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-black/20 dark:bg-[#f7f3eb]" />

      <div className="space-y-20">
        <ProgressCard
          number="01"
          title="Concept"
          image="/newsketch.jpg"
          rotate="-rotate-3"
        />

        <ProgressCard
          number="02"
          title="Development"
          image="/wholesketch.jpg"
          rotate="rotate-2"
        />

        <ProgressCard
          number="03"
          title="Final Form"
          image="/sketch.jpg"
          rotate="-rotate-2"
        />
      </div>
    </div>

  </div>
</section>
  );
}