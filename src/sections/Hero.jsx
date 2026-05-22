import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ChevronRight, Terminal, Globe, Cpu } from 'lucide-react';
import ThreeHeroShape from '../components/ThreeHeroShape';

const texts = [
  "Building scalable systems...",
  "Designing high-performance apps...",
  "Solving real-world problems...",
  "Architecting cloud solutions..."
];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-grid">
      {/* Mesh Background */}
      <div className="absolute inset-0 opacity-40 dark:opacity-60 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 blur-[150px] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 items-center z-10 relative">
        {/* Left Column: Hero Information */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Senior Roles
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 leading-[0.9]">
              <span className="block text-gray-400 opacity-55 text-xl md:text-2xl font-bold tracking-[0.25em] mb-3">I AM ARUN</span>
              <span className="block text-gradient">PRODUCT</span>
              <span className="block">ENGINEER</span>
            </h1>
          </Motion.div>

          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-10 mb-8 overflow-hidden w-full flex justify-start"
          >
            <AnimatePresence mode="wait">
              <Motion.p
                key={textIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-lg md:text-2xl font-mono text-gray-500 dark:text-gray-400"
              >
                <span className="text-blue-500 mr-2">{'>'}</span> {texts[textIndex]}
              </Motion.p>
            </AnimatePresence>
          </Motion.div>

          <Motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-10 leading-relaxed font-medium"
          >
            {portfolioData.tagline}
          </Motion.p>

          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 items-center mb-16"
          >
            <Motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] group cursor-pointer"
            >
              Launch Portfolio <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Motion.a>
            
            <div className="flex gap-3 p-1.5 glass rounded-2xl">
              <div className="p-2.5 bg-white/50 dark:bg-black/20 rounded-xl hover:text-blue-500 transition-colors cursor-help group relative">
                <Globe size={20} />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Global Reach</span>
              </div>
              <div className="p-2.5 bg-white/50 dark:bg-black/20 rounded-xl hover:text-blue-500 transition-colors cursor-help group relative">
                <Cpu size={20} />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">High Performance</span>
              </div>
              <div className="p-2.5 bg-white/50 dark:bg-black/20 rounded-xl hover:text-blue-500 transition-colors cursor-help group relative">
                <Terminal size={20} />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Clean Code</span>
              </div>
            </div>
          </Motion.div>

          {/* Floating Badges */}
          <div className="flex flex-wrap gap-4 opacity-50 hover:opacity-100 transition-opacity duration-700">
             {["Flutter", "React", "Node.js", "System Design"].map((item, i) => (
               <span key={i} className="text-xs font-black uppercase tracking-[0.25em] border-b border-gray-400 dark:border-gray-600 pb-1">{item}</span>
             ))}
          </div>
        </div>

        {/* Right Column: 3D Interactive Canvas */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 w-full flex items-center justify-center"
        >
          <ThreeHeroShape />
        </Motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 z-10 pointer-events-none">
        <Motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-0.5 h-12 md:h-16 bg-gradient-to-b from-blue-500 to-transparent"
        ></Motion.div>
      </div>
    </section>
  );
};

export default Hero;
