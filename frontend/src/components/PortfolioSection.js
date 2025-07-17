import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const PortfolioSection = ({ projects, currentColor }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = ['All', 'Web', 'Mobile', 'Design', 'Full Stack'];

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const ProjectCard = ({ project, currentColor }) => (
    <div className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-800">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <div className="flex space-x-2">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors duration-200"
                style={{ backgroundColor: currentColor }}
              >
                <ExternalLink size={16} className="text-white" />
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200"
              >
                <Github size={16} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-white text-xs font-medium rounded-full" style={{ backgroundColor: currentColor }}>
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{project.date}</span>
          <div className="flex space-x-2">
            <span style={{ color: currentColor }} className="text-sm">View Project</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          {/* Introduce Text */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-sm">💼</span>
            </div>
            <span className="text-gray-400 text-sm uppercase tracking-wider">MY PORTFOLIO</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My creative <span style={{ color: currentColor }}>work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A showcase of my best projects and achievements
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-gray-900 p-2 rounded-xl border border-gray-800">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                style={{
                  backgroundColor: activeFilter === category ? currentColor : 'transparent'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} currentColor={currentColor} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: currentColor }}>50+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: currentColor }}>30+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: currentColor }}>3+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: currentColor }}>15+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;