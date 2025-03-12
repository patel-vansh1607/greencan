import React, { useState } from "react";
import { FaRecycle, FaBars, FaTimes } from "react-icons/fa";
import greencanlogo from "../images/GreenCan logo-01.png"
import "./navBar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
        <img src={greencanlogo} alt="greencanlogo" className="main-logo" />
        </div>
        <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
