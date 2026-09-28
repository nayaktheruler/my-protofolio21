import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import NetworkSphere from './NetworkSphere';
import TopNav from './TopNav';
import HeroSection from './HeroSection';
import AboutColumn from './AboutColumn';
import EducationSkillsColumn from './EducationSkillsColumn';
import ProjectsColumn from './ProjectsColumn';
import AchievementsColumn from './AchievementsColumn';
import Footer from './Footer';
import AIAssistant from './AIAssistant';
import TerminalModal from './TerminalModal';

const Dashboard = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleOpenTerminal = () => setIsTerminalOpen(true);
    window.addEventListener('open-terminal', handleOpenTerminal);
    return () => window.removeEventListener('open-terminal', handleOpenTerminal);
  }, []);

  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-white font-body overflow-x-hidden text-text-main">
      
      {/* Dynamic Background with 3D and Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-background"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet/5 blur-[120px]"></div>
        
        {/* 3D Network Sphere */}
        <div className="absolute inset-0 opacity-40">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <NetworkSphere />
            </Suspense>
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>
      </div>

      <TopNav />

      <main className="relative z-10">
        <HeroSection />
        
        {/* 4-Column Dashboard Layout */}
        <section className="px-6 lg:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full mx-auto">
            <AboutColumn />
            <EducationSkillsColumn />
            <ProjectsColumn />
            <AchievementsColumn />
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Interactive Elements */}
      <AIAssistant />
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
};

export default Dashboard;
