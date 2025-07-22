'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom hook for lazy loading videos
const useVideoLoader = (videoUrl: string, thumbnailUrl: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // Preload thumbnail
    const img = new Image();
    img.src = thumbnailUrl;
    img.onload = () => setThumbnailLoaded(true);
  }, [thumbnailUrl]);

  useEffect(() => {
    if (!videoElement) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      // Add a small delay before marking video as ready to ensure smooth transition
      setTimeout(() => setVideoReady(true), 100);
    };

    videoElement.addEventListener('loadeddata', handleLoadedData);
    
    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [videoElement]);

  return { isLoading, setVideoElement, thumbnailLoaded, videoReady };
};

const About = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Thumbnail versions of videos (lower quality)
  const videos = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/homepagevids%2F001(1).mp4?alt=media&token=3ed17b44-c716-4d10-93c5-9d482a2daa4a',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/homepagevids%2Fthumbnails%2F001_thumb.jpg?alt=media', // You'll need to create and upload these thumbnails
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/homepagevids%2F002(1).mp4?alt=media&token=3b941819-af45-4c1f-ac43-549d787a950a',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/homepagevids%2Fthumbnails%2F002_thumb.jpg?alt=media',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/homepagevids%2FFez%20Remove%20text%20(2)(1).mp4?alt=media&token=c5ab4613-f83f-4989-9774-0793e3208425',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/homepagevids%2Fthumbnails%2Ffez_thumb.jpg?alt=media',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/homepagevids%2FWitwise5.mp4?alt=media&token=8da7e4a5-396e-4b22-83f3-f21346e85ee6',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/homepagevids%2Fthumbnails%2Fwitwise_thumb.jpg?alt=media',
    },
  ];
  
  // Client names corresponding to each video
  const clientNames = [
    'Client One',
    'Client Two',
    'Client Three',
    'Client Four',
  ];

  // Animation variants for different sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Use intersection observer for scroll animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Track which videos are in view for optimization
  const [visibleVideos, setVisibleVideos] = useState<Set<number>>(new Set());
  const [preloadedVideos, setPreloadedVideos] = useState<Set<number>>(new Set());

  // Handle scroll events for mobile
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const videoWidth = containerWidth * 0.8; // 80% of container width on mobile
      const gap = 16; // gap between videos
      
      const newIndex = Math.round(scrollLeft / (videoWidth + gap));
      setCurrentVideoIndex(Math.max(0, Math.min(newIndex, videos.length - 1)));
      
      // Hide scroll indicator after first scroll
      if (scrollLeft > 10) {
        setShowScrollIndicator(false);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [videos.length]);

  // Auto-hide scroll indicator after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (inView) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const videoIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            if (entry.isIntersecting) {
              setVisibleVideos((prev) => new Set([...prev, videoIndex]));
              // Preload next video
              const nextIndex = (videoIndex + 1) % videos.length;
              setPreloadedVideos((prev) => new Set([...prev, nextIndex]));
            } else {
              setVisibleVideos((prev) => {
                const newSet = new Set(prev);
                newSet.delete(videoIndex);
                return newSet;
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.video-container').forEach((videoEl) => {
        observer.observe(videoEl);
      });

      return () => observer.disconnect();
    }
  }, [inView, videos.length]);

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
              const { isLoading, setVideoElement, thumbnailLoaded, videoReady } = useVideoLoader(video.url, video.thumbnail);
              const shouldLoadVideo = visibleVideos.has(index) || preloadedVideos.has(index);
              
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="video-container relative w-[315px] h-[560px] rounded-2xl overflow-hidden flex-shrink-0"
                  data-index={index}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {(!thumbnailLoaded || isLoading) && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}
                  
                  <div className="relative w-full h-full">
                    {/* Thumbnail Layer */}
                    <div 
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        videoReady ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      {thumbnailLoaded && (
                        <img 
                          src={video.thumbnail}
                          alt={`Thumbnail for ${clientNames[index]}`}
                          className="object-cover w-full h-full"
                        />
                      )}
                    </div>

                    {/* Video Layer */}
                    <div 
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        videoReady ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {shouldLoadVideo && (
                        <video
                          ref={(el) => setVideoElement(el)}
                          src={video.url}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="object-cover w-full h-full"
                          preload="metadata"
                        />
                      )}
                    </div>
                  </div>

                  <motion.div 
                    className="absolute inset-x-0 bottom-0 h-3/3 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 flex items-end"
                    initial={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p 
                      className="text-white px-4 pb-4 font-medium"
                      initial={{ y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {clientNames[index]}
                    </motion.p>
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
              const { isLoading, setVideoElement, thumbnailLoaded, videoReady } = useVideoLoader(video.url, video.thumbnail);
              const shouldLoadVideo = visibleVideos.has(index) || preloadedVideos.has(index);
              const isActive = currentVideoIndex === index;
              
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="video-container relative w-[80vw] h-[70vh] rounded-2xl overflow-hidden flex-shrink-0 snap-center"
                  data-index={index}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ minWidth: '80vw' }}
                >
                  {(!thumbnailLoaded || isLoading) && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}
                  
                  <div className="relative w-full h-full">
                    {/* Thumbnail Layer */}
                    <div 
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        videoReady ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      {thumbnailLoaded && (
                        <img 
                          src={video.thumbnail}
                          alt={`Thumbnail for ${clientNames[index]}`}
                          className="object-cover w-full h-full"
                        />
                      )}
                    </div>

                    {/* Video Layer */}
                    <div 
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        videoReady ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {shouldLoadVideo && (
                        <video
                          ref={(el) => setVideoElement(el)}
                          src={video.url}
                          autoPlay={isActive}
                          muted
                          loop
                          playsInline
                          className="object-cover w-full h-full"
                          preload="metadata"
                        />
                      )}
                    </div>
                  </div>

                  <motion.div 
                    className="absolute inset-x-0 bottom-0 h-3/3 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 flex items-end"
                    initial={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p 
                      className="text-white px-4 pb-4 font-medium"
                      initial={{ y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {clientNames[index]}
                    </motion.p>
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