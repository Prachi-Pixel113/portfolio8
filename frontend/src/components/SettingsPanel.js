import React from 'react';
import { X, Palette, Monitor, Layout, Sparkles } from 'lucide-react';

const SettingsPanel = ({ isOpen, onClose, settings, setSettings }) => {
  const colorOptions = [
    { name: 'Green', key: 'green', color: '#10b981' },
    { name: 'Blue', key: 'blue', color: '#3b82f6' },
    { name: 'Purple', key: 'purple', color: '#8b5cf6' },
    { name: 'Pink', key: 'pink', color: '#ec4899' },
    { name: 'Orange', key: 'orange', color: '#f59e0b' },
    { name: 'Red', key: 'red', color: '#ef4444' },
    { name: 'Gray', key: 'gray', color: '#6b7280' },
    { name: 'Cyan', key: 'cyan', color: '#06b6d4' },
  ];

  const backgroundOptions = [
    { name: 'Curves', key: 'curves', icon: '〰️' },
    { name: 'Particles', key: 'particles', icon: '✨' },
    { name: 'Geometric', key: 'geometric', icon: '🔷' },
    { name: 'None', key: 'none', icon: '⚫' },
  ];

  const layoutOptions = [
    { name: 'Full Width', key: 'full', icon: '↔️' },
    { name: 'Boxed', key: 'boxed', icon: '📦' },
  ];

  const handleColorChange = (colorKey) => {
    setSettings(prev => ({ ...prev, colorTheme: colorKey }));
  };

  const handleBackgroundChange = (backgroundKey) => {
    setSettings(prev => ({ ...prev, backgroundStyle: backgroundKey }));
  };

  const handleLayoutChange = (layoutKey) => {
    setSettings(prev => ({ ...prev, layoutStyle: layoutKey }));
  };

  const resetSettings = () => {
    setSettings({
      colorTheme: 'green',
      backgroundStyle: 'curves',
      layoutStyle: 'full',
      colors: {
        green: '#10b981',
        blue: '#3b82f6',
        purple: '#8b5cf6',
        pink: '#ec4899',
        orange: '#f59e0b',
        red: '#ef4444',
        gray: '#6b7280',
        cyan: '#06b6d4'
      }
    });
  };

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${
      isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Settings Panel */}
      <div className={`absolute right-0 top-0 h-full w-96 bg-gray-800 border-l border-gray-700 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } overflow-y-auto`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700 sticky top-0 bg-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: settings.colors[settings.colorTheme] }}>
              <Palette size={16} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Settings</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          
          {/* Color Theme */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Palette size={20} style={{ color: settings.colors[settings.colorTheme] }} />
              <h4 className="text-lg font-semibold text-white">Color Theme</h4>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {colorOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => handleColorChange(option.key)}
                  className={`aspect-square rounded-lg border-2 transition-all duration-200 relative group ${
                    settings.colorTheme === option.key
                      ? 'border-white scale-110'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  style={{ backgroundColor: option.color }}
                  title={option.name}
                >
                  {settings.colorTheme === option.key && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Background Style */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles size={20} style={{ color: settings.colors[settings.colorTheme] }} />
              <h4 className="text-lg font-semibold text-white">Background Style</h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {backgroundOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => handleBackgroundChange(option.key)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                    settings.backgroundStyle === option.key
                      ? 'border-white bg-gray-700'
                      : 'border-gray-600 bg-gray-900 hover:border-gray-500'
                  }`}
                >
                  <div className="text-2xl mb-2">{option.icon}</div>
                  <div className="text-sm text-gray-300">{option.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Layout Style */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Layout size={20} style={{ color: settings.colors[settings.colorTheme] }} />
              <h4 className="text-lg font-semibold text-white">Layout Style</h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {layoutOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => handleLayoutChange(option.key)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                    settings.layoutStyle === option.key
                      ? 'border-white bg-gray-700'
                      : 'border-gray-600 bg-gray-900 hover:border-gray-500'
                  }`}
                >
                  <div className="text-2xl mb-2">{option.icon}</div>
                  <div className="text-sm text-gray-300">{option.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Actions</h4>
            
            <div className="space-y-3">
              <button
                onClick={resetSettings}
                className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Monitor size={16} />
                <span>Reset to Default</span>
              </button>
              
              <button
                onClick={() => {
                  const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
                  const randomBg = backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)];
                  setSettings(prev => ({
                    ...prev,
                    colorTheme: randomColor.key,
                    backgroundStyle: randomBg.key
                  }));
                }}
                className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Sparkles size={16} />
                <span>Random Style</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;