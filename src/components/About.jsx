import React, { useEffect, useState, useRef } from 'react';
import './styles/About.css';
import profileImage from './images/profile.jpg';
import { FaStar, FaCheck, FaUsers, FaClock, FaPlane, FaHiking, FaUsers as FaPeople, FaMusic } from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({ years: 0, clients: 0 });
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const duration = 2000;
    const framesPerSecond = 60;
    const totalFrames = (duration / 1000) * framesPerSecond;
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setAnimatedNumbers({
        years: Math.min(Math.ceil(5 * progress), 5),
        clients: Math.min(Math.ceil(100 * progress), 100)
      });

      if (frame === totalFrames) clearInterval(timer);
    }, 1000 / framesPerSecond);
  };

  return (
    <div className="about" id="about" ref={aboutRef}>
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${Math.random() * 4}s`,
            '--position': `${Math.random() * 100}%`
          }}></div>
        ))}
      </div>
      
      <div className="about-container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <div className="header-line"></div>
          <h2 className="section-title">ABOUT ME</h2>
          <div className="header-line"></div>
        </div>

        <div className={`certifications-banner ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="certification-item">
            <FaStar className="cert-icon" />
            <span>Certified Personal Trainer</span>
          </div>
          <div className="certification-item">
            <FaStar className="cert-icon" />
            <span>Nutrition Specialist</span>
          </div>
        </div>
        
        <div className="about-content">
          <div className={`about-left ${isVisible ? 'slide-in-left' : ''}`}>
            <div className="profile-wrapper">
              <div className="profile-container">
                <img src={profileImage} alt="Coach Valo" className="profile-image" />
                <div className="image-overlay"></div>
              </div>
              
              <div className="achievements-banner">
                <div className="achievement-item">
                  <FaClock className="achievement-icon" />
                  <div className="achievement-text">
                    <span className="achievement-number">{animatedNumbers.years}+</span>
                    <span className="achievement-label">Years</span>
                  </div>
                </div>
                <div className="achievement-item">
                  <FaUsers className="achievement-icon" />
                  <div className="achievement-text">
                    <span className="achievement-number">{animatedNumbers.clients}+</span>
                    <span className="achievement-label">Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className={`content-section welcome ${isVisible ? 'fade-in-up delay-1' : ''}`}>
              <h3>Welcome to Coach Valo Fitness</h3>
              <p>
                Where we transform lives through dedicated personal training and expert 
                nutrition guidance. Our mission is to help you achieve your fitness goals 
                while building lasting, healthy habits.
              </p>
            </div>

            <div className={`content-section experience ${isVisible ? 'fade-in-up delay-2' : ''}`}>
              <h3>Experience & Expertise</h3>
              <div className="experience-content">
                <p>
                  With over {animatedNumbers.years}+ years of experience in fitness training 
                  and nutrition, I've helped {animatedNumbers.clients}+ clients achieve 
                  remarkable transformations. My approach combines scientific training methods 
                  with personalized attention to ensure you reach your peak potential.
                </p>
              </div>
            </div>

            <div className={`content-section philosophy ${isVisible ? 'fade-in-up delay-3' : ''}`}>
              <h3>Training Philosophy</h3>
              <div className="philosophy-points">
                <div className="philosophy-point">
                  <FaCheck className="point-icon" />
                  <p>Customized workout programs tailored to your goals</p>
                </div>
                <div className="philosophy-point">
                  <FaCheck className="point-icon" />
                  <p>Precise nutrition planning for optimal results</p>
                </div>
                <div className="philosophy-point">
                  <FaCheck className="point-icon" />
                  <p>Continuous support and motivation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 