'use client'
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function InsightsPage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean[]>(Array(5).fill(true));
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>(Array(5).fill(false));
  const [preloadedVideos, setPreloadedVideos] = useState<Set<number>>(new Set([0]));

  const videos = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fperfmark%2FAd%201%20(V1)%20-%20Career%20Counseling%20Course.Mp4%20(1).mp4?alt=media&token=e126eea4-0a46-46e1-9179-8b00b5f1d433",
      title: "Brand Showcase",
      description: "Creative brand storytelling that captivates audiences"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fperfmark%2FSidewok12.mp4?alt=media&token=151c6d74-c5ac-40c6-b677-ca1732719fe6",
      title: "Fez Campaign",
      description: "Engaging content that drives brand awareness"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fperfmark%2FWhatsApp%20Video%202025-05-23%20at%203.57.08%20PM.mp4?alt=media&token=4364e770-e899-466b-b3b2-f8d908922b42",
      title: "RH Reel",
      description: "Dynamic reels that boost engagement"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fperfmark%2FWhatsApp%20Video%202025-05-23%20at%203.57.23%20PM.mp4?alt=media&token=c5596ff9-ad47-4f29-8f1a-766f7bc743f3",
      title: "Updated Campaign",
      description: "Fresh perspectives on social media marketing"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fperfmark%2FWhatsApp%20Video%202025-06-04%20at%204.41.42%20PM.mp4?alt=media&token=5239cb13-d555-46b0-95bd-c29a53a7e09a",
      title: "Waby-Saby",
      description: "Playful content that resonates with audiences"
    },
  ];

  // Preload videos
  useEffect(() => {
    const preloadVideos = async () => {
      const videoPromises = videos.map((video, index) => {
        return new Promise((resolve) => {
          const videoElement = document.createElement('video');
          videoElement.preload = 'metadata';
          videoElement.src = video.src;
          
          videoElement.onloadedmetadata = () => {
            setIsLoading(prev => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
            resolve(true);
          };

          videoElement.onerror = () => {
            setIsLoading(prev => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
            resolve(false);
          };
        });
      });

      await Promise.all(videoPromises);
    };

    preloadVideos();
  }, []);

  const handleVideoLoad = useCallback((index: number) => {
    setVideosLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  }, []);

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

  return (
    <div>
      <Navbar />
      <div className="w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1
            className="font-poppins font-bold text-white uppercase"
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
            }}
          >
            Our Work
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

      {/* Social Media Section */}
      <div className="py-16 mx-auto text-center">
        <p className="text-emerald-700 mb-2 text-xl font-bold uppercase tracking-wider">
          Social Media Management
        </p>
        <h2 className="text-3xl font-bold mb-4 text-black">
          Be Seen Where It Matters Most
        </h2>
        <p className="mb-2 text-black text-sm">
          Your audience spends hours every day on social media. we make sure
          you're there,
        </p>
        <p className="mb-6 text-black text-sm">
          not just present, but unforgettable.
        </p>
        <p className="mb-8 text-black text-sm">
          At JIVO, we build <span className="italic">digital narratives</span>{" "}
          that drive engagement, loyalty, and action.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Instagram", "Facebook", "YouTube", "LinkedIn", "Pinterest"].map(
            (platform) => (
              <button
                key={platform}
                className="px-6 py-2 rounded-full border border-emerald-700 relative overflow-hidden group"
              >
                <span className="relative z-10 text-emerald-700 group-hover:text-white transition-colors duration-300">
                  {platform}
                </span>
                <div className="absolute inset-0 bg-emerald-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              </button>
            )
          )}
        </div>

        {/* Image grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-64">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={`/jabout${num}.svg`}
                alt={`Portfolio image ${num}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Carousel Navigation - moved outside the grid */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        {/* Read More button */}
        <div className="mt-10">
          <button className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full transition-colors duration-300 font-medium">
            Read More
          </button>
        </div>
      </div>

      {/* Performance Marketing Section - NEW */}
      <div className="bg-[#ECECEC] px-4 sm:px-8 md:px-16 lg:px-64 py-16 text-center">
        <p className="text-emerald-700 mb-2 text-xl font-bold uppercase tracking-wider">
          Performance Marketing
        </p>
        <h2 className="text-3xl font-bold mb-4 text-black">
          Data-Driven Results That Matter
        </h2>
        <p className="mb-8 text-black text-sm">
          Our performance marketing strategies are designed to maximize ROI and deliver
          measurable results for your business.
        </p>

        {/* Video Grid Showcase */}
        <div className="mt-16 mb-16">
          
          {/* Video Grid */}
          <div className="grid grid-cols-5 gap-4 max-w-[1400px] mx-auto px-4">
            {videos.map((video, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-lg bg-black">
                <div className="aspect-[9/16] relative">
                  {isLoading[index] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
                    </div>
                  )}
                  <video 
                    className="w-full h-full object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onLoadedData={() => handleVideoLoad(index)}
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <h3 className="text-white font-semibold text-sm">{video.title}</h3>
                  <p className="text-white/80 text-xs line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Carousel Navigation */}
        {/* <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div> */}
        
        {/* Read More button */}
        <div className="mt-10">
          <button className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full transition-colors duration-300 font-medium">
            Read More
          </button>
        </div>
      </div>

      {/* Web Development Projects Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-64 py-16 text-center">
        <p className="text-emerald-700 mb-2 text-xl font-bold uppercase tracking-wider">
          Web Development & SEO
        </p>
        <h2 className="text-3xl font-bold mb-12 text-black">
          Let's See Our Recent Work
          <br />
          Projects Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Zaavi", image: "/jabout1.svg" },
            { name: "Rikh ", image: "/jabout2.svg" },
            { name: "Essru", image: "/jabout3.svg" },
          ].map((project) => (
            <div
              key={project.name}
              className="relative rounded-2xl overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={500}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-emerald-800 p-4 md:p-8 flex justify-between items-center">
                <h3 className="text-white text-lg">{project.name}</h3>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-full flex items-center gap-2 transition-colors duration-300 text-md">
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation - moved outside the grid */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        
        {/* Read More button */}
        <div className="mt-10">
          <button className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full transition-colors duration-300 font-medium">
            Read More
          </button>
        </div>
      </div>

      {/* Brand Identity & Design Section */}
      <div className="py-16 mx-auto text-center bg-[#ECECEC]">
        <p className="text-emerald-700 mb-2 text-xl font-bold uppercase tracking-wider">
          Brand Identity & Design
        </p>
        <h2 className="text-3xl font-bold mb-4 text-black">
          Let's See Our Recent Work <br />
          Projects Gallery
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Logo",
            "Letterhead",
            "Business Card",
            "Brochure",
            "Pamphlets",
            "Bill Boards",
          ].map((platform) => (
            <button
              key={platform}
              className="px-6 py-2 my-1 md:my-0 rounded-full border border-emerald-700 relative overflow-hidden group"
            >
              <span className="relative z-10 text-emerald-700 group-hover:text-white transition-colors duration-300">
                {platform}
              </span>
              <div className="absolute inset-0 bg-emerald-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-64">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="relative overflow-hidden rounded-lg shadow-md aspect-square"
            >
              <Image
                src={`/jabout${num}.svg`}
                alt={`Portfolio image ${num}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Carousel Navigation - moved outside the grid */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        
        {/* Read More button */}
        <div className="mt-10">
          <button className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full transition-colors duration-300 font-medium">
            Read More
          </button>
        </div>
      </div>

      {/* Video & Animation Section - NEW */}
      <div className="py-16 mx-auto text-center">
        <p className="text-emerald-700 mb-2 text-xl font-bold uppercase tracking-wider">
          Video & Animation
        </p>
        <h2 className="text-3xl font-bold mb-4 text-black">
          Motion That Captures Attention
        </h2>
        <p className="mb-8 text-black text-sm">
          From promotional videos to animated explainers, we create dynamic visual content
          that tells your story in an engaging way.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-64">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={`/jabout${num}.svg`}
                alt={`Video project ${num}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        
        {/* Read More button */}
        <div className="mt-10">
          <button className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full transition-colors duration-300 font-medium">
            Read More
          </button>
        </div>
      </div>

      {/* Content Creation & Production Section */}
      <div className="py-16 text-center bg-[#ECECEC]">
        <p className="text-emerald-700 mb-2 text-xl font-bold uppercase tracking-wider">
          Content Creation & Production
        </p>
        <h2 className="text-3xl font-bold mb-12 text-black">
          Let's See Our Recent Work
          <br />
          Projects Gallery
        </h2>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-64">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={`/jabout${num}.svg`}
                alt={`Portfolio image ${num}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        
        {/* Read More button */}
        <div className="mt-10">
          <button className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full transition-colors duration-300 font-medium">
            Read More
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
