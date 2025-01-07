import React from "react";
import "./styles/skills.css";
import cc from "../assets/css.png";
import html from "../assets/html-5.png";
import js from "../assets/javascript-removebg-preview.png";
import py from "../assets/python.png";
import cpp from "../assets/download-removebg-preview.png";
import reactLogo from "../assets/react.png";
import django from "../assets/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail-removebg-preview.png";
import node from "../assets/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail-removebg-preview.png";

const Skills = () => {
  const images = [html, cc, js, reactLogo, node, django, py, cpp];

  return (
    <div className="clients" id="skills">
      <div className="skills">
        <h2>Skills</h2>
      </div>
      <div className="clients-inner2">
        <div className="clients-scroll">
          {/* Render images twice for seamless looping */}
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Skill Logo"
              className="clients-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
