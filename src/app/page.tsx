"use client";

import { useState, useEffect } from "react";
import BootSequence from "@/components/BootSequence";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import ActivityMetrics from "@/components/ActivityMetrics";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  // Use Lenis smooth scroll once boot is complete
  useEffect(() => {
    if (!bootComplete) {
      return;
    }

    let cancelled = false;
    let frameId: number | undefined;
    let destroyLenis: (() => void) | undefined;

    import("lenis").then((LenisModule) => {
      if (cancelled) {
        return;
      }

      const Lenis = LenisModule.default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      };

      frameId = requestAnimationFrame(raf);
      destroyLenis = () => lenis.destroy();
    });

    return () => {
      cancelled = true;
      if (frameId !== undefined) {
        cancelAnimationFrame(frameId);
      }
      destroyLenis?.();
    };
  }, [bootComplete]);

  return (
    <>
      <CustomCursor />
      
      {!bootComplete && (
        <BootSequence onComplete={() => setBootComplete(true)} />
      )}

      {/* We keep the rest mounted but hidden or opacity 0 to allow pre-rendering if needed, 
          but mounting after bootComplete is also fine for the JARVIS effect. */}
      {bootComplete && (
        <div className="animate-in fade-in duration-1000">
          <ParticleBackground />
          <Navigation />
          <main className="flex min-h-screen flex-col relative z-10">
            <Hero />
            <Ecosystem />
            <ActivityMetrics />
            <Projects />
            <TechStack />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
