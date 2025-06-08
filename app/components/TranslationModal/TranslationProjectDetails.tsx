import {M_PLUS_1p} from 'next/font/google';


export type TranslationProject = {
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

interface Props {
  translationProject: TranslationProject;
}

const mplus = M_PLUS_1p({
  weight: ["400"],
  subsets: ['latin'],
})

const TranslationProjectDetails = ({ translationProject }: Props) => {
  return (
    <div className={`${mplus.className} flex flex-col items-center justify-center`}>
      <img 
        src={translationProject.src} 
        alt={translationProject.title}
        className="max-h-[60vh]"
      />
      <h2 className="text-3xl text-center my-2">
        {translationProject.title}
      </h2>
      <div className="flex gap-10">
        {translationProject.status && (
          <h2 className="text-sm">Status: {translationProject.status}</h2>
        )}
        {translationProject.type && (
          <h2 className="text-sm">Type: {translationProject.type}</h2>
        )}
      </div>
      {/*dont show if empty string*/}
      {translationProject.summary.trim() !== '' && (
        <div className="mt-2 mx-2 p-2 text-lg text-center">
          {translationProject.summary.split('<br />').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </div>
      )}
      {/*dont show if empty array*/}
      {translationProject.tools.length > 0 && (
        <div className="flex items-center flex-wrap gap-y-0 gap-2">
          {translationProject.tools.map((tool, index) => (
            <span key={index} className="text-center mt-3 bg-blue-400 text-white p-1 rounded-sm">
              {tool.name}
            </span>
          ))}
        </div>
      )}
      {/*end*/}
      {/*dont show if empty string*/}
      {translationProject.link && (
        <h2 className="text-sm mt-3 underline"><a href={translationProject.link} target="_blank" rel="noopener noreferrer">View Project</a></h2>
      )}
      {/*end*/}
    </div>
  );
};

export default TranslationProjectDetails;