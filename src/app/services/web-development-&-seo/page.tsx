"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function InsightsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of websites do you build?",
      answer: "We build custom websites for service-based businesses, startups, e-commerce brands, and personal portfolios. Whether you need a simple landing page or a full multi-page site, we make sure it's fast, mobile-friendly, and built to reflect your brand."
    },
    {
      question: "Which platforms do you use for development?",
      answer: "We work with WordPress, Webflow, Shopify, HTML/CSS, and React. We'll recommend the best platform for your project based on your goals, content needs, and how much control or flexibility you want."
    },
    {
      question: "Will my website be SEO-friendly?",
      answer: "Yes. All our websites follow essential SEO best practices. This includes mobile optimization, fast load speed, keyword-friendly page structure, meta tags, alt text, and clean URLs so your site is ready to be found by search engines from day one."
    },
    {
      question: "Do you offer SEO services beyond website setup?",
      answer: "Yes, we do. In addition to SEO during development, we offer ongoing services like keyword research, blog content planning, SEO audits, performance tracking, and regular optimization to help you improve rankings over time and stay ahead of competitors."
    },
    {
      question: "Can you redesign my current website?",
      answer: "Absolutely. If your current site looks outdated, loads slowly, or isn't performing well, we can redesign it for a better user experience, stronger SEO performance, and a more modern, brand-aligned design, without losing your content or SEO history."
    },
    {
      question: "How long does it take to launch a website?",
      answer: "Most websites take 4 - 6 weeks to complete. More complex sites, like e-commerce stores or custom builds, may take 6 - 10 weeks. We'll share a clear project timeline at the start so you know what to expect at each stage."
    },
    {
      question: "What makes JIVO websites different from others?",
      answer: "At JIVO, we don't just build websites that look good, we build websites that work. Every project combines clean, modern design with a strong strategy. That means your site is built to be fast, easy to use, SEO-ready, and aligned with your business goals. The result? A digital presence that doesn't just exist, it performs."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
            Web Development & SEO
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

      {/* Content Section */}
      <div className="bg-[#ECECEC] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Your Website Is Your Brand's <br /> Digital Home
          </h2>
          <p className="text-md mb-12 text-black">
            At JIVO, we design and develop fast, functional, and search-optimized websites that
            are easy to navigate, easy to find, and built to convert.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#006B3F]">We Build On</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['WordPress', 'Webflow', 'Shopify', 'HTML/CSS', 'React'].map((tech) => (
                <button
                  key={tech}
                  className="px-6 py-2 rounded-full bg-white text-black 
                    relative overflow-hidden group transition-colors duration-300
                    hover:text-white"
                >
                  <span className="relative z-10">{tech}</span>
                  <div className="absolute inset-0 bg-[#006B3F] transform -translate-x-full 
                    group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Dr. Rajeev Agarwal",
                url: "https://drrajeevagarwal.co.in/",
                description: "Professional website for a medical practitioner",
                image: "/web1.png"
              },
              {
                title: "Nidhi Chugh",
                url: "https://www.nidhichugh.in/",
                description: "Personal portfolio website",
                image: "/web2.png"
              },
              {
                title: "Ergophy Physiotherapy",
                url: "https://physiotherapy.ergophy.com/",
                description: "Healthcare service website",
                image: "/web3.png"
              },
              {
                title: "Angelopedia",
                url: "https://www.angelopedia.com/",
                description: "Comprehensive online platform",
                image: "/web4.png"
              }
            ].map((site, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Image
                    src={site.image}
                    alt={site.title}
                    width={400}
                    height={225}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#006B3F]">{site.title}</h3>
                <p className="text-gray-600 mb-4">{site.description}</p>
                <Link 
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006B3F] hover:text-[#004d2e] font-medium"
                >
                  Visit Website →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-16 w-full px-48">
        <Image src="/specialize.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
      </div>

      <div className="flex justify-center items-center py-16 w-full">
        <Image src="/result.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a5c35]/5 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 font-poppins text-[#0a5c35]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our web development and SEO services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <button
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 flex justify-between items-center group
                    ${openFaqIndex === index 
                      ? 'bg-[#0a5c35] text-white shadow-lg' 
                      : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                    }`}
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`font-semibold text-lg transition-colors duration-300 ${
                    openFaqIndex === index ? 'text-white' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`text-2xl transition-colors duration-300 ${
                    openFaqIndex === index ? 'text-white' : 'text-[#0a5c35]'
                  }`}>
                    {openFaqIndex === index ? '↑' : '↓'}
                  </span>
                </button>
                
                {openFaqIndex === index && (
                  <div className="p-6 bg-white mt-2 rounded-xl shadow-md border border-[#0a5c35]/10">
                    <p className="text-gray-700 leading-relaxed">
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
