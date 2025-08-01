'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import ClientOnly from '../components/ClientOnly';
import LoadingSection from '../components/LoadingSection';

// Dynamic imports with no SSR for components that use browser APIs
const HeroSection = dynamic(() => import('../components/HeroSection'), { ssr: false });
const StatsSection = dynamic(() => import('../components/StatsSection'), { ssr: false });
const ServicesSection = dynamic(() => import('../components/ServicesSection/ServicesSection'), { ssr: false });
const PricingSection = dynamic(() => import('../components/PricingSection/PricingSection'), { ssr: false });
const TestimonialsSection = dynamic(() => import('../components/TestimonialsSection/TestimonialsSection'), { ssr: false });
const FAQSection = dynamic(() => import('../components/FAQSection/FAQSection'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer/Footer'), { ssr: false });

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
      <ClientOnly fallback={<LoadingSection className="bg-gray-50" />}>
        <HeroSection 
          onGetStarted={handleGetStarted}
          onWatchDemo={handleWatchDemo}
          isFooterInView={isFooterInView}
        />
      </ClientOnly>
      
      <ClientOnly fallback={<LoadingSection className="bg-white" />}>
        <StatsSection />
      </ClientOnly>
      
      <ClientOnly fallback={<LoadingSection className="bg-gray-50" />}>
        <ServicesSection />
      </ClientOnly>
      
      <ClientOnly fallback={<LoadingSection className="bg-white" />}>
        <PricingSection />
      </ClientOnly>
      
      <ClientOnly fallback={<LoadingSection className="bg-gray-50" />}>
        <TestimonialsSection />
      </ClientOnly>
      
      <ClientOnly fallback={<LoadingSection className="bg-white" />}>
        <FAQSection />
      </ClientOnly>
      
      <ClientOnly fallback={<LoadingSection className="bg-gray-50" />}>
        <Footer onFooterInView={handleFooterInView} />
      </ClientOnly>
    </main>
  );
}