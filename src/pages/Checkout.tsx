import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Lock, CreditCard, Wallet } from 'lucide-react';

const formVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const Checkout = () => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const InputField = ({ label, type = "text", placeholder, id }: { label: string, type?: string, placeholder: string, id: string }) => (
    <div className="flex flex-col gap-2 relative">
      <label className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${focusedInput === id ? 'text-brand' : 'text-gray-500'}`}>
        {label}
      </label>
      <div className="relative">
        <input 
          type={type} 
          id={id}
          onFocus={() => setFocusedInput(id)}
          onBlur={() => setFocusedInput(null)}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md" 
          placeholder={placeholder} 
        />
        {focusedInput === id && (
          <motion.div 
            layoutId="input-focus"
            className="absolute inset-0 border-2 border-brand rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
    </div>
  );

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden bg-[#f8f9fa]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-brand/30 relative"
          >
            <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
            <Lock className="w-8 h-8 text-ink relative z-10" />
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-ink to-ink/70">
            Secure Checkout
          </h1>
          <p className="text-gray-500 font-medium text-lg flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            256-bit encrypted connection
          </p>
        </motion.div>

        <motion.div 
          variants={formVariants}
          initial="hidden"
          animate="show"
          className="bento-card p-8 md:p-12 mb-12 bg-white shadow-2xl shadow-ink/5 border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[80px] rounded-full pointer-events-none" />

          <form className="flex flex-col gap-12 relative z-10">
            {/* Contact Info */}
            <motion.div variants={sectionVariants}>
              <h2 className="text-2xl font-black tracking-tighter mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center text-sm shadow-lg shadow-ink/20">1</span>
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField id="firstName" label="First Name" placeholder="John" />
                <InputField id="lastName" label="Last Name" placeholder="Doe" />
                <div className="md:col-span-2">
                  <InputField id="email" type="email" label="Email Address" placeholder="john@example.com" />
                </div>
              </div>
            </motion.div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {/* Shipping Address */}
            <motion.div variants={sectionVariants}>
              <h2 className="text-2xl font-black tracking-tighter mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center text-sm shadow-lg shadow-ink/20">2</span>
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <InputField id="address" label="Street Address" placeholder="123 Main St" />
                </div>
                <InputField id="city" label="City" placeholder="Cape Town" />
                <InputField id="postal" label="Postal Code" placeholder="8001" />
              </div>
            </motion.div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {/* Payment */}
            <motion.div variants={sectionVariants}>
              <h2 className="text-2xl font-black tracking-tighter mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center text-sm shadow-lg shadow-ink/20">3</span>
                Payment Method
              </h2>
              <div className="flex flex-col gap-4">
                <label 
                  className={`flex items-center gap-4 p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${paymentMethod === 'card' ? 'border-brand bg-brand/5 shadow-md' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMethod === 'card' ? 'border-brand' : 'border-gray-300'}`}>
                    {paymentMethod === 'card' && <motion.div layoutId="radio" className="w-3 h-3 bg-brand rounded-full" />}
                  </div>
                  <CreditCard className={`w-6 h-6 ${paymentMethod === 'card' ? 'text-brand' : 'text-gray-400'}`} />
                  <span className="font-bold text-lg">Credit / Debit Card</span>
                </label>
                
                <label 
                  className={`flex items-center gap-4 p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${paymentMethod === 'payfast' ? 'border-brand bg-brand/5 shadow-md' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}`}
                  onClick={() => setPaymentMethod('payfast')}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMethod === 'payfast' ? 'border-brand' : 'border-gray-300'}`}>
                    {paymentMethod === 'payfast' && <motion.div layoutId="radio" className="w-3 h-3 bg-brand rounded-full" />}
                  </div>
                  <Wallet className={`w-6 h-6 ${paymentMethod === 'payfast' ? 'text-brand' : 'text-gray-400'}`} />
                  <span className="font-bold text-lg">PayFast</span>
                </label>
              </div>
            </motion.div>

            <motion.button 
              variants={sectionVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button" 
              className="w-full bg-ink text-white px-8 py-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-ink/90 transition-colors text-xl mt-8 shadow-xl shadow-ink/20 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <CheckCircle2 className="w-6 h-6 text-brand relative z-10" />
              <span className="relative z-10">Complete Order</span>
            </motion.button>
          </form>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-gray-500 font-medium"
        >
          By completing your order, you agree to our <Link to="#" className="underline hover:text-ink transition-colors">Terms of Service</Link> and <Link to="#" className="underline hover:text-ink transition-colors">Privacy Policy</Link>.
        </motion.p>
      </div>
    </main>
  );
};
