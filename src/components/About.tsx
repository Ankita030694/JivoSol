'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom hook for optimized video loading
const useOptimizedVideoLoader = (videoUrl: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!videoElement) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      setTimeout(() => setVideoReady(true), 50);
    };

    const handleError = () => {
      setError(true);
      setIsLoading(false);
    };

    const handleCanPlay = () => {
      // Video is ready to play
    };

    videoElement.addEventListener('loadeddata', handleLoadedData);
    videoElement.addEventListener('error', handleError);
    videoElement.addEventListener('canplay', handleCanPlay);
    
    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.removeEventListener('error', handleError);
      videoElement.removeEventListener('canplay', handleCanPlay);
    };
  }, [videoElement]);

  return { isLoading, setVideoElement, videoReady, error };
};

const About = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [preloadedVideos, setPreloadedVideos] = useState<Set<number>>(new Set());

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
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };
  
  const staggerContainer = {
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

  // Preload videos when component mounts
  useEffect(() => {
    const preloadVideo = (url: string, index: number) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.muted = true;
      video.src = url;
      
      video.onloadedmetadata = () => {
        setPreloadedVideos(prev => new Set([...prev, index]));
      };
      
      video.onerror = () => {
        console.warn(`Failed to preload video ${index}: ${url}`);
      };
    };

    // Preload all videos
    videos.forEach((video, index) => {
      preloadVideo(video.url, index);
    });
  }, []);

  // Handle scroll events for mobile
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const videoWidth = containerWidth * 0.8;
      const gap = 16;
      
      const newIndex = Math.round(scrollLeft / (videoWidth + gap));
      setCurrentVideoIndex(Math.max(0, Math.min(newIndex, videos.length - 1)));
      
      if (scrollLeft > 10) {
        setShowScrollIndicator(false);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [videos.length]);

  // Auto-hide scroll indicator
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-8 px-4 text-center overflow-hidden">
      {/* About Us Header */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-4">
        <h3 className="text-[#0A5C35] text-lg">About Us</h3>
      </motion.div>

      {/* Main Title */}
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-black">
        We are JIVO Solutions
      </motion.h2>

      {/* Description Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-4xl mx-auto mb-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-700 mb-1">
          A <b>Digital Solutions Company</b> focused on building strategic visibility for brands that are ready to grow.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-gray-700 mb-8 max-w-3xl text-center mx-auto">
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollIndicator ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="mb-4 flex justify-center items-center gap-2 text-sm text-gray-500"
      >
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-4 h-4"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
        <span>Swipe to see more</span>
      </motion.div>

      {/* Video Grid Container */}
      <div className="relative">
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Desktop Grid */}
          <div className="hidden md:flex justify-center gap-4 overflow-x-auto px-2 max-w-full mx-auto scrollbar-hide">
            {videos.map((video, index) => {
              const { isLoading, setVideoElement, videoReady } = useOptimizedVideoLoader(video.url);
              const isPreloaded = preloadedVideos.has(index);
              
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="video-container relative w-[315px] h-[560px] rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Loading Placeholder */}
                  {isLoading && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                      <div className="text-gray-500 text-sm">Loading...</div>
                    </div>
                  )}
                  
                  {/* Video Element */}
                  <div className="relative w-full h-full">
                    {isPreloaded && (
                      <video
                        ref={(el) => setVideoElement(el)}
                        src={video.url}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="object-cover w-full h-full"
                        preload="metadata"
                        style={{ 
                          opacity: videoReady ? 1 : 0,
                          transition: 'opacity 0.3s ease-in-out'
                        }}
                      />
                    )}
                  </div>

                  {/* Video Info Overlay */}
                  <motion.div 
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="p-4 w-full">
                      <motion.h3 
                        className="text-white font-semibold text-lg mb-1"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                      >
                        {video.name}
                      </motion.h3>
                      <motion.p 
                        className="text-white/80 text-sm"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                      >
                        {video.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div 
            ref={scrollContainerRef}
            className="md:hidden flex gap-4 overflow-x-auto scroll-smooth px-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video, index) => {
              const { isLoading, setVideoElement, videoReady } = useOptimizedVideoLoader(video.url);
              const isPreloaded = preloadedVideos.has(index);
              const isActive = currentVideoIndex === index;
              
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="video-container relative w-[80vw] h-[70vh] rounded-2xl overflow-hidden flex-shrink-0 snap-center bg-gray-100"
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ minWidth: '80vw' }}
                >
                  {/* Loading Placeholder */}
                  {isLoading && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                      <div className="text-gray-500 text-sm">Loading...</div>
                    </div>
                  )}
                  
                  {/* Video Element */}
                  <div className="relative w-full h-full">
                    {isPreloaded && (
                      <video
                        ref={(el) => setVideoElement(el)}
                        src={video.url}
                        autoPlay={isActive}
                        muted
                        loop
                        playsInline
                        className="object-cover w-full h-full"
                        preload="metadata"
                        style={{ 
                          opacity: videoReady ? 1 : 0,
                          transition: 'opacity 0.3s ease-in-out'
                        }}
                      />
                    )}
                  </div>

                  {/* Video Info Overlay */}
                  <motion.div 
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="p-4 w-full">
                      <motion.h3 
                        className="text-white font-semibold text-lg mb-1"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                      >
                        {video.name}
                      </motion.h3>
                      <motion.p 
                        className="text-white/80 text-sm"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                      >
                        {video.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile Video Indicators */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {videos.map((_, index) => (
            <div
              key={index}
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