"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import CTAComponent from "../CTAComponent";
import ResultComponent from "../ResultComponent";

// Add brochures data
const brochures = [
  {
    title: "WitWise Brochure",
    file: "/brochures/witwise-brochure.pdf",
    thumbnail: "/brochures/thumbnails/witwise-thumbnail.png"
  },
  {
    title: "CME",
    file: "/brochures/santhosh-portfolio.pdf",
    thumbnail: "/brochures/thumbnails/santhosh-thumbnail.png"
  },
  {
    title: "Nidhi Chugh Portfolio",
    file: "/brochures/nidhi-portfolio.pdf",
    thumbnail: "/brochures/thumbnails/nidhi-thumbnail.png"
  },
  {
    title: "CS Spine Brochure",
    file: "/brochures/cs-spine-brochure.pdf",
    thumbnail: "/brochures/thumbnails/cs-spine-thumbnail.png"
  },
  {
    title: "Amara Portfolio",
    file: "/brochures/amar-portfolio.pdf",
    thumbnail: "/brochures/thumbnails/amar-thumbnail.png"
  },
  {
    title: "AB Portfolio",
    file: "/brochures/ab-portfolio.pdf",
    thumbnail: "/brochures/thumbnails/ab-thumbnail.png"
  }
];

// Add Modal components
const BrandLogoModal = ({ isOpen, onClose, imageUrl }: { isOpen: boolean; onClose: () => void; imageUrl: string }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full bg-white rounded-lg p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative h-[80vh] w-full">
          <Image
            src={imageUrl}
            alt="Brand Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const StationaryCarouselModal = ({ isOpen, onClose, images, startIndex }: { isOpen: boolean; onClose: () => void; images: { src: string; title: string }[]; startIndex: number }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full bg-white rounded-lg p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{images[currentIndex].title}</h3>
        </div>

        <div className="relative h-[80vh] w-full">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevSlide}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextSlide}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? 'bg-green-700' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Add ProcessSteps component
