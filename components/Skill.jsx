import React from "react";
import './Skill.scss';
import UIDesign from "../assets/uiux.png";
import WebDesign from "../assets/web.png";
import AppDesign from "../assets/app.png";

const Skills = () => {
  return (
    <section id="skills" className="skill-section">
      <h1 className="skillsTitle">My Skills</h1>
      <p className="skillsDescription">
        I am a skilled and passionate web designer with experience in creating engaging and user-friendly websites and applications.
      </p>

      <div className="skillsBars">
        <div className="skillsBar">
          <img src={UIDesign} alt="UI Design" className="skillsBarImg" />
          <div className="skillsBarText">
            <h2>UI Design</h2>
            <p>Designing intuitive user interfaces for a seamless user experience.</p>
          </div>
        </div>

        <div className="skillsBar">
          <img src={WebDesign} alt="Web Design" className="skillsBarImg" />
          <div className="skillsBarText">
            <h2>Web Design</h2>
            <p>Building responsive and modern websites tailored to your needs.</p>
          </div>
        </div>

        <div className="skillsBar">
          <img src={AppDesign} alt="App Design" className="skillsBarImg" />
          <div className="skillsBarText">
            <h2>App Design</h2>
            <p>Creating mobile-friendly and feature-rich applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
