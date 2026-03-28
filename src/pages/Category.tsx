import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight, Star } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Find the actual category name based on the URL param
  const categoryName = CATEGORIES.find(c => c.toLowerCase().replace(' ', '-') === categoryId);
  
  const categoryProducts = PRODUCTS.filter(p => p.category === categoryName);

  if (!categoryName) {
    return <div className="pt-32 text-center text-4xl font-bold">Category not found</div>;
  }

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
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-ink to-ink/70">
            {categoryName}
          </h1>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="px-6 py-2 bg-white border border-gray-200 rounded-full font-bold text-sm hover:border-brand hover:bg-brand/10 transition-all duration-300 shadow-sm hover:shadow-md block">
              All
            </Link>
            {CATEGORIES.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <Link 
                  to={`/category/${c.toLowerCase().replace(' ', '-')}`}
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 block ${c === categoryName ? 'bg-ink text-white shadow-lg shadow-ink/20 hover:scale-105' : 'bg-white border border-gray-200 hover:border-brand hover:bg-brand/10 shadow-sm hover:shadow-md'}`}
                >
                  {c}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {categoryProducts.length === 0 ? (
          <div className="text-center py-24 text-gray-500">
            No products found in this category.
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {categoryProducts.map((product) => (
              <motion.div 
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bento-card group flex flex-col justify-between bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 relative overflow-hidden"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative h-56 mb-6 rounded-2xl overflow-hidden bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  <Link 
                    to={`/product/${product.id}`} 
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-all duration-300 shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-1 group-hover:text-brand transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-3xl font-black tracking-tighter text-ink">
                    R {product.price.toLocaleString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </main>
  );
};
