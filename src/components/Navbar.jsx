import React, { useState, useEffect } from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      // Scroll to top of page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  // Add scroll event listener to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'achievements', 'testimonials', 'services'];
      const scrollPosition = window.scrollY;
      
      // Special case for home section (top of page)
      if (scrollPosition < 100) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && section !== 'home') {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;
          const navbarHeight = document.querySelector('.navbar').offsetHeight;

          if (scrollPosition >= sectionTop - navbarHeight && 
              scrollPosition < sectionBottom - navbarHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`nav-links left ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
        </div>
        
        <div className="nav-logo">
          <div className="logo-container">
            <div className="arrow-line">
              <span className="arrow-head left">←</span>
              <span className="line"></span>
              <span className="arrow-head right">→</span>
            </div>
            <h1>COACH VALO FITNESS</h1>
          </div>
        </div>

        <div className={`nav-links right ${isMenuOpen ? 'active' : ''}`}>
          {/* <a 
            href="#achievements" 
            className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('achievements');
            }}
          >
            Achievements
          </a> */}
          <a 
            href="#testimonials" 
            className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('testimonials');
            }}
          >
            Testimonials
          </a>
          <a 
            href="#services" 
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            Services
          </a>
        </div>

        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;