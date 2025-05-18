import Link from 'next/link'
import React from 'react'
import { Bungee_Inline, Patrick_Hand, Tilt_Warp, Kosugi} from 'next/font/google';

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


const NaviMobile = () => {
  return (
    <div className="flex flex-row justify-end gap-4">
      <Link href="/">About</Link>
      <h4>Skills</h4>
      <h4>Work History</h4>
      <h4>Projects</h4>
    </div>
  )
}

export default NaviMobile
