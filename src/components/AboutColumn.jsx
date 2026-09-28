import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, BookOpen, Calendar, Award, MapPin, Brain } from 'lucide-react';

const AboutColumn = () => {
  return (
    <div id="about" className="flex flex-col gap-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass-panel p-6 flex flex-col gap-6 h-full border-t border-border/50"
      >
        <div className="flex items-center gap-3">
          <User className="w-6 h-6 text-violet" />
          <h2 className="text-xl font-bold text-white">About Me</h2>
        </div>

        <p className="text-text-dim text-sm leading-relaxed">
          I am Somya Ranjan Nayak, a 3rd year B.Tech CSE(AIML) student at Driems University. I am passionate about Artificial Intelligence, Web Development, and building real-world applications. I love exploring new technologies, solving challenging problems, and learning something new every day.
        </p>

        <div className="flex flex-col gap-4 mt-2">
          <div className="flex items-center gap-4">
            <User className="w-4 h-4 text-text-faint" />
            <div className="flex-1 flex justify-between">
              <span className="text-text-faint text-sm">Name</span>
              <span className="text-white text-sm">Somya Ranjan Nayak</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <GraduationCap className="w-4 h-4 text-text-faint" />
            <div className="flex-1 flex justify-between">
              <span className="text-text-faint text-sm">College</span>
              <span className="text-white text-sm">Driems University</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <BookOpen className="w-4 h-4 text-text-faint" />
            <div className="flex-1 flex justify-between">
              <span className="text-text-faint text-sm">Branch</span>
              <span className="text-white text-sm">CSE - AIML</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Calendar className="w-4 h-4 text-text-faint" />
            <div className="flex-1 flex justify-between">
              <span className="text-text-faint text-sm">Year</span>
              <span className="text-white text-sm">3rd Year</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Award className="w-4 h-4 text-text-faint" />
            <div className="flex-1 flex justify-between">
              <span className="text-text-faint text-sm">CGPA</span>
              <span className="text-white text-sm">8.6</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-4 h-4 text-text-faint" />
            <div className="flex-1 flex justify-between">
              <span className="text-text-faint text-sm">Location</span>
              <span className="text-white text-sm">Tangi, Odisha</span>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-6">
          <div className="p-4 rounded-xl border border-violet/30 bg-violet/5 flex items-center gap-4 shadow-[0_0_15px_rgba(139,92,255,0.1)]">
            <div className="w-12 h-12 rounded-lg bg-violet/20 flex items-center justify-center text-violet shrink-0">
              <Brain className="w-6 h-6" />
            </div>
            <p className="font-medium text-violet-dim text-sm leading-snug">
              "Turning Ideas into Impact with AI & Technology"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutColumn;
