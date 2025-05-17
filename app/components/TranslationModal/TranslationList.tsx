import Link from "next/link";
import TranslationProjectDisplay from "./TranslationProject";
import { BounceEffect } from "../BounceRevealEffect";

type TranslationProject = {
  id: string;
  src: string;
  title:string;
  summary: string;
  tools: string[];
  link: string;
};

const TranslationList = ({ translationProjects }: { translationProjects: TranslationProject[] }) => {

    return (
        <div className="flex flex-wrap justify-start">
            {translationProjects.map((translationProject, index) => (
                <Link key={translationProject.id} href={`/PageTranslationProjects/${translationProject.id}`}>
                    <BounceEffect delay={index * 0.2} stiffness={100} damping={10}>
                        <div className="">
                            <TranslationProjectDisplay translationProject={translationProject} />
                        </div>
                        </BounceEffect>
                </Link>
            ))}
        </div>
    );
};

export default TranslationList;