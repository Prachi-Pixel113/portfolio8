import React from 'react';
import { Download, Calendar, MapPin, Phone, Mail, Award, Code, Coffee } from 'lucide-react';

const AboutSection = ({ about, currentColor }) => {
  return (
    <div className="min-h-screen py-8 px-0 lg:px-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header - Left aligned like other sections */}
        <div className="text-left mb-12">
          {/* About Me Text - Consistent with other sections */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-sm">👤</span>
            </div>
            <span className="text-gray-400 text-sm uppercase tracking-wider">ABOUT ME</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get to know more about <span style={{ color: currentColor }}>me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            What I am, what I do, and what inspires me
          </p>
        </div>

        {/* Main Content - Left aligned for consistency */}
        <div className="mb-16">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">{about.title}</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6 max-w-4xl">
                {about.description}
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-4xl">
                {about.details}
              </p>
            </div>

            {/* Buttons - Left aligned on mobile, responsive layout */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 md:px-8 md:py-4 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg text-sm md:text-base"
                style={{ backgroundColor: currentColor }}
              >
                <Download size={18} className="md:w-5 md:h-5" />
                Download CV
              </button>
              
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 text-sm md:text-base"
                style={{ borderColor: currentColor, color: currentColor }}
              >
                <Coffee size={18} className="md:w-5 md:h-5" />
                Let's Talk
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {about.info.map((item, index) => (
            <div key={index} className="bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: currentColor }}>
                  <item.icon size={18} className="text-white md:w-5 md:h-5" />
                </div>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-white mb-2 text-center">{item.label}</h4>
              <p className="text-gray-300 text-sm md:text-base text-center">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;