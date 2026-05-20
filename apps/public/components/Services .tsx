"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


export default function Services() {
      const [open, setOpen] = useState<number | null>(0);

     const services = [
  {
    title: "Residential Architecture",
    description:   "Spaces designed through light proportion, and material honesty"
  },
  {
    title: "Interior Design",
    description: "Luxury villa",
    cdn: "https://d1z1e76yk7p645.cloudfront.net/25445.jpg",
  },
  {
    title: "Concept Development",
    description: "Minimal design",
    cdn: "https://d1z1e76yk7p645.cloudfront.net/25445.jpg",
  },
  {
    title: "Space Planning",
    description: "Classic home",
    cdn: "https://d1z1e76yk7p645.cloudfront.net/25445.jpg",
  },
  {
    title: "Renovation & Restoration",
    description: "Urban style",
    cdn: "https://d1z1e76yk7p645.cloudfront.net/25445.jpg",
  },
  {
    title: "Sustainable Design",
    description: "Urban style",
    cdn: "https://d1z1e76yk7p645.cloudfront.net/25445.jpg",
  }
];

    return <section className="py-40 bg-[#f7f3eb]">

      <div className="max-w-6xl mx-auto px-8">

        <p className="tracking-[0.3em] text-sm mb-6">
          DESIGN PRACTICE
        </p>

        <h2 className="text-7xl leading-[0.9] font-semibold mb-20">
          SERVICES
        </h2>

        <div className="border-t border-black/10">

          {services.map((service, index) => {

            const isOpen = open === index;

            return (
              <div
                key={index}
                className="border-b border-black/10"
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
                        text-4xl
                        font-medium
                        transition
                        duration-500
                        group-hover:text-purple-700
                      "
                    >
                      {service.title}
                    </h3>

                  </div>

                  <span className="text-3xl text-black/40">
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

                        <div className="mt-8 grid grid-cols-2 gap-4">

                          {services.map((item, i) => (
                            <div
                              key={i}
                              className="
                                text-black/50
                                border-b
                                border-black/10
                                pb-2
                              "
                            >
                              {item.description}
                            </div>
                          ))}

                        </div>

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