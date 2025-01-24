/* eslint-disable no-unused-vars */
import { useState } from "react";
import Project from "./Project";
import tenzies from "../../assets/tenzies.png";
import quizzical from "../../assets/quizzical.png";
import moonTracker from "../../assets/moon-tracker.png";
import greenlawnServices from "../../assets/greenlawn-services.png";
import walletcop from "../../assets/walletcop.png";
import studyzap from "../../assets/studyzap.png";
const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "WalletCop",
      description:
        "Designed and developed a full-stack application using the MERN stack, transforming a Figma design into a production-ready app within three months. The app enables users to optimize their cashback rewards by analyzing their purchases and credit card options.",
      liveLink: "https://walletcop.onrender.com/",
      githubLink: "https://github.com/luisarevalo21/walletcop",
      projectImage: walletcop,
      tools: ["React", "MUI", "NodeJS", "Express", "Supabase Google Auth"],
    },
    {
      title: "Greenlawn Services",
      description:
        "Developed a responsive, mobile-friendly website for a local landscaper using React, CSS, and EmailJS API, showcasing their skills and portfolio, enabling direct user communication via email, and increasing revenue by 15% upon deployment on Render. Improved website performance by compressing images and adhering to best practices for responsive design.",
      liveLink: "https://www.greenlawn-services.com/",
      githubLink: "https://github.com/luisarevalo21/landscaper-project",
      projectImage: greenlawnServices,
      tools: ["React", "CSS", "EmailJS API"],
    },
    {
      title: "StudyZap",
      description:
        "Designed and developed an AI-driven flashcard application using Next.js, ChatGPT API, and Firebase. The platform enables users to generate topic-based flashcards, save libraries, perform full CRUD operations, and track study progress. These features enhanced study efficiency, increasing average study time by 10%.",
      liveLink: "https://github.com/luisarevalo21/studyzap.me",
      githubLink: "https://github.com/luisarevalo21/studyzap.me",
      projectImage: studyzap,
      tools: ["NextJS", "JavaScript", "Material UI", "Open AI", "Firebase/Firestore", "Clerk Auth"],
    },
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
