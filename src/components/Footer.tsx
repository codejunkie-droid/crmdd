import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { Magnetic } from './Magnetic';

export const Footer = () => {
  return (
    <footer className="bg-ink text-white pt-32 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center rotate-12">
                  <span className="text-ink font-black text-3xl italic">C</span>
                </div>
                <span className="font-black text-4xl tracking-tighter italic text-white">crm.</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none mb-8">
                READY TO <br /><span className="text-brand">UPGRADE?</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-md leading-relaxed mb-12">
                Join the elite circle of high-performance enthusiasts. Experience the future of hardware today.
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Github, Linkedin].map((Icon, i) => (
                  <Magnetic key={i} strength={0.4}>
                    <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:text-ink transition-all group">
                      <Icon size={24} className="group-hover:scale-110 transition-transform" />
                    </button>
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.5em] text-gray-500 mb-8">Navigation</h4>
              <ul className="flex flex-col gap-4">
                {['Laptops', 'Components', 'Storage', 'Networking', 'Security', 'Accessories', 'Upgrade Kits'].map(item => (
                  <li key={item}>
                    <button className="text-lg font-bold text-gray-400 hover:text-brand transition-colors flex items-center gap-2 group">
                      {item}
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.5em] text-gray-500 mb-8">Company</h4>
              <ul className="flex flex-col gap-4">
                {['About Us', 'Support', 'Warranty', 'Shipping', 'Privacy Policy'].map(item => (
                  <li key={item}>
                    <button className="text-lg font-bold text-gray-400 hover:text-brand transition-colors flex items-center gap-2 group">
                      {item}
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm font-medium">
            © 2026 CRM TECHNOLOGY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-12">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Local Time</span>
              <span className="font-mono text-sm">2026-03-28 16:26:13 UTC</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Status</span>
              <span className="text-brand font-bold text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden h-64">
        <span className="text-[25vw] font-black italic text-white/[0.02] tracking-tighter leading-none uppercase absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
          CRM TECHNOLOGY
        </span>
      </div>
    </footer>
  );
};
