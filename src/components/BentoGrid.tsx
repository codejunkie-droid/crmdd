import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Star, Heart } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

export const BentoGrid = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Stats Card */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="bento-card md:col-span-1 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-bold text-gray-400 text-sm mb-4">More Products</h3>
            <p className="text-gray-500 text-xs">Over 500+ items in stock.</p>
          </div>
          <div className="flex -space-x-3 mt-6">
            {PRODUCTS.slice(2, 5).map((p, i) => (
              <div key={i} className="w-12 h-12 rounded-2xl border-4 border-white overflow-hidden bg-gray-100">
                <img src={p.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Download Card */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bento-card md:col-span-1 bg-brand flex flex-col items-center justify-center text-center"
        >
          <div className="flex -space-x-2 mb-4">
            {[1, 2, 3].map(i => (
              <img 
                key={i}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} 
                className="w-8 h-8 rounded-full border-2 border-brand bg-white"
                alt=""
              />
            ))}
          </div>
          <h2 className="text-4xl font-bold tracking-tighter mb-2">10k+</h2>
          <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-4">Happy Gamers</p>
          <div className="flex items-center gap-1 bg-white/30 px-3 py-1 rounded-full">
            <Star className="w-3 h-3 fill-ink" />
            <span className="text-[10px] font-bold">4.9 reviews</span>
          </div>
        </motion.div>

        {/* Featured Release Card */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bento-card md:col-span-2 flex items-center gap-8 group"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Top Seller</span>
            </div>
            <h3 className="text-2xl font-bold mb-6">NVIDIA RTX 40<br />Series is Here</h3>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {PRODUCTS.slice(3, 5).map((p, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img src={p.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-brand text-brand" />
                <span className="text-xs font-bold">4.8</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative h-full">
            <img 
              src={PRODUCTS[3].image} 
              alt="" 
              className="w-full h-full object-cover rounded-3xl"
              referrerPolicy="no-referrer"
            />
            <Link to={`/product/${PRODUCTS[3].id}`} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-brand transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Large Product Card */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bento-card md:col-span-2 lg:col-span-1 min-h-[400px] flex flex-col justify-between group"
        >
          <div className="relative h-64 mb-6">
            <img 
              src={PRODUCTS[2].image} 
              alt="" 
              className="w-full h-full object-cover rounded-3xl"
              referrerPolicy="no-referrer"
            />
            <Link to={`/product/${PRODUCTS[2].id}`} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-brand transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{PRODUCTS[2].name}</h3>
            <p className="text-xs text-gray-400">Pro-grade wireless</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
