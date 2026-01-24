
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Laurels from './components/Laurels';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Screenshots from './components/Screenshots';
import SecondaryCapture from './components/SecondaryCapture';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress, scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track scroll for the back to top visibility
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(loaderTimer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-studio-black text-studio-offwhite min-h-screen selection:bg-studio-accent selection:text-studio-black">
      {/* Global Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-studio-accent z-[150] origin-left"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col w-full"
        >
          <Navbar />
          <main>
            <Hero />
            <div id="about">
              <About />
            </div>
            <div id="works">
              <Works />
            </div>
            <Screenshots />
            <SecondaryCapture />
            <Laurels />
            <div id="social">
              <Social />
            </div>
            <div id="contact">
              <Contact />
            </div>
          </main>
          <Footer />

          {/* Smooth Back to Top Button */}
          <AnimatePresence>
            {isVisible && (
              <motion.button
                key="back-to-top"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[140] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 group"
              >
                {/* SVG Progress Circle */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    className="stroke-white/10 fill-studio-black/40 backdrop-blur-sm"
                    strokeWidth="2"
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    className="stroke-studio-accent fill-transparent"
                    strokeWidth="2"
                    strokeDasharray="1"
                    style={{ pathLength: scrollYProgress }}
                  />
                </svg>
                
                {/* Icon */}
                <span className="relative z-10 text-studio-accent text-xl md:text-2xl transition-transform duration-300 group-hover:-translate-y-1">
                  ↑
                </span>
                
                {/* Hover Label */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pixel-font text-[10px] text-studio-accent tracking-widest pointer-events-none whitespace-nowrap bg-studio-black/80 px-2 py-1 rounded">
                  ASCEND_CORE
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default App;
