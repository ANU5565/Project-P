"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const points = useRef<THREE.Points>(null!);
  
  // Generate random particles
  const count = 1500;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  const color = new THREE.Color("#55F5FF");
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2; // offset Z a bit
    
    // Varying opacity/intensity for particles
    const intensity = Math.random() * 0.5 + 0.1;
    colors[i * 3] = color.r * intensity;
    colors[i * 3 + 1] = color.g * intensity;
    colors[i * 3 + 2] = color.b * intensity;
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
      points.current.rotation.x = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-grid">
      {/* Light fog / radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background opacity-80"></div>
      
      {/* Scan line animation */}
      <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-screen">
        <div className="w-full h-20 scan-line animate-[scan_8s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Particles Canvas */}
      <div className="absolute inset-0 opacity-50 mix-blend-screen">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Particles />
        </Canvas>
      </div>
    </div>
  );
}
