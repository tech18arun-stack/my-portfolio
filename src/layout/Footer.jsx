import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h4 className="text-xl font-bold text-gradient mb-2">ARUN</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
          <a href="#hero" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Privacy</a>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-none">System Online</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
