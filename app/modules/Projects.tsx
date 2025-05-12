'use client'

import React, { useState } from 'react';
import {DevProjectsData} from './Projects/DevProjectsData';
import {TranslationProjectsData} from './Projects/TranslationProjectsData';
import {CreativeProjectsData} from './Projects/CreativeProjectsData';
// import Image from 'next/image'
// import { SiAdobeaftereffects, SiAdobephotoshop, SiBlender } from 'react-icons/si'
import ProjectCardComponent from './ProjectCardComponent';

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
      const [modal, setModal] = useState<ProjectCard | null>(null);

      const handleClick= (card: ProjectCard) => setModal(card);
      const closeModal = () => setModal(null);


    const tabContents = [
        {
            title: "SOFTWARE DEVELOPMENT",
            content:(
                  <div>
                        {DevProjectsData.map((project) => (
                              <ProjectCardComponent key={project.id} project={project} onClick={handleClick} />
                        ))}
                  </div>
            ),
        },
        {
            title: "TRANSLATION",
            content:(
                  <div>
                        {TranslationProjectsData.map((project) => (
                              <ProjectCardComponent key={project.id} project={project} onClick={handleClick} />
                        ))}
                  </div>
            ),

        },
        {
            title: "CREATIVE",
            content:(
                  <div>
                        {CreativeProjectsData.map((project) => (
                              <ProjectCardComponent key={project.id} project={project} onClick={handleClick} />
                        ))}
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
      <div>
            {/* render tabs */}
            <div className="flex justify-between gap-3 orange">
                  {tabContents.map((tab, index) => (
                        <div
                              key={index}
                              className={`tab ${activeTab === index ? 'active' : ""}`}
                              onClick={() => handleTabClick(index)}>
                              {tab.title}
                        </div>
                  ))}
            </div>
                  {/* render all contents
            <div className="flex flex-row mt-6">
                  {tabContents[activeTab].content}
            </div> */}

                  {/* render only image */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                  {(activeTab === 0 ? DevProjectsData
                  : activeTab === 1 ? TranslationProjectsData
                  : CreativeProjectsData
                  ).map((project) => (
                        <div key={project.id} className="relative group overflow-hidden rounded shadow">
                              <img
                                    src={project.src}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                               <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-sm font-semibold text-center px-2">{project.title}</span>
                              </div>
                        </div>
                  ))}      
            </div>      

                  {/* render modal */}
            {modal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                              <h2>{modal.title}</h2>
                              <h3>{modal.summary}</h3>
                              <p>Tools: {modal.tools.join(", ")}</p>
                              <a href={modal.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                              </a>
                        </div>
                  </div>
            )}
      </div>
    )
}


export default Projects
