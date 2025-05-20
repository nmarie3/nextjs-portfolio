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

    const creativeProjectsData: ProjectCard[] = [
    {
        id: "1",
        title:"3D Monster (for 3D Print)",
        src: "/art_images/3D_Monster.gif",
        summary: "",
        tools: [
            {name: "Blender 3D"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "2",
        title:"Space Birthday Cake",
        src: "/art_images/Space_Birthday_Cake.gif",
        summary: "",
        tools: [
            {name: "Blender 3D"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "3",
        title:"Sailor Venus Transformation",
        src: "/art_images/Sailor_V_Transformation.gif",
        summary: "",
        tools: [
            {name: "After Effects"},
            {name: "Photoshop"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "4",
        title:"Yukata LycoReco",
        src: "/art_images/Yukata_Chisataki.png",
        summary: "",
        tools: [
            {name: "Photoshop"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "5",
        title:"Pikachu Donut",
        src: "/art_images/Pikachu_Donut.png",
        summary: "",
        tools: [
            {name: ""},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "6",
        title:"Pikachu Thunderbolt",
        src: "/art_images/PiKaChuuu.gif",
        summary: "",
        tools: [
            {name: "After Effects"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "7",
        title:"Taiyaki",
        src: "/art_images/Taiyaki.png",
        summary: "",
        tools: [
            {name: "Blender 3D"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "8",
        title:"Swimming Fish",
        src: "/art_images/Swimming_Fish.gif",
        summary: "",
           tools: [
            {name: "After Effects"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "9",
        title:"Switch",
        src: "/art_images/Switch.gif",
        summary: "",
        tools: [
            {name: "After Effects"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "10",
        title:"Pikachu Run",
        src: "/art_images/Pikachu_Run.gif",
        summary: "2D animation of Pikachu running.",
        tools: [
            {name: "Photoshop"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "11",
        title:"The High Priestess",
        src: "/art_images/The_High_Priestess.png",
        summary: "",
        tools: [
            {name: "Photoshop"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "12",
        title:"The Magician",
        src: "/art_images/The_Magician.png",
        summary: "",
        tools: [
            {name: "Photoshop"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "13",
        title:"The Devil",
        src: "/art_images/The_Devil.png",
        summary: "",
        tools: [
            {name: "Photoshop"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "14",
        title:"The Emperor",
        src: "/art_images/The_Emperor.png",
        summary: "",
        tools: [
            {name: "Photoshop"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "15",
        title:"The Tower",
        src: "/art_images/The_Tower.png",
        summary: "",
        tools: [
            {name: "Photoshop"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "16",
        title:"Merry Christmas Horses",
        src: "/art_images/Merry_Christmas_Horses.jpg",
        summary: "",
        tools: [
            {name: "Photoshop"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "17",
        title:"Merry Christmas Corgi",
        src: "/art_images/Merry_Christmas_Corgi.jpg",
        summary: "",
        tools: [
            {name: "Photoshop"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "18",
        title:"Yamper Card",
        src: "/art_images/Yamper_Card.gif",
        summary: "",
        tools: [
            {name: "Blender 3D"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "19",
        title:"Osechi",
        src: "/art_images/Osechi.png",
        summary: "",
        tools: [
            {name: "Photoshop"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "20",
        title:"Higurashi Watanagashi",
        src: "/art_images/SatoRika_Watanagashi.png",
        summary: "",
        tools: [
            {name: "Adobe Sketch"},
        ],
        link: "",
        status:"",
        type: "",
    },
    {
        id: "21",
        title:"Higurashi Hinamizawa",
        src: "/art_images/SatoRika_Hinamizawa.png",
        summary: "",
        tools: [
            {name: "Adobe Sketch"},
        ],
        link: "",
        status:"",
        type: "",
    },
]

const getAllCreative = () => {
    return creativeProjectsData;
}

const getOneCreative = (id: string) => {
    return creativeProjectsData.find(creativeProject => creativeProject.id === id);
}

export {getAllCreative, getOneCreative}