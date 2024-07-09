import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faGraduationCap, faBook, faProjectDiagram, faEnvelope, faBars, faTimes, faFilePdf, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import profileImage from '../assets/images/profile/profile.jpg'
import Button from "../components/Button"
import Icon from "../components/Icon"
import '../scss/layout/_header.scss'
import resume from '../assets/documents/cv_gabrielquispe.pdf'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check the initial theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.body.classList.toggle('dark-mode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Check the initial window size
    handleResize();

    // Apply the initial theme
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <button className="hamburger" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>
      <header className={`header ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className="header-content">
          <nav className="navbar">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <h1>Gabriel Quispe</h1>
            <div className="action-buttons">
              <Button
                className="icon-button"
                href={resume}
                title="Ver Resume"
                download
                icon={faFilePdf}
                label="cv"
              />
              <Button
                className="icon-button"
                title="Dark mode"
                icon={isDarkMode ? faSun : faMoon}
                action={handleThemeToggle}
                label="dark"
                isDarkMode={isDarkMode} 
              />
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'open' : 'closed'}`}>
              <li>
                <a href="#home" onClick={handleNavLinkClick}>
                  <Icon icon={faHome} className="menu-icon" />
                  <p>Home</p>
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleNavLinkClick}>
                  <Icon icon={faUser} className="menu-icon" />
                  <p>About</p>
                </a>
              </li>
              <li>
                <a href="#experience" onClick={handleNavLinkClick}>
                  <Icon icon={faGraduationCap} className="menu-icon" />
                  <p>Experience</p>
                </a>
              </li>
              <li>
                <a href="#education" onClick={handleNavLinkClick}>
                  <Icon icon={faBook} className="menu-icon" />
                  <p>Education</p>
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleNavLinkClick}>
                  <Icon icon={faProjectDiagram} className="menu-icon" />
                  <p>Projects</p>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleNavLinkClick}>
                  <Icon icon={faEnvelope} className="menu-icon" />
                  <p>Contact</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
