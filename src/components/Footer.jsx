import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative z-10 border-t border-border/50 bg-[#020814]/80 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Left */}
        <div className="text-text-dim text-center md:text-left">
          © 2025 Somya Ranjan Nayak. All rights reserved.
        </div>

        {/* Center */}
        <div className="text-text-dim flex items-center gap-1.5 font-medium">
          Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> using <span className="text-white">React & Tailwind CSS</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/nayaktheruler" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-white transition-colors" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/somyaranjan-nayak-249525334" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="tel:+919692071177" className="text-text-dim hover:text-white transition-colors" aria-label="Phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
          <a href="mailto:nayaksomyaranjan042@gmail.com" className="text-text-dim hover:text-white transition-colors" aria-label="Email">
            <Mail className="w-4 h-4" />
          </a>
          <button 
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-dim hover:text-white hover:border-text-faint hover:bg-surface-2 transition-all ml-2"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
