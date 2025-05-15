
type DevProject = {
  id: number;
    src: string;
    title:string;
    summary: string;
    tools: string[];
    link: string;
};


const ProjectCard = ({ devProject }: { devProject: DevProject }) => {

    return (
        <div className="dark:bg-slate-500 m-4 border dark:border-teal-300 p-1 rounded-lg h-50 w-50">
                <img 
                    src={devProject.src} 
                    alt={devProject.title}
                />
        </div>
    );
};

export default ProjectCard