'use client'
import { Tilt_Warp} from 'next/font/google';
import React, { useState } from 'react';
import { getAllDev } from '../db/DevProjectsData';
import DevList from '../components/DevModal/DevList';
import { getAllTranslation } from '../db/TranslationProjectsData';
import TranslationList from '../components/TranslationModal/TranslationList';
import { getAllCreative } from '../db/CreativeProjectsData';
import CreativeList from '../components/CreativeModal/CreativeList';
import { ScrollAnimate } from '../components/ScrollAnimate';


const tiltwarp = Tilt_Warp({
  weight: ["400"],
  subsets: ['latin'],
})


export type ProjectCard = {
    id: string;
    src: string;
    title:string;
    summary: string;
    tools: Tool[];
    link: string;
    status: string;
    type: string;
}

export type Tool = {
  name: string;
};


const Projects = () => {
      const [activeTab, setActiveTab] = useState<number>(0);
      const devProjects = getAllDev();
      const translationProjects = getAllTranslation();
      const creativeProjects = getAllCreative();


    const tabs = [
        {
            title: "DEV",
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
            title: "CREATIVE",
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
      <section id="projects" className="overflow-hidden">
<ScrollAnimate>
            <div className="pt-5 text-center flex-col justify-center">
            <h2 className={`${tiltwarp.className} mb-7 rainbow-text text-transparent animate-gradient text-4xl sm:text-5xl`}>Projects</h2>  
            {/* render tabs */}
            <div className={`${tiltwarp.className} flex flex-row gap-1 text-center text-white`}>
                  {tabs.map((tab, index) => (
                        <div
                              key={index}
                              className={`w-full flex justify-center md:text-xl items-center pt-6 pb-6 cursor-pointer ${activeTab === index ? "rainbow-text text-transparent animate-gradient" : "bg-gradient-to-b from-gray-800 to-zinc-950 hover:bg-gradient-to-b from-gray-300 to-zinc-950" }`}
                              onClick={() => handleTabClick(index)}>
                              {tab.title}
                        </div>
                  ))}
            </div>

            {/* render tab contents */}
            <div className="bg-zinc-950 pt-5 pb-10">
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