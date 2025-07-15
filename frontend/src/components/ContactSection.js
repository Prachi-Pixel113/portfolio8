import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

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
    <div className="min-h-screen py-20 px-8 lg:px-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Get In <span style={{ color: currentColor }}>Touch</span>
        </h2>

        <div className="text-center mb-16">
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear from you. Let's talk about how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new opportunities and interesting projects. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: currentColor }}>
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">{contact.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: currentColor }}>
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-400">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: currentColor }}>
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">{contact.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {contact.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center transition-colors duration-200 border border-gray-800"
                    style={{
                      ':hover': { backgroundColor: currentColor }
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = currentColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#111827'}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MessageCircle size={28} className="mr-3" style={{ color: currentColor }} />
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none text-white"
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none text-white"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none text-white"
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
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none text-white resize-none"
                  style={{ 
                    ':focus': { borderColor: currentColor },
                    borderColor: formData.message ? currentColor : '#374151'
                  }}
                  onFocus={(e) => e.target.style.borderColor = currentColor}
                  onBlur={(e) => e.target.style.borderColor = formData.message ? currentColor : '#374151'}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-4 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
                style={{ 
                  backgroundColor: currentColor,
                  ':hover': { filter: 'brightness(1.1)' }
                }}
                onMouseEnter={(e) => e.target.style.filter = 'brightness(1.1)'}
                onMouseLeave={(e) => e.target.style.filter = 'brightness(1)'}
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;