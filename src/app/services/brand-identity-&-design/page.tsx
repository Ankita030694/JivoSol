"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function InsightsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Brand Identity & Design
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
      
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Shape How Your Brand Is Seen, Understood, And Remembered
          </h2>
          <p className="text-md text-gray-600 mb-6">
          Your brand identity is not just how you look, it's how you're remembered. At JIVO, we build sharp, strategic visual systems that define your presence and make it impossible to ignore.
          </p>

        </div>
      </div>

      <div className="px-48 py-16 bg-[#ECECEC]">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">What We Offer</h2>
          <p className="text-gray-600 mb-8 text-black">
            We offer end-to-end branding services, from concept to final delivery — across <br /> digital, print, and real-world experiences.
          </p>
          
          <h3 className="text-2xl font-bold mb-6 text-black">We Manage And Optimize Paid Marketing Across:</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group">
              <span className="relative z-10 group-hover:text-white transition-colors">Logo designing & branding</span>
              <div className="absolute top-0 left-0 h-full w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
            <button className="px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group">
              <span className="relative z-10 group-hover:text-white transition-colors">Event & print design</span>
              <div className="absolute top-0 left-0 h-full w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
            <button className="px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group">
              <span className="relative z-10 group-hover:text-white transition-colors">Brand Stationery Kit</span>
              <div className="absolute top-0 left-0 h-full w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
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
                <span className="text-black text-sm text-start">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <div className="flex justify-center items-center py-16 w-full px-48">
            <Image src="/process2.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
        </div>

      <div className="flex justify-center items-center py-16 w-full">
            <Image src="/result.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
        </div>

      {/* FAQ Section */}
      <section className="py-12 bg-gradient-to-b from-[#0a5c35]/5 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 font-poppins text-[#0a5c35]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 text-sm max-w-2xl mx-auto">
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
