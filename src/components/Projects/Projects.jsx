/* eslint-disable no-unused-vars */
import { useState } from "react";
import Project from "./Project";
import tenzies from "../../assets/tenzies.png";
import quizzical from "../../assets/quizzical.png";
import moonTracker from "../../assets/moon-tracker.png";
const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "Tenzies",
      description:
        "Designed and created the Tenzies Dice game, enabling players to roll dice with the objective of matching all dice to secure victory. The game efficiently tracks user time and roll count. Upon completion, the recorded data is seamlessly posted to Firebase, while implementing React Router for navigation, showcasing top scores.",
      liveLink: "https://tenzies-wvsb.onrender.com/",
      githubLink: "https://github.com/luisarevalo21/Tenzies",
      projectImage: tenzies,
      tools: ["React", "Node.js", "Firebase", "CSS"],
    },
    {
      title: "Quizzical",
      description:
        "Quizzical offers an engaging general knowledge quiz game where users encounter 5 fun and diverse trivia questions, allowing them to record their answers. Upon submission, users receive immediate feedback on their performance. For added enjoyment, they can play again to explore a new set of 5 questions and continue the challenge.",
      liveLink: "https://quizzical-0m74.onrender.com/",
      githubLink: "https://github.com/luisarevalo21/Quizzical",
      projectImage: quizzical,
      tools: ["React", "CSS", "Quiz API"],
    },
    {
      title: "Moon Tracker",
      description:
        "Moon Tracker enables users to monitor the current phase of the moon, utilizing ReactJS and CSS for the frontend. I incorporated Google Geolocation to determine the user's location and integrated a Moon Tracker API to fetch data and provide an image of the current moon phase.",
      liveLink: "https://moon-tracker.onrender.com/",
      githubLink: "https://github.com/luisarevalo21/moon-tracker",
      projectImage: moonTracker,
      tools: ["React", "CSS", "Moon Tracker API", "Google Location API"],
    },
  ]);
  const myProjects = projects.map(project => {
    return (
      <Project
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
      <h2 className="projects__title">My projects</h2>
      <div className="projects__list">{myProjects}</div>
    </div>
  );
};

export default Projects;
