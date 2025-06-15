import React from "react";
import "../styles/technologies.css";
import { SiHtml5, SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import {
  RiJavascriptFill,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { FaReact, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

const Technologies = () => {
  return (
    <div>
      <h3 className="technologies-title">Technologies</h3>
      <div className="bordes-container">
        <div className="borde-tech">
          <SiHtml5 size={40} color="rgb(115,213,134)" />
          HTML5
        </div>
        <div className="borde-tech">
          <IoLogoCss3 size={40} color="rgb(115,213,134)" />
          CSS3
        </div>
        <div className="borde-tech">
          <RiJavascriptFill size={40} color="rgb(115,213,134)" />
          JavaScript
        </div>
        <div className="borde-tech">
          <BiLogoTypescript size={40} color="rgb(115,213,134)" />
          TypeScript
        </div>
        <div className="borde-tech">
          <FaReact size={40} color="rgb(115,213,134)" />
          React
        </div>
        <div className="borde-tech">
          <FaNode size={40} color="rgb(115,213,134)" />
          NodeJS
        </div>
        <div className="borde-tech">
          <BiLogoMongodb size={40} color="rgb(115,213,134)" />
          MongoDB
        </div>
        <div className="borde-tech">
          <GrMysql size={40} color="rgb(115,213,134)" />
          MySQL
        </div>
        <div className="borde-tech">
          <SiExpress size={40} color="rgb(115,213,134)" />
          Express
        </div>
        <div className="borde-tech">
          <FaGitAlt size={40} color="rgb(115,213,134)" />
          Git
        </div>
        <div className="borde-tech">
          <FaGithub size={40} color="rgb(115,213,134)" />
          GitHub
        </div>
      </div>

      <h3 className="technologies-title">Learning </h3>
      <div className="bordes-container">
      <div className="borde-tech">
        <RiNextjsLine size={40} color="rgb(115,213,134)" />
        NextJS
      </div>
      <div className="borde-tech">
        <RiTailwindCssFill size={40} color="rgb(115,213,134)" />
        TailwindCSS
      </div>
      </div>
    </div>
  );
};

export default Technologies;
