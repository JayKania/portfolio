import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}>
      <div className="container mx-auto px-4">
        <div className="pt-16 pb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-8 md:mb-0">
              <div onClick={scrollToTop} className="cursor-pointer">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="text-blue-500">Jay</span>Kania
                </h2>
              </div>
              <p className={`max-w-md ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Creating functional, and accessible web experiences that make a difference.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li>
                    <a 
                      href="#home" 
                      className="hover:text-blue-500 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#about" 
                      className="hover:text-blue-500 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#experience" 
                      className="hover:text-blue-500 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Experience
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">More</h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li>
                    <a 
                      href="#skills" 
                      className="hover:text-blue-500 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#projects" 
                      className="hover:text-blue-500 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#contact" 
                      className="hover:text-blue-500 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li className="flex items-center gap-2">
                    <Mail size={16} className="flex-shrink-0" />
                    <a 
                      href="mailto:contact@example.com"
                      className="hover:text-blue-500 transition-colors"
                    >
                      jaykania123@gmail.com
                    </a>
                  </li>
                  <li>Bengaluru, Karnataka</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`py-6 flex flex-col md:flex-row justify-between items-center border-t ${
          isDarkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {currentYear} Jay Kania. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/JayKania" 
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/jay-kania/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;