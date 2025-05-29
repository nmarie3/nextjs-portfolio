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

export const translationProjectsData: ProjectCard[] = [
    {
        id: "1",
        title:"SINoALICE",
        src: "/translation_images/sinoalice.png",
        summary: "Mobile game",
        tools: [

        ],
        link: "",
        status: "契約終了",
        type: "仕事",
    },
    {
        id: "2",
        title:"Another Eden",
        src: "/translation_images/anotherEden.jpg",
        summary: "Mobile and Steam PC game",
        tools: [

        ],
        link: "",
        status:"制約終了",
        type: "仕事",
    },
    {
        id: "3",
        title:"GranBlue Fantasy",
        src: "/translation_images/granblue.jpg",
        summary: "Mobile game",
        tools: [

        ],
        link: "",
        status:"契約終了",
        type: "仕事",
    },
    {
        id: "4",
        title:"One Piece Treasure Cruise",
        src: "/translation_images/onepiece.jpg",
        summary: "Mobile game",
        tools: [

        ],
        link: "",
        status:"契約終了",
        type: "仕事",
    },
    {
        id: "5",
        title:"Live Action Mahou Sensei Negima!",
        src: "/translation_images/negima.png",
        summary: "実写化ドラマ 魔法先生ネギま！",
        tools: [
            {name: "Aegisub"},
        ],
        link: "",
        status:"進行中",
        type: "趣味",
    },
    {
        id: "6",
        title:"Real Zero: Another Edition",
        src: "/translation_images/realZero.png",
        summary: "FOMA 900i, 901i, 902i series mobile phones",
        tools: [
  
        ],
        link: "",
        status: "進行中",
        type: "趣味",
    },
        {
        id: "7",
        title:"Manga",
        src: "/translation_images/mangacollage.png",
        summary: "・フリーランス日英漫画翻訳",
        tools: [

        ],
        link: "",
        status: "進行中",
        type: "仕事 & 趣味",
    },
]

export default translationProjectsData


const getAllTranslation = () => {
    return translationProjectsData;
}

const getOneTranslation = (id: string) => {
    return translationProjectsData.find(translationProject => translationProject.id === id);
}

export {getAllTranslation, getOneTranslation}