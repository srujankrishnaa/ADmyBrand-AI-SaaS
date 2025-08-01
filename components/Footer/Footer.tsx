'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/moving-border-button';
import Lottie from 'lottie-react';

interface FooterProps {
    className?: string;
    onFooterInView?: (inView: boolean) => void; // Flag for scroll animation
}

const Footer: React.FC<FooterProps> = ({ className = '', onFooterInView }) => {
    const footerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(footerRef, { once: true, amount: 0.3 });
    const [currentStep, setCurrentStep] = useState(0);
    const [skateboardAnimation, setSkateboardAnimation] = useState(null);

    // Flag the scroll animation when footer comes into view
    useEffect(() => {
        if (onFooterInView) {
            onFooterInView(isInView);
        }
    }, [isInView, onFooterInView]);

    // Load Lottie animation data
    useEffect(() => {
        const loadAnimation = async () => {
            try {
                const response = await fetch('/assets/skateboard-animation.json');
                const animationData = await response.json();
                setSkateboardAnimation(animationData);
            } catch (error) {
                console.error('Failed to load skateboard animation:', error);
            }
        };
        loadAnimation();
    }, []);

    // Animation sequence timing
    useEffect(() => {
        if (isInView) {
            const timers = [
                setTimeout(() => setCurrentStep(1), 500),   // Step 1: Show main content
                setTimeout(() => setCurrentStep(2), 1500),  // Step 2: Show email form
                setTimeout(() => setCurrentStep(3), 2500),  // Step 3: Show footer links
                setTimeout(() => setCurrentStep(4), 3500),  // Step 4: Final state
            ];

            return () => timers.forEach(clearTimeout);
        }
    }, [isInView]);

    const footerLinks = {
        company: [
            { name: 'Brand', href: '#' },
            { name: 'Contact', href: '#' },
            { name: 'About us', href: '#' }
        ],
        support: [
            { name: 'Pricing', href: '#' },
            { name: 'Guides', href: '#' }
        ],
        legal: [
            { name: 'Claim', href: '#' },
            { name: 'Privacy', href: '#' },
            { name: 'Terms', href: '#' }
        ]
    };

    return (
        <footer
            ref={footerRef}
            className={`relative min-h-screen bg-gray-50 overflow-hidden ${className}`}
        >
            {/* Background Grid Pattern - Same as Hero Section */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-grid-pattern bg-grid" />
            </div>

            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Main Content Section */}
                <div className="flex-1 flex items-center justify-center px-6 py-24">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            {/* Left Column - Main Title */}
                            <div className="space-y-6">
                                {/* Animated Title - Exact typography from reference */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-gray-900">
                                        Let's make
                                    </h2>
                                    <div className="flex items-center gap-6 mt-4">
                                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-gray-900">
                                            Something
                                        </h2>
                                        {/* "Great" with moving border - appears in step 1 */}
                                        <motion.div
                                            className="relative"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={currentStep >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                        >
                                            <Button
                                                borderRadius="2rem"
                                                className="bg-white border-black text-white font-bold text-4xl md:text-5xl lg:text-6xl"
                                                containerClassName="w-auto h-auto p-2"
                                                borderClassName="bg-[radial-gradient(var(--green-500)_40%,transparent_60%)]"
                                                duration={3000}
                                            >
                                                <span className="px-8 py-4 font-bold" style={{
                                                    color: 'black'
                                                }}>Great</span>
                                            </Button>
                                            {/* Underline animation under "Great" */}
                                            <motion.div
                                                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                                                initial={{ opacity: 0, pathLength: 0 }}
                                                animate={currentStep >= 2 ? { opacity: 1, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
                                                transition={{ duration: 0.8, delay: 0.3 }}
                                            >
                                                <svg width="200" height="30" viewBox="0 0 200 30" className="text-gray-600">
                                                    <path
                                                        d="M10 20 Q 100 5, 190 20"
                                                        stroke="currentColor"
                                                        strokeWidth="3"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-gray-900 mt-4">
                                        Together!
                                    </h2>
                                </motion.div>
                            </div>

                            {/* Right Column - Email Form */}
                            <div className="flex flex-col items-end space-y-8">
                                {/* Email Form - appears in step 2 */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={currentStep >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="w-full max-w-md"
                                >
                                    <div className="flex items-center bg-white rounded-xl border border-gray-300 overflow-hidden shadow-sm">
                                        <div className="flex items-center px-4 py-4 text-gray-400">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Your E-mail"
                                            className="flex-1 px-4 py-4 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-lg"
                                        />
                                        <button
                                            type="submit"
                                            aria-label="Submit email subscription"
                                            className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors rounded-r-xl"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Arrow Image pointing from input to button - appears in step 2 */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={currentStep >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.8, delay: 0.8 }}
                                        className="relative mt-6 flex justify-start"
                                    >
                                        <div className="ml-16">
                                            <img
                                                src="/assets/curved-arrow.png"
                                                alt="Arrow pointing to submit button"
                                                className="w-64 h-20 object-contain"
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Links Section - appears in step 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={currentStep >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative border-t border-gray-200 bg-white/70 backdrop-blur-sm"
                >
                    {/* Skateboarding Animation on the divider line - appears in step 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={currentStep >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        className="absolute -top-24 right-8 z-10"
                    >
                        <motion.div
                            className="w-32 h-32"
                            animate={{
                                y: [0, -4, 0],
                                rotate: [0, 2, -2, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            {skateboardAnimation && (
                                <Lottie
                                    animationData={skateboardAnimation}
                                    loop={true}
                                    autoplay={true}
                                    className="w-full h-full"
                                />
                            )}
                        </motion.div>
                    </motion.div>
                    <div className="max-w-7xl mx-auto px-6 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                            {/* Brand Section */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900">ADmyBRAND.</h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    We help you show your ads to more people for less money
                                </p>
                                {/* Social Icons */}
                                <div className="flex items-center space-x-6 pt-4">
                                    <a href="#" aria-label="Follow us on Instagram" className="text-gray-600 hover:text-gray-900 transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Follow us on X (Twitter)" className="text-gray-600 hover:text-gray-900 transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Follow us on Twitter" className="text-gray-600 hover:text-gray-900 transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Company Links */}
                            <div className="space-y-6">
                                <h4 className="text-xl font-semibold text-gray-900">Company</h4>
                                <ul className="space-y-3">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors text-base">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Support Links */}
                            <div className="space-y-6">
                                <h4 className="text-xl font-semibold text-gray-900">Support</h4>
                                <ul className="space-y-3">
                                    {footerLinks.support.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors text-base">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal Links */}
                            <div className="space-y-6">
                                <h4 className="text-xl font-semibold text-gray-900">Legal</h4>
                                <ul className="space-y-3">
                                    {footerLinks.legal.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors text-base">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Copyright - appears in step 4 */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={currentStep >= 4 ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="border-t border-gray-200 mt-16 pt-8"
                        >
                            <p className="text-center text-gray-500 text-base">
                                ©2025 ADmyBRAND. All rights reserved.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;