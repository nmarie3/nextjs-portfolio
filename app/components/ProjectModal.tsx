'use client'
import React from "react";
import { ProjectCard } from "../modules/Projects";

type Props = {
  project: ProjectCard;
  onClick: (card: ProjectCard) => void;
};

const ProjectModal: React.FC<Props> = ({ project, onClick }) => {
  return (
    <div
      className="p-4 border rounded shadow cursor-pointer"
      onClick={() => onClick(project)}
    >
      <img src={project.src} alt={project.summary} className="w-full h-40 object-cover" />
      <h3 className="text-lg font-semibold mt-2">{project.summary}</h3>
      <p className="text-sm mt-1">Tools: {project.tools.join(", ")}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2 inline-block">
        View Project
      </a>
    </div>
  );
};

export default ProjectModal;