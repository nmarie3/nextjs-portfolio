'use client'
import React, { useState } from 'react';
import { getAllDev } from '../db/DevProjectsData';
import DevList from '../components/DevList';


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
      //const [modal, setModal] = useState<ProjectCard | null>(null);
      const devProjects = getAllDev();

      // const handleClick= (card: ProjectCard) => setModal(card);
      // const closeModal = () => setModal(null);


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
                  // <div>
                  //       {TranslationProjectsData.map((project) => (
                  //             <ProjectModal key={project.id} project={project} onClick={handleClick} />
                  //       ))}
                  // </div>
            ),

        },
        {
            title: "CREATIVE",
            content:(
                  <div>
                  <DevList devProjects={devProjects}/>
                  </div>
                  // <div>
                  //       {CreativeProjectsData.map((project) => (
                  //             <ProjectModal key={project.id} project={project} onClick={handleClick} />
                  //       ))}
                  // </div>
            ),

        }
    ];

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        console.log('active tab', index)
        console.log(tabContents[activeTab].content)
    };

    return (
      <div>
            {/* render tabs */}
            <div className="cursor-pointer flex justify-between gap-3 orange">
                  {tabContents.map((tab, index) => (
                        <div
                              key={index}
                              className={`tab ${activeTab === index ? 'active' : ""}`}
                              onClick={() => handleTabClick(index)}>
                              {tab.title}
                        </div>
                  ))}
            </div>

            {/* render tab contents */}
            <div className="flex justify-between gap-3 orange">
                  {activeTab === 0 && <DevList devProjects={devProjects} />}
                  {activeTab === 1 && <DevList devProjects={devProjects} />}
                  {activeTab === 3 && <DevList devProjects={devProjects} />}
            </div>          
      </div>
 )
}


export default Projects