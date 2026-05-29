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
    <svg
      ref={svgRef}
      width="100"
      height="60"
      viewBox="0 0 200 120"
      fill="none"
    >
      <path d="M20 100 L180 100" stroke="black" strokeWidth="2" />
      <path d="M50 100 L50 40" stroke="black" strokeWidth="2" />
      <path d="M150 100 L150 40" stroke="black" strokeWidth="2" />
      <path d="M50 40 L100 20 L150 40" stroke="black" strokeWidth="2" />
      <path d="M100 20 L100 100" stroke="black" strokeWidth="2" />
    </svg>
    </div>
  );
}