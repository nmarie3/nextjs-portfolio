'use client'
import React, { useState } from 'react';
import { getAllDev } from '../db/DevProjectsData';
import DevList from '../components/DevModal/DevList';
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


    const tabContents = [
        {
            title: "SOFTWARE DEVELOPMENT",
            content:(
                  <DevList devProjects={devProjects}/>
            ),
        },
        {
            title: "TRANSLATION",
            content:(
                  <div>
                  <DevList devProjects={devProjects}/>
                  </div>
            ),

        },
        {
            title: "ARTWORK",
            content:(
                  <div>
                  <DevList devProjects={devProjects}/>
                  </div>
            ),

        }
    ];

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        console.log('active tab', index)
        console.log(tabContents[activeTab].content)
    };

    return (
      <section>
      <ScrollAnimate>
            <div>
            {/* render tabs */}
            <div className="flex flex-row gap-3 justify-between ">
                  {tabContents.map((tab, index) => (
                        <div
                              key={index}
                              className={`w-full flex justify-center rounded-t-2xl pt-6 pb-6 cursor-pointer ${activeTab === index ? 'bg-green-500 text-white' : 'bg-red-200 hover:bg-gray-300' }`}
                              onClick={() => handleTabClick(index)}>
                              {tab.title}
                        </div>
                  ))}
            </div>

            {/* render tab contents */}
            <div className="flex justify-between gap-3 bg-green-500">
                  {activeTab === 0 && <DevList devProjects={devProjects} />}
                  {activeTab === 1 && <DevList devProjects={devProjects} />}
                  {activeTab === 3 && <DevList devProjects={devProjects} />}
            </div>          
      </div>
      </ScrollAnimate>
      </section>
 )
}


export default Projects