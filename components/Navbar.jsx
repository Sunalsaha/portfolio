import React, { useState, useRef, useEffect } from 'react';
import './Navbar.scss';
import logo from "../assets/logo.png";
import { Link, scroller } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const controlNavbar = () => {
    if (window.innerWidth > 768) {
      setShowNavbar(true); // always show on desktop
      return;
    }

    if (!menuOpen && window.scrollY > lastScrollY && window.scrollY > 60) {
      setShowNavbar(false); // scroll down
    } else {
      setShowNavbar(true); // scroll up or menu open
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const scrollToHome = () => {
    scroller.scrollTo("home", {
      duration: 500,
      smooth: true,
    });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <img
        src={logo}
        alt="Logo"
        className="logo logo-animate-on-load"
        onClick={scrollToHome}
      />

      <div ref={menuRef} className={`mobileMenuWrapper ${menuOpen ? 'open' : ''}`}>
        {["home", "about", "skills", "portfolio", "contact"].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase()}
            smooth
            duration={500}
            className={`desktopMenuListItem ${activeSection === section ? "active" : ""}`}
            onSetActive={() => setActiveSection(section)}
            onClick={() => setMenuOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      <div className="menuIcon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
