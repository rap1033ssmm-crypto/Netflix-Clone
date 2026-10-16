import React from 'react'
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <div 
      className="relative w-full h-[80vh] bg-cover bg-center flex flex-col justify-center items-center" 
      style={{ backgroundImage: `url('https://nflxext.com')` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center mt-10">
        <h1 className="text-white text-center text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 uppercase tracking-wide">
          F-L-O Credential Verification
        </h1>
        <p className="text-white text-center text-lg md:text-2xl font-bold mb-5">
          Famo-Legacy Omnisphere Intelligence Bureau • Node 28
        </p>
        <p className="text-[#d4af37] text-center text-md md:text-xl font-bold mb-5 tracking-wider">
          MASTER REGISTRY RECONNAISSANCE CODE: ISSN 3143-9756
        </p>
      </div>
    </div>
  )
}

export default HeroSection
