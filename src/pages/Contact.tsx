import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

export const Contact = () => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const InputField = ({ label, type = "text", placeholder, id, isTextArea = false }: { label: string, type?: string, placeholder: string, id: string, isTextArea?: boolean }) => (
    <div className="flex flex-col gap-2 relative">
      <label className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${focusedInput === id ? 'text-brand' : 'text-gray-500'}`}>
        {label}
      </label>
      <div className="relative">
        {isTextArea ? (
          <textarea 
            id={id}
            rows={5}
            onFocus={() => setFocusedInput(id)}
            onBlur={() => setFocusedInput(null)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md resize-none" 
            placeholder={placeholder} 
          />
        ) : (
          <input 
            type={type} 
            id={id}
            onFocus={() => setFocusedInput(id)}
            onBlur={() => setFocusedInput(null)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md" 
            placeholder={placeholder} 
          />
        )}
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
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-ink to-ink/70">
            Contact Support
          </h1>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-lg">
            Need help with your order or have a question about our products? Our team is here to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants} className="bento-card bg-ink text-white p-8 md:p-12 shadow-2xl shadow-ink/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150" />
              
              <h2 className="text-4xl font-black tracking-tighter mb-12 relative z-10">Get in Touch</h2>
              
              <div className="flex flex-col gap-10 relative z-10">
                <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 group/item cursor-pointer">
                  <div className="w-14 h-14 bg-brand/10 rounded-full flex items-center justify-center shrink-0 group-hover/item:bg-brand transition-colors duration-300">
                    <Phone className="w-6 h-6 text-brand group-hover/item:text-ink transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 group-hover/item:text-brand transition-colors duration-300">Phone</h3>
                    <p className="text-gray-400 text-lg">+27 21 000 0000</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri 9am-5pm SAST</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 group/item cursor-pointer">
                  <div className="w-14 h-14 bg-brand/10 rounded-full flex items-center justify-center shrink-0 group-hover/item:bg-brand transition-colors duration-300">
                    <Mail className="w-6 h-6 text-brand group-hover/item:text-ink transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 group-hover/item:text-brand transition-colors duration-300">Email</h3>
                    <p className="text-gray-400 text-lg">support@crmtechnology.co.za</p>
                    <p className="text-sm text-gray-500 mt-1">We aim to reply within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 group/item cursor-pointer">
                  <div className="w-14 h-14 bg-brand/10 rounded-full flex items-center justify-center shrink-0 group-hover/item:bg-brand transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-brand group-hover/item:text-ink transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 group-hover/item:text-brand transition-colors duration-300">Office</h3>
                    <p className="text-gray-400 text-lg">Cape Town, South Africa</p>
                    <p className="text-sm text-gray-500 mt-1">Online store only (No walk-ins)</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bento-card p-8 md:p-12 bg-white shadow-2xl shadow-ink/5 border border-gray-100"
          >
            <h2 className="text-4xl font-black tracking-tighter mb-10">Send a Message</h2>
            
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField id="name" label="Name" placeholder="Your Name" />
                <InputField id="email" type="email" label="Email" placeholder="your@email.com" />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${focusedInput === 'subject' ? 'text-brand' : 'text-gray-500'}`}>
                  Subject
                </label>
                <div className="relative">
                  <select 
                    id="subject"
                    onFocus={() => setFocusedInput('subject')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md appearance-none cursor-pointer"
                  >
                    <option>Order Inquiry</option>
                    <option>Product Question</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                  {focusedInput === 'subject' && (
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

              <InputField id="message" label="Message" placeholder="How can we help you?" isTextArea={true} />

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button" 
                className="w-full bg-brand text-ink px-8 py-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white transition-colors duration-300 text-xl mt-4 shadow-xl shadow-brand/20 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Send Message</span>
                <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
