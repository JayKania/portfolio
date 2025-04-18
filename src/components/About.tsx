import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SectionHeading from './ui/SectionHeading';
import resume from '../../assets/pdf/Jay_Kania.pdf'

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section 
      id="about" 
      className={`py-24 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="My Background" />
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
          <p className={`mb-6 text-lg leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            A Passionate Software Developer with expertise in building scalable web applications and robust backend systems.
          </p>
          <p className={`mb-8 text-lg leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I have a strong focus on building robust and scalable backend systems and leveraging cloud technologies. My approach combines technical expertise with an understanding of user needs to deliver functionally sound and efficient solutions. I enjoy tackling complex backend challenges and continuously learning new cloud platforms and server-side technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`flex items-start gap-3 p-4 rounded-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'
            }`}>
              <div className={`p-3 rounded-full ${
                isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-500'
              }`}>
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Experience</h4>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>2+ Years</p>
              </div>
            </div>
            
            <div className={`flex items-start gap-3 p-4 rounded-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'
            }`}>
              <div className={`p-3 rounded-full ${
                isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-500'
              }`}>
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Bengaluru, Karnataka</p>
              </div>
            </div>
            
            <div className={`flex items-start gap-3 p-4 rounded-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'
            }`}>
              <div className={`p-3 rounded-full ${
                isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-500'
              }`}>
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Education</h4>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>M.Tech Computer Science</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a 
              href={resume} 
              className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
                isDarkMode 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;