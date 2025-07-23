'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [videoElements, setVideoElements] = useState<{ [key: number]: HTMLVideoElement | null }>({});
  const [videoStates, setVideoStates] = useState<{
    [key: number]: { isLoaded: boolean; isPlaying: boolean; hasError: boolean }
  }>({});

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

  // Initialize video states
  useEffect(() => {
    const initialState: { [key: number]: { isLoaded: boolean; isPlaying: boolean; hasError: boolean } } = {};
    videos.forEach((_, index) => {
      initialState[index] = { isLoaded: false, isPlaying: false, hasError: false };
    });
    setVideoStates(initialState);
  }, []);

  // Function to handle video element registration
  const registerVideoElement = (index: number, element: HTMLVideoElement | null) => {
    if (element) {
      setVideoElements(prev => ({ ...prev, [index]: element }));
      
      // Set up event listeners
      const handleLoadedData = () => {
        setVideoStates(prev => ({
          ...prev,
          [index]: { ...prev[index], isLoaded: true }
        }));
      };

      const handleError = () => {
        console.error(`Video ${index} failed to load`);
        setVideoStates(prev => ({
          ...prev,
          [index]: { ...prev[index], hasError: true }
        }));
      };

      const handlePlay = () => {
        setVideoStates(prev => ({
          ...prev,
          [index]: { ...prev[index], isPlaying: true }
        }));
      };

      const handlePause = () => {
        setVideoStates(prev => ({
          ...prev,
          [index]: { ...prev[index], isPlaying: false }
        }));
      };

      element.addEventListener('loadeddata', handleLoadedData);
      element.addEventListener('error', handleError);
      element.addEventListener('play', handlePlay);
      element.addEventListener('pause', handlePause);

      // Force load the video
      element.load();

      return () => {
        element.removeEventListener('loadeddata', handleLoadedData);
        element.removeEventListener('error', handleError);
        element.removeEventListener('play', handlePlay);
        element.removeEventListener('pause', handlePause);
      };
    }
  };

  // Handle video playback based on current index
  useEffect(() => {
    Object.entries(videoElements).forEach(([indexStr, videoElement]) => {
      const index = parseInt(indexStr);
      if (videoElement && videoStates[index]?.isLoaded) {
        if (index === currentVideoIndex) {
          // Play current video
          videoElement.currentTime = 0;
          videoElement.play().catch(err => {
            console.warn(`Failed to play video ${index}:`, err);
          });
        } else {
          // Pause other videos
          videoElement.pause();
        }
      }
    });
  }, [currentVideoIndex, videoElements, videoStates]);

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
              const videoState = videoStates[index] || { isLoaded: false, isPlaying: false, hasError: false };
              
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="video-container relative w-[315px] h-[560px] rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Loading Placeholder */}
                  {!videoState.isLoaded && !videoState.hasError && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center z-10">
                      <div className="text-gray-500 text-sm">Loading...</div>
                    </div>
                  )}
                  
                  {/* Error Placeholder */}
                  {videoState.hasError && (
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center z-10">
                      <div className="text-gray-500 text-sm">Video unavailable</div>
                    </div>
                  )}
                  
                  {/* Video Element */}
                  <video
                    ref={(el) => registerVideoElement(index, el)}
                    src={video.url}
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                    preload="metadata"
                    style={{ 
                      opacity: videoState.isLoaded ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />

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
              const videoState = videoStates[index] || { isLoaded: false, isPlaying: false, hasError: false };
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
                  {!videoState.isLoaded && !videoState.hasError && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center z-10">
                      <div className="text-gray-500 text-sm">Loading...</div>
                    </div>
                  )}
                  
                  {/* Error Placeholder */}
                  {videoState.hasError && (
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center z-10">
                      <div className="text-gray-500 text-sm">Video unavailable</div>
                    </div>
                  )}
                  
                  {/* Video Element */}
                  <video
                    ref={(el) => registerVideoElement(index, el)}
                    src={video.url}
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                    preload="metadata"
                    style={{ 
                      opacity: videoState.isLoaded ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />

                  {/* Play indicator for mobile */}
                  {isActive && videoState.isLoaded && !videoState.isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="bg-black/50 rounded-full p-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}

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