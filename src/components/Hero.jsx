import React from 'react';
import './styles/Hero.css';
import coachVideo from '../components/vidoes/coachval.mp4';

const Hero = ({ onOpenForm }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Take your fitness to the</h1>
        <h2>The Next Level With Valo</h2>
        <button className="get-intouch" onClick={onOpenForm}>
          Get in Touch
        </button>
      </div>
      <div className="hero-overlay"></div>
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={coachVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
