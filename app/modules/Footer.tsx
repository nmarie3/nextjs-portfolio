import React from 'react'
import { Bungee_Inline, Patrick_Hand, Tilt_Warp, Kosugi} from 'next/font/google';
import { ScrollAnimate } from '../components/ScrollAnimate'

const bungee = Bungee_Inline({
  weight: ["400"]
})

const smooch = Patrick_Hand({
  weight: ["400"]
})

const tiltwarp = Tilt_Warp({
  weight: ["400"]
})

const mochiy = Kosugi({
  weight: ["400"]
})


const Footer = () => {
  return (
    <section>
    <ScrollAnimate>
    <div className="bg-gradient-to-b from-zinc-950 to-gray-400 pt-5 pb-50">
      <div className="text-white text-center">
        <h2 className={`${tiltwarp.className} rainbow-text text-transparent animate-gradient text-2xl`}>Contact</h2>
      </div>
    </div>
    </ScrollAnimate>
    </section>
  )
}

export default Footer
