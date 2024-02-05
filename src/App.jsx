import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Experiences from "./components/Experience/Experiences";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Skills name="skills" />
      <Projects name="projects" />
      <Experiences />
      <Footer />
    </>
  );
}

export default App;
