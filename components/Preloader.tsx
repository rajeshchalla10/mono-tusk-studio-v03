
import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "circIn" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-studio-black"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="flex items-center space-x-8">
            <img 
    src="/images/logo-icon.png"   // <-- path to your icon
    alt="Mono Tusk Studios Icon" 
    className="w-24 h-24 pixel-border-accent bg-studio-accent p-2"
  />
            <h1 className="text-5xl md:text-8xl font-black tracking-[-0.05em] text-studio-offwhite serif">
              MONO TUSK <span className="text-studio-accent">STUDIOS</span>
            </h1>
          </div>
        </motion.div>
        
        <div className="mt-16 w-64 md:w-96 h-4 bg-studio-charcoal/50 border-2 border-white/10 relative overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "0%" }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute top-0 bottom-0 w-full bg-studio-accent dither-overlay opacity-80"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col items-center"
        >
          <p className="pixel-font text-studio-accent/60 text-lg tracking-widest">
            INITIALIZING_HERITAGE_CORE...
          </p>
          <span className="pixel-font text-studio-muted mt-2 text-xs">V1.024.AZUKI</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
