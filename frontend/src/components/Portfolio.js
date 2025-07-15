import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
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
  const [settings, setSettings] = useState({
    colorTheme: 'green',
    backgroundStyle: 'curves',
    layoutStyle: 'full',
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

  const scrollToSection = (sectionId) => {
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
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {settings.backgroundStyle === 'curves' && (
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: getCurrentColor(), stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: getCurrentColor(), stopOpacity: 0.05 }} />
              </linearGradient>
            </defs>
            <path d="M0,200 Q200,100 400,200 Q600,300 800,200 Q1000,100 1200,200 L1200,0 L0,0 Z" fill="url(#gradient1)" />
            <path d="M0,600 Q200,500 400,600 Q600,700 800,600 Q1000,500 1200,600 L1200,800 L0,800 Z" fill="url(#gradient1)" />
          </svg>
        )}
        
        {settings.backgroundStyle === 'particles' && (
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-pulse"
                style={{
                  backgroundColor: getCurrentColor(),
                  opacity: 0.3,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}
        
        {settings.backgroundStyle === 'geometric' && (
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-opacity-20 rotate-45 transform" style={{ borderColor: getCurrentColor() }}></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-opacity-20 rotate-12 transform" style={{ borderColor: getCurrentColor() }}></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-opacity-20 rotate-45 transform" style={{ borderColor: getCurrentColor() }}></div>
          </div>
        )}
      </div>

      {/* Settings Panel */}
      <SettingsPanel 
        isOpen={showSettings} 
        onClose={() => setShowSettings(false)} 
        settings={settings}
        setSettings={setSettings}
      />

      {/* Left Sidebar */}
      <LeftSidebar 
        activeSection={activeSection} 
        onSectionClick={scrollToSection}
        onSettingsClick={() => setShowSettings(true)}
        profile={mockData.profile}
        currentColor={getCurrentColor()}
      />
      
      {/* Right Content Area */}
      <div className={`transition-all duration-300 ${
        settings.layoutStyle === 'boxed' 
          ? 'ml-80 mr-8 max-w-6xl' 
          : 'ml-80'
      }`}>
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