const ProcessSteps = () => {
  const steps = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Brand Discovery",
      description: "We begin with a call to understand your story, vision, audience, and what sets you apart."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      ),
      title: "Strategy & Positioning", 
      description: "We develop your brand strategy and positioning to differentiate you in the market."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      title: "Visual Exploration",
      description: "We share mood boards and design directions to align on the look and feel."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      ),
      title: "Final Design",
      description: "We craft your logo, color palette, fonts, and brand system"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      title: "Brand Guidelines Creation",
      description: "We give you a clear brand guidelines document so everything stays consistent across platforms"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      title: "Delivery of Brand Assets",
      description: "We hand over everything you need to launch your brand!"
    }
  ];

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins font-bold text-4xl text-center mb-12 text-black">
          Our Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0A5C35] rounded-lg flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="font-poppins font-bold text-xl mb-3 text-[#0A5C35]">{step.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function InsightsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedBrochure, setSelectedBrochure] = useState<string | null>(null);
  const [isBrandLogoModalOpen, setIsBrandLogoModalOpen] = useState(false);
  const [isStationaryModalOpen, setIsStationaryModalOpen] = useState(false);
  const [selectedStationaryIndex, setSelectedStationaryIndex] = useState(0);
  const [isSecondBrandModalOpen, setIsSecondBrandModalOpen] = useState(false);
  const [selectedSecondBrandIndex, setSelectedSecondBrandIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventImages.length) % eventImages.length);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const brandLogos = [
    "/clientlogos/1.jpeg",
    "/clientlogos/2.jpeg",
    "/clientlogos/3.jpeg",
    "/clientlogos/4.jpeg",
    "/clientlogos/5.jpeg",
    "/clientlogos/6.jpeg",
    "/clientlogos/7.jpeg",
    "/clientlogos/8.jpeg",
    "/clientlogos/17.jpeg"
  ];

  const faqs = [
    {
      question: "What's included in a brand identity package?",
      answer: "You'll get logo design, color palette, typography system, brand guidelines, and all final assets in print and digital formats."
    },
    {
      question: "How many logo options and revisions do you offer?",
      answer: "We present multiple initial concepts and include revision rounds to refine the direction until it's right for your brand."
    },
    {
      question: "Do you provide a brand guidelines document?",
      answer: "Yes. It includes logo usage, tone of voice, color codes, font rules, and placement guides for brand consistency."
    },
    {
      question: "Can you create business cards, stationery, and event collaterals?",
      answer: "Absolutely. We design brand kits with cards, letterheads, email signatures, and print material for events or campaigns."
    }, 
    {
      question: "Can you redesign or upgrade my existing branding?",
      answer: "Yes. Whether you need a full rebrand or a visual refresh, we align your identity with your growth and audience."
    },
    {
      question: "Will I get files in all formats?",
      answer: "Yes. Final assets are delivered in all standard print and digital formats (PNG, JPEG, PDF, SVG, EPS, etc.)."
    },
    {
      question: "How long does a branding project take?",
      answer: "Brand identity projects usually take 3 - 4 weeks, depending on the scope and number of revisions."
    }
  ];

  const eventImages = [
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe01.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe02.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe03.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe04.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe05.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe06.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe07.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe08.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
  ];

  const stationaryItems = [
    { src: '/stationary/letterhead.png', title: 'Letterhead Design' },
    { src: '/stationary/business-card.png', title: 'Business Card Design' },
    { src: '/stationary/invoice.png', title: 'Invoice Design' },
    { src: '/stationary/stationary-preview-1.jpeg', title: 'Stationary Preview 1' },
    { src: '/stationary/stationary-preview-2.jpeg', title: 'Stationary Preview 2' },
    { src: '/stationary/stationary-preview-3.jpeg', title: 'Stationary Preview 3' },
    { src: '/stationary/stationary-preview-4.jpeg', title: 'Stationary Preview 4' },
    { src: '/stationary/stationary-preview-5.jpeg', title: 'Stationary Preview 5' }
  ];

  const secondBrandItems = [
    { src: '/stationary/img11.jpg', title: 'Brand Design 1' },
    { src: '/stationary/Img12.jpg', title: 'Brand Design 2' },
    { src: '/stationary/Img14.jpg', title: 'Brand Design 3' },
    { src: '/stationary/img34.jpg', title: 'Brand Design 4' },
    { src: '/stationary/img45.jpg', title: 'Brand Design 5' },
    { src: '/stationary/img113.jpg', title: 'Brand Design 6' }
  ];

  return (
    <div>
      <Navbar />
      <div className="w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1
            className="font-poppins font-bold text-white uppercase text-center px-4"
            style={{
              fontSize: "clamp(24px, 5vw, 42px)",
            }}
          >
            Brand Identity & Design
          </h1>
        </div>
        <Image
          src="/jivobn1.svg"
          alt="Jivo Hero"
          width={1000}
          height={100}
          className="w-full h-32 md:h-48 object-cover"
          priority
        />
      </div>

      {/* Brand Introduction Section */}
      <div className="px-4 md:px-48 py-8 bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">Build a brand that stays remembered.</h2>
          <p className="mb-4 text-black max-w-4xl mx-auto">
            Your brand is more than just a logo. It's how people see, feel, and remember your business. At JIVO Solutions, we help you build a clear, memorable, and professional brand identity that creates trust, drives recall, and sets you apart in any market.
          </p>
          
          <div className="flex flex-col gap-6 mb-8">
            {/* First row: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Build trust and professionalism",
                "Stand out in crowded markets",
                "Communicate your values clearly"
              ].map((benefit, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base font-medium text-gray-800">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Second row: 2 cards centered */}
            <div className="flex justify-center gap-6">
              {[
                "Attract your ideal customers",
                "Stay consistent across every platform"
              ].map((benefit, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-200 min-w-[250px]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base font-medium text-gray-800">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-black">What's included?</h3>
            <p className="text-gray-700 mb-4">
              We offer complete branding services that cover everything from discovery to design, across digital, print, and web touchpoints.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-48 py-8 bg-[#ECECEC]">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">What We Offer</h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 text-black">
            We offer end-to-end branding services, from concept to final delivery — across <br className="hidden md:block" /> digital, print, and real-world experiences.
          </p>
          
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => scrollToSection('logo-section')}
              className="px-4 md:px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group text-sm md:text-base"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">Logo designing & branding</span>
              <div className="absolute top-0 left-0 h-full w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
            <button 
              onClick={() => scrollToSection('event-section')}
              className="px-4 md:px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group text-sm md:text-base"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">Event & print design</span>
              <div className="absolute top-0 left-0 h-full w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
            <button 
              onClick={() => scrollToSection('stationary-section')}
              className="px-4 md:px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group text-sm md:text-base"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">Brand Stationery Kit</span>
              <div className="absolute top-0 left-0 h-full w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
            <button 
              onClick={() => scrollToSection('brochures-section')}
              className="px-4 md:px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group text-sm md:text-base"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">Brochures</span>
              <div className="absolute top-0 left-0 h-full w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-12">
            {[
              "Concept development and mood boarding",
              "Typography hierarchy and usage",
              "Multiple logo concepts + revisions",
              "Iconography or custom elements (if applicable)",
              "Primary and secondary logo versions",
              "Brand guideline document (tone of voice, usage rules, logo placement)",
              "Brand color palette",
              "Final delivery in all formats (print and digital)",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-green-700">✓</span>
                <span className="text-black text-xs md:text-sm text-start">{item}</span>
              </div>
            ))}
          </div>


        </div>
      </div>

      {/* Client Logos Section */}
      <div id="logo-section" className="px-4 md:px-48 py-8 bg-white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">Logo Designing & Branding</h2>
          <p className="text-sm md:text-base text-gray-600 mb-8">
            Trusted by leading brands across industries
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 md:gap-12 max-w-5xl mx-auto">
          {brandLogos.map((logo: string, index: number) => (
            <div key={index} className="flex items-center justify-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="relative w-[150px] h-[150px]">
                <Image
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 150px, 150px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event & Print Design Section */}
      <div id="event-section" className="px-4 md:px-48 py-8 bg-[#f9f9f9]">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Event & Print Design</h2>
          <p className="text-sm md:text-base text-gray-600">
            Explore our work in print collateral — from letterheads and newspapers to standees and bill designs.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[300px] md:h-[500px] flex items-center justify-center">
            {/* Previous Image */}
            <div className="absolute left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] transform -translate-x-1/2 transition-all duration-300 opacity-50 blur-sm hidden md:block">
              <Image
                src={eventImages[(currentSlide - 1 + eventImages.length) % eventImages.length]}
                alt="Previous"
                fill
                className="object-contain"
              />
            </div>

            {/* Current Image */}
            <div className="relative w-[250px] h-[250px] md:w-[500px] md:h-[500px] z-10 transition-all duration-300">
              <Image
                src={eventImages[currentSlide]}
                alt={`Event & Print Design ${currentSlide + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Next Image */}
            <div className="absolute right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] transform translate-x-1/2 transition-all duration-300 opacity-50 blur-sm hidden md:block">
              <Image
                src={eventImages[(currentSlide + 1) % eventImages.length]}
                alt="Next"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-16 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-16 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 md:mt-8">
            {eventImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-green-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Brand Stationary Kit Section */}
      <div id="stationary-section" className="px-4 md:px-48 py-8 bg-white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Brand Stationary Kit</h2>
          <p className="text-sm md:text-base text-gray-600">
            Professional stationary designs that elevate your brand presence
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Brand Logo */}
            <div 
              className="cursor-pointer group"
              onClick={() => setIsStationaryModalOpen(true)}
            >
              <div className="relative h-[150px] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <Image
                  src="/stationary/brand-logo.png"
                  alt="Brand Logo"
                  fill
                  className="object-contain p-4 bg-white"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Brand Kit 1
                  </span>
                </div>
              </div>
            </div>

            {/* Second Brand Logo */}
            <div 
              className="cursor-pointer group"
              onClick={() => setIsSecondBrandModalOpen(true)}
            >
              <div className="relative h-[150px] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <Image
                  src="/stationary/img34.jpg"
                  alt="Second Brand Logo"
                  fill
                  className="object-contain p-4 bg-white"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Brand Kit 2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brochures Section - Moved here */}
      <section id="brochures-section" className="py-8 bg-[#f9f9f9]">
        <div className="container mx-auto px-4 md:px-48">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">Our Brochures</h2>
            <p className="text-sm md:text-base text-gray-600">
              Explore our collection of brochures and portfolios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {brochures.map((brochure, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
                onClick={() => window.open(brochure.file, '_blank')}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={brochure.thumbnail}
                    alt={brochure.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View PDF
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{brochure.title}</h3>
                  <div className="flex items-center text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm">Click to view</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center py-8 w-[90%] mx-auto">
        <ProcessSteps />
      </div>


      <div className="flex justify-center items-center w-full">
        <ResultComponent />
      </div>

      {/* CTA Section */}
      <CTAComponent
        title="Ready to Build a Memorable Brand?"
        description="Let's discuss how we can help you create a brand identity that stands out and stays remembered."
      />

      {/* FAQ Section */}
      <section className="py-8 bg-gradient-to-b from-[#0a5c35]/5 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 font-poppins text-[#0a5c35]">
              FAQs
            </h2>
            <p className="text-gray-700 text-xs md:text-sm max-w-2xl mx-auto">
              Find answers to common questions about our brand identity and design services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-3">
                <button
                  className={`w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group
                    ${openIndex === index 
                      ? 'bg-[#0a5c35] text-white shadow-lg' 
                      : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                    }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-semibold text-xs md:text-sm transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`text-base md:text-lg transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-[#0a5c35]'
                  }`}>
                    {openIndex === index ? '↑' : '↓'}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      <BrandLogoModal
        isOpen={isBrandLogoModalOpen}
        onClose={() => setIsBrandLogoModalOpen(false)}
        imageUrl="/stationary/brand-logo.png"
      />

      <StationaryCarouselModal
        isOpen={isStationaryModalOpen}
        onClose={() => setIsStationaryModalOpen(false)}
        images={stationaryItems}
        startIndex={selectedStationaryIndex}
      />

      <StationaryCarouselModal
        isOpen={isSecondBrandModalOpen}
        onClose={() => setIsSecondBrandModalOpen(false)}
        images={secondBrandItems}
        startIndex={selectedSecondBrandIndex}
      />

      <Footer />
    </div>
  );
}
