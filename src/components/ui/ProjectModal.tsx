import React, { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from '../Projects';
import { useTheme } from '../../contexts/ThemeContext';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl ${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        } shadow-2xl`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full z-10 ${
            isDarkMode 
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 w-full">
              <div className="flex flex-wrap gap-2 mb-2">
                {project.category.map((cat, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-blue-500/80 text-white text-xs rounded"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className={`px-3 py-1 text-sm rounded-full ${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-300' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <h3 className={`text-xl font-bold mb-3 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About this project
          </h3>
          
          <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {project.details}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                isDarkMode 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              <ExternalLink size={16} />
              <span>Live Preview</span>
            </a>
            
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                isDarkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;