'use client'
import { Bungee_Inline, Patrick_Hand, Tilt_Warp, Kosugi} from 'next/font/google';
import React, { useState } from 'react';
import { getAllDev } from '../db/DevProjectsData';
import DevList from '../components/DevModal/DevList';
import { getAllTranslation } from '../db/TranslationProjectsData';
import TranslationList from '../components/TranslationModal/TranslationList';
import { getAllCreative } from '../db/CreativeProjectsData';
import CreativeList from '../components/CreativeModal/CreativeList';
import { ScrollAnimate } from '../components/ScrollAnimate';
import { BounceEffect } from '../components/BounceRevealEffect';
import { SlideEffect } from '../components/SlideRevealEffect';


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

export type ProjectCard = {
    id: number;
    src: string;
    title: string;
    summary: string;
    tools: string[];
    link: string;
}


const Projects = () => {
      const [activeTab, setActiveTab] = useState<number>(0);
      const devProjects = getAllDev();
      const translationProjects = getAllTranslation();
      const creativeProjects = getAllCreative();


    const tabs = [
        {
            title: "SOFTWARE DEVELOPMENT",
            // content:(
            //       <DevList devProjects={devProjects}/>
            // ),
        },
        {
            title: "TRANSLATION",
            // content:(
            //       <div>
            //       <TranslationList translationProjects={translationProjects}/>
            //       </div>
            // ),

        },
        {
            title: "ARTWORK",
            // content:(
            //       <div>
            //       <CreativeList creativeProjects={creativeProjects}/>
            //       </div>
            // ),

        }
    ];

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
      <section>
      <ScrollAnimate>
            <div className="pt-10">
            {/* render tabs */}
            <div className={`${tiltwarp.className} flex flex-row gap-1 text-center text-white`}>
                  {tabs.map((tab, index) => (
                        <div
                              key={index}
                              className={`w-full flex justify-center items-center pt-6 pb-6 cursor-pointer ${activeTab === index ? "rainbow-text text-transparent animate-gradient" : "bg-gradient-to-b from-zinc-600 to-zinc-950 hover:bg-gradient-to-b from-gray-300 to-zinc-950" }`}
                              onClick={() => handleTabClick(index)}>
                              {tab.title}
                        </div>
                  ))}
            </div>

            {/* render tab contents */}
            <div className="bg-zinc-950 pt-5 pb-10 pl-3 pr-3 md:pl-20 md:pr-20 -top-[5]">
                  {activeTab === 0 && <DevList devProjects={devProjects} />}
                  {activeTab === 1 && <TranslationList translationProjects={translationProjects} />}
                  {activeTab === 2 && <CreativeList creativeProjects={creativeProjects} />}
            </div>          
      </div>
      </ScrollAnimate>
      </section>
 )
}


export default Projects