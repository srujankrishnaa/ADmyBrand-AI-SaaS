'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CreativePricingProps {
  className?: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
  bgColor: string;
  textColor: string;
}

const CreativePricing: React.FC<CreativePricingProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: "₹0",
      period: "Forever",
      description: "Perfect for individuals and small projects",
      color: "emerald",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      features: [
        "Up to 3 projects",
        "Basic AI assistance",
        "Community support",
        "5GB storage",
        "Basic analytics"
      ]
    },
    {
      name: "Professional",
      price: "₹999",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      popular: true,
      features: [
        "Unlimited projects",
        "Advanced AI features",
        "Priority support",
        "100GB storage",
        "Advanced analytics",
        "Team collaboration",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      color: "purple",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "Dedicated support",
        "Custom development",
        "SLA guarantee",
        "Advanced security",
        "White-label options"
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>💰</span>
            Simple, Transparent Pricing
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Choose Your
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Start free and scale as you grow. No hidden fees, no surprises.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative ${plan.popular ? 'md:scale-105 md:-mt-4' : ''}`}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotateY: 0,
                scale: plan.popular ? 1.05 : 1 
              } : { 
                opacity: 0, 
                y: 50, 
                rotateY: -15 
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12,
                rotateY: 5,
                scale: plan.popular ? 1.08 : 1.03,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: '1000px' }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🔥 Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 ${
                plan.popular ? 'border-blue-200 shadow-blue-100/50' : 'border-gray-100'
              } h-full overflow-hidden group`}>
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${plan.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`} />
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-20 blur-lg" />

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.period !== "pricing" && (
                        <span className="text-gray-500 ml-2">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    {plan.price === "₹0" && (
                      <div className="text-emerald-600 font-medium">
                        No credit card required
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1.2 + index * 0.1 + featureIndex * 0.05 
                        }}
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full ${plan.textColor} bg-current bg-opacity-20 flex items-center justify-center mt-0.5`}>
                          <svg className="w-3 h-3 text-current" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    type="button"
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.price === "₹0" ? "Start Free" : 
                     plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-600 mb-6">
              We offer tailored plans for enterprises with specific requirements.
            </p>
            <motion.button
              type="button"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Sales →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativePricing;