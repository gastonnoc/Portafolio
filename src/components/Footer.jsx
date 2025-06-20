import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { TbFileCv } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {

    const [cvDownloaded, setCvDownloaded] = useState(false);

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

    return (
        <footer>
            <p className="experience-second-text">Gastón Nocquet</p>
            <div className="contact">
                <div
                    className="email"
                    onClick={handleCopyEmail}
                    style={{ cursor: "pointer", position: "relative" }}
                >
                    <MdOutlineMail className="icon-email" />
                    gaston.nocquet.dev@gmail.com
                    {copied && <span className="copy-message">Copied</span>}
                </div>
                <div className='contact-buttons'>
                    <div style={{ position: "relative" }}>
                        <a
                            href="/CV - Gaston Nocquet (EN).pdf"
                            download="CV - Gaston Nocquet (EN).pdf"
                            className="contact-button"
                            onClick={() => {
                                setCvDownloaded(true);
                                setTimeout(() => setCvDownloaded(false), 2000);
                            }}
                        >
                            <TbFileCv size={33} />
                        </a>
                        {cvDownloaded && (
                            <span className="cv-message">CV downloaded</span>
                        )}
                    </div>
                    <a
                        href="https://github.com/gastonnoc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-button"
                    >
                        <FiGithub size={33} color="rgb(115,213,134)" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gaston-nocquet-70710b237/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-button"
                    >
                        <FiLinkedin size={33} color="rgb(115,213,134)" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
