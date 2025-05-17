export type ProjectCard = {
    id: string;
    src: string;
    title:string;
    summary: string;
    tools: string[];
    link: string;
}

    const creativeProjectsData: ProjectCard[] = [
    {
        id: "1",
        title:"3D Monster (for 3D Print)",
        src: "/art_images/3D_Monster.gif",
        summary: "A friend designed a monster for her manga and I recreated it as a 3D model. It was later 3D printed with ASB material.",
        tools: ["Blender 3D"],
        link: "",
    },
    {
        id: "2",
        title:"Space Birthday Cake",
        src: "/art_images/Space_Birthday_Cake.gif",
        summary: "",
        tools: ["Adobe After Effects"],
        link: "",
    },
    {
        id: "3",
        title:"Sailor V Transformation",
        src: "/art_images/Sailor_V_Transformation.gif",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "4",
        title:"Yukata ChisaTaki",
        src: "/art_images/Yukata_Chisataki.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "5",
        title:"Pikachu Donut",
        src: "/art_images/Pikachu_Donut.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "6",
        title:"PiKaChuuu",
        src: "/art_images/PiKaChuuu.gif",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "7",
        title:"Taiyaki",
        src: "/art_images/Taiyaki.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "8",
        title:"Swimming Fish",
        src: "/art_images/Swimming_Fish.gif",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "9",
        title:"Switch",
        src: "/art_images/Switch.gif",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "10",
        title:"Pikachu Run",
        src: "/art_images/Pikachu_Run.gif",
        summary: "2D animation of Pikachu running.",
        tools: ["Photoshop"],
        link: "",
    },
    {
        id: "11",
        title:"The High Priestess",
        src: "/art_images/The_High_Priestess.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "12",
        title:"The Magician",
        src: "/art_images/The_Magician.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "13",
        title:"The Devil",
        src: "/art_images/The_Devil.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "14",
        title:"The Emperor",
        src: "/art_images/The_Emperor.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "15",
        title:"The Tower",
        src: "/art_images/The_Tower.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "16",
        title:"Merry Christmas Horses",
        src: "/art_images/Merry_Christmas_Horses.jpg",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "17",
        title:"Merry Christmas Corgi",
        src: "/art_images/Merry_Christmas_Corgi.jpg",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "18",
        title:"Yamper Card",
        src: "/art_images/Yamper_Card.gif",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "19",
        title:"Osechi",
        src: "/art_images/Osechi.png",
        summary: "",
        tools: [],
        link: "",
    },
    {
        id: "20",
        title:"SatoRika Watanagashi",
        src: "/art_images/SatoRika_Watanagashi.png",
        summary: "",
        tools: ["Adobe Sketch"],
        link: "",
    },
    {
        id: "21",
        title:"SatoRika Hinamizawa",
        src: "/art_images/SatoRika_Hinamizawa.png",
        summary: "",
        tools: ["Adobe Sketch"],
        link: "",
    },
]

const getAllCreative = () => {
    return creativeProjectsData;
}

const getOneCreative = (id: string) => {
    return creativeProjectsData.find(creativeProject => creativeProject.id === id);
}

export {getAllCreative, getOneCreative}