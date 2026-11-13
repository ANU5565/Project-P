"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, ArrowRight, Bot, Cpu, Search, Briefcase, MessageSquare, Workflow } from "lucide-react";

const PROJECTS = [
  {
    title: "AI Learning Companion",
    description: "An adaptive AI system that tailors learning paths based on user progress and comprehension levels.",
    tech: ["n8n", "GeminiAI", "Agents", "postgreSQL", "Tavily Search"],
    icon: Bot,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
  },
  {
    title: "AI Resume Optimizer",
    description: "Automated ATS analysis and resume rewriting agent using specialized LLM prompts and document parsing.",
    tech: ["Agents", "LangChain", "n8n", "Gemini", "Grok", "PostgreSQL", "APIs"],
    icon: Briefcase,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
  },
  {
    title: "AI Referral Automation",
    description: "Multi-agent workflow that automates candidate screening and internal referral generation.",
    tech: ["n8n", "Claude API", "PostgreSQL", "Slack API"],
    icon: Workflow,
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
  },
  {
    title: "AI Personal Search Engine",
    description: "RAG-based search engine that indexes personal knowledge bases, notes, and browsing history.",
    tech: ["n8n", "VectorDB", "Ollama", "Docker"],
    icon: Search,
    color: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
  },
  {
    title: "Discord AI News Bot",
    description: "Autonomous agent that aggregates, summarizes, and broadcasts industry-specific news.",
    tech: ["n8n", "Discord", "Gemini", "groq", "APIs"],
    icon: MessageSquare,
    color: "from-indigo-500/20 to-violet-500/20",
    border: "group-hover:border-indigo-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
  },
  {
    title: "n8n AI Agents Collection",
    description: "A suite of reusable n8n templates and custom nodes for common AI automation tasks.",
    tech: ["n8n", "JavaScript", "REST APIs", "Webhooks"],
    icon: Cpu,
    color: "from-accent/20 to-blue-500/20",
    border: "group-hover:border-accent/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(85,245,255,0.3)]"
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  
  return (
    <section id="projects" className="py-24 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-space font-bold tracking-tight text-white mb-4">SYSTEM.PROJECTS</h2>
              <p className="text-white/60 font-mono text-sm max-w-xl">
                Executing deployment of recent automation modules and intelligent architectures.
              </p>
            </div>
            
            <a href="https://github.com/ANU5565" target="_blank" rel="noopener noreferrer" className="hover-target inline-flex items-center space-x-2 text-accent hover:text-white transition-colors group">
              <span className="font-mono text-sm uppercase tracking-wider">Access Full Database</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-1 group transition-all duration-500 ${project.glow}`}
              >
                <div className={`h-full w-full bg-secondary/80 rounded-[14px] overflow-hidden border border-white/5 transition-colors duration-300 ${project.border} flex flex-col`}>
                  
                  {/* Abstract Image Preview */}
                  <div className={`h-40 w-full bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <Icon size={48} className="text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/80 to-transparent" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-space font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/60 mb-6 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                          <span key={tech} className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono bg-white/5 border border-white/10 rounded text-white/70">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                        <a href="#" className="hover-target text-white/70 hover:text-white transition-colors flex items-center space-x-2 text-sm font-medium">
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                        <a href="#" className="hover-target text-white/70 hover:text-white transition-colors flex items-center space-x-2 text-sm font-medium">
                          <GitBranch size={16} />
                          <span>Source</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a href="#" className="hover-target group flex flex-col items-center space-y-2 text-white/50 hover:text-accent transition-colors">
            <span className="font-mono text-xs uppercase tracking-widest">Load More</span>
            <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-accent/10">
              <ArrowRight size={14} className="rotate-90 group-hover:translate-y-1 transition-transform" />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
