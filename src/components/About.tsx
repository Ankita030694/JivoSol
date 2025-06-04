'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom hook for lazy loading videos
const useVideoLoader = (videoUrl: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoElement) return;

    const handleLoadedData = () => {
      setIsLoading(false);
    };

    videoElement.addEventListener('loadeddata', handleLoadedData);
    
    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [videoElement]);

  return { isLoading, setVideoElement };
};

const About = () => {
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

  useEffect(() => {
    // Preload videos that are in view
    if (inView) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const videoIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            if (entry.isIntersecting) {
              setVisibleVideos((prev) => new Set([...prev, videoIndex]));
            } else {
              setVisibleVideos((prev) => {
                const newSet = new Set(prev);
                newSet.delete(videoIndex);
                return newSet;
              });
            }
          });
        },
        { threshold: 0.5 }
      );

      document.querySelectorAll('.video-container').forEach((videoEl) => {
        observer.observe(videoEl);
      });

      return () => observer.disconnect();
    }
  }, [inView]);

  return (
    <section className="py-16 px-4 text-center overflow-hidden">
      {/* About Us Header */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-4">
        <h3 className="text-[#005F33] font-poppins">About Us</h3>
      </motion.div>

      {/* Main Title */}
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl font-bold mb-6 text-black">
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
          className="inline-flex items-center bg-[#005F33] text-white px-6 py-3 rounded-full mb-16 hover:bg-[#004525] transition-colors"
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

      {/* Video Grid */}
      <motion.div 
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex justify-center gap-4 overflow-x-auto px-2 max-w-full mx-auto scrollbar-hide">
        {videos.map((video, index) => {
          const { isLoading, setVideoElement } = useVideoLoader(video.url);
          
          return (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="video-container relative w-[315px] h-[560px] rounded-2xl overflow-hidden flex-shrink-0"
              data-index={index}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
              
              {visibleVideos.has(index) && (
                <video
                  ref={(el) => setVideoElement(el)}
                  src={video.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={`object-cover w-full h-full ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  preload="metadata"
                />
              )}

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
      </motion.div>

      {/* Our Work Button */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}>
          <Link 
            href="/work"
            className="inline-flex items-center bg-[#005F33] text-white px-6 py-3 rounded-full hover:bg-[#004525] transition-colors"
          >
            Our Work
            <motion.svg 
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;