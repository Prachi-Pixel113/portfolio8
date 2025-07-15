import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const HeroSection = ({ profile, theme }) => {
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

  const socialLinks = [
    { icon: Twitter, url: profile.social.twitter },
    { icon: Github, url: profile.social.github },
    { icon: Linkedin, url: profile.social.linkedin },
    { icon: Mail, url: `mailto:${profile.email}` }
  ];

  return (
    <div className="min-h-screen flex items-center px-8 lg:px-16 relative">
      
      {/* Left Side - Profile Card */}
      <div className="w-full lg:w-1/2 z-10">
        <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-800 max-w-md">
          
          {/* Profile Image */}
          <div className="mb-6">
            <div className="w-48 h-64 rounded-2xl overflow-hidden border-4 border-gray-700 mx-auto">
              <img 
                src={profile.image} 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">{profile.name}</h2>
            <p className="text-gray-400 mb-4">{profile.title}</p>
            <p className="text-gray-500 text-sm mb-4">{profile.email}</p>
            <p className="text-gray-500 text-sm mb-6">Base in {profile.location}</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={18} className="text-gray-400 hover:text-white" />
                </a>
              );
            })}
          </div>

          {/* Hire Me Button */}
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
          >
            HIRE ME!
          </button>

          {/* Copyright */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-xs">© 2024 {profile.name}. All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* Right Side - Main Content */}
      <div className="w-full lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
        
        {/* Introduce Button */}
        <div className="mb-8">
          <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm font-medium transition-colors duration-200">
            INTRODUCE
          </button>
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Say Hi from{' '}
            <span style={{ color: theme.primary }}>Prachi</span>,<br />
            <span className="text-white">Framer Designer and</span><br />
            <span className="text-white">Developer</span>
          </h1>
          
          <div className="h-12 flex items-center mt-4">
            <p className="text-xl text-gray-400">
              <span style={{ color: theme.primary }}>{displayText}</span>
              <span className="animate-pulse" style={{ color: theme.primary }}>|</span>
            </p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            I design and code beautifully simple things and I love what I do.<br />
            Just simple like that!
          </p>
        </div>

        {/* Circular Badge */}
        <div className="relative">
          <div className="w-32 h-32 border-2 border-gray-700 rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs text-gray-500 uppercase tracking-widest">
                <span className="block">My</span>
                <span className="block">Projects</span>
              </div>
              <ChevronDown size={20} className="text-gray-400 mx-auto mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;