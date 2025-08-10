import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animation';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';

const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'ui', label: 'UI/UX' },
  ];
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="projects"
      className={`py-20 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={fadeIn('up', 0.3)}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className={`h-1 w-20 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mb-6`}></div>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A selection of my recent work showcasing my skills in web and mobile development.
            Each project represents unique challenges and innovative solutions.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 0.4)}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? darkMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-600 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', 0.1 * (index + 1))}
              className={`group rounded-lg overflow-hidden cursor-pointer ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
              } transition-all duration-300 shadow-md hover:shadow-lg`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="h-48 overflow-hidden bg-gray-300">
                <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-300">
                  <span className="text-lg">Project Image</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode
                          ? 'bg-gray-800 text-gray-300'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.shortDescription}
                </p>
                
                <div className={`flex justify-between items-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  <span className="text-sm font-medium">View Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {modalOpen && selectedProject && (
          <ProjectModal
            project={selectedProject}
            darkMode={darkMode}
            closeModal={closeModal}
          />
        )}
      </motion.div>
    </section>
  );
};

export default Projects;