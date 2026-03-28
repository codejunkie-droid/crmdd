import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Star, Plus } from 'lucide-react';
import { PRODUCTS, Product } from '../constants';
import { Magnetic } from './Magnetic';

interface BentoGridProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const BentoGrid = ({ onProductClick, onAddToCart }: BentoGridProps) => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <section ref={containerRef} className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-ink" />
              <span className="text-xs font-bold uppercase tracking-[0.5em] text-gray-400">Curated Selection</span>
            </div>
            <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter italic uppercase leading-[0.85] mb-8 relative group">
              THE<br />
              <span className="text-brand relative inline-block">
                HARDWARE.
                <motion.span 
                  animate={{ 
                    x: [-2, 2, -1, 0], 
                    opacity: [0, 0.8, 0],
                    skew: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute inset-0 text-ink -z-10 translate-x-2 mix-blend-overlay"
                >
                  HARDWARE.
                </motion.span>
              </span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-sm text-right"
          >
            <p className="text-gray-500 text-xl font-medium leading-relaxed italic">
              <span className="text-serif text-3xl block mb-4">"Engineering excellence meets aesthetic perfection."</span>
              Every piece is a testament to our commitment to the top 1%.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px]"
        >
          {/* Main Large Card */}
          <motion.div 
            variants={itemVariants}
            style={{ y: y1 }}
            className="md:col-span-8 md:row-span-2 bento-card bg-surface group cursor-pointer overflow-hidden relative p-16 flex flex-col justify-between"
            onClick={() => onProductClick(PRODUCTS[1])}
          >
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">Flagship Performance</span>
              <h3 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-8 leading-[0.9] uppercase max-w-md">
                {PRODUCTS[1].name}
              </h3>
              <div className="flex items-center gap-8">
                <span className="text-4xl font-black italic">R {PRODUCTS[1].price.toLocaleString()}</span>
                <Magnetic strength={0.2}>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onAddToCart(PRODUCTS[1]); }}
                    className="bg-ink text-white px-10 py-5 rounded-full font-black italic tracking-tighter uppercase text-sm hover:bg-brand hover:text-ink transition-all shadow-2xl relative overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-no-repeat bg-[position:-100%_0,0_0] group-hover/btn:animate-[shine_1s_ease-in-out]" />
                    <span className="relative z-10">Add to Cart</span>
                  </button>
                </Magnetic>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-3/4 h-3/4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-1000">
              <motion.img 
                layoutId={`product-image-${PRODUCTS[1].id}`}
                src={PRODUCTS[1].image} 
                alt={PRODUCTS[1].name}
                className="w-full h-full object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Vertical Dark Card */}
          <motion.div 
            variants={itemVariants}
            style={{ y: y2 }}
            className="md:col-span-4 md:row-span-2 bento-card bg-ink text-white flex flex-col justify-between group cursor-pointer p-12 overflow-hidden relative"
            onClick={() => onProductClick(PRODUCTS[2])}
          >
            <div className="relative z-10">
              <span className="text-brand font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Storage Elite</span>
              <h3 className="text-5xl font-black italic tracking-tighter mb-6 leading-none uppercase">{PRODUCTS[2].name}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">Blazing fast speeds for the modern creator.</p>
            </div>
            <div className="relative h-80 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-1000 z-10">
              <motion.img 
                layoutId={`product-image-${PRODUCTS[2].id}`}
                src={PRODUCTS[2].image} 
                alt={PRODUCTS[2].name}
                className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(193,255,0,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-center relative z-10">
              <span className="text-3xl font-black italic">R {PRODUCTS[2].price.toLocaleString()}</span>
              <Magnetic strength={0.3}>
                <div className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-all group-hover:border-brand">
                  <ArrowUpRight size={32} />
                </div>
              </Magnetic>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand/5 to-transparent" />
          </motion.div>

          {/* Small Feature Cards */}
          {PRODUCTS.slice(3, 6).map((product, i) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
              className="md:col-span-4 bento-card bg-surface border border-gray-100 group cursor-pointer p-8 flex flex-col justify-between relative overflow-hidden"
              onClick={() => onProductClick(product)}
            >
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-2 block">{product.category}</span>
                  <h3 className="font-black italic text-2xl uppercase tracking-tighter leading-none">{product.name}</h3>
                </div>
                <Magnetic strength={0.4}>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-brand transition-colors">
                    <Plus size={20} />
                  </div>
                </Magnetic>
              </div>
              <div className="relative h-40 group-hover:scale-110 transition-transform duration-700">
                <motion.img 
                  layoutId={`product-image-${product.id}`}
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-center relative z-10">
                <span className="font-black italic text-xl">R {product.price.toLocaleString()}</span>
                <div className="flex items-center gap-1 text-brand">
                  <Star size={12} className="fill-current" />
                  <span className="text-[10px] font-bold text-ink">4.9</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Decorative Stats Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 bento-card bg-brand p-12 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <h4 className="text-ink/60 font-bold uppercase text-xs tracking-[0.4em] mb-4">Performance</h4>
              <p className="text-4xl font-black italic tracking-tighter text-ink leading-none">
                99.9% RELIABILITY RATING
              </p>
            </div>
            <div className="flex items-end justify-between relative z-10">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-2 h-8 bg-ink/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${20 + Math.random() * 80}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="bg-ink w-full"
                    />
                  </div>
                ))}
              </div>
              <Magnetic strength={0.2}>
                <ArrowUpRight size={48} className="text-ink opacity-20 group-hover:opacity-100 transition-opacity" />
              </Magnetic>
            </div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 blur-[60px] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
