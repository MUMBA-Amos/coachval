import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleOpenForm = () => {
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="App">
      <Navbar onOpenForm={handleOpenForm} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero onOpenForm={handleOpenForm} />
            <About />
            <Services />
            <Testimonials />
            <CTASection onOpenForm={handleOpenForm} />
            <Footer />
          </>
        } />
      </Routes>
      {showContactForm && <ContactForm onClose={handleCloseForm} />}
    </div>
  );
}

export default App; 