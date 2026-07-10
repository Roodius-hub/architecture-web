import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";




export default function Footer() {


    return (
        <footer className="bg-black px-6 py-16 text-white rounded-2xl dark:bg-[#161616]">
  <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-end md:justify-between">

    {/* Left */}
    <div>
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
        IMAGINERING ARCHITECTURE
      </p>

      <h2 className="font-bowlby text-5xl uppercase leading-none md:text-7xl">
        Build
        <br />
        Timeless
      </h2>
    </div>

    {/* Right */}
    <div className="space-y-4 text-sm uppercase tracking-[0.2em] text-neutral-400">
      <p>xyc@studio.com</p>
      <p>+91 98765 43210</p>
      <p>Uttarakhand, India</p>

      <div className="flex gap-6 pt-4">
        <a href="https://instagram.com" className="flex items-center justify-center gap-1 transition hover:text-purple-600 border border-gray-600 p-2 rounded-2xl text-xs">
         <FaInstagram /> Instagram
        </a>

        <a href="https://facebook.com" className="flex items-center justify-center gap-1 transition hover:text-purple-600 border border-gray-600 p-2 rounded-2xl text-xs">
          <CiFacebook scale={200}/> Facebook
        </a>

        <a href="https://www.linkedin.com/" className="flex items-center justify-center gap-1 transition hover:text-purple-600 border border-gray-600 p-2 rounded-2xl text-xs">
          <CiLinkedin/> Linkedin
        </a>
      </div>
    </div>

  </div>

  {/* Bottom */}
  <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-neutral-500 md:flex-row md:items-center md:justify-between">
  <p className="">© 2026 All rights reserved</p>
    <p>Build with ❤️ by Roodius-hub</p>
  </div>
</footer>
    )
}