import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animation';
import { skills } from '../data/skills';

const Skills = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'tools', name: 'Tools' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section 
      id="skills" 
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
            Technical Skills
          </h2>
          <div className={`h-1 w-20 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mb-6`}></div>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My technical toolkit includes a diverse range of languages, frameworks, and tools
            that enable me to build robust and scalable applications.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 0.4)}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? darkMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-600 text-white'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn('up', 0.1 * index)}
              className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 shadow-md' 
                  : 'bg-white hover:shadow-lg'
              }`}
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${
                darkMode ? 'bg-gray-700' : 'bg-blue-50'
              }`}>
                <span className={`text-2xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {skill.icon}
                </span>
              </div>
              <h3 className="font-bold text-center">{skill.name}</h3>
              
              <div className="w-full mt-4 space-y-2">
                <div className={`h-2 w-full rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div 
                    className={`h-2 rounded-full bg-blue-500`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-xs text-center">{skill.level}%</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.7)}
          className={`mt-16 p-8 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h3 className="text-xl font-bold mb-6 text-center">Technology & Tools Proficiency</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Frontend Development</span>
                <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Expert</span>
              </div>
              <div className={`h-2 w-full rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div className="h-2 rounded-full bg-blue-500" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Mobile Development</span>
                <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Advanced</span>
              </div>
              <div className={`h-2 w-full rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div className="h-2 rounded-full bg-blue-500" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">UI/UX Implementation</span>
                <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Advanced</span>
              </div>
              <div className={`h-2 w-full rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div className="h-2 rounded-full bg-blue-500" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Backend Integration</span>
                <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Intermediate</span>
              </div>
              <div className={`h-2 w-full rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div className="h-2 rounded-full bg-blue-500" style={{ width: '35%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">DevOps & Deployment</span>
                <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Intermediate</span>
              </div>
              <div className={`h-2 w-full rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div className="h-2 rounded-full bg-blue-500" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;