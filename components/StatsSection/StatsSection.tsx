'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

interface StatsSectionProps {
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  return (
    <section 
      ref={sectionRef}
      className={`min-h-screen bg-white py-20 px-6 lg:px-12 ${className}`}
    >
      <div className="container mx-auto max-w-6xl">
        
        {/* Top Information Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Side - Stats (appears first) */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {/* Brands Onboarded */}
            <div className="text-left">
              <motion.h3 
                className="text-4xl lg:text-5xl font-bold text-black mb-2"
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                2.5k+
              </motion.h3>
              <p className="text-base text-gray-600">Brands Onboarded</p>
            </div>

            {/* Years of AI Research */}
            <div className="text-left">
              <motion.h3 
                className="text-4xl lg:text-5xl font-bold text-black mb-2"
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                12+
              </motion.h3>
              <p className="text-base text-gray-600">Years of AI Research</p>
            </div>
          </motion.div>

          {/* Right Side - ADmyBRAND AI Info (appears second) */}
          <motion.div 
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              ADmyBRAND AI Suite is trusted by thousands of marketers and growing startups to craft data-driven campaigns using next-gen AI.
            </p>

            {/* Quote */}
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 italic border-l-4 border-green-400 pl-6">
              "Empowering every brand to market smarter, faster, better."
            </blockquote>
          </motion.div>
        </div>

        {/* Big White Rectangular Animation Box with Simultaneous Pop-up */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg border border-gray-100 h-[350px] relative overflow-hidden mb-12"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          {/* Background Landscape - Pops up first */}
          <motion.div
            className="absolute inset-0 rounded-3xl overflow-hidden"
            initial={{ y: "100%", scale: 0.7, opacity: 0 }}
            animate={isInView ? { y: "0%", scale: 1, opacity: 1 } : { y: "100%", scale: 0.7, opacity: 0 }}
            transition={{ 
              duration: 1.0, 
              ease: "easeOut", 
              delay: 0.8 
            }}
          >
            <img 
              src="/assets/landscape-background.png"
              alt="VR Landscape Background"
              className="w-full h-full object-cover"
              style={{
                imageRendering: 'crisp-edges',
                filter: 'none'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
              }}
            />
          </motion.div>

          {/* VR Person - Pops up after background, becomes part of scene */}
          <motion.div
            className="absolute bottom-0 right-1/4 transform translate-x-1/2"
            initial={{ y: "100%", scale: 0.4, opacity: 0 }}
            animate={isInView ? { y: "0%", scale: 1, opacity: 1 } : { y: "100%", scale: 0.4, opacity: 0 }}
            transition={{ 
              duration: 1.0, 
              ease: "easeOut", 
              delay: 1.8 
            }}
          >
            <img 
              src="/assets/vr-person.png"
              alt="VR Person"
              className="w-56 h-72 object-cover object-top"
              style={{
                imageRendering: 'crisp-edges',
                filter: 'none'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>

          {/* Integration overlay to blend both images seamlessly */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.8 }}
            style={{
              background: 'linear-gradient(45deg, rgba(0,0,0,0.05) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
              mixBlendMode: 'overlay'
            }}
          />

          {/* Subtle glow effect for cohesion */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 2.0 }}
            style={{
              background: 'radial-gradient(ellipse at center, rgba(138, 43, 226, 0.1) 0%, transparent 70%)',
              mixBlendMode: 'soft-light'
            }}
          />
        </motion.div>

        {/* Glassmorphic Text Below the Animation Box */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 2.8 }}
        >
          <div 
            className="relative px-12 py-6 rounded-3xl text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
            }}
          >
            {/* Glass reflection effect */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 50%, rgba(255, 255, 255, 0.2) 100%)'
              }}
            />
            
            <h3 className="relative text-2xl lg:text-3xl font-bold text-gray-900 tracking-wide drop-shadow-sm">
              Powering Intelligent Marketing
            </h3>
          </div>
        </motion.div>

        {/* Lottie Animation Below Glassmorphic Text */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 3.4 }}
        >
          <div className="w-full max-w-4xl h-32 flex items-center justify-center">
            <Player
              autoplay
              loop
              src="/assets/loading-progress.json"
              style={{ 
                height: '128px', 
                width: '100%',
                maxWidth: '800px'
              }}
              className="object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StatsSection;