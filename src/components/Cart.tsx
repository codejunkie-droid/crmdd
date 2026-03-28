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
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
            <div className="p-6 flex items-center justify-between border-b border-gray-100 relative z-10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                <h2 className="text-xl font-bold">Your Cart</h2>
                <span className="bg-brand text-ink text-xs font-bold px-2 py-1 rounded-full">
                  {items.length}
                </span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-gray-300" />
                  </div>
                  <p className="text-gray-500 font-medium">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="text-brand font-bold hover:underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.product.id}
                    className="flex gap-4 group"
                  >
                    <div className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-bold text-sm leading-tight">{item.product.name}</h3>
                        <p className="text-xs text-gray-400 mt-1">R {item.product.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-gray-50 rounded-full px-2 py-1">
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 hover:text-brand transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 hover:text-brand transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.product.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-gray-100 space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-gray-400 text-sm font-medium">Subtotal</span>
                <span className="text-2xl font-black tracking-tighter">R {total.toLocaleString()}</span>
              </div>
              <button 
                disabled={items.length === 0}
                className="w-full bg-ink text-white py-4 rounded-2xl font-bold hover:bg-brand hover:text-ink transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Checkout Now
              </button>
              <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
                Secure checkout powered by CRM Technology
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
