import React from 'react';
import { Twitter, Github, Linkedin, Instagram, Mail, Settings } from 'lucide-react';

const ProfileCard = ({ profile, currentColor, onSettingsClick }) => {
  const socialLinks = [
    { name: 'Twitter', url: profile.social.twitter, icon: Twitter },
    { name: 'GitHub', url: profile.social.github, icon: Github },
    { name: 'LinkedIn', url: profile.social.linkedin, icon: Linkedin },
    { name: 'Instagram', url: profile.social.instagram, icon: Instagram },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-80 flex flex-col justify-center p-8">
      
      {/* Profile Card */}
      <div className="relative">
        {/* Settings Button on Border */}
        <div className="absolute -top-4 left-4 z-10">
          <button
            onClick={onSettingsClick}
            className="w-8 h-8 flex items-center justify-center bg-gray-900 border border-gray-700 rounded-full text-gray-400 hover:text-white transition-colors"
          >
            <Settings size={16} />
          </button>
        </div>

        {/* Transparent Profile Card with Border */}
        <div className="border-2 border-gray-700 rounded-3xl p-8 bg-transparent">
          
          {/* Profile Picture */}
          <div className="text-center mb-6">
            <div className="w-40 h-40 mx-auto mb-4 rounded-3xl overflow-hidden">
              <img 
                src={profile.image} 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Title */}
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
              className="px-8 py-3 text-black font-semibold rounded-full transition-all duration-200 hover:shadow-lg flex items-center justify-center mx-auto"
              style={{ backgroundColor: currentColor }}
            >
              <Mail size={16} className="mr-2" />
              HIRE ME!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;