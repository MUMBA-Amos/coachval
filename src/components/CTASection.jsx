import React from 'react';
import './styles/CTASection.css';
import { FaArrowRight } from 'react-icons/fa';

const CTASection = ({ onOpenForm }) => {
  const handleStartNow = (e) => {
    e.preventDefault();
    onOpenForm();
  };

  return (
    <div className="cta-section" id="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Ready to Transform Your Fitness Journey?</h2>
          <p>Take the first step towards achieving your fitness goals with personalized training and expert guidance.</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-button primary" onClick={handleStartNow}>
              Start Now
              <FaArrowRight className="arrow-icon" />
            </a>
            <a href="#services" className="cta-button secondary">
              View Programs
            </a>
          </div>
        </div>
        <div className="cta-overlay"></div>
      </div>
    </div>
  );
};

export default CTASection; 