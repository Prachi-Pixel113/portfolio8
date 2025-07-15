import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
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
  const [settings, setSettings] = useState({
    colorTheme: 'green',
    colors: {
      green: '#10b981',
      blue: '#3b82f6',
      purple: '#8b5cf6',
      pink: '#ec4899',
      orange: '#f59e0b',
      red: '#ef4444',
      gray: '#6b7280',
      cyan: '#06b6d4'
    }
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'portfolio', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

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

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCurrentColor = () => {
    return settings.colors[settings.colorTheme];
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-green-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Left Sidebar */}
      <LeftSidebar 
        profile={mockData.profile}
        currentColor={getCurrentColor()}
      />
      
      {/* Right Sidebar */}
      <RightSidebar 
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        currentColor={getCurrentColor()}
      />
      
      {/* Main Content Area */}
      <div className="ml-80 mr-16">
        <section id="home" className="section">
          <HeroSection profile={mockData.profile} currentColor={getCurrentColor()} />
        </section>
        
        <section id="about" className="section">
          <AboutSection about={mockData.about} currentColor={getCurrentColor()} />
        </section>
        
        <section id="resume" className="section">
          <ResumeSection resume={mockData.resume} currentColor={getCurrentColor()} />
        </section>
        
        <section id="portfolio" className="section">
          <PortfolioSection projects={mockData.projects} currentColor={getCurrentColor()} />
        </section>
        
        <section id="services" className="section">
          <ServicesSection services={mockData.services} currentColor={getCurrentColor()} />
        </section>
        
        <section id="contact" className="section">
          <ContactSection contact={mockData.contact} currentColor={getCurrentColor()} />
        </section>
      </div>
    </div>
  );
};

export default Portfolio;