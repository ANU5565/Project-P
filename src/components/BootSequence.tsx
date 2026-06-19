"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const BOOT_MESSAGES = [
  "INITIALIZING AI CORE...",
  "LOADING EXPERIENCE...",
  "CONNECTING MODULES...",
  "ACCESS GRANTED"
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (messageIndex < BOOT_MESSAGES.length - 1) {
      const timer = setTimeout(() => {
        setMessageIndex((prev) => prev + 1);
      }, 800 + Math.random() * 400); // Random delay between 800-1200ms
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowLogo(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [messageIndex]);

  useEffect(() => {
    if (showLogo) {
      const timer = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 1000); // Give time for exit animation
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showLogo, onComplete]);

  const letterAnimation: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background text-accent font-mono overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
        >
          {!showLogo ? (
            <div className="w-full max-w-md px-6">
              <motion.div className="h-1 w-full bg-accent/20 rounded overflow-hidden mb-8">
                <motion.div
                  className="h-full bg-accent shadow-[0_0_10px_#55F5FF]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((messageIndex + 1) / BOOT_MESSAGES.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </motion.div>
              <div className="space-y-2 text-sm md:text-base">
                {BOOT_MESSAGES.slice(0, messageIndex + 1).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={i === BOOT_MESSAGES.length - 1 ? "text-white text-glow font-bold mt-4" : "text-accent/70"}
                  >
                    {">"} {msg}
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-accent ml-1 translate-y-1"
                />
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              {/* Particle Explosion Background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.5 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-7xl font-space font-bold text-white text-glow flex tracking-widest z-10"
              >
                {"ANUROOP DASARI".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterAnimation}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
