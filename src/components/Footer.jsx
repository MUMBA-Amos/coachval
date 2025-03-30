import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = '601136034742'; // No spaces or special characters
  const message = "Hi Coach Valo, I'm interested in your training services!";

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Function to open WhatsApp
  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Function to open Gmail
  const openGmail = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=coachvalo57@gmail.com', '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <h3 className="footer-logo">COACH VALO</h3>
            <p className="footer-description">
              Transform your fitness journey with personalized coaching.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-heading">EXPLORE</h4>
            <nav className="footer-nav">
              <button onClick={() => scrollToSection('home')} className="footer-link">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="footer-link">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="footer-link">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="footer-link">
                Testimonials
              </button>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-heading">CONNECT</h4>
            <div className="contact-info">
              <div className="contact-item" onClick={openGmail} style={{cursor: 'pointer'}}>
                <FaEnvelope className="contact-icon" />
                <span>coachvalo57@gmail.com</span>
              </div>
              <div className="contact-item" onClick={openWhatsApp} style={{cursor: 'pointer'}}>
                <FaWhatsapp className="contact-icon" style={{color: '#25D366'}} />
                <span>+60 11-3603 4742</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} COACH VALO FITNESS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;