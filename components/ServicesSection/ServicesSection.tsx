'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, PanInfo } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

interface ServicesSectionProps {
  className?: string;
}

interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  avatar: string;
  bgColor: string;
  icon: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Campaign Generator",
      subtitle: "Launch multichannel campaigns powered by AI in minutes.",
      avatar: "/assets/cards/campaign-generator.png",
      bgColor: "bg-purple-100",
      icon: "✦"
    },
    {
      id: 2,
      title: "Smart Insights",
      subtitle: "Get real-time analytics, performance predictions, and growth suggestions.",
      avatar: "/assets/cards/smart-insights.png",
      bgColor: "bg-green-100",
      icon: "↗"
    },
    {
      id: 3,
      title: "AI Copywriting",
      subtitle: "Instantly generate headlines, captions, blogs, and ad copy",
      avatar: "/assets/cards/ai-copywriting.png",
      bgColor: "bg-orange-100",
      icon: "✦"
    },
    {
      id: 4,
      title: "Brand Voice AI",
      subtitle: "Keep your messaging consistent across platforms with trained AI.",
      avatar: "/assets/cards/brand-voice-ai.png",
      bgColor: "bg-blue-100",
      icon: "↗"
    },
    {
      id: 5,
      title: "Creative Media AI",
      subtitle: "Auto-generate visuals and short-form videos with brand consistency.",
      avatar: "/assets/cards/creative-media-ai.png",
      bgColor: "bg-pink-100",
      icon: "✦"
    },
    {
      id: 6,
      title: "Budget Optimizer",
      subtitle: "Track performance and shift ad spend intelligently to boost ROI.",
      avatar: "/assets/cards/budget-optimizer.png",
      bgColor: "bg-yellow-100",
      icon: "↗"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setAnimationKey(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setAnimationKey(prev => prev + 1);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevSlide(); // Swipe right = go to previous
    } else if (info.offset.x < -threshold) {
      nextSlide(); // Swipe left = go to next
    }
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % services.length;
      visible.push(services[index]);
    }
    return visible;
  };

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen bg-white py-20 px-6 lg:px-12 ${className}`}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header Text */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl lg:text-5xl text-black mb-4 leading-tight">
            <span className="flex items-center justify-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src="/assets/ai-marketing-dashboard.json"
                  style={{
                    height: '64px',
                    width: '64px'
                  }}
                  className="object-contain"
                />
              </div>
              <span className="font-normal">What</span>
              <span className="font-bold">ADmyBRAND AI Suite</span>
            </span>
            <span className="block font-bold mt-2">Can Do For You</span>
          </h2>
        </motion.div>

        {/* Rotating Avatar Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Service Cards Container */}
          <motion.div
            className="flex justify-center items-end gap-6 py-12 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: "grabbing" }}
          >
            {getVisibleServices().map((service, index) => (
              <motion.div
                key={`${service.id}-${animationKey}-${index}`}
                className="flex flex-col items-center"
                initial={{
                  opacity: 0,
                  y: 120,
                  scale: 0.5,
                  x: index === 0 ? -80 : index === 2 ? 80 : 0
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: index === 1 ? 1.05 : 0.95,
                  x: 0
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 90,
                  damping: 15,
                  delay: index * 0.1
                }}
              >

                {/* Title and Subtitle - Above the card */}
                <div className="text-center mb-6 w-72">
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed px-2">{service.subtitle}</p>
                </div>

                {/* Service Card with Icon Badge */}
                <div className="relative">
                  {/* Icon Badge */}
                  <div className="absolute -top-4 -left-4 z-20 flex gap-2">
                    <div className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-gray-600">{service.icon}</span>
                    </div>
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Avatar Card */}
                  <div className={`w-72 h-80 ${service.bgColor} rounded-3xl overflow-hidden shadow-lg relative`}>
                    <img
                      src={service.avatar}
                      alt={service.title}
                      className={`w-full h-full ${service.title === 'Budget Optimizer' ? 'object-cover object-center' : 'object-cover'}`}
                      style={{
                        imageRendering: 'crisp-edges',
                        filter: 'none'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.style.background = service.bgColor;
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                  ? 'bg-black w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;