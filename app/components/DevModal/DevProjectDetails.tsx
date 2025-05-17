


interface DevProject {
  id: string;
  src: string;
  title: string;
  summary: string;
  tools: string[];
  link?: string;
}

interface Props {
  devProject: DevProject;
}

const DevProjectDetails = ({ devProject}: Props) => {
  return (
    <div>
      <img 
        src={devProject.src} 
        alt={devProject.title}
      />
      <h2 className="text-xl my-2">
        {devProject.title}
      </h2>
      <div className="my-2 mx-2 p-2 border-slate-400 border rounded text-3xl text-center">
        {devProject.summary}
      </div>
      {devProject.tools}
    </div>
  );
};

export default DevProjectDetails;