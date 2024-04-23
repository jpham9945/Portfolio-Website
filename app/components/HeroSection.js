import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <section>      
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-7 place-self-center">
            <h1 className="text-6xl font-extrabold">
                Hey there!
            </h1>
            <p className="mt-2 mb-5 text-5xl font-extrabold ">
                I'm 
                <b className="text-[#ffb845]"> James Pham</b>
            </p>
            <i className="text-lg lg:text-xl">
                Website/Application Developer
            </i>
            <div class="div mt-4 ml-1">
              <button className = "px-6 py-3 rounded-full mr-4 bg-[#fbc979] hover:bg-[#ffe0af] "> Hire Me Please</button>
              <button className = "px-6 py-3 rounded-full bg-black text-white border   hover:bg-[#252525]"> Download CV </button>
            </div>
          </div>

          {/* Circular Image with Gradient of Professional Picture */}
          <div className="col-span-2 place-self-center mt-4 mb-6">
            <div className="rounded-full bg-[#ffd590]  border-violet-600 border-2 
              w-[370px] h-[370px] lg:w-[400px]h-[400px] 
              relative bg-[linear-gradient(0deg,rgba(0,0,300,0.75)_6.82%,rgba(20,90,0,0.00)_76.44%)]">
              <Image
                src = "/images/CircularProfPic.png"
                alt='Hero Image'
                className = "absolute transform -translate-x-1/2 - translate-y-1 top-1 left-1/2 "
                width={360}
                height={380}
              />
            </div>
          </div>

        </div>

    
    </section>
  )
}
export default HeroSection

