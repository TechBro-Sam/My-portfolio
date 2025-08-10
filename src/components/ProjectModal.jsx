import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';

const ProjectModal = ({ project, darkMode, closeModal }) => {
  // Prevent clicks inside the modal from closing it
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={handleModalClick}
      >
        <button
          className={`absolute top-4 right-4 p-2 rounded-full ${
            darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={closeModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="h-64 md:h-80 bg-gray-300 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
            <span className="text-lg">Project Screenshot</span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className={`px-3 py-1 text-sm rounded-full ${
                  darkMode
                    ? 'bg-gray-700 text-blue-400'
                    : 'bg-blue-50 text-blue-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className={`prose max-w-none mb-8 ${
            darkMode ? 'prose-invert' : ''
          }`}>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              {project.description}
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className={`list-disc pl-6 space-y-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Technical Challenges</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              {project.challenges}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  darkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Live Demo
              </a>
            )}
            
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  darkMode
                    ? 'bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20'
                    : 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;