import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-2 mb-2">
        {title}
        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-12 rounded-full ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-500'
        }`}></span>
      </h2>
      <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;