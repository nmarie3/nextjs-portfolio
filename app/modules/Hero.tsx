import Image from 'next/image'
import React from 'react'
import { Bungee_Inline, Patrick_Hand, Tilt_Warp} from 'next/font/google';
//import { BounceEffect } from '../components/BounceRevealEffect';
import { SlideEffect } from '../components/SlideRevealEffect';

const bungee = Bungee_Inline({
  weight: ["400"]
})

const smooch = Patrick_Hand({
  weight: ["400"]
})

const tiltwarp = Tilt_Warp({
  weight: ["400"]
})

const Hero = () => {
  return (
    <section className="relative w-full h-auto md:h-200 mt-10 bg-black">
      <div className="pt-10 md:grid md:grid-cols-[45%_55%] gap-10">
        <div className="flex flex-col justify-center md:pl-15"><SlideEffect x={-75} y={0} delay={1.3} duration={1}>
            <h1 className={`${tiltwarp.className} rainbow-text text-right md:text-5xl pb-3 text-transparent animate-gradient`}>Doing What I Love<br />& Learning Along<br />the Way</h1>
            <h2 className={`${smooch.className} text-right text-3xl p-3`}>Hi, I'm Natasha. Professional translator turned webdev. After spending a few years in the translation industry, I decided to take on a new challenge in web development. I still enjoy translating for fan communities and continue to dab in freelance on the side. I also enjoy delving into creative projects like drawing, motion graphics, and 3D art.</h2></SlideEffect>
        </div>
        <div className="pr-5 pb-3 gap-3 flex flex-col text-5xl md:flex-col md:gap-10 md:text-9xl">
          <span className={`${bungee.className} block text-right`}><SlideEffect x={75} y={0} delay={0.4} duration={1}>DEV</SlideEffect></span>
          <span className={`${bungee.className}`}><SlideEffect x={75} y={0} delay={0.8} duration={1}>TRANS-<br />LATOR</SlideEffect></span>
          <span className={`${bungee.className}`}><SlideEffect x={75} y={0} delay={1.2} duration={1}>CREATOR</SlideEffect></span>
        </div>
      </div>
    </section>
  )
}

export default Hero
