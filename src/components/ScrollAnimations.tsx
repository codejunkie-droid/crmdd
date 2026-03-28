import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const RevealText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="block"
      >
        {text}
      </motion.span>
    </div>
  );
};

export const ParallaxImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img
        style={{ y, scale: 1.2 }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const StickyScroll = ({ items }: { items: { title: string; description: string; image: string }[] }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const cardCount = items.length;

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const cardsBreakpoints = items.map((_, index) => index / cardCount);
      const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      }, 0);
      setActiveCard(closestBreakpointIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress, cardCount, items]);

  return (
    <div ref={ref} className="relative h-[300vh] flex flex-col md:flex-row gap-20 px-6 max-w-7xl mx-auto py-20">
      <div className="md:w-1/2 sticky top-40 h-fit">
        <div className="space-y-20">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-6xl font-black italic tracking-tighter uppercase">{item.title}</h3>
              <p className="text-xl text-gray-500 max-w-md leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 sticky top-40 h-[60vh] rounded-[4rem] overflow-hidden glass">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeCard}
            initial={{ opacity: 0, scale: 1.1, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            src={items[activeCard].image}
            alt={items[activeCard].title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

import { AnimatePresence } from 'motion/react';
