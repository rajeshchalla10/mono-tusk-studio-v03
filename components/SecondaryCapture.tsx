
import React from 'react';
import { motion } from 'framer-motion';

const SecondaryCapture: React.FC = () => {
  const images = [
    {
      src: "/images/partof-gca.png",
      caption: "RUIN_SECTOR_B",
      coord: "HAMPI_RELICTS",
    },
    {
      src: "/images/partof-stpl.png",
      caption: "PADDY_FIELD_Z",
      coord: "WAYANAD_CORE",
    }
  ];

  return (
    <section className="bg-studio-black py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <div className="flex items-center justify-end gap-4 mb-4">
              <div className="w-8 h-[1px] bg-studio-accent/30" />
              <span className="text-studio-accent text-[10px] font-black tracking-ultra uppercase block">Biometry Data</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black serif italic tracking-tighter leading-none text-studio-offwhite">
              Atmospheric <br/><span className="text-studio-accent text-glow">Projections.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:max-w-xs text-studio-muted text-sm italic border-r border-studio-accent/50 pr-6 text-right md:text-left md:border-r-0 md:border-l md:pl-6"
          >
            Spatial memory buffers. Environmental textures mapped to legacy hardware constraints.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center justify-items-center">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              viewport={{ once: true }}
              className={`group relative inline-block max-w-full ${idx === 1 ? 'md:mt-12' : ''}`}
            >
              <div className="relative border-4 border-studio-charcoal bg-studio-charcoal p-1 shadow-2xl">
                <div className="absolute inset-0 z-20 pointer-events-none opacity-10 scanline" />
                
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-auto block brightness-[0.8] group-hover:brightness-[1] group-hover:scale-[1.01] transition-all duration-1000 ease-out"
               />

                <div className="absolute inset-0 z-30 pointer-events-none">
                  {/* Digital Framing Elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-studio-accent/50" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-studio-accent/50" />
                  
                  {/* Identification Tags */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="flex flex-col items-end">
                        <span className="pixel-font text-[9px] text-studio-accent bg-studio-black/80 px-2 py-0.5 mb-1">
                           GEO_SYNC_LOCKED
                        </span>
                        <span className="pixel-font text-[7px] text-studio-muted bg-studio-black/80 px-2 py-0.5">
                           BUFFER_ID: {Math.random().toString(16).slice(2, 8).toUpperCase()}
                        </span>
                     </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col px-1">
                <div className="flex items-center gap-3 mb-2">
                   <div className="h-px flex-grow bg-white/10" />
                   <span className="text-[10px] font-black tracking-widest text-studio-accent uppercase">
                    {img.caption}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="pixel-font text-[9px] text-studio-muted italic">{img.coord}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`w-1 h-1 ${idx === 0 ? 'bg-studio-accent/40' : 'bg-studio-muted/20'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondaryCapture;
