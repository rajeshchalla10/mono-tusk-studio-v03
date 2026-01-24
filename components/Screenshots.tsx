
import React from 'react';
import { motion } from 'framer-motion';

const Screenshots: React.FC = () => {
  const images = [
    {
      src: "/images/entrant-amaze.png",
      caption: "ENV_STATION_01",
      coord: "BLR_SECTOR_7",
    },
    {
      src: "/images/entrant-igf.png",
      caption: "COMBAT_CAM_X",
      coord: "VOD_ZONE",
    }
  ];

  return (
    <section className="bg-studio-black py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-studio-accent text-[10px] font-black tracking-ultra uppercase block">Direct Feed</span>
              <div className="w-8 h-[1px] bg-studio-accent/30" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black serif italic tracking-tighter leading-none text-studio-offwhite">
              In-Engine <br/><span className="text-studio-accent text-glow">Capture.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:max-w-xs text-studio-muted text-sm italic border-l border-studio-accent/50 pl-6"
          >
            Raw telemetry fragments. Containers wrapped to original frame dimensions for absolute synchronization.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start justify-items-center">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative inline-block max-w-full"
            >
              {/* Refined bordering effect to match Atmospheric Projections */}
              <div className="relative border-4 border-studio-charcoal bg-studio-charcoal p-1 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 z-20 pointer-events-none opacity-10 scanline" />
                
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-auto block brightness-[0.85] group-hover:brightness-[1] group-hover:scale-[1.02] transition-all duration-700 ease-out"
                />

                <div className="absolute inset-0 z-30 pointer-events-none">
                  {/* Vertical Center Brackets from Atmospheric Projections */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-studio-accent/50" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-studio-accent/50" />
                  
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="pixel-font text-[8px] text-studio-accent bg-studio-black/80 px-2 py-0.5 tracking-[0.2em] border border-studio-accent/30">
                        REC_SYNC_STABLE
                     </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-start px-1">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-widest text-studio-accent uppercase">
                    {img.caption}
                  </span>
                  <span className="pixel-font text-[8px] text-studio-muted">COORD: {img.coord}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-studio-accent animate-pulse" />
                  <span className="pixel-font text-[8px] text-studio-muted">V_0{idx + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 border-t border-white/5 pt-8">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-20">
                <div className="flex flex-col items-center">
                    <span className="pixel-font text-[7px] tracking-widest text-studio-muted">BUFFER_TYPE</span>
                    <span className="pixel-font text-[9px] text-studio-offwhite">FRAME_WRAPPED_0x24</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="pixel-font text-[7px] tracking-widest text-studio-muted">SAMPLING</span>
                    <span className="pixel-font text-[9px] text-studio-offwhite">NATIVE_PIXEL_ALIGN</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="pixel-font text-[7px] tracking-widest text-studio-muted">LATENCY</span>
                    <span className="pixel-font text-[9px] text-studio-offwhite">0.02ms_TRUE</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
