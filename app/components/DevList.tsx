import Link from "next/link";
import ProjectCard from "./ProjectCard";

type DevProject = {
  id: number;
  src: string;
  title:string;
  summary: string;
  tools: string[];
  link: string;
};

const DevList = ({ devProjects }: { devProjects: DevProject[] }) => {

    return (
        <div className="flex flex-wrap justify-start">
            {devProjects.map((devProject) => (
                <Link key={devProject.id} href={`/devProjects/${devProject.id}`}>
                    <ProjectCard devProject={devProject} />
                </Link>
            ))}
        </div>
    );
};

export default DevList;