import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Database, Globe, Wrench, Layers } from 'lucide-react';

const EducationSkillsColumn = () => {
  return (
    <div id="education" className="flex flex-col gap-6">
      {/* Education Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="glass-panel p-6 flex flex-col gap-6 border-t border-border/50"
      >
        <div className="flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold text-white">Education</h2>
        </div>

        <div className="relative border-l-2 border-border/50 ml-3 flex flex-col gap-6 pb-2">
          
          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-white text-sm">B.Tech (CSE - AIML)</h3>
              <span className="text-text-faint text-xs">2024 - 2028</span>
            </div>
            <p className="text-text-dim text-xs mb-2">Driems University, Tangi, Odisha<br/><span className="text-[10px] text-text-faint">Currently Studying • 3rd Year</span></p>
            <span className="inline-block px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-medium border border-primary/30">
              CGPA: 8.6 (Current)
            </span>
          </div>

          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-border rounded-full -left-[7px] top-1.5"></div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-white text-sm">12th (Science)</h3>
              <span className="text-text-faint text-xs">2022 - 2024</span>
            </div>
            <p className="text-text-dim text-xs mb-2">N.S.M city college<br/><span className="text-[10px] text-text-faint">Higher Secondary School</span></p>
            <span className="inline-block px-2 py-0.5 rounded-full bg-surface-2 text-text-dim text-[10px] font-medium border border-border">
              Percentage: 72%
            </span>
          </div>

          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-border rounded-full -left-[7px] top-1.5"></div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-white text-sm">10th</h3>
              <span className="text-text-faint text-xs">2020 - 2022</span>
            </div>
            <p className="text-text-dim text-xs mb-2">High School</p>
            <span className="inline-block px-2 py-0.5 rounded-full bg-surface-2 text-text-dim text-[10px] font-medium border border-border">
              Percentage: 85%
            </span>
          </div>

        </div>
      </motion.div>

      {/* Skills Card */}
      <motion.div 
        id="skills"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="glass-panel p-6 flex flex-col gap-6 flex-1 border-t border-border/50"
      >
        <div className="flex items-center gap-3">
          <Layers className="w-6 h-6 text-violet" />
          <h2 className="text-xl font-bold text-white">Skills</h2>
        </div>

        <div className="grid grid-cols-3 gap-2">
          
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-xs font-semibold mb-2">Languages</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#3776AB] flex items-center justify-center text-[8px] text-white font-bold">Py</div><span className="text-text-dim text-xs">Python</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#F7DF1E] flex items-center justify-center text-[8px] text-black font-bold">JS</div><span className="text-text-dim text-xs">JavaScript</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#00599C] flex items-center justify-center text-[8px] text-white font-bold">C++</div><span className="text-text-dim text-xs">C/C++</span></div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-l border-border/50 pl-2">
            <h4 className="text-white text-xs font-semibold mb-2">Web & Frameworks</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#61DAFB] flex items-center justify-center"><Globe className="w-3 h-3 text-black" /></div><span className="text-text-dim text-xs">React</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#339933] flex items-center justify-center"><Code className="w-3 h-3 text-white" /></div><span className="text-text-dim text-xs">Node.js</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-white flex items-center justify-center text-[8px] text-black font-bold">ex</div><span className="text-text-dim text-xs">Express</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#06B6D4] flex items-center justify-center"><Layers className="w-3 h-3 text-white" /></div><span className="text-text-dim text-xs">Tailwind CSS</span></div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-l border-border/50 pl-2">
            <h4 className="text-white text-xs font-semibold mb-2">Tools & Others</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-white flex items-center justify-center"><Wrench className="w-3 h-3 text-black" /></div><span className="text-text-dim text-xs">Git & GitHub</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#007ACC] flex items-center justify-center"><Code className="w-3 h-3 text-white" /></div><span className="text-text-dim text-xs">VS Code</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#F24E1E] flex items-center justify-center text-[8px] text-white font-bold">Fg</div><span className="text-text-dim text-xs">Figma</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#47A248] flex items-center justify-center"><Database className="w-3 h-3 text-white" /></div><span className="text-text-dim text-xs">MongoDB</span></div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default EducationSkillsColumn;
