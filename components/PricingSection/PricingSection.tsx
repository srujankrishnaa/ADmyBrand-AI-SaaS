'use client';

import React from 'react';
import { CreativePricing } from '@/components/ui/creative-pricing';
import type { PricingTier } from '@/components/ui/creative-pricing';
import { Pencil, Star, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ className = '' }) => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      icon: <Pencil className="w-6 h-6" />,
      price: 0,
      period: "month",
      description: "Perfect for getting started with AI marketing",
      color: "emerald",
      buttonText: "Start Free Trial",
      features: [
        "AI campaign ideas (limited)",
        "3 brand profiles",
        "1 user seat",
        "Basic analytics",
        "Email support"
      ]
    },
    {
      name: "Pro",
      icon: <Star className="w-6 h-6" />,
      price: 999,
      period: "month",
      description: "Best for growing businesses and marketing teams",
      color: "blue",
      buttonText: "Get Started",
      features: [
        "Everything in Starter",
        "Unlimited campaigns",
        "10 brand profiles",
        "5 user seats",
        "AI content generator",
        "Smart reports",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      icon: <Sparkles className="w-6 h-6" />,
      price: "Custom",
      description: "Tailored solutions for large organizations",
      color: "purple",
      buttonText: "Contact Sales",
      features: [
        "Everything in Pro",
        "Unlimited brand profiles",
        "Unlimited user seats",
        "White-labeling",
        "Team collaboration tools",
        "Dedicated success manager",
        "API access",
        "24/7 support"
      ]
    }
  ];

  return (
    <CreativePricing
      tiers={pricingTiers}
      title="Choose Your Perfect Plan"
      subtitle="Unlock the power of AI-driven marketing with plans designed to scale with your business growth."
      currency="₹"
      className={className}
    />
  );
};

export default PricingSection;