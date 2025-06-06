import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InsightsPage() {
  // Video URLs from Firebase Storage
  const videoUrls = [
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fvideoandanim%2FAb%20Grab%20studio%20podcast-16.mp4?alt=media&token=84605a79-996c-458f-aca5-f3c182f4dcf2",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fvideoandanim%2FFor%20Web%20Podcast%2015.mp4?alt=media&token=d58d1e0b-9c8e-480b-bafd-a0047042080e",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/servicesvids%2Fvideoandanim%2FIntro%20Lifestyle%20-%20Teaser.mp4?alt=media&token=509c0dc5-5e6a-4cf4-8946-d4e3f93de1a1"
  ];

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
        <h1 className="text-4xl font-bold mb-12 text-center text-black">Our Videos</h1>
        <div className="max-w-7xl mx-auto flex overflow-x-auto gap-4 px-4">
          {videoUrls.map((url, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden flex-shrink-0"
              style={{ width: "calc(33.333% - 16px)" }}
            >
              <video
                src={url}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={`${url}#t=0.1`}
                className="w-full h-[400px] object-cover"
                style={{ willChange: 'transform' }}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
