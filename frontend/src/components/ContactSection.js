import React, { useState } from 'react';
import { Mail, Send, MessageCircle } from 'lucide-react';

const ContactSection = ({ contact, currentColor }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen py-12 px-0 lg:px-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          {/* Introduce Text */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-sm">✉️</span>
            </div>
            <span className="text-gray-400 text-sm uppercase tracking-wider">CONTACT ME</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span style={{ color: currentColor }}>Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            Have a project in mind? I'd love to hear from you. Let's talk about how we can work together to bring your ideas to life.
          </p>
        </div>

        {/* Contact Form - Full width */}
        <div className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-lg border border-gray-800 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <MessageCircle size={24} className="mr-3" style={{ color: currentColor }} />
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none text-white text-sm"
                  style={{ 
                    ':focus': { borderColor: currentColor },
                    borderColor: formData.name ? currentColor : '#374151'
                  }}
                  onFocus={(e) => e.target.style.borderColor = currentColor}
                  onBlur={(e) => e.target.style.borderColor = formData.name ? currentColor : '#374151'}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none text-white text-sm"
                  style={{ 
                    ':focus': { borderColor: currentColor },
                    borderColor: formData.email ? currentColor : '#374151'
                  }}
                  onFocus={(e) => e.target.style.borderColor = currentColor}
                  onBlur={(e) => e.target.style.borderColor = formData.email ? currentColor : '#374151'}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none text-white text-sm"
                style={{ 
                  ':focus': { borderColor: currentColor },
                  borderColor: formData.subject ? currentColor : '#374151'
                }}
                onFocus={(e) => e.target.style.borderColor = currentColor}
                onBlur={(e) => e.target.style.borderColor = formData.subject ? currentColor : '#374151'}
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none text-white resize-none text-sm"
                style={{ 
                  ':focus': { borderColor: currentColor },
                  borderColor: formData.message ? currentColor : '#374151'
                }}
                onFocus={(e) => e.target.style.borderColor = currentColor}
                onBlur={(e) => e.target.style.borderColor = formData.message ? currentColor : '#374151'}
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full md:w-auto md:px-12 flex items-center justify-center space-x-2 py-3 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg text-sm"
                style={{ 
                  backgroundColor: currentColor,
                  ':hover': { filter: 'brightness(1.1)' }
                }}
                onMouseEnter={(e) => e.target.style.filter = 'brightness(1.1)'}
                onMouseLeave={(e) => e.target.style.filter = 'brightness(1)'}
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;