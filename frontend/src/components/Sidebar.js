import React, { useState } from 'react';
import { Home, User, FileText, Briefcase, Settings, Mail, Menu, X } from 'lucide-react';

const Sidebar = ({ activeSection, onSectionClick, profile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const socialLinks = [
    { name: 'GitHub', url: profile.social.github, icon: '🐙' },
    { name: 'LinkedIn', url: profile.social.linkedin, icon: '💼' },
    { name: 'Twitter', url: profile.social.twitter, icon: '🐦' },
    { name: 'Email', url: `mailto:${profile.email}`, icon: '✉️' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-gray-800 transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        
        {/* Profile Section */}
        <div className="p-8 text-center border-b border-gray-700">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500">
            <img 
              src={profile.image} 
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{profile.name}</h2>
          <p className="text-gray-400">{profile.title}</p>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onSectionClick(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon size={20} className="mr-3" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="absolute bottom-8 left-0 right-0 px-8">
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-600 transition-colors duration-200"
                title={social.name}
              >
                <span className="text-lg">{social.icon}</span>
              </a>
            ))}
          </div>
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

export default Sidebar;