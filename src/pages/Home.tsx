import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Hero } from '../components/Hero';
import { BentoGrid } from '../components/BentoGrid';

export const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <main>
      <Hero />
      
      {/* Scrolling Text Marquee */}
      <div className="py-12 overflow-hidden bg-ink text-white whitespace-nowrap relative">
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-ink z-10 pointer-events-none" />
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 text-6xl font-black uppercase tracking-tighter opacity-20"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="hover:text-brand transition-colors duration-300 cursor-default">
              Next Gen Performance • Ultimate Gaming • Premium Components • 
            </span>
          ))}
        </motion.div>
      </div>

      <BentoGrid />

      {/* Immersive Section Inspired by Drop Edition */}
      <section ref={containerRef} className="py-32 px-6 bg-ink text-white overflow-hidden relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div 
            style={{ opacity, y }}
            className="text-center mb-24"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-7xl md:text-[12rem] font-black tracking-tighter leading-none mb-8 relative inline-block"
            >
              APEX<br /><span className="text-brand relative z-10">PRO</span>
              <motion.div 
                className="absolute inset-0 bg-brand/20 blur-3xl -z-10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto text-xl md:text-2xl font-light"
            >
              Engineered for those who demand perfection. The Apex Pro series redefines what's possible in high-end gaming.
            </motion.p>
          </motion.div>

          <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center perspective-[2000px]">
            <motion.div 
              style={{ scale }}
              className="w-full max-w-5xl aspect-video rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(193,255,0,0.15)] relative group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent z-10"
              />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=2000&auto=format&fit=crop" 
                alt="Apex Pro" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Interactive Overlay Elements */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-24 h-24 rounded-full bg-brand/90 text-ink font-bold tracking-widest uppercase text-sm flex items-center justify-center backdrop-blur-md hover:bg-white transition-colors duration-300"
                >
                  Explore
                </motion.button>
              </div>
            </motion.div>
            
            {/* Floating Spec Tags with Parallax */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [50, -150]) }}
              className="absolute top-10 md:top-20 left-4 md:left-10 glass text-ink px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base shadow-xl backdrop-blur-xl border border-white/20"
            >
              RTX 4090
            </motion.div>
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
              className="absolute bottom-20 md:bottom-40 right-4 md:right-0 glass text-ink px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base shadow-xl backdrop-blur-xl border border-white/20"
            >
              64GB DDR5 RAM
            </motion.div>
          </div>
        </div>

        {/* Dynamic Background Glow */}
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-brand/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" 
        />
      </section>
    </main>
  );
};
