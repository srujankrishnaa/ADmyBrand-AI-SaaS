'use client';

import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import PricingSection from '../components/PricingSection/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';
import FAQSection from '../components/FAQSection/FAQSection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [isFooterInView, setIsFooterInView] = useState(false);

  const handleGetStarted = () => {
    console.log('Get Started clicked');
  };

  const handleWatchDemo = () => {
    console.log('Watch Demo clicked');
  };

  const handleFooterInView = (inView: boolean) => {
    setIsFooterInView(inView);
    // Flag for stopping scroll animations when footer is in view
    if (inView) {
      console.log('Footer in view - stopping scroll animations');
    }
  };

  return (
    <main>
      <HeroSection 
        onGetStarted={handleGetStarted}
        onWatchDemo={handleWatchDemo}
        isFooterInView={isFooterInView}
      />
      <StatsSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer onFooterInView={handleFooterInView} />
    </main>
  );
}