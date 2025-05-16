'use client'
import Image from 'next/image'
import React from 'react'
import { Bungee_Inline, Patrick_Hand, Tilt_Warp} from 'next/font/google';
//import { BounceEffect } from '../components/BounceRevealEffect';
import { SlideEffect } from '../components/SlideRevealEffect';
import { ScrollAnimate } from '../components/ScrollAnimate';

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
    <section className="flex items-center ml-6 mr-6">
    <ScrollAnimate>
    <div className="bg-black flex">
      <div className="md:grid md:grid-cols-[60%_40%] gap-10 items-center">
        <div className="flex flex-col md:pl-15"><SlideEffect x={-75} y={0} delay={0.8} duration={1}>
            <h1 className={`${tiltwarp.className} rainbow-text text-right text-base md:text-4xl lg:text-4xl text-transparent animate-gradient`}>Doing What I Love & Learning Along the Way</h1>
            <h2 className={`${smooch.className} text-white text-right text-base md:text-2xl p-3`}>Hi, I'm Natasha. Professional translator turned webdev. After spending a few years in the translation industry, I decided to take on a new challenge in web development. I still enjoy translating for fan communities and continue to dab in freelance on the side. I also enjoy delving into creative projects like drawing, motion graphics, and 3D art.</h2></SlideEffect>
        </div>
        <div className="gap-3 flex flex-col sm:text-5xl md:text-7xl md:flex-col md:gap-10 text-white lg:text-7xl">
          <span className={`${bungee.className} block text-right`}><SlideEffect x={75} y={0} delay={0.2} duration={1}>DEV</SlideEffect></span>
          <span className={`${bungee.className}`}><SlideEffect x={75} y={0} delay={0.4} duration={1}>TRANS-<br />LATOR</SlideEffect></span>
          <span className={`${bungee.className}`}><SlideEffect x={75} y={0} delay={0.6} duration={1}>CREATOR</SlideEffect></span>
        </div>
      </div>
    </div>
    </ScrollAnimate>
    </section>
  )
}

export default Hero
