import React from 'react'
import { FaGithub, FaGolang, FaReact } from 'react-icons/fa6'
import {RiNextjsFill } from 'react-icons/ri'
import { SiAdobeaftereffects, SiAdobephotoshop, SiAdobexd, SiBlender, SiJavascript, SiTypescript } from 'react-icons/si'


const Skills = () => {
  return (
    <div className=" bg-red-300 rounded-3xl text-center">
      <h1>Skill Stack</h1>
      <h3>Dev</h3>
        <div className="p-2 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[60px]">
          <SiAdobexd/>
          <SiJavascript/>
          <SiTypescript/>
          <FaReact/>
          <RiNextjsFill/>
          <FaGolang/>
          <FaGithub/>
        </div>
      <h3>Creative</h3>
        <div className="p-2 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[60px]">
          <SiAdobephotoshop/>
          <SiAdobeaftereffects/>
          <SiBlender/>
        </div>
    </div>
  )
}

export default Skills
