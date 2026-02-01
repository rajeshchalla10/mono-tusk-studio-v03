
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'STATIONS',
      items: [
        { name: 'Lore Archive', href: '#about' },
        { name: 'Heritage Works', href: '#works' },
        { name: 'The Collective', href: '#social' },
        { name: 'Forge Uplink', href: '#contact' },
      ],
    },
    {
      title: 'PROTOCOLS',
      items: [
        { name: 'Privacy Seal', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Licensing', href: '#' },
        { name: 'Cookies', href: '#' },
      ],
    },
    {
      title: 'CONNECT',
      items: [
        { name: 'Discord', href: '#' },
        { name: 'Twitter / X', href: '#' },
        { name: 'Instagram', href: '#' },
        { name: 'LinkedIn', href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative bg-studio-black border-t-[8px] border-studio-charcoal pt-40 pb-20 overflow-hidden">
      {/* Massive Background Watermark */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[25vw] font-black serif italic tracking-tighter leading-none whitespace-nowrap">
          PALM SUGAR
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          {/* Logo and Brand Statement */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center space-x-6 mb-12 group cursor-pointer">
              <div className="w-20 h-20 pixel-border-accent bg-studio-accent flex items-center justify-center transition-all duration-700 group-hover:rotate-45">
                <span className="text-studio-black font-black text-4xl serif italic">M</span>
              </div>
              <div>
                <h3 className="text-5xl font-black serif uppercase tracking-tighter text-studio-offwhite leading-none">
                  PALM SUGAR
                </h3>
                <span className="pixel-font text-[10px] text-studio-accent tracking-[0.5em] block mt-2">
                  INDIAN_HERITAGE_PRESERVED
                </span>
              </div>
            </div>
            <p className="text-2xl text-studio-muted font-light serif italic leading-relaxed max-w-sm mb-12">
              "We forge digital relics from the fragments of our shared history. A ritual in every pixel."
            </p>
            <div className="flex flex-wrap gap-4">
              {['BENGALURU', '12.97° N', '77.59° E', 'V1.024'].map((tag, idx) => (
                <div key={idx} className="px-4 py-2 border border-white/5 bg-white/[0.02] pixel-font text-[10px] text-studio-accent/50 tracking-widest hover:text-studio-accent hover:border-studio-accent/30 transition-all">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-studio-accent" />
                  <h4 className="pixel-font text-sm font-black tracking-widest text-studio-accent">
                    {column.title}
                  </h4>
                </div>
                <ul className="space-y-6">
                  {column.items.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-2xl font-black serif italic text-studio-offwhite/50 hover:text-studio-accent hover:translate-x-3 transition-all inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Ledger / Bottom Bar */}
        <div className="border-t-2 border-white/5 pt-16 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-2">
            <span className="pixel-font text-[9px] text-studio-muted tracking-widest uppercase">Encryption_Signal</span>
            <div className="flex items-center gap-6">
              <span className="text-6xl font-black text-studio-offwhite serif italic opacity-10">
                {new Date().getFullYear()}
              </span>
              <div className="flex flex-col">
                <span className="pixel-font text-sm text-studio-accent animate-pulse">● BROADCASTING_STABLE</span>
                <p className="text-[10px] font-mono text-studio-muted mt-1 opacity-40 uppercase">
                  PALM SUGAR (PVT) LTD. // All Rights Reserved
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end text-right gap-6">
            <div className="flex gap-4">
              {['◈', '▣', '◢', '◆'].map((sym, i) => (
                <div key={i} className="w-12 h-12 border border-white/10 flex items-center justify-center text-studio-accent/20 hover:text-studio-accent hover:border-studio-accent transition-all cursor-crosshair">
                  {sym}
                </div>
              ))}
            </div>
            <div className="pixel-font text-[10px] text-studio-muted/40 uppercase leading-relaxed max-w-[200px]">
              Memory_Buffer: Cleared<br/>
              Identity_Relic: Stored<br/>
              Session_End: 0x0000FF
            </div>
          </div>
        </div>
      </div>

      {/* Dithered Overlay Vignette */}
      <div className="absolute inset-0 dither-overlay opacity-[0.03] pointer-events-none" />
    </footer>
  );
};

export default Footer;
