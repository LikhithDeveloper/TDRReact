import "./styles/Me.css";
import about from "../assets/photo-1544006659-f0b21884ce1d.png";

const Me = () => {
  return (
    <div className="me" id="about">
      <div className="me-main">
        <div className="me-head">
          <h1>About Me</h1>
        </div>
        <div className="me-body">
          <div className="me-body-img1">
            <img className="img" src={about}></img>
          </div>
          <div className="me-body-img2">
            <div>
              <p>
                I'm a full-stack developer with a passion for creating elegant
                solutions to complex problems. With expertise in modern web
                technologies, I build applications that are both beautiful and
                functional.
              </p>
            </div>
            <div className="skill-set">
              <div className="frontend">
                <span style={{ color: "white" }}>
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
                    class="lucide lucide-code w-8 h-8 text-blue-600 mb-2"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </span>
                <h4 style={{ color: "black" }}>Frontend</h4>
                <p style={{ color: "black" }}>React, HTML, CSS, JS</p>
              </div>
              <div className="backend">
                <span style={{ color: "white" }}>
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
                    class="lucide lucide-globe w-8 h-8 text-blue-600 mb-2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </span>
                <h4 style={{ color: "black" }}>Backend</h4>
                <p style={{ color: "black" }}>Django, Django REST, Node</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
