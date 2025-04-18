import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SectionHeading from './ui/SectionHeading';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Developer Engineer I",
    company: "Poppulo",
    location: "Bengaluru, Karnataka",
    duration: "May 2024 - Present",
    description: [
      "Engineered a self-service YubiKey onboarding platform using JSP for the front-end and Spring Boot for the backend, significantly decreasing IT dependency on developers and accelerating the onboarding process by 80%.",
      "Implemented a Redis ElastiCache-backed caching layer in Apollo Router via AWS CDK, reducing query response times for some of the cacheable requests from ~500ms to ~10ms.",
      "Integrated in-house GraphQL schema linting rules into the development pipeline, proactively identifying and preventing schema issues, resulting in more robust and reliable APIs.",
      "Migrated sensitive application secrets from environment variables to Kubernetes Secrets, significantly improving security posture and reducing the risk of unauthorized access."
    ]
  },
  {
    id: 2,
    title: "Software Developer Co-op",
    company: "Magnet Forensics",
    location: "Waterloo, Ontario",
    duration: "Sept 2023 - Dec 2023",
    description: [
      "Designed and implemented reusable UI components in React and Typescript, resulting in a 15% reduction in development time, streamlining development and ensuring a consistent user interface across multiple projects.",
      "Utilized Storybook extensively to build and showcase various frontend components ensuring cohesive and user-friendly interfaces and improving development efficiency.",
      "Implemented the Test-Driven Development (TDD) principle using React Testing Library, Jest, and Cypress, achieving over 90% in test coverage and code stability.",
      "Managed CI/CD pipelines through Azure DevOps, Jenkins, and Amazon EC2, ensuring efficient deployment processes and reduced deployment time."
    ]
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Cognizant",
    location: "Pune, Maharashtra",
    duration: "Feb 2021 - June 2022",
    description: [
      "Implemented REST APIs using Spring Boot, enhancing the application's backend functionality, while gaining expertise in managing CI/CD pipelines utilizing BitBucket, Bamboo, and UrbanCode Deploy.",
      "Conducted Unit and Integration tests for all new functionality or enhancements using Junit and SonarQube which resulted in test coverage of 95%, leading to a significant reduction of post-release bug reports.",
      "Expanded application capabilities through the development of features using ReactJS, Redux, Bootstrap, and SASS/SCSS and performed end-to-end testing using Cypress, contributing to ~15% improvement in the user interface. ",
      "Deployed microservices on AWS, building a CI/CD pipeline using AWS CodeBuild, CodeCommit, CodePipeline, ECS & ECR, resulting in a 5% increase in concurrent users without degradation in system performance."
    ]
  }
];

const Experience: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section 
      id="experience" 
      className={`py-24 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Experience" subtitle="Work History" />
        
        <div className="mt-16 relative">
          <div className={`absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}></div>
          
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10 ${
                  isDarkMode ? 'bg-blue-500' : 'bg-blue-500'
                }`}></div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 pb-8 md:pb-0">
                    <div className={`h-full ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                      <div className={`p-6 rounded-lg h-full ${
                        isDarkMode ? 'bg-gray-900 shadow-lg shadow-black/20' : 'bg-gray-50 shadow-lg shadow-gray-200'
                      }`}>
                        <div className="flex items-center mb-4">
                          <div className={`p-2 rounded-md mr-3 ${
                            isDarkMode ? 'bg-blue-900/40 text-blue-400' : 'bg-blue-100 text-blue-600'
                          }`}>
                            <Briefcase size={20} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center mb-4">
                          <div className={`p-2 rounded-md mr-3 ${
                            isDarkMode ? 'bg-blue-900/40 text-blue-400' : 'bg-blue-100 text-blue-600'
                          }`}>
                            <Calendar size={20} />
                          </div>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {exp.duration} | {exp.location}
                          </p>
                        </div>
                        
                        <ul className="space-y-2 mt-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0 ${
                                isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                              }`}></span>
                              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;