


interface CreativeProject {
  id: string;
  src: string;
  title: string;
  summary: string;
  tools: string[];
  link?: string;
}

interface Props {
  creativeProject: CreativeProject;
}

const CreativeProjectDetails = ({ creativeProject }: Props) => {
  return (
    //maybe add a header in her to be sent to homepage
    <div>
      <img 
        src={creativeProject.src} 
        alt={creativeProject.title}
      />
      <h2 className="text-xl my-2">
        {creativeProject.title}
      </h2>
      <div className="my-2 mx-2 p-2 border-slate-400 border rounded text-3xl text-center">
        {creativeProject.summary}
      </div>
      {creativeProject.tools}
    </div>
  );
};

export default CreativeProjectDetails;