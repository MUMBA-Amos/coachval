import React from 'react';
import { FaPlane, FaHiking, FaUsers as FaPeople, FaMusic } from 'react-icons/fa';
import './styles/BeyondTraining.css';
import beyond from './images/beyond.jpg';

const BeyondTraining = () => {
  return (
    <section className="beyond-training-wrapper">
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${Math.random() * 4}s`,
            '--position': `${Math.random() * 100}%`
          }}></div>
        ))}
      </div>
      
      <div className="beyond-training-section">
        <div className="beyond-training-title">
          <h2>Beyond Training</h2>
        </div>
        
        <div className="beyond-training-content">
          <div className="beyond-training-image">
            <img src={beyond} alt="Coach Valo" className="training-image" />
            <div className="image-overlay"></div>
          </div>

          <div className="interests-section">
            <div className="interests-grid">
              <div className="interest-item">
                <div className="interest-icon-wrapper">
                  <FaPlane className="interest-icon" />
                </div>
                <div className="interest-content">
                  <h4>Travel Enthusiast</h4>
                  <p>Exploring new places and experiencing different cultures enriches my perspective and brings fresh energy to my training approach.</p>
                </div>
              </div>
              
              <div className="interest-item">
                <div className="interest-icon-wrapper">
                  <FaPeople className="interest-icon" />
                </div>
                <div className="interest-content">
                  <h4>People Person</h4>
                  <p>I love meeting new people and building meaningful connections. Every client brings a unique story that makes this journey exciting.</p>
                </div>
              </div>
              
              <div className="interest-item">
                <div className="interest-icon-wrapper">
                  <FaHiking className="interest-icon" />
                </div>
                <div className="interest-content">
                  <h4>Outdoor Activities</h4>
                  <p>When not in the gym, you'll find me hiking, exploring nature, and finding new ways to stay active outdoors.</p>
                </div>
              </div>
              
              <div className="interest-item">
                <div className="interest-icon-wrapper">
                  <FaMusic className="interest-icon" />
                </div>
                <div className="interest-content">
                  <h4>Music & Wellness</h4>
                  <p>Music is an essential part of my training sessions, creating the perfect atmosphere for motivation and focus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondTraining; 