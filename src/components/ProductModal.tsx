import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Star, Shield, Truck, RefreshCw, Heart } from 'lucide-react';
import { Product } from '../constants';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal = ({ product, onClose, onAddToCart }: ProductModalProps) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink/90 backdrop-blur-3xl"
        />
        
        <motion.div
          layoutId={`product-card-${product.id}`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-6xl bg-ink rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(193,255,0,0.1)] flex flex-col md:flex-row max-h-[90vh] border border-white/10 text-white"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand hover:text-ink transition-colors text-white"
          >
            <X size={24} />
          </button>

          {/* Image Section */}
          <div className="md:w-1/2 bg-ink/50 p-12 flex items-center justify-center relative overflow-hidden border-r border-white/10">
            <motion.img
              layoutId={`product-image-${product.id}`}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain relative z-10 animate-float"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-12 overflow-y-auto custom-scrollbar">
            <div className="max-w-md">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 mb-4 block">
                {product.category}
              </span>
              <h2 className="text-5xl font-black tracking-tighter italic uppercase leading-tight mb-6 text-white">
                {product.name}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12 text-serif italic">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand mb-2">Price</h4>
                  <p className="text-4xl font-black italic text-white">R {product.price.toLocaleString()}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand mb-2">Condition</h4>
                  <p className="text-sm font-bold text-ink bg-brand px-4 py-2 rounded-full inline-block uppercase tracking-widest">{product.condition || 'New'}</p>
                </div>
              </div>

              <div className="space-y-12">
                {/* Performance Matrix */}
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand">Performance Matrix</h4>
                  <div className="bg-white/5 rounded-[2rem] p-8 flex items-center justify-center relative border border-white/10">
                    <svg viewBox="0 0 100 100" className="w-48 h-48">
                      <circle cx="50" cy="50" r="40" className="fill-none stroke-white/10 stroke-[0.5]" />
                      <circle cx="50" cy="50" r="20" className="fill-none stroke-white/10 stroke-[0.5]" />
                      <path d="M50 10 L50 90 M10 50 L90 50" className="stroke-white/10 stroke-[0.5]" />
                      <motion.path 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        d="M50 20 L80 50 L50 80 L20 50 Z" 
                        className="fill-brand/20 stroke-brand stroke-2"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
                      <div className="flex justify-center"><span className="text-[10px] font-bold uppercase text-gray-400">Speed</span></div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold uppercase text-gray-400">Value</span>
                        <span className="text-[10px] font-bold uppercase text-gray-400">Reliability</span>
                      </div>
                      <div className="flex justify-center"><span className="text-[10px] font-bold uppercase text-gray-400">Design</span></div>
                    </div>
                  </div>
                </div>

                {/* Specs */}
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand">Technical Specs</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {product.specs?.map((spec, i) => (
                      <div key={i} className="flex items-center py-4 border-b border-white/10">
                        <span className="w-2 h-2 bg-brand rounded-full mr-4" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <button 
                  onClick={() => onAddToCart(product)}
                  className="flex-1 bg-brand text-ink py-6 rounded-full font-black italic tracking-tighter uppercase flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_30px_rgba(193,255,0,0.2)] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-no-repeat bg-[position:-100%_0,0_0] group-hover:animate-[shine_1s_ease-in-out]" />
                  <ShoppingBag size={20} className="relative z-10" />
                  <span className="relative z-10">Add to Cart</span>
                </button>
                <button className="w-16 h-16 border-2 border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors text-white">
                  <Heart size={24} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
