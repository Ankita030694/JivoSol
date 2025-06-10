'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

interface SolutionCard {
  image: string;
  title: string;
  description: string;
}
export default function InsightsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const solutions: SolutionCard[] = [
    {
      image: "/jabout1.svg",
      title: "Brand Identity & Design",
      description: "Shape how your brand is seen, understood, and remembered.",
    },
    {
      image: "/jabout2.svg",
      title: "Website Development & SEO",
      description:
        "Build high-performing digital foundations that convert and rank.",
    },
    {
      image: "/jabout3.svg",
      title: "Content Creation & Prod.",
      description:
        "Tell stories that connect, educate, and resonate with your audience.",
    },
    {
      image: "/jabout4.svg",
      title: "Social Media Management",
      description:
        "Show up consistently where your audience spends their time.",
    },
    {
      image: "/jabout2.svg",
      title: "Website Development & SEO",
      description:
        "Build high-performing digital foundations that convert and rank.",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
          <h1
            className="font-poppins font-bold text-white uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[42px]"
          >
            Performance Marketing
          </h1>
        </div>
        <Image
          src="/jivobn1.svg"
          alt="Jivo Hero"
          width={1000}
          height={100}
          className="w-full h-36 sm:h-48 object-cover"
          priority
        />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading - We Are Paid Media Experts */}
          <h1 
            className="font-bold text-gray-900 mb-8 leading-[60px] text-center"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '60px',
              letterSpacing: '0%'
            }}
          >
            We Are Paid Media Experts
          </h1>
          
          {/* Subheading - Award-winning description */}
          <p 
            className="text-gray-600 mb-12 max-w-4xl mx-auto text-center"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '29px',
              letterSpacing: '0%'
            }}
          >
            Our award-winning paid media marketing experts are dedicated to helping businesses grow through effective digital marketing strategies. we know what it takes to drive traffic, increase conversions, and maximize roi .
          </p>
          
          {/* Services Heading - We Manage And Optimize */}
          <h2 
            className="mb-16 text-center"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '29px',
              letterSpacing: '0%',
              color: '#0A5C35'
            }}
          >
            We Manage And Optimize Paid Marketing Across:
          </h2>
          
          {/* Metrics Cards Container with Exact Positioning */}
          <div className="relative mx-auto mb-20" style={{ width: '708px', height: '347px' }}>
            {/* Spend Card - Left */}
            <div 
              className="absolute text-white flex flex-col justify-center shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{
                width: '214px',
                height: '161px',
                top: '162px',
                left: '0px',
                borderRadius: '24px 24px 0 0',
                borderTop: '5px solid rgba(255,255,255,0.2)',
                background: 'linear-gradient(180deg, #004826 0%, #4F9F7A 100%)',
                padding: '32px'
              }}
            >
              <h3 className="text-xl font-semibold mb-2 opacity-90">Spend</h3>
              <p className="text-3xl font-bold">$20,546</p>
            </div>
            
            {/* Revenue Card - Middle (Tallest) */}
            <div 
              className="absolute text-white flex flex-col justify-center shadow-2xl transform hover:scale-105 transition-all duration-300 z-10"
              style={{
                width: '280px',
                height: '347px',
                top: '0px',
                left: '214px',
                borderRadius: '24px',
                background: 'linear-gradient(180deg, #004826 0%, #4F9F7A 100%)',
                padding: '32px'
              }}
            >
              {/* Custom Image Placeholder for Up Arrow */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  {/* Glowing background circle */}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm animate-pulse"></div>
                  {/* Image container with subtle border */}
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
                    <img 
                      src="/up.png" 
                      alt="Revenue Growth Icon"
                      className="w-16 h-16 object-contain drop-shadow-lg"
                    />
                    {/* Fallback placeholder */}
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-2xl hidden">
                      ↑
                    </div>
                  </div>
                  {/* Small accent dots */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/40 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 opacity-90 tracking-wide">Revenue</h3>
              <p className="text-5xl font-bold drop-shadow-md">$189,696</p>
            </div>
            
            {/* ROAS Card - Right */}
            <div 
              className="absolute text-white flex flex-col justify-center shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{
                width: '214px',
                height: '161px',
                top: '162px',
                right: '0px',
                borderRadius: '24px 24px 0 0',
                borderTop: '5px solid rgba(255,255,255,0.2)',
                background: 'linear-gradient(180deg, #004826 0%, #4F9F7A 100%)',
                padding: '32px'
              }}
            >
              <h3 className="text-xl font-semibold mb-2 opacity-90">ROAS</h3>
              <p className="text-3xl font-bold">9.2</p>
            </div>
          </div>
          
          {/* Partner Logos - Custom Images */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 pt-8 border-gray-200 -mt-30 relative z-50">
            {/* Custom Partner Logo 1 */}
            <div className="flex flex-col items-center group cursor-pointer relative z-50">
              <div className="mb-4">
                <img 
                  src="/meta.png" 
                  alt="Meta Partner Logo"
                  className="h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300 relative z-50"
                  style={{ transform: 'scale(2)' }}
                />
              </div>
            </div>
            
            {/* Custom Partner Logo 2 */}
            <div className="flex flex-col items-center group cursor-pointer relative z-50 ml-20">
              <div className="mb-4">
                <img 
                  src="/google.png" 
                  alt="Google Partner Logo"
                  className="h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300 relative z-50"
                  style={{ transform: 'scale(2)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="w-full flex justify-center items-center">
        <Image
          src="/heround2.svg"
          alt="Jivo Hero"
          width={300}
          height={100}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <div>
        <Image
          src="/heround3.svg"
          alt="Jivo Hero"
          width={1000}
          height={100}
          className="w-full h-36 sm:h-48 object-contain md:object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-black">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Bing Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Bing Ads
              </h2>
              <Image src="/bing.svg" alt="Bing Logo" width={32} height={32} />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              Microsoft's Bing search engine has more than 936 million unique
              monthly visitors! Tap into this audience with our Bing Ads
              services that include advanced targeting, ad scheduling, keyword
              research, ad copy, A/B testing, and budget control.
            </p>
          </div>

          {/* Facebook Advertising */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Facebook Advertising
              </h2>
              <Image src="/fb.svg" alt="Facebook Logo" width={32} height={32} />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              Be seen and heard on the world's largest social media network. Our
              Facebook advertising services include advanced targeting options,
              personalized ad creation, and retargeting website visitors to
              increase conversions and sales.
            </p>
          </div>

          {/* Google Display Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Google Display Ads
              </h2>
              <Image
                src="/da.svg"
                alt="Google Display Logo"
                width={32}
                height={32}
              />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              Advertise on a network of over two million websites, videos, and
              apps with our Google Display Ads services. Utilizing a wide range
              of ad formats and targeting options, we create highly engaging and
              relevant ads to reach your target audience.
            </p>
          </div>

          {/* Google Paid Search */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Google Paid Search
              </h2>
              <Image
                src="/google.svg"
                alt="Google Logo"
                width={32}
                height={32}
              />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              We offer Google Paid Search services, also known as Google Ads, to
              help you advertise on Google SERPs. Our Google Paid Search
              services include keyword research, bid management, and ad creation
              to target users looking for products/services similar to what you
              offer.
            </p>
          </div>

          {/* Instagram Advertising */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Instagram Advertising
              </h2>
              <Image
                src="/insta.svg"
                alt="Instagram Logo"
                width={32}
                height={32}
              />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              Connect with your audience on one of the most engaging social platforms. Our
              Instagram advertising services include creative content development,
              targeted campaigns, and performance optimization to maximize your
              brand's impact and reach.
            </p>
          </div>

          {/* LinkedIn PPC Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                LinkedIn PPC Ads
              </h2>
              <Image
                src="/linekdin.svg"
                alt="LinkedIn Logo"
                width={32}
                height={32}
              />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              Reach professional audiences with our LinkedIn PPC advertising services.
              We specialize in creating targeted campaigns for B2B marketing,
              lead generation, and brand awareness in the professional network.
            </p>
          </div>

          {/* Remarketing Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Remarketing Ads
              </h2>
              <Image
                src="/market.svg"
                alt="Remarketing Logo"
                width={32}
                height={32}
              />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              Reconnect with your website visitors through strategic remarketing campaigns.
              Our services help you engage potential customers who have shown interest
              in your products or services, increasing conversion rates and ROI.
            </p>
          </div>

          {/* Shopping Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Shopping Ads
              </h2>
              <Image
                src="/bag.svg"
                alt="Shopping Logo"
                width={32}
                height={32}
              />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              Showcase your products directly in search results with our Shopping Ads
              services. We optimize your product listings, manage campaigns, and
              implement strategies to increase visibility and drive sales.
            </p>
          </div>

          {/* YouTube Video Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                YouTube Video Ads
              </h2>
              <Image src="/yt.svg" alt="YouTube Logo" width={32} height={32} />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              Advertise on the world's largest video-sharing platform with our
              YouTube video ads services. We create engaging video ads in
              various formats, including skippable ads, non-skippable ads,
              bumper ads, and banner ads to effectively reach your target audience.
            </p>
          </div>
        </div>
      </div>
           
      <div className="bg-[#ECECEC] px-4 py-8 md:p-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-black">
          Our PPC Case Studies
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10">
          {/* Case Study 1 - Nidhi Chugh */}
          <div className="bg-white rounded-lg overflow-hidden shadow transform transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="relative h-48">
              <Image 
                src="/casestudies/ncdp.jpg" 
                alt="Nidhi Chugh Case Study" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <span className="bg-[#0A5C35] text-white px-3 py-1 rounded-full text-sm">Featured</span>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium text-gray-800">Nidhi Chugh</h3>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#0A5C35]">83M+</h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Global spiritual brand growth through Meta Ads, Google Ads & YouTube
              </p>
              <Link 
                href="/services/performance-marketing/case-study-1" 
                className="flex items-center text-[#0A5C35] font-medium text-sm md:text-base group"
              >
                See Case Study
                <svg 
                  className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Case Study 2 - WitWise Education */}
          <div className="bg-white rounded-lg overflow-hidden shadow transform transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="relative h-48">
              <Image 
                src="/witwisecs.jpeg" 
                alt="WitWise Education Case Study" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium text-gray-800">WitWise Education</h3>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#0A5C35]">2000+</h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Driving quality leads through strategic Meta advertising
              </p>
              <Link 
                href="/services/performance-marketing/case-study-2" 
                className="flex items-center text-[#0A5C35] font-medium text-sm md:text-base group"
              >
                See Case Study
                <svg 
                  className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Case Study 3 - Yashi Shukla Education */}
          <div className="bg-white rounded-lg overflow-hidden shadow transform transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="relative h-48">
              <Image 
                src="/yse.jpeg" 
                alt="Yashi Shukla Education Case Study" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                
                <h3 className="font-medium text-gray-800">Yashi Shukla Education</h3>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#0A5C35]">1000+</h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Global education marketing success through multi-platform strategy
              </p>
              <Link 
                href="/services/performance-marketing/case-study-3" 
                className="flex items-center text-[#0A5C35] font-medium text-sm md:text-base group"
              >
                See Case Study
                <svg 
                  className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          
        </div>

        <div className="flex justify-center gap-2">
          <button className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center">
            <span className="sr-only">Previous</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-green-200 text-green-800 flex items-center justify-center">
            <span className="sr-only">Next</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* FAQs Section */}
      <section className="py-12 bg-gradient-to-b from-[#0a5c35]/5 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 font-poppins text-[#0a5c35]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 text-sm max-w-2xl mx-auto">
              Find answers to common questions about our performance marketing services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* FAQ 1 */}
            <div className="mb-3">
              <button
                className={`w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group
                  ${openIndex === 0 
                    ? 'bg-[#0a5c35] text-white shadow-lg' 
                    : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                  }`}
                onClick={() => toggleFAQ(0)}
              >
                <span className={`font-semibold text-sm transition-colors duration-300 ${
                  openIndex === 0 ? 'text-white' : 'text-gray-800'
                }`}>
                  What is performance marketing?
                </span>
                <span className={`text-lg transition-colors duration-300 ${
                  openIndex === 0 ? 'text-white' : 'text-[#0a5c35]'
                }`}>
                  {openIndex === 0 ? '↑' : '↓'}
                </span>
              </button>
              {openIndex === 0 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    Performance marketing is a results-driven approach where you pay only for actions like clicks, leads, or sales. We track and optimize every campaign to deliver measurable ROI.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="mb-3">
              <button
                className={`w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group
                  ${openIndex === 1 
                    ? 'bg-[#0a5c35] text-white shadow-lg' 
                    : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                  }`}
                onClick={() => toggleFAQ(1)}
              >
                <span className={`font-semibold text-sm transition-colors duration-300 ${
                  openIndex === 1 ? 'text-white' : 'text-gray-800'
                }`}>
                  Which platforms do you run ads on?
                </span>
                <span className={`text-lg transition-colors duration-300 ${
                  openIndex === 1 ? 'text-white' : 'text-[#0a5c35]'
                }`}>
                  {openIndex === 1 ? '↑' : '↓'}
                </span>
              </button>
              {openIndex === 1 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    We run campaigns on Meta (Facebook & Instagram), Google Search & Display, YouTube, LinkedIn, Bing, and other top ad networks based on your audience.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="mb-3">
              <button
                className={`w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group
                  ${openIndex === 2 
                    ? 'bg-[#0a5c35] text-white shadow-lg' 
                    : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                  }`}
                onClick={() => toggleFAQ(2)}
              >
                <span className={`font-semibold text-sm transition-colors duration-300 ${
                  openIndex === 2 ? 'text-white' : 'text-gray-800'
                }`}>
                  Can you manage ads for both products and services?
                </span>
                <span className={`text-lg transition-colors duration-300 ${
                  openIndex === 2 ? 'text-white' : 'text-[#0a5c35]'
                }`}>
                  {openIndex === 2 ? '↑' : '↓'}
                </span>
              </button>
              {openIndex === 2 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    Yes. We create ad strategies for e-commerce brands, service-based businesses, educators, consultants, and more.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="mb-3">
              <button
                className={`w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group
                  ${openIndex === 3 
                    ? 'bg-[#0a5c35] text-white shadow-lg' 
                    : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                  }`}
                onClick={() => toggleFAQ(3)}
              >
                <span className={`font-semibold text-sm transition-colors duration-300 ${
                  openIndex === 3 ? 'text-white' : 'text-gray-800'
                }`}>
                  What's included in your ad management service?
                </span>
                <span className={`text-lg transition-colors duration-300 ${
                  openIndex === 3 ? 'text-white' : 'text-[#0a5c35]'
                }`}>
                  {openIndex === 3 ? '↑' : '↓'}
                </span>
              </button>
              {openIndex === 3 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    We handle ad strategy, keyword research, creative development, audience targeting, A/B testing, performance tracking, and ongoing optimization.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="mb-3">
              <button
                className={`w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group
                  ${openIndex === 4 
                    ? 'bg-[#0a5c35] text-white shadow-lg' 
                    : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                  }`}
                onClick={() => toggleFAQ(4)}
              >
                <span className={`font-semibold text-sm transition-colors duration-300 ${
                  openIndex === 4 ? 'text-white' : 'text-gray-800'
                }`}>
                  How do you track campaign performance?
                </span>
                <span className={`text-lg transition-colors duration-300 ${
                  openIndex === 4 ? 'text-white' : 'text-[#0a5c35]'
                }`}>
                  {openIndex === 4 ? '↑' : '↓'}
                </span>
              </button>
              {openIndex === 4 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    We use tools like Meta Ads Manager, Google Analytics, Google Ads Dashboard, and heatmaps to monitor traffic, conversions, and ROI in real-time.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div className="mb-3">
              <button
                className={`w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group
                  ${openIndex === 5 
                    ? 'bg-[#0a5c35] text-white shadow-lg' 
                    : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                  }`}
                onClick={() => toggleFAQ(5)}
              >
                <span className={`font-semibold text-sm transition-colors duration-300 ${
                  openIndex === 5 ? 'text-white' : 'text-gray-800'
                }`}>
                  What is remarketing and do you offer it?
                </span>
                <span className={`text-lg transition-colors duration-300 ${
                  openIndex === 5 ? 'text-white' : 'text-[#0a5c35]'
                }`}>
                  {openIndex === 5 ? '↑' : '↓'}
                </span>
              </button>
              {openIndex === 5 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    Yes, we do. Remarketing targets users who've visited your site or interacted with your content, helping convert warm leads into paying customers.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 7 */}
            <div className="mb-3">
              <button
                className={`w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group
                  ${openIndex === 6 
                    ? 'bg-[#0a5c35] text-white shadow-lg' 
                    : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                  }`}
                onClick={() => toggleFAQ(6)}
              >
                <span className={`font-semibold text-sm transition-colors duration-300 ${
                  openIndex === 6 ? 'text-white' : 'text-gray-800'
                }`}>
                  How soon can I see results?
                </span>
                <span className={`text-lg transition-colors duration-300 ${
                  openIndex === 6 ? 'text-white' : 'text-[#0a5c35]'
                }`}>
                  {openIndex === 6 ? '↑' : '↓'}
                </span>
              </button>
              {openIndex === 6 && (
                <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                  <p className="text-gray-700 leading-relaxed text-xs">
                    You may start seeing early results within 1–2 weeks, but most campaigns show strong performance after 4–6 weeks of testing and optimization.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
