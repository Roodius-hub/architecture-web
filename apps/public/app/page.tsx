import Navbar from "@/components/Navbar";
import Image from "next/image";
import Projects from "../components/Projects";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services ";
import Contact from "@/components/Contact";


export default function Home() {
  return ( <div id="home" className="max-w-6xl mx-auto px-6">
  <div>
    <Navbar />
  </div>
    <div>
        <Hero />
    </div>
    <div>
      <About/>
    </div>
    <div>
        <Projects/>
    </div>
    <div>
      <Services />
    </div>
    <div>
      <Contact />
    </div>
    </div>
  )
}
