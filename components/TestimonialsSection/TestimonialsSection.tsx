
'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "ADmyBRAND has completely transformed the way we approach digital marketing. From campaign generation to performance optimization, it's like having a 24/7 strategist embedded in our team.",
      author: "Aditi Mehra",
      position: "CMO",
      company: "FreshGrow Organics",
      image: "/assets/customers/aditi-mehra.jpg"
    },
    {
      id: 2,
      content: "The AI campaign builder alone saved us over 20 hours every month. It's intuitive, powerful, and delivers campaigns that actually convert. Our CAC dropped by 17% within the first month.",
      author: "Vikram Reddy",
      position: "Founder",
      company: "LaunchX Technologies",
      image: "/assets/customers/vikram-reddy.jpg"
    },
    {
      id: 3,
      content: "Brilliant design, actionable insights, and top-tier support. ADmyBRAND feels like a premium tool without the enterprise complexity. We use it daily across our entire marketing stack.",
      author: "Jessica Kim",
      position: "Marketing Head",
      company: "NeoByte Systems",
      image: "/assets/customers/jessica-kim.jpg"
    },
    {
      id: 4,
      content: "We scaled our influencer outreach campaigns 3x faster using ADmyBRAND's AI workflows. The content suggestions and performance tracking are incredibly smart.",
      author: "Rhea Sharma",
      position: "Digital Lead",
      company: "Zinco Cosmetics",
      image: "/assets/customers/rhea-sharma.jpg"
    },
    {
      id: 5,
      content: "What used to take a team of three, now takes one person with ADmyBRAND. Its automation and creative tools have streamlined everything from ad copy to video creatives.",
      author: "Karan Patel",
      position: "Co-founder",
      company: "AdNest Agency",
      image: "/assets/customers/karan-patel.jpg"
    },
    {
      id: 6,
      content: "We needed something robust yet easy to onboard our regional teams with. ADmyBRAND ticked every box — multilingual support, visual dashboards, and blazing fast load times.",
      author: "Ananya Iyer",
      position: "VP Growth",
      company: "MyRetail360",
      image: "/assets/customers/ananya-iyer.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({ ...testimonials[index], carouselPosition: i });
    }
    return visible;
  };

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-6 bg-white relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Lottie Animations */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >


          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-6 mb-2">
              {/* Handshake Animation - Beside "What" with space, centered aligned */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 1.0, delay: 0.6 }}
              >
                <Player
                  autoplay
                  loop
                  src="/assets/lottie/handshake-loop.json"
                  style={{ height: '100px', width: '100px' }}
                />
              </motion.div>

              <span>What our <span className="text-blue-600">Clients</span> are</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span>saying <span className="text-blue-600">about us</span></span>
              <span className="text-blue-600 text-6xl font-bold">!</span>

              {/* Car Animation - After the exclamation mark (looks like it hit it) */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                <Player
                  autoplay
                  loop
                  src="/assets/lottie/growth-car.json"
                  style={{ height: '80px', width: '100px' }}
                />
              </motion.div>
            </div>
          </motion.h2>

          {/* Right side decorative element for balance */}
          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-12"
            initial={{ opacity: 0, scale: 0.5, rotate: 12 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 12 } : { opacity: 0, scale: 0.5, rotate: 12 }}
            transition={{ duration: 1.0, delay: 1.0 }}
          >
            <div className="w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full opacity-30 mt-2 ml-4"></div>
            <div className="w-6 h-6 bg-purple-500 rounded-full opacity-25 mt-1 ml-2"></div>
          </motion.div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center min-h-[500px]">
            {getVisibleTestimonials().map((testimonial, index) => {
              const isCenter = testimonial.carouselPosition === 0;
              const isLeft = testimonial.carouselPosition === -1;
              const isRight = testimonial.carouselPosition === 1;

              return (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  className={`absolute transition-all duration-500 ease-in-out ${isCenter
                    ? 'z-20 scale-100 opacity-100'
                    : 'z-10 scale-75 opacity-40'
                    }`}
                  style={{
                    transform: `translateX(${testimonial.carouselPosition * 550}px) scale(${isCenter ? 1 : 0.75})`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1 : 0.75,
                    x: testimonial.carouselPosition * 550
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* Testimonial Card */}
                  <div className={`bg-white rounded-[3rem] p-12 shadow-lg border w-[520px] h-[450px] flex flex-col ${isCenter ? 'border-black border-[4px] shadow-xl' : 'border-gray-300 border-[2px]'
                    }`}>
                    {/* Customer Photo */}
                    <div className="flex justify-center mb-8">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 shadow-md">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.style.background = '#e5e7eb';
                            e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-600 font-bold text-xl">${testimonial.author.split(' ').map(n => n[0]).join('')}</div>`;
                          }}
                        />
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1 text-center mb-8">
                      <p className="text-gray-700 text-xl leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="text-center">
                      <h4 className="font-bold text-black text-2xl mb-2">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-400 text-lg">
                        {testimonial.position} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              type="button"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 border border-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </motion.button>

            <motion.button
              type="button"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-xl bg-black hover:bg-gray-800 flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;