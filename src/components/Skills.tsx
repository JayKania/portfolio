import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import SectionHeading from './ui/SectionHeading';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Material UI', category: 'frontend' },
  { name: 'Styled Components', category: 'frontend' },
  { name: 'JavaScript (ES6+)', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React.js', category: 'frontend' },
  { name: 'GatsbyJS', category: 'frontend' },
  { name: 'SASS/SCSS', category: 'frontend' },

  // Backend
  { name: 'Go', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'RESTful APIs', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'Federated GraphQL', category: 'backend' },
  { name: 'Apollo GraphQL', category: 'backend' },
  { name: 'AWS', category: 'backend' },
  { name: 'Docker', category: 'backend' },
  { name: 'Kubernetes', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'Redis', category: 'backend' },

  // Tools & Others
  { name: 'Git & GitHub', category: 'tools' },
  { name: 'Jest & Testing Library', category: 'tools' },
  { name: 'CI/CD', category: 'tools' },
];

const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & Others' }
  ];

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className={`py-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills" subtitle="My Expertise" />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? isDarkMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500 text-white'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Tag-style Skill Chips */}
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          {filteredSkills.map((skill, index) => (
            <span
              key={index}
              className={`px-4 py-2 text-sm font-medium rounded-full border ${
                isDarkMode
                  ? 'border-gray-600 bg-gray-800 text-gray-200'
                  : 'border-gray-300 bg-white text-gray-800'
              }`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
