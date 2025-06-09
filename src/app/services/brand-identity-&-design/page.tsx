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

  const brandLogos = [
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2F1%20(2).jpg?alt=media&token=f15b1d7f-a65f-463b-b160-81f17669ac6e",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FArtboard%201%20copy%202%403x.png?alt=media&token=4a235b9f-0acd-44a1-991f-9ea7c611b6df",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FJai%20Jalaram-PNG.png?alt=media&token=d34b7878-dd16-4bb6-882a-2661321555a3",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FLogo%207-01.png?alt=media&token=54d57f98-9aab-469b-bff3-4629e3f6ae78",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FWhatsApp%20Image%202025-03-25%20at%2015.38.36.jpeg?alt=media&token=24031bb6-197c-452d-8fe9-27e472168b25",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Flong.jpg?alt=media&token=39eea10c-1d0a-451b-8f65-67a34d28923e",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Famar%20file.png?alt=media&token=f924bdd7-bcf5-4f22-a859-446acf81ed51",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FUDAWAT.jpg?alt=media&token=e5279930-f976-4ebf-975f-419c5d177c46",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Fvida.png?alt=media&token=c2c6423e-a93e-4f15-8309-49d15015f500"
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

      {/* Client Logos Section */}
      <div className="px-48 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">Logo Designing & Branding</h2>
          <p className="text-gray-600 mb-8">
            Trusted by leading brands across industries
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12 max-w-5xl mx-auto">
          {brandLogos.map((logo: string, index: number) => (
            <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <Image
                src={logo}
                alt={`Brand Logo ${index + 1}`}
                width={180}
                height={180}
                className="object-contain w-[180px] h-[180px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Event & Print Design Section */}
      <div className="px-48 py-16 bg-[#f9f9f9]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Event & Print Design</h2>
          <p className="text-gray-600">
            Explore our work in print collateral — from letterheads and newspapers to standees and bill designs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe01.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
            "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe02.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
            "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe03.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
            "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe04.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
            "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe05.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
            "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe06.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
            "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe07.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
            "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe08.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
            // "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe14.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a",
            // "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/b%26iservice%2Fe15.jpg?alt=media&token=c80bf9c0-2183-4219-8630-12a76b198c8a"
          ].map((url, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300 flex items-center justify-center">
              <Image
                src={url}
                alt={`Event & Print Design ${idx + 1}`}
                width={240}
                height={240}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
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
