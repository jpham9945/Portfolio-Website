"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>      
        <div className="grid grid-cols-11 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-6xl font-extrabold sm:text-5xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 ">
                  Hey there!
                  </span>
            </h1>
            <p className="mt-2 mb-5 text-5xl font-extrabold text-white">
                I'm {" "}
                <b className="text-white"> 
                
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'James Pham',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'a Web Developer',
        1000,
        'a Mobile Developer',
        1000,
        'a former diamond TFT player',
        800
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                </b>
            </p>
            <i className="text-base sm:text-lg mb-6 lg:text-xl text-white">
                Website/Application Developer, graduated from California State University of Fullerton
            </i>
            <div class="div mt-4 ml-1 font-extrabold">
              <button className = "px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-[#1e1e1e]"> 
              Hire Me Please
              </button>
              <button className = "px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-[#252525] text-white"> 
                <span className = "block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3"> Download CV </span>
              </button>
            </div>
          </div>

          {/* Circular Image with Gradient of Professional Picture */}
          <div className="col-span-5 place-self-center mt-8 mb-6">
            <div className="rounded-full bg-[#ffd590]  border-violet-600 border-2 
              w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative
              bg-[linear-gradient(0deg,rgba(0,0,300,0.75)_6.82%,rgba(20,90,0,0.00)_76.44%)]">
              <Image
                src = "/images/CircularProfPic.png"
                alt='Hero Image'
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={350}
                height={350}
              />
            </div>
          </div>

        </div>

    
    </section>
  )
}
export default HeroSection

