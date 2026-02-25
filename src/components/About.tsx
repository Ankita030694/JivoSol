'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Local video files from homepagevids folder
  const videos = [
    {
      url: '/homepagevids/001.mp4',
      name: '',
      description: ''
    },
    {
      url: '/homepagevids/002.mp4', 
      name: '', 
      description: ''
    },
    {
      url: '/homepagevids/FezRemovetext.mp4',
      name: '',
      description: ''
    },
    {
      url: '/homepagevids/Witwise5.mp4',
      name: '',
      description: ''
    },
  ];

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };
  
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Use intersection observer for scroll animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Handle scroll events for mobile carousel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const videoWidth = containerWidth * 0.8; // 80vw
      const gap = 16; // 1rem = 16px
      
      const newIndex = Math.round(scrollLeft / (videoWidth + gap));
      setCurrentVideoIndex(Math.max(0, Math.min(newIndex, videos.length - 1)));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [videos.length]);

  // Function to scroll to specific video
  const scrollToVideo = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const videoWidth = containerWidth * 0.8;
    const gap = 16;
    const scrollPosition = index * (videoWidth + gap);
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-8 xxl:py-12 px-4 xxl:px-8 text-center overflow-hidden">
      {/* About Us Header */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-4 xxl:mb-6">
        <h3 className="text-[#0A5C35] text-lg xxl:text-xl">About Us</h3>
      </motion.div>

      {/* Main Title */}
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl md:text-4xl xxl:text-5xl font-bold mb-6 xxl:mb-8 text-black">
        We are JIVO Solutions
      </motion.h2>

      {/* Description Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-4xl xxl:max-w-6xl mx-auto mb-8 xxl:mb-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-700 mb-1 xxl:text-lg">
          A <b>Digital Solutions Company</b> focused on building strategic visibility for brands that are ready to grow.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-gray-700 mb-8 xxl:mb-10 max-w-3xl xxl:max-w-4xl text-center mx-auto xxl:text-lg">
          We create cohesive digital ecosystems that align Content, Design, Performance, and Strategy.
        </motion.p>
      </motion.div>

      {/* Learn More Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}>
        <Link 
          href="/about"
          className="inline-flex items-center bg-[#005F33] text-white px-6 py-3 rounded-full mb-12 hover:bg-[#004525] transition-colors"
        >
          Learn More
          <motion.svg 
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </Link>
      </motion.div>

      {/* Video Carousel */}
      <div className="relative">
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Desktop Grid */}
          <div className="hidden md:flex justify-center gap-4 overflow-x-auto px-2 max-w-full mx-auto">
            {videos.map((video, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="relative w-[315px] h-[560px] rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100"
              >
                <video
                  src={video.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Swipeable Carousel */}
          <div 
            ref={scrollContainerRef}
            className="md:hidden flex gap-4 overflow-x-auto scroll-smooth px-4 snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative w-[80vw] h-[70vh] rounded-2xl overflow-hidden flex-shrink-0 snap-center bg-gray-100"
                style={{ minWidth: '80vw' }}
              >
                <video
                  src={video.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Video Indicators */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToVideo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentVideoIndex 
                  ? 'bg-[#005F33] w-6' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;