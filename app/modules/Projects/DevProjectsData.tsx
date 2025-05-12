'use client';
import React from 'react'
import Image from 'next/image';

export type ProjectCard = {
    id: number;
    src: string;
    title:string;
    summary: string;
    tools: string[];
    link: string;
}

export const DevProjectsData: ProjectCard[] = [
    {
        id: 1,
        title:"aegisub",
        src: "/images/aegisub.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: 2,
        title:"aegisub",
        src: "/images/aegisub.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: 3,
        title:"aegisub",
        src: "/images/aegisub.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: 4,
        title:"aegisub",
        src: "/images/aegisub.png",
        summary: "",
        tools: [],
        link: "",
    },
]

export default DevProjectsData
