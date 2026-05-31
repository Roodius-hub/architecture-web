"use client";

import { motion } from "framer-motion";

export default async function Page(
  {
    params,
    searchParams,
  } :{
    params:Promise<{id:string}>,
    searchParams:Promise<{
      title?:string,
      description?:string,
      cdn?:string
    }>
  }
) {

  const {id} = await params;
  const {title, description, cdn} = await searchParams;
  console.log(title, description, cdn)
  return (
    <main className="min-h-screen p-8">
      <section className="max-w-5xl mx-auto">
        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-2 border-black rounded-lg p-4"
        >
          <img src={cdn} className="h-64 flex items-center justify-center bg-gray-100 rounded-md" />
        </motion.div>

        {/* Project Details */}
        <div className="mt-8 space-y-4">
          <h1 className="text-4xl font-bold">{title}</h1>

          <p className="text-gray-600">
            {description}
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