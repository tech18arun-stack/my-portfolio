import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ChevronRight, Terminal, Globe, Cpu } from 'lucide-react';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Building scalable systems...",
    "Designing high-performance apps...",
    "Solving real-world problems...",
    "Architecting cloud solutions..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden bg-grid">
      {/* Mesh Background */}
      <div className="absolute inset-0 opacity-40 dark:opacity-60 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 blur-[150px] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Senior Roles
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 leading-[0.9]">
            <span className="block text-gray-400 opacity-50 text-2xl md:text-3xl font-bold tracking-[0.2em] mb-4">I AM ARUN</span>
            <span className="block text-gradient">PRODUCT</span>
            <span className="block">ENGINEER</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative h-12 mb-10 overflow-hidden w-full flex justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-xl md:text-3xl font-mono text-gray-500 dark:text-gray-400"
            >
              <span className="text-blue-500 mr-2">{'>'}</span> {texts[textIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {portfolioData.tagline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] group"
          >
            Launch Portfolio <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <div className="flex gap-4 p-2 glass rounded-2xl">
            <div className="p-3 bg-white/50 dark:bg-black/20 rounded-xl hover:text-blue-500 transition-colors cursor-help group relative">
              <Globe size={24} />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Global Reach</span>
            </div>
            <div className="p-3 bg-white/50 dark:bg-black/20 rounded-xl hover:text-blue-500 transition-colors cursor-help group relative">
              <Cpu size={24} />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">High Performance</span>
            </div>
            <div className="p-3 bg-white/50 dark:bg-black/20 rounded-xl hover:text-blue-500 transition-colors cursor-help group relative">
              <Terminal size={24} />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Clean Code</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Badges */}
        <div className="mt-24 flex flex-wrap justify-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-700">
           {["Flutter", "React", "Node.js", "System Design"].map((item, i) => (
             <span key={i} className="text-sm font-black uppercase tracking-[0.3em] border-b border-gray-500 pb-1">{item}</span>
           ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1 h-12 md:h-20 bg-gradient-to-b from-blue-500 to-transparent"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
