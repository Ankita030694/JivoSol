"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

// Add brochures data
const brochures = [
  {
    title: "WitWise Brochure",
    file: "/brochures/witwise-brochure.pdf",
    thumbnail: "/brochures/thumbnails/witwise-thumbnail.png"
  },
  {
    title: "Santhosh Sir Portfolio",
    file: "/brochures/santhosh-portfolio.pdf",
    thumbnail: "/brochures/thumbnails/santhosh-thumbnail.png"
  },
  {
    title: "Nidhi Chugh Portfolio",
    file: "/brochures/nidhi-portfolio.pdf",
    thumbnail: "/brochures/thumbnails/nidhi-thumbnail.png"
  },
  {
    title: "Krishnaveni Vastu",
    file: "/brochures/krishnaveni-vastu.pdf",
    thumbnail: "/brochures/thumbnails/krishnaveni-thumbnail.png"
  },
  {
    title: "CS Spine Brochure",
    file: "/brochures/cs-spine-brochure.pdf",
    thumbnail: "/brochures/thumbnails/cs-spine-thumbnail.png"
  },
  {
    title: "Amar Portfolio",
    file: "/brochures/amar-portfolio.pdf",
    thumbnail: "/brochures/thumbnails/amar-thumbnail.png"
  },
  {
    title: "AB Portfolio",
    file: "/brochures/ab-portfolio.pdf",
    thumbnail: "/brochures/thumbnails/ab-thumbnail.png"
  }
];

export default function InsightsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedBrochure, setSelectedBrochure] = useState<string | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventImages.length) % eventImages.length);
  };

  const brandLogos = [
    "/clientlogo/client1.jpg",
    "/clientlogo/client2.png",
    "/clientlogo/client3.png",
    "/clientlogo/client4.jpg",
    "/clientlogo/client5.jpg",
    "/clientlogo/client6.png",
    "/clientlogo/client7.png",
    "/clientlogo/client8.jpg",
    "/clientlogo/client9.jpg"
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
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            Shape How Your Brand Is Seen, Understood, And Remembered
          </h2>
          <p className="text-sm md:text-md text-gray-600 mb-6">
          Your brand identity is not just how you look, it's how you're remembered. At JIVO, we build sharp, strategic visual systems that define your presence and make it impossible to ignore.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-48 py-8 md:py-16 bg-[#ECECEC]">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">What We Offer</h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 text-black">
            We offer end-to-end branding services, from concept to final delivery — across <br className="hidden md:block" /> digital, print, and real-world experiences.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-black">We Manage And Optimize Paid Marketing Across:</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-4 md:px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group text-sm md:text-base">
              <span className="relative z-10 group-hover:text-white transition-colors">Logo designing & branding</span>
              <div className="absolute top-0 left-0 h-full w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
            <button className="px-4 md:px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group text-sm md:text-base">
              <span className="relative z-10 group-hover:text-white transition-colors">Event & print design</span>
              <div className="absolute top-0 left-0 h-full w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
            <button className="px-4 md:px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group text-sm md:text-base">
              <span className="relative z-10 group-hover:text-white transition-colors">Brand Stationery Kit</span>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((num) => (
              <Image
                key={num}
                src={`/jabout${num}.svg`}
                alt={`Brand Example ${num}`}
                width={300}
                height={300}
                className="w-full aspect-square object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos Section */}
      <div className="px-4 md:px-48 py-8 md:py-16 bg-white">
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
      <div className="px-4 md:px-48 py-8 md:py-16 bg-[#f9f9f9]">
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

      <div className="flex justify-center items-center py-8 md:py-16 w-full px-10">
            <Image src="/process2.svg" alt="Jivo Hero" width={1920} height={100} className="w-screen object-cover" priority />
        </div>

      <div className="flex justify-center items-center py-8 md:py-16 w-full">
            <Image src="/result.svg" alt="Jivo Hero" width={1920} height={100} className="w-screen object-cover" priority />
        </div>

      {/* Brochures Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
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

      {/* FAQ Section */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-[#0a5c35]/5 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 font-poppins text-[#0a5c35]">
              Frequently Asked Questions
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

      <Footer />
    </div>
  );
}
