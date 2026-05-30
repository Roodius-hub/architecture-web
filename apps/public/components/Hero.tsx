
import { TbBackground } from "react-icons/tb";
import AnimatedHero from "./motionedcompo/AnimatedHero";
// import BackgourndLogo from "./motionedcompo/BackgourndLogo";

export default function Hero() {

  return (
  <div className="relative min-h-screen">
    <div
  className="absolute inset-0 opacity-10 bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('./Archi_Logo.png')",
    backgroundSize: "1900px",
  }}
/>

    <div className="relative z-10">
      <AnimatedHero />
    </div>
  </div>
);
}
