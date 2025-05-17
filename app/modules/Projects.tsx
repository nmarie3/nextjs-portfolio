'use client'
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
            <div>
            {/* render tabs */}
            <div className="flex flex-row gap-3 justify-between ">
                  {tabs.map((tab, index) => (
                        <div
                              key={index}
                              className={`w-full flex justify-center rounded-t-2xl pt-6 pb-6 cursor-pointer ${activeTab === index ? 'bg-green-500 text-white' : 'bg-red-200 hover:bg-gray-300' }`}
                              onClick={() => handleTabClick(index)}>
                              {tab.title}
                        </div>
                  ))}
            </div>

            {/* render tab contents */}
            <div className="bg-green-500 pt-10 pb-10 pl-20 pr-20">
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