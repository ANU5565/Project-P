"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-6"
      }`}
    >
      {/* Scroll Progress Line */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[2px] bg-accent origin-left shadow-[0_0_8px_#55F5FF]"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between glass-card px-6 py-3 transition-all duration-300 ${
          isScrolled ? "bg-glass/80 backdrop-blur-xl" : "bg-transparent border-transparent"
        }`}>
          {/* Logo */}
          <Link href="#home" className="hover-target relative group">
            <div className="w-10 h-10 flex items-center justify-center border border-accent/30 rounded bg-background/50 overflow-hidden">
              <span className="font-space font-bold text-lg tracking-wider text-white group-hover:text-accent transition-colors">AD</span>
              <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="hover-target text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300 ease-out box-glow" />
              </Link>
            ))}
          </nav>

          {/* Resume Button */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover-target hidden md:flex items-center space-x-2 px-4 py-2 border border-accent/50 text-accent rounded hover:bg-accent/10 transition-colors box-glow"
          >
            <span className="text-sm font-medium tracking-wide">Resume</span>
            <Download size={14} />
          </a>

          {/* Mobile Menu Button (simplified for now) */}
          <button className="md:hidden hover-target text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
