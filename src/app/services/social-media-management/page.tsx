"use client"
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function InsightsPage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [preloadedVideos, setPreloadedVideos] = useState<Set<number>>(new Set([0]));
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const videos = [
    {
      src: "/socialmedia/jivvid1.mp4",
      title: "Brand Showcase",
      description: "Creative brand storytelling that captivates audiences"
    },
    {
      src: "/socialmedia/jivvid2.mp4",
      title: "Fez Campaign",
      description: "Engaging content that drives brand awareness"
    },
    {
      src: "/socialmedia/jivvid3.mp4",
      title: "RH Reel",
      description: "Dynamic reels that boost engagement"
    },
    {
      src: "/socialmedia/jivvid4.mp4",
      title: "Updated Campaign",
      description: "Fresh perspectives on social media marketing"
    },
    {
      src: "/socialmedia/jivvid5.mp4",
      title: "Waby-Saby",
      description: "Playful content that resonates with audiences"
    },
    {
      src: "/socialmedia/jivvid6.mp4",
      title: "YSE Project",
      description: "Strategic content for maximum impact"
    }
  ];

  // Handle initial video loading and timeout fallback
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Fallback timeout of 3 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  // Handle video loading when currentVideoIndex changes
  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Shorter timeout for navigation

    return () => clearTimeout(timeoutId);
  }, [currentVideoIndex]);

  // Preload next video
  const preloadNextVideo = (index: number) => {
    const nextIndex = (index + 1) % videos.length;
    if (!preloadedVideos.has(nextIndex)) {
      const video = document.createElement('video');
      video.src = videos[nextIndex].src;
      video.preload = "auto";
      video.load();
      setPreloadedVideos(prev => new Set([...prev, nextIndex]));
    }
  };

  const nextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
    preloadNextVideo(nextIndex);
  };

  const prevVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    setCurrentVideoIndex(prevIndex);
    preloadNextVideo(prevIndex);
  };

  // Handle video loading
  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  // Handle video error
  const handleVideoError = () => {
    console.error('Video failed to load:', videos[currentVideoIndex].src);
    setIsLoading(false);
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1
            className="font-poppins font-bold text-white uppercase text-center"
            style={{
              fontSize: "42px",
            }}
          >
            Social Media Management
          </h1>
        </div>
        <Image
          src="/jivobn1.svg"
          alt="Jivo Hero"
          width={1000}
          height={100}
          className="w-full h-48 object-cover"
          priority
        />
      </div>
      
      {/* Hero Content Section */}
      <div className="py-8 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-black">Be Seen. Be Trusted. Be Talked About.</h2>
        <p className="mb-4 text-black max-w-4xl mx-auto">
          Your social media presence is often your first impression, before someone even visits your website. That's why our social media management service helps brands go beyond basic posts and build real digital influence, with Instagram, LinkedIn, Facebook, and more.
        </p>
        <p className="mb-4 text-black max-w-4xl mx-auto">
          At JIVO Solutions, we manage your brand presence in real-time. We build digital stories that move people and move your business forward. Whether you're a small business, a scaling D2C brand, or a founder building credibility, we turn your feed into your most powerful asset.
        </p>
        <p className="mb-6 text-black">We manage and grow your brand across all leading platforms:</p>

        <div className="flex justify-center gap-4 flex-wrap">
          {["Instagram", "Facebook", "YouTube", "LinkedIn", "Threads", "Twitter", "Pinterest"].map(
            (platform) => (
              <button
                key={platform}
                className="px-6 py-2 rounded-full border border-emerald-700"
              >
                <span className="text-black">
                  {platform}
                </span>
              </button>
            )
          )}
        </div>
      </div>

      {/* Why Social Media Matters Section */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Why Social Media matters for your business</h2>
          <p className="mb-8 text-black text-center max-w-4xl mx-auto">
            Social media isn't just about looking good, it's a tool for real business growth. We use it to help brands:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-emerald-700 text-white p-4 rounded-lg mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-black font-medium">Build awareness in competitive markets</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-700 text-white p-4 rounded-lg mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-black font-medium">Increase engagement with the right audience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-700 text-white p-4 rounded-lg mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <p className="text-black font-medium">Turn followers into paying customers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-700 text-white p-4 rounded-lg mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-black font-medium">Show up consistently and professionally</p>
            </div>
          </div>
          
          <p className="mt-8 text-black text-center max-w-4xl mx-auto">
            Whether you're a local brand or a growing business, we build a presence that supports your business goals.
          </p>
        </div>
      </div>

      {/* Video Showcase Section */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Our social content showcase</h2>
          <p className="mb-8 text-black max-w-4xl mx-auto">
            Explore the visuals we've crafted for our clients
          </p>
          
          {/* Main Video Display with Carousel */}
          <div className="relative w-full max-w-[800px] mx-auto mb-8">
            <div className="flex items-center justify-center gap-4 relative">
              {/* Previous Video Preview */}
              <div 
                className={`w-[250px] h-[440px] rounded-lg overflow-hidden opacity-40 blur-sm transform scale-95 transition-all duration-500 ease-in-out ${
                  currentVideoIndex === 0 ? 'opacity-0' : 'opacity-40'
                }`}
              >
                <video 
                  key={`prev-${currentVideoIndex}`}
                  className="w-full h-full object-contain"
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={videos[(currentVideoIndex - 1 + videos.length) % videos.length].src} type="video/mp4" />
                </video>
              </div>

              {/* Main Video */}
              <div 
                className={`w-[300px] h-[535px] relative z-10 transition-all duration-500 ease-in-out transform ${
                  currentVideoIndex === 0 ? 'scale-100' : 'scale-100'
                }`}
              >
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
                  </div>
                )}
                <video 
                  key={`main-${currentVideoIndex}`}
                  className="w-full h-full object-contain"
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  onLoadedData={handleVideoLoad}
                  onError={handleVideoError}
                  ref={videoRef}
                  preload="auto"
                >
                  <source src={videos[currentVideoIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Sound Toggle Button */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-opacity-70 transition-all duration-300"
                >
                  {isMuted ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Next Video Preview */}
              <div 
                className={`w-[250px] h-[444px] rounded-lg overflow-hidden opacity-40 blur-sm transform scale-95 transition-all duration-500 ease-in-out ${
                  currentVideoIndex === videos.length - 1 ? 'opacity-0' : 'opacity-40'
                }`}
              >
                <video 
                  key={`next-${currentVideoIndex}`}
                  className="w-full h-full object-contain"
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={videos[(currentVideoIndex + 1) % videos.length].src} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevVideo}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-opacity-70 transition-all duration-300"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextVideo}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-opacity-70 transition-all duration-300"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          
        </div>
      </div>

      {/* Platforms JIVO Specializes In Section */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Platforms JIVO specializes in</h2>
          <p className="mb-12 text-black text-center max-w-4xl mx-auto">
            Not every platform works the same and neither should your strategy. At JIVO Solutions, we fine-tune your brand's voice, visuals, and content to match the strengths of each platform. Whether it's building brand trust on Facebook, creating discovery-led content on Instagram, or positioning you as a thought leader on LinkedIn, our goal stays the same: to grow your community, boost visibility, and make your brand unforgettable wherever your audience spends time online.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facebook Management */}
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#1877F2' }}>
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-700">Facebook Management</h3>
              </div>
              <p className="text-black text-sm leading-relaxed flex-grow">
                With over 2 billion daily active users, Facebook remains a high-impact platform for brand visibility and engagement. Known for its cost-effective reach, audience-specific targeting, and high organic discoverability, Facebook is a cornerstone of digital marketing for businesses of all sizes. At JIVO, our Facebook content management services help you harness these strengths through custom content, page optimization, and audience interaction that keeps your community active and involved. Whether you're a local business or scaling enterprise, we ensure your presence is consistent, professional, and purposeful.
              </p>
            </div>

            {/* Instagram Management */}
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)' }}>
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-700">Instagram Management</h3>
              </div>
              <p className="text-black text-sm leading-relaxed flex-grow">
                Instagram continues to be a powerhouse for visual storytelling and brand discovery, with over 70% of users turning to the platform to explore new products and services. Its unique blend of aesthetic appeal, short-form video, and interactive features makes it one of the most valuable tools in any organic social strategy. At JIVO, our Instagram content management services are built to tap into this potential. We create high-performing Reels, design cohesive grid layouts, and manage Stories that keep your audience engaged. With a focus on platform trends, content optimization, and authentic interaction, we help your brand become not just visible but memorable.
              </p>
            </div>

            {/* LinkedIn Management */}
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#0A66C2' }}>
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-700">LinkedIn Management</h3>
              </div>
              <p className="text-black text-sm leading-relaxed flex-grow">
                LinkedIn is the number 1 platform for B2B lead generation, with 4 out of 5 members driving business decisions. It's a space to build authority and professional trust. At JIVO, our LinkedIn content management services position your brand as a thought leader through educational posts, optimized company profiles, consistent engagement, and strategic networking. Whether you're a founder, service provider, or hiring brand, we help you grow your professional voice with purpose.
              </p>
            </div>

            {/* YouTube Management */}
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#FF0000' }}>
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-700">YouTube Management</h3>
              </div>
              <p className="text-black text-sm leading-relaxed flex-grow">
                YouTube processes over 3 billion searches monthly and is the second most-visited site after Google. It's not just a video platform, it's a search-driven engine for visibility and authority. JIVO's YouTube channel management services help you create content that ranks and resonates. From SEO-optimized titles and compelling thumbnails to publishing schedules and audience analytics, we turn your channel into a consistent driver of brand equity.
              </p>
            </div>

            {/* Twitter/X Management */}
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#000000' }}>
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-700">Twitter/X Management</h3>
              </div>
              <p className="text-black text-sm leading-relaxed flex-grow">
                X (formerly Twitter) is where real-time conversations shape opinions and drive virality. With over 500 million tweets posted per day, it's a platform where staying relevant means being responsive and in-tune. JIVO's Twitter social media management services help you stay ahead with platform-specific voice development, trend-based content, and meaningful audience interaction. We turn fleeting moments into memorable brand impressions.
              </p>
            </div>

            {/* Pinterest Management */}
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#E60023' }}>
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.751-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-700">Pinterest Management</h3>
              </div>
              <p className="text-black text-sm leading-relaxed flex-grow">
                Pinterest is a search engine disguised as a mood board and it drives 33% more referral traffic to shopping sites than Facebook. With over 450 million active monthly users, it's essential for product visibility and purchase intent. JIVO's Pinterest management services focus on strategic pin creation, keyword optimization, visually curated boards, and consistent posting to make sure your content gets discovered and acted on.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Social Media Management Process Section */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Social Media Management process</h2>
          <p className="mb-12 text-black text-center max-w-4xl mx-auto">
            Our approach is built for clarity, consistency, and content that converts.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold mb-2 text-black">Strategy Development</h3>
              <p className="text-black text-sm">We analyze your brand, audience, and goals to create a tailored social media strategy.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold mb-2 text-black">Content Creation</h3>
              <p className="text-black text-sm">Our team creates high-quality visuals, videos, and copy that align with your brand voice.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold mb-2 text-black">Publishing & Engagement</h3>
              <p className="text-black text-sm">We publish content at optimal times and actively engage with your audience.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold mb-2 text-black">Analytics & Optimization</h3>
              <p className="text-black text-sm">We track performance and continuously optimize your strategy for better results.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose JIVO Section */}
      <div className="bg-[#0A5C35] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Why choose JIVO as your social media partner
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Customized for your Brand</h3>
              <p className="text-sm leading-relaxed">Your business is unique and your social media should be too. At JIVO, we craft tailored content plans that reflect your goals, niche, and audience. No recycled ideas, only original strategies designed to work for your brand.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Deep Platform Expertise</h3>
              <p className="text-sm leading-relaxed">From Reels to LinkedIn carousels, we know what works where and why. Our team brings proven experience in creating content that feels native, drives engagement, and performs across all major platforms.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Strategic Approach</h3>
              <p className="text-sm leading-relaxed">We don't post for the sake of posting. Every caption, story, and design starts with a data-backed strategy, from audience insights to market trends, so your feed fuels real business outcomes.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">One Point of Contact</h3>
              <p className="text-sm leading-relaxed">You'll work directly with a dedicated Account Manager who understands your brand inside-out and keeps your social media running seamlessly with clarity, collaboration, and care.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Sharp Trendspotting</h3>
              <p className="text-sm leading-relaxed">We stay ahead of the curve with trend tracking, format experiments, and real-time platform updates helping you show up where it matters, when it matters.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Clear Reporting</h3>
              <p className="text-sm leading-relaxed">Every month, we share performance reports that are easy to understand and packed with insight. Know what's working, why it's working and what's next.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Section */}
      <div className="flex justify-center items-center w-full">
        <Image src="/result.svg" alt="Results" width={1000} height={100} className="w-full h-full object-cover" priority />
      </div>

      {/* CTA Section */}
      <div className="py-8 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-black">Ready to Transform Your Social Media Presence?</h2>
          <p className="mb-8 text-black">Let's discuss how we can help your brand stand out and grow on social media.</p>
          <Link href="/contact" className="inline-block pointer-cursor">
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl pointer-cursor">
              Book a discovery call
            </button>
          </Link>
        </div>
      </div>

      {/* Social Media Management Specific FAQs */}
      <section className="py-8 bg-gradient-to-b from-[#0a5c35]/5 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 font-poppins text-[#0a5c35]">
              FAQs
            </h2>
            <p className="text-gray-700 text-sm max-w-2xl mx-auto">
              Find answers to common questions about our social media management services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What's included in your Social Media Management service?",
                answer: "We offer end-to-end management from content strategy and monthly calendars to custom visual creation, caption writing, posting, and audience engagement. We also handle profile optimization and share monthly performance reports with insights and improvements."
              },
              {
                question: "Which platforms do you manage and can I choose just one?",
                answer: "We manage Instagram, Facebook, LinkedIn, YouTube, Twitter, and Threads. Yes, you can choose to focus on just one or a few platforms based on where your audience is most active."
              },
              {
                question: "Do you offer photo or video shoots?",
                answer: "Yes. We offer full-service content production including lifestyle and team shoots. If you're located in a different city, we can also coordinate remote shoots with clear direction and brand alignment."
              },
              {
                question: "Do you create both visuals and captions?",
                answer: "Yes. We create high-quality Reels, Carousels, Stories, and branded graphics, all aligned with your brand identity. Every post includes professionally written, on-brand captions and optimized hashtags to increase reach and engagement."
              },
              {
                question: "Can you manage replies, DMs, and audience engagement too?",
                answer: "Absolutely. We actively respond to comments, DMs, and mentions, helping build trust, answer queries, and nurture your audience, so your brand feels present and responsive."
              },
              {
                question: "How do you plan content and get approval before posting?",
                answer: "We plan your content in advance through a monthly content calendar. You'll review and approve all posts (visuals + captions) before anything is published, so you stay informed and in control."
              },
              {
                question: "How do you measure performance and share results?",
                answer: "We provide a monthly performance report covering follower growth, reach, engagement, and top-performing posts. Based on this data, we continuously refine your content to improve results and ROI."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-3">
                <button
                  className={`w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group
                    ${openIndex === index 
                      ? 'bg-[#0a5c35] text-white shadow-lg' 
                      : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                    }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-semibold text-sm transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`text-lg transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-[#0a5c35]'
                  }`}>
                    {openIndex === index ? '↑' : '↓'}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                    <p className="text-gray-700 leading-relaxed text-xs">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}