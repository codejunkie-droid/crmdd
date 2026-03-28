import React from 'react';
import { Search, ShoppingBag, Heart, User, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto glass rounded-full px-8 py-3 flex items-center justify-between pointer-events-auto border border-white/20 shadow-lg shadow-black/5 backdrop-blur-md">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center overflow-hidden relative">
              <motion.div 
                className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="text-white group-hover:text-ink font-bold text-xl relative z-10 transition-colors duration-300">C</span>
            </div>
            <span className="font-bold text-xl tracking-tighter group-hover:text-brand transition-colors duration-300">crmtech.</span>
          </Link>

          <div className="hidden md:flex items-center relative group">
            <Search className="absolute left-3 w-4 h-4 text-gray-400 group-focus-within:text-brand transition-colors duration-300" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-gray-100/50 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all duration-300 text-sm focus:bg-white focus:w-72"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {['Shop', 'Gaming PCs', 'Laptops', 'Support'].map((item) => (
              <Link 
                key={item}
                to={item === 'Shop' ? '/shop' : item === 'Support' ? '/contact' : `/category/${item.toLowerCase().replace(' ', '-')}`} 
                className="relative overflow-hidden group py-1"
              >
                <span className="relative z-10 group-hover:text-brand transition-colors duration-300">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </Link>
            ))}
          </div>
          
          <div className="h-6 w-px bg-gray-200 hidden md:block" />

          <div className="flex items-center gap-4">
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 relative group hover:scale-110">
              <ShoppingBag className="w-5 h-5 group-hover:text-brand transition-colors duration-300" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-brand rounded-full border-2 border-white group-hover:scale-125 transition-transform duration-300" />
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 group hover:scale-110">
              <Heart className="w-5 h-5 group-hover:text-red-500 transition-colors duration-300" />
            </button>
            <div className="flex items-center gap-3 pl-2 cursor-pointer group">
              <div className="hidden lg:block text-right">
                <p className="text-xs font-bold group-hover:text-brand transition-colors duration-300">Guest User</p>
                <p className="text-[10px] text-gray-500">Sign In</p>
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-brand bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand/20">
                <User className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors duration-300" />
              </div>
            </div>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
