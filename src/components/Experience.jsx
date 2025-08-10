import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animation';
import { experience } from '../data/experience';

const Experience = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`py-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
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
            Work Experience
          </h2>
          <div className={`h-1 w-20 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mb-6`}></div>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My professional journey working with leading companies and startups
            in the tech industry.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline center line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 0.3 + (index * 0.1))}
                className="relative"
              >
                {/* Date bubble in the middle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold ${
                    darkMode ? 'bg-gray-800 text-blue-400 border border-blue-500' : 'bg-white text-blue-600 border-2 border-blue-500'
                  } z-10`}>
                    {exp.year}
                  </div>
                </div>
                
                {/* Content box */}
                <div className={`relative w-5/12 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}>
                  <div className={`p-6 rounded-lg shadow-md ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <div className="flex items-center mb-2">
                      <div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden mr-4">
                        <span className={`text-sm ${darkMode ? 'text-gray-800' : 'text-gray-800'}`}>{exp.company.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{exp.role}</h3>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.company}</p>
                      </div>
                    </div>
                    
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.duration}</p>
                    
                    <ul className={`list-disc pl-5 space-y-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs rounded-full ${
                            darkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className={`p-8 rounded-lg text-center ${
            darkMode ? 'bg-gray-800' : 'bg-white shadow'
          }`}>
            <h3 className="text-xl font-bold mb-4">Education & Certifications</h3>
            
            <div className="mb-6 pb-6 border-b border-gray-300">
              <h4 className="font-bold text-lg mb-1">Bachelor of Science in Computer Science</h4>
              <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>University of Technology</p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>2012 - 2016</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">React Native Developer Certification</span>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>2020</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Advanced Frontend Web Development</span>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>2019</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">UI/UX Design Fundamentals</span>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>2018</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;