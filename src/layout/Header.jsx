import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faGraduationCap, faBook, faProjectDiagram, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profileImage from '../assets/images/profile.jpg'
import Button from "../components/Button"
import Icon from "../components/Icon"
import '../scss/layout/_header.scss'



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false); // Ocultar el menú después de hacer clic en un enlace en dispositivos móviles
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
            <div className="footer-icons">
                <Button href="mailto:gabox2002@gmail.com" icon={faEnvelope}/>
              <Button href="https://github.com/gabox2002" icon={faGithub} />
              <Button href="https://linkedin.com/in/gabox2002" icon={faLinkedin} />
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
                  <Icon icon={faEnvelope} className="menu-icon" /> <p>Contact</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
      </header>
    </>
  );
}

export default Header
