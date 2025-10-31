import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import { useLanguage } from "../Contexts/LanguageProvider.jsx";
import { translations } from "../Contexts/translations.js";
import { useLanguage } from "../Contexts/useLanguage.js";
import "../assets/Css/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const { language, toggleLanguage } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="logo">
            Knowledg2
            <br />
            Intelligence
          </h1>

          <div className="menu-section">
            <button onClick={toggleLanguage} className="lang-toggle-btn">
              {language === "en" ? "தமிழ்" : "ENGLISH"}
            </button>

            <div className="menu-icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>

          <ul className={isMobileMenuOpen ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink to="/" onClick={closeMenu} className="nav-link">
                <span className={language === "ta" ? "tamil-text" : ""}>
                  {t.home}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeMenu} className="nav-link">
                <span className={language === "ta" ? "tamil-text" : ""}>
                  {t.projects}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/documents" onClick={closeMenu} className="nav-link">
                <span className={language === "ta" ? "tamil-text" : ""}>
                  {t.documents}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu} className="nav-link">
                <span className={language === "ta" ? "tamil-text" : ""}>
                  {t.about}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu} className="nav-link">
                <span className={language === "ta" ? "tamil-text" : ""}>
                  {t.contact}
                </span>
              </NavLink>
            </li>
            <li
              className="lastchild"
              onClick={toggleLanguage}
              style={{ cursor: "pointer" }}
            >
              {language === "en" ? "தமிழ்" : "ENGLISH"}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
