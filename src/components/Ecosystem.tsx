"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  "n8n","Python", "Java", "JavaScript", "React", "Node.js","AI&ML",
  "LangChain", "AI Agents", "Automation", "Git", "GitHub", 
  "REST APIs", "PostgreSQL", "Docker", "Azure", "Machine Learning", 
  "Prompt Engineering", "GenAI", "OpenAI", "MCP", "RAG"
];

// Split into rings
const RING_1 = SKILLS.slice(0, 5); // 5 nodes
const RING_2 = SKILLS.slice(5, 13); // 8 nodes
const RING_3 = SKILLS.slice(13, 21); // 8 nodes

export default function Ecosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });

  return (
    <section id="skills" className="py-32 relative min-h-screen flex items-center justify-center overflow-hidden" ref={containerRef}>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/50 border border-white/10 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-white/60">NEURAL.NETWORK</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-space font-bold tracking-tight text-glow mb-4">MY AI ECOSYSTEM</h2>
          <div className="h-[1px] w-24 bg-accent/50 mx-auto box-glow" />
        </motion.div>

        {/* The Network Graph Container */}
        <div className="relative w-full aspect-square max-w-[800px] mt-10 md:mt-0">
          
          {/* SVG Definitions for Glows */}
          <svg className="absolute w-0 h-0">
            <defs>
              <filter id="neon-glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Center Profile Node (The "Core") */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <motion.div 
              className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-accent p-1.5 bg-background/50 backdrop-blur-md relative flex items-center justify-center"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(85, 245, 255, 0.2)", 
                  "0 0 60px rgba(85, 245, 255, 0.6)", 
                  "0 0 20px rgba(85, 245, 255, 0.2)"
                ] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(85,245,255,0.15)_0%,_transparent_70%)]" />
                
                <span className="font-space font-bold text-3xl md:text-4xl text-white relative z-10 text-glow">AD</span>
                <span className="text-[9px] md:text-[11px] font-mono text-accent mt-1 tracking-widest relative z-10">CORE</span>
                
                {/* Scanner effect inside center */}
                <motion.div 
                  className="absolute left-0 right-0 h-[2px] bg-accent/50 shadow-[0_0_10px_#55F5FF]"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Orbital Rings with Pipelines and Nodes */}
          {isInView && (
            <>
              <Ring skills={RING_1} radius={180} duration={50} direction={1} />
              <Ring skills={RING_2} radius={300} duration={70} direction={-1} />
              <Ring skills={RING_3} radius={420} duration={90} direction={1} />
            </>
          )}

        </div>
      </div>
    </section>
  );
}

function Ring({ skills, radius, duration, direction }: { skills: string[], radius: number, duration: number, direction: number }) {
  const count = skills.length;
  
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none"
      animate={{ rotate: direction * 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 1000 1000" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
        {/* Orbital Path Background */}
        <circle cx="500" cy="500" r={radius} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 12" />

        {skills.map((skill, i) => {
          const angle = (i / count) * Math.PI * 2;
          const x = 500 + Math.cos(angle) * radius;
          const y = 500 + Math.sin(angle) * radius;
          const delay = (i % 3) * 1.5; // Stagger packet animations
          
          return (
            <g key={`pipe-${i}`}>
              {/* Pipeline connecting node to center */}
              <line 
                x1={x} y1={y} 
                x2="500" y2="500" 
                stroke="rgba(85, 245, 255, 0.15)" 
                strokeWidth="1.5" 
              />
              
              {/* Data Packet moving from Node to Center */}
              <circle r="4" fill="#55F5FF" filter="url(#neon-glow)">
                <animateMotion 
                  dur={`${3 + (i % 2)}s`} 
                  repeatCount="indefinite" 
                  path={`M ${x} ${y} L 500 500`}
                  begin={`${delay}s`}
                />
                {/* Fade in at start, fade out at end */}
                <animate 
                  attributeName="opacity" 
                  values="0;1;1;0" 
                  keyTimes="0;0.1;0.9;1" 
                  dur={`${3 + (i % 2)}s`} 
                  repeatCount="indefinite" 
                  begin={`${delay}s`}
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* HTML Nodes overlaying the SVG */}
      {skills.map((skill, i) => {
        const angle = (i / count) * Math.PI * 2;
        const x = 500 + Math.cos(angle) * radius;
        const y = 500 + Math.sin(angle) * radius;
        
        return (
          <div 
            key={`node-${i}`}
            className="absolute pointer-events-none"
            style={{ 
              left: `${(x / 1000) * 100}%`, 
              top: `${(y / 1000) * 100}%`, 
              transform: 'translate(-50%, -50%)' 
            }}
          >
            {/* Counter-rotation so nodes stay upright */}
            <motion.div
              className="pointer-events-auto cursor-pointer flex flex-col items-center group"
              animate={{ rotate: -direction * 360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              {/* Node Circular Body (n8n style) */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center relative transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(85,245,255,0.4)] group-hover:scale-110 group-hover:bg-accent/5 z-20">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/20 group-hover:bg-accent transition-colors duration-300 shadow-inner" />
                
                {/* Hover ring expand effect */}
                <div className="absolute inset-0 rounded-full border border-accent/0 group-hover:border-accent/40 scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
              </div>
              
              {/* Node Label underneath */}
              <div className="absolute top-[110%] bg-[#0A0A0A]/95 border border-white/10 px-3 py-1.5 rounded-md text-[10px] md:text-xs font-mono text-white/70 whitespace-nowrap opacity-80 group-hover:opacity-100 group-hover:text-accent group-hover:border-accent/40 group-hover:-translate-y-1 transition-all duration-300 backdrop-blur-md shadow-lg z-30">
                {skill}
              </div>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}
