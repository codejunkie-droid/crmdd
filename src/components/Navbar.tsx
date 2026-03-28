import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Magnetic } from './Magnetic';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  currentCategory: string;
}

export const Navbar = ({ cartCount, onOpenCart, onSearch, onCategoryChange, currentCategory }: NavbarProps) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        scrolled ? 'pt-4' : 'pt-8'
      }`}
    >
      <div className={`max-w-7xl mx-auto rounded-full px-8 py-4 flex items-center justify-between transition-all duration-500 relative overflow-hidden ${
        scrolled ? 'bg-ink/90 backdrop-blur-2xl shadow-[0_0_40px_rgba(193,255,0,0.1)] border border-white/5' : 'glass shadow-none'
      }`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
        <div className="flex items-center gap-12 relative z-10">
          <Magnetic strength={0.2}>
            <div 
              onClick={() => onCategoryChange('all')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                <span className="text-ink font-black text-2xl italic relative z-10">C</span>
              </div>
              <span className={`font-black text-2xl tracking-tighter italic uppercase ${scrolled ? 'text-white' : 'text-ink'}`}>crm.</span>
            </div>
          </Magnetic>

          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            {['Laptops', 'Components', 'Storage', 'Networking', 'Security', 'Accessories', 'Upgrade Kits'].map(item => (
              <Magnetic key={item} strength={0.1}>
                <button 
                  onClick={() => onCategoryChange(item)}
                  className={`transition-colors relative group ${scrolled ? 'hover:text-white' : 'hover:text-ink'} ${currentCategory === item ? (scrolled ? 'text-white' : 'text-ink') : ''}`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-brand transition-transform duration-500 origin-left ${
                    currentCategory === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <div className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${scrolled ? 'bg-white/5 border-white/10 focus-within:border-brand text-white' : 'bg-gray-50 border-gray-100 focus-within:border-brand'}`}>
            <Search size={16} className={scrolled ? 'text-gray-400' : 'text-gray-400'} />
            <input 
              type="text" 
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search hardware..." 
              className={`bg-transparent border-none text-sm font-medium focus:outline-none w-32 lg:w-48 ${scrolled ? 'placeholder:text-gray-500' : ''}`}
            />
          </div>
          
          <Magnetic strength={0.3}>
            <button className={`p-3 rounded-full transition-colors relative ${scrolled ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-50 text-ink'}`}>
              <User size={20} />
            </button>
          </Magnetic>
          
          <Magnetic strength={0.2}>
            <button 
              onClick={onOpenCart}
              className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all group ${scrolled ? 'bg-brand text-ink hover:bg-white' : 'bg-ink text-white hover:bg-brand hover:text-ink'}`}
            >
              <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm">{cartCount}</span>
            </button>
          </Magnetic>
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand origin-left"
        style={{ scaleX }}
      />
    </motion.nav>
  );
};
