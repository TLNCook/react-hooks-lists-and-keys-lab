import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectItemList = projects.map((project) => {
    return (
      <ProjectItem  key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>)})
  return (
      <div id="projects" >
        <div id="project-list">{projectItemList}</div>
      </div>
  );
}

export default ProjectList;
