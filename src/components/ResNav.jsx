import "./styles/ResNav.css";
import "./styles/Navbar.css";
import { RxCrossCircled } from "react-icons/rx";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./styles/About.css";

const ResNav = ({ setMobile }) => {
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();

  function Mobile() {
    ref.current.style.animation = "mobile1 0.3s ease forwards";
    ref1.current.style.display = "none";
    ref2.current.style.display = "none";
    setTimeout(() => setMobile(false), 300);
    setTimeout(() => (ref1.current.style.display = "block"), 300);
    setTimeout(() => (ref1.current.style.display = "flex"), 300);
  }
  return (
    <div className="res-nav-mobile" ref={ref}>
      <div className="inner-nav">
        <div className="nav-body">
          <div className="cross">
            <RxCrossCircled
              style={{ fontSize: "40px", color: "white" }}
              onClick={Mobile}
            />
          </div>
          <div className="nav-list" ref={ref1}>
            <a href="#home" onClick={Mobile}>
              Home
            </a>
            <a href="#about" onClick={Mobile}>
              About
            </a>
            <a href="#projects" onClick={Mobile}>
              Projects
            </a>
            <a href="#skills" onClick={Mobile}>
              Skills
            </a>
            <a href="#contact" onClick={Mobile}>
              Contact
            </a>
          </div>
          <div className="res-icons" ref={ref2}>
            <a
              href="https://www.linkedin.com/in/likhith-panigrahi-820a34299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="icons"
            >
              <FaLinkedin style={{ color: "white", fontSize: "25px" }} />
            </a>
            <a
              href="https://www.instagram.com/_likhith_07_7/profilecard/?igsh=dWFnNnh4NDNiM2Ns"
              className="icons"
            >
              <FaInstagram style={{ color: "white", fontSize: "25px" }} />
            </a>
            <a href="https://github.com/LikhithDeveloper" className="icons">
              <FaGithub style={{ color: "white", fontSize: "26px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResNav;
