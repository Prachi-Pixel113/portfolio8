import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
import PortfolioSection from './PortfolioSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import { mockData } from '../data/mockData';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'portfolio', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Sidebar 
        activeSection={activeSection} 
        onSectionClick={scrollToSection}
        profile={mockData.profile}
      />
      
      <div className="ml-0 lg:ml-80 min-h-screen">
        <section id="home" className="section">
          <HeroSection profile={mockData.profile} />
        </section>
        
        <section id="about" className="section">
          <AboutSection about={mockData.about} />
        </section>
        
        <section id="resume" className="section">
          <ResumeSection resume={mockData.resume} />
        </section>
        
        <section id="portfolio" className="section">
          <PortfolioSection projects={mockData.projects} />
        </section>
        
        <section id="services" className="section">
          <ServicesSection services={mockData.services} />
        </section>
        
        <section id="contact" className="section">
          <ContactSection contact={mockData.contact} />
        </section>
      </div>
    </div>
  );
};

export default Portfolio;