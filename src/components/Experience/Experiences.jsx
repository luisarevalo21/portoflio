/* eslint-disable no-unused-vars */
import { useState } from "react";
import Experience from "./Experience";
import tuc from "../../assets/tuc.png";
import oneCommunity from "../../assets/one-community.png";
const Experiences = () => {
  const [experience, setExperiences] = useState([
    {
      title: "Full Stack Developer/Team Manager",
      description:
        "Leading a team of 9 developers, ensuring project alignment, troubleshooting, and introducing weekly innovations using React JS, NodeJS, and CSS; closely engaging with team members, providing progress summaries, and developing a warnings feature in React, Redux, and MongoDB within 2 months for active tracking of developers' warnings.",

      website: "https://www.onecommunityglobal.org/",
      projectImage: oneCommunity,
      tools: [],
    },
    {
      title: "Digital Access Instructor",
      description:
        "Collaborated with EveryoneOn to provide a comprehensive digital literacy program for 10 diverse clients in Oakland, including distributing 15 laptops to low-income families, thereby narrowing the digital divide and empowering participants with essential digital skills.",

      website: "https://unitycouncil.org/",
      projectImage: tuc,
      tools: [],
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
