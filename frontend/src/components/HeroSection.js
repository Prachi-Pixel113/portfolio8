import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';

const HeroSection = ({ profile, currentColor }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['Full Stack Developer', 'UI/UX Designer', 'Web Developer', 'React Specialist'];
  const currentTitle = titles[currentIndex];

  useEffect(() => {
    let timeout;
    
    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentTitle, isDeleting]);

  return (
    <div className="min-h-screen flex items-center justify-center px-8 lg:px-16 relative">
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Welcome Badge */}
        <div className="mb-8 animate-fadeIn">
          <span className="inline-block px-6 py-3 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700">
            👋 Welcome to my portfolio
          </span>
        </div>

        {/* Main Heading */}
        <div className="mb-8 animate-slideInLeft">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span style={{ color: currentColor }}>{profile.name}</span>
          </h1>
          
          {/* Animated Typing Text */}
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
              I'm a{' '}
              <span style={{ color: currentColor }} className="font-semibold">
                {displayText}
              </span>
              <span className="animate-pulse" style={{ color: currentColor }}>|</span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 animate-slideInRight">
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {profile.tagline}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeIn">
          <button
            onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            style={{ backgroundColor: currentColor }}
          >
            <Play size={20} />
            <span>View My Work</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-2 text-white hover:text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            style={{ 
              borderColor: currentColor,
              color: currentColor
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = currentColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fadeIn">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">3+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400 text-sm">Projects Done</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">30+</div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-400 text-sm">Scroll down to explore</span>
            <ChevronDown size={24} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;