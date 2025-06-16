import React from "react";
import "./Home.scss";
import BackgroundPaths from "./BackgroundPaths";
import pic from "../assets/pic1.png";
import resume from "../assets/Resume.pdf"; // ✅ Corrected file extension
import StarBorder from "./StarBorder";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Background Animated SVG Paths */}
      <div className="background-paths">
        <BackgroundPaths />
      </div>

      <div className="home">
        {/* Profile Picture */}
        <img src={pic} alt="Profile" className="pic" />

        {/* Text Content */}
        <div className="text-wrapper">
          <h1>Hello, I'm Sunal</h1>
          <h2>Frontend Developer | UI/UX Enthusiast</h2>

          {/* Contact Button with StarBorder */}
          <div className="contact_me">
            <StarBorder
              as="a"
              href="#contact"
              className="contact-button"
              color="#00f2fe"
              speed="5s"
            >
              Contact Me
            </StarBorder>

            <StarBorder
              as="a"
              href={resume}
              className="resume-button"
              speed="5s"
              color="#f2ff00"
              target="_blank"
              rel="noopener noreferrer"
              download="Sunal_Saha_Resume.pdf"
            >
              My Resume
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
