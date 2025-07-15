import React from 'react';
import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

const ServicesSection = ({ services }) => {
  const ServiceCard = ({ service }) => {
    const Icon = service.icon;
    
    return (
      <div className="group bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-blue-500">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon size={32} className="text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
        
        <div className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-300">
              <span className="text-blue-400 mr-2">✓</span>
              {feature}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-400">{service.price}</span>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-20 px-4 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          My Services
        </h2>

        <div className="text-center mb-16">
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I offer comprehensive development services to help bring your ideas to life. 
            From concept to deployment, I'll work with you to create amazing digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">My Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating a roadmap for success' },
              { step: '03', title: 'Development', description: 'Building your solution with precision' },
              { step: '04', title: 'Delivery', description: 'Launching and supporting your project' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;