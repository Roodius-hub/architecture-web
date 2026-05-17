import { motion } from "framer-motion";
import Image from "next/image";

export default function ProgressCard({
  number,
  title,
  image,
  rotate,
}: any) {
  return (
    <div className="relative pl-16">
      
      {/* timeline dot */}
      <div className="absolute left-[18px] top-10 w-4 h-4 rounded-full bg-black" />

      <p className="text-xs tracking-[0.3em] mb-3">
        {number}
      </p>

      <motion.div
        initial={{ rotate: rotate === "-rotate-3" ? -3 : 3 }}

        animate={{ y: [0, -8, 0] }}

        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        whileHover={{
          rotate: 0,
          scale: 1.03,
        }}

        className={`
          relative
          w-[320px]
          bg-white
          p-3
          shadow-xl
          border border-black/10
          ${rotate}
        `}
      >
        {/* fake tape */}
        <div className="absolute -top-3 left-10 w-20 h-6 bg-yellow-100/70 rotate-[-8deg]" />

        <Image
         alt="image"
          src={image}
          width={220}
          height={220}
          className=" object-cover"
        />

        <h3 className="mt-4 text-xl">
          {title}
        </h3>
      </motion.div>
    </div>
  );
}