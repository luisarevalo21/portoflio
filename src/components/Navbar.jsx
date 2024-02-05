import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (toggle) {
      setShouldRender(true); // Ensure the list is rendered before animation
    } else {
      setTimeout(() => {
        setShouldRender(false); // Delay removal to play the animation
      }, 300); // Adjust the delay to match your animation duration
    }
  }, [toggle]);
  return (
    <nav className="navbar">
      <ul className="navbar__icons">
        <li className="navbar__icon">
          <a to="https://www.linkedin.com/in/luis-arevalo-6aa9b414b/" target="__blank">
            <i className="fa-brands fa-linkedin navbar__icon navbar__icon--blue"></i>
          </a>
        </li>
        <li className="navbar__icon">
          <a href="https://github.com/luisarevalo21" target="__blank">
            <i className="fa-brands fa-github navbar__icon navbar__icon--blue"></i>
          </a>
        </li>
        <li className="navbar__icon">
          {/* //resume link */}
          <i className="fa-solid fa-download navbar__icon navbar__icon--blue"></i>
        </li>
      </ul>

      {!toggle && (
        <i className="fa-solid fa-bars navbar__icon navbar__burger" onClick={() => setToggle(prev => !prev)}></i>
      )}
      {toggle && (
        <i className="fa-solid fa-x  navbar__icon navbar__close__icon" onClick={() => setToggle(prev => !prev)}></i>
      )}

      <ul className="navbar__list__items second__nav">
        <Link href="#" to="home" spy={true} smooth={true} duration={500} className="navbar__list__link">
          <li>Home</li>
        </Link>
        <Link href="#" to="about" spy={true} smooth={true} duration={500} className="navbar__list__link">
          <li>About</li>
        </Link>
        <Link href="" to="skills" spy={true} smooth={true} duration={500} className="navbar__list__link">
          <li>Skills</li>
        </Link>
        <Link href="#" to="projects" spy={true} smooth={true} duration={500} className="navbar__list__link">
          <li>My Projects</li>
        </Link>
        <Link href="#" to="work" spy={true} smooth={true} duration={500} className="navbar__list__link">
          <li>Work Experience </li>
        </Link>
        <Link href="#" to="contact" spy={true} smooth={true} duration={500} className="navbar__list__link">
          <li>Contact</li>
        </Link>
      </ul>

      {shouldRender && (
        <ul className={`navbar__list__items ${toggle ? "slidein" : "slideout"}`}>
          <Link href="#" className="navbar__list__link">
            <li>Home</li>
          </Link>
          <Link href="#" to="about" spy={true} smooth={true} duration={100} className="navbar__list__link">
            <li>About</li>
          </Link>
          <Link href="" to="skills" spy={true} smooth={true} duration={500} className="navbar__list__link">
            <li>Skills</li>
          </Link>
          <Link href="#" to="projects" spy={true} smooth={true} duration={500} className="navbar__list__link">
            <li>My Projects</li>
          </Link>
          <Link href="#" to="work" spy={true} smooth={true} duration={500} className="navbar__list__link">
            <li>Work Experience </li>
          </Link>
          <Link href="#" to="contact" spy={true} smooth={true} duration={500} className="navbar__list__link">
            <li>Contact</li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
