import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = ({ profile }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['Full Stack Developer', 'UI/UX Designer', 'Web Developer', 'React Specialist'];
  const currentTitle = titles[currentIndex];

  useEffect(() => {
    let timeout;
    
    if (!isDeleting) {
      // Typing effect
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      // Deleting effect
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            I'm {profile.name}
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              <span className="text-blue-400">{displayText}</span>
              <span className="animate-pulse text-blue-400">|</span>
            </h2>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          {profile.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;