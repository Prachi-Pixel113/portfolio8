import React, { useState } from 'react';
import { Home, User, FileText, Briefcase, Settings, Mail, Menu, X, Twitter, Github, Linkedin } from 'lucide-react';

const LeftSidebar = ({ activeSection, onSectionClick, onSettingsClick, profile, currentColor }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const socialLinks = [
    { name: 'Twitter', url: profile.social.twitter, icon: Twitter },
    { name: 'GitHub', url: profile.social.github, icon: Github },
    { name: 'LinkedIn', url: profile.social.linkedin, icon: Linkedin },
    { name: 'Email', url: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gray-800 text-white rounded-full shadow-lg"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Left Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-gray-900 border-r border-gray-800 transform transition-transform duration-300 ease-in-out z-40 ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 flex flex-col`}>
        
        {/* Profile Block */}
        <div className="p-8 text-center border-b border-gray-800 flex-shrink-0">
          {/* Profile Picture */}
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: currentColor }}>
            <img 
              src={profile.image} 
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Name */}
          <h2 className="text-2xl font-bold text-white mb-2">{profile.name}</h2>
          
          {/* Role */}
          <p className="text-gray-400 text-sm">{profile.title}</p>
        </div>

        {/* Navigation Icons */}
        <nav className="flex-1 py-8 px-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionClick(item.id);
                    setIsMobileOpen(false);
                  }}
                  className={`w-full flex items-center px-6 py-4 rounded-xl transition-all duration-200 group relative ${
                    activeSection === item.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                  style={{
                    backgroundColor: activeSection === item.id ? currentColor : 'transparent'
                  }}
                >
                  <Icon size={20} className="mr-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Settings Button */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={onSettingsClick}
            className="w-full flex items-center justify-center px-6 py-4 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-xl transition-all duration-200 group"
          >
            <Settings size={20} className="mr-3" />
            <span className="font-medium">Settings</span>
          </button>
        </div>

        {/* Social Icons */}
        <div className="p-6 border-t border-gray-800">
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:shadow-lg transition-all duration-200"
                  style={{
                    ':hover': { backgroundColor: currentColor }
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = currentColor}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
                  title={social.name}
                >
                  <Icon size={18} className="text-gray-400 hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default LeftSidebar;