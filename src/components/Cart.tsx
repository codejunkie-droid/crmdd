import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { Product } from '../constants';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: { product: Product; quantity: number }[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-ink text-white z-[70] shadow-[0_0_50px_rgba(193,255,0,0.1)] flex flex-col overflow-hidden border-l border-white/10"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="p-6 flex items-center justify-between border-b border-white/10 relative z-10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-brand" />
                <h2 className="text-xl font-black italic uppercase tracking-tighter">Your Cart</h2>
                <span className="bg-brand text-ink text-xs font-bold px-2 py-1 rounded-full">
                  {items.length}
                </span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar relative z-10">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <ShoppingBag className="w-10 h-10 text-white/20" />
                  </div>
                  <p className="text-gray-400 font-medium italic">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="text-brand font-black italic uppercase tracking-tighter hover:underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.product.id}
                    className="flex gap-4 group bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-brand/30 transition-colors"
                  >
                    <div className="w-24 h-24 bg-ink rounded-xl overflow-hidden flex-shrink-0 relative">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-black italic uppercase tracking-tighter text-sm leading-tight text-white">{item.product.name}</h3>
                        <p className="text-xs text-brand mt-1 font-bold">R {item.product.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-ink rounded-full px-2 py-1 border border-white/10">
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 hover:text-brand transition-colors text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center text-white">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 hover:text-brand transition-colors text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.product.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-white/10 space-y-4 relative z-10">
              <div className="flex justify-between items-end">
                <span className="text-gray-400 text-sm font-medium">Subtotal</span>
                <span className="text-2xl font-black tracking-tighter text-white">R {total.toLocaleString()}</span>
              </div>
              <button 
                disabled={items.length === 0}
                className="w-full bg-brand text-ink py-4 rounded-2xl font-black italic tracking-tighter uppercase hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group shadow-[0_0_30px_rgba(193,255,0,0.2)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-no-repeat bg-[position:-100%_0,0_0] group-hover:animate-[shine_1s_ease-in-out]" />
                <span className="relative z-10">Checkout Now</span>
              </button>
              <p className="text-[10px] text-center text-gray-500 uppercase tracking-widest">
                Secure checkout powered by CRM Technology
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
