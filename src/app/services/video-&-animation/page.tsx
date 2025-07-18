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
      
      <div className="w-full bg-white py-16 text-black">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-[#0a5c35]">
            Turn viewers into customers with powerful visual content
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            In a world of short attention spans, video is the fastest and most effective way to engage your audience. 
            At JIVO Solutions, we create high-quality videos and animations that not only look great but also drive results, 
            whether it's building brand awareness, simplifying your pitch, or boosting conversions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            From explainer videos to Instagram reels, our video production services are designed to help brands grow across digital platforms.
          </p>
          
          <div className="bg-gradient-to-r from-[#0a5c35]/5 to-[#006400]/5 p-8 rounded-lg border border-[#0a5c35]/10">
            <h3 className="text-2xl font-bold mb-6 text-[#0a5c35]">
              Great video content helps you:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-[#006400] text-xl font-bold">•</span>
                <p className="font-semibold text-gray-800">Grab and hold attention instantly</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#006400] text-xl font-bold">•</span>
                <p className="font-semibold text-gray-800">Communicate your message clearly</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#006400] text-xl font-bold">•</span>
                <p className="font-semibold text-gray-800">Build trust and credibility</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#006400] text-xl font-bold">•</span>
                <p className="font-semibold text-gray-800">Improve website dwell time and SEO rankings</p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <span className="text-[#006400] text-xl font-bold">•</span>
                <p className="font-semibold text-gray-800">Increase sales and conversions</p>
              </div>
            </div>
          </div>
        </div>
        
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
      
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-12">Our video production process</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            We use a step-by-step approach to make sure your video is creative, strategic, and built for results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-[#0a5c35] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg mb-2 text-[#0a5c35]">Discovery & Script</h3>
              <p className="text-sm text-gray-700">We understand your goals, audience, and message then write a script that captures it clearly.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0a5c35] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg mb-2 text-[#0a5c35]">Storyboarding</h3>
              <p className="text-sm text-gray-700">We visualize every scene so you know exactly what to expect before production begins.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0a5c35] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg mb-2 text-[#0a5c35]">Production & Animation</h3>
              <p className="text-sm text-gray-700">Depending on the format, we shoot live footage, design motion graphics, or animate scenes with voiceovers and music.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0a5c35] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-lg mb-2 text-[#0a5c35]">Editing & Sound</h3>
              <p className="text-sm text-gray-700">We add polish, from smooth transitions and subtitles to sound design and brand-aligned color grading.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0a5c35] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
              <h3 className="font-bold text-lg mb-2 text-[#0a5c35]">Delivery & Format Optimization</h3>
              <p className="text-sm text-gray-700">We export the video in all required formats, for web, social, email campaigns, or ads.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-12">Why choose JIVO for video & animation?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-[#0a5c35]/10 hover:shadow-lg transition-shadow">
              <div className="bg-[#0a5c35]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0a5c35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#0a5c35]">Strategy-Driven Videos</h3>
              <p className="text-sm text-gray-700">We create content with a purpose, every frame is planned to support your business goals.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-[#0a5c35]/10 hover:shadow-lg transition-shadow">
              <div className="bg-[#0a5c35]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0a5c35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#0a5c35]">Storytelling + Strategy</h3>
              <p className="text-sm text-gray-700">Our team blends creativity with clarity, ensuring your story not only looks good but lands well with your audience.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-[#0a5c35]/10 hover:shadow-lg transition-shadow">
              <div className="bg-[#0a5c35]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0a5c35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#0a5c35]">Multi-Platform Ready</h3>
              <p className="text-sm text-gray-700">Your videos will be optimized for different formats, mobile, desktop, YouTube, Instagram, and more.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-[#0a5c35]/10 hover:shadow-lg transition-shadow">
              <div className="bg-[#0a5c35]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0a5c35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#0a5c35]">Industry-Wide Experience</h3>
              <p className="text-sm text-gray-700">We've worked across sectors: tech, healthcare, education, lifestyle, wellness, finance, and beyond.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-[#0a5c35]/10 hover:shadow-lg transition-shadow">
              <div className="bg-[#0a5c35]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0a5c35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#0a5c35]">Full-Service Support</h3>
              <p className="text-sm text-gray-700">From scripting to animation to final edits, everything is handled in-house by our experts.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-[#0a5c35]/10 hover:shadow-lg transition-shadow">
              <div className="bg-[#0a5c35]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0a5c35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#0a5c35]">Measurable Results</h3>
              <p className="text-sm text-gray-700">We align video content with marketing goals and ad strategies to ensure your investment delivers real ROI.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-white py-16">
        <h1 className="text-4xl font-bold text-center text-black mb-4">Video Showcase</h1>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto px-4">
          Explore some of the video work we've created for our clients:
        </p>
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
      
      <div className="w-full bg-[#0a5c35] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to create powerful video content?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Let's discuss your video project and how we can help you turn viewers into customers.
          </p>
          <button className="bg-white text-[#0a5c35] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Book a discovery call
          </button>
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