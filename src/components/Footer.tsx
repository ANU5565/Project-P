"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-background py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 flex items-center justify-center border border-accent/30 rounded bg-background/50">
              <span className="font-space font-bold text-sm tracking-wider text-white">AD</span>
            </div>
            <span className="font-mono text-xs text-white/50">© {new Date().getFullYear()} ANUROOP DASARI. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-white/40">
            <span>SYS.BUILT_WITH:</span>
            <div className="flex space-x-2 text-white/60">
              <span className="hover:text-accent transition-colors cursor-default"></span>
              <span>/</span>
              <span className="hover:text-accent transition-colors cursor-default"></span>
              <span>/</span>
              <span className="hover:text-accent transition-colors cursor-default"></span>
              <span>/</span>
              <span className="hover:text-accent transition-colors cursor-default"></span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
