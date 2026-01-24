
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const scale = useTransform(springScroll, [0, 1], [1, 1.15]);
  const opacity = useTransform(springScroll, [0, 0.8], [1, 0]);
  const yContent = useTransform(springScroll, [0, 1], [0, 100]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-studio-black">
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-studio-black/20 to-studio-black z-10" />
        <div className="absolute inset-0 dither-overlay opacity-30 z-0" />
        <img 
          src="/images/hero.png" 
          alt="Atmosphere"
          className="w-full h-full object-cover brightness-[0.25]"
        />
        <div className="scanline" />
      </motion.div>

      {/* Frame Border - Responsive */}
      <div className="absolute inset-4 md:inset-12 lg:inset-16 border-2 md:border-4 border-studio-accent/10 pointer-events-none z-20" />

      <motion.div 
        style={{ y: yContent }}
        className="relative z-30 text-center px-6 max-w-6xl"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="pixel-font text-base md:text-2xl tracking-[0.4em] text-studio-accent block mb-6 md:mb-10">
            - BHARAT // 1024 AD -
          </span>
          
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] mb-8 serif italic text-studio-offwhite">
            Palm <span className="text-studio-accent">Sugar</span>
          </h1>

          <p className="text-base sm:text-xl md:text-3xl font-light text-studio-offwhite/80 italic mb-10 md:mb-16 font-serif max-w-2xl mx-auto leading-relaxed">
            A pixelated odyssey into the <span className="text-studio-accent font-bold">Unwritten</span> stories of a golden age.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto pixel-border-accent px-10 py-5 bg-studio-accent text-studio-black font-black uppercase text-xs tracking-widest hover:bg-studio-offwhite active:scale-95 transition-all duration-300">
              Begin Journey
            </button>
            <a href="#about" className="pixel-font text-xs tracking-widest text-studio-offwhite/50 hover:text-studio-accent transition-colors py-2">
              [ ACCESS_MANIFESTO ]
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="pixel-font text-[8px] md:text-xs tracking-widest">SCROLL_DOWN</span>
        <div className="w-1 h-3 md:h-6 border border-studio-accent/30 flex justify-center">
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-0.5 h-1 bg-studio-accent" 
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
