import React from 'react';
import { Home, User, FileText, Briefcase, Settings, Mail } from 'lucide-react';

const RightSidebar = ({ activeSection, onSectionClick, currentColor }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-gray-800 rounded-2xl p-3 border border-gray-700 shadow-2xl">
        <nav className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-200 group relative ${
                  activeSection === item.id
                    ? 'text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                style={{
                  backgroundColor: activeSection === item.id ? currentColor : 'transparent'
                }}
                title={item.label}
              >
                <Icon size={18} />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default RightSidebar;