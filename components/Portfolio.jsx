import React, { useState } from "react";
import "./Portfolio.scss";
import { Link } from 'react-scroll';
import projectOneImage from "../assets/multi.png";
import projectTwoImage from "../assets/shopin.png";
import projectThreeImage from "../assets/Healthcare.png";
import projectFourImage from "../assets/Consumer-rights assistant.png";

const portfolioItems = [
  {
    title: "Multi-Signature Wallet",
    description: "A Multi-Signature Wallet (Multisig Wallet) is a type of digital wallet that requires multiple private key signatures to authorize a transaction. It enhances security and decentralizes control.",
    image: projectOneImage,
  },
  {
    title: "Shopin",
    description: "Designed and developed a responsive homepage for ShopIN, a fashion e-commerce platform. Showcased premium women’s wear using a sleek dark theme, floating model cards, and bold typography.",
    image: projectTwoImage,
  },
  {
    title: "Healthcare",
    description: "A healthcare app offering ambulance services, medicine delivery, and secure login with a seamless onboarding and account verification process.",
    image: projectThreeImage,
  },
  {
    title: "Consumer-rights assistant ",
    description: "Consumer-Rights Assistant educates users on their rights, offering legal guidance, complaint help, and resources to ensure fair, informed transactions.",
    image: projectFourImage,
  },
];

const Portfolio = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Some of my recent works and projects</p>
      </div>

      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              onClick={() => handleImageClick(item.image)}
              className="clickable-image"
            />
            <div className="card-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img src={fullscreenImage} alt="Fullscreen Preview" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
