"use client"
import Logo from "./Logo"
import AnimatedNavbarLogo from "./motionedcompo/AnimatedNavbarLogo"

export default function Navbar(){
                                                            
    return <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur">
        <div className="flex items-center justify-center px-8 py-5 shadow-sm bg-[#f4f4f2]">

      {/* Logo */}
        <AnimatedNavbarLogo />
      {/* Menu */}
      <div className="flex items-center gap-8  text-gray-700 font-medium px-15">

        <div className="cursor-pointer text-sm hover:text-blue-500 transition duration-200">
          <i className="fa-solid fa-house"></i> Home
        </div>

        <div className="cursor-pointer text-md hover:text-blue-500 transition duration-200">
         <i className="fa-solid fa-user"></i> About
        </div>

        <div className="cursor-pointer text-md hover:text-blue-500 transition duration-200">
         <i className="fa-solid fa-layer-group"></i> Projects
        </div>

        <div className="cursor-pointer text-md hover:text-blue-500 transition duration-200">
         <i className="fa-solid fa-compass-drafting"></i> Services
        </div>

        <div className="cursor-pointer text-md hover:text-blue-500 transition duration-200">
         <i className="fa-regular fa-envelope"></i> Contact
        </div>

      </div>
    </div>
    </div>
}