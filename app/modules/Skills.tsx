import React from 'react'
import { Tilt_Warp, M_PLUS_1p, RocknRoll_One} from 'next/font/google';
import { FaGithub, FaGolang, FaReact } from 'react-icons/fa6'
import {RiNextjsFill } from 'react-icons/ri'
import { SiAdobeaftereffects, SiAdobepremierepro, SiAdobephotoshop, SiAdobexd, SiBlender, SiJavascript, SiTypescript, SiThreedotjs } from 'react-icons/si'
import { BounceEffect } from '../components/BounceRevealEffect'
import { ScrollAnimate } from '../components/ScrollAnimate'
import Image from 'next/image'

const tiltwarp = Tilt_Warp({
  weight: ["400"]
})

const mplus = M_PLUS_1p({
  weight: ["400"]
})

const rock = RocknRoll_One({
  weight: ["400"]
})

const Skills = () => {
  return (
    <section id="skills" className="flex justify-center items-center h-screen overflow-hidden bg-gradient-to-b from-zinc-950 via-gray-800 to-zinc-950">
<ScrollAnimate>
      <div className="text-white text-center pl-3 pr-3">
      <h1 className={`${tiltwarp.className} rainbow-text text-4xl sm:text-5xl text-transparent animate-gradient mb-7`}>Skill Stack</h1>
      <div className="text-center flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-2">
            <div className="opacity-90 bg-gray-300 rounded-xs pb-2 shadow-lg">
                <span className={`${tiltwarp.className} text-zinc-700 text-xl lg:text-2xl inline-block text-center pt-2 `}>
                  <BounceEffect delay={0.3}>- DEVELOPMENT -</BounceEffect>
                </span>
                    <div className="p-2 pt-0 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[60px]">
                      <BounceEffect delay={0.5} stiffness={100} damping={10}><SiAdobexd className="text-7xl lg:text-8xl  text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={0.6} stiffness={100} damping={10}><SiJavascript className="text-7xl lg:text-8xl text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={0.7} stiffness={100} damping={10}><SiTypescript className="text-7xl lg:text-8xl text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={0.8} stiffness={100} damping={10}><FaReact className="text-7xl lg:text-8xl text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={0.9} stiffness={100} damping={10}><RiNextjsFill className="text-7xl lg:text-8xl text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={1} stiffness={100} damping={10}><FaGolang className="text-7xl lg:text-8xl  text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={1.1} stiffness={100} damping={10}><SiThreedotjs className="text-7xl lg:text-8xl text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={1.2} stiffness={100} damping={10}><FaGithub className="text-7xl lg:text-8xl text-zinc-700"/></BounceEffect>

                    </div>
            </div>
            <div className="opacity-90 bg-gray-300 rounded-xs pb-2 shadow-lg ">
                <span className={`${tiltwarp.className} inline-block text-center text-xl lg:text-2xl pt-2  text-zinc-700`}>
                  <BounceEffect delay={0.3}>- CREATIVE -</BounceEffect>
                </span>
                  <div className="p-2 pt-0  flex flex-wrap justify-center gap-x-3 gap-y-2 text-[60px]">
                    <BounceEffect delay={0.5} stiffness={100} damping={10}><SiAdobephotoshop className="text-7xl lg:text-8xl text-zinc-700"/></BounceEffect>

                    <BounceEffect delay={0.6} stiffness={100} damping={10}><SiAdobeaftereffects className="text-7xl lg:text-8xl text-zinc-700"/></BounceEffect>

                    <BounceEffect delay={0.6} stiffness={100} damping={10}><SiAdobepremierepro className="text-7xl lg:text-8xl text-zinc-700"/></BounceEffect>

                    <BounceEffect delay={0.7} stiffness={100} damping={10}><SiBlender className="text-7xl lg:text-8xl text-zinc-700"/></BounceEffect>

                    <BounceEffect delay={0.7} stiffness={100} damping={10}>
                      <div className="h-20 w-20 lg:h-30 lg:w-30">
                      <Image
                        src="images/aegisub.svg"
                        alt="aegisub"
                        fill
                      />
                      </div>
                    </BounceEffect>
                  </div>
            </div>
      </div>
    </div>
</ScrollAnimate>
    </section>
  )
}

export default Skills
