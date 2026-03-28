import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ShoppingBag } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { HorizontalBrands } from './components/HorizontalBrands';
import { MouseTrail } from './components/MouseTrail';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { ProductModal } from './components/ProductModal';
import { Product, PRODUCTS } from './constants';
import { SmoothScroll } from './components/SmoothScroll';
import { StickyScroll, RevealText } from './components/ScrollAnimations';
import { Magnetic } from './components/Magnetic';

const SearchOverlay = ({ isOpen, onClose, query, onSearch, results, onProductClick, onCategoryChange }: {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  onSearch: (q: string) => void;
  results: Product[];
  onProductClick: (p: Product) => void;
  onCategoryChange: (c: string) => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[100] bg-ink/98 backdrop-blur-3xl p-6 lg:p-20 overflow-y-auto text-white"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-center mb-20">
            <div className="flex items-center gap-6 flex-1 max-w-4xl">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Search size={64} className="text-brand" />
              </motion.div>
              <input 
                autoFocus
                type="text" 
                value={query}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Type to search hardware..." 
                className="w-full bg-transparent border-none text-4xl lg:text-8xl font-black tracking-tighter italic focus:outline-none uppercase placeholder:text-white/10 text-white"
              />
            </div>
            <Magnetic strength={0.3}>
              <button 
                onClick={onClose}
                className="w-20 h-20 bg-white text-ink rounded-full flex items-center justify-center hover:bg-brand hover:text-ink transition-all shadow-[0_0_30px_rgba(193,255,0,0.2)] group"
              >
                <X size={40} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </Magnetic>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {query === '' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <span className="h-[1px] w-8 bg-brand" />
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">Trending Now</h3>
                  </div>
                  <div className="flex flex-col gap-8">
                    {PRODUCTS.slice(0, 4).map((p, i) => (
                      <motion.button 
                        key={p.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        onClick={() => { onProductClick(p); onClose(); }}
                        className="text-3xl lg:text-4xl font-black italic text-left hover:text-brand transition-all uppercase tracking-tighter hover:translate-x-4 flex items-center gap-4 group text-white"
                      >
                        <span className="text-xs font-bold text-white/20 group-hover:text-brand">0{i + 1}</span>
                        {p.name}
                      </motion.button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <span className="h-[1px] w-8 bg-brand" />
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">Categories</h3>
                  </div>
                  <div className="flex flex-col gap-8">
                    {['Laptops', 'Components', 'Storage', 'Networking', 'Security'].map((c, i) => (
                      <motion.button 
                        key={c}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        onClick={() => { onCategoryChange(c); onClose(); }}
                        className="text-3xl lg:text-4xl font-black italic text-left hover:text-brand transition-all uppercase tracking-tighter hover:translate-x-4 flex items-center gap-4 group text-white"
                      >
                        <span className="text-xs font-bold text-white/20 group-hover:text-brand">/</span>
                        {c}
                      </motion.button>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] relative overflow-hidden group">
                    <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-6 relative z-10 text-white">Elite Support</h4>
                    <p className="text-gray-400 mb-8 relative z-10">Need help choosing the right hardware? Our experts are here 24/7.</p>
                    <button className="bg-brand text-ink px-8 py-4 rounded-full font-bold hover:bg-white transition-all relative z-10">
                      Chat with Expert
                    </button>
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand/20 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {results.map((product, i) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => { onProductClick(product); onClose(); }}
                    className="bg-white/5 p-8 rounded-[3rem] group cursor-pointer hover:shadow-[0_0_40px_rgba(193,255,0,0.1)] transition-all border border-white/10 hover:border-brand/50"
                  >
                    <div className="h-48 mb-6 overflow-hidden rounded-[2rem] bg-ink flex items-center justify-center relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 relative z-10"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand mb-2 block">{product.category}</span>
                    <h3 className="text-xl font-black italic tracking-tighter uppercase mb-4 leading-none group-hover:text-brand transition-colors text-white">{product.name}</h3>
                    <span className="text-2xl font-black italic text-white">R {product.price.toLocaleString()}</span>
                  </motion.div>
                ))}
                {results.length === 0 && (
                  <div className="col-span-full py-40 text-center">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      <h3 className="text-6xl font-black italic uppercase tracking-tighter mb-4 text-white">No results found</h3>
                      <p className="text-gray-400 text-xl font-medium italic">Try searching for something else, like "Laptop" or "GPU".</p>
                    </motion.div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.product.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
        : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== id));
  };

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = currentCategory === 'all' || 
                           product.category.toLowerCase().includes(currentCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <SmoothScroll>
      <MouseTrail />
      <div className="min-h-screen selection:bg-brand selection:text-ink relative overflow-x-hidden">
      <div className="noise-overlay" />
      <div className="fixed inset-0 pointer-events-none z-[50] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-50 mix-blend-overlay" />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            exit={{ 
              opacity: 0,
              scale: 1.1,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 0.5, 1], scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 border-2 border-brand rounded-full flex items-center justify-center mb-12 relative"
              >
                <div className="absolute inset-0 border border-brand/30 rounded-full animate-ping" />
                <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 20" className="text-brand/50" />
                </svg>
              </motion.div>

              <div className="font-mono text-brand text-sm md:text-base tracking-widest uppercase flex flex-col items-center gap-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  System Initialization...
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Loading Core Modules [OK]
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  Establishing Secure Uplink [OK]
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="text-white font-black text-2xl mt-4"
                >
                  BEAST MODE ENGAGED
                </motion.div>
              </div>
              
              <div className="w-64 h-[2px] bg-white/10 mt-12 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 1.8, ease: "circOut" }}
                  className="absolute inset-0 bg-brand"
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <Navbar 
          cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
          onOpenCart={() => setIsCartOpen(true)} 
          onSearch={() => setIsSearchOpen(true)}
          onCategoryChange={setCurrentCategory}
          currentCategory={currentCategory}
        />
        
        <main>
        {currentCategory === 'all' ? (
          <>
            <Hero onProductClick={setSelectedProduct} />
            
            {/* Scrolling Text Marquee */}
            <div className="py-20 overflow-hidden bg-ink text-white whitespace-nowrap border-y border-white/10">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-20 text-8xl font-black uppercase tracking-tighter opacity-20 italic"
              >
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i}>CRM TECHNOLOGY • NEXT-LEVEL GAMING • BUILD SMART • ELITE PERFORMANCE • </span>
                ))}
              </motion.div>
            </div>

            <BentoGrid onProductClick={setSelectedProduct} onAddToCart={addToCart} />

            <HorizontalBrands />

            <section className="py-40 bg-white">
              <div className="max-w-7xl mx-auto px-6 mb-20 overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                >
                  <h2 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none italic uppercase">
                    ENGINEERED
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                >
                  <h2 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none italic uppercase text-brand">
                    FOR ELITE
                  </h2>
                </motion.div>
              </div>
              <StickyScroll 
                items={[
                  {
                    title: "Next-Level Gaming",
                    description: "Experience the power of expertly curated gaming laptops and PCs. Designed for peak performance and unmatched reliability.",
                    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"
                  },
                  {
                    title: "Build Smart",
                    description: "Don't guess. Build smart with our high-quality components and upgrade kits. Expertly selected for maximum compatibility.",
                    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop"
                  },
                  {
                    title: "Elite Performance",
                    description: "Elevate your experience with top-quality hardware. From graphics cards to mesh networking, we provide the ultimate tech.",
                    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
                  }
                ]}
              />
            </section>
          </>
        ) : currentCategory === 'Support' ? (
          <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase mb-12 text-ink">Support.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-ink p-12 rounded-[3rem] border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                <h3 className="text-3xl font-black italic mb-6 uppercase text-white relative z-10">Technical Assistance</h3>
                <p className="text-gray-400 text-lg mb-8 relative z-10">Our team of experts is ready to help you with any hardware or software issues.</p>
                <button className="bg-brand text-ink px-8 py-4 rounded-full font-black italic tracking-tighter uppercase hover:bg-white transition-all relative z-10 shadow-[0_0_20px_rgba(193,255,0,0.2)]">
                  Contact Support
                </button>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand/10 blur-[80px] rounded-full group-hover:bg-brand/20 transition-colors duration-500" />
              </div>
              <div className="bg-ink p-12 rounded-[3rem] border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                <h3 className="text-3xl font-black italic mb-6 uppercase text-white relative z-10">Warranty Claims</h3>
                <p className="text-gray-400 text-lg mb-8 relative z-10">Fast and reliable warranty processing for all your CRM hardware.</p>
                <button className="bg-brand text-ink px-8 py-4 rounded-full font-black italic tracking-tighter uppercase hover:bg-white transition-all relative z-10 shadow-[0_0_20px_rgba(193,255,0,0.2)]">
                  Start a Claim
                </button>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand/10 blur-[80px] rounded-full group-hover:bg-brand/20 transition-colors duration-500" />
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <div className="mb-12">
              <h2 className="text-5xl font-black tracking-tighter italic uppercase mb-4 text-ink">
                {currentCategory}
              </h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest">{filteredProducts.length} Products Found</p>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <motion.div 
                    key={product.id}
                    layoutId={`product-card-${product.id}`}
                    onClick={() => setSelectedProduct(product)}
                    className="bg-ink p-8 rounded-[3rem] group cursor-pointer hover:shadow-[0_0_40px_rgba(193,255,0,0.15)] transition-all relative overflow-hidden border border-white/5 hover:border-brand/30"
                  >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <div className="h-64 mb-8 overflow-hidden rounded-[2rem] bg-white/5 flex items-center justify-center relative z-10">
                      <motion.img 
                        layoutId={`product-image-${product.id}`}
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand mb-2 block relative z-10">{product.category}</span>
                    <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-4 text-white relative z-10">{product.name}</h3>
                    <div className="flex justify-between items-center relative z-10">
                      <span className="text-2xl font-black italic text-white">R {product.price.toLocaleString()}</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                        className="w-12 h-12 bg-brand text-ink rounded-full flex items-center justify-center hover:bg-white transition-all shadow-[0_0_20px_rgba(193,255,0,0.2)]"
                      >
                        <ShoppingBag size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-40">
                <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-4 text-ink">No products found.</h3>
                <p className="text-gray-500">Try adjusting your category filters.</p>
              </div>
            )}
          </div>
        )}

        {currentCategory === 'all' && (
          <section className="py-32 px-6 bg-ink text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true }}
                className="text-center mb-24"
              >
                <h2 className="text-7xl md:text-[12rem] font-black tracking-tighter leading-none mb-8 italic uppercase">
                  THE <br /><span className="text-brand">FUTURE</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-xl leading-relaxed">
                  Experience hardware that pushes the boundaries of what's possible. Designed for the elite, built for the bold.
                </p>
              </motion.div>

              <div className="relative h-[700px] flex items-center justify-center">
                <motion.div 
                  style={{ rotateY: 15 }}
                  whileHover={{ rotateY: 0, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="w-full max-w-5xl aspect-video rounded-[4rem] overflow-hidden shadow-[0_0_150px_rgba(193,255,0,0.15)] cursor-pointer group"
                  onClick={() => setSelectedProduct(PRODUCTS[0])}
                >
                  <img 
                    src={PRODUCTS[0].image} 
                    alt="ASUS TUF" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                    <div>
                      <h3 className="text-4xl font-black italic uppercase tracking-tighter">{PRODUCTS[0].name}</h3>
                      <p className="text-brand font-bold uppercase tracking-widest mt-2">View Details</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 glass text-ink px-8 py-4 rounded-full font-black italic text-lg shadow-2xl"
                >
                  ULTRA-FAST
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 right-0 glass text-ink px-8 py-4 rounded-full font-black italic text-lg shadow-2xl"
                >
                  PRO-GRADE
                </motion.div>
              </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-brand/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />
          </section>
        )}
      </main>

      <Footer />
      </motion.div>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={addToCart}
      />

      <SearchOverlay 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        query={searchQuery}
        onSearch={setSearchQuery}
        results={filteredProducts}
        onProductClick={setSelectedProduct}
        onCategoryChange={setCurrentCategory}
      />
    </div>
    </SmoothScroll>
  );
}
