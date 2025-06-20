import React from "react";
import { FaCode } from "react-icons/fa";
import "../styles/experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <h3 className="experience-title">Experience</h3>
      <div className="company">
        <div className="item-border">
          <FaCode size={25} color="rgb(115,213,134)" />
        </div>
        <h4>Yolo Group</h4>
      </div>
      <p className="subtitle">
        Technical Specialist & Full-Stack Web Developer
      </p>
      <p className="experience-first-text">Hybrid role combining hands-on tech work and software development</p>
      <p className="experience-second-text">
        As a Full-Stack Web Developer in a hybrid technical role, I design and
        maintain internal web tools using HTML5, CSS, JavaScript, React,
        Node.js, and Express to streamline studio operations. Working closely
        with an international team, I contribute to improving workflow
        efficiency through custom web solutions while also supporting the
        technical infrastructure for live streaming. This position allows me to
        combine software development with real-world problem solving, building
        tools that directly impact day-to-day performance.
      </p>
    </div>
  );
};

export default Experience;
