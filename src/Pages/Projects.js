import React from "react";
import "../scss/projects.css";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  return (
    <div className="projects">
      <div className="anime"></div>
      <ProjectCard
        img="/anime.PNG"
        title="Generating Anime"
        link="https://github.com/tsusdere/Generating-Anime"
        left="20%"
      />
      <ProjectCard
        img="/color.png"
        title="Color Autoencoder"
        link="https://github.com/tsusdere/Colorize_The_past"
        left="35%"
        top="-13.5%"
      />
    </div>
  );
}

export default Projects;
