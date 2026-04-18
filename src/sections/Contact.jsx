import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, ArrowRight, Terminal, Instagram, Share2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const whatsappUrl = `https://wa.me/${portfolioData.socials.whatsapp}`;
  
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
           <h2 className="text-blue-500 font-bold tracking-[0.3em] text-xs mb-6 uppercase italic">Quick Connect Node</h2>
           <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-center">
             LET'S START THE <br /> <span className="text-gradient">CONVERSATION.</span>
           </h3>
           <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
             Skip the forms. Reach out directly via WhatsApp, Arattai, or Email for immediate technical consulting.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* WhatsApp & Arattai Card */}
          <motion.a
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative p-10 glass rounded-[3.5rem] border-2 border-transparent hover:border-green-500/30 transition-all overflow-hidden flex flex-col items-center text-center space-y-6 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full translate-x-12 -translate-y-12"></div>
            <div className="p-6 bg-green-500/10 rounded-3xl text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
              <MessageCircle size={40} />
            </div>
            <div>
              <h4 className="text-xl font-black uppercase tracking-tight mb-2">WhatsApp & Arattai</h4>
              <p className="text-xs text-gray-500 font-bold italic tracking-wide">Encrypted Direct Chat</p>
            </div>
            <div className="text-2xl font-black tracking-tighter text-green-600 dark:text-green-400">
              +{portfolioData.socials.whatsapp}
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-green-500 opacity-60 group-hover:opacity-100 transition-opacity">
               Open App <ArrowRight size={14} />
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            href={`mailto:${portfolioData.email}`}
            className="group relative p-10 glass rounded-[3.5rem] border-2 border-transparent hover:border-blue-500/30 transition-all overflow-hidden flex flex-col items-center text-center space-y-6 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full translate-x-12 -translate-y-12"></div>
            <div className="p-6 bg-blue-600/10 rounded-3xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <Mail size={40} />
            </div>
            <div>
              <h4 className="text-xl font-black uppercase tracking-tight mb-2">Official Mail</h4>
              <p className="text-xs text-gray-500 font-bold italic tracking-wide">For formal technical briefs</p>
            </div>
            <div className="text-xl font-black tracking-tighter text-blue-600 dark:text-blue-400 truncate w-full px-2">
              {portfolioData.email}
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity">
               Send Proposal <ArrowRight size={14} />
            </div>
          </motion.a>

          {/* Instagram Card */}
          <motion.a
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            href={portfolioData.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="group relative p-10 glass rounded-[3.5rem] border-2 border-transparent hover:border-pink-500/30 transition-all overflow-hidden flex flex-col items-center text-center space-y-6 shadow-2xl lg:col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-3xl rounded-full translate-x-12 -translate-y-12"></div>
            <div className="p-6 bg-pink-500/10 rounded-3xl text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-all duration-500">
              <Instagram size={40} />
            </div>
            <div>
              <h4 className="text-xl font-black uppercase tracking-tight mb-2">Instagram Flow</h4>
              <p className="text-xs text-gray-500 font-bold italic tracking-wide">Behind the scenes & content</p>
            </div>
            <div className="text-xl font-black tracking-tighter text-pink-600 dark:text-pink-400">
              @_arun_tech_freelance
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-pink-500 opacity-60 group-hover:opacity-100 transition-opacity">
               Follow Work <ArrowRight size={14} />
            </div>
          </motion.a>
        </div>

        <div className="mt-20 flex flex-col items-center space-y-8">
           <div className="flex flex-wrap justify-center gap-6">
              <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 glass rounded-2xl hover:bg-black hover:text-white transition-all font-black text-[10px] uppercase tracking-widest border border-white/5">
                <Github size={16} /> GitHub
              </a>
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 glass rounded-2xl hover:bg-blue-700 hover:text-white transition-all font-black text-[10px] uppercase tracking-widest border border-white/5">
                <Linkedin size={16} /> LinkedIn
              </a>
              <div className="flex items-center gap-3 px-6 py-3 glass rounded-2xl font-black text-[10px] uppercase tracking-widest border border-white/5 text-gray-500">
                <Share2 size={16} /> Arattai Enabled
              </div>
           </div>

           <div className="flex items-center gap-4 p-4 rounded-[1.5rem] bg-black text-white font-mono text-[9px] md:text-xs">
              <Terminal size={14} className="text-green-500" />
              <span>$ arun --identity <span className="text-green-500">"Principal Full Stack Engineer"</span> --status <span className="text-green-500">"online"</span></span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
