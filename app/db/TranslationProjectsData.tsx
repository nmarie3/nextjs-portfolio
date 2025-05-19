export type ProjectCard = {
    id: string;
    src: string;
    title:string;
    summary: string;
    tools: string[];
    link: string;
}

export const translationProjectsData: ProjectCard[] = [
    {
        id: "1",
        title:"SINoALICE",
        src: "/translation_images/sinoalice.png",
        summary: "qcqcq",
        tools: [],
        link: "",
    },
    {
        id: "2",
        title:"Another Eden",
        src: "/translation_images/anotherEden.jpg",
        summary: "jgjfv,",
        tools: [],
        link: "",
    },
    {
        id: "3",
        title:"Gran Blue Fantasy",
        src: "/translation_images/granblue.jpg",
        summary: "granblue",
        tools: [],
        link: "",
    },
    {
        id: "4",
        title:"One Piece Treasure Cruise",
        src: "/translation_images/onepiece.jpg",
        summary: "qcqcq",
        tools: [],
        link: "",
    },
    {
        id: "4",
        title:"Live Action Mahou Sensei Negima",
        src: "/translation_images/negima.png",
        summary: "qcqcq",
        tools: ["Aegisub"],
        link: "",
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