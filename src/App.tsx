import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Category } from './pages/Category';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Contact } from './pages/Contact';
import { CustomCursor } from './components/CustomCursor';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
        <Route path="/category/:categoryId" element={<PageWrapper><Category /></PageWrapper>} />
        <Route path="/product/:productId" element={<PageWrapper><ProductDetail /></PageWrapper>} />
        <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
        <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen selection:bg-brand selection:text-ink relative">
        <div className="noise-bg" />
        <CustomCursor />
        
        <AnimatePresence>
          {isLoading ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 z-[100] bg-ink flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-4">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center"
                >
                  <span className="text-ink font-black text-4xl">C</span>
                </motion.div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-[2px] bg-brand/30 relative overflow-hidden"
                >
                  <motion.div 
                    animate={{ x: [-120, 120] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-brand"
                  />
                </motion.div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <Navbar />
        
        <AnimatedRoutes />

        <Footer />
      </div>
    </Router>
  );
}
