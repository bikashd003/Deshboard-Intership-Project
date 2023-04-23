import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import topic from "../Assets/Icons/topic.svg";
import quiz from "../Assets/Icons/moduleQuiz.svg";
import assignement from "../Assets/Icons/assignment.svg";
import activeTopic from "../Assets/Icons/activeTopic.svg";
import activeQuiz from "../Assets/Icons/activeModuleQuiz.svg";
import activeAssignement from "../Assets/Icons/activeAssignment.svg";

function Navbar() {
  const [modulesMenuOpen, setModulesMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(topic);

  const toggleModulesMenu = () => {
    setModulesMenuOpen(!modulesMenuOpen);
  };

  const handleMenuClick = (img) => {
    setActiveImage(img);
  };

  return (
    <nav className="vertical-navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/modules" className="nav-link">
            Modules
          </Link>
          <ul
            className={modulesMenuOpen ? "dropdown-menu show" : "dropdown-menu"}
          >
            <Link
              to="/active-topic"
              className="dropdown-item"
              onClick={() => handleMenuClick(activeTopic)}
            >
              <img src={activeImage === activeTopic ? activeTopic : topic} alt="activeTopic" className="drop-img" />
              Python Loops
            </Link>
            <Link
              to="/quiz-1"
              className="dropdown-item"
              onClick={() => handleMenuClick(activeQuiz)}
            >
              <img src={activeImage === activeQuiz ? activeQuiz : quiz} alt="activeQuiz" className="drop-img" />
              Quiz-1: Data Types
            </Link>
            <Link
              to="/assignment-1"
              className="dropdown-item"
              onClick={() => handleMenuClick(activeAssignement)}
            >
              <img src={activeImage === activeAssignement ? activeAssignement : assignement} alt="activeAssignement" className="drop-img" />
              Assignment-1: Operator | Loops
            </Link>
          </ul>
          <div className="dropdown-toggle" onClick={toggleModulesMenu}></div>
        </li>
        <li className="nav-item">
          <Link to="/instructor" className="nav-link">
            Instructor
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
