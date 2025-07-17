import React from 'react';
import { Code, Coffee, Award } from 'lucide-react';

const SkillsSection = ({ skills, currentColor }) => {
  // Skill icons and colors mapping
  const skillData = {
    'Framer': { 
      icon: '🎨', 
      color: '#0099FF',
      bgColor: 'bg-blue-500'
    },
    'React/Next.js': { 
      icon: '⚛️', 
      color: '#61DAFB',
      bgColor: 'bg-blue-400'
    },
    'UI/UX Design': { 
      icon: '🎨', 
      color: '#FF6B6B',
      bgColor: 'bg-red-400'
    },
    'JavaScript/TypeScript': { 
      icon: '💛', 
      color: '#F7DF1E',
      bgColor: 'bg-yellow-400'
    },
    'Figma': { 
      icon: '🔶', 
      color: '#F24E1E',
      bgColor: 'bg-orange-500'
    },
    'Prototyping': { 
      icon: '📱', 
      color: '#9C27B0',
      bgColor: 'bg-purple-500'
    }
  };

  const getSkillData = (skillName) => {
    return skillData[skillName] || { 
      icon: '⚡', 
      color: currentColor,
      bgColor: 'bg-gray-500'
    };
  };

  return (
    <div className="min-h-screen py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          {/* Introduce Text */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-sm">💡</span>
            </div>
            <span className="text-gray-400 text-sm uppercase tracking-wider">MY SKILLS</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My technical <span style={{ color: currentColor }}>expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => {
            const skillInfo = getSkillData(skill.name);
            return (
              <div key={index} className="relative group">
                {/* Oval Background - Made more oval in height */}
                <div className="bg-black rounded-full p-6 py-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-700 group-hover:border-gray-500 w-48 h-64 mx-auto flex items-center justify-center group-hover:bg-opacity-90"
                     style={{
                       backgroundColor: 'black',
                       transition: 'background-color 0.5s ease'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.backgroundColor = currentColor;
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.backgroundColor = 'black';
                     }}>
                  <div className="text-center">
                    {/* Skill Icon */}
                    <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                      {skillInfo.icon}
                    </div>
                    
                    {/* Percentage */}
                    <div className="text-2xl font-bold mb-2 text-white transition-all duration-300">
                      {skill.level}%
                    </div>
                    
                    {/* Skill Name */}
                    <h3 className="text-sm font-medium text-white transition-all duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fun Facts - Decreased width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-3xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500 flex items-center justify-center">
              <Coffee size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Coffee Lover</h4>
            <p className="text-gray-400">500+ cups of coffee consumed while coding</p>
          </div>
          
          <div className="bg-gray-800 rounded-3xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: currentColor }}>
              <Code size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Clean Code</h4>
            <p className="text-gray-400">Always writing readable and maintainable code</p>
          </div>
          
          <div className="bg-gray-800 rounded-3xl p-8 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500 flex items-center justify-center">
              <Award size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Problem Solver</h4>
            <p className="text-gray-400">Love tackling complex challenges</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;