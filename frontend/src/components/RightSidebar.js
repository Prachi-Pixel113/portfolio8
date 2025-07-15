import React, { useState } from 'react';
import { Home, User, FileText, Briefcase, Settings, Mail, Menu, X } from 'lucide-react';

const RightSidebar = ({ activeSection, onSectionClick, onSettingsClick, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-gray-900 text-white rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Right Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-20 bg-gray-900 border-l border-gray-800 transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:translate-x-0`}>
        
        {/* Logo at top */}
        <div className="p-4 text-center border-b border-gray-800">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-xl">P</span>
          </div>
        </div>

        {/* Navigation Icons */}
        <nav className="py-8">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => {
                      onSectionClick(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-center py-4 transition-all duration-200 relative ${
                      activeSection === item.id
                        ? 'text-green-400'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                    
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <div className="absolute left-0 top-0 w-1 h-full bg-green-400 rounded-r"></div>
                    )}
                  </button>
                  
                  {/* Tooltip */}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        {/* Settings Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            onClick={onSettingsClick}
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
          >
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default RightSidebar;