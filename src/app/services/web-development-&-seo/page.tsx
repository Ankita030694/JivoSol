"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import CTAComponent from "../CTAComponent";

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

      {/* Hero Section */}
      <div className="bg-[#ECECEC] py-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Build a website that performs and gets found
          </h2>
          <p className="mb-4 text-black max-w-4xl mx-auto">
            Your website is your brand's digital home. At JIVO Solutions, we design and develop websites that are fast, mobile-responsive, easy to navigate, and built to convert. Every website is backed by strong SEO foundations so it's discoverable too.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-black">Platforms we build on</h3>
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

      {/* What We Offer Section */}
      <div className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">What We Offer</h2>
          {/* First row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "Web Design & Development",
                description: "From layout to launch, we build user-friendly websites that reflect your brand and are optimized for performance, speed, and scalability."
              },
              {
                title: "Front-End & Back-End Development",
                description: "We use the latest technologies like HTML, CSS, JavaScript, React, and PHP to build smooth, secure, and scalable websites."
              },
              {
                title: "Responsive Design",
                description: "Every site we build is mobile-optimized to ensure your brand looks perfect on every screen, from desktop to smartphone."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-[#006B3F]">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          {/* Second row: 2 cards centered */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[
              {
                title: "eCommerce Development",
                description: "We create custom online stores on Shopify, WooCommerce, or custom platforms with smooth UX, secure payments, and easy inventory management."
              },
              {
                title: "SEO (Search Engine Optimization)",
                description: "We optimize your website structure, content, and code for better visibility on search engines like Google, helping you rank higher and get found faster."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow min-w-[260px] flex-1">
                <h3 className="text-xl font-semibold mb-4 text-[#006B3F]">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Is SEO Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#f5f7fa] to-[#e2eafc]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl font-bold text-center mb-12 text-black">
              What Is SEO?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              SEO (Search Engine Optimization) is the art and science of enhancing your website to increase its visibility on search engines like Google.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-stretch md:justify-center gap-8">
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-[#006B3F] mb-4 text-center">Why SEO Matters</h3>
                <ul className="space-y-4">
                  {[
                    "Rank higher in search results",
                    "Attract more organic traffic",
                    "Target the right audience with the right keywords",
                    "Improve user experience and conversion rates"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-800 text-base md:text-lg">
                      <span className="flex items-center justify-center w-6 h-6 bg-[#0a5c35] rounded-full mr-3">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="bg-[#006B3F] rounded-xl shadow-lg p-8 h-full flex flex-col justify-center">
                <h4 className="text-xl font-semibold text-white mb-4 text-center">Our Approach</h4>
                <p className="text-white text-base md:text-lg leading-relaxed mb-4 text-center">
                  At JIVO, we combine on-page and off-page SEO strategies to elevate your digital presence and drive real business growth.
                </p>
                <div className="flex justify-center">
                  <svg className="w-14 h-14 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="20" stroke="#fff" strokeWidth="3" fill="none"/>
                    <path d="M24 14v10l7 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl font-bold text-center mb-12 text-black">
              Our SEO Services
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              We offer a comprehensive suite of SEO solutions to help your business grow online.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* On-Page SEO */}
            <div className="bg-gradient-to-br from-[#e2eafc] to-[#f5f7fa] rounded-xl shadow-lg p-8 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#006B3F] mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5 5 5M12 4.5V15" />
                  </svg>
                </span>
                <h3 className="text-2xl font-bold text-[#006B3F]">On-Page SEO Services</h3>
              </div>
              <p className="text-gray-700 mb-6 text-base md:text-lg">
                We optimize every element within your website to improve its search engine ranking and user experience.
              </p>
              <ul className="space-y-4">
                {[
                  "Keyword research & mapping",
                  "Title tags & meta descriptions",
                  "Header tags (H1, H2, H3)",
                  "Image optimization (alt text, file names)",
                  "Internal linking strategy",
                  "URL structure optimization",
                  "Page speed improvements",
                  "Schema markup integration",
                  "Mobile-friendliness & Core Web Vitals"
                ].map((service, index) => (
                  <li key={index} className="flex items-center text-gray-800">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#0a5c35] rounded-full mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Off-Page SEO */}
            <div className="bg-gradient-to-br from-[#f5f7fa] to-[#e2eafc] rounded-xl shadow-lg p-8 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0a5c35] mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </span>
                <h3 className="text-2xl font-bold text-[#0a5c35]">Off-Page SEO Services</h3>
              </div>
              <p className="text-gray-700 mb-6 text-base md:text-lg">
                We build your website's credibility and authority through strategic activities beyond your site.
              </p>
              <ul className="space-y-4">
                {[
                  "Backlink building from high-authority websites",
                  "Local SEO (Google Business Profile optimization)",
                  "Guest posting & digital PR",
                  "Directory submissions",
                  "Competitor backlink analysis",
                  "Social signals and content distribution",
                  "Brand mentions & reputation management"
                ].map((service, index) => (
                  <li key={index} className="flex items-center text-gray-800">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#006B3F] rounded-full mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* We Specialize Section */}
      <div className="flex justify-center items-center py-8 w-full px-48">
        <Image src="/specialize.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
      </div>

      {/* Process Section */}
      <div className="py-8 bg-[#ECECEC]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Web Development & SEO Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Discovery & Planning",
                description: "We start by understanding your business goals, target audience, and technical needs. This forms the foundation for your website strategy."
              },
              {
                step: "2",
                title: "Design & Wireframes",
                description: "Our UI/UX experts create user-friendly, visually compelling wireframes and mockups tailored to your brand."
              },
              {
                step: "3",
                title: "Development & Testing",
                description: "We build the website using clean code and test across devices and browsers for speed, security, and performance."
              },
              {
                step: "4",
                title: "SEO Integration",
                description: "We set up on-page SEO best practices and configure tools like Google Analytics, Search Console, and XML sitemaps."
              },
              {
                step: "5",
                title: "Launch & Optimization",
                description: "Once live, we monitor performance and continuously improve your SEO and user experience to keep your site competitive."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#006B3F] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-black">{process.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
        <div className="py-8 bg-white">
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

      {/* Results Section */}
      <div className="flex justify-center items-center w-full">
        <Image src="/result.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
      </div>

      {/* Why Choose JIVO Section */}
      <div className="py-8 bg-[#ECECEC]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Why Choose JIVO for Web Development & SEO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom-Built",
                description: "Every website is designed around your goals, your audience, and your brand personality."
              },
              {
                title: "Fast, Functional & Responsive",
                description: "We develop websites with lightweight code, responsive frameworks, and speed optimization techniques for fast load times across all devices."
              },
              {
                title: "SEO-Optimized From Day One",
                description: "Our websites follow best practices for technical SEO, including clean URL structures, schema markup, core web vitals optimization, XML sitemaps, and seamless integration with Google Search Console and GA4 so your site is built to rank."
              },
              {
                title: "End-to-End Expertise",
                description: "We handle everything from domain registration and SSL certificate setup to back-end configuration, CMS implementation (WordPress, Webflow, Shopify), and CDN setup (Cloudflare, AWS)."
              },
              {
                title: "One Point of Contact",
                description: "You'll work with a dedicated manager who oversees your project from start to finish, ensuring clear communication and smooth execution."
              },
              {
                title: "Built to Scale",
                description: "Our sites are made to grow with your business, easy to update, expand, and integrate with tools like CRMs, payment gateways, and marketing platforms."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-[#006B3F]">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTAComponent
        title="Ready to Build Your Digital Presence?"
        description="Let's discuss your project and create a website that drives results."
      />

      {/* FAQ Section */}
      <section className="py-8 bg-gradient-to-b from-[#0a5c35]/5 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 font-poppins text-[#0a5c35]">
              FAQs
            </h2>
            <p className="text-gray-700 text-sm max-w-2xl mx-auto">
              Find answers to common questions about our web development and SEO services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-3">
                <button
                  className={`w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group
                    ${openFaqIndex === index 
                      ? 'bg-[#0a5c35] text-white shadow-lg' 
                      : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                    }`}
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`font-semibold text-sm transition-colors duration-300 ${
                    openFaqIndex === index ? 'text-white' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`text-lg transition-colors duration-300 ${
                    openFaqIndex === index ? 'text-white' : 'text-[#0a5c35]'
                  }`}>
                    {openFaqIndex === index ? '↑' : '↓'}
                  </span>
                </button>
                
                {openFaqIndex === index && (
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
