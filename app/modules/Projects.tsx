import React from 'react'
import Image from 'next/image'
import { SiAdobeaftereffects, SiAdobephotoshop, SiBlender } from 'react-icons/si'

const Projects = () => {
  return (
    <section className="md:grid grid-cols-2 text-center gap-2">
      <div>
            <h2>this here for dev</h2>
            <div className="flex flex-row justify-center gap-4">
                <div className="h-60 w-60 bg-amber-400"/>
                <div className="h-60 w-60 bg-green-300"/>
            </div>
      </div>
      <div>
            <h2>this here for translation</h2>
            <div className="flex flex-row justify-center gap-4">
                <div className="h-60 w-60 bg-amber-400"/>
                <div className="h-60 w-60 bg-green-300"/>
            </div>
      </div>
      <div>
            <h2>this here for art</h2>
            <div>

            </div>
      </div>     
      <div>
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
      </div>
    </section>
  )
}

export default Projects
