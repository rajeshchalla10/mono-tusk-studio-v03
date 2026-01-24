
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const Contact: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const steps = [
    { id: 'name', label: 'IDENTITY_TAG', placeholder: 'ENTER_NAME' },
    { id: 'email', label: 'SIGNAL_LINK', placeholder: 'EMAIL_ADDRESS' },
    { id: 'message', label: 'PAYLOAD_DATA', placeholder: 'MESSAGE_TRANS' }
  ];

  return (
    <section ref={containerRef} className="min-h-screen py-40 md:py-64 bg-studio-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-32"
        >
          <span className="pixel-font text-studio-accent text-lg mb-4 block">TERMINAL_09</span>
          <h2 className="text-7xl md:text-9xl lg:text-[11rem] font-black serif italic tracking-tighter leading-[0.85] text-studio-offwhite mb-8">
            Signal the <br/> <span className="text-studio-accent">Forge.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + idx * 0.2 }}
              onMouseEnter={() => setActiveStep(idx)}
              className="group relative border-4 border-white/5 p-8 md:p-12 transition-all duration-300 hover:border-studio-accent/40 bg-studio-charcoal/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
                <div className="md:col-span-3">
                  <span className={`pixel-font text-xl transition-colors duration-300 ${activeStep === idx ? 'text-studio-accent' : 'text-studio-muted'}`}>
                    0{idx + 1} // {step.label}
                  </span>
                </div>
                
                <div className="md:col-span-9 relative">
                  <input 
                    type={step.id === 'email' ? 'email' : 'text'}
                    placeholder={step.placeholder}
                    className="w-full bg-transparent text-4xl sm:text-6xl md:text-7xl font-black serif italic tracking-tighter text-studio-offwhite outline-none placeholder:text-studio-charcoal focus:text-studio-accent transition-all duration-300"
                  />
                  {activeStep === idx && (
                    <motion.div 
                      layoutId="cursor"
                      className="absolute -right-8 top-1/2 -translate-y-1/2 pixel-font text-4xl text-studio-accent animate-pulse"
                    >
                      ◄
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-32 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <p className="pixel-font text-studio-muted text-sm md:max-w-sm italic">
            EXPECT_RESPONSE_LATENCY: 12_CYCLES. <br/>
            ALL_SIGNALS_ENCRYPTED_BY_TUSK_PROTOCOL.
          </p>
          
          <button className="pixel-border-accent w-full md:w-auto px-16 py-8 bg-studio-accent text-studio-black group active:scale-95 transition-all">
            <span className="pixel-font text-2xl font-black">SEND_SIGNAL</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
