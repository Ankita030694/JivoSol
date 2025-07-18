'use client'
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

interface SolutionCard {
  image: string;
  title: string;
  description: string;
}

// Animated Counter Component
const AnimatedCounter = ({ target, duration = 2000, prefix = "", suffix = "" }: { target: number, duration?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration]);

  return (
    <span className="text-3xl font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

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
            className="font-poppins font-bold text-white uppercase text-4xl"
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading - We Are Paid Media Experts */}
          <h1 
            className="font-poppins font-bold text-gray-900 mb-6 text-4xl text-center"
          >
            We Are Paid Media Experts
          </h1>
          
          {/* Updated Subheading */}
          <div className="text-gray-600 mb-8 max-w-4xl mx-auto text-center font-poppins space-y-4">
            <p 
              style={{
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '29px',
                letterSpacing: '0%'
              }}
            >
              At JIVO Solutions, we go beyond traditional ad management. Our award-winning performance marketing experts craft high-impact campaigns using smart targeting, data-driven strategy, and continuous optimization. The goal is simple, more traffic, more leads, more sales.
            </p>
            <p 
              style={{
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '29px',
                letterSpacing: '0%'
              }}
            >
              Whether you're launching a product, scaling your eCommerce store, or generating B2B leads, we build campaigns that turn ad spend into measurable business impact.
            </p>
          </div>

          {/* What is Performance Marketing Section */}
          <div className="mb-12 max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl text-[#0A5C35] mb-4">
              What is Performance Marketing?
            </h2>
            <p className="text-gray-700 mb-6 font-poppins text-base leading-relaxed">
              Performance marketing is a results-focused form of online advertising where you only pay when someone takes a specific action, like clicking your ad, filling out a form, or making a purchase. It ensures every dollar spent is tied to a clear business outcome.
            </p>
            <p className="text-gray-700 mb-4 font-poppins text-base leading-relaxed">
              It's perfect for brands looking to:
            </p>
            <ul className="text-gray-700 font-poppins text-base leading-relaxed space-y-2 text-left max-w-2xl mx-auto">
              <li className="flex items-start">
                <span className="text-[#0A5C35] font-bold mr-2">•</span>
                Track real ROI from their ad budgets
              </li>
              <li className="flex items-start">
                <span className="text-[#0A5C35] font-bold mr-2">•</span>
                Target the right audience with precision
              </li>
              <li className="flex items-start">
                <span className="text-[#0A5C35] font-bold mr-2">•</span>
                Scale campaigns based on real-time data
              </li>
              <li className="flex items-start">
                <span className="text-[#0A5C35] font-bold mr-2">•</span>
                Maximize returns from every campaign
              </li>
            </ul>
          </div>
          
          {/* Services Heading - We Manage And Optimize */}
          <h2 
            className="mb-12 text-center font-poppins font-semibold text-2xl text-[#0A5C35]"
          >
            We Manage And Optimize Paid Marketing Across:
          </h2>
          
          {/* Metrics Cards Container with Exact Positioning */}
          <div className="relative mx-auto mb-12" style={{ width: '708px', height: '347px' }}>
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
              <h3 className="font-poppins font-semibold text-xl mb-2 opacity-90">Spend</h3>
              <AnimatedCounter target={20546} prefix="$" />
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
              <h3 className="font-poppins font-semibold text-xl mb-3 opacity-90 tracking-wide">Revenue</h3>
              <AnimatedCounter target={189696} prefix="$" />
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
              <h3 className="font-poppins font-semibold text-xl mb-2 opacity-90">ROAS</h3>
              <AnimatedCounter target={9.2} suffix="x" />
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

      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="font-poppins font-bold text-4xl text-center mb-6 md:mb-8 text-black">
          Platforms JIVO specializes in
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Bing Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="font-poppins font-semibold text-2xl text-green-800">
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
              <h2 className="font-poppins font-semibold text-2xl text-green-800">
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
              <h2 className="font-poppins font-semibold text-2xl text-green-800">
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
              <h2 className="font-poppins font-semibold text-2xl text-green-800">
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
              <h2 className="font-poppins font-semibold text-2xl text-green-800">
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
              <h2 className="font-poppins font-semibold text-2xl text-green-800">
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
              <h2 className="font-poppins font-semibold text-2xl text-green-800">
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
              <h2 className="font-poppins font-semibold text-2xl text-green-800">
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
              <h2 className="font-poppins font-semibold text-2xl text-green-800">
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

      {/* How does Performance Marketing work at JIVO? */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins font-bold text-4xl text-center mb-4 text-black">
            How does Performance Marketing work at JIVO?
          </h2>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto font-poppins text-lg">
            We use a step-by-step process to make sure your ads reach the right people, generate meaningful results, and continuously improve over time.
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-gradient-to-br from-[#0A5C35] to-[#4F9F7A] text-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="font-poppins font-bold text-xl mb-3">Set clear business goals</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  We begin by understanding what you want to achieve, whether it's more website traffic, leads, product sales, app installs, or event signups.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-br from-[#0A5C35] to-[#4F9F7A] text-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="font-poppins font-bold text-xl mb-3">Choose the right ad platforms</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-3">
                  We identify where your audience is most active and choose the most effective channels. These include:
                </p>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Google Ads (Search, Shopping, Display, Performance Max)</li>
                  <li>• Meta Ads (Facebook, Instagram & WhatsApp Marketing)</li>
                  <li>• LinkedIn Ads (For B2B & professional targeting)</li>
                  <li>• YouTube Ads (For video reach & brand storytelling)</li>
                  <li>• Bing Ads (For cost-effective search marketing)</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-br from-[#0A5C35] to-[#4F9F7A] text-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="font-poppins font-bold text-xl mb-3">Build campaign strategy & creatives</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-3">
                  We create:
                </p>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Scroll-stopping visual creatives</li>
                  <li>• Click-worthy ad copy</li>
                  <li>• Landing pages that convert</li>
                  <li>• Precise audience targeting using demographics, interests, keywords, and behaviours</li>
                  <li>• Smart bidding strategies to make the most of your ad spend</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="bg-gradient-to-br from-[#0A5C35] to-[#4F9F7A] text-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  4
                </div>
                <h3 className="font-poppins font-bold text-xl mb-3">Launch with advanced tracking</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-3">
                  Before your ads go live, we implement full-funnel tracking:
                </p>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Meta Pixel Smart Tracking for Retargeting & Conversions</li>
                  <li>• Google Analytics 4 (GA4) Deeper Insights into Your Website Visitors</li>
                  <li>• UTM tags to Track Campaign Sources</li>
                  <li>• Conversion Events To Track the Funnel from Click to Enrollment</li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="bg-gradient-to-br from-[#0A5C35] to-[#4F9F7A] text-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  5
                </div>
                <h3 className="font-poppins font-bold text-xl mb-3">Daily monitoring & optimization</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-3">
                  Once live, we monitor every campaign in real time. We track:
                </p>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Click-through rates (CTR)</li>
                  <li>• Cost per click (CPC)</li>
                  <li>• Cost Per Acquisition (CPA)</li>
                  <li>• Return on ad spend (ROAS)</li>
                  <li>• Ad Frequency, Ad Fatigue, and Audience Fatigue</li>
                </ul>
                <p className="text-white/90 text-sm leading-relaxed mt-3">
                  Based on what we see, we make daily tweaks, adjusting targeting, budgets, creatives, and bids to boost results.
                </p>
              </div>

              {/* Step 6 */}
              <div className="bg-gradient-to-br from-[#0A5C35] to-[#4F9F7A] text-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  6
                </div>
                <h3 className="font-poppins font-bold text-xl mb-3">Continuous testing & scaling</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  We constantly run A/B tests to compare different headlines, images, ad formats, and audiences. Once we find what's working best, we scale the campaign to reach more people and increase returns, without increasing waste.
                </p>
              </div>

              {/* Step 7 */}
              <div className="bg-gradient-to-br from-[#0A5C35] to-[#4F9F7A] text-white rounded-lg p-6 shadow-lg md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  7
                </div>
                <h3 className="font-poppins font-bold text-xl mb-3">Transparent Reporting</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  You'll receive clear, jargon-free performance reports every month (or weekly if needed). We explain what's working, what's not, and what's next so you always know where your money is going.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
           
      <div className="bg-[#ECECEC] px-4 py-8 md:p-12">
        <h1 className="font-poppins font-bold text-4xl text-center mb-6 md:mb-8 text-black">
          Our PPC Case Studies
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
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
                <h3 className="font-poppins font-medium text-xl text-gray-800">Nidhi Chugh</h3>
              </div>
              <h2 className="font-poppins font-bold text-2xl mb-2 text-[#0A5C35]">
                <AnimatedCounter target={83} suffix="M+" />
              </h2>
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
                <h3 className="font-poppins font-medium text-xl text-gray-800">WitWise Education</h3>
              </div>
              <h2 className="font-poppins font-bold text-2xl mb-2 text-[#0A5C35]">
                <AnimatedCounter target={2000} suffix="+" />
              </h2>
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
                
                <h3 className="font-poppins font-medium text-xl text-gray-800">Yashi Shukla Education</h3>
              </div>
              <h2 className="font-poppins font-bold text-2xl mb-2 text-[#0A5C35]">
                <AnimatedCounter target={1000} suffix="+" />
              </h2>
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

      {/* Why choose JIVO as your performance marketing partner */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins font-bold text-4xl text-center mb-12 text-black">
            Why choose JIVO as your performance marketing partner
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Tailored for Your Goals */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0A5C35] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-poppins font-bold text-xl mb-3 text-[#0A5C35]">Tailored for Your Goals</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Every business is different, and so is every ad campaign we run. We build your strategy around your product, market, and objectives to get the best results.
              </p>
            </div>

            {/* Platform-Specific Expertise */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0A5C35] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="font-poppins font-bold text-xl mb-3 text-[#0A5C35]">Platform-Specific Expertise</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Whether it's Google, Meta, LinkedIn, or YouTube, we know how to make each platform work for your business. Our team stays updated with the latest tools, features, and policies.
              </p>
            </div>

            {/* Clear Strategy */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0A5C35] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="font-poppins font-bold text-xl mb-3 text-[#0A5C35]">Clear Strategy</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We don't throw ads into the void. Every campaign starts with a clear plan backed by research, insights, and a focus on your bottom line.
              </p>
            </div>

            {/* One Dedicated Manager */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0A5C35] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="font-poppins font-bold text-xl mb-3 text-[#0A5C35]">One Dedicated Manager</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                You'll work with a single point of contact who knows your goals, updates you regularly, and keeps everything running smoothly.
              </p>
            </div>

            {/* Consistent Monitoring */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0A5C35] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="font-poppins font-bold text-xl mb-3 text-[#0A5C35]">Consistent Monitoring</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We monitor campaigns daily, test new ideas, and make smart changes so your results keep getting better.
              </p>
            </div>

            {/* Performance Reports */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0A5C35] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="font-poppins font-bold text-xl mb-3 text-[#0A5C35]">Performance Reports</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                You'll get easy-to-read reports that show exactly what your ads achieved, leads, sales, traffic, and what's coming next.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-[#0A5C35] hover:bg-[#004826] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Book a discovery call
            </button>
          </div>
        </div>
      </div>
      
      {/* FAQs Section */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-[#0a5c35]/5 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="font-poppins font-bold text-2xl mb-2 text-[#0a5c35]">
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
                <span className={`font-poppins font-semibold text-sm transition-colors duration-300 ${
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
                <span className={`font-poppins font-semibold text-sm transition-colors duration-300 ${
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
                <span className={`font-poppins font-semibold text-sm transition-colors duration-300 ${
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
                <span className={`font-poppins font-semibold text-sm transition-colors duration-300 ${
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
                <span className={`font-poppins font-semibold text-sm transition-colors duration-300 ${
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
                <span className={`font-poppins font-semibold text-sm transition-colors duration-300 ${
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
                <span className={`font-poppins font-semibold text-sm transition-colors duration-300 ${
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
