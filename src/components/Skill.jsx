import React from "react";

const Skills = ({ title, image }) => {
  return (
    <div className="skill">
      <img src={image} className="skill__image" alt="" />
      <p className="skill__title">{title}</p>
    </div>
  );
};

export default Skills;
