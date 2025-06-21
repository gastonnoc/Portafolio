import React, { useState } from "react";
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
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import "../styles/projects.css";

const Projects = () => {
  const [showBreakVideoModal, setShowBreakVideoModal] = useState(false);

  const openBreakVideoModal = () => setShowBreakVideoModal(true);

  const closeBreakVideoModal = () => setShowBreakVideoModal(false);

  return (
    <div className="projects">
      <h3 className="title">Projects</h3>

      <div className="project-title">
        <div className="item-border">
          <SiWhatsapp size={28} color="rgb(115,213,134)" />
        </div>

        <p className="project-text">Whatsapp Clone</p>
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
            <FaReact size={28} color="rgb(115,213,134)" />
            React
          </div>

          <div className="borde-tech">
            <RiJavascriptFill size={28} color="rgb(115,213,134)" />
            JavaScript
          </div>

          <div className="borde-tech">
            <FaNode size={28} color="rgb(115,213,134)" />
            NodeJS
          </div>

          <div className="borde-tech">
            <SiExpress size={28} color="rgb(115,213,134)" />
            Express
          </div>
        </div>

        <div className="enlaces-container">
          <div className="enlaces">
            <button className="contact-button-project">
              <a
                href="https://whatsapp-frontend-tp-final-prod.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FaLink size={28} />
              </a>
            </button>

            <button className="contact-button-project">
              <a
                href="https://github.com/gastonnoc/TP-Final-Front-End-WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FiGithub size={28} />
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="project-title">
        <div className="item-border">
          <GiCardAceHearts size={30} color="rgb(115,213,134)" />
        </div>

        <p className="project-text">Casino Break list</p>
      </div>

      <p className="experience-second-text">
        A collaborative web application designed for casino operations
        management, enabling real-time scheduling and coordination of gaming
        staff across multiple tables and time slots. Built specifically for live
        casino streaming studios, it streamlines the management of dealer
        rotations, breaks, and table assignments. All visible text on the
        interface is fully editable, and any changes are automatically saved.
        Users can also paste a list of names directly into the app by simply
        clicking the first input field and pressing Ctrl + V, the names are
        inserted one below the other automatically. The application supports
        custom color adjustments based on the values entered in the table
        assignment fields, helping visually distinguish where each dealer should
        go. Additionally, it includes a search filter to quickly locate dealers
        by name. This tool is actively used by my employer and has significantly
        improved day-to-day operational efficiency.
      </p>

      <div className="img-container">
        <img className="img-project" src="/images/BL-web.png" alt="BL-web" />
      </div>

      <div className="tech-container">
        <div className="borde-tech">
          <FaReact size={28} color="rgb(115,213,134)" />
          React
        </div>
        <div className="borde-tech">
          <BiLogoTypescript size={28} color="rgb(115,213,134)" />
          TypeScript
        </div>
        <div className="borde-tech">
          <RiNextjsLine size={28} color="rgb(115,213,134)" />
          NextJS
        </div>
        <div className="borde-tech">
          <RiTailwindCssFill size={28} color="rgb(115,213,134)" />
          TailwindCSS
        </div>
      </div>

      <div className="enlaces-container">
{/*         <button className="contact-button-project">
          <a href="#" target="_blank" rel="noopener noreferrer" className="btn">
            <FiGithub size={28} />
          </a>
        </button> */}

        <button
          className="contact-button-project"
          onClick={openBreakVideoModal}
        >
          <FaPlay style={{ paddingRight: '5px' }} /> Watch Demo
        </button>
      </div>

      <div className="project-title">
        <div className="item-border">
          <GiCardAceHearts size={30} color="rgb(115,213,134)" />
        </div>

        <p className="project-text">Casino stream monitors</p>
      </div>

      <p className="experience-second-text">
        To meet a client’s request, our team needed a way to monitor all video
        streams simultaneously and identify visual differences in order to
        standardize the image quality across them. I came up with the idea of
        developing a web application that displays all the streams side by side,
        allowing us to easily compare and adjust their visual settings. This
        tool has become essential to our workflow and is now even showcased on
        screens at the company entrance to create a strong first impression for
        visiting clients.
      </p>

      <div className="img-container">
        <img
          className="img-project"
          src="/images/stake-monitor.png"
          alt="stake-monitor"
        />
      </div>

      <div className="img-container">
        <img
          className="img-project"
          src="/images/other-games-monitor.png"
          alt="other-games-monitor"
        />
      </div>

      <div className="img-container">
        <img
          className="img-project"
          src="/images/blackjack-monitor.png"
          alt="blackjack-monitor"
        />
      </div>
      <div className="tech-container">
        <div className="borde-tech">
          <SiHtml5 size={28} color="rgb(115,213,134)" />
          HTML5
        </div>
        <div className="borde-tech">
          <IoLogoCss3 size={28} color="rgb(115,213,134)" />
          CSS3
        </div>
      </div>

      <div className="project-title">
        <div className="item-border">
          <GiCardAceHearts size={30} color="rgb(115,213,134)" />
        </div>

        <p className="project-text">Casino image framing</p>
      </div>

      <p className="experience-second-text">
        At a client’s request, we needed all camera frames (especially the game
        table) to be consistent across setups, as the framing had to align
        precisely with the platform’s HUD. To address this, I developed a stream
        monitoring tool similar to the previous projects, but with adjustable
        guide lines. These lines can be selected with a click and repositioned
        using the keyboard arrow keys, allowing us to set a reference table and
        align all other camera views accordingly. Additionally, I implemented a
        reset button to quickly return the guide lines to their initial
        positions, making the calibration process even more efficient.
      </p>

      <div className="img-container">
        <img
          className="img-project"
          src="/images/stream-framing.png"
          alt="stream-framing"
        />
      </div>

      <div className="tech-container">
        <div className="borde-tech">
          <SiHtml5 size={28} color="rgb(115,213,134)" />
          HTML5
        </div>
        <div className="borde-tech">
          <IoLogoCss3 size={28} color="rgb(115,213,134)" />
          CSS3
        </div>
        <div className="borde-tech">
          <RiJavascriptFill size={28} color="rgb(115,213,134)" />
          JavaScript
        </div>
      </div>

      <hr className="divider" />
      {showBreakVideoModal && (
        <div
          onClick={closeBreakVideoModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#000",
              padding: "1rem",
              borderRadius: "10px",
              maxWidth: "800px",
              width: "90%",
              position: "relative",
            }}
          >
            <button
              onClick={closeBreakVideoModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                fontSize: "20px",
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
            <video controls width="100%" autoPlay>
              <source src="/videos/casino-break-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
