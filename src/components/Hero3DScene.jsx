import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Torus, Octahedron, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Particle Background Component
const ParticleNetwork = () => {
  const ref = useRef();
  
  // Generate random points in a sphere
  const [positions] = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 15;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

// Floating Geometry Component
const FloatingShapes = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[-4, 2, -5]}>
        <Icosahedron args={[1, 0]}>
          <meshStandardMaterial color="#3b82f6" wireframe opacity={0.3} transparent />
        </Icosahedron>
      </Float>

      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={[4, -2, -3]}>
        <Torus args={[0.8, 0.2, 16, 32]}>
          <meshStandardMaterial color="#8b5cff" wireframe opacity={0.4} transparent />
        </Torus>
      </Float>

      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1} position={[0, -3, -6]}>
        <Octahedron args={[1.2]}>
          <meshStandardMaterial color="#06b6d4" wireframe opacity={0.2} transparent />
        </Octahedron>
      </Float>
    </>
  );
};

// Parallax Camera Rig
const CameraRig = () => {
  useFrame((state) => {
    // Parallax effect: smoothly interpolate camera position based on pointer coordinates
    const targetX = (state.pointer.x * 2);
    const targetY = (state.pointer.y * 2);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

const Hero3DScene = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#8b5cff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        
        <ParticleNetwork />
        <FloatingShapes />
        <CameraRig />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
