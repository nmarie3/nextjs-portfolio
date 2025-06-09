//DO NOT USE "USE CLIENT" ON THIS FILE OR IT WILL EFF THINGS UP!!!!　GIVES A CLIENT/SERVER SIDE ERROR


export type ProjectCard = {
    id: string;
    src: string;
    title:string;
    summary: string;
    tools: Tool[];
    link1: string;
    link2: string;
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
            {name: "NextJS"},
            {name: "Typescript"},
            {name: "Framer Motion"},
            {name: "Tailwind CSS"},
            {name: "Adobe Xd"},
            {name: "Illustrator"},
        ],
        link1: "https://github.com/nmarie3/nextjs-portfolio",
        link2: "https://hello-natasha.dev",
        status:"完了",
        type: "ポートフォリオ",
    },
    {
        id: "2",
        title:"Cafe LycoReco Menu",
        src: "/dev_images/cafelycoreco_menu.png",
        summary: "",
        tools: [
            {name: "Three.js"},
            {name: "React"},
            {name: "Javascript"},
            {name: "Vite"},
            {name: "Tailwind CSS"},
            {name: "Photoshop"},
        ],
        link1: "https://github.com/nmarie3/threejs-cafeLR",
        link2: "https://cafelycoreco-menu.netlify.app/",
        status:"完了",
        type: "趣味",
    },
    {
        id: "3",
        title:"Pui Pui Sekai ECサイト",
        src: "/dev_images/pui-pui-sekai.png",
        summary: "",
        tools: [
            {name: "NextJS"},
            {name: "NuxtJS"},
            {name: "Typescript"},
            {name: "Tailwind CSS"},
        ],
        link1: "https://github.com/nmarie3/pui-pui-sekai",
        link2: "",
        status:"作成中",
        type: "練習",
    },
    {
        id: "4",
        title:"Idol LP",
        src: "/dev_images/idol.png",
        summary: "",
        tools: [
            {name: "React"},
            {name: "Typescript"},
        ],
        link1: "https://github.com/nmarie3/idol-LP",
        link2: "https://nmarie3.github.io/idol-LP/",
        status:"完了",
        type: "練習",
    },
    {
        id: "5",
        title:"Spud's Space Splash",
        src: "/dev_images/spud.png",
        summary: "Itch.io 20 Sec. Game Jam submission",
        tools: [
            {name: "Game Maker"},
        ],
        link1: "",
        link2: "https://washedonshore.itch.io/spuds-space-splash",
        status:"完了",
        type: "イベント",
    },
    {
        id: "6",
        title:"Real Time Rocket Launcher Countdown",
        src: "/dev_images/rocket_countdown.png",
        summary: "",
        tools: [
            {name: "Javascript"}, 
            {name: "HTML"},
            {name: "CSS"},
        ],
        link1: "https://github.com/nmarie3/rocketLaunchCountdown",
        link2: "https://nmarie3.github.io/rocketLaunchCountdown/",
        status:"一旦完了・更新する予定",
        type: "",
    },
    {
        id: "7",
        title:"07th Expansion Landing Page",
        src: "/dev_images/07th.png",
        summary: "",
        tools: [
            {name: "React"},
            {name: "Typescript"},
        ],
        link1: "https://github.com/nmarie3/CenterForce-/tree/main/HTML%E3%83%BBCSS/07expansion-ts-copy",
        link2: "",
        status:"完了",
        type: "練習",
    },
        {
        id: "8",
        title:"Black Thunder Landing Page",
        src: "/dev_images/blackThunder.png",
        summary: "",
        tools: [
            {name: "React"},
            {name: "Typescript"},
        ],
        link1: "https://github.com/nmarie3/CenterForce-/tree/main/HTML%E3%83%BBCSS/bthunder-ts-copy",
        link2: "",
        status:"完了",
        type: "練習",
    },
    {
        id: "9",
        title:"Linebreak Checker",
        src: "/dev_images/linebreak_checker.png",
        summary: "",
        tools: [
            {name: "Javascript"},
            {name: "HTML"},
            {name: "CSS"},
        ],
        link1: "https://github.com/nmarie3/character_cutoff",
        link2: "",
        status:"完了",
        type: "仕事で利用",
    },
    {
        id: "10",
        title:"Coming Soon",
        src: "/images/comingSoon.jpg",
        summary: "",
        tools: [
            {name: "MySQL"},
            {name: "Docker"},
            {name: "Golang"},
            {name: "Typescript"},
        ],
        link1: "",
        link2: "",
        status:"作成中",
        type: "練習",
    },
]

const getAllDev = () => {
    return devProjectsData;
}

const getOneDev = (id: string) => {
    return devProjectsData.find(devProject => devProject.id === id);
}

export {getAllDev, getOneDev}
