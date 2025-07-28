import React, { useState } from "react";
import { Link } from "react-router-dom";   // ← add this
import "./Navbar.css";

export default function Navbar() {
  const [lang, setLang] = useState("EN");
  const toggleLang = () => {
    const next = lang === "EN" ? "ع" : "EN";
    setLang(next);
    document.documentElement.lang = next === "EN" ? "en" : "ar";
    document.documentElement.dir  = next === "EN" ? "ltr" : "rtl";
  };

  return (
      <nav className="navbar">
        <div className="container">

          {/* — Logo + Site Name */}
          <div className="navbar__logo">
            <img
             src="\image\navbar__logo.png"      /* public/image/navbar_logo.png */
             alt="Ziara logo"
             className="logo-img"
            />
            <span className="logo-text">Ziara</span>
          </div>

          {/* — Navigation Links */}
          <ul className="navbar__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* — Actions: Login / Sign Up / Language */}
          <div className="navbar__actions">
            <Link to={'/Login'} className="btn login"> Login </Link>
            <Link to={'/Signup'} className="btn signup"> Sign Up </Link>
            <button className="language-switch" onClick={toggleLang}>
              {lang} <span>▼</span>
            </button>
          </div>

        </div>
      </nav>
  );
}
