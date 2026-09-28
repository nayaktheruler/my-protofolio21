import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Icosahedron, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random particles within a spherical volume
const generateParticles = (count) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 3.5 + Math.random() * 2.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
};

const particlesPositions = generateParticles(300);

const NetworkSphere = () => {
  const coreRef = useRef();
  const shellRef = useRef();
  const particlesRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Rotate structures
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.1;
      coreRef.current.rotation.x = t * 0.05;
    }
    if (shellRef.current) {
      shellRef.current.rotation.y = -t * 0.08;
      shellRef.current.rotation.x = -t * 0.03;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
    }

    // Slight floating effect on the whole group based on mouse
    const mouseX = (state.pointer.x * Math.PI) / 10;
    const mouseY = (state.pointer.y * Math.PI) / 10;
    
    groupRef.current.rotation.x += (mouseY - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (mouseX - groupRef.current.rotation.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Inner Glowing Core */}
      <Icosahedron ref={coreRef} args={[2.2, 1]}>
        <meshBasicMaterial 
          color="#8b5cff" 
          wireframe 
          transparent 
          opacity={0.6} 
        />
      </Icosahedron>

      {/* Outer Cyan Shell */}
      <Icosahedron ref={shellRef} args={[2.8, 1]}>
        <meshBasicMaterial 
          color="#4ad9ff" 
          wireframe 
          transparent 
          opacity={0.2} 
        />
      </Icosahedron>

      {/* Floating Particles/Nodes */}
      <Points ref={particlesRef} positions={particlesPositions}>
        <PointMaterial 
          transparent 
          color="#ff9f4a" 
          size={0.06} 
          sizeAttenuation={true} 
          depthWrite={false} 
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

export default NetworkSphere;
