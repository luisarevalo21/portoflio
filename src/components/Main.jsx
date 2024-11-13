import profile from "../assets/profile.png";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div className="main">
      <div className="main__hero">
        <h1 className="main__title">Luis Arevalo</h1>
        <h3 className="main__role">Frontend Developer</h3>
        <Link className="main__work main__work--purple" to="experiences" spy={true} smooth={true} duration={500}>
          See my work
        </Link>
        <i className="fa-solid fa-arrow-down-long main__down__arrow"></i>
      </div>
      <div className="main__bio" name="about">
        {/* <div className="main__bio__img__cont"> */}
        <img src={profile} alt="Luis Arevalo" className="main__image" />
        {/* </div> */}
        <div className="main__bio__details">
          <h3 className="bio__title">Who I am?</h3>

          <p className="bio__text">
            By day, I&apos;m a Full-Stack
            <a href="https://www.linkedin.com/in/luisearevalo/" className="summary__link">
              {" "}
              Software Engineer{" "}
            </a>
            based in the SF Bay Area, focused on creating impactful, user-centric applications grounded in thoughtful
            design and technical rigor . From crafting seamless interfaces to engineering resilient backends, I thrive
            on building tools and systems that make users&apos; lives simpler and more efficient. I enjoy taking on
            technical challenges that balance functionality and user experience, ensuring every feature serves a
            purpose.
          </p>
          <p className="bio__text">
            By night, I&apos;m a tech enthusiast and lifelong learner, diving into side projects that keep programming
            fresh and exciting. Whether developing indie games, exploring AI applications, or experimenting with new
            frameworks, I&apos;m always pushing the boundaries of what&apos;s possible.
          </p>
          <p className="bio__text">
            When I&apos;m not coding, you&apos;ll find me biking local trails around the SF Bay Area, spending time with
            my two German Shepherds, diving into anime, exploring Japanese culture and travel, or enjoying quality time
            with family. Check out my Projects section to see how I&apos;m bringing these ideas to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
