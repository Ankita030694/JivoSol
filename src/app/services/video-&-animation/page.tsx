"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InsightsPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [videoIndex, setVideoIndex] = useState(0);
  
  // Video URLs from Firebase Storage
  const videoUrls = [
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fvideoandanim%2FAb%20Grab%20studio%20podcast-16.mp4?alt=media&token=84605a79-996c-458f-aca5-f3c182f4dcf2",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fvideoandanim%2FFor%20Web%20Podcast%2015.mp4?alt=media&token=d58d1e0b-9c8e-480b-bafd-a0047042080e",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fvideoandanim%2FIntro%20Lifestyle%20-%20Teaser.mp4?alt=media&token=509c0dc5-5e6a-4cf4-8946-d4e3f93de1a1"
  ];

  const nextSlide = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const prevSlide = () => {
    setVideoIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
  };

  const getVideoStyle = (index: number) => {
    const isCenter = index === videoIndex;
    const isLeft = index === (videoIndex - 1 + videoUrls.length) % videoUrls.length;
    const isRight = index === (videoIndex + 1) % videoUrls.length;

    if (isCenter) {
      return {
        transform: 'scale(1)',
        filter: 'blur(0)',
        zIndex: 2,
        opacity: 1,
      };
    }

    if (isLeft) {
      return {
        transform: 'translateX(-50%) scale(0.8)',
        filter: 'blur(2px)',
        zIndex: 1,
        opacity: 0.7,
      };
    }

    if (isRight) {
      return {
        transform: 'translateX(50%) scale(0.8)',
        filter: 'blur(2px)',
        zIndex: 1,
        opacity: 0.7,
      };
    }

    return {
      transform: 'scale(0)',
      opacity: 0,
      zIndex: 0,
    };
  };

  return (
    <div>
      <Navbar />
      <div className="w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1
            className="font-poppins font-bold text-white uppercase"
            style={{
              fontSize: "42px",
            }}
          >
            Video & Animation
          </h1>
        </div>
        <img
          src="/jivobn1.svg"
          alt="Jivo Hero"
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="w-full bg-[#ECECEC] py-16 text-black text-center">
        <h1 className="text-4xl font-bold mb-6">Tell Your Story In Motion</h1>
        <p className="mb-6 text-md">People scroll fast. Your video has seconds to hook them.</p>
        <p className="mb-6 text-md max-w-3xl mx-auto">
          At JIVO, we take your raw footage and turn it into sharp, branded videos that are made to grab 
          attention, hold it, and leave an impression.
        </p>
        <p className="text-md max-w-3xl mx-auto">
          Whether it's for instagram, youtube, linkedin, or ads, we edit your videos to look clean, feel 
          professional, and get results.
        </p>
      </div>
      
      <div className="w-full bg-white py-16 text-black">
        <h1 className="text-4xl font-bold mb-6 text-center">What We Offer</h1>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          We edit and produce videos that are sharp, on-brand, and made to perform, whether for
          social media, websites, ads, or long-form content.
        </p>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <div className="flex items-start gap-4">
            <span className="text-[#006400]">✓</span>
            <p><span className="font-semibold">Instagram Reels, YouTube Shorts,</span> and <span className="font-semibold">LinkedIn Videos</span></p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#006400]">✓</span>
            <p><span className="font-semibold">Website</span> Hero Videos (short auto play homepage intros)</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#006400]">✓</span>
            <p><span className="font-semibold">YouTube Video editing</span> (long-form episodes, interviews, vlogs)</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#006400]">✓</span>
            <p><span className="font-semibold">Event highlight videos</span> (recaps, behind-the-scenes, launches)</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#006400]">✓</span>
            <p><span className="font-semibold">Explainer Videos</span> for your product or service</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#006400]">✓</span>
            <p><span className="font-semibold">Podcast Editing</span> (video podcasts, guest episodes, intro/outro cleanups)</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#006400]">✓</span>
            <p><span className="font-semibold">Ad videos</span> for paid campaigns across platform</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#006400]">✓</span>
            <p>Client case study or <span className="font-semibold">walkthrough</span> videos</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#006400]">✓</span>
            <p><span className="font-semibold">Founder</span> videos, <span className="font-semibold">Testimonials,</span> and team profiles</p>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-white py-16">
        <h1 className="text-4xl font-bold text-center text-black mb-12">Our Videos</h1>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative h-[400px] flex items-center justify-center mb-8 overflow-hidden">
            <button
              onClick={prevSlide}
              className="absolute left-4 z-20 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Previous video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
              {videoUrls.map((url, index) => (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out"
                  style={getVideoStyle(index)}
                >
                  <div className="relative w-full max-w-3xl aspect-video">
                    <video
                      src={url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster={`${url}#t=0.1`}
                      className="w-full h-full object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-4 z-20 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Next video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2">
            {videoUrls.map((_, index) => (
              <button
                key={index}
                onClick={() => setVideoIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === videoIndex ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-12 bg-gradient-to-b from-[#0a5c35]/5 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 font-poppins text-[#0a5c35]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 text-sm max-w-2xl mx-auto">
              Find answers to common questions about our video and animation services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="mb-3">
              <button
                className="w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10"
                onClick={() => setCurrentIndex(currentIndex === 0 ? null : 0)}
              >
                <span className="font-semibold text-sm transition-colors duration-300 text-gray-800">
                  What kind of videos do you make?
                </span>
                <span className="text-lg transition-colors duration-300 text-[#0a5c35]">
                  {currentIndex === 0 ? '↑' : '↓'}
                </span>
              </button>
              
              {currentIndex === 0 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    We create a wide variety of videos, from brand films and explainer animations to product showcases, 
                    ad creatives, social media reels, and event highlights.
                  </p>
                </div>
              )}
            </div>

            <div className="mb-3">
              <button
                className="w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10"
                onClick={() => setCurrentIndex(currentIndex === 1 ? null : 1)}
              >
                <span className="font-semibold text-sm transition-colors duration-300 text-gray-800">
                  Do you offer both animation and live-action video services?
                </span>
                <span className="text-lg transition-colors duration-300 text-[#0a5c35]">
                  {currentIndex === 1 ? '↑' : '↓'}
                </span>
              </button>
              
              {currentIndex === 1 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    Yes. We produce both animated and live-action content. Whether you need a motion graphic explainer 
                    or a professionally shot brand film, we've got you covered.
                  </p>
                </div>
              )}
            </div>

            <div className="mb-3">
              <button
                className="w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10"
                onClick={() => setCurrentIndex(currentIndex === 2 ? null : 2)}
              >
                <span className="font-semibold text-sm transition-colors duration-300 text-gray-800">
                  Can you handle the entire video production process?
                </span>
                <span className="text-lg transition-colors duration-300 text-[#0a5c35]">
                  {currentIndex === 2 ? '↑' : '↓'}
                </span>
              </button>
              
              {currentIndex === 2 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    Absolutely. We manage everything, from scripting, storyboarding, and casting to filming, 
                    editing, voiceovers, and final delivery.
                  </p>
                </div>
              )}
            </div>

            <div className="mb-3">
              <button
                className="w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10"
                onClick={() => setCurrentIndex(currentIndex === 3 ? null : 3)}
              >
                <span className="font-semibold text-sm transition-colors duration-300 text-gray-800">
                  What's the typical turnaround time for a video?
                </span>
                <span className="text-lg transition-colors duration-300 text-[#0a5c35]">
                  {currentIndex === 3 ? '↑' : '↓'}
                </span>
              </button>
              
              {currentIndex === 3 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    It depends on the complexity. A short social media video may take 2–3 days, while a more 
                    detailed animation or film could take 1–2 weeks.
                  </p>
                </div>
              )}
            </div>

            <div className="mb-3">
              <button
                className="w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10"
                onClick={() => setCurrentIndex(currentIndex === 4 ? null : 4)}
              >
                <span className="font-semibold text-sm transition-colors duration-300 text-gray-800">
                  Do you provide videos in different formats for different platforms?
                </span>
                <span className="text-lg transition-colors duration-300 text-[#0a5c35]">
                  {currentIndex === 4 ? '↑' : '↓'}
                </span>
              </button>
              
              {currentIndex === 4 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    Yes. We export videos in all required formats and aspect ratios (like 9:16 for Reels, 
                    1:1 for Instagram, or 16:9 for YouTube and websites).
                  </p>
                </div>
              )}
            </div>

            <div className="mb-3">
              <button
                className="w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10"
                onClick={() => setCurrentIndex(currentIndex === 5 ? null : 5)}
              >
                <span className="font-semibold text-sm transition-colors duration-300 text-gray-800">
                  Will I be able to review the video and ask for changes?
                </span>
                <span className="text-lg transition-colors duration-300 text-[#0a5c35]">
                  {currentIndex === 5 ? '↑' : '↓'}
                </span>
              </button>
              
              {currentIndex === 5 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    Definitely. We include multiple review rounds in every project so you can give feedback 
                    and request revisions before final delivery.
                  </p>
                </div>
              )}
            </div>

            <div className="mb-3">
              <button
                className="w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10"
                onClick={() => setCurrentIndex(currentIndex === 6 ? null : 6)}
              >
                <span className="font-semibold text-sm transition-colors duration-300 text-gray-800">
                  Can you create videos specifically for advertising campaigns?
                </span>
                <span className="text-lg transition-colors duration-300 text-[#0a5c35]">
                  {currentIndex === 6 ? '↑' : '↓'}
                </span>
              </button>
              
              {currentIndex === 6 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    Yes. We specialize in ad creatives, optimized for performance on platforms like Meta, 
                    YouTube, and LinkedIn, to help you capture attention and drive results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-white">
        <Footer />
      </div>
    </div>
  );
}