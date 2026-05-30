"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import  {motion} from "motion/react"

export default function   Logo() {
  const svgRef = useRef<SVGSVGElement | null>(null);
// const text = "IMAGINING ARCHITECTURE".split("");
  const line1 = "IMAGINERING".split("");
  const line2 = "ARCHITECTURE".split("");

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");

    if (!paths) return;

    paths.forEach((path) => {
      const length = path.getTotalLength();

      // hide line
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    // timeline
    const tl = gsap.timeline();

    paths.forEach((path, i) => {
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: "power2.out",
      }, i * 0.3); // delay between strokes
    });

    
  }, []);

  return ( <div className="flex items-center justify-center">
    <div className="w-[60px]">
        <img src="./Archi_Logo.png" alt="" />
      </div>
 <div className="flex flex-col leading-none items-center justify-center">
  <motion.p className="text-[10px] font-semibold tracking-[0.2em] text-black">
    {line1.map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.06 }}
      >
        {char}
      </motion.span>
    ))}
  </motion.p>

  <motion.p className="text-[10px] font-semibold tracking-[0.2em] text-black ml-[0.2em]">
    {line2.map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 + i * 0.06 }}
      >
        {char}
      </motion.span>
    ))}
  </motion.p>
</div>
      </div>
  );
}