
import React from 'react';
import { motion } from 'framer-motion';

const Social: React.FC = () => {
  const channels = [
    { name: 'Discord', count: '12K Initiates', color: 'bg-[#5865F2]', status: 'ONLINE' },
    { name: 'X / Twitter', count: '45K Followers', color: 'bg-studio-accent', status: 'BROADCASTING' },
    { name: 'Instagram', count: '10K Watchers', color: 'bg-[#E1306C]', status: 'STREAMING' },
    { name: 'YouTube', count: '8K Voyeurs', color: 'bg-[#FF0000]', status: 'RECORDING' }
  ];

  return (
    <section className="py-32 md:py-64 px-8 md:px-16 bg-studio-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(236,156,26,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-[1px] bg-studio-accent" />
                <span className="text-[11px] uppercase tracking-ultra text-studio-accent font-black block">Join the Forge</span>
              </div>
              <h2 className="text-7xl md:text-9xl font-black serif leading-[0.8] tracking-tighter italic text-studio-offwhite mb-12">
                The <br/> <span className="text-studio-accent text-glow">Collective.</span>
              </h2>
              <p className="text-2xl text-studio-muted font-light max-w-sm italic leading-relaxed border-l border-studio-accent pl-8">
                Exclusive devlogs, heritage studies, and early-access transmissions for the dedicated initiates.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="border-t border-white/10">
              {channels.map((item, idx) => (
                <motion.a 
                  key={idx}
                  href="#"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-center justify-between py-12 border-b border-white/10 relative overflow-hidden transition-all duration-500 hover:px-8"
                >
                  {/* Subtle Color Background on Hover */}
                  <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="flex items-center space-x-12 relative z-10">
                    <span className="text-xs font-mono text-studio-accent group-hover:text-studio-offwhite transition-colors">0{idx + 1}</span>
                    <div>
                      <h3 className="text-4xl md:text-7xl font-black serif group-hover:italic transition-all uppercase text-studio-offwhite">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-studio-accent animate-pulse" />
                        <span className="text-[8px] font-mono text-studio-accent tracking-widest">{item.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-10 relative z-10">
                    <span className="hidden md:block text-[10px] font-black uppercase tracking-ultra text-studio-muted group-hover:text-studio-offwhite transition-colors">
                      {item.count}
                    </span>
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-studio-accent group-hover:border-studio-accent transition-all duration-500">
                      <svg className="w-6 h-6 text-studio-offwhite group-hover:text-studio-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
