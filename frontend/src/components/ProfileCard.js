import React from 'react';
import { Twitter, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const ProfileCard = ({ profile, currentColor }) => {
  const socialLinks = [
    { name: 'Twitter', url: profile.social.twitter, icon: Twitter },
    { name: 'GitHub', url: profile.social.github, icon: Github },
    { name: 'LinkedIn', url: profile.social.linkedin, icon: Linkedin },
    { name: 'Instagram', url: profile.social.instagram, icon: Instagram },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-gray-900 border-r border-gray-800 flex flex-col justify-between p-8">
      
      {/* Profile Section */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Profile Picture */}
        <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden">
          <img 
            src={profile.image} 
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name and Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">{profile.name}</h1>
          <p className="text-gray-400 text-sm">{profile.title}</p>
        </div>
        
        {/* Contact Info */}
        <div className="text-center mb-6">
          <p className="text-white text-sm mb-2">{profile.email}</p>
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
                className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-all duration-200"
                title={social.name}
              >
                <Icon size={16} className="text-gray-400 hover:text-white" />
              </a>
            );
          })}
        </div>
        
        {/* Hire Me Button */}
        <div className="text-center">
          <button 
            className="px-8 py-3 text-black font-semibold rounded-full transition-all duration-200 hover:shadow-lg"
            style={{ backgroundColor: currentColor }}
          >
            📧 HIRE ME!
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center text-gray-500 text-xs">
        © 2022 Drake. All Rights Reserved
      </div>
    </div>
  );
};

export default ProfileCard;