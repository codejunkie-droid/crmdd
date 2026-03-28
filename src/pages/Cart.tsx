import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Trash2, Plus, Minus } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  show: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const Cart = () => {
  // Mock cart items
  const cartItems = [
    { ...PRODUCTS[0], quantity: 1 },
    { ...PRODUCTS[2], quantity: 2 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-ink to-ink/70">
            Your Cart
          </h1>
          <p className="text-gray-500 font-medium text-lg">Review your items before checkout.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Cart Items */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-8 flex flex-col gap-6"
          >
            {cartItems.map((item) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01, backgroundColor: '#f9fafb' }}
                className="bento-card flex flex-col sm:flex-row items-center gap-8 p-6 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 group"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 bg-gray-50 relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/10 px-2 py-1 rounded-full mb-3 inline-block">
                        {item.category}
                      </span>
                      <h3 className="font-bold text-xl leading-tight group-hover:text-brand transition-colors duration-300">{item.name}</h3>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1, color: '#ef4444' }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-400 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-4 bg-gray-50 rounded-full px-4 py-2 border border-gray-100">
                      <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="p-1 hover:text-brand transition-colors"><Minus className="w-4 h-4" /></motion.button>
                      <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                      <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="p-1 hover:text-brand transition-colors"><Plus className="w-4 h-4" /></motion.button>
                    </div>
                    <p className="text-2xl font-black tracking-tighter text-ink">R {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="bento-card bg-ink text-white sticky top-32 shadow-2xl shadow-ink/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full pointer-events-none" />
              
              <h2 className="text-3xl font-black tracking-tighter mb-8 relative z-10">Order Summary</h2>
              
              <div className="flex flex-col gap-5 mb-8 relative z-10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-medium">Subtotal</span>
                  <span className="font-bold text-lg">R {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-medium">Shipping</span>
                  <span className="font-bold text-brand bg-brand/10 px-3 py-1 rounded-full">Free</span>
                </div>
                <div className="h-px bg-white/10 my-4" />
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Total</span>
                  <span className="text-4xl font-black tracking-tighter text-brand">R {total.toLocaleString()}</span>
                </div>
              </div>

              <Link to="/checkout" className="w-full bg-brand text-ink px-8 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white transition-colors duration-300 text-lg group relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Link>
              
              <p className="text-center text-xs text-gray-500 mt-6 relative z-10 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Secure checkout powered by PayFast.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
