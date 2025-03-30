import React, { useEffect, useState, useRef } from 'react';
import './styles/Testimonials.css';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rachelImage from './images/Rachel.jpeg';
import guyImage from './images/Guy.jpeg';
import caroleImage from './images/carole.jpeg';
import norImage from './images/Nor.jpeg';
import thomsonImage from './images/Thomson.jpeg';
// import testimonialImage from '../assets/testimonial-image.jpg'; // You'll need to add this image to your assets folder

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Rachel Thomson",
      role: "Weight Loss & Hypertrophy Client",
      text: "Coach Valo's expertise in weight loss and hypertrophy training has been transformative. His personalized approach helped me achieve my body composition goals while building strength. The combination of targeted workouts and nutrition guidance delivered exceptional results.",
      rating: 5,
      image: rachelImage
    },
    {
      name: "Guy",
      role: "Strength & Hypertrophy Client",
      text: "The strength training and hypertrophy program has been incredible. Coach Valo's systematic approach to progressive overload and form perfection has helped me achieve significant muscle growth while maintaining proper technique. His attention to detail in both training and nutrition has been game-changing.",
      rating: 5,
      image: guyImage
    },
    {
      name: "Carole",
      role: "Weight Loss & Fitness Client",
      text: "Working with Coach Valo has been life-changing. His dedication to my fitness journey and his expertise in weight loss have helped me achieve results I never thought possible. The personalized attention and constant motivation made all the difference.",
      rating: 5,
      image: caroleImage
    },
    {
      name: "Nor",
      role: "Fat Loss & Body Toning Client",
      text: "Coach Valo's fat loss and body toning program has been exactly what I needed. His comprehensive approach to training and nutrition helped me achieve a lean, toned physique. The results exceeded my expectations, and I feel more confident than ever.",
      rating: 5,
      image: norImage
    },
    {
      name: "Thomson",
      role: "Weight Loss, Strength & Hypertrophy Client",
      text: "Coach Valo's comprehensive program combining weight loss, strength training, and hypertrophy has been exceptional. His expertise in all three areas helped me achieve a complete transformation. The balanced approach to training and nutrition delivered outstanding results.",
      rating: 5,
      image: thomsonImage
    },
    // {
    //   name: "Sarah Johnson",
    //   role: "Fitness Enthusiast",
    //   text: "The personalized training program has completely transformed my fitness journey. The attention to detail and constant support made all the difference.",
    //   rating: 5
    // },
    // {
    //   name: "Michael Chen",
    //   role: "Amateur Athlete",
    //   text: "Outstanding coaching and expertise. The structured approach to training helped me achieve my goals faster than I ever thought possible.",
    //   rating: 5
    // },
    // {
    //   name: "Emma Davis",
    //   role: "Working Professional",
    //   text: "The flexible scheduling and tailored workouts fit perfectly with my busy lifestyle. I've seen remarkable improvements in both strength and endurance.",
    //   rating: 5
    // },
    // {
    //   name: "David Wilson",
    //   role: "Sports Enthusiast",
    //   text: "The training methods are innovative and effective. I've achieved results I never thought possible under this expert guidance.",
    //   rating: 5
    // },
    // {
    //   name: "Lisa Thompson",
    //   role: "Fitness Competitor",
    //   text: "The competition prep program was exactly what I needed. The detailed nutrition plan and training schedule helped me achieve my best form.",
    //   rating: 5
    // },
    // {
    //   name: "James Rodriguez",
    //   role: "Transformation Journey",
    //   text: "Lost 30 pounds and gained confidence. The supportive environment and expert guidance made my fitness journey enjoyable and successful.",
    //   rating: 5
    // }
  ];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="nav-button next" onClick={onClick}>
        <FaChevronRight />
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="nav-button prev" onClick={onClick}>
        <FaChevronLeft />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="testimonials" id="testimonials" ref={testimonialsRef}>
      <div className="testimonials-container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="section-title">Client Transformations</h2>
          <p className="section-subtitle">Real Results, Real Stories</p>
        </div>

        <div className="testimonials-content">
          <div className="slider-container">
            <Slider ref={sliderRef} {...settings} className="testimonials-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className={`testimonial-card ${isVisible ? 'fade-in' : ''}`}>
                    <div className="testimonial-image-container">
                      <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                      <div className="image-overlay"></div>
                    </div>
                    <div className="testimonial-content">
                      <div className="quote-icon">
                        <FaQuoteLeft />
                      </div>
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="testimonial-footer">
                        <div className="testimonial-info">
                          <h4 className="testimonial-name">{testimonial.name}</h4>
                          <span className="testimonial-role">{testimonial.role}</span>
                        </div>
                        <div className="testimonial-rating">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="star-icon" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 