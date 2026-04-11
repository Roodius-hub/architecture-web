import heroPic from "../public-img/hero.png"
import sketch from "../public-img/wholesketch.jpg"
import Image from "next/image"
import motion from "motion/react"

export default function Hero(){

    return <div className="relative">
        <Image className="w-full normal-case" src={sketch} alt="Wholesketch"/>

        <div className="absolute inset-0 bg-black/30"></div>

  {/* Text on top */}
  <div className="flex top-[-750] left-[-800] absolute inset-0  items-center justify-center z-10">
    <h1 className="flex flex-col  text-4xl font-semibold font-[Bungee] 
[-webkit-text-stroke:1px_black] bg-gradient-to-r from-gray-500 to-white bg-clip-text text-transparent">
              Designing Spaces That Inspire 
      <h5>
        <span className="text-xl flex flex-start  font-light text-white 
[-webkit-text-stroke:1px_black]"> Modern architecture  crafted with precision,<br /> creativity, and purpose.</span>
      </h5>
    </h1>
  </div>
</div>
}

