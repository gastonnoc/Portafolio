import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GiCardAceHearts } from "react-icons/gi";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">

      <h3 className="projects-header">Projects</h3>

      <div className="project-title">

        <div className="item-border">
          <SiWhatsapp size={30} color="rgb(115,213,134)" />
        </div>

        <p className="whatsapp-text">Whatsapp Clone</p>

      </div>

      <div className="project-container">

        <div className="img-container">
          <img
            className="img-project"
            src="/images/TP-Final-Whatsapp.png"
            alt="TP-Final-Whatsapp"
          />
        </div>

        <div className="tech-container">

          <div className="borde-tech">
            <FaReact size={30} color="rgb(115,213,134)" />
            React
          </div>

          <div className="borde-tech">
            <RiJavascriptFill size={30} color="rgb(115,213,134)" />
            JavaScript
          </div>

          <div className="borde-tech">
            <FaNode size={30} color="rgb(115,213,134)" />
            NodeJS
          </div>

          <div className="borde-tech">
            <SiExpress size={30} color="rgb(115,213,134)" />
            Express
          </div>

        </div>

        <div className="enlaces-container">
          <div className="enlaces">
            <button className="contact-button">
              <a
                href="https://whatsapp-frontend-tp-final-prod.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >

                <FaLink size={39} />
              </a>
            </button>

            <button className="contact-button">
              <a
                href="https://github.com/gastonnoc/TP-Final-Front-End-WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FiGithub size={39} />
              </a>
            </button>
          </div>
        </div>

      </div>

      <div className="project-title">

        <div className="item-border">
          <GiCardAceHearts size={30} color="rgb(115,213,134)" />
        </div>

        <p className="whatsapp-text">Casino Break list</p>

      </div>

      <p className="experience-second-text">
        A collaborative web application designed for casino operations
        management, enabling real-time scheduling and coordination of gaming
        staff across multiple tables and time slots. Built for live casino
        streaming studios to efficiently manage dealer rotations, breaks, and
        table assignments. The app is actively used by my employer and has
        significantly improved operational efficiency. I developed this using v0
        AI.
      </p>

      <div className="img-container">

        <img className="img-project" src="/images/BL-web.png" alt="BL-web" />

      </div>

      <div className="tech-container">
        <div className="borde-tech">
          <FaReact size={32} color="rgb(115,213,134)" />
          React
        </div>
        <div className="borde-tech">
          <BiLogoTypescript size={40} color="rgb(115,213,134)" />
          TypeScript
        </div>
        <div className="borde-tech">
          <RiNextjsLine size={35} color="rgb(115,213,134)" />
          NextJS
        </div>
        <div className="borde-tech">
          <RiTailwindCssFill size={41} color="rgb(115,213,134)" />
          TailwindCSS
        </div>
      </div>

      <div className="enlaces-container">
        <button className="contact-button">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FiGithub size={39} />
          </a>
        </button>
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Projects;
