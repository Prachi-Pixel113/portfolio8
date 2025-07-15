import React from 'react';
import { X, Palette, Sun, Moon, Settings } from 'lucide-react';

const SettingsPanel = ({ isOpen, onClose, theme, setTheme }) => {
  const colorOptions = [
    { name: 'Green', color: '#10b981' },
    { name: 'Blue', color: '#3b82f6' },
    { name: 'Purple', color: '#8b5cf6' },
    { name: 'Pink', color: '#ec4899' },
    { name: 'Orange', color: '#f59e0b' },
    { name: 'Red', color: '#ef4444' },
  ];

  const handleColorChange = (color) => {
    setTheme(prev => ({ ...prev, primary: color }));
  };

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${
      isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Panel */}
      <div className={`absolute right-0 top-0 h-full w-80 bg-gray-900 border-l border-gray-800 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <Settings size={24} className="text-green-400" />
            <h3 className="text-xl font-bold text-white">Settings</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          
          {/* Color Picker */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Palette size={20} className="text-green-400" />
              <h4 className="text-lg font-semibold text-white">Accent Color</h4>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {colorOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => handleColorChange(option.color)}
                  className={`w-full h-12 rounded-lg border-2 transition-all duration-200 ${
                    theme.primary === option.color
                      ? 'border-white scale-105'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  style={{ backgroundColor: option.color }}
                  title={option.name}
                />
              ))}
            </div>
          </div>

          {/* Theme Settings */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sun size={20} className="text-green-400" />
              <h4 className="text-lg font-semibold text-white">Theme</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <span className="text-white">Dark Mode</span>
                <div className="flex items-center space-x-2">
                  <Moon size={16} className="text-gray-400" />
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animation Settings */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Animations</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <span className="text-white">Smooth Scrolling</span>
                <div className="w-12 h-6 bg-green-500 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <span className="text-white">Hover Effects</span>
                <div className="w-12 h-6 bg-green-500 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Reset Button */}
          <div className="pt-4 border-t border-gray-800">
            <button
              onClick={() => setTheme({
                primary: '#10b981',
                background: '#0f0f0f',
                card: '#1a1a1a',
                text: '#ffffff'
              })}
              className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
            >
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;