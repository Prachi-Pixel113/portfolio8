import React from 'react';
import { Download, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const AboutSection = ({ about }) => {
  return (
    <div className="min-h-screen py-20 px-4 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-2xl">
                <img 
                  src={about.profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>

          {/* About Content */}
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

            <button className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg">
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>

        {/* Info Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {about.info.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <item.icon className="text-blue-400 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-white">{item.label}</h4>
              </div>
              <p className="text-gray-300">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {about.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;