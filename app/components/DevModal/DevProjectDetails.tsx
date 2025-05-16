


interface DevProject {
  id: string;
  title: string;
  summary: string;
}

interface Props {
  devProject: DevProject;
}

const DevProjectDetails = ({ devProject }: Props) => {
  return (
    <div>
      <h2 className="text-xl my-2">
        {devProject.title}
      </h2>
      <div className="my-2 mx-2 p-2 border-slate-400 border rounded text-3xl text-center">
        {devProject.summary}
      </div>
    </div>
  );
};

export default DevProjectDetails;