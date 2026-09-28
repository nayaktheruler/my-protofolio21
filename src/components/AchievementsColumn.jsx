import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Rocket, Briefcase, FolderGit2, GraduationCap, Flag } from 'lucide-react';

const AchievementsColumn = () => {
  return (
    <div id="achievements" className="flex flex-col gap-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="glass-panel p-6 flex flex-col gap-6 h-full border-t border-border/50"
      >
        <div className="flex items-center gap-3">
          <Trophy className="w-6 h-6 text-amber" />
          <h2 className="text-xl font-bold text-white">Achievements</h2>
        </div>

        {/* Highlighted Achievement Card */}
        <div className="bg-gradient-to-br from-[#1E1B4B] to-[#31106A] p-5 rounded-2xl border border-violet/30 shadow-[0_0_20px_rgba(139,92,255,0.15)] relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber/30 blur-[30px] rounded-full"></div>
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-12 h-12 bg-amber/20 rounded-full flex items-center justify-center shrink-0 border border-amber/30">
              <Medal className="w-6 h-6 text-amber" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight mb-1">Hackathon Winner</h3>
              <p className="text-amber text-xs font-semibold mb-2">State Level Hackathon</p>
              <p className="text-text-dim text-[11px] leading-relaxed">Secured 1st Position in a State Level Hackathon for an innovative AI-based solution.</p>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-3">Key Highlights</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 bg-surface-2/50 p-2.5 rounded-lg border border-border/50">
              <Briefcase className="w-4 h-4 text-violet shrink-0" />
              <span className="text-text-dim text-xs">CTTC AIML Internship (1 Month)</span>
            </li>
            <li className="flex items-center gap-3 bg-surface-2/50 p-2.5 rounded-lg border border-border/50">
              <FolderGit2 className="w-4 h-4 text-primary shrink-0" />
              <span className="text-text-dim text-xs">3+ Real-world Projects</span>
            </li>
            <li className="flex items-center gap-3 bg-surface-2/50 p-2.5 rounded-lg border border-border/50">
              <Trophy className="w-4 h-4 text-amber shrink-0" />
              <span className="text-text-dim text-xs">1 State Level Hackathon Win</span>
            </li>
            <li className="flex items-center gap-3 bg-surface-2/50 p-2.5 rounded-lg border border-border/50">
              <GraduationCap className="w-4 h-4 text-cyan shrink-0" />
              <span className="text-text-dim text-xs">CGPA 8.6 (Current)</span>
            </li>
          </ul>
        </div>

        {/* Motivational Card */}
        <div className="mt-auto pt-6">
          <div className="relative rounded-2xl bg-gradient-to-br from-surface to-background border border-border overflow-hidden p-6 flex flex-col items-center text-center group">
            {/* Mountain illustration using simple CSS shapes */}
            <div className="absolute bottom-0 left-0 w-full h-16 opacity-30">
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary/20 to-transparent"></div>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-surface-2 fill-current">
                <polygon points="0,100 30,30 50,70 70,20 100,100" />
              </svg>
            </div>
            
            <Rocket className="w-8 h-8 text-primary mb-3 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 relative z-10" />
            <div className="font-display font-bold text-white text-sm leading-relaxed relative z-10">
              <p>Always Learning</p>
              <p>Always Building</p>
              <p>Always Ahead</p>
            </div>
            <Flag className="w-4 h-4 text-amber absolute bottom-4 right-4 opacity-50 z-10" />
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default AchievementsColumn;
