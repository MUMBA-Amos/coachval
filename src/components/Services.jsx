import React, { useEffect, useState, useRef } from 'react';
import './styles/Services.css';
import { 
  FaDumbbell, 
  FaUsers, 
  FaWeightHanging, 
  FaArrowUp, 
  FaRunning, 
  FaBolt, 
  FaAppleAlt, 
  FaMedal 
} from 'react-icons/fa';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <FaDumbbell />,
      title: "Customized Training",
      description: "Personalized workout programs tailored to your specific goals and fitness level."
    },
    {
      icon: <FaUsers />,
      title: "Group Training",
      description: "Energetic group sessions that combine motivation with effective workout routines."
    },
    {
      icon: <FaWeightHanging />,
      title: "Weight Loss",
      description: "Specialized programs focused on sustainable weight loss and body transformation."
    },
    {
      icon: <FaArrowUp />,
      title: "Weight Gain",
      description: "Strategic training and nutrition plans for healthy muscle mass development."
    },
    {
      icon: <FaRunning />,
      title: "Hypertrophy",
      description: "Scientific approach to muscle growth and aesthetic physique development."
    },
    {
      icon: <FaBolt />,
      title: "Strength Training",
      description: "Progressive programs designed to maximize your strength potential."
    },
    {
      icon: <FaAppleAlt />,
      title: "Nutrition Plan",
      description: "Custom nutrition guidance to complement your training and accelerate results."
    },
    {
      icon: <FaMedal />,
      title: "Competition Prep",
      description: "Expert coaching for fitness competitions and peak performance."
    }
  ];

  return (
    <div className="services" id="services" ref={servicesRef}>
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${Math.random() * 4}s`,
            '--position': `${Math.random() * 100}%`
          }}></div>
        ))}
      </div>
      
      <div className="services-container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <div className="header-line"></div>
          <h2 className="section-title">SERVICES</h2>
          <div className="header-line"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`service-box ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-box-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-box-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 