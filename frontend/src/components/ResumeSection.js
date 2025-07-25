import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, Award, Star } from 'lucide-react';

const ResumeSection = ({ resume, currentColor }) => {
  const [activeTab, setActiveTab] = useState('experience');
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes lineGrow {
        0% {
          height: 0;
          transform: scaleY(0);
          transform-origin: top;
        }
        100% {
          height: 100%;
          transform: scaleY(1);
          transform-origin: top;
        }
      }
      
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes pulseGlow {
        0%, 100% {
          box-shadow: 0 0 10px ${currentColor}40;
        }
        50% {
          box-shadow: 0 0 20px ${currentColor}80, 0 0 30px ${currentColor}40;
        }
      }

      .timeline-line {
        height: 0;
        transition: height 0.8s ease-out;
      }

      .timeline-line.animate {
        animation: lineGrow 1.2s ease-out forwards;
      }

      .timeline-dot {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.6s ease-out;
      }

      .timeline-dot.animate {
        opacity: 1;
        transform: translateY(0);
        animation: pulseGlow 2s ease-in-out infinite;
      }

      .timeline-content {
        opacity: 1;
        transform: translateX(0);
        transition: all 0.8s ease-out;
      }

      .timeline-content.animate {
        opacity: 1;
        transform: translateX(0);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [currentColor]);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index;
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, [activeTab]);

  // Reset animations when tab changes
  useEffect(() => {
    setVisibleItems(new Set());
    itemRefs.current = [];
  }, [activeTab]);

  const TimelineItem = ({ item, isLast, index }) => {
    const isVisible = visibleItems.has(index);
    
    return (
      <div 
        ref={(el) => itemRefs.current[index] = el}
        className="relative flex items-start space-x-4 md:space-x-6 pb-8"
      >
        {/* Timeline line with scroll-triggered animation */}
        {!isLast && (
          <div className="absolute left-4 md:left-6 top-16 w-0.5 h-full bg-gray-700 overflow-hidden">
            <div 
              className={`timeline-line w-full bg-gradient-to-b from-transparent via-current to-current ${isVisible ? 'animate' : ''}`}
              style={{ 
                color: currentColor,
                animationDelay: `${index * 0.2}s`
              }}
            ></div>
          </div>
        )}
        
        {/* Timeline dot with enhanced animation */}
        <div 
          className={`timeline-dot relative flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-4 border-gray-800 z-10 ${isVisible ? 'animate' : ''}`}
          style={{ 
            backgroundColor: currentColor,
            animationDelay: `${index * 0.1}s`
          }}
        >
          {activeTab === 'experience' ? (
            <Briefcase size={16} className="text-white md:w-5 md:h-5" />
          ) : (
            <GraduationCap size={16} className="text-white md:w-5 md:h-5" />
          )}
          
          {/* Pulsing ring effect */}
          <div 
            className={`absolute inset-0 rounded-full border-2 ${isVisible ? 'animate-ping' : ''}`}
            style={{ 
              borderColor: currentColor,
              animationDuration: '2s',
              animationDelay: `${index * 0.3}s`
            }}
          ></div>
        </div>

        {/* Content with slide-in animation - Always visible on mobile */}
        <div 
          className={`flex-1 bg-black p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-700 ${isVisible ? 'timeline-content animate' : 'opacity-100 md:opacity-0 md:timeline-content'}`}
          style={{
            animationDelay: `${index * 0.15}s`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = currentColor;
            e.currentTarget.style.boxShadow = `0 0 20px ${currentColor}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#374151';
            e.currentTarget.style.boxShadow = '';
          }}
        >
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
              <div className="flex items-center text-gray-300 mb-2">
                <MapPin size={14} className="mr-1 md:w-4 md:h-4" />
                <span className="font-medium text-sm md:text-base">{item.company || item.institution}</span>
              </div>
            </div>
            <div className="flex items-center text-gray-400 text-xs md:text-sm bg-gray-700 px-3 py-1 rounded-full self-start">
              <Calendar size={12} className="mr-1 md:w-3.5 md:h-3.5" />
              {item.period}
            </div>
          </div>
          
          <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">{item.description}</p>
          
          {item.achievements && (
            <div className="space-y-3">
              <div className="flex items-center">
                <Star size={14} className="mr-2 md:w-4 md:h-4" style={{ color: currentColor }} />
                <h4 className="text-xs md:text-sm font-semibold text-white">Key Achievements</h4>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {item.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: currentColor }}></div>
                    <span className="text-xs md:text-sm text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-8 px-0 lg:px-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          {/* Introduce Text */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-sm">📄</span>
            </div>
            <span className="text-gray-400 text-sm uppercase tracking-wider">MY RESUME</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My professional <span style={{ color: currentColor }}>journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A comprehensive overview of my experience and education
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-1 rounded-xl border border-gray-700">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'experience'
                  ? 'text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
              style={{
                backgroundColor: activeTab === 'experience' ? currentColor : 'transparent'
              }}
            >
              <Briefcase size={18} />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'education'
                  ? 'text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
              style={{
                backgroundColor: activeTab === 'education' ? currentColor : 'transparent'
              }}
            >
              <GraduationCap size={18} />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline - Mobile-friendly layout */}
        <div className="relative mb-20">
          <div className="w-full px-0 md:px-8">
            {activeTab === 'experience' ? (
              <div className="space-y-8">
                {resume.experience.map((item, index) => (
                  <TimelineItem 
                    key={index} 
                    item={item} 
                    index={index}
                    isLast={index === resume.experience.length - 1}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {resume.education.map((item, index) => (
                  <TimelineItem 
                    key={index} 
                    item={item} 
                    index={index}
                    isLast={index === resume.education.length - 1}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Certifications & <span style={{ color: currentColor }}>Awards</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resume.certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: currentColor }}>
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;