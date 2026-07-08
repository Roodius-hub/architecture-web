import Navbar from "@/components/Navbar";
import Image from "next/image";
import Projects from "../components/Projects";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToggleMode from "@/components/ToggleMode";


export default function Home() {
  return ( <div id="home" className="max-w-6xl mx-auto px-6">
  <div>
    <ToggleMode />
    <Navbar />
  </div>
    <div>
        <Hero />
    </div>
    <div className="mt-6">
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
    <div>
      <Footer />
    </div>
    </div>
  )
}
