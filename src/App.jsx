import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ScrollToTop component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Smooth scroll handler for anchor links
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

function App() {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or user preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  // Update body class and save preference when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrollToSection={scrollToSection} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero darkMode={darkMode} />
                  <About darkMode={darkMode} />
                  <Skills darkMode={darkMode} />
                  <Projects darkMode={darkMode} />
                  <Experience darkMode={darkMode} />
                  <Testimonials darkMode={darkMode} />
                  <Contact darkMode={darkMode} />
                </>
              } 
            />
            
            {/* Can add additional routes for individual project pages or other sections */}
            <Route 
              path="/resume" 
              element={
                <div className={`min-h-screen flex items-center justify-center py-20 ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                }`}>
                  <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">Resume</h1>
                    <p className="mb-8">View or download my full resume below.</p>
                    <div className="flex justify-center">
                      <a 
                        href="/resume.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                          darkMode
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      >
                        View Resume
                      </a>
                      <Link 
                        to="/"
                        className={`ml-4 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                          darkMode
                            ? 'bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20'
                            : 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </div>
              } 
            />
            
            {/* 404 Page */}
            <Route 
              path="*" 
              element={
                <div className={`min-h-screen flex items-center justify-center ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                }`}>
                  <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4">404</h1>
                    <p className="text-xl mb-8">Page not found</p>
                    <Link 
                      to="/"
                      className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                        darkMode
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      Return Home
                    </Link>
                  </div>
                </div>
              } 
            />
          </Routes>
        </AnimatePresence>
        
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;