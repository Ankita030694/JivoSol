"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function InsightsPage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [preloadedVideos, setPreloadedVideos] = useState<Set<number>>(new Set([0]));
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  
  const videos = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fsocialmedia%2FAQNkACVXl3wCpfqGLepghYpic5e4gMEFI190x76alQt4cUlZ4H4FdyLIKjxk_06Igsotb52ChDxmIFx2wVJKgcw3wGoCpoL9Ap7C1ts.mp4?alt=media&token=237a9ad4-bf8f-4d8c-83cb-273a51833e2e",
      title: "Brand Showcase",
      description: "Creative brand storytelling that captivates audiences"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fsocialmedia%2FFez%20(1).mp4?alt=media&token=92da8740-7900-48f6-9a6f-ccb19a30904e",
      title: "Fez Campaign",
      description: "Engaging content that drives brand awareness"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fsocialmedia%2FRh%20Reel%20001(1).mp4?alt=media&token=e9de23a1-056d-41a3-a437-f30014e824b6",
      title: "RH Reel",
      description: "Dynamic reels that boost engagement"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fsocialmedia%2FUpdated%20Video%20002(1).mp4?alt=media&token=c2cc09b9-19e2-4049-a68d-ac4ccd3009b9",
      title: "Updated Campaign",
      description: "Fresh perspectives on social media marketing"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fsocialmedia%2FWaby-Saby.mp4?alt=media&token=8999bb6e-7cd4-4a0a-bef0-5481cc1f4d1d",
      title: "Waby-Saby",
      description: "Playful content that resonates with audiences"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fsocialmedia%2FYse(2).mp4?alt=media&token=fefa06ee-9277-41f0-8a2a-406d0b9d922e",
      title: "YSE Project",
      description: "Strategic content for maximum impact"
    }
  ];

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
      
      <div className="py-16 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">
          Be Seen Where It Matters Most
        </h2>
        <p className="mb-2 text-black max-w-4xl mx-auto">
          We create impactful digital content to attract your target audience. In today's digital-first landscape, your brand's social media presence is often your first and most important impression.
        </p>
        <p className="mb-6 text-black">We manage and grow your brand across all leading platforms:</p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["Instagram", "Facebook", "YouTube", "LinkedIn", "Pinterest", "Twitter", "Threads"].map(
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

        {/* Featured Video Showcase */}
        <div className="mt-16 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-black">Our Social Content Showcase</h2>
          <p className="mb-8 text-black max-w-4xl mx-auto">
            Explore the videos and visuals we've crafted to help brands grow, engage, and stand out online.
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
      </div>

      {/* Why Choose JIVO Section */}
      <div className="bg-[#0A5C35] text-white py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Why Choose JIVO as<br />Your Social Media Partner?
        </h2>
        <p className="mb-8">Here's What Sets Us Apart:</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <p className="text-start text-xs">Comprehensive execution spanning ideation, production, and publishing</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <p className="text-start text-xs">Cohesive visual and verbal branding tailored to your market positioning</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <p className="text-start text-xs">Efficient systems and fast turnaround</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <p className="text-start text-xs">Trusted by 105+ brands across hospitality, lifestyle, education, wellness, and more</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <p className="text-start text-xs">Strategy-driven content crafted to achieve defined objectives</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <p className="text-start text-xs">High-quality content built to perform</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center py-16">
        <Image src="/sm1process.svg" alt="Jivo Hero" width={1000} height={100} className="h-full object-cover" priority />
      </div>

      <div className="flex justify-center items-center py-16 w-full">
        <Image src="/result.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
      </div>

      {/* Social Media Management Specific FAQs */}
      <section className="py-12 bg-gradient-to-b from-[#0a5c35]/5 to-white relative">
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