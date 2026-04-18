import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, ArrowUpRight, Zap, Shield, Cpu } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Mobile App', 'Web App', 'Dashboard'];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 px-4 bg-gray-50/30 dark:bg-gray-900/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-bold tracking-[0.3em] text-xs mb-6 uppercase">Selected Portfolio</h2>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-8">
              CASE <br /> <span className="text-gradient">STUDIES</span>.
            </h3>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Moving beyond "projects" to real-world industrial impact. Each entry explores a unique challenge, the architected solution, and measurable outcomes.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 p-2 glass rounded-[2rem]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-[1.5rem] text-sm font-black transition-all uppercase tracking-widest ${
                  filter === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-40">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${
                  idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Section */}
                <div className="w-full lg:w-[55%] relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative glass rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-4">
                        <button className="px-6 py-3 bg-white text-black font-black text-xs uppercase tracking-widest flex items-center gap-2 rounded-xl">
                          Live Demo <ExternalLink size={14} />
                        </button>
                        <button className="p-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white/40 transition-colors">
                          <Github size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-[45%] space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-[2px] bg-blue-500"></span>
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-500">{project.subtitle}</span>
                  </div>
                  
                  <h4 className="text-4xl md:text-6xl font-black tracking-tight leading-none group-hover:text-gradient transition-all">
                    {project.title.toUpperCase()}
                  </h4>

                  <p className="text-lg text-gray-500 font-medium">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-gray-200 dark:border-white/5">
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3 flex items-center gap-2">
                        <Shield size={12} className="text-red-400" /> The Problem
                      </h5>
                      <p className="text-sm font-bold leading-relaxed dark:text-gray-300 italic">
                        "{project.problem}"
                      </p>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3 flex items-center gap-2">
                        <Zap size={12} className="text-yellow-400" /> Outcomes
                      </h5>
                      <ul className="space-y-2">
                        {project.impact.map((impact, i) => (
                          <li key={i} className="text-xs font-black flex items-start gap-2 text-blue-500">
                             <span className="mt-1">●</span> {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
                      <Cpu size={12} /> Tech Architecture
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-gradient group"
                  >
                    View Case Study <ArrowUpRight size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
