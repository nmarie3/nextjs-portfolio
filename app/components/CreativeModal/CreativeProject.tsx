
type CreativeProject = {
    id: string;
    src: string;
    title:string;
    summary: string;
    tools: string[];
    link: string;
};


const CreativeProject = ({ creativeProject }: { creativeProject: CreativeProject }) => {

    return (
        <div className="w-[200px] h-[200px] relative group overflow-hidden rounded shadow">
  <img 
    src={creativeProject.src} 
    alt={creativeProject.title}
    className="w-full h-full object-cover transition-transform duration-300 scale-105 group-hover:scale-120"
  />
  <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <span className="text-white text-sm font-semibold text-center px-2">
      {creativeProject.title}
    </span>
  </div>
</div>
    );
};

export default CreativeProject