
import React from 'react';
import { motion } from 'framer-motion';

const relics = [
  { id: 1, src: "/images/showcased-igv.png", code: "ARC_001" },
  { id: 2, src: "/images/showcased-igdc.png", code: "ARC_002" },
  { id: 3, src: "/images/showcased-tokyo.png", code: "ARC_003" },
  { id: 4, src: "/images/showcased-gddc.png", code: "ARC_004" },
  { id: 5, src: "/images/showcased-startup.png", code: "ARC_005" },
  { id: 6, src: "/images/showcased-gdc.png", code: "ARC_006" },
  { id: 7, src: "/images/showcased-gamingcon.png", code: "ARC_007" },
];
const Laurels: React.FC = () => {
  return (
    <section className="bg-studio-black py-40 border-t-4 border-studio-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div>
            <span className="pixel-font text-studio-accent text-lg mb-4 block">RELIC_DATABASE</span>
            <h2 className="text-6xl md:text-8xl font-black serif italic tracking-tighter text-studio-offwhite">
              Validated <br/><span className="text-studio-accent text-glow">Relics.</span>
            </h2>
          </div>
          <p className="pixel-font text-studio-muted text-sm md:max-w-xs leading-relaxed border-l-4 border-studio-accent/20 pl-8 italic">
            Visual fragments captured from the deep architecture of the Palm Sugar universe. 4px alignment synchronization active.
          </p>
        </div>

        {/* 4px Gap (gap-1) and Centered Flex Layout */}
        <div className="flex flex-wrap justify-center gap-1 items-start">
          {relics.map((relic, idx) => (
            <motion.div
              key={relic.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                zIndex: 40,
                transition: { duration: 0.3 }
              }}
              className="group relative inline-block w-full sm:w-[calc(50%-2px)] lg:w-[calc(33.33%-4px)]"
            >
              {/* Refined bordering effect to match Atmospheric Projections */}
              <div className="relative border-4 border-studio-charcoal bg-studio-charcoal p-1 shadow-2xl overflow-hidden">
                {/* Unified scanline effect */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-10 scanline" />
                
                <img 
                  src={relic.src} 
                  alt={`Relic ${relic.id}`}
                  className="w-full h-auto block brightness-[0.7] group-hover:brightness-100 transition-all duration-700"
                />
                
                {/* HUD Elements Wrapped to match Atmospheric Projections signature */}
                <div className="absolute inset-0 z-30 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-studio-accent/50" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-studio-accent/50" />
                  
                  {/* Sync status tag */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="pixel-font text-[8px] text-studio-accent bg-studio-black/90 px-2 py-0.5 tracking-widest whitespace-nowrap border border-studio-accent/20">
                      SYNC_VALIDATED
                    </span>
                  </div>
                </div>
              </div>
              
              {/* External Data Label - Reduced margin to keep items tight */}
              <div className="mt-2 mb-4 flex flex-col px-2 border-l border-studio-accent/20 pl-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="pixel-font text-[10px] text-studio-accent tracking-tighter">
                    {relic.code}
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-studio-accent animate-pulse" />
                    <div className="w-1 h-1 bg-studio-accent/20" />
                  </div>
                </div>
                <div className="flex justify-between items-center text-[8px] text-studio-muted pixel-font tracking-widest">
                  <span>REF_0x0{idx + 1}</span>
                  <span className="italic">STABLE</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center gap-4">
          <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-studio-accent/30 to-transparent" />
          <div className="px-8 py-3 bg-studio-charcoal/30 border border-white/5 pixel-font text-studio-muted text-[10px] tracking-widest">
            [ INFRASTRUCTURE_LOAD: NOMINAL // FRAGMENT_COUNT: 07 ]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Laurels;
