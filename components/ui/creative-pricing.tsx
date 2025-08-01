'use client';

import * as React from "react";
import { motion, useInView } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export interface PricingTier {
  name: string;
  icon: React.ReactNode;
  price: number | string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: "amber" | "blue" | "purple" | "emerald" | "pink";
  buttonText?: string;
}

interface CreativePricingProps {
  tiers: PricingTier[];
  className?: string;
  title?: string;
  subtitle?: string;
  currency?: string;
}

const colorVariants = {
  amber: {
    gradient: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
  },
  blue: {
    gradient: "from-blue-500 to-purple-600",
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
  },
  purple: {
    gradient: "from-purple-500 to-pink-600",
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-200",
  },
  emerald: {
    gradient: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
  },
  pink: {
    gradient: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-200",
  },
};

const CreativePricing = React.forwardRef<
  HTMLDivElement,
  CreativePricingProps
>(({ 
  tiers, 
  className, 
  title = "Choose Your Perfect Plan",
  subtitle = "Unlock the power of AI-driven marketing with plans designed to scale with your business growth.",
  currency = "₹",
  ...props 
}, ref) => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-24 px-6 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} 
        />
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
            <span>💎</span>
            Premium Plans
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {tiers.map((tier, index) => {
            const colorConfig = colorVariants[tier.color];
            
            return (
              <motion.div
                key={tier.name}
                className={cn(
                  "relative",
                  tier.popular && "md:scale-105 md:-mt-4"
                )}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotateY: 0,
                  scale: tier.popular ? 1.05 : 1 
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
                  scale: tier.popular ? 1.08 : 1.03,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: '1000px' }}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      🔥 Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={cn(
                  "relative bg-white rounded-3xl p-8 shadow-xl border-2 h-full overflow-hidden group transition-all duration-300",
                  tier.popular ? colorConfig.border + " shadow-blue-100/50" : "border-gray-100"
                )}>
                  
                  {/* Background Gradient */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl",
                    colorConfig.bg
                  )} />
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-20 blur-lg" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={cn(
                      "w-16 h-16 rounded-2xl p-4 mb-6 shadow-lg bg-gradient-to-br",
                      colorConfig.gradient
                    )}>
                      <div className="text-white w-full h-full flex items-center justify-center">
                        {tier.icon}
                      </div>
                    </div>

                    {/* Plan Header */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {tier.description}
                      </p>
                      
                      {/* Price */}
                      <div className="mb-2">
                        {typeof tier.price === 'number' ? (
                          <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-bold text-gray-900">
                              {currency}{tier.price}
                            </span>
                            <span className="text-gray-500">
                              /{tier.period || 'month'}
                            </span>
                          </div>
                        ) : (
                          <div className="text-5xl font-bold text-gray-900">
                            {tier.price}
                          </div>
                        )}
                        {tier.price === 0 && (
                          <div className="text-emerald-600 font-medium mt-1">
                            No credit card required
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
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
                          <div className={cn(
                            "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                            colorConfig.text,
                            "bg-current bg-opacity-20"
                          )}>
                            <Check className="w-3 h-3 text-current" />
                          </div>
                          <span className="text-gray-700 leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={cn(
                        "w-full h-12 text-lg font-semibold transition-all duration-300",
                        tier.popular
                          ? `bg-gradient-to-r ${colorConfig.gradient} text-white shadow-lg hover:shadow-xl border-0 hover:scale-105`
                          : "bg-gray-900 text-white hover:bg-gray-800"
                      )}
                      size="lg"
                    >
                      {tier.buttonText || (
                        typeof tier.price === 'number' && tier.price === 0 
                          ? "Start Free" 
                          : tier.price === "Custom" 
                            ? "Contact Sales" 
                            : "Get Started"
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
});

CreativePricing.displayName = "CreativePricing";

export { CreativePricing };