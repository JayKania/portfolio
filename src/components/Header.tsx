import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? `${isDarkMode ? 'bg-gray-900/95 shadow-lg' : 'bg-white/95 shadow-md'}`
        : `${isDarkMode ? 'bg-transparent' : 'bg-transparent'}`
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#home" 
            className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <span className="text-blue-500">Jay</span>Kania
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode 
                ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors mr-2 ${
              isDarkMode 
                ? 'bg-gray-800 text-yellow-300' 
                : 'bg-gray-100 text-gray-700'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute w-full transition-all ${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`text-lg py-2 ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;