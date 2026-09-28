import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, GraduationCap, BarChart2, Code2, Trophy, Github, Linkedin, ExternalLink } from 'lucide-react';
import Hero3DScene from './Hero3DScene';

const HeroSection = () => {
  // Staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 100 } }
  };

  const name = "Somya Ranjan Nayak";

  return (
    <section id="home" className="min-h-screen pt-32 pb-16 px-6 lg:px-12 flex flex-col xl:flex-row items-center justify-between gap-10 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-violet/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* 3D Interactive Background */}
      <Hero3DScene />

      {/* LEFT COLUMN: Intro Text */}
      <div className="w-full xl:w-[35%] flex flex-col gap-6 z-10 pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-surface-2/50 text-text-dim text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span>B.Tech 3rd Year • CSE-AIML • Driems University</span>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight leading-tight">
            <span className="text-white block mb-2">Hi, I'm</span>
            <motion.span 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-violet via-primary to-cyan text-transparent bg-clip-text flex flex-wrap"
            >
              {name.split('').map((char, index) => (
                <motion.span key={index} variants={childVariants}>
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-white font-semibold text-lg md:text-xl tracking-wide mt-2 flex items-center gap-2"
        >
          <span className="w-8 h-[2px] bg-primary inline-block"></span>
          Aspiring AI Engineer | Full Stack Developer
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-text-dim leading-relaxed max-w-lg"
        >
          I'm a 3rd year B.Tech CSE(AIML) student at Driems University, passionate about AI, building web applications, and creating solutions for real-world problems.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <a href="#projects" className="px-6 py-3 rounded-full bg-gradient-to-r from-violet to-primary text-white font-medium flex items-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,255,0.4)] transition-all">
            View My Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="mailto:nayaksomyaranjan042@gmail.com" className="px-6 py-3 rounded-full border border-border text-white flex items-center gap-2 hover:bg-surface-2 transition-all">
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* CENTER COLUMN: Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full xl:w-[35%] relative h-[500px] flex justify-center items-center z-10"
      >
        {/* Orbital rings behind image */}
        <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-primary/30 blur-[2px] transform rotate-12"></div>
        <div className="absolute w-[420px] h-[420px] rounded-full border border-violet/40 transform -rotate-12 shadow-[0_0_30px_rgba(139,92,255,0.2)]"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary/20 to-violet/20 blur-3xl"></div>
        
        {/* Profile Image with masking for blending */}
        <div className="relative z-10 w-full h-[500px] flex items-end justify-center drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          <img 
            src="/profile.jpg" 
            alt="Somya Ranjan Nayak" 
            className="h-[450px] object-cover object-center rounded-[40px]" 
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
            }}
          />
        </div>

        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-12 h-12 rounded-lg bg-gradient-to-br from-violet to-primary blur-[1px] opacity-70 rotate-12 shadow-[0_0_20px_rgba(139,92,255,0.5)]"
        />

        <div className="absolute top-1/4 right-0 transform translate-x-1/3 text-right z-20">
          <p className="font-handwriting text-3xl text-primary/80 transform -rotate-6">Somya Ranjan</p>
          <div className="mt-4 text-sm font-medium text-text-dim text-center mr-8">
            <p>"Better Code</p>
            <p>Brighter Future"</p>
          </div>
        </div>
      </motion.div>

      {/* RIGHT COLUMN: Cards */}
      <div className="w-full xl:w-[30%] flex flex-col gap-6 z-10">
        
        {/* Statistics Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel-interactive p-6 flex flex-col gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-violet/20 flex items-center justify-center text-violet">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">3rd Year</p>
              <p className="text-text-dim text-xs">B.Tech CSE-AIML</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">8.6</p>
              <p className="text-text-dim text-xs">Current CGPA</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">4+</p>
              <p className="text-text-dim text-xs">Projects</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-amber/20 flex items-center justify-center text-amber">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">1</p>
              <p className="text-text-dim text-xs">Hackathon Win<br/>(State Level)</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Links Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-panel p-6 flex flex-col gap-4 relative overflow-hidden"
        >
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-[40px]"></div>
          
          <h3 className="text-white font-bold text-xl mb-2">Quick Links</h3>
          
          <a href="https://github.com/nayaktheruler" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-3 rounded-xl hover:bg-surface-2 transition-colors border border-transparent hover:border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-background">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">GitHub</p>
                <p className="text-text-dim text-xs group-hover:text-primary transition-colors">nayaktheruler</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-text-dim group-hover:text-primary" />
          </a>

          <a href="https://www.linkedin.com/in/somyaranjan-nayak-249525334" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-3 rounded-xl hover:bg-surface-2 transition-colors border border-transparent hover:border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0a66c2] flex items-center justify-center text-white">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">LinkedIn</p>
                <p className="text-text-dim text-xs group-hover:text-primary transition-colors">Profile</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-text-dim group-hover:text-primary" />
          </a>

          <div className="mt-4 text-center">
            <p className="font-handwriting text-primary text-lg transform -rotate-2">
              "Keep learning,<br/>Keep building."
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
