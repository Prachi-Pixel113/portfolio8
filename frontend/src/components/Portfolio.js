import React, { useState, useEffect } from 'react';
import RightSidebar from './RightSidebar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
import PortfolioSection from './PortfolioSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import SettingsPanel from './SettingsPanel';
import { mockData } from '../data/mockData';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [theme, setTheme] = useState({
    primary: '#10b981', // Green accent
    background: '#0f0f0f',
    card: '#1a1a1a',
    text: '#ffffff'
  });

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
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background curves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 1200 800">
          <path d="M800,0 Q1000,200 1200,400 L1200,0 Z" fill="rgba(16,185,129,0.1)" />
          <path d="M900,800 Q1100,600 1200,400 L1200,800 Z" fill="rgba(16,185,129,0.05)" />
        </svg>
      </div>

      {/* Settings Panel */}
      <SettingsPanel 
        isOpen={showSettings} 
        onClose={() => setShowSettings(false)} 
        theme={theme}
        setTheme={setTheme}
      />

      {/* Right Sidebar */}
      <RightSidebar 
        activeSection={activeSection} 
        onSectionClick={scrollToSection}
        onSettingsClick={() => setShowSettings(true)}
        theme={theme}
      />
      
      {/* Main Content Area */}
      <div className="pr-20 min-h-screen">
        <section id="home" className="section">
          <HeroSection profile={mockData.profile} theme={theme} />
        </section>
        
        <section id="about" className="section">
          <AboutSection about={mockData.about} theme={theme} />
        </section>
        
        <section id="resume" className="section">
          <ResumeSection resume={mockData.resume} theme={theme} />
        </section>
        
        <section id="portfolio" className="section">
          <PortfolioSection projects={mockData.projects} theme={theme} />
        </section>
        
        <section id="services" className="section">
          <ServicesSection services={mockData.services} theme={theme} />
        </section>
        
        <section id="contact" className="section">
          <ContactSection contact={mockData.contact} theme={theme} />
        </section>
      </div>
    </div>
  );
};

export default Portfolio;