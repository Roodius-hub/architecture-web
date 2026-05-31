"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [clicked, SetClicked] = useState(false);
  return (
    <main className="min-h-screen p-8">
      <section className="max-w-5xl mx-auto">
        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-2 border-black rounded-lg p-4"
        >
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded-md">
            Project Image
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="mt-8 space-y-4">
          <h1 className="text-4xl font-bold">Parakha</h1>

          <p className="text-gray-600">
            A brief description of the project goes here.
          </p>

          <div>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p>
              Explain what the project does, the problem it solves, and its
              key features.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
            <ul className="list-disc pl-5">
              <li>Next.js</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}