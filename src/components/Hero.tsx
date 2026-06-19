"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  "Automation Engineer",
  "AI Workflow Developer",
  "n8n Specialist",
  "Machine learning Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Floating HUD Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] border border-accent/10 rounded-full border-dashed opacity-30 mix-blend-screen"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] border border-white/5 rounded-full opacity-20 mix-blend-screen"
        >
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#55F5FF]" />
        </motion.div>
        
        {/* Decorative Data Points */}
        <div className="absolute top-1/3 right-[10%] text-xs font-mono text-accent/40 flex flex-col items-end">
          <span>SYS.STATUS: ONLINE</span>
          <span>LATENCY: 12ms</span>
          <span>CORE_TEMP: OPTIMAL</span>
        </div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 inline-flex items-center px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
            AI SYSTEM INITIALIZED
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-space font-bold tracking-tight text-glow mb-6"
          >
            ANUROOP DASARI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-10 text-xl md:text-2xl text-white/80 font-mono mb-8 flex items-center justify-center space-x-2"
          >
            <span className="text-accent">{">"}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="inline-block font-semibold"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-3 h-6 bg-accent ml-1 translate-y-[2px]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-white/60 mb-12 max-w-2xl leading-relaxed"
          >
            I design intelligent automation systems, AI-powered workflows, and scalable digital solutions that transform repetitive processes into autonomous experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="hover-target px-8 py-3 bg-accent/10 border border-accent text-accent rounded hover:bg-accent hover:text-background transition-all duration-300 font-medium tracking-wide box-glow"
            >
              Explore Portfolio
            </a>
            <a
              href="#projects"
              className="hover-target px-8 py-3 bg-glass border border-border-glass text-white rounded hover:bg-white/10 transition-all duration-300 font-medium tracking-wide"
            >
              View Projects
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
