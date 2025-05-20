
type TranslationProject = {
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


const TranslationProject = ({ translationProject }: { translationProject: TranslationProject }) => {

    return (
        <div className="w-[100px] h-[100px] sm:w-[150px] lg:h-[200px] lg:w-[200px] sm:h-[150px] relative group overflow-hidden rounded shadow-white">
            <img 
              src={translationProject.src} 
              alt={translationProject.title}
              className="w-full h-full object-cover transition-transform duration-300 scale-105 group-hover:scale-120"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm font-semibold text-center px-2">
                {translationProject.title}
              </span>
            </div>
        </div>
    );
};

export default TranslationProject