import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "../styles/personalInfo.css";

const PersonalInfo = () => {

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gaston.nocquet.dev@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error("Failed to copy email: ", err);
      });
  };

  const [cvDownloaded, setCvDownloaded] = useState(false);



  return (
    <div className="personal-info">
      <div className="info-picture">
        <img
          className="profile-picture"
          src="/images/Foto CV.png"
          alt="profile picture"
        />
        <div className="personal-info-rest">
          <h1>Gastón Nocquet</h1>

          <h2>Full Stack Developer (MERN Stack)</h2>

          <span className="localization">
            <HiOutlineLocationMarker /> Buenos Aires, Argentina
          </span>

          <div className="contact">
            <div className="email" onClick={handleCopyEmail} style={{ cursor: "pointer", position: "relative" }}>
              <MdOutlineMail className="icon-email" />
              gaston.nocquet.dev@gmail.com
              {copied && <span className="copy-message">¡Copiado!</span>}
            </div>

            <div className="contact-buttons" style={{ position: "relative" }}>
              <a
                href="/CV - Gaston Nocquet (EN).pdf"
                download="CV - Gaston Nocquet (EN).pdf"
                className="contact-button"
                onClick={() => {
                  setCvDownloaded(true);
                  setTimeout(() => setCvDownloaded(false), 2000);
                }}
              >
                <TbFileCv size={39} />
              </a>

              {cvDownloaded && (
                <span className="cv-message">¡CV descargado!</span>
              )}

              <a
                href="https://github.com/gastonnoc"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                <FiGithub size={39} color="rgb(115,213,134)" />
              </a>
              <a
                href="https://www.linkedin.com/in/gaston-nocquet-70710b237/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                <FiLinkedin size={39} color="rgb(115,213,134)" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PersonalInfo;
