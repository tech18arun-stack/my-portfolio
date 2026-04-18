import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest text-sm mb-4 uppercase">Career</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">Professional <span className="text-gradient">Journey</span></h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Connector Point */}
                <div className="absolute left-0 md:left-1/2 top-10 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-black z-10 hidden md:block"></div>

                <div className="w-full md:w-1/2">
                  <div className="p-8 glass rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-600/10 rounded-xl text-blue-600">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold group-hover:text-blue-500 transition-colors">{exp.role}</h4>
                        <p className="text-blue-500 font-semibold text-sm">{exp.company}</p>
                      </div>
                      <span className="ml-auto text-xs font-bold text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                        <CheckCircle2 size={14} className="text-green-500" /> Full Stack Dev
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                        <CheckCircle2 size={14} className="text-green-500" /> API Integration
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                        <CheckCircle2 size={14} className="text-green-500" /> Scalable Systems
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:block hidden"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 glass rounded-[3rem] text-center border-2 border-dashed border-gray-200 dark:border-gray-800"
          >
            <h4 className="text-2xl font-bold mb-6">Work Approach & Skills</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {portfolioData.skills.map((skill, i) => (
                <span key={i} className="px-5 py-2 bg-blue-600/5 text-blue-600 dark:text-blue-400 rounded-2xl text-sm font-bold border border-blue-600/10">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
