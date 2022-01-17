import React from "react";
import "../scss/projects.css";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  return (
    <div className="projects">
      <div className="anime">
        <ProjectCard
          img="/anime.PNG"
          title="Generating Anime"
          link="https://github.com/tsusdere/Generating-Anime"
          left="10px"
        />
        <ProjectCard
          img="/color.png"
          title="Color Autoencoder"
          link="https://github.com/tsusdere/Colorize_The_past"
          left="275px"
        />
        <ProjectCard
          img="/flappy.jpg"
          title="AI Flappy Bird"
          link="https://github.com/tsusdere/AIFlappyBird"
          left="550px"
        />
        <ProjectCard
          img="/titanic.jpg"
          title="Titanic data analysis"
          link="https://github.com/tsusdere/Titanic-Analysis"
          left="850px"
        ></ProjectCard>
      </div>
    </div>
  );
}

export default Projects;
