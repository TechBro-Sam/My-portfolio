import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animation';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <div className={`h-1 w-20 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mb-6`}></div>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind or want to discuss a potential collaboration? 
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn('right', 0.5)}
            className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${
                  darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a 
                    href="mailto:hello@example.com"
                    className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${
                  darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <a 
                    href="tel:+1234567890"
                    className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${
                  darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-600 hover:text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://linkedin.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-600 hover:text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://twitter.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-600 hover:text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn('left', 0.5)}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="subject"
                    className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
                    }`}
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="message"
                    className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
                    }`}
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      darkMode
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    } ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : null}
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                
                {submitStatus.submitted && (
                  <div className={`mt-4 p-3 rounded-lg ${
                    submitStatus.success
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;