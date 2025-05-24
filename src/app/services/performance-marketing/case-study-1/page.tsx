import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaArrowRight, FaYoutube, FaSpotify, FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";

export default function CaseStudyPage() {
  const metrics = [
    { number: "83M+", label: "Meta Impressions" },
    { number: "3100+", label: "Total Leads" },
    { number: "₹30L+", label: "Revenue Generated" },
    { number: "2M+", label: "YouTube Views" },
  ];

  const platforms = [
    { icon: FaFacebookF, name: "Meta Ads", color: "bg-blue-500" },
    { icon: FaGoogle, name: "Google Ads", color: "bg-red-500" },
    { icon: FaYoutube, name: "YouTube Growth", color: "bg-red-600" },
    { icon: FaSpotify, name: "Podcast Branding", color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-[#0A5C35] to-[#0B4619]">
        <div className="absolute inset-0">
          <Image
            src="/casestudies/ncdp.jpg"
            alt="Nidhi Chugh Hero"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nidhi Chugh: Global Spiritual Brand Growth
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A comprehensive digital strategy spanning Meta Ads, Google Ads, YouTube Growth & Podcast Branding
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-[#0A5C35] px-8 py-3 rounded-full font-medium hover:bg-[#0A5C35] hover:text-white transition-all duration-300">
                View Case Study
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#0A5C35] transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-[#0A5C35] mb-2">{metric.number}</h3>
                <p className="text-gray-600">{metric.label}</p>
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
              <h2 className="text-3xl font-bold mb-6">About Nidhi Chugh</h2>
              <p className="text-gray-600 mb-6">
                Nidhi Chugh is a renowned astrologer, spiritual coach, and intuitive energy guide who empowers individuals through astrology, numerology, and cosmic healing. She partnered with JIVO Solutions to expand her digital presence and create a structured content ecosystem.
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
                src="/casestudies/ncpost.png"
                alt="Nidhi Chugh Case Study"
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
              <h2 className="text-3xl font-bold mb-6">Campaign Strategy</h2>
              <p className="text-gray-600">
                Our comprehensive digital strategy encompassed multiple platforms to maximize reach and engagement. We focused on creating authentic content that resonates with the spiritual community while driving measurable results.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-[300px]">
              <Image
                src="/casestudies/ncreel.png"
                alt="Campaign Strategy"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`${platform.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}>
                  <platform.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{platform.name}</h3>
                <p className="text-gray-600 mb-4">
                  Strategic approach to maximize reach and engagement across platforms.
                </p>
                <button className="text-[#0A5C35] font-medium flex items-center gap-2 hover:gap-4 transition-all duration-300">
                  Learn More <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0A5C35] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Meta Performance</h3>
              <ul className="space-y-4">
                <li>• 2,000+ high-intent leads</li>
                <li>• 83M+ impressions</li>
                <li>• 70k+ new followers</li>
                <li>• 35%+ international leads</li>
              </ul>
            </div>
            <div className="bg-[#0B4619] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">YouTube Growth</h3>
              <ul className="space-y-4">
                <li>• 7.5k+ subscribers</li>
                <li>• 2M+ total views</li>
                <li>• High engagement rate</li>
                <li>• Consistent growth</li>
              </ul>
            </div>
            <div className="bg-[#0A5C35] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Podcast Impact</h3>
              <ul className="space-y-4">
                <li>• 15 episodes published</li>
                <li>• 5,000+ streams</li>
                <li>• Top 100 in category</li>
                <li>• Global reach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative h-[400px]">
              <Image
                src="/casestudies/ndservices.jpg"
                alt="Nidhi Chugh Services"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Services</h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A5C35] mb-2">Meta & Google Ads</h3>
                  <p className="text-gray-600">Targeted campaigns across multiple regions with focus on Indian diaspora</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A5C35] mb-2">YouTube Growth</h3>
                  <p className="text-gray-600">Strategic content planning and optimization for maximum reach</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A5C35] mb-2">Podcast Production</h3>
                  <p className="text-gray-600">End-to-end podcast management and distribution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Brand?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a tailored digital strategy that drives real results for your business.
          </p>
          <button className="bg-[#0A5C35] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0B4619] transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
