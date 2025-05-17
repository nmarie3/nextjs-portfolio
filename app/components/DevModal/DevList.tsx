import Link from "next/link";
import DevProjectDisplay from "./DevProject";
import { BounceEffect } from "../BounceRevealEffect";

type DevProject = {
  id: string;
  src: string;
  title:string;
  summary: string;
  tools: string[];
  link: string;
};

const DevList = ({ devProjects }: { devProjects: DevProject[] }) => {

    return (
        <div className="flex flex-wrap justify-start">
            {devProjects.map((devProject, index) => (
                <Link key={devProject.id} href={`/PageDevProjects/${devProject.id}`}>
                    <div className="">
                    <BounceEffect delay={index * 0.2} stiffness={100} damping={10}><DevProjectDisplay devProject={devProject} /></BounceEffect>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default DevList;