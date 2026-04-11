"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import logoImg from "../../public-img/logo.png"
import Image from "next/image";

export default function Logo() {
  const logoRef = useRef(null);

  function ReDirectToLInkdin(){
        window.open("https://www.linkedin.com/in/Roodius")
    }

  useEffect(() => {
    gsap.to(logoRef.current, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <Image
      ref={logoRef}
      src={logoImg}
      className="w-10 rounded-full"
      alt="logo"
    onClick={ReDirectToLInkdin}/>
  );
}