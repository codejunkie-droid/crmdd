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
            className="w-full h-full object-cover opacity-25 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
          >
            <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-white" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-60" />
          <div className="absolute inset-0 bg-brand/5 mix-blend-color" />
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
                
                <h1 className="text-[12vw] lg:text-[10vw] font-black tracking-tighter leading-[0.8] uppercase italic mb-8 overflow-hidden relative">
                  <motion.span 
                    initial={{ y: "100%", skewY: 10 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                    className="block relative group"
                  >
                    Next
                    <motion.span 
                      animate={{ 
                        x: [-2, 2, -1, 0], 
                        opacity: [0, 0.5, 0],
                        skew: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute inset-0 text-brand/30 -z-10 translate-x-1"
                    >
                      Next
                    </motion.span>
                    <motion.span 
                      animate={{ 
                        x: [2, -2, 1, 0], 
                        opacity: [0, 0.3, 0],
                        skew: [0, -10, 10, 0]
                      }}
                      transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3.1 }}
                      className="absolute inset-0 text-ink/20 -z-10 -translate-x-1"
                    >
                      Next
                    </motion.span>
                  </motion.span>
                  <motion.span 
                    initial={{ y: "100%", skewY: 10 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                    className="block text-brand drop-shadow-[0_0_30px_rgba(255,99,33,0.3)] relative group"
                  >
                    Level.
                    <motion.span 
                      animate={{ 
                        x: [2, -2, 1, 0], 
                        opacity: [0, 0.3, 0],
                        clipPath: [
                          "inset(0 0 0 0)",
                          "inset(20% 0 50% 0)",
                          "inset(80% 0 0% 0)",
                          "inset(0 0 0 0)"
                        ]
                      }}
                      transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2.5 }}
                      className="absolute inset-0 text-ink/20 -z-10 -translate-x-1"
                    >
                      Level.
                    </motion.span>
                    <motion.span 
                      animate={{ 
                        x: [-2, 2, -1, 0], 
                        opacity: [0, 0.2, 0],
                        clipPath: [
                          "inset(0 0 0 0)",
                          "inset(50% 0 20% 0)",
                          "inset(0% 0 80% 0)",
                          "inset(0 0 0 0)"
                        ]
                      }}
                      transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2.6 }}
                      className="absolute inset-0 text-brand/20 -z-10 translate-x-1"
                    >
                      Level.
                    </motion.span>
                  </motion.span>
                </h1>
                
                <div className="flex flex-col md:flex-row gap-8 md:items-center">
                  <p className="text-xl text-gray-500 max-w-md leading-relaxed font-medium">
                    Unleash the <span className="text-ink font-black italic">Beast</span>. Your ultimate destination for high-performance gaming hardware.
                  </p>
                  <div className="h-12 w-[1px] bg-gray-100 hidden md:block" />
                  <div className="flex flex-col">
                    <span className="text-serif italic text-2xl text-ink">Curated for the</span>
                    <span className="font-black uppercase tracking-tighter text-4xl text-brand drop-shadow-[0_0_20px_rgba(255,99,33,0.2)]">Elite 1%</span>
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
              className="glass p-8 rounded-[2.5rem] relative group cursor-pointer overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_40px_rgba(255,99,33,0.2)]"
              onClick={() => onProductClick(featured)}
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div>
                  <h3 className="font-bold text-lg leading-tight">{featured.name}</h3>
                  <p className="text-sm text-gray-500">{featured.category}</p>
                </div>
                <Magnetic strength={0.2}>
                  <div className="w-12 h-12 bg-ink rounded-full flex items-center justify-center text-white group-hover:bg-brand group-hover:text-ink transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] group-hover:shadow-[0_0_30px_rgba(255,99,33,0.4)]">
                    <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </Magnetic>
              </div>
              <div className="relative h-48 flex items-center justify-center z-10">
                <motion.img
                  layoutId={`product-image-${featured.id}`}
                  src={featured.image}
                  alt={featured.name}
                  animate={{ 
                    y: [0, -10, 0],
                    filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-8 flex justify-between items-center relative z-10">
                <span className="text-2xl font-black italic group-hover:text-brand transition-colors">R {featured.price.toLocaleString()}</span>
                <div className="flex flex-col items-end">
                  <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-gray-400">Status</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand animate-pulse">Elite Asset</span>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <Magnetic strength={0.1}>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="w-full bg-ink text-white py-6 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand hover:text-ink transition-all group relative overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(255,99,33,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Zap size={20} className="group-hover:scale-125 transition-transform" />
                Explore Collection
              </motion.button>
            </Magnetic>
          </div>
        </div>

        {/* Dynamic Stats Rail */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 group-hover:text-brand transition-colors">{stat.label}</p>
              <p className="text-3xl font-black italic group-hover:scale-110 transition-transform origin-left">{stat.value}</p>
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
