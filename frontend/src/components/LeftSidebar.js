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
    <div className="fixed left-8 top-8 z-40">
      {/* Profile Card */}
      <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 w-80">
        {/* Profile Picture */}
        <div className="text-center mb-6">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-600">
            <img 
              src={profile.image} 
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Name and Title */}
          <h1 className="text-2xl font-bold text-white mb-1">{profile.name}</h1>
          <p className="text-gray-400 text-sm">{profile.title}</p>
        </div>
        
        {/* Contact Info */}
        <div className="text-center mb-6">
          <p className="text-white text-sm mb-1">{profile.email}</p>
          <p className="text-gray-400 text-sm">{profile.location}</p>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-3 mb-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-colors duration-200"
                title={social.name}
              >
                <Icon size={16} className="text-gray-400 hover:text-white" />
              </a>
            );
          })}
        </div>
        
        {/* Hire Me Button */}
        <button
          className="w-full py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg text-sm"
          style={{ backgroundColor: currentColor }}
        >
          HIRE ME!
        </button>
        
        {/* Copyright */}
        <div className="text-center mt-6 pt-4 border-t border-gray-700">
          <p className="text-gray-500 text-xs">
            © 2024 {profile.name}. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;