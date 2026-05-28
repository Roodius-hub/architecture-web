"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


export default function Services() {
      const [open, setOpen] = useState<number | null>(0);

 const services = [
  {
    title: "House Elevation Design",
    description: "Modern and luxury exterior elevation designs for residential homes."
  },
  {
    title: "Architectural House Planning",
    description: "Detailed floor plans and smart space planning tailored to your lifestyle."
  },
  {
    title: "2D & 3D House Maps",
    description: "Professional 2D layouts and realistic 3D visualization for projects."
  },
  {
    title: "Interior Design",
    description: "Functional and elegant interior concepts for homes and villas."
  },
  {
    title: "Villa & Bungalow Design",
    description: "Custom luxury villa and bungalow architecture with premium aesthetics."
  },
  {
    title: "Renovation & Remodeling",
    description: "Transforming old spaces with modern architecture and efficient layouts."
  }
];

    return <section id="services" className="py-30 -mt-20 bg-[#f7f3eb] rounded-2xl">

      <div className="max-w-6xl mx-auto px-8">

        <p className="tracking-[0.3em] ml-3 text-sm mb-6">
          DESIGN PRACTICES
        </p>

        <h2 className="text-8xl  font-semibold mb-20 font-bowlby
                        tracking-tight uppercase leading-none">
          SERVICES
        </h2>

        <div className="border-t border-black/10">

          {services.map((service, index) => {

            const isOpen = open === index;

            return (
              <div
                key={index}
                className="border-b border-black/10                 border
              border-black/10
              hover:border-purple-700
              hover:-translate-y-1
              transition-all
              duration-700"
              
              >

                {/* HEADER */}
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex
                    justify-between
                    items-center
                    py-10
                    text-left
                    group
                  "
                >

                  <div className="flex items-center gap-8">

                    <span className="tracking-[0.3em] text-black/40 text-sm">
                      
                    </span>

                    <h3
                      className="
                        text-2xl
                        font-bowlby
                        tracking-tight uppercase leading-none
                        font-light
                        transition
                        duration-500
                        group-hover:text-purple-700
                      "
                    >
                      {service.title}
                    </h3>

                  </div>

                  <span className="mr-3 text-3xl text-black/40">
                    {isOpen ? "−" : "+"}
                  </span>

                </button>

                {/* DROPDOWN */}
                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >

                      <div className="pb-10 pl-24 max-w-3xl">

                        <p className="text-black/60 text-lg leading-relaxed">
                          {service.description}
                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </div>

    </section>
}