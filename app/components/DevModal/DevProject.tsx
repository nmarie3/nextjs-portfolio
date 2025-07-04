
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


const DevProject = ({ devProject }: { devProject: DevProject }) => {

    return (
        <div className="w-[100px] h-[100px] sm:w-[150px] lg:h-[200px] lg:w-[200px] sm:h-[150px] relative group overflow-hidden rounded shadow-white">
            <img 
              src={devProject.src} 
              alt={devProject.title}
              className="w-full h-full object-cover transition-transform duration-300 scale-105 group-hover:scale-120"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm font-semibold text-center px-2">
                {devProject.title}
              </span>
            </div>
        </div>
    );
};

export default DevProject