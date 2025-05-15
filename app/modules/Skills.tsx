import React from 'react'
import { FaGithub, FaGolang, FaReact } from 'react-icons/fa6'
import {RiNextjsFill } from 'react-icons/ri'
import { SiAdobeaftereffects, SiAdobephotoshop, SiAdobexd, SiBlender, SiJavascript, SiTypescript } from 'react-icons/si'
import { BounceEffect } from '../components/BounceRevealEffect'


const Skills = () => {
  return (
    <div className="h-200 w-full bg-black text-center mt-5 mb-5 p-10">
      <h1>Skill Stack</h1>
      <div className="grid grid-cols-2 gap-3 text-center">
            <div>
                <span className="inline-block text-center">
                  <BounceEffect delay={0.3}>Dev</BounceEffect>
                </span>
                    <div className="p-2 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[60px]">
                      <BounceEffect delay={0.5} stiffness={100} damping={10}><SiAdobexd/></BounceEffect>
                      <BounceEffect delay={0.6} stiffness={100} damping={10}><SiJavascript/></BounceEffect>
                      <BounceEffect delay={0.7} stiffness={100} damping={10}><SiTypescript/></BounceEffect>
                      <BounceEffect delay={0.8} stiffness={100} damping={10}><FaReact/></BounceEffect>
                      <BounceEffect delay={0.9} stiffness={100} damping={10}><RiNextjsFill/></BounceEffect>
                      <BounceEffect delay={1} stiffness={100} damping={10}><FaGolang/></BounceEffect>
                      <BounceEffect delay={1.1} stiffness={100} damping={10}><FaGithub/></BounceEffect>
                    </div>
            </div>
            <div>
                <span className="inline-block text-center">
                  <BounceEffect delay={0.3}>Creative</BounceEffect>
                </span>
                  <div className="p-2 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[60px]">
                    <BounceEffect delay={0.5} stiffness={100} damping={10}><SiAdobephotoshop/></BounceEffect>
                    <BounceEffect delay={0.6} stiffness={100} damping={10}><SiAdobeaftereffects/></BounceEffect>
                    <BounceEffect delay={0.7} stiffness={100} damping={10}><SiBlender/></BounceEffect>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Skills
