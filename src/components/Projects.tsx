import React, { useState } from "react";
import { ExternalLink, Github, Maximize } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import SectionHeading from "./ui/SectionHeading";
import ProjectModal from "./ui/ProjectModal";
import crypto_tracker from "../../assets/images/crypto_tracker.png";
import ntflix_clone from "../../assets/images/netflix_clone.png";
import restaurant_pos from "../../assets/images/restaurant_pos.png";
import cdx_image from "../../assets/images/cdx.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CDX",
    description: "An interactive cd",
    image: cdx_image,
    technologies: ["Go", "CLI", "Terminal"],
    githubUrl: "https://github.com/JayKania/cdx",
    liveUrl: "https://github.com/JayKania/cdx",
    details:
      "Built a cross-platform CLI file explorer with fuzzy search, real-time navigation using raw terminal input (no dependencies), and shell/CD integration. Shipped as downloadable binaries via GitHub Releases.",
  },
  {
    id: 2,
    title: "Restaurant POS",
    description: "A point-of-sale system for restaurant management",
    image: restaurant_pos,
    technologies: [
      "nodejs",
      "express",
      "aws-s3",
      "dynamodb",
      "cloudfront",
      "react",
      "cloudformation",
      "ec2",
      "styled-components",
      "s3",
      "cloudfront",
    ],
    githubUrl: "https://github.com/JayKania/EatStreet",
    liveUrl: "https://github.com/JayKania/EatStreet",
    details:
      "This restaurant POS system streamlines the ordering and payment process for restaurants. It includes features like order tracking, and payment processing. Objective was to learn more about cloud and various deployment methods to the cloud. The application is designed to be user-friendly and efficient, allowing restaurant staff to manage orders quickly. Built with React and Node.js.",
  },
  {
    id: 3,
    title: "Crypto Tracker",
    description:
      "A web application for tracking cryptocurrency prices and trends",
    image: crypto_tracker,
    technologies: [
      "typescript",
      "styled-components",
      "reactjs",
      "chartjs",
      "react-chartjs-2",
      "coingecko-api"
    ],
    liveUrl: "https://coin-tracker-jk.vercel.app/",
    githubUrl: "https://github.com/JayKania/crypto-tracker",
    details:
      "This cryptocurrency tracker provides users with real-time price updates, historical data, and market trends for various cryptocurrencies. Users can create watchlists and view detailed charts. The application is built using React and integrates with various cryptocurrency APIs to fetch live data.",
  },
  {
    id: 4,
    title: "Ntflix Clone",
    description: "A netflix clone with a modern UI and smooth animations",
    image: ntflix_clone,
    technologies: [
      "javascript",
      "react-router",
      "styled-components",
      "reactjs",
      "tmdb-api",
      "firebase-authentication",
      "firestore",
      "swiper-js",
      "netflix-clone",
      "zustand",
    ],
    liveUrl: "https://netflix-clone-jk.vercel.app/",
    githubUrl: "https://github.com/JayKania/netflix-clone",
    details:
      "This Netflix clone replicates the core features of the popular streaming service, allowing users to browse movies and TV shows. It includes a modern user interface, smooth animations, and a responsive design. The application was built using React and CSS animations, with a focus on performance and user experience.",
  },
];

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      className={`py-24 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" subtitle="My Recent Work" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-xl overflow-hidden transition-all ${
                isDarkMode
                  ? "bg-gray-900 hover:shadow-xl hover:shadow-blue-900/20"
                  : "bg-gray-50 hover:shadow-xl hover:shadow-gray-200"
              }`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end gap-2 mb-2">
                      <button
                        onClick={() => openProjectModal(project)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        aria-label="View project details"
                      >
                        <Maximize size={16} />
                      </button>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        aria-label="Visit live project"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p
                  className={`mb-4 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs rounded-full ${
                        isDarkMode
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default Projects;
