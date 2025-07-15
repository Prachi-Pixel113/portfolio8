import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const LeftSidebar = ({ profile, currentColor }) => {
  const socialLinks = [
    { name: 'Twitter', url: profile.social.twitter, icon: Twitter },
    { name: 'GitHub', url: profile.social.github, icon: Github },
    { name: 'LinkedIn', url: profile.social.linkedin, icon: Linkedin },
    { name: 'Email', url: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-gray-900 border-r border-gray-800 flex flex-col">
      {/* Profile Section */}
      <div className="p-8 text-center flex-1 flex flex-col justify-center">
        {/* Profile Picture */}
        <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-700">
          <img 
            src={profile.image} 
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name and Title */}
        <h1 className="text-3xl font-bold text-white mb-2">{profile.name}</h1>
        <p className="text-lg text-gray-400 mb-6">{profile.title}</p>
        
        {/* Contact Info */}
        <div className="space-y-2 mb-8">
          <p className="text-white">{profile.email}</p>
          <p className="text-gray-400">{profile.location}</p>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-colors duration-200"
                title={social.name}
              >
                <Icon size={18} className="text-gray-400 hover:text-white" />
              </a>
            );
          })}
        </div>
        
        {/* Hire Me Button */}
        <button
          className="w-full py-4 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
          style={{ backgroundColor: currentColor }}
        >
          HIRE ME!
        </button>
      </div>
      
      {/* Footer */}
      <div className="p-6 border-t border-gray-800">
        <p className="text-gray-500 text-sm text-center">
          © 2024 {profile.name}. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;