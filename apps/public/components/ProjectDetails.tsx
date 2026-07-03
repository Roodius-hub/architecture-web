"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/Projects";
import { notFound } from "next/navigation";

export  async function ProjectDetails({id}) {
  const project = projects.find((item) => item.id === Number(id));
  if (!project) {
    notFound()
  }
  return (
    <main className="min-h-screen p-8">
      <section className="max-w-5xl mx-auto">
        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center border-2 border-black rounded-lg p-2"
        >
          {/* <img src={} className="h-120 w-5xl flex items-center justify-center bg-gray-100 rounded-md" /> */}
        </motion.div>

        {/* Project Details */}
        <div className="mt-8 space-y-4 ">
          <h1 className="text-4xl font-bold">- {project.title}</h1>

          <p className="text-gray-600">
            {project.description}
          </p>

          <div>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p>
              Explain what the project does, the problem it solves, and its
              key features.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}