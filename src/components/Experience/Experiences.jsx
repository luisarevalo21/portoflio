/* eslint-disable no-unused-vars */
import { useState } from "react";
import Experience from "./Experience";
import tenzies from "../../assets/tenzies.png";
import quizzical from "../../assets/quizzical.png";

const Experiences = () => {
  const [experience, setExperiences] = useState([
    {
      title: "Tenzies",
      description: "This is a project",
      liveLink: "https://tenzies-wvsb.onrender.com/",
      githubLink: "https://github.com/luisarevalo21/Tenzies",
      projectImage: tenzies,
      tools: ["React", "Node.js", "Firebase", "CSS"],
    },
    {
      title: "Quizzical",
      description: "This is a project",
      liveLink: "https://quizzical-0m74.onrender.com/",
      githubLink: "https://github.com/luisarevalo21/Quizzical",
      projectImage: quizzical,
      tools: ["React", "CSS", "Quiz API"],
    },
    {
      title: "Moon Tracker",
      description: "This is a project",
      liveLink: "https://moon-tracker.onrender.com/",
      githubLink: "https://github.com/luisarevalo21/moon-tracker",
      projectImage: quizzical,
      tools: ["React", "CSS", "Moon Tracker API", "Google Location API"],
    },
  ]);
  const myExperiences = experience.map(project => {
    return (
      <Experience
        key={project.title}
        title={project.title}
        description={project.description}
        liveLink={project.liveLink}
        githubLink={project.githubLink}
        tools={project.tools}
        projectImage={project.projectImage}
      />
    );
  });
  return (
    <div className="projects">
      <h2 className="projects__title">My Experiences</h2>
      <div className="projects__list">{myExperiences}</div>
    </div>
  );
};

export default Experiences;
