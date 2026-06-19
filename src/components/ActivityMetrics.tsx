"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { GitGraph, Code2, Star, GitCommit, Target, Workflow, Clock, LayoutGrid } from "lucide-react";

const METRICS = [
  { label: "GitHub Contributions", value: 500, icon: GitGraph, color: "text-accent" },
  { label: "Highest Streak", value: 80, icon: Target, color: "text-white" },
  { label: "Repositories", value: 40, icon: Code2, color: "text-accent" },
  { label: "Stars", value: 20, icon: Star, color: "text-white" },
  { label: "Commits", value: 500, icon: GitCommit, color: "text-accent" },
  { label: "Projects Completed", value: 45, icon: LayoutGrid, color: "text-white" },
  { label: "AI Workflows Built", value: 20, icon: Workflow, color: "text-accent" },
  { label: "Automation Hours Saved", value: 1500, icon: Clock, color: "text-white" },
];

function Counter({ from, to }: { from: number, to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toLocaleString();
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function ActivityMetrics() {
  const containerRef = useRef(null);
  
  return (
    <section id="metrics" className="py-24 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/50 border border-white/10 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-white/60">SYSTEM.ANALYTICS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-space font-bold tracking-tight text-white mb-4">ACTIVITY METRICS</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {METRICS.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 relative overflow-hidden group hover:bg-white/[0.08] transition-colors"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-2 rounded bg-white/5 border border-white/10 ${metric.color}`}>
                    <Icon size={20} />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl md:text-4xl font-space font-bold text-white mb-2">
                    <Counter from={0} to={metric.value} />
                    <span className="text-accent ml-1">+</span>
                  </h3>
                  <p className="text-xs md:text-sm font-mono text-white/50">{metric.label}</p>
                </div>

                {/* Decorative background grid in card */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-image:radial-gradient(ellipse_at_center,black,transparent)" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
