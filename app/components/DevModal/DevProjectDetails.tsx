import {M_PLUS_1p} from 'next/font/google';


export type DevProject = {
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
  devProject: DevProject;
}

const mplus = M_PLUS_1p({
  weight: ["400"],
  subsets: ['latin'],
})

const DevProjectDetails = ({ devProject }: Props) => {
  return (
    <div className={`${mplus.className} flex flex-col items-center justify-center`}>
      <img 
        src={devProject.src} 
        alt={devProject.title}
        className="max-h-[60vh]"
      />
      <h2 className="text-3xl text-center my-2">
        {devProject.title}
      </h2>
      <div className="flex gap-10">
        {devProject.status && (
          <h2 className="text-sm">Status: {devProject.status}</h2>
        )}
        {devProject.type && (
          <h2 className="text-sm">Type: {devProject.type}</h2>
        )}
      </div>
      {/*dont show if empty string*/}
      {devProject.summary.trim() !== '' && (
        <div className="my-2 mx-2 p-2 text-lg text-center">
          {devProject.summary.split('<br />').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </div>
      )}
      {/*dont show if empty array*/}
      {devProject.tools.length > 0 && (
        <div className="flex items-center flex-wrap gap-2">
          {devProject.tools.map((tool, index) => (
            <span key={index} className="text-center mt-3 bg-blue-400 text-white p-1 rounded-sm">
              {tool.name}
            </span>
          ))}
        </div>
      )}
      {/*end*/}
      {/*dont show if empty string*/}
      {devProject.link && (
        <h2 className="text-sm mt-3 underline"><a href={devProject.link} target="_blank" rel="noopener noreferrer">View Project</a></h2>
      )}
      {/*end*/}
    </div>
  );
};

export default DevProjectDetails;