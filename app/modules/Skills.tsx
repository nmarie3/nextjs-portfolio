import React from 'react'
import { FaGolang, FaReact } from 'react-icons/fa6'
import {RiNextjsFill } from 'react-icons/ri'
import { SiAdobexd, SiJavascript, SiTypescript } from 'react-icons/si'


const Skills = () => {
  return (
    <div className="flex flex-row text-[60px] gap-6 justify-center">
      <SiAdobexd/>
      <SiJavascript/>
      <SiTypescript/>
      <FaReact/>
      <RiNextjsFill/>
      <FaGolang/>
    </div>
  )
}

export default Skills
