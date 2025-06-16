import React from "react";
import "./Contact.scss";

import linkedinLogo from "../assets/linkin.png";
import XLogo from "../assets/x.png";
import gitLogo from "../assets/git.png";
import emailLogo from "../assets/mail.png";

import Hyperspeed from "./Hyperspeed";

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <Hyperspeed />

        <div className="contact-content">
          <h1>Contact Me</h1>
          <p>Feel free to reach out through the social media links below.</p>

          <div className="contact-links">
            <a
              href="https://linkedin.com/in/sunal-saha-9b258128b"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
            <a
              href="https://x.com/sunalsaha5656"
              target="_blank"
              rel="noreferrer"
            >
              <img src={XLogo} alt="X" />
            </a>
            <a
              href="https://github.com/Sunalsaha"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitLogo} alt="GitHub" />
            </a>
            <a href="mailto:sunalsaha436@gmail.com">
              <img src={emailLogo} alt="Email" />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Sunal Saha. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Contact;
