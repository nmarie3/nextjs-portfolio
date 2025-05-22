//DO NOT USE "USE CLIENT" ON THIS FILE OR IT WILL EFF THINGS UP!!!!　GIVES A CLIENT/SERVER SIDE ERROR


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

    const devProjectsData: ProjectCard[] = [
    {
        id: "1",
        title:"My Portfolio",
        src: "/dev_images/portfolio.png",
        summary: "",
        tools: [
            {name: "Next JS"},
            {name: "Typescript"},
            {name: "Framer Motion"},
            {name: "Tailwind CSS"},
            {name: "Adobe Xd"},
            {name: "Illustrator"},
        ],
        link: "https://github.com/nmarie3/nextjs-portfolio",
        status:"",
        type: "",
    },
    {
        id: "2",
        title:"Idol Landing Page",
        src: "/dev_images/idol.png",
        summary: "",
        tools: [
            {name: "React"},
            {name: "Typescript"},
        ],
        link: "https://github.com/nmarie3/idol-LP",
        status:"",
        type: "Practice project",
    },
    {
        id: "3",
        title:"Spud's Space Splash",
        src: "/dev_images/spud.png",
        summary: "Itch.io 20 Sec. Game Jam submission",
        tools: [
            {name: "Game Maker"},
        ],
        link: "https://washedonshore.itch.io/spuds-space-splash",
        status:"",
        type: "",
    },
    {
        id: "4",
        title:"Real Time Rocket Launcher Countdown",
        src: "/dev_images/rocket_countdown.png",
        summary: "",
        tools: [
            {name: "Javascript"}, 
            {name: "HTML"},
            {name: "CSS"},
        ],
        link: "https://github.com/nmarie3/rocketLaunchCountdown",
        status:"",
        type: "",
    },
    {
        id: "5",
        title:"07th Expansion Landing Page",
        src: "/dev_images/07th.png",
        summary: "",
        tools: [
            {name: "React"},
            {name: "Typescript"},
        ],
        link: "https://github.com/nmarie3/CenterForce-/tree/main/HTML%E3%83%BBCSS/07expansion-ts-copy",
        status:"",
        type: "Practice project",
    },
        {
        id: "6",
        title:"Black Thunder Landing Page",
        src: "/dev_images/blackThunder.png",
        summary: "",
        tools: [
            {name: "React"},
            {name: "Typescript"},
        ],
        link: "https://github.com/nmarie3/CenterForce-/tree/main/HTML%E3%83%BBCSS/bthunder-ts-copy",
        status:"",
        type: "Practice project",
    },
    {
        id: "7",
        title:"Linebreak Checker",
        src: "/dev_images/linebreak_checker.png",
        summary: "",
        tools: [
            {name: "Javascript"},
            {name: "HTML"},
            {name: "CSS"},
        ],
        link: "https://github.com/nmarie3/character_cutoff",
        status:"",
        type: "",
    },
    {
        id: "8",
        title:"Coming Soon",
        src: "/images/comingSoon.jpg",
        summary: "",
        tools: [
            {name: "Three JS"},
            {name: "Typescript"},
        ],
        link: "",
        status:"Ongoing",
        type: "",
    },
        {
        id: "9",
        title:"Coming Soon",
        src: "/images/comingSoon.jpg",
        summary: "",
        tools: [
            {name: "MySQL"},
            {name: "Docker"},
            {name: "Golang"},
            {name: "Typescript"},
            {name: "Vite"},
            {name: "Tailwind CSS"},
        ],
        link: "",
        status:"Ongoing",
        type: "",
    },
]

const getAllDev = () => {
    return devProjectsData;
}

const getOneDev = (id: string) => {
    return devProjectsData.find(devProject => devProject.id === id);
}

export {getAllDev, getOneDev}
