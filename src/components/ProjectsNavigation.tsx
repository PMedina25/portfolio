import { useState } from "react";
import ProjectType from "../shared/enums/project-types.enum";
import projects from "../data/projects.json";
import ProjectCard from "./cards/ProjectCard.tsx";

const TAGS = [
  { text: "All", type: ProjectType.All },
  { text: "Professional",type: ProjectType.Professional },
  { text: "Freelance",type: ProjectType.Freelance },
  { text: "Personal",type: ProjectType.Personal },
];

export default function ProjectsNavigation() {
  const [activeTab, setActiveTab] = useState<string>(ProjectType.All);

  const handleActiveTab = (tab: ProjectType) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className="flex pt-4 pb-4 mb-10 border-white border-b border-opacity-10">
        <ul
          role="list"
          className="text-gray-400 leading-6 font-semibold text-sm px-2 gap-x-6 flex-none min-w-full flex"
        >
          {TAGS.map((tag) => (
            <li key={tag.type}>
              <button
                className={activeTab === tag.type ? "text-teal-400" : ""}
                type="button"
                onClick={() => handleActiveTab(tag.type)}
              >
                {tag.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          if (activeTab === project.type || activeTab === ProjectType.All) {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                client={project.client}
              />
            );
          }
        })}
      </div>
    </>
  );
}
