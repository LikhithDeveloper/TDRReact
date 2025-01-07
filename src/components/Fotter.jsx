import "./styles/Fotter.css";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Fotter = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-1">
          <div
            className="footer-name"
            style={{
              marginLeft: "20px",
              fontSize: "20px",
              fontWeight: "900",
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            Likhith
          </div>
          <div>
            <div className="res-icons">
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
      <div className="cpy">© 2024 Likhith Panigrahi ALL RIGHTS RESERVED</div>
    </div>
  );
};

export default Fotter;
