import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const TechStack = () => {
  return (
    <section id="tech" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-blue-500 font-bold tracking-[0.3em] text-xs mb-6 uppercase">Technical Context</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              CHOOSING THE <br /> <span className="text-gradient">RIGHT TOOLS</span>.
            </h3>
            <p className="text-lg text-gray-500 font-medium">
              I don't just use technologies; I architect solutions using the tools best suited for performance, scalability, and long-term maintainability.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {portfolioData.techStack.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-[0.4em] text-gray-400 px-4">
                {category.category}
              </h4>
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 glass rounded-[2rem] group hover:border-blue-500/50 transition-all cursor-default"
                  >
                    <div className="flex justify-between items-start mb-2">
                       <h5 className="font-black text-xl group-hover:text-blue-500 transition-colors">{item.name}</h5>
                       <div className="flex gap-1">
                          {[1,2,3,4,5].map(dot => (
                            <div key={dot} className={`w-1 h-3 rounded-full ${dot <= 4 ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-800'}`}></div>
                          ))}
                       </div>
                    </div>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 leading-relaxed uppercase tracking-wider">
                      {item.context}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
