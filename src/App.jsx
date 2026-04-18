import React, { useState, useEffect } from 'react'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Systems from './sections/Systems'
import Contact from './sections/Contact'
import Footer from './layout/Footer'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'tech', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-black bg-white dark:text-gray-100 text-gray-900 overflow-x-hidden">
      <div 
        className="custom-cursor hidden lg:block"
        style={{ 
          transform: `translate(${mousePos.x - 10}px, ${mousePos.y - 10}px)`,
        }}
      ></div>
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Systems />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
