import Link from "next/link";
import CreativeProjectDisplay from "./CreativeProject";
import { BounceEffect } from "../BounceRevealEffect";

type CreativeProject = {
  id: string;
  src: string;
  title:string;
  summary: string;
  tools: string[];
  link: string;
};

const CreativeList = ({ creativeProjects }: { creativeProjects: CreativeProject[] }) => {

    return (
        <div className="flex justify-center flex-wrap pb-5 px-3">
            {creativeProjects.map((creativeProject, index) => (
                <Link key={creativeProject.id} href={`/PageCreativeProjects/${creativeProject.id}`}>
                    <div className="flex justify-start m-1 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] overflow-hidden">
                    <BounceEffect delay={index * 0.2} stiffness={100} damping={10}>
                        <div className="w-full h-full object-cover">
                            <CreativeProjectDisplay creativeProject={creativeProject}/>
                        </div>
                        </BounceEffect>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CreativeList;