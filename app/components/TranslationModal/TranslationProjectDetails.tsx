


interface TranslationProject {
  id: string;
  src: string;
  title: string;
  summary: string;
  tools: string[];
  link?: string;
}

interface Props {
  translationProject: TranslationProject;
}

const TranslationProjectDetails = ({ translationProject }: Props) => {
  return (
    <div>
      <img 
        src={translationProject.src} 
        alt={translationProject.title}
      />
      <h2 className="text-xl my-2">
        {translationProject.title}
      </h2>
      <div className="my-2 mx-2 p-2 border-slate-400 border rounded text-3xl text-center">
        {translationProject.summary}
      </div>
      {translationProject.tools}
    </div>
  );
};

export default TranslationProjectDetails;