
type TranslationProject = {
    id: string;
    src: string;
    title:string;
    summary: string;
    tools: string[];
    link: string;
};


const TranslationProject = ({ translationProject }: { translationProject: TranslationProject }) => {

    return (
        <div className="relative group overflow-hidden rounded shadow">
  <img 
    src={translationProject.src} 
    alt={translationProject.title}
    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-120"
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