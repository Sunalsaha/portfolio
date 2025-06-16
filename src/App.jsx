import React, { useState, useEffect } from "react";
import "./App.scss";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skill from "../components/Skill";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import logo from "../assets/logo.png"; // path to your logo

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // hide splash screen after 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="splash-screen">
          <img src={logo} alt="Logo" className="splash-logo" />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skill />
          <Portfolio />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
