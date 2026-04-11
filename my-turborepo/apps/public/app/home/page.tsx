import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Page(){
    return <h1>
        <Navbar />
        <hr className="w-0.5 "></hr>
        <Hero />
    </h1>
}