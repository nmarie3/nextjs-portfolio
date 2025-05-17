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
        title:"cwcw",
        src: "/images/aegisub.png",
        summary: "qcqcq",
        tools: [],
        link: "",
    },
    {
        id: "2",
        title:"jju",
        src: "/images/aegisub.png",
        summary: "jgjfv,",
        tools: [],
        link: "",
    },
    {
        id: "3",
        title:"ttfhk",
        src: "/images/aegisub.png",
        summary: "azrezrg",
        tools: [],
        link: "",
    },
    {
        id: "4",
        title:"cwcw",
        src: "/images/aegisub.png",
        summary: "qcqcq",
        tools: [],
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