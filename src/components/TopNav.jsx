import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download } from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'internship', label: 'Internship' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const TopNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check local storage for theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove('light');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );

    navLinks.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 pointer-events-auto bg-background/80 backdrop-blur-xl border-b border-border/30">
      {/* Logo Area */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet to-cyan flex items-center justify-center text-white font-bold text-xl tracking-tighter shadow-[0_0_15px_rgba(139,92,255,0.4)]">
          SN
        </div>
        <span className="font-display font-semibold text-lg text-text-main hidden sm:block tracking-wide">
          Somya Ranjan Nayak
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-text-dim">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`transition-colors ${
              activeSection === link.id
                ? "text-primary relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full after:shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                : "hover:text-text-main"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-text-dim">
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-terminal'))} className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-2 border border-border/50 text-xs font-mono text-text-main hover:text-primary hover:border-primary/50 transition-all">
            <span className="text-primary">&gt;</span> _ open terminal
          </button>
          <button onClick={toggleTheme} className="w-8 h-8 rounded-full flex items-center justify-center hover:text-text-main transition-colors">
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
        <a href="/resume.pdf" download="SomyaRanjan_Nayak_Resume.pdf" className="px-4 py-2 lg:px-6 lg:py-2.5 rounded-lg border border-border text-text-main hover:bg-surface-2 transition-all text-sm flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download Resume</span>
        </a>
      </div>
    </header>
  );
};

export default TopNav;
