import React from 'react'
import { FaGithub, FaGolang, FaReact } from 'react-icons/fa6'
import {RiNextjsFill } from 'react-icons/ri'
import { SiAdobeaftereffects, SiAdobephotoshop, SiAdobexd, SiBlender, SiJavascript, SiTypescript } from 'react-icons/si'
import { RevealEffect } from '../components/RevealEffect'


const Skills = () => {
  return (
    <div className="h-200 w-full bg-red-300 text-center mt-5 mb-5 p-10">
      <h1>Skill Stack</h1>
      <div className="grid grid-cols-2 gap-3 text-center">
            <div>
                <span className="inline-block text-center">
                  <RevealEffect delay={0.3}>Dev</RevealEffect>
                </span>
                    <div className="p-2 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[60px]">
                      <RevealEffect delay={0.5} stiffness={100} damping={10}><SiAdobexd/></RevealEffect>
                      <RevealEffect delay={0.6} stiffness={100} damping={10}><SiJavascript/></RevealEffect>
                      <RevealEffect delay={0.7} stiffness={100} damping={10}><SiTypescript/></RevealEffect>
                      <RevealEffect delay={0.8} stiffness={100} damping={10}><FaReact/></RevealEffect>
                      <RevealEffect delay={0.9} stiffness={100} damping={10}><RiNextjsFill/></RevealEffect>
                      <RevealEffect delay={1} stiffness={100} damping={10}><FaGolang/></RevealEffect>
                      <RevealEffect delay={1.1} stiffness={100} damping={10}><FaGithub/></RevealEffect>
                    </div>
            </div>
            <div>
                <span className="inline-block text-center">
                  <RevealEffect delay={0.3}>Creative</RevealEffect>
                </span>
                  <div className="p-2 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[60px]">
                    <RevealEffect delay={0.5} stiffness={100} damping={10}><SiAdobephotoshop/></RevealEffect>
                    <RevealEffect delay={0.6} stiffness={100} damping={10}><SiAdobeaftereffects/></RevealEffect>
                    <RevealEffect delay={0.7} stiffness={100} damping={10}><SiBlender/></RevealEffect>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Skills
