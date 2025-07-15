import React, { useState, useEffect } from 'react';

const HeroSection = ({ profile, currentColor }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['Framer Designer', 'Developer', 'UI/UX Designer', 'Creative Coder'];
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
      <div className="max-w-4xl mx-auto text-left">
        {/* Main Heading */}
        <div className="mb-8 animate-slideInLeft">
          <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6">
            Say Hi from <span style={{ color: currentColor }}>{profile.name}</span>,
          </h1>
          
          {/* Animated Typing Text */}
          <div className="mb-6">
            <h2 className="text-4xl lg:text-5xl text-gray-300 font-light">
              <span style={{ color: currentColor }} className="font-semibold">
                {displayText}
              </span>
              <span className="animate-pulse" style={{ color: currentColor }}>|</span>
              <span className="text-white"> and Developer</span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 animate-slideInRight">
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            I design and code beautifully simple things and I love what I do.<br/>
            Just simple like that!
          </p>
        </div>

        {/* Circular Element */}
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border-2 border-gray-600 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">MY</div>
            <div className="text-xs text-gray-400">PROJECTS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;