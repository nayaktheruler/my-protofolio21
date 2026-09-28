import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, FolderGit2, ChevronRight, CheckCircle2, Shield, MessageSquare } from 'lucide-react';

const ProjectsColumn = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* Internship Card */}
      <motion.div 
        id="internship"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="glass-panel p-6 flex flex-col gap-4 border-t border-border/50 bg-gradient-to-br from-violet/10 to-transparent"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-violet" />
            <h2 className="text-xl font-bold text-white">Internship</h2>
          </div>
        </div>

        <div className="bg-surface p-4 rounded-xl border border-violet/30 hover:border-violet/60 transition-all group">
          <div className="flex items-start gap-4 mb-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center font-bold text-lg text-[#0F3D8C] tracking-tighter shrink-0 shadow-lg">
              CTTC
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm leading-snug">CTTC (Centre for Technology & Talent Collaboration)</h3>
              <p className="text-violet text-xs mt-0.5">1 Month - AIML Internship <span className="text-text-faint ml-2">(May 2025)</span></p>
            </div>
            <ChevronRight className="w-5 h-5 text-text-dim ml-auto transform group-hover:translate-x-1 transition-transform" />
          </div>
          
          <ul className="flex flex-col gap-1.5 ml-2 mt-3 text-text-dim text-xs">
            <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-violet mt-1.5 shrink-0"></div>Worked on real-world AI/ML projects</li>
            <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-violet mt-1.5 shrink-0"></div>Learned model training, data preprocessing</li>
            <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-violet mt-1.5 shrink-0"></div>Built and tested ML models using Python</li>
            <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-violet mt-1.5 shrink-0"></div>Gained hands-on experience in AI tools & workflows</li>
          </ul>
        </div>
      </motion.div>

      {/* Projects Card */}
      <motion.div 
        id="projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="glass-panel p-6 flex flex-col gap-5 flex-1 border-t border-border/50"
      >
        <div className="flex items-center gap-3">
          <FolderGit2 className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold text-white">Projects</h2>
        </div>

        <div className="flex flex-col gap-3">
          
          {/* Project 1 */}
          <div onClick={() => toggleProject(1)} className="bg-surface-2 p-4 rounded-xl border border-transparent hover:border-border cursor-pointer group transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-primary transition-colors">AI Interview Platform</h3>
                <p className="text-text-dim text-xs mb-3 leading-snug">AI-powered mock interviews with real-time feedback and performance analysis.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-surface text-text-dim text-[10px] border border-border/50">React</span>
                  <span className="px-2 py-0.5 rounded-md bg-surface text-text-dim text-[10px] border border-border/50">Node.js</span>
                  <span className="px-2 py-0.5 rounded-md bg-surface text-text-dim text-[10px] border border-border/50">OpenAI</span>
                </div>
                <AnimatePresence>
                  {expandedProject === 1 && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden border-t border-border/50 pt-3"
                    >
                      <p className="text-xs text-text-faint mb-3">Platform uses OpenAI to generate dynamic interview questions based on user resume. Video analysis coming soon.</p>
                      <a href="https://github.com/nayaktheruler" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] text-primary hover:underline" onClick={(e) => e.stopPropagation()}>
                        View on GitHub
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <ChevronRight className={`w-4 h-4 text-text-faint group-hover:text-white transition-all mt-1 ${expandedProject === 1 ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </div>
          </div>

          {/* Project 2 */}
          <div onClick={() => toggleProject(2)} className="bg-surface-2 p-4 rounded-xl border border-transparent hover:border-border cursor-pointer group transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center text-cyan shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-cyan transition-colors">Privacy-First Smart Monitoring AI</h3>
                <p className="text-text-dim text-xs mb-3 leading-snug">Detects abnormal activities while prioritizing privacy protection and real-time alerts.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-surface text-text-dim text-[10px] border border-border/50">Python</span>
                  <span className="px-2 py-0.5 rounded-md bg-surface text-text-dim text-[10px] border border-border/50">OpenCV</span>
                  <span className="px-2 py-0.5 rounded-md bg-surface text-text-dim text-[10px] border border-border/50">Flask</span>
                </div>
                <AnimatePresence>
                  {expandedProject === 2 && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden border-t border-border/50 pt-3"
                    >
                      <p className="text-xs text-text-faint mb-3">Implements edge-based detection algorithms to ensure video data never leaves the local network.</p>
                      <a href="https://github.com/nayaktheruler" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] text-cyan hover:underline" onClick={(e) => e.stopPropagation()}>
                        View on GitHub
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <ChevronRight className={`w-4 h-4 text-text-faint group-hover:text-white transition-all mt-1 ${expandedProject === 2 ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </div>
          </div>

          {/* Project 3 */}
          <div onClick={() => toggleProject(3)} className="bg-surface-2 p-4 rounded-xl border border-transparent hover:border-border cursor-pointer group transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber/20 flex items-center justify-center text-amber shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-amber transition-colors">RAG Chatbot</h3>
                <p className="text-text-dim text-xs mb-3 leading-snug">Context-aware chatbot using Retrieval-Augmented Generation for accurate responses.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-surface text-text-dim text-[10px] border border-border/50">Python</span>
                  <span className="px-2 py-0.5 rounded-md bg-surface text-text-dim text-[10px] border border-border/50">LangChain</span>
                  <span className="px-2 py-0.5 rounded-md bg-surface text-text-dim text-[10px] border border-border/50">FAISS</span>
                </div>
                <AnimatePresence>
                  {expandedProject === 3 && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden border-t border-border/50 pt-3"
                    >
                      <p className="text-xs text-text-faint mb-3">Integrates FAISS vector database to provide domain-specific answers by querying local documents.</p>
                      <a href="https://github.com/nayaktheruler" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] text-amber hover:underline" onClick={(e) => e.stopPropagation()}>
                        View on GitHub
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <ChevronRight className={`w-4 h-4 text-text-faint group-hover:text-white transition-all mt-1 ${expandedProject === 3 ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsColumn;
