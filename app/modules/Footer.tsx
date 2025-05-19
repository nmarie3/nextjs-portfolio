import React from 'react'
import { Tilt_Warp, M_PLUS_1p, RocknRoll_One} from 'next/font/google';
import { ScrollAnimate } from '../components/ScrollAnimate'
import { MdEmail } from "react-icons/md";
import { FaGithub } from 'react-icons/fa6'

const tiltwarp = Tilt_Warp({
  weight: ["400"]
})

const mplus = M_PLUS_1p({
  weight: ["400"]
})

const rock = RocknRoll_One({
  weight: ["400"]
})

const Footer = () => {
  return (
    <section id="contact" className="flex justify-center items-center h-screen overflow-hidden bg-gradient-to-b from-zinc-950 to-gray-800">
<ScrollAnimate>
    <div className="">
      <div className="text-white text-center flex-col justify-center">
        <h2 className={`${tiltwarp.className} rainbow-text text-transparent animate-gradient text-4xl sm:text-5xl mb-7`}>Contact</h2>
        <div className="flex flex-row justify-center gap-10">
          <a href="mailto:natasha.marie33@gmail.com"><MdEmail className="text-7xl"/></a>
          <a href="https://github.com/nmarie3" target="_blank" rel="noopener noreferrer"><FaGithub className="text-7xl"/></a>
        </div>
      </div>
    </div>
</ScrollAnimate>
    </section>
  )
}

export default Footer
