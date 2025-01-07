import Contact from "./Contact";
import ResNav from "./ResNav";
import Fotter from "./Fotter";
import Skills from "./Skills";
import About from "./About";
import Project from "./Project";
import "./styles/Body.css";
import Me from "./Me";
const MainComponents = () => {
  return (
    <>
      <div className="background">
        <div className="background-1"></div>
        <div className="background-2"></div>
        <div className="background-3"></div>
        <div className="background-4"></div>
        <div className="background-5"></div>
        <div className="background-6"></div>
        <div className="background-7">
          <div></div>
        </div>
      </div>
      <About />
      <Me />
      <Project />
      <Skills />
      <Contact />
      <Fotter />
    </>
  );
};

export default MainComponents;
