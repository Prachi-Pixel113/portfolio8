import React from 'react';
import { Twitter, Github, Linkedin, Instagram, Mail, Settings } from 'lucide-react';

const MobileProfileCard = ({ profile, currentColor, onSettingsClick }) => {
  const socialLinks = [
    { name: 'Twitter', url: profile.social.twitter, icon: Twitter },
    { name: 'GitHub', url: profile.social.github, icon: Github },
    { name: 'LinkedIn', url: profile.social.linkedin, icon: Linkedin },
    { name: 'Instagram', url: profile.social.instagram, icon: Instagram },
  ];

  return (
    <div className="mobile-profile-card md:hidden bg-gray-900/50 backdrop-blur-sm border-b border-gray-700 py-16 px-4 mt-16">
      <div className="text-center">
        {/* Profile Picture */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden">
            <img 
              src={profile.image} 
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Name and Title */}
          <h1 className="mobile-title text-3xl font-bold text-white mb-3">{profile.name}</h1>
          <p className="mobile-text text-gray-400 text-lg">{profile.title}</p>
        </div>
        
        {/* Contact Info */}
        <div className="mb-8">
          <a 
            href={`mailto:${profile.email}`}
            className="mobile-text text-white text-lg hover:text-gray-300 transition-colors"
          >
            {profile.email}
          </a>
          <p className="text-gray-500 text-base mt-2">Based in {profile.location}</p>
        </div>
        
        {/* Social Links */}
        <div className="mobile-social-links flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-all duration-200"
                title={social.name}
              >
                <Icon size={20} className="text-gray-400 hover:text-white" />
              </a>
            );
          })}
        </div>
        
        {/* Hire Me Button */}
        <div className="text-center mb-6">
          <a
            href={`mailto:${profile.email}`}
            className="mobile-button inline-flex items-center px-10 py-4 text-black font-semibold rounded-full transition-all duration-200 hover:shadow-lg text-lg"
            style={{ backgroundColor: currentColor }}
          >
            <Mail size={20} className="mr-2" />
            HIRE ME!
          </a>
        </div>

        {/* Settings Button */}
        <div className="text-center">
          <button
            onClick={onSettingsClick}
            className="px-6 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-400 hover:text-white transition-colors flex items-center justify-center mx-auto"
          >
            <Settings size={16} className="mr-2" />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileProfileCard;