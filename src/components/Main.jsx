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
        <img src={profile} alt="luis" className="main__image" />
        {/* </div> */}
        <div className="main__bio__details">
          <h3 className="bio__title">Who I am</h3>

          <p className="bio__text">
            After graduation, I found myself uncertain about which career path to pursue, which led me into a cycle of
            applying to various jobs and encountering multiple rejections. At one point, the continuous setbacks left me
            feeling so disheartened that I contemplated giving up, and, in a sense, I did.
          </p>
          <p className="bio__text">
            Upon securing a full-time job unrelated to my degree, a conversation with a mentor reignited my ambition to
            pursue a full-time position as a front-end developer.
          </p>
          <p className="bio__text">
            When I&apos;m not engaged in learning, you can often find me either biking around, walking my two German
            Shepherds/Huskies, or enjoying quality time with my family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
