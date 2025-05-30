import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaArrowRight, FaFacebookF, FaInstagram, FaGoogle, FaGraduationCap } from "react-icons/fa";

export default function CaseStudyPage() {
  const platforms = [
    { icon: FaFacebookF, name: "Meta Ads", color: "bg-blue-500" },
    { icon: FaGoogle, name: "Google Ads", color: "bg-red-500" },
    { icon: FaInstagram, name: "Instagram Growth", color: "bg-pink-500" },
    { icon: FaGraduationCap, name: "Education", color: "bg-purple-500" },
  ];

  const videos = [
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/homepagevids%2F001.mp4?alt=media&token=ffaabfe0-4e64-428e-8619-71a2bf15608f",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/homepagevids%2F002.mp4?alt=media&token=2cc2a06e-5940-498e-82b1-cf5fab0be599",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/homepagevids%2FFez%20Remove%20text%20(2).mp4?alt=media&token=cc03b3b3-ba22-4dad-9b4d-a0018f9f3530",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/homepagevids%2FWitwise%201.Mp4%20New.mp4?alt=media&token=61a20daa-724e-4b78-a4b4-64be65e0ab96"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-[#0A5C35] to-[#0B4619]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Yashi Shukla Education: Global Education Marketing
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive digital strategy for overseas education lead generation
            </p>
            <div className="flex gap-4">
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#0A5C35] transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            {videos.map((videoUrl, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0A5C35]">About Yashi Shukla Education</h2>
              <p className="text-gray-600 mb-6">
                Yashi Shukla Education is a premier overseas education advisory service helping students secure admissions to top global universities. They partnered with JIVO Solutions to scale lead generation and build brand trust across digital platforms.
              </p>
              <div className="flex gap-4">
                {platforms.map((platform, index) => (
                  <div key={index} className={`${platform.color} p-3 rounded-full text-white`}>
                    <platform.icon size={24} />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/casestudies/yashi-overview.jpg"
                alt="Yashi Shukla Education Overview"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Strategy */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#0A5C35]">Multi-Platform Strategy</h2>
              <p className="text-gray-600">
                Our approach combined Meta Ads and Google Search campaigns with engaging content creation to reach potential students across multiple touchpoints. We focused on building trust through student success stories and educational content.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-[300px]">
              <Image
                src="/casestudies/yashi-strategy.jpg"
                alt="Campaign Strategy"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#000000]">Campaign Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0A5C35] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Lead Generation</h3>
              <ul className="space-y-4">
                <li>• 1,000+ qualified leads</li>
                <li>• 20-25% conversion rate</li>
                <li>• High intent prospects</li>
                <li>• Global reach achieved</li>
              </ul>
            </div>
            <div className="bg-[#0B4619] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Social Growth</h3>
              <ul className="space-y-4">
                <li>• 5,000+ new followers</li>
                <li>• 1M+ reels impressions</li>
                <li>• 3x DM inquiries</li>
                <li>• Strong engagement</li>
              </ul>
            </div>
            <div className="bg-[#0A5C35] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Google Performance</h3>
              <ul className="space-y-4">
                <li>• 6.7% average CTR</li>
                <li>• 75%+ impression share</li>
                <li>• Effective remarketing</li>
                <li>• Quality score boost</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Ready to Go Global?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a powerful digital strategy to reach students worldwide and build your education brand.
          </p>
          <button className="bg-[#0A5C35] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0B4619] transition-all duration-300">
            Start Your Journey
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
} 