import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animation';
import { testimonials } from '../data/testimonials';

const Testimonials = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    
    resetTimeout();
    
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => {
      resetTimeout();
    };
  }, [currentIndex]);
  
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
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
            Client Testimonials
          </h2>
          <div className={`h-1 w-20 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mb-6`}></div>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            What colleagues and clients say about working with me.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn('up', 0.5)}
            className="relative overflow-hidden"
          >
            {/* Testimonial cards */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className={`p-8 md:p-10 rounded-lg shadow-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <div className="mb-6 flex justify-center">
                      <svg className={`w-12 h-12 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                    
                    <blockquote className={`text-lg md:text-xl italic text-center mb-8 ${
                      darkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4 flex items-center justify-center">
                        <span className={`text-lg font-bold ${darkMode ? 'text-gray-800' : 'text-gray-800'}`}>{testimonial.name.charAt(0)}</span>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:ml-0 w-10 h-10 rounded-full flex items-center justify-center ${
                darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              } shadow-md transition-all z-10`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 md:mr-0 w-10 h-10 rounded-full flex items-center justify-center ${
                darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              } shadow-md transition-all z-10`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
          
          {/* Dots indicator */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            className="flex justify-center mt-8 space-x-2"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? darkMode
                      ? 'bg-blue-500'
                      : 'bg-blue-600'
                    : darkMode
                      ? 'bg-gray-600 hover:bg-gray-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                }`}
              ></button>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;