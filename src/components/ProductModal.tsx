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
          className="relative w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-20 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand transition-colors"
          >
            <X size={24} />
          </button>

          {/* Image Section */}
          <div className="md:w-1/2 bg-surface p-12 flex items-center justify-center relative overflow-hidden">
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
              <h2 className="text-5xl font-black tracking-tighter italic uppercase leading-tight mb-6">
                {product.name}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12 text-serif italic">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Price</h4>
                  <p className="text-4xl font-black italic">R {product.price.toLocaleString()}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Availability</h4>
                  <p className="text-lg font-bold text-brand bg-ink px-4 py-1 rounded-full inline-block">In Stock</p>
                </div>
              </div>

              <div className="space-y-12">
                {/* Performance Matrix */}
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Performance Matrix</h4>
                  <div className="bg-surface rounded-[2rem] p-8 flex items-center justify-center relative">
                    <svg viewBox="0 0 100 100" className="w-48 h-48">
                      <circle cx="50" cy="50" r="40" className="fill-none stroke-gray-200 stroke-[0.5]" />
                      <circle cx="50" cy="50" r="20" className="fill-none stroke-gray-200 stroke-[0.5]" />
                      <path d="M50 10 L50 90 M10 50 L90 50" className="stroke-gray-200 stroke-[0.5]" />
                      <motion.path 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        d="M50 20 L80 50 L50 80 L20 50 Z" 
                        className="fill-brand/20 stroke-brand stroke-2"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
                      <div className="flex justify-center"><span className="text-[10px] font-bold uppercase">Speed</span></div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold uppercase">Value</span>
                        <span className="text-[10px] font-bold uppercase">Reliability</span>
                      </div>
                      <div className="flex justify-center"><span className="text-[10px] font-bold uppercase">Design</span></div>
                    </div>
                  </div>
                </div>

                {/* Specs */}
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Technical Specs</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {product.specs?.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{spec.split(':')[0]}</span>
                        <span className="text-sm font-bold">{spec.split(':')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <button 
                  onClick={() => onAddToCart(product)}
                  className="flex-1 bg-ink text-white py-6 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand hover:text-ink transition-all shadow-xl"
                >
                  <ShoppingBag size={20} />
                  Add to Cart
                </button>
                <button className="w-16 h-16 border-2 border-gray-100 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
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
