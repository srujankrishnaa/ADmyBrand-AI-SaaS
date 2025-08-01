'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface PlayfulPricingProps {
  className?: string;
}

const PlayfulPricing: React.FC<PlayfulPricingProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const plans = [
    {
      name: "Free",
      emoji: "🌱",
      price: "₹0",
      period: "forever",
      color: "emerald",
      bgGradient: "from-emerald-400 to-teal-500",
      description: "Perfect for getting started",
      features: [
        "3 AI campaigns",
        "Basic templates",
        "Community support",
        "5GB storage"
      ],
      buttonText: "Start Free",
      rotation: "-rotate-2"
    },
    {
      name: "Pro",
      emoji: "🚀",
      price: "₹999",
      period: "per month",
      color: "blue",
      bgGradient: "from-blue-500 to-purple-600",
      description: "For growing businesses",
      features: [
        "Unlimited campaigns",
        "Premium templates",
        "Priority support",
        "100GB storage",
        "Advanced analytics",
        "Team collaboration"
      ],
      buttonText: "Go Pro",
      popular: true,
      rotation: "rotate-1"
    },
    {
      name: "Enterprise",
      emoji: "👑",
      price: "Custom",
      period: "pricing",
      color: "purple",
      bgGradient: "from-purple-500 to-pink-600",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Dedicated support",
        "Unlimited storage",
        "White-label options",
        "SLA guarantee"
      ],
      buttonText: "Contact Us",
      rotation: "-rotate-1"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-6 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden ${className}`}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 text-4xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 text-3xl"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          💎
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-32 text-3xl"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 20, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          🎯
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-4xl"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          🚀
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-block text-6xl mb-6"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💰
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            Pricing That
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Makes Sense!
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            Choose a plan that grows with you. No tricks, no hidden fees! 🎉
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative ${plan.rotation} ${plan.popular ? 'md:scale-110 md:-mt-8' : ''}`}
              initial={{ opacity: 0, y: 100, rotate: 0 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotate: plan.popular ? 0 : (index === 0 ? -2 : index === 2 ? 1 : 0)
              } : { 
                opacity: 0, 
                y: 100, 
                rotate: 0 
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: plan.popular ? 1.15 : 1.05,
                rotate: 0,
                y: -20,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Popular Sticker */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-6 -right-6 z-20"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 15 }}
                  transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                    🔥 HOT!
                  </div>
                </motion.div>
              )}

              {/* Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-gray-900 h-full relative overflow-hidden group">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>

                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`} />

                <div className="relative z-10" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      className="text-6xl mb-4"
                      animate={hoveredCard === index ? { 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {plan.emoji}
                    </motion.div>
                    
                    <h3 className="text-3xl font-black text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-lg">
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-2">
                      <span className="text-5xl font-black text-gray-900">
                        {plan.price}
                      </span>
                      {plan.period !== "pricing" && (
                        <div className="text-gray-500 text-lg">
                          {plan.period}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1.2 + index * 0.1 + featureIndex * 0.1 
                        }}
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    type="button"
                    className={`w-full py-4 px-6 rounded-2xl font-black text-xl border-4 border-gray-900 transition-all duration-300 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.bgGradient} text-white shadow-lg hover:shadow-2xl`
                        : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, -1, 1, 0]
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {plan.buttonText} 🎉
                  </motion.button>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20" />
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-pink-400 rounded-full opacity-20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Fun Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 rounded-3xl p-8 max-w-2xl mx-auto border-4 border-gray-900 shadow-2xl">
            <motion.div
              className="text-4xl mb-4"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🤔
            </motion.div>
            <h3 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Still not sure?
            </h3>
            <p className="text-gray-600 mb-6 text-lg" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Let's chat! We love helping businesses find their perfect plan! 💬
            </p>
            <motion.button
              type="button"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-black text-xl border-4 border-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0]
              }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              Let's Talk! 🎉
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlayfulPricing;