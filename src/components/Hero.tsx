import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedText from './ui/AnimatedText';
import profile_img from '../../assets/images/profile_photo.jpeg';

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center relative ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className={`absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 rounded-full w-96 h-96 blur-3xl opacity-20 ${
          isDarkMode ? 'bg-blue-600' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 rounded-full w-96 h-96 blur-3xl opacity-20 ${
          isDarkMode ? 'bg-purple-600' : 'bg-purple-400'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-12 md:mb-0">
            <div className="space-y-4">
              <span className={`inline-block text-sm font-medium py-1 px-3 rounded-full ${
                isDarkMode ? 'bg-blue-950 text-blue-400' : 'bg-blue-50 text-blue-600'
              }`}>
                <AnimatedText text="Software Developer" />
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <AnimatedText text="I'm Jay Kania" delay={0.1} />
                <span className="block mt-2 text-blue-500">
                  <AnimatedText text="Building user centric web experiences" delay={0.2} />
                </span>
              </h1>
              
              <p className={`text-lg md:text-xl max-w-2xl ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <AnimatedText 
                  text="A Passionate Software Developer with expertise in building scalable web applications and robust backend systems."
                  delay={0.3}
                />
              </p>
              
              <div className="pt-6 space-x-4 flex items-center">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                    isDarkMode 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  Contact Me
                </a>
                
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/JayKania" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
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
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:jaykania123@gmail.com" 
                    className={`p-2 rounded-full transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                    aria-label="Email contact"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/5 md:pl-12">
            <div className={`relative w-64 h-64 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 ${
              isDarkMode ? 'border-gray-800' : 'border-gray-100'
            }`}>
              <img 
                src={profile_img}
                alt="Jay Kania" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout} 
            className={`p-2 rounded-full ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;