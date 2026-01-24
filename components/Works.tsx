
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Saffron Echoes",
    category: "STORY_NODE",
    img: "/images/game01.png"
  },
  {
    title: "Shattered Silk",
    category: "COMBAT_CORE",
    img: "/images/game02.png"
  },
  {
    title: "The Gilded Loom",
    category: "ENV_VISUALS",
    img: "/images/game03.png"
  }
];

const Works: React.FC = () => {
  return (
    <section className="py-32 bg-studio-charcoal">
      <div className="px-6 mb-20 max-w-7xl mx-auto flex justify-between items-end">
        <div>
          <span className="pixel-font text-studio-accent text-lg mb-4 block">LEVEL_SELECT</span>
          <h2 className="text-6xl md:text-8xl font-black serif italic tracking-tighter"> In-Game <br/> <span className="text-studio-accent">Glimpses.</span></h2>
        </div>
        <div className="hidden md:block pixel-font text-studio-muted text-sm text-right">
          TOTAL_RECORDS: 03<br/>
          SYNC_STATUS: STABLE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t-4 border-b-4 border-studio-black">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group relative aspect-[4/5] overflow-hidden border-r-4 border-studio-black cursor-pointer"
          >
            <div className="absolute inset-0 dither-overlay opacity-30 z-10 pointer-events-none" />
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-[0.8] group-hover:scale-105 transition-all duration-700 ease-out"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-12 left-12 z-20 transition-transform duration-500 group-hover:translate-x-2">
              <span className="pixel-font text-studio-accent text-sm mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.category}</span>
              <h3 className="text-4xl font-bold serif italic text-studio-offwhite">{project.title}</h3>
            </div>
            
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="pixel-font text-studio-accent text-[10px] tracking-widest">[ VIEW_PROJECT ]</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Works;
