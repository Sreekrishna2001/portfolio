import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="intro" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="education" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className="nav-item">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
