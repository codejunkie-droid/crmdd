import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 px-6 border-t border-gray-100 bg-white/50 backdrop-blur-sm relative z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center overflow-hidden relative">
            <motion.div 
              className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="text-white group-hover:text-ink font-bold text-xl relative z-10 transition-colors duration-300">C</span>
          </div>
          <span className="font-bold text-xl tracking-tighter group-hover:text-brand transition-colors duration-300">crmtech.</span>
        </Link>
        
        <div className="flex gap-8 text-sm font-medium text-gray-500">
          {['Contact Support', 'Privacy Policy', 'Terms of Service'].map((item) => (
            <Link 
              key={item}
              to={item === 'Contact Support' ? '/contact' : '#'} 
              className="relative overflow-hidden group py-1"
            >
              <span className="relative z-10 group-hover:text-ink transition-colors duration-300">{item}</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </div>

        <p className="text-xs text-gray-400">
          © 2026 CRM Technology. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};
