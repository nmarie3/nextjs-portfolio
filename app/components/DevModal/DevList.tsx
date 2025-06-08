import Link from "next/link";
import DevProjectDisplay from "./DevProject";
import { BounceEffect } from "../BounceRevealEffect";

type DevProject = {
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

const DevList = ({ devProjects }: { devProjects: DevProject[] }) => {

    return (
        <div className="flex justify-center flex-wrap pb-5 px-3">
            {devProjects.map((devProject, index) => (
                <Link key={devProject.id} href={`/PageDevProjects/${devProject.id}`}>
                    <div className="flex justify-start m-1 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] overflow-hidden">
                    <BounceEffect delay={index * 0.1} stiffness={100} damping={10}>
                        <div className="w-full h-full object-cover">
                            <DevProjectDisplay devProject={devProject}/>
                        </div>
                        </BounceEffect>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default DevList;