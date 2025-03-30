import React, { useState, useEffect } from 'react';
import './styles/ContactForm.css';
import { FaUser, FaDumbbell, FaCalendar, FaNotesMedical, FaCheck, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    
    // Fitness Background
    fitnessGoals: [],
    currentActivity: '',
    experienceLevel: '',
    preferredTrainingStyle: '',
    
    // Schedule & Availability
    preferredTrainingTime: '',
    sessionsPerWeek: '',
    preferredDays: [],
    locationPreference: '',
    
    // Health Information
    medicalConditions: '',
    injuries: '',
    medications: '',
    dietaryRestrictions: '',
    
    // Additional Information
    motivation: '',
    expectations: '',
    questions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Close modal with escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (showSuccessModal) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showSuccessModal, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showSuccessModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSuccessModal]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'fitnessGoals') {
        if (checked) {
          setFormData(prev => ({
            ...prev,
            fitnessGoals: [...prev.fitnessGoals, value]
          }));
        } else {
          setFormData(prev => ({
            ...prev,
            fitnessGoals: prev.fitnessGoals.filter(goal => goal !== value)
          }));
        }
      } else if (name === 'preferredDays') {
        if (checked) {
          setFormData(prev => ({
            ...prev,
            preferredDays: [...prev.preferredDays, value]
          }));
        } else {
          setFormData(prev => ({
            ...prev,
            preferredDays: prev.preferredDays.filter(day => day !== value)
          }));
        }
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep !== 5) {
      setCurrentStep(prev => prev + 1);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        gender: formData.gender,
        height: formData.height,
        weight: formData.weight,
        fitnessGoals: formData.fitnessGoals.join(', '),
        currentActivity: formData.currentActivity,
        experienceLevel: formData.experienceLevel,
        preferredTrainingStyle: formData.preferredTrainingStyle,
        preferredTrainingTime: formData.preferredTrainingTime,
        sessionsPerWeek: formData.sessionsPerWeek,
        preferredDays: formData.preferredDays.join(', '),
        locationPreference: formData.locationPreference,
        medicalConditions: formData.medicalConditions,
        injuries: formData.injuries,
        medications: formData.medications,
        dietaryRestrictions: formData.dietaryRestrictions,
        motivation: formData.motivation,
        expectations: formData.expectations,
        questions: formData.questions,
      };

      // Replace with your EmailJS credentials
      const serviceID = 'service_2icvgaf';
      const templateID = 'template_s0hnhdp';
      const publicKey = 'U8Z5WY9qHU9UvGafp';

      // Send email using EmailJS
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fitnessGoals = [
    { value: 'weight-loss', label: 'Weight Loss' },
    { value: 'muscle-gain', label: 'Muscle Gain' },
    { value: 'strength', label: 'Strength Training' },
    { value: 'endurance', label: 'Endurance Training' },
    { value: 'flexibility', label: 'Flexibility & Mobility' },
    { value: 'general-fitness', label: 'General Fitness & Health' }
  ];

  const steps = [
    {
      title: "Personal Information",
      icon: <FaUser />,
      fields: (
        <>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Full Name"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(123) 456-7890"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="16"
                max="99"
                placeholder="Your Age"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender *</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="height">Height (cm) *</label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
                placeholder="Height in cm"
              />
            </div>

            <div className="form-group">
              <label htmlFor="weight">Weight (kg) *</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                placeholder="Weight in kg"
              />
            </div>
          </div>
        </>
      )
    },
    {
      title: "Fitness Background",
      icon: <FaDumbbell />,
      fields: (
        <>
          <div className="form-group">
            <label htmlFor="fitnessGoals">What are your primary fitness goals? *</label>
            <div className="goals-tabs">
              {fitnessGoals.map(goal => (
                <label key={goal.value} className={`goal-tab ${formData.fitnessGoals.includes(goal.value) ? 'selected' : ''}`}>
                  <input
                    type="checkbox"
                    name="fitnessGoals"
                    value={goal.value}
                    checked={formData.fitnessGoals.includes(goal.value)}
                    onChange={handleChange}
                    required={formData.fitnessGoals.length === 0}
                  />
                  {goal.label}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="currentActivity">Current Activity Level *</label>
            <select
              id="currentActivity"
              name="currentActivity"
              value={formData.currentActivity}
              onChange={handleChange}
              required
            >
              <option value="">Select your activity level</option>
              <option value="sedentary">Sedentary (Little to no exercise)</option>
              <option value="light">Light (Exercise 1-2 times/week)</option>
              <option value="moderate">Moderate (Exercise 3-4 times/week)</option>
              <option value="active">Active (Exercise 5+ times/week)</option>
              <option value="very-active">Very Active (Professional/Athlete)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="experienceLevel">Experience Level with Personal Training *</label>
            <select
              id="experienceLevel"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              required
            >
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner (No previous experience)</option>
              <option value="intermediate">Intermediate (Some experience)</option>
              <option value="advanced">Advanced (Regular training experience)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="preferredTrainingStyle">Preferred Training Style *</label>
            <select
              id="preferredTrainingStyle"
              name="preferredTrainingStyle"
              value={formData.preferredTrainingStyle}
              onChange={handleChange}
              required
            >
              <option value="">Select your preferred style</option>
              <option value="one-on-one">One-on-One Training</option>
              <option value="group">Group Training</option>
              <option value="hybrid">Hybrid (Mix of both)</option>
            </select>
          </div>
        </>
      )
    },
    {
      title: "Schedule & Availability",
      icon: <FaCalendar />,
      fields: (
        <>
          <div className="form-group">
            <label htmlFor="preferredTrainingTime">Preferred Training Time *</label>
            <select
              id="preferredTrainingTime"
              name="preferredTrainingTime"
              value={formData.preferredTrainingTime}
              onChange={handleChange}
              required
            >
              <option value="">Select preferred time</option>
              <option value="early-morning">Early Morning (5AM - 8AM)</option>
              <option value="morning">Morning (8AM - 11AM)</option>
              <option value="afternoon">Afternoon (11AM - 2PM)</option>
              <option value="late-afternoon">Late Afternoon (2PM - 5PM)</option>
              <option value="evening">Evening (5PM - 8PM)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sessionsPerWeek">Number of Sessions per Week *</label>
            <select
              id="sessionsPerWeek"
              name="sessionsPerWeek"
              value={formData.sessionsPerWeek}
              onChange={handleChange}
              required
            >
              <option value="">Select number of sessions</option>
              <option value="1">1 session</option>
              <option value="2">2 sessions</option>
              <option value="3">3 sessions</option>
              <option value="4">4 sessions</option>
              <option value="5">5 sessions</option>
              <option value="6">6 sessions</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Training Days *</label>
            <div className="checkbox-group">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                <label key={day} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="preferredDays"
                    value={day}
                    checked={formData.preferredDays.includes(day)}
                    onChange={handleChange}
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="locationPreference">Training Location Preference *</label>
            <select
              id="locationPreference"
              name="locationPreference"
              value={formData.locationPreference}
              onChange={handleChange}
              required
            >
              <option value="">Select location preference</option>
              <option value="gym">Gym</option>
              <option value="home">Home</option>
              <option value="outdoor">Outdoor</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </>
      )
    },
    {
      title: "Health Information",
      icon: <FaNotesMedical />,
      fields: (
        <>
          <div className="form-group">
            <label htmlFor="medicalConditions">Medical Conditions</label>
            <textarea
              id="medicalConditions"
              name="medicalConditions"
              value={formData.medicalConditions}
              onChange={handleChange}
              placeholder="Please list any medical conditions..."
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="injuries">Previous/Current Injuries</label>
            <textarea
              id="injuries"
              name="injuries"
              value={formData.injuries}
              onChange={handleChange}
              placeholder="Please list any injuries..."
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="medications">Current Medications</label>
            <textarea
              id="medications"
              name="medications"
              value={formData.medications}
              onChange={handleChange}
              placeholder="Please list any medications..."
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
            <textarea
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              placeholder="Please list any dietary restrictions..."
              rows="3"
            />
          </div>
        </>
      )
    },
    {
      title: "Additional Information",
      icon: <FaCheck />,
      fields: (
        <>
          <div className="form-group">
            <label htmlFor="motivation">What motivates you to start training? *</label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              required
              placeholder="Tell us what drives you..."
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="expectations">What are your expectations from personal training? *</label>
            <textarea
              id="expectations"
              name="expectations"
              value={formData.expectations}
              onChange={handleChange}
              required
              placeholder="Share your expectations..."
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="questions">Any questions or concerns?</label>
            <textarea
              id="questions"
              name="questions"
              value={formData.questions}
              onChange={handleChange}
              placeholder="Ask any questions you have..."
              rows="3"
            />
          </div>
        </>
      )
    }
  ];

  return (
    <div className="contact-form-overlay" onClick={handleClose}>
      <div className="contact-form-container" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>
          <FaTimes />
        </button>
        <h2>Start Your Fitness Journey</h2>
        <p>Fill out the form below and we'll get back to you shortly.</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-progress">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`progress-step ${currentStep > index + 1 ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}
              >
                <div className="step-icon">{step.icon}</div>
                <span className="step-title">{step.title}</span>
              </div>
            ))}
          </div>

          {submitStatus === 'success' && (
            <div className="form-message success">
              Thank you for your enquiry! I'll review your information and get back to you soon to discuss your fitness journey.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="form-message error">
              Oops! Something went wrong. Please try again later.
            </div>
          )}

          <div className="form-step-content">
            <h2>{steps[currentStep - 1].title}</h2>
            {steps[currentStep - 1].fields}
          </div>

          <div className="form-navigation">
            {currentStep > 1 && (
              <button
                type="button"
                className="nav-button prev"
                onClick={() => setCurrentStep(prev => prev - 1)}
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              className={`nav-button next ${currentStep === 5 ? 'submit' : ''}`}
              disabled={isSubmitting}
            >
              {currentStep === 5 ? 'Submit Enquiry' : 'Next'}
            </button>
          </div>
        </form>

        {showSuccessModal && (
          <div className="success-modal-overlay" onClick={handleClose}>
            <div className="success-modal-content" onClick={e => e.stopPropagation()}>
              <div className="success-icon">✓</div>
              <h3>Thank You!</h3>
              <p>Your information has been submitted successfully. We'll review it and get back to you shortly.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;