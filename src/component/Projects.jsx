import ProjectCard from "./ProjectCard";
import ButtonComponent from "./ButtonComponent";
import React, { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    const res = await fetch(
      "https://tuong-portfolio-be.vercel.app/api/projects"
    );
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4">
        <h1 className="text-center text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg mt-20">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-x-0 gap-x-2 lg:mt-20 justify-items-center mt-20">
          {projects.map((project) => (
            <a key={project.id} href={project.link} target="_blank">
              <ProjectCard
                preview={project.preview}
                name={project.name}
                technologies={project.tech_icons.map((tech_icon) => tech_icon)}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
