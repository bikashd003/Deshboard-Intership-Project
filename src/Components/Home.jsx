import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <>
      <nav>
        <div className="nav-links">
          <div className="nav-brand">{selectedOption}</div>
          <div className="nav-dropdown" onClick={toggleDropdown}>
            <span className="dropdown-icon">&#9660;</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <span>Select Program</span>
                <li className={selectedOption === 'Option 1' ? 'selected' : ''}>
                  <Link to="/" onClick={() => handleOptionClick('Option 1')}>
                    Option 1
                  </Link>
                </li>
                <li className={selectedOption === 'Option 2' ? 'selected' : ''}>
                  <a href="#" onClick={() => handleOptionClick('Option 2')}>
                    Option 2
                  </a>
                </li>
                <li className={selectedOption === 'Option 3' ? 'selected' : ''}>
                  <a href="#" onClick={() => handleOptionClick('Option 3')}>
                    Option 3
                  </a>
                </li>
              </ul>
            )}
          </div>
          <h1>Data Science</h1>
        </div>
      </nav>
    </>
  );
}

export default Home;
