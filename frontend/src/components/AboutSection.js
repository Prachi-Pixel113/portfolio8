import React from 'react';
import { Download, Calendar, MapPin, Phone, Mail, Award, Code, Coffee } from 'lucide-react';

const AboutSection = ({ about, currentColor }) => {
  return (
    <div className="min-h-screen py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          {/* Introduce Text */}
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
          <p className="text-xl text-gray-400 max-w-2xl">
            What I am, what I do, and what inspires me
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">{about.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {about.description}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {about.details}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                className="flex items-center gap-3 px-6 py-3 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
                style={{ backgroundColor: currentColor }}
              >
                <Download size={20} />
                Download CV
              </button>
              
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 px-6 py-3 bg-transparent border-2 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
                style={{ borderColor: currentColor, color: currentColor }}
              >
                <Coffee size={20} />
                Let's Talk
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {about.info.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: currentColor }}>
                  <item.icon size={20} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">{item.label}</h4>
              </div>
              <p className="text-gray-300">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            My <span style={{ color: currentColor }}>Skills</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {about.skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium text-lg">{skill.name}</span>
                  <span className="text-gray-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: currentColor
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700">
            <Coffee size={32} className="mx-auto mb-4 text-yellow-400" />
            <h4 className="text-xl font-bold text-white mb-2">Coffee Lover</h4>
            <p className="text-gray-400">500+ cups of coffee consumed while coding</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700">
            <Code size={32} className="mx-auto mb-4" style={{ color: currentColor }} />
            <h4 className="text-xl font-bold text-white mb-2">Clean Code</h4>
            <p className="text-gray-400">Always writing readable and maintainable code</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700">
            <Award size={32} className="mx-auto mb-4 text-purple-400" />
            <h4 className="text-xl font-bold text-white mb-2">Problem Solver</h4>
            <p className="text-gray-400">Love tackling complex challenges</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;