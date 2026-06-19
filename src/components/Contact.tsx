"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Terminal as TerminalIcon } from "lucide-react";

const GithubIcon = ({ size, className }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
);

const LinkedinIcon = ({ size, className }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = ({ size, className }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const SOCIALS = [
  { name: "GitHub", icon: GithubIcon, href: "https://github.com/ANU5565" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/anuroop-dasari-20b8a4328 " },
  { name: "Twitter", icon: TwitterIcon, href: "https://twitter.com/anu999" },
  { name: "Email", icon: Mail, href: "mailto:anurup911@gmail.com" },
  { name: "Discord", icon: TerminalIcon, href: "anu999" }
];

export default function Contact() {
  const [typingText, setTypingText] = useState("");
  const fullText = "INITIATE CONNECTION...";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="glass-card p-1 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          
          <div className="bg-[#0A0A0A] rounded-[14px] p-6 md:p-12 border border-white/5">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-12 pb-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <TerminalIcon size={18} className="text-accent" />
                <h2 className="text-lg md:text-xl font-mono text-white font-bold tracking-widest">
                  {typingText}
                  <span className="animate-pulse text-accent">_</span>
                </h2>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-accent/50 box-glow animate-pulse" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/50 uppercase tracking-widest">Name_Id</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-accent focus:bg-accent/5 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/50 uppercase tracking-widest">Comm_Channel</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-accent focus:bg-accent/5 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/50 uppercase tracking-widest">Payload</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-accent focus:bg-accent/5 transition-all resize-none"
                    placeholder="Enter your message"
                  />
                </div>
                <button className="hover-target w-full flex items-center justify-center space-x-2 bg-accent/10 border border-accent text-accent px-6 py-4 rounded hover:bg-accent hover:text-background transition-all duration-300 group box-glow">
                  <span className="font-mono font-bold tracking-widest uppercase">Transmit Data</span>
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>

              {/* Info & Socials */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-space font-bold text-white mb-4">SYSTEM NOTIFICATION</h3>
                  <p className="text-white/60 font-mono text-sm leading-relaxed mb-8">
                    My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! I'm actively looking for new opportunities to build scalable AI systems.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-white/60 font-mono text-sm">
                      <span className="text-accent">STATUS:</span>
                      <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">ACCEPTING_CONNECTIONS</span>
                    </div>
                    <div className="flex items-center space-x-4 text-white/60 font-mono text-sm">
                      <span className="text-accent">LOCATION:</span>
                      <span>GLOBAL_NETWORK</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10">
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Secure Links</p>
                  <div className="flex flex-wrap gap-4">
                    {SOCIALS.map(social => {
                      const Icon = social.icon;
                      return (
                        <a 
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover-target p-3 rounded bg-white/5 border border-white/10 text-white/60 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group"
                          aria-label={social.name}
                        >
                          <Icon size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(85,245,255,0.8)]" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
