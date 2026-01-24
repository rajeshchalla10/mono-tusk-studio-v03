
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const storyLines = [
    "In the heart of the Tusk, we heard a whisper.",
    "Not of the future, but of a thousand years past.",
    "Palm Sugar isn't just a game; it is a digital ritual.",
    "A brutal dance of blades, legacy, and shadows."
  ];

  return (
    <section ref={ref} className="min-h-screen py-40 bg-studio-black flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* RPG Dialogue Box Feel */}
        <div className="relative p-12 md:p-20 border-4 border-white/5 bg-studio-charcoal/30 backdrop-blur-md">
          {/* Decorative Corner Ornaments */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-studio-accent" />
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-studio-accent" />
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-studio-accent" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-studio-accent" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="flex items-center gap-4 mb-16"
          >
            <span className="pixel-font text-studio-accent text-lg">The Sacred Whisper</span>
            <div className="flex-grow h-px bg-studio-accent/20" />
          </motion.div>

          <div className="space-y-6">
            {storyLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.h2 
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: idx * 0.4 }}
                  className="text-3xl sm:text-5xl md:text-7xl font-black serif italic tracking-tighter leading-tight"
                >
                  {line}
                </motion.h2>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2 }}
            className="mt-20 flex items-center justify-between"
          >
            <div className="max-w-md border-l-2 border-studio-accent/40 pl-8">
              <p className="text-xl text-studio-muted leading-relaxed font-light italic">
                Mono Tusk Studios: Forging digital relics from Indian heritage.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="pixel-font text-studio-accent text-2xl animate-pulse">▼</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
