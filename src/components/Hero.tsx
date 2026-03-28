import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Cpu, Zap, Shield, Globe } from 'lucide-react';
import { PRODUCTS, Product } from '../constants';
import { Magnetic } from './Magnetic';

interface HeroProps {
  onProductClick: (product: Product) => void;
}

export const Hero = ({ onProductClick }: HeroProps) => {
  const featured = PRODUCTS[0];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={containerRef} className="relative pt-32 pb-12 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Beast Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="absolute inset-0 w-full h-full"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2560&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
            style={{ filter: 'brightness(0.2) contrast(1.5) saturate(2)' }}
          >
            <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-ink/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-ink opacity-80" />
          <div className="absolute inset-0 bg-brand/10 mix-blend-color" />
        </motion.div>
      </div>

      {/* Parallax Background Text */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[30vw] font-black italic text-brand/5 tracking-tighter leading-none uppercase blur-[2px] group-hover:blur-none transition-all duration-1000">
          BEAST
        </span>
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { Icon: Cpu, top: '20%', left: '10%', delay: 0 },
          { Icon: Zap, top: '60%', left: '5%', delay: 1 },
          { Icon: Shield, top: '15%', left: '85%', delay: 2 },
          { Icon: Globe, top: '75%', left: '90%', delay: 3 },
        ].map(({ Icon, top, left, delay }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: delay + 1 }}
            style={{ top, left }}
            className="absolute"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 5 + i, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Icon size={120} className="text-ink drop-shadow-[0_0_20px_rgba(0,0,0,0.1)]" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    animate={{ width: [0, 48, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-[1px] bg-brand" 
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand">
                    Elite Systems Deployment
                  </span>
                </div>
                
                <h1 className="text-[20vw] lg:text-[18vw] font-black tracking-[-0.05em] leading-[0.7] uppercase italic mb-8 overflow-hidden relative mix-blend-difference text-white">
                  <motion.span 
                    initial={{ y: "100%", skewY: 10 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                    className="block relative group"
                  >
                    UNLEASH
                    <motion.span 
                      animate={{ 
                        x: [-5, 5, -2, 0], 
                        opacity: [0, 0.8, 0],
                        skew: [0, 20, -20, 0]
                      }}
                      transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 4 }}
                      className="absolute inset-0 text-brand -z-10 translate-x-2 mix-blend-screen"
                    >
                      UNLEASH
                    </motion.span>
                  </motion.span>
                  <motion.span 
                    initial={{ y: "100%", skewY: 10 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                    className="block text-brand relative group"
                  >
                    THE BEAST.
                    <motion.span 
                      animate={{ 
                        x: [5, -5, 2, 0], 
                        opacity: [0, 0.8, 0],
                        clipPath: [
                          "inset(0 0 0 0)",
                          "inset(20% 0 50% 0)",
                          "inset(80% 0 0% 0)",
                          "inset(0 0 0 0)"
                        ]
                      }}
                      transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3.5 }}
                      className="absolute inset-0 text-white -z-10 -translate-x-2 mix-blend-overlay"
                    >
                      THE BEAST.
                    </motion.span>
                  </motion.span>
                </h1>
                
                <div className="flex flex-col md:flex-row gap-8 md:items-center relative z-20">
                  <p className="text-xl text-gray-300 max-w-md leading-relaxed font-medium mix-blend-difference">
                    Your ultimate destination for high-performance gaming hardware. Engineered for the <span className="text-brand font-black italic">Elite 1%</span>.
                  </p>
                  <div className="h-12 w-[1px] bg-brand/50 hidden md:block" />
                  <div className="flex flex-col mix-blend-difference text-white">
                    <span className="text-serif italic text-2xl">System Status</span>
                    <span className="font-black uppercase tracking-tighter text-4xl text-brand animate-pulse">OPTIMAL</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              style={{ rotate }}
              className="bg-ink p-8 rounded-[2.5rem] relative group cursor-pointer overflow-hidden shadow-[0_0_40px_rgba(193,255,0,0.1)] hover:shadow-[0_0_60px_rgba(193,255,0,0.2)] border border-white/10 hover:border-brand/50 transition-all"
              onClick={() => onProductClick(featured)}
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div>
                  <h3 className="font-bold text-lg leading-tight text-white">{featured.name}</h3>
                  <p className="text-sm text-brand font-bold uppercase tracking-widest">{featured.category}</p>
                </div>
                <Magnetic strength={0.2}>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-brand group-hover:text-ink transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(193,255,0,0.4)] border border-white/20 group-hover:border-transparent">
                    <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </Magnetic>
              </div>
              <div className="relative h-48 flex items-center justify-center z-10 bg-white/5 rounded-2xl p-4">
                <motion.img
                  layoutId={`product-image-${featured.id}`}
                  src={featured.image}
                  alt={featured.name}
                  animate={{ 
                    y: [0, -10, 0],
                    filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-8 flex justify-between items-center relative z-10">
                <span className="text-2xl font-black italic text-white group-hover:text-brand transition-colors">R {featured.price.toLocaleString()}</span>
                <div className="flex flex-col items-end">
                  <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-gray-500">Status</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand animate-pulse">Elite Asset</span>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>

            <Magnetic strength={0.1}>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="w-full bg-brand text-ink py-6 rounded-full font-black italic tracking-tighter uppercase flex items-center justify-center gap-3 hover:bg-white transition-all group relative overflow-hidden shadow-[0_0_30px_rgba(193,255,0,0.2)] hover:shadow-[0_0_50px_rgba(193,255,0,0.4)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-no-repeat bg-[position:-100%_0,0_0] group-hover:animate-[shine_1s_ease-in-out]" />
                <Zap size={20} className="group-hover:scale-125 transition-transform relative z-10" />
                <span className="relative z-10">Explore Collection</span>
              </motion.button>
            </Magnetic>
          </div>
        </div>

        {/* Dynamic Stats Rail */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 relative z-20">
          {[
            { label: 'Inventory', value: '500+' },
            { label: 'Experience', value: '12 Yrs' },
            { label: 'Support', value: '24/7' },
            { label: 'Delivery', value: 'Fast' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="group cursor-default"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 group-hover:text-brand transition-colors">{stat.label}</p>
              <p className="text-3xl font-black italic text-white group-hover:scale-110 transition-transform origin-left">{stat.value}</p>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '2rem' }}
                transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                className="h-[2px] bg-brand mt-2"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
