import "./styles/About.css";
import myImage from "../assets/2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
  const [text] = useTypewriter({
    words: ["Likhith", "Developer"],
    loop: {},
    typeSpeed: 50,
  });
  function contact() {
    window.location.href = "#contact";
  }
  return (
    <div className="about" id="home">
      <div className="inner-about">
        <div className="inner-1">
          <img src={myImage} className="profile"></img>
          <h1 className="name">
            Hi, I'm <span style={{ color: "#2563EB" }}>{text}</span>
            <span style={{ color: "#2563EB" }}>
              <Cursor />
            </span>
          </h1>
          <b>
            <p
              style={{
                fontWeight: "400",
                fontSize: "17px",
                textAlign: "center",
              }}
            >
              A passionate full-stack developer crafting beautiful and
              functional web experiences
            </p>
          </b>
        </div>
        <div className="inner-2">
          <div className="about-data">
            {/* Aspiring Technologist | B-Tech CSE (AI & ML) Student | Passionate
            about Coding Greetings from Aditya Institute of Technology and
            Management, Tekkali! Embarking on my 3nd-year journey in B-Tech
            Computer Science and Engineering. I thrive on exploring, learning,
            and innovating in the dynamic world of technology. Proficient in the
            basics of C, Python, Cpp and Java. Knowledgeable in web development,
            blending creativity with coding. A fast learner, problem solver, and
            logical thinker. */}
            {/* <button>About</button> */}
            <button onClick={contact}>Get in touch</button>
          </div>

          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/likhith-panigrahi-820a34299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="icons"
            >
              <FaLinkedin style={{ color: "black", fontSize: "25px" }} />
            </a>
            <a
              href="https://www.instagram.com/_likhith_07_7/profilecard/?igsh=dWFnNnh4NDNiM2Ns"
              className="icons"
            >
              <FaInstagram style={{ color: "black", fontSize: "25px" }} />
            </a>
            <a href="https://github.com/LikhithDeveloper" className="icons">
              <FaGithub style={{ color: "black", fontSize: "26px" }} />
            </a>
          </div>

          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-down text-gray-400"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
