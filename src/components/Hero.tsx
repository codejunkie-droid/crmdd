import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const featured = PRODUCTS[0];

  return (
    <section className="pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Featured Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 bento-card min-h-[500px] flex flex-col justify-between group"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Ultimate Performance</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-[0.9] tracking-tighter mb-8 max-w-md">
              {featured.name}
            </h1>
            <div className="flex items-start gap-8">
              <span className="text-6xl font-light text-gray-100">01</span>
              <div>
                <p className="font-bold text-sm mb-2">Next-Gen Power</p>
                <p className="text-gray-500 text-sm max-w-[200px]">
                  {featured.description}
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 flex items-center gap-6">
            <Link to="/shop" className="bg-brand text-ink px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform">
              Shop Now
              <div className="w-8 h-8 bg-ink rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </Link>
            <div className="flex items-center gap-4 text-gray-400">
              <span className="text-xs font-bold uppercase">Follow us on:</span>
              <div className="flex gap-3">
                {['fb', 'ig', 'tw', 'li'].map(s => (
                  <span key={s} className="text-xs hover:text-ink cursor-pointer transition-colors uppercase">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Product Image */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none"
          >
            <img 
              src={featured.image} 
              alt={featured.name}
              className="w-full h-full object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mask-image-gradient"
              style={{ maskImage: 'linear-gradient(to left, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)' }}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

        {/* Side Cards */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bento-card flex-1 bg-white"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Popular Categories</p>
            <div className="flex flex-wrap gap-2">
              {['Gaming PCs', 'Laptops', 'Components', 'Accessories'].map(c => (
                <Link 
                  key={c} 
                  to={`/category/${c.toLowerCase().replace(' ', '-')}`}
                  className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold hover:bg-brand hover:text-ink transition-colors"
                >
                  {c}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bento-card flex-[2] group"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg leading-tight">{PRODUCTS[1].name.split(' ').slice(0, 2).join(' ')}<br />{PRODUCTS[1].name.split(' ').slice(2).join(' ')}</h3>
              </div>
              <Link to={`/product/${PRODUCTS[1].id}`} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-32">
              <img 
                src={PRODUCTS[1].image} 
                alt={PRODUCTS[1].name} 
                className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
