import React from 'react';

const HeroSection = ({ profile, currentColor }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 relative">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full opacity-10 animate-pulse" 
             style={{ backgroundColor: currentColor, top: '20%', left: '10%' }}></div>
        <div className="absolute w-64 h-64 rounded-full opacity-10 animate-pulse delay-1000" 
             style={{ backgroundColor: currentColor, top: '60%', right: '15%' }}></div>
        <div className="absolute w-80 h-80 rounded-full opacity-10 animate-pulse delay-2000" 
             style={{ backgroundColor: currentColor, bottom: '10%', left: '50%' }}></div>
      </div>

      <div className="relative z-10 text-left max-w-4xl">
        {/* Introduce Text */}
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
            <span className="text-white text-sm">🏠</span>
          </div>
          <span className="text-gray-400 text-sm uppercase tracking-wider">INTRODUCE</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Say Hi from{' '}
          <span className="inline-block" style={{ color: currentColor }}>
            {profile.name}
          </span>
          ,<br />
          {profile.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
          {profile.tagline}
        </p>

        {/* MY PROJECTS Circle */}
        <div className="flex justify-end">
          <div className="relative">
            <div className="w-32 h-32 border border-gray-600 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-2">↓</div>
              </div>
            </div>
            {/* Circular Text */}
            <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
              <svg className="w-40 h-40 absolute" viewBox="0 0 160 160">
                <defs>
                  <path
                    id="circle"
                    d="M 80, 80 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  />
                </defs>
                <text className="text-xs fill-gray-500 uppercase tracking-wider">
                  <textPath href="#circle" startOffset="0%">
                    MY PROJECTS • MY PROJECTS • MY PROJECTS •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;