import React from 'react'
import Image from 'next/image'
import { SiAdobeaftereffects, SiAdobephotoshop, SiBlender } from 'react-icons/si'

const Projects = () => {
  return (
    <section className="relative grid grid-cols-3 w-full text-center gap-2">
      <div className="group w-full">
            <h2>this here for dev</h2>
                <div className="h-34 w-full bg-amber-400"/>
                  <div className="absolute top-full w-full left-0 hidden group-hover:block z-10">
                        <div className="h-64 mt-2 w-full bg-purple-400"/>
                  </div>
      </div>
      <div className="group w-full">
            <h2>translation</h2>
                <div className="h-34 w-full bg-amber-400"/>
                  <div className="absolute top-full w-full left-0 hidden group-hover:block z-10">
                        <div className="h-64 mt-2 w-full bg-purple-400"/>
                  </div>
      </div>
      <div className="group w-full">
            <h2>this here for art</h2>
                <div className="h-34 w-full bg-amber-400"/>
                  <div className="absolute top-full w-full left-0 hidden group-hover:block z-10">
                        <div className="h-64 mt-2 w-full bg-purple-400"/>
                  </div>
      </div>     
      {/* <div>
            <h2>tools used</h2>
            <div className="flex flex-row gap-3 justify-center">
                <SiAdobephotoshop/>
                <SiAdobeaftereffects/>
                <SiBlender/>
                <Image
                    src="/images/aegisub.svg"
                    alt="aegisub"
                    width={20} height={20}/>
            </div>
      </div> */}
    </section>
  )
}

export default Projects
