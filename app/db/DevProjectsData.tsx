//DO NOT USE "USE CLIENT" ON THIS FILE OR IT WILL EFF THINGS UP!!!!　GIVES A CLIENT/SERVER SIDE ERROR


export type ProjectCard = {
    id: string;
    src: string;
    title:string;
    summary: string;
    tools: string[];
    link: string;
}

    const devProjectsData: ProjectCard[] = [
    {
        id: "1",
        title:"aegisub",
        src: "",
        summary: "wvwebvaebeafvavebwerbqwerbwe",
        tools: [],
        link: "",
    },
    {
        id: "2",
        title:"aegisub",
        src: "/images/aegisub.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "3",
        title:"aegisub",
        src: "/images/aegisub.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "4",
        title:"aegisub",
        src: "/images/aegisub.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "5",
        title:"aegisub",
        src: "/images/aegisub.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "6",
        title:"aegisub",
        src: "/images/aegisub.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "7",
        title:"aegisub",
        src: "/images/aegisub.png",
        summary: "",
        tools: [],
        link: "",
    },
    
]

const getAllDev = () => {
    return devProjectsData;
}

const getOneDev = (id: string) => {
    return devProjectsData.find(devProject => devProject.id === id);
}

export {getAllDev, getOneDev}
