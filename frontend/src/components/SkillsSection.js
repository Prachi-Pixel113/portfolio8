import React from 'react';
import { Code, Coffee, Award, Star, Palette, Database, Globe, Smartphone, Monitor, Settings, GitBranch, Zap } from 'lucide-react';

const SkillsSection = ({ skills, currentColor }) => {
  // Skill icons mapping
  const skillIcons = {
    'Framer': Monitor,
    'React/Next.js': Globe,
    'UI/UX Design': Palette,
    'JavaScript/TypeScript': Code,
    'Figma': Settings,
    'Prototyping': Smartphone,
    'Node.js': Database,
    'Python': Code,
    'MongoDB': Database,
    'Git': GitBranch,
    'AWS': Zap,
    'Docker': Settings
  };

  const getSkillIcon = (skillName) => {
    const IconComponent = skillIcons[skillName] || Code;
    return IconComponent;
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
            const IconComponent = getSkillIcon(skill.name);
            return (
              <div key={index} className="relative group">
                {/* Oval Background */}
                <div className="bg-gray-800 rounded-full p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 group-hover:border-gray-600">
                  <div className="text-center">
                    {/* Skill Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: currentColor }}>
                      <IconComponent size={28} className="text-white" />
                    </div>
                    
                    {/* Skill Name */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    
                    {/* Star Rating */}
                    <div className="flex justify-center items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`mx-1 ${i < Math.floor(skill.level / 20) ? 'text-yellow-400' : 'text-gray-600'}`}
                          fill={i < Math.floor(skill.level / 20) ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: currentColor
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fun Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-3xl p-8 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500 flex items-center justify-center">
              <Coffee size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Coffee Lover</h4>
            <p className="text-gray-400">500+ cups of coffee consumed while coding</p>
          </div>
          
          <div className="bg-gray-800 rounded-3xl p-8 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2">
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