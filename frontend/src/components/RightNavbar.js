import React from 'react';
import { Home, User, FileText, Briefcase, Settings, Mail, Code } from 'lucide-react';

const RightNavbar = ({ activeSection, onSectionClick, currentColor }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'resume', icon: FileText, label: 'Resume' },
    { id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-3 md:space-y-4 border border-gray-700 rounded-full p-3 md:p-4 bg-gray-800/50 backdrop-blur-sm">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionClick(item.id)}
              className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-all duration-200 group relative ${
                activeSection === item.id
                  ? 'text-white shadow-lg'
                  : 'text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700'
              }`}
              style={{
                backgroundColor: activeSection === item.id ? currentColor : undefined
              }}
              title={item.label}
            >
              <Icon size={20} />
              
              {/* Tooltip */}
              <div className="absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RightNavbar;