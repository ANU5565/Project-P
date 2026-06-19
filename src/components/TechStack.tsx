"use client";

import { motion } from "framer-motion";

const TECH_GROUPS = [
  {
    category: "AI & ML",
    items: ["LangChain", "OpenAI", "Claude", "Hugging Face", "Pinecone", "PyTorch", "TensorFlow"]
  },
  {
    category: "Automation",
    items: ["n8n", "Make", "Zapier", "Selenium", "Puppeteer", "Playwright"]
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "Go", "SQL"]
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "FastAPI", "Express", "Tailwind CSS"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "AWS", "Azure", "GitHub Actions", "Vercel"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"]
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative z-10 overflow-hidden bg-secondary/50 border-y border-white/5">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 bg-accent animate-pulse" />
          <h2 className="text-xl font-mono text-white/80 uppercase tracking-widest">System Architecture & Capabilities</h2>
        </div>
      </div>

      <div className="space-y-8 relative">
        {/* Left and Right Fade for Marquee effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {TECH_GROUPS.map((group, index) => {
          const direction = index % 2 === 0 ? 1 : -1;
          return (
            <div key={group.category} className="flex relative">
              <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 hidden md:block">
                <span className="text-xs font-mono text-accent/80 uppercase tracking-widest bg-background/80 px-2 py-1 border border-accent/20 rounded backdrop-blur-sm">
                  {group.category}
                </span>
              </div>
              
              <motion.div
                initial={{ x: direction > 0 ? "0%" : "-50%" }}
                animate={{ x: direction > 0 ? "-50%" : "0%" }}
                transition={{ 
                  duration: 40 + (index * 5), // Varying speeds
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex flex-none gap-4 pl-[50vw] md:pl-64"
              >
                {[...group.items, ...group.items, ...group.items, ...group.items].map((item, i) => (
                  <div 
                    key={`${item}-${i}`} 
                    className="flex items-center justify-center px-6 py-3 glass-card bg-white/5 hover:bg-white/10 hover:border-accent/50 transition-colors whitespace-nowrap group cursor-default"
                  >
                    <span className="text-sm font-space text-white/70 group-hover:text-white group-hover:text-glow transition-all">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
