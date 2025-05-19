import React from 'react'
import { Tilt_Warp, Kosugi, Mochiy_Pop_One} from 'next/font/google';
import { FaGithub, FaGolang, FaReact } from 'react-icons/fa6'
import {RiNextjsFill } from 'react-icons/ri'
import { SiAdobeaftereffects, SiAdobepremierepro, SiAdobephotoshop, SiAdobexd, SiBlender, SiJavascript, SiTypescript } from 'react-icons/si'
import { BounceEffect } from '../components/BounceRevealEffect'
import { ScrollAnimate } from '../components/ScrollAnimate'
import Image from 'next/image'

const tiltwarp = Tilt_Warp({
  weight: ["400"]
})

const kosugi = Kosugi({
  weight: ["400"]
})

const mochiy = Mochiy_Pop_One({
  weight: ["400"]
})

const Skills = () => {
  return (
    <section id="skills" className="h-full pt-10 overflow-hidden">
<ScrollAnimate>
      <div className="pt-15 pb-10 text-white text-center bg-gradient-to-b from-zinc-950 via-gray-400 to-zinc-950 pl-3 pr-3">
      <h1 className={`${tiltwarp.className} rainbow-text text-2xl text-transparent animate-gradient mb-3`}>Skill Stack</h1>
      <div className="grid grid-cols-2 gap-2 text-center">
            <div className=" bg-gray-300 rounded-lg pb-2 shadow-lg">
                <span className={`${tiltwarp.className} text-zinc-700 text-lg inline-block text-center pt-2 underline`}>
                  <BounceEffect delay={0.3}>Dev</BounceEffect>
                </span>
                    <div className="p-2 pt-0 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[60px]">
                      <BounceEffect delay={0.5} stiffness={100} damping={10}><SiAdobexd className="text-4xl text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={0.6} stiffness={100} damping={10}><SiJavascript className="text-4xl text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={0.7} stiffness={100} damping={10}><SiTypescript className="text-4xl text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={0.8} stiffness={100} damping={10}><FaReact className="text-4xl text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={0.9} stiffness={100} damping={10}><RiNextjsFill className="text-4xl text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={1} stiffness={100} damping={10}><FaGolang className="text-4xl text-zinc-700"/></BounceEffect>

                      <BounceEffect delay={1.1} stiffness={100} damping={10}><FaGithub className="text-4xl text-zinc-700"/></BounceEffect>

                    </div>
            </div>
            <div className=" bg-gray-300 rounded-lg pb-2 shadow-lg">
                <span className={`${tiltwarp.className} inline-block text-center text-lg pt-2 underline text-zinc-700`}>
                  <BounceEffect delay={0.3}>Creative</BounceEffect>
                </span>
                  <div className="p-2 pt-0  flex flex-wrap justify-center gap-x-3 gap-y-2 text-[60px]">
                    <BounceEffect delay={0.5} stiffness={100} damping={10}><SiAdobephotoshop className="text-4xl text-zinc-700"/></BounceEffect>

                    <BounceEffect delay={0.6} stiffness={100} damping={10}><SiAdobeaftereffects className="text-4xl text-zinc-700"/></BounceEffect>

                    <BounceEffect delay={0.6} stiffness={100} damping={10}><SiAdobepremierepro className="text-4xl text-zinc-700"/></BounceEffect>

                    <BounceEffect delay={0.7} stiffness={100} damping={10}><SiBlender className="text-4xl text-zinc-700"/></BounceEffect>

                    <BounceEffect delay={0.7} stiffness={100} damping={10}>
                      <Image
                        src="images/aegisub.svg"
                        alt="aegisub"
                        height={40}
                        width={40}
                        className=""
                      />
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
