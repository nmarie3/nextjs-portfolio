import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative pb-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-[200%] h-[90%] rotate-3 bg-gradient-to-t from-yellow-100 to-slate-700 transform origin-top-left" />
      </div>

      <div className="-rotate-3 mt-10 mb-6 p-10 md:mx-25 lg:mx-40 ">
        <div className="">
        <Image
          className="rotate-3 rounded-full float-right ml-4 mb-2 x-10"
          src="/images/chisato.png"
          width={300}
          height={300}
          alt="me"
        />
        
        </div>
        <div className="rotate-3">
        <h1 className="rainbow-text flex md:text-5xl justify-center font-extrabold italic pb-3 text-transparent animate-gradient">Doing What I Love & Learning Along the Way</h1>
        <h2 className="md:text-base">Hi, I'm Natasha. Professional translator turned webdev. After spending a few years in the translation industry, I decided to take on a new challenge in web development. I still enjoy translating for fan communities and continue to dab in freelance translation on the side. I also enjoy delving into creative projects like drawing, motion graphics, and 3D art.
        </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
