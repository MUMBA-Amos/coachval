import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BeyondTraining from './components/BeyondTraining';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <Navbar onOpenForm={handleOpenForm} />
        <Hero onOpenForm={handleOpenForm} />
        <About />
        <BeyondTraining />
        <Services />
        <Testimonials />
        <CTASection onOpenForm={handleOpenForm} />
        {isFormOpen && <ContactForm onClose={handleCloseForm} />}
        <Footer />
      </div>
    </div>
  );
} 

export default App;
