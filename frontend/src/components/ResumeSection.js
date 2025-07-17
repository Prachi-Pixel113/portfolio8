import React, { useState } from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, Award, Star } from 'lucide-react';

const ResumeSection = ({ resume, currentColor }) => {
  const [activeTab, setActiveTab] = useState('experience');

  // Add CSS animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes lineGrow {
        0% {
          height: 0;
          transform: translateY(-100%);
        }
        100% {
          height: 100%;
          transform: translateY(0);
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
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const TimelineItem = ({ item, isLast, index }) => (
    <div className="relative flex items-start space-x-6 pb-8">
      {/* Timeline line with animation */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 bg-gray-700 overflow-hidden">
          <div 
            className="w-full bg-green-500 transition-all duration-1000 ease-out"
            style={{ 
              height: '100%',
              backgroundColor: currentColor,
              animation: `lineGrow 1s ease-out ${index * 0.3}s both`
            }}
          ></div>
        </div>
      )}
      
      {/* Timeline dot with animation */}
      <div 
        className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-800 z-10 transform transition-all duration-500 ease-out"
        style={{ 
          backgroundColor: currentColor,
          animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
        }}
      >
        {activeTab === 'experience' ? (
          <Briefcase size={20} className="text-white" />
        ) : (
          <GraduationCap size={20} className="text-white" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-700"
           style={{
             transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
           }}
           onMouseEnter={(e) => {
             e.currentTarget.style.borderColor = currentColor;
             e.currentTarget.style.boxShadow = `0 0 20px ${currentColor}40`;
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.borderColor = '#374151';
             e.currentTarget.style.boxShadow = '';
           }}>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin size={16} className="mr-1" />
              <span className="font-medium">{item.company || item.institution}</span>
            </div>
          </div>
          <div className="flex items-center text-gray-400 text-sm bg-gray-700 px-3 py-1 rounded-full">
            <Calendar size={14} className="mr-1" />
            {item.period}
          </div>
        </div>
        
        <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>
        
        {item.achievements && (
          <div className="space-y-3">
            <div className="flex items-center">
              <Star size={16} className="mr-2" style={{ color: currentColor }} />
              <h4 className="text-sm font-semibold text-white">Key Achievements</h4>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {item.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: currentColor }}></div>
                  <span className="text-sm text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        
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

        {/* Timeline */}
        <div className="relative mb-20 max-w-4xl mx-auto">
          {activeTab === 'experience' ? (
            <div>
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
            <div>
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