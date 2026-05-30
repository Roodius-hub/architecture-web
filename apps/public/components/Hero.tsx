
import { TbBackground } from "react-icons/tb";
import AnimatedHero from "./motionedcompo/AnimatedHero";
// import BackgourndLogo from "./motionedcompo/BackgourndLogo";

export default function Hero() {

  return (
  <div className="relative min-h-screen">
    <div className="relative z-10">
      <AnimatedHero />
    </div>
  </div>
);
}
