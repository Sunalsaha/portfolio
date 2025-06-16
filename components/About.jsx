import React, { useEffect } from "react";
import "./About.scss";
import { ContainerScroll } from "./ContainerScroll"; // Adjust path if needed

const aboutText = `
I am a passionate front-end developer, UI/UX designer, and app developer dedicated to creating seamless, engaging, and user-friendly digital experiences. My journey began with a fascination for how design and technology shape user interactions. Over time, I’ve built a strong foundation in HTML, CSS, JavaScript, and React, enabling me to craft visually appealing and highly functional interfaces.

What drives me is the blend of creativity and problem-solving that front-end development requires. I enjoy transforming complex challenges into elegant, intuitive solutions that work well and feel great to use. From responsive layouts to interactive components, I focus on performance, accessibility, and detail.

As a UI/UX designer, I emphasize empathy-driven, user-centered design—understanding user needs and behaviors to create interfaces that are both beautiful and practical. I work through wireframing, prototyping, and visual design to deliver purposeful experiences.

With app development skills, I extend my reach to mobile platforms, ensuring performance and usability across devices. Collaboration fuels my workflow; I thrive in cross-functional teams, believing open communication leads to innovative solutions.

Always eager to learn and adapt, I strive to create meaningful digital products that users love and remember.
`;

const About = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const hoverTarget = document.querySelector(".about-box");

    const handleMove = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleHover = () => cursor?.classList.add("cursor-hover");
    const handleLeave = () => cursor?.classList.remove("cursor-hover");

    document.addEventListener("mousemove", handleMove);
    hoverTarget?.addEventListener("mouseenter", handleHover);
    hoverTarget?.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      hoverTarget?.removeEventListener("mouseenter", handleHover);
      hoverTarget?.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="about-container" id="about">
      {/* Floating Title outside scroll animation */}
      <div className="about-heading text-center z-20 mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[#00bfff]">
          About Me
        </h1>
      </div>

      {/* Scroll animation container */}
      <ContainerScroll>
        <div className="about-box">
          {aboutText.split("\n\n").map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>
      </ContainerScroll>

      <div className="custom-cursor" />
    </div>
  );
};

export default About;
