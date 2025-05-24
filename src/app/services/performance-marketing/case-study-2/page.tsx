import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaArrowRight, FaFacebookF, FaInstagram, FaChartLine, FaUsers } from "react-icons/fa";

export default function CaseStudyPage() {
  const metrics = [
    { number: "2000+", label: "Leads Generated" },
    { number: "12%", label: "Conversion Rate" },
    { number: "₹20-25", label: "Cost per Lead" },
    { number: "15+", label: "A/B Tested Creatives" },
  ];

  const platforms = [
    { icon: FaFacebookF, name: "Facebook Ads", color: "bg-blue-500" },
    { icon: FaInstagram, name: "Instagram Ads", color: "bg-pink-500" },
    { icon: FaChartLine, name: "Performance", color: "bg-green-500" },
    { icon: FaUsers, name: "Lead Generation", color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-[#0A5C35] to-[#0B4619]">
        <div className="absolute inset-0">
          <Image
            src="/casestudies/witwise-hero.jpg"
            alt="WitWise Education Hero"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              WitWise Education: Meta Ads Success Story
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Driving quality leads and building trust through strategic Meta advertising
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
              <h2 className="text-3xl font-bold mb-6">About WitWise Education</h2>
              <p className="text-gray-600 mb-6">
                WitWise Education is an online education company offering career advancement programs for students and young professionals. They partnered with JIVO Solutions to drive lead generation through Meta ads, focusing on Tier 1 and Tier 2 cities across India.
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
                src="/casestudies/witwise-overview.jpg"
                alt="WitWise Education Overview"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Strategy</h2>
              <p className="text-gray-600">
                We implemented a comprehensive funnel strategy using testimonials, faculty intros, and visual explainers. Our approach included A/B testing across multiple creative formats and optimizing for maximum conversion at minimal cost.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-[300px]">
              <Image
                src="/casestudies/witwise-strategy.jpg"
                alt="Strategy Overview"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Key Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0A5C35] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Lead Generation</h3>
              <ul className="space-y-4">
                <li>• Over 2,000+ qualified leads</li>
                <li>• 10-12% conversion rate</li>
                <li>• ₹20-25 cost per lead</li>
                <li>• High-quality prospects</li>
              </ul>
            </div>
            <div className="bg-[#0B4619] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Creative Performance</h3>
              <ul className="space-y-4">
                <li>• 15+ A/B tested creatives</li>
                <li>• Reels outperformed static</li>
                <li>• Strong testimonial impact</li>
                <li>• Regular creative refresh</li>
              </ul>
            </div>
            <div className="bg-[#0A5C35] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Campaign Impact</h3>
              <ul className="space-y-4">
                <li>• Increased brand trust</li>
                <li>• Wider market reach</li>
                <li>• Improved lead quality</li>
                <li>• Scalable funnel built</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Education Brand?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a data-driven strategy that delivers quality leads and builds lasting trust.
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