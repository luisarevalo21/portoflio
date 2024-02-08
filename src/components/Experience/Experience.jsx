/* eslint-disable react/prop-types */

const Experience = ({ title, projectImage, website, tools, description }) => {
  return (
    <div className="project">
      <h2 className="experience__title">{title}</h2>
      <img src={projectImage} alt="" className="project__image" />
      <div className="project__links">
        <a href={website} className="project__link" target="_blank" rel="noreferrer">
          Website
        </a>
        {/* <a href={liveLink} className="project__link" target="_blank" rel="noreferrer">
          Live site
        </a>
        <p className="project__divider">|</p>
        <a href={githubLink} className="project__link" target="_blank" rel="noreferrer">
          GitHub
        </a> */}
      </div>

      {/* <p className="project__tools">Tools: {tools.join(", ")} </p> */}

      <p className="project__description">{description}</p>
    </div>
  );
};

export default Experience;
