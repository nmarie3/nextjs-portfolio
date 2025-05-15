'use client';
import React from 'react'

export type ProjectCard = {
    id: number;
    src: string;
    title:string;
    summary: string;
    tools: string[];
    link: string;
}

    const creativeProjectsData: ProjectCard[] = [
    {
        id: 1,
        title:"",
        src: "",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: 2,
        title:"",
        src: "",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: 3,
        title:"",
        src: "",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: 4,
        title:"",
        src: "",
        summary: "",
        tools: [],
        link: "",
    },
]

const getAllCreative = () => {
    return creativeProjectsData;
}

const getOneCreative = (id: number) => {
    return creativeProjectsData.find(creativeProject => creativeProject.id === id);
}

export {getAllCreative, getOneCreative}