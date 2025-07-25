import React, { useState } from 'react';
import { Menu, X, Home, User, FileText, Briefcase, Mail, Code } from 'lucide-react';

const MobileNavbar = ({ activeSection, onSectionClick, currentColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'resume', icon: FileText, label: 'Resume' },
    { id: 'portfolio', icon: Briefcase, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const handleSectionClick = (sectionId) => {
    onSectionClick(sectionId);
    setIsOpen(false); // Close menu after selection
  };

  return (
    <>
      {/* Mobile Navbar - Fixed Top */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="flex items-center justify-between p-4">
          <div className="text-white font-bold text-lg">Drake</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 shadow-lg">
            <div className="px-4 py-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSectionClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                    style={{
                      backgroundColor: activeSection === item.id ? currentColor : 'transparent'
                    }}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Overlay to close menu when clicking outside */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default MobileNavbar;