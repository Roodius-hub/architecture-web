"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/Projects";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export  function ProjectDetails({id}) {
    const [data, SetData] = useState([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const deatails = async () => {
      const response = await axios.get(`http://localhost:3000/admin/getbyid/${id}`);
      SetData(response.data.project);
      console.log(response.data.data)
    }
    if(id) {
    deatails();
    }
  }, [id])

  return (
  <main className="bg-zinc-50 min-h-screen">

    {/* Hero */}
    <section className="max-w-6xl mx-auto px-6 py-20">

      <div className="max-w-3xl">
        <p className="uppercase tracking-[8px] font-ibm text-sm text-gray-500">
          Residential Architecture
        </p>

        <h1 className="text-3xl md:text-5xl font-ibm font-bold mt-4">
          {data.Title}
        </h1>

        <p className="text-sm text-gray-600 font-ibm leading-8">
          {data.overview}
        </p>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-14 border-black border-2  p-2 rounded-3xl"
      >
        <img onClick={() => setSelectedImage(data.keys[0])}
          src={`${process.env.NEXT_PUBLIC_CDN_DOM}/${data.keys?.[0]}`}
          alt={data.Title}
          className="w-full h-[650px] cursor-pointer rounded-3xl object-cover shadow-xl"
        />
      </motion.div>

      {/* Gallery */}
      {data.keys?.length > 1 && (
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {data.keys.slice(1).map((url: string, i: number) => (
            <motion.img
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
              src={`${process.env.NEXT_PUBLIC_CDN_DOM}/${url}`}
              alt={`Project ${i + 2}`}
              className="rounded-2xl h-80 object-cover shadow-lg cursor-pointer"
            />
          ))}
        </div>
      )}

      {/* Information */}
      <div className="grid lg:grid-cols-3 gap-12 mt-24">

        {/* Technical */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-md p-10">

          <h2 className="text-3xl font-ibm font-bold mb-3">
            Technical Details
          </h2>

          <p className="text-gray-700 font-ibm ml-10 leading-9 text-lg">
            {data.TechnicalDetails}
          </p>

        </div>

        {/* Facts */}
        <div className="bg-white rounded-3xl shadow-md p-10">

          <h2 className="text-3xl font-ibm font-bold mb-8">
            Project Facts
          </h2>

          <div className="space-y-4">
            {data.ProjectFacts?.map((fact: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-3 border-b pb-4 last:border-none"
              >
                <div className="w-2 h-2 rounded-full bg-black" />
                <span className="font-ibm text-gray-700">{fact}</span>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Bottom Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-24">

        <div className="bg-black text-white rounded-3xl p-8">
          <p className="text-sm uppercase tracking-widest font-ibm text-purple-600">
            Project
          </p>

          <h3 className="text-2xl mt-4 font-ibm font-semibold">
            {data.Title}
          </h3>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8">
          <p className="text-sm uppercase tracking-widest font-ibm text-green-500">
            Completed
          </p>

          <h3 className="text-2xl font-ibm mt-4">
            {new Date(data.Time).getFullYear()}
          </h3>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8">
          <p className="text-sm uppercase tracking-widest font-ibm text-gray-500">
            Format
          </p>

          <h3 className="text-2xl mt-4 font-ibm uppercase">
            {data.Type}
          </h3>
        </div>

      </div>

    </section>

            <AnimatePresence>
  {selectedImage && (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-6 right-6 text-white text-2xl hover:rotate-90 transition"
      >
        ✕
      </button>

      {/* Image */}
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        src={`${process.env.NEXT_PUBLIC_CDN_DOM}/${selectedImage}`}
        className="max-h-[90vh] max-w-[90vw] rounded-1xl shadow-2xl object-contain"
      />
    </motion.div>
  )}
</AnimatePresence>

  </main>
);
}