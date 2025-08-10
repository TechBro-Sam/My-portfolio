import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animation';

const About = ({ darkMode }) => {
  return (
    <section 
      id="about" 
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
            About Me
          </h2>
          <div className={`h-1 w-20 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mb-6`}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn('right', 0.5)}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Frontend & Mobile</span> Developer
            </h3>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              With 6+ years of experience building exceptional digital experiences, I specialize in creating 
              user-friendly, high-performance web and mobile applications. My approach combines clean code
              practices, innovative design thinking, and a deep understanding of modern development frameworks.
            </p>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I thrive in collaborative environments where I can leverage my technical expertise alongside 
              designers and stakeholders to transform ideas into elegant, functional products that exceed expectations.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600'
              }`}>
                React
              </div>
    
              <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600'
              }`}>
                Html & CSS
              </div>
              <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600'
              }`}>
                React Native
              </div>
              <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600'
              }`}>
                JavaScript
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Professional Experience</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>6+ years working with industry leaders</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Adaptable Developer</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Familiar with various tech stacks & frameworks</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Communication Skills</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Strong team collaborator & client communicator</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            className="relative h-full min-h-[400px] flex items-center justify-center"
          >
            <div className="w-full h-full max-w-md bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
              <span className="text-lg ">WHO IS DEVSAMMY ?</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;