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
      
    </section>
  );
}