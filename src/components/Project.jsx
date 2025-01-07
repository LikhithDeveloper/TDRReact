import "./styles/Project.css";
import vid from "../assets/1717252526139.mp4";
import api from "../assets/pexels-technobulka-10816120.jpg";
import krupa from "../assets/cover-pic---b2b-portals---eng.png";
import free from "../assets/1693327622536.jpeg";
import book from "../assets/bookmyshow-social-preview.png";

const Project = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-container">
        <div className="heading">
          {/* <u style={{ color: "#5B847B" }}> */}
          <h2>PROJECTS</h2>
          {/* </u> */}
        </div>
        <div className="project-stuff">
          {/* <div className="main-stuff">
            <div className="stuff-1">
              <div id="stuff-1-data">
                <p>
                  <u>BookYourShow</u> 🖥️! Leveraging the power of the Django
                  framework, I've developed a platform that mirrors the
                  functionality of Bookmyshow, making it easier than ever to
                  book tickets for your favorite events. <br></br>
                  <br></br>
                  <u>Key Features</u>: Robust Authentication and Authorization
                  for secure transactions. Streamlined ticket management,
                  organized by date and time for hassle-free booking. Stay
                  updated with real-time ticket availability and expiration
                  reminders. I'm incredibly proud of the hard work that has gone
                  into bringing this project to life, and I can't wait for you
                  to experience it firsthand. Check out BookYourShow today and
                  let me know what you think!
                </p>
              </div>
              <div id="stuff-1-vd">
                <video
                  style={{ width: "80%", height: "80%" }}
                  src={vid}
                  controls
                  loop
                ></video>
              </div>
            </div>
            <div className="stuff-2">
              <div id="stuff-2-vd">
                <video
                  style={{ width: "80%", height: "80%" }}
                  src={vid}
                  controls
                  loop
                ></video>
              </div>
              <div id="stuff-2-data">
                <p>
                  <u>BookYourShow</u> 🖥️! Leveraging the power of the Django
                  framework, I've developed a platform that mirrors the
                  functionality of Bookmyshow, making it easier than ever to
                  book tickets for your favorite events. <br></br>
                  <br></br>
                  <u>Key Features</u>: Robust Authentication and Authorization
                  for secure transactions. Streamlined ticket management,
                  organized by date and time for hassle-free booking. Stay
                  updated with real-time ticket availability and expiration
                  reminders. I'm incredibly proud of the hard work that has gone
                  into bringing this project to life, and I can't wait for you
                  to experience it firsthand. Check out BookYourShow today and
                  let me know what you think!
                </p>
              </div>
            </div>
            <div className="stuff-3">
              <div id="stuff-3-data">
                <p>
                  <u>BookYourShow</u> 🖥️! Leveraging the power of the Django
                  framework, I've developed a platform that mirrors the
                  functionality of Bookmyshow, making it easier than ever to
                  book tickets for your favorite events. <br></br>
                  <br></br>
                  <u>Key Features</u>: Robust Authentication and Authorization
                  for secure transactions. Streamlined ticket management,
                  organized by date and time for hassle-free booking. Stay
                  updated with real-time ticket availability and expiration
                  reminders. I'm incredibly proud of the hard work that has gone
                  into bringing this project to life, and I can't wait for you
                  to experience it firsthand. Check out BookYourShow today and
                  let me know what you think!
                </p>
              </div>
              <div id="stuff-3-vd">
                <video
                  style={{ width: "80%", height: "80%" }}
                  src={vid}
                  controls
                  loop
                ></video>
              </div>
            </div>
          </div> */}
          <div class="grid-item">
            <div className="grid-image">
              <img className="image-api" src={api}></img>
            </div>
            <div className="grid-text">
              <div className="pro-name">
                <h3>E-commerce Platform</h3>
                <p>A E-commerce Platform API's using Djago REST framework</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/LikhithDeveloper/StartUpJVL"
                  style={{ textDecoration: "none", color: "black" }}
                >
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
                    class="lucide lucide-github w-5 h-5 mr-1"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Code
                </a>
                <a
                  href="https://github.com/LikhithDeveloper/StartUpJVL"
                  style={{ textDecoration: "none", color: "black" }}
                  className="demo"
                >
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
                    class="lucide lucide-external-link w-5 h-5 mr-1"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div className="grid-image">
              <img className="image-api" src={krupa}></img>
            </div>
            <div className="grid-text">
              <div className="pro-name">
                <h3>Trade Platform</h3>
                <p>A Trade Platform which connects Producer and Consumer</p>
              </div>
              <div className="links">
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
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
                    class="lucide lucide-github w-5 h-5 mr-1"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Code
                </a>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "black" }}
                  className="demo"
                >
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
                    class="lucide lucide-external-link w-5 h-5 mr-1"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div className="grid-image">
              <img className="image-api" src={free}></img>
            </div>
            <div className="grid-text">
              <div className="pro-name">
                <h3>Website for a freelncing company</h3>
                <p>A Static Website for freelancing company DEVELOPERS.GEN</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/LikhithDeveloper/developers.gen/tree/master"
                  style={{ textDecoration: "none", color: "black" }}
                >
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
                    class="lucide lucide-github w-5 h-5 mr-1"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Code
                </a>
                <a
                  href="https://likhithdeveloper.github.io/developers.gen/"
                  style={{ textDecoration: "none", color: "black" }}
                  className="demo"
                >
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
                    class="lucide lucide-external-link w-5 h-5 mr-1"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div className="grid-image">
              <img className="image-api" src={book}></img>
            </div>
            <div className="grid-text">
              <div className="pro-name">
                <h3>Book Your Show</h3>
                <p>
                  Book your show appication has some similar fuctionalities of
                  BookMyShow made with Django
                </p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/LikhithDeveloper/BookYourShow"
                  style={{ textDecoration: "none", color: "black" }}
                >
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
                    class="lucide lucide-github w-5 h-5 mr-1"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Code
                </a>
                <a
                  href="https://github.com/LikhithDeveloper/BookYourShow"
                  style={{ textDecoration: "none", color: "black" }}
                  className="demo"
                >
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
                    class="lucide lucide-external-link w-5 h-5 mr-1"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
