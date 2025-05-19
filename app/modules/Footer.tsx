import React from 'react'
import { Tilt_Warp, Kosugi, Mochiy_Pop_One} from 'next/font/google';
import { ScrollAnimate } from '../components/ScrollAnimate'
import { MdEmail } from "react-icons/md";
import { FaGithub } from 'react-icons/fa6'

const tiltwarp = Tilt_Warp({
  weight: ["400"]
})

const kosugi = Kosugi({
  weight: ["400"]
})

const mochiy = Mochiy_Pop_One({
  weight: ["400"]
})

const Footer = () => {
  return (
    <section id="contact" className="overflow-hidden">
<ScrollAnimate>
    <div className="bg-gradient-to-b from-zinc-950 to-gray-400 pt-20 pb-15">
      <div className="text-white text-center flex-col justify-center">
        <h2 className={`${tiltwarp.className} rainbow-text text-transparent animate-gradient text-2xl`}>Contact</h2>
        <div className="flex flex-row justify-center gap-5 mt-6">
          <a href="mailto:natasha.marie33@gmail.com"><MdEmail className="text-2xl"/></a>
          <a href="https://github.com/nmarie3" target="_blank" rel="noopener noreferrer"><FaGithub className="text-2xl"/></a>
        </div>
      </div>
    </div>
</ScrollAnimate>
    </section>
  )
}

export default Footer
