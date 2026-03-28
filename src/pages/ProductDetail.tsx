import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight, Star, ShoppingCart, ShieldCheck, Truck } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const fadeUpItem = {
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

export const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  
  const product = PRODUCTS.find(p => p.id === productId);
  
  if (!product) {
    return <div className="pt-32 text-center text-4xl font-bold">Product not found</div>;
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bento-card relative h-[500px] lg:h-[700px] flex items-center justify-center p-0 overflow-hidden group bg-gray-50"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {product.featured && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-6 left-6 bg-brand text-ink px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg"
              >
                Featured
              </motion.div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeUpItem} className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full">{product.category}</span>
              <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-bold text-gray-700">{product.rating} <span className="text-gray-400 font-normal">({product.reviews} reviews)</span></span>
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeUpItem} className="text-5xl lg:text-7xl font-black tracking-tighter mb-4 leading-[0.9] bg-clip-text text-transparent bg-gradient-to-br from-ink to-ink/70">
              {product.name}
            </motion.h1>
            
            <motion.p variants={fadeUpItem} className="text-4xl font-light text-gray-500 mb-8 flex items-baseline gap-2">
              <span className="text-2xl font-medium text-gray-400">R</span>
              <span className="text-ink font-bold">{product.price.toLocaleString()}</span>
            </motion.p>
            
            <motion.p variants={fadeUpItem} className="text-lg text-gray-600 mb-12 max-w-xl leading-relaxed">
              {product.description}
            </motion.p>

            {product.specs && (
              <motion.div variants={fadeUpItem} className="mb-12">
                <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-4">
                  Key Specifications
                  <div className="h-px bg-gray-200 flex-1" />
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.specs.map((spec, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ scale: 1.02, backgroundColor: '#f9fafb' }}
                      className="flex items-center gap-3 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-brand rounded-full shadow-[0_0_8px_rgba(193,255,0,0.8)]" />
                      <span className="font-medium text-sm text-gray-700">{spec}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex-1 bg-ink text-white px-8 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-ink/90 transition-colors text-lg shadow-xl shadow-ink/20 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Add to Cart</span>
              </motion.button>
            </motion.div>

            <motion.div variants={fadeUpItem} className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand/10 transition-colors duration-300">
                  <Truck className="w-6 h-6 text-gray-600 group-hover:text-brand transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1 group-hover:text-ink transition-colors duration-300">Free Delivery</h4>
                  <p className="text-xs text-gray-500">On orders over R 1,000</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand/10 transition-colors duration-300">
                  <ShieldCheck className="w-6 h-6 text-gray-600 group-hover:text-brand transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1 group-hover:text-ink transition-colors duration-300">2 Year Warranty</h4>
                  <p className="text-xs text-gray-500">Official manufacturer warranty</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-4xl font-black tracking-tighter">You might also like</h2>
              <div className="h-px bg-gray-200 flex-1" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((p, i) => (
                <motion.div 
                  key={p.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bento-card group flex flex-col justify-between bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative h-56 mb-6 rounded-2xl overflow-hidden bg-gray-50">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    <Link 
                      to={`/product/${p.id}`} 
                      className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-all duration-300 shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </Link>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full">{p.category}</span>
                      <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-bold text-gray-700">{p.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-1 group-hover:text-brand transition-colors duration-300">{p.name}</h3>
                    <p className="text-3xl font-black tracking-tighter text-ink">R {p.price.toLocaleString()}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
};
