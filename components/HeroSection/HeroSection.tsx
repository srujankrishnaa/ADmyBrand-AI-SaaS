'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { HeroSectionProps } from './types';
import {
  containerVariants,
  logoVariants,
  textLineVariants,
  cardContainerVariants,
  cardVariants,
  cardFloatingVariants,
  buttonVariants
} from './animations';

const HeroSection: React.FC<HeroSectionProps> = ({
  className = '',
  onGetStarted,
  onWatchDemo,
  isFooterInView = false
}) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 800); // Logo moves to nav (faster)
    const timer2 = setTimeout(() => setAnimationStep(2), 1600); // "The Next Level" appears (faster)
    const timer3 = setTimeout(() => setAnimationStep(3), 2400); // "Marketing For" appears (faster)
    const timer4 = setTimeout(() => setAnimationStep(4), 3200); // "Your Brand" with arrow appears + avatars start (faster)
    const timer5 = setTimeout(() => setAnimationStep(5), 4000); // Final content appears (faster)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-white relative overflow-hidden ${className}`}>
      {/* Subtle Background Pattern - appears with "Marketing For" */}
      <AnimatePresence>
        {animationStep >= 3 && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        )}
      </AnimatePresence>

      {/* Grid Fade Overlay - makes grid dimmer on left, brighter on right */}
      <AnimatePresence>
        {animationStep >= 3 && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 50%, transparent 100%)'
            }}
          />
        )}
      </AnimatePresence>
      {/* Navigation Header */}
      <nav className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-6">
        <AnimatePresence>
          {animationStep >= 1 && (
            <motion.div
              className="text-2xl font-bold text-green-400"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              ADmyBRAND AI
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:flex items-center space-x-8 text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Project</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Services</a>
        </div>
        <button type="button" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
          Login
        </button>
      </nav>

      {/* Center Logo Animation */}
      <AnimatePresence>
        {animationStep === 0 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, x: -400, y: -200 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <h1 className="text-8xl font-bold text-green-400">ADmyBRAND AI</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.section
        className="relative z-10 container mx-auto px-6 lg:px-12 pt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">

          {/* Left Column - Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            {/* Global Agency Badge */}
            <AnimatePresence>
              {animationStep >= 2 && (
                <motion.div
                  className="flex items-center space-x-2 text-sm text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-green-400">✦</span>
                  <span>Global Agency</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Headline with Sequential Animation */}
            <div className="space-y-2">
              <AnimatePresence>
                {animationStep >= 2 && (
                  <motion.h1
                    className="text-5xl lg:text-6xl font-bold text-black leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                    The Next Level
                  </motion.h1>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {animationStep >= 3 && (
                  <motion.h1
                    className="text-5xl lg:text-6xl font-bold text-black leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                    Marketing For
                  </motion.h1>
                )}
              </AnimatePresence>

              {/* "Your Brand" with arrow - Third Animation */}
              <AnimatePresence>
                {animationStep >= 4 && (
                  <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                    {/* Curly Arrow Image */}
                    <motion.img
                      src="/assets/curly-arrow.png"
                      alt="Curly Arrow"
                      className="w-24 h-20 object-contain"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.0, ease: "easeOut" }}
                    />

                    {/* "Your Brand" text with gradient */}
                    <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                      Your Brand
                    </h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Subtext */}
            <AnimatePresence>
              {animationStep >= 5 && (
                <motion.p
                  className="text-xl text-gray-600 max-w-lg leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Meet ADmyBRAND AI Suite – your intelligent assistant for campaigns, insights, and content generation.
                </motion.p>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <AnimatePresence>
              {animationStep >= 5 && (
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.button
                    type="button"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={onGetStarted}
                  >
                    <span>Get Started</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>

                  <motion.button
                    type="button"
                    className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium flex items-center space-x-2 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={onWatchDemo}
                  >
                    <span>Watch Demo</span>
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scroll indicator */}
            <AnimatePresence>
              {animationStep >= 5 && (
                <motion.div
                  className="flex items-center space-x-2 text-gray-400 text-sm pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Avatar Cards with Unique Layout */}
          <div className="lg:col-span-5 lg:col-start-8 flex items-center justify-center relative">
            <div className="relative w-full max-w-lg">
              {/* Top Row - Asymmetrical */}
              <div className="flex gap-4 mb-6 items-start">
                {/* Large Portrait Card - Avatar 1 - Appears with "Your Brand" */}
                <AnimatePresence>
                  {animationStep >= 4 && (
                    <motion.div
                      className="w-52 h-72 rounded-3xl overflow-hidden bg-gray-200 shadow-lg"
                      initial={{ opacity: 0, y: 60, scale: 0.7, rotate: -8 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                      <img
                        src="/assets/avatars/avatar-1.png"
                        alt="Avatar 1"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.style.background = 'linear-gradient(to bottom right, #ddd6fe, #c4b5fd)';
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Medium Landscape Card - Avatar 2 - Appears second */}
                <AnimatePresence>
                  {animationStep >= 4 && (
                    <motion.div
                      className="w-44 h-36 rounded-3xl overflow-hidden bg-gray-200 shadow-lg mt-8"
                      initial={{ opacity: 0, y: 60, scale: 0.7, rotate: 8 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotate: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    >
                      <img
                        src="/assets/avatars/avatar-2.png"
                        alt="Avatar 2"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.style.background = 'linear-gradient(to bottom right, #dcfce7, #fef3c7)';
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Row - Offset */}
              <div className="flex gap-4 ml-8">
                {/* Medium Portrait Card - Avatar 3 - Appears third */}
                <AnimatePresence>
                  {animationStep >= 4 && (
                    <motion.div
                      className="w-40 h-52 rounded-3xl overflow-hidden bg-gray-200 shadow-lg"
                      initial={{ opacity: 0, y: 60, scale: 0.7, rotate: 8 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotate: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                    >
                      <img
                        src="/assets/avatars/avatar-3.png"
                        alt="Avatar 3"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.style.background = 'linear-gradient(to bottom right, #fce7f3, #fdf2f8)';
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Large Square Card - Avatar 4 - Appears last */}
                <AnimatePresence>
                  {animationStep >= 4 && (
                    <motion.div
                      className="w-56 h-64 rounded-3xl overflow-hidden bg-gray-200 shadow-lg -mt-4"
                      initial={{ opacity: 0, y: 60, scale: 0.7, rotate: -8 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotate: -1 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                    >
                      <img
                        src="/assets/avatars/avatar-4.png"
                        alt="Avatar 4"
                        className="w-full h-full object-cover object-top"
                        style={{ objectPosition: 'center top' }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.style.background = 'linear-gradient(to bottom right, #fed7aa, #fecaca)';
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Floating decorative elements - appear with avatars */}
              <AnimatePresence>
                {animationStep >= 4 && (
                  <>
                    <motion.div
                      className="absolute -top-4 -left-4 w-3 h-3 bg-green-400 rounded-full opacity-60"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.6, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.0 }}
                    />
                    <motion.div
                      className="absolute top-1/3 -right-2 w-2 h-2 bg-blue-400 rounded-full opacity-50"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.5, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.3 }}
                    />
                    <motion.div
                      className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-40"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.4, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.6 }}
                    />
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </motion.section>

      {/* Center Arrow Pointing to Avatars - Bottom Center */}
      <AnimatePresence>
        {animationStep >= 5 && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <motion.img
              src="/assets/center-arrow.png"
              alt="Center Arrow Pointing to Avatars"
              className="w-32 h-24 object-contain"
              animate={{
                x: [0, 10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lottie Scroll Animation - Extreme Right - Stops when footer is in view */}
      <AnimatePresence>
        {animationStep >= 5 && !isFooterInView && (
          <motion.div
            className="fixed bottom-8 right-8 z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <Player
              autoplay
              loop
              src="/assets/scroll-animation.json"
              style={{ height: '64px', width: '64px' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;