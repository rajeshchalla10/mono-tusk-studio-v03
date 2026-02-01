
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const navLinks = [
    { name: 'LORE', href: '#about', id: '01', desc: 'THE_MANIFESTO' },
    { name: 'HERITAGE', href: '#works', id: '02', desc: 'SELECTED_RECORDS' },
    { name: 'RELICS', href: '#social', id: '03', desc: 'NETWORK_SYNC' },
    { name: 'FORGE', href: '#contact', id: '04', desc: 'UPLINK_STATION' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };
  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-[120] transition-all duration-500 ${
        scrolled 
        ? 'bg-studio-black/80 backdrop-blur-xl border-b border-white/5 py-4' 
        : 'bg-transparent py-8 md:py-12'
      } px-6 md:px-16 flex justify-between items-center`}>
        
        {/* Brand */}
        <div className="flex items-center space-x-4 group cursor-pointer">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-studio-accent flex items-center justify-center transition-transform duration-500 group-hover:rotate-90 shadow-[0_0_20px_rgba(236,156,26,0.3)]">
            <span className="text-studio-black font-black text-xl md:text-2xl serif italic">P</span>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-xl md:text-3xl font-black tracking-tighter serif uppercase text-studio-offwhite group-hover:text-studio-accent transition-colors leading-none">
              PALM SUGAR
            </a>
            <span className="pixel-font text-[8px] text-studio-accent/40 tracking-[0.3em] mt-1 hidden sm:block">HERITAGE_STUDIO</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-12 items-end">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="group relative flex flex-col items-center">
              <span className="pixel-font text-[9px] text-studio-accent/40 mb-1">{link.id}</span>
              <span className="pixel-font text-base tracking-ultra text-studio-offwhite/60 group-hover:text-studio-offwhite transition-colors">
                {link.name}
              </span>
              <motion.div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-studio-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          
          {/* UPLINK Button with matching alignment structure */}
          <div className="flex flex-col items-center">
             <span className="h-[10px] mb-1 block" aria-hidden="true" /> {/* Spacer to match link.id height */}
             <button className="border border-studio-accent/30 px-6 py-1.5 hover:bg-studio-accent hover:text-studio-black transition-all pixel-font text-[11px] text-studio-accent font-bold tracking-widest relative overflow-hidden group/btn active:scale-95">
               <span className="relative z-10">UPLINK</span>
               <div className="absolute inset-0 bg-studio-accent opacity-0 group-hover/btn:opacity-10 transition-opacity" />
             </button>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="lg:hidden flex flex-col items-center justify-center w-12 h-12 gap-1.5 focus:outline-none bg-studio-charcoal/40 backdrop-blur-md rounded-full border border-white/10 active:scale-90 transition-transform"
        >
          <motion.span 
            animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-studio-accent block origin-center"
          />
          <motion.span 
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            className="w-6 h-0.5 bg-studio-offwhite block"
          />
          <motion.span 
            animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-studio-accent block origin-center"
          />
        </button>
      </nav>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-studio-black z-[110] flex flex-col pt-32 pb-12 px-8"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-studio-accent/5 to-transparent pointer-events-none" />

            <div className="flex flex-col flex-grow justify-center gap-6 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  onClick={() => setMenuOpen(false)}
                  className="group block"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="pixel-font text-sm text-studio-accent/30">{link.id}</span>
                    <span className="text-5xl sm:text-7xl font-black serif uppercase italic text-studio-offwhite group-hover:text-studio-accent transition-all duration-300 transform group-hover:translate-x-4">
                      {link.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-auto border-t border-white/10 pt-10 flex flex-col gap-6 relative z-10"
            >
              <button 
                onClick={() => setMenuOpen(false)}
                className="w-full bg-studio-accent py-5 text-studio-black font-black pixel-font text-xl hover:bg-studio-offwhite transition-colors"
              >
                CLOSE_TERMINAL
              </button>
              <div className="flex justify-between items-center text-[10px] pixel-font text-studio-muted tracking-widest">
                <span>SIGNAL_STRENGTH: 99%</span>
                <span>BENGALURU_OPS</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;