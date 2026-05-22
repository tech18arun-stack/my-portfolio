import React, { useRef, useState } from 'react';
import { motion as Motion, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Springs for smooth movement
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  // Map mouse positions to rotation degrees (max 12 deg tilt)
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  // Sheen reflection position maps
  const sheenX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const sheenY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the card (-0.5 to 0.5 range)
    const relativeX = (event.clientX - rect.left) / width - 0.5;
    const relativeY = (event.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 ${className}`}
      style={{ perspective: 1200 }}
    >
      <Motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: hovered ? 1.02 : 1,
          boxShadow: hovered 
            ? '0 30px 60px -15px rgba(0, 0, 0, 0.3), 0 0 40px 10px rgba(59, 130, 246, 0.15)' 
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="w-full h-full relative rounded-[3rem] overflow-hidden"
      >
        {/* Children element (actual image/card content) */}
        <div style={{ transform: 'translateZ(0px)' }} className="w-full h-full">
          {children}
        </div>

        {/* Glossy Sheen Overlay */}
        <Motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(circle at ${sheenX.get()} ${sheenY.get()}, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 60%)`,
          }}
        />

        {/* Ambient Glow */}
        <div 
          className="absolute -inset-10 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        />
      </Motion.div>
    </div>
  );
};

export default TiltCard;
