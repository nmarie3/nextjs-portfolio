import Link from 'next/link'
import React from 'react'

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
