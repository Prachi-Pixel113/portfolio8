import React, { useState } from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const ResumeSection = ({ resume }) => {
  const [activeTab, setActiveTab] = useState('experience');

  const TimelineItem = ({ item, isLast }) => (
    <div className="relative flex items-start space-x-6 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
      )}
      
      {/* Timeline dot */}
      <div className="relative flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
        {activeTab === 'experience' ? (
          <Briefcase size={20} className="text-white" />
        ) : (
          <GraduationCap size={20} className="text-white" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <div className="flex items-center text-blue-400 text-sm">
            <Calendar size={16} className="mr-1" />
            {item.period}
          </div>
        </div>
        
        <div className="flex items-center text-gray-300 mb-3">
          <MapPin size={16} className="mr-1" />
          {item.company || item.institution}
        </div>
        
        <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>
        
        {item.achievements && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-blue-400">Key Achievements:</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              {item.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-20 px-4 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          My Resume
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {activeTab === 'experience' ? (
            <div>
              {resume.experience.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  item={item} 
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
                  isLast={index === resume.education.length - 1}
                />
              ))}
            </div>
          )}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resume.certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">🏆</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                    <p className="text-blue-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;