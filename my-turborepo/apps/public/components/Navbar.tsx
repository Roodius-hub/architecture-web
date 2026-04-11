"use client"
import Logo from "./Logo"
import AnimatedNavbar from "./motionedcompo/AnimatedNavbar"

export default function Navbar(){
                                                            
    return <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur">
        <div className="flex items-center justify-center px-8 py-5 shadow-sm bg-[#f4f4f2]">

      {/* Logo */}
      <AnimatedNavbar className="text-xl font-bold tracking-wide cursor-pointer px-8">
        <Logo />
      </AnimatedNavbar>

      {/* Menu */}
      <div className="flex items-center gap-8  text-gray-700 font-medium px-15">

        <div className="cursor-pointer text-sm hover:text-blue-500 transition duration-200">
          Home
        </div>

        <div className="cursor-pointer text-md hover:text-blue-500 transition duration-200">
          About
        </div>

        <div className="cursor-pointer text-md hover:text-blue-500 transition duration-200">
          Projects
        </div>

        <div className="cursor-pointer text-md hover:text-blue-500 transition duration-200">
          Services
        </div>

        <div className="cursor-pointer text-md hover:text-blue-500 transition duration-200">
          Contact
        </div>

      </div>
    </div>
    </div>
}