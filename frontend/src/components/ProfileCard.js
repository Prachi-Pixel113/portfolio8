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
    <div className="fixed left-0 top-0 h-full w-80 lg:w-96 flex flex-col justify-center p-4 lg:p-8 hidden lg:flex">
      
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
        <div className="border-2 border-gray-700 rounded-3xl p-8 lg:p-10 bg-transparent min-h-[500px] lg:min-h-[600px] flex flex-col justify-center">
          
          {/* Profile Picture */}
          <div className="text-center mb-6 lg:mb-8">
            <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto mb-4 lg:mb-6 rounded-3xl overflow-hidden">
              <img 
                src={profile.image} 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Title */}
            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 lg:mb-3">{profile.name}</h1>
            <p className="text-gray-400 text-sm lg:text-base">{profile.title}</p>
          </div>
          
          {/* Contact Info */}
          <div className="text-center mb-6 lg:mb-8">
            <p className="text-white text-sm lg:text-base mb-2 lg:mb-3">{profile.email}</p>
            <p className="text-gray-400 text-sm lg:text-base">{profile.location}</p>
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
                  className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-all duration-200"
                  title={social.name}
                >
                  <Icon size={18} className="text-gray-400 hover:text-white" />
                </a>
              );
            })}
          </div>
          
          {/* Hire Me Button */}
          <div className="text-center">
            <button 
              className="px-10 py-4 text-black font-semibold rounded-full transition-all duration-200 hover:shadow-lg flex items-center justify-center mx-auto text-lg"
              style={{ backgroundColor: currentColor }}
            >
              <Mail size={18} className="mr-2" />
              HIRE ME!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;