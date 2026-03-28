import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const BRANDS = [
  "NVIDIA", "INTEL", "AMD", "ASUS", "MSI", "ACER", "SEAGATE", "TP-LINK", "CRUCIAL", "RAZER", "CORSAIR", "SAMSUNG", "LOGITECH", "DELL", "HP", "LENOVO"
];

export const HorizontalBrands = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-ink">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-24 px-24">
          {BRANDS.map((brand, i) => (
            <div
              key={i}
              className="group relative flex items-center justify-center"
            >
              <span className="text-[20vw] font-black italic tracking-tighter text-white/5 transition-colors group-hover:text-brand">
                {brand}
              </span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-4xl font-bold text-ink bg-brand px-8 py-4 rounded-full -rotate-12">
                  ELITE PARTNER
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
