'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "Do you work with small businesses?",
      answer: "Yes, our platform is designed to support brands of all sizes, offering scalable solutions tailored to individual needs."
    },
    {
      id: 2,
      question: "Do you offer ongoing support?",
      answer: "Absolutely. We provide continuous assistance, detailed documentation, and intelligent support tools to guide users throughout their journey."
    },
    {
      id: 3,
      question: "How long does the project take on average?",
      answer: "Timelines may vary based on goals, but our AI tools are built for rapid deployment with minimal manual setup."
    },
    {
      id: 4,
      question: "Is there a possibility of offline meetings?",
      answer: "While we are primarily digital-first, we offer downloadable reports and summaries that are perfect for offline presentations and collaboration."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-6 bg-white relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Title and Description */}
          <div className="space-y-8">
            {/* Animated Title */}
            <div className="space-y-2">
              {/* Line 1: "Customized" with circle animation */}
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.1, delay: 0 }}
              >
                <motion.h2
                  className="text-4xl md:text-5xl leading-tight text-gray-900"
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0,
                    ease: "easeOut"
                  }}
                >
                  Customized{' '}
                  {/* Circle Lottie Animation - Even bigger to match font size */}
                  <span className="inline-block ml-4">
                    <Player
                      autoplay
                      loop
                      src="/assets/animations/circle-lottie.json"
                      style={{ height: '70px', width: '70px' }}
                    />
                  </span>
                </motion.h2>
              </motion.div>

              {/* Line 2: "solutions to your" */}
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.1, delay: 0.8 }}
              >
                <motion.h2
                  className="text-4xl md:text-5xl leading-tight text-gray-900"
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8,
                    ease: "easeOut"
                  }}
                >
                  <span className="font-bold">solutions</span> to your
                </motion.h2>
              </motion.div>

              {/* Line 3: "Business Goal" with underline animation */}
              <motion.div
                className="overflow-visible"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.1, delay: 1.6 }}
              >
                <div className="relative inline-block">
                  <motion.h2
                    className="text-4xl md:text-5xl leading-tight font-bold text-black"
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.6,
                      ease: "easeOut"
                    }}
                  >
                    Business <span className="relative inline-block">Goal
                      {/* Underline Lottie Animation - Positioned specifically under "Goal" */}
                      <div className="absolute -bottom-6 left-0 z-10">
                        <Player
                          autoplay
                          loop
                          src="/assets/animations/underline-lottie.json"
                          style={{ height: '40px', width: '120px' }}
                          onError={(error) => console.error('Underline animation error:', error)}
                        />
                      </div>
                    </span>
                  </motion.h2>
                </div>
              </motion.div>
            </div>

            {/* Step 6: Placeholder text and "Ask a question" appear at the same time */}
            <motion.div
              className="text-lg text-gray-600 leading-relaxed max-w-lg relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 3.8 }}
            >
              <p>
                We understand that every brand is unique. That's why our AI adapts to your business goals, offering tailored campaigns and support every step of the way.
              </p>
              
              {/* Arrow Image - positioned to align with 3rd FAQ */}
              <div className="absolute -right-20 top-32 transform">
                <img 
                  src="/assets/images/arrow-image.png" 
                  alt="Arrow" 
                  className="w-16 h-16" 
                />
              </div>
            </motion.div>

            {/* Ask a Question Button - appears same time as placeholder text */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 3.8 }}
            >
              <button type="button" className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors tracking-wide">
                Ask a question
              </button>
              {/* Paper Airplane Lottie Animation - depicting question traveling */}
              <div className="-ml-1">
                <Player
                  autoplay
                  loop
                  src="/assets/animations/paper-airplane.json"
                  style={{ height: '75px', width: '75px' }}
                  onError={(error) => console.error('Paper airplane animation error:', error)}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="border border-gray-300 rounded-3xl overflow-hidden bg-gray-50"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 2.8 + index * 0.1 }}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openFAQ === faq.id ? (
                      <Minus className="w-7 h-7 text-gray-600" />
                    ) : (
                      <Plus className="w-7 h-7 text-gray-600" />
                    )}
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="px-8 pb-8 pt-4"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <p className="text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;