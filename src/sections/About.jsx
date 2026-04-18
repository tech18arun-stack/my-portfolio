import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Target, Zap, Layout, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
          {portfolioData.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-[2rem] text-center border-b-4 border-b-blue-500"
            >
              <div className="text-4xl md:text-5xl font-black mb-2 text-gradient">{metric.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-500 font-bold tracking-[0.3em] text-xs mb-6 uppercase">About My Mission</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none italic">
              ENGINEERING <br /> <span className="text-gradient">OUTCOMES</span>, <br /> NOT JUST CODE.
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
              {portfolioData.about.positioning}
            </p>

            <div className="p-6 bg-blue-600/5 border border-blue-600/10 rounded-[2rem] flex items-center gap-6 mb-12">
              <div className="relative flex-shrink-0">
                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                   {portfolioData.name[0]}
                 </div>
                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-black animate-pulse"></div>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Current Focus</p>
                <p className="font-bold text-lg dark:text-white text-black">{portfolioData.about.currentlyAt}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-black mb-8 px-4 tracking-tight">MY PRODUCT PROCESS</h4>
            {portfolioData.about.process.map((item, idx) => (
              <div key={idx} className="group flex items-start gap-6 p-6 rounded-[2rem] hover:bg-white dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-white/10">
                <div className="text-4xl font-black text-gray-200 dark:text-gray-800 group-hover:text-blue-500 transition-colors">
                  {item.step}
                </div>
                <div>
                  <h5 className="font-black text-xl mb-2 flex items-center gap-2">
                    {item.title} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </h5>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
