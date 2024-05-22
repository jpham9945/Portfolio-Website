"use client";
import React, { useState } from 'react';
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
      id: 1,
      title: "Cookmunity",
      description: "Developed an android application to collect recipes and cooking videos for users to go back on and to interact with one another.",
      image: "/images/projects/Cookmunity.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/CSUF-CPSC411-2021F/group-project-group-10",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Subterra",
      description: "Built a game with a team of four for user’s to experience a Metroidvania game that goes through levels of fighting monsters and solving puzzles.",
      image: "/images/projects/Subterra.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/JasonZhu95/SubTerra",
      previewUrl: "https://jzhu.itch.io/subterra",
    },
    {
      id: 3,
      title: "PawMeetsPaw",
      description: "Developed an online reservation website for pet owners to take out their pets to socialize during Covid-19.",
      image: "/images/projects/PawMeetsPaw.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/quyen-tsai/Paw-Dates",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Portfolio",
      description: "Designed and built an online website portfolio which displays my projects, achievements and skills.",
      image: "/images/projects/Portfolio.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/jpham9945/Portfolio-Website",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "CovidDash",
      description: "Developed a dynamic website to update Covid-19 cases, and total vaccinated in different countries.",
      image: "/images/projects/CovidDash.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/quyen-tsai/covid_dashboard",
      previewUrl: "/",
    }
  ];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-2">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className = "grid md:grid-cols-2 gap-8 md:gap-12 text-center items-center">
        {filteredProject.map((project) => 
              <ProjectCard 
              key={project.id} 
              title = {project.title} 
              description={project.description} 
              imgUrl = {project.image} 
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              />
            )}
      </div>
    </>
  )
}

export default ProjectsSection