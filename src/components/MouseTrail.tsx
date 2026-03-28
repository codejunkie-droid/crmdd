import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const MouseTrail = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'button' || target.closest('button') || target.tagName.toLowerCase() === 'a' || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });
  
  const slowX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 1 });
  const slowY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference">
      {/* Core Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-2 h-2 bg-white rounded-full absolute"
      />
      
      {/* Outer Ring */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.4
        }}
        className="w-12 h-12 border border-white rounded-full absolute flex items-center justify-center"
      >
        {isHovering && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-full h-full border border-brand rounded-full animate-ping absolute"
          />
        )}
      </motion.div>

      {/* Crosshairs */}
      <motion.div
        style={{
          x: slowX,
          y: slowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-24 h-24 absolute opacity-20"
      >
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white -translate-x-1/2" />
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white -translate-y-1/2" />
      </motion.div>
    </div>
  );
};
