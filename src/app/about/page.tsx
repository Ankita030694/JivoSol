"use client"
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
interface SolutionCard {
    image: string;
    title: string;
    description: string;
  }
export default function InsightsPage() {
    const solutions: SolutionCard[] = [
        {
          image: '/jabout1.svg',
          title: 'Brand Identity & Design',
          description: 'Shape how your brand is seen, understood, and remembered.',
        },
        {
          image: '/jabout2.svg',
          title: 'Website Development & SEO',
          description: 'Build high-performing digital foundations that convert and rank.',
        },
        {
          image: '/jabout3.svg',
          title: 'Content Creation & Prod.',
          description: 'Tell stories that connect, educate, and resonate with your audience.',
        },
        {
          image: '/jabout4.svg',
          title: 'Social Media Management',
          description: 'Show up consistently where your audience spends their time.',
        },
        {
          image: '/jabout5.svg',
          title: 'Performance Marketing',
          description: 'Drive targeted traffic and conversions through strategic campaigns.',
        },
        {
          image: '/jabout2.svg',
          title: 'Analytics & Reporting',
          description: 'Gain insights from data to refine strategies and maximize results.',
        },
      ];

    // Array of statistics for the counter section
    const stats = [
      { label: "Brands Transformed", value: 105 },
      { label: "Clients Globe", value: 200 },
      { label: "Projects Completed", value: 350 },
      { label: "Client Retention Rate", value: 95 }
    ];
  
    const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
    const statsRef = useRef<HTMLDivElement>(null);
    const animationTriggered = useRef(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationTriggered.current) {
          animationTriggered.current = true;
          
          stats.forEach((stat, index) => {
            let startValue = 0;
            const endValue = stat.value;
            const duration = 1500; // animation duration in milliseconds
            const stepTime = Math.abs(Math.floor(duration / endValue));
            
            const counter = setInterval(() => {
              startValue += 1;
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = startValue;
                return newCounters;
              });
              
              if (startValue >= endValue) {
                clearInterval(counter);
              }
            }, stepTime);
          });
        }
      }, { threshold: 0.5 });
      
      if (statsRef.current) {
        observer.observe(statsRef.current);
      }
      
      return () => {
        if (statsRef.current) {
          observer.unobserve(statsRef.current);
        }
      };
    }, []);

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
            About Us
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

      {/* Founder Section - Desktop */}
      <div className="w-full py-16 hidden md:flex flex-row items-center max-w-[90%] mx-auto">
        <div className="w-1/2 px-16">
          <h2 className="text-4xl font-bold mb-2 text-black">Aakanksha Chugh</h2>
          <p className="text-xl mb-6 text-black">Founder</p>
          
          <p className="text-sm mb-6 text-black">
            I Am Aakanksha Chugh, Founder Of JIVO Solutions <span className="italic">(formerly &apos;zeminik solutions&apos;)</span>
          </p>
          
          <p className="text-sm mb-6 text-black">
            With over three years in the digital marketing industry, I&apos;ve led brand strategy and execution for more than 50 businesses across hospitality, wellness, education, luxury, lifestyle and more. My academic background in Accounting And Finance from the University of London has given me a strong foundation in business thinking, which i bring into every creative decision and strategic framework we build at JIVO
          </p>
          
          <p className="text-sm mb-6 text-black">
            What started as a passion for helping brands communicate better has evolved into a purpose driven company focused on visibility as a growth driver. we&apos;ve worked with clients across India, the UAE, London, Australia and more, delivering digital solutions that are thoughtful, tailored and results oriented.
          </p>
          
          <p className="text-sm mb-6 text-black">
            I built JIVO to help ambitious brands take control of how they&apos;re seen because if what you&apos;ve built matters, the world should experience it that way.
          </p>
          
          <p className="text-sm italic mb-4 text-black">
            &quot;I&apos;ve seen too many great brands stay invisible for the wrong reasons. At JIVO, we exist to make sure that never happens.&quot;
          </p>
          
          <p className="text-sm text-black">
            - Aakanksha Chugh
          </p>
        </div>
        
        <div className="relative w-1/2 h-[650px]">
          <div className="relative w-full h-[90%]">
            <Image
              src="/image3.png"
              alt="Founder"
              fill
              className="object-cover rounded-lg rounded-r-none"
              style={{
                clipPath: 'inset(0 0 0 0 round 16px 0 0 16px)'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Founder Section - Mobile */}
      <div className="w-full py-8 flex md:hidden flex-col items-center px-8 max-w-[95%] mx-auto">
        <div className="relative w-full h-[400px] mb-6">
          <Image
            src="/akankshadidi.jpg"
            alt="Founder"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2 text-black">Aakanksha Chugh</h2>
          <p className="text-xl mb-6 text-black">Founder</p>
          
          <p className="text-sm mb-6 text-black">
            I Am Aakanksha Chugh, Founder Of JIVO Solutions <span className="italic">(formerly &apos;zeminik solutions&apos;)</span>
          </p>
          
          <p className="text-sm mb-6 text-black">
            With over three years in the digital marketing industry, I&apos;ve led brand strategy and execution for more than 50 businesses across hospitality, wellness, education, luxury, lifestyle and more. My academic background in Accounting And Finance from the University of London has given me a strong foundation in business thinking, which i bring into every creative decision and strategic framework we build at JIVO
          </p>
          
          <p className="text-sm mb-6 text-black">
            What started as a passion for helping brands communicate better has evolved into a purpose driven company focused on visibility as a growth driver. we&apos;ve worked with clients across India, the UAE, London, Australia and more, delivering digital solutions that are thoughtful, tailored and results oriented.
          </p>
          
          <p className="text-sm mb-6 text-black">
            I built JIVO to help ambitious brands take control of how they&apos;re seen because if what you&apos;ve built matters, the world should experience it that way.
          </p>
          
          <p className="text-sm italic mb-4 text-black">
            &quot;I&apos;ve seen too many great brands stay invisible for the wrong reasons. At JIVO, we exist to make sure that never happens.&quot;
          </p>
          
          <p className="text-sm text-black">
            - Aakanksha Chugh
          </p>
        </div>
      </div>

      <div ref={statsRef} className="flex flex-wrap justify-between max-w-full p-12 bg-[#ECECEC]">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg w-[220px] m-2">
              <p className="text-sm text-black mb-3">{stat.label}</p>
              <p className="text-[#0A5C35] text-5xl font-bold">
                {counters[index]}
                {stat.label === "Client Retention Rate" ? "%" : "+"}
              </p>
            </div>
          ))}
        </div>

      <div className="w-full py-16 flex flex-col items-center justify-center">
        <div className="w-full px-6 md:px-12 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2 text-black">The Meaning Behind JIVO</h2>
          
          <p className="text-sm mb-6 text-black mt-5">
          JIVO is derived from the Sanskrit word <b>'Jeevan'</b>, which means <b>'Life'</b>. 
          </p>
          
          <p className="text-sm mb-6 text-black">
            At JIVO, we believe digital presence is life for any brand. In a world where online visibility determines credibility, your first impression is almost always digital. 
            Without strong visibility, even great brands get overlooked.
          </p>
          
          <p className="text-sm mb-6 text-black font-bold">
            JIVO was created to change that.
          </p>
          
          <p className="text-sm mb-6 text-black">
            We bring life to your business through strategic, high-impact digital solutions designed to make you seen, remembered, and trusted.
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="w-full bg-[#0A5C35] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Who We Are?</h2>
          
          <p className="mb-8">
            JIVO solutions is a digital solutions company committed to helping brands become visible, relevant, and trusted in the digital world. we build end-to-end digital ecosystems tailored to each brand's vision, combining strategy, design, content, and performance to create a presence that drives growth.
          </p>

          <p className="mb-8">
            With over three years of hands-on experience and a portfolio of 105+ brands across hospitality, education, wellness, healthcare, lifestyle, and luxury and more, we understand how to translate business objectives into digital visibility that delivers results. from emerging startups to global businesses, our clients trust us to translate their business goals into high-performing digital ecosystems.
          </p>

          <p className="mb-8">
            Our vision is to make digital visibility a strategic advantage, not just a byproduct of being online.
          </p>

          <p className="mb-8">
            We bring together <b>Branding</b> , <b>Website Development</b> , <b>SEO</b> , <b>Content Marketing</b> , <b>Social Media Management</b> , and <b>Performance Marketing</b> into cohesive digital strategies that are built for long-term growth.
          </p>

          <p className="mb-4">
            At JIVO, we build presence with purpose.
          </p>

          <p className="italic">
            | because being online isn't enough anymore, being visible in the right way is everything.
          </p>
        </div>
      </div>
      <section className="bg-[#ffffff] py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-black">
          Services
        </h2>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg -ml-5"
          onClick={() => {
            const container = document.getElementById('services-container');
            if (container) container.scrollLeft -= container.offsetWidth * 0.75;
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#0A5C35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Services Container */}
        <div 
          id="services-container"
          className="flex gap-6 overflow-x-auto pb-6 snap-x scrollbar-hide scroll-smooth"
        >
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="min-w-[calc(25%-20px)] w-[calc(25%-20px)] h-[500px] bg-white rounded-lg overflow-hidden shadow-lg flex-shrink-0 flex flex-col snap-start"
            >
              <div className="relative h-72">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-md font-bold mb-2 text-black whitespace-nowrap overflow-hidden text-ellipsis">{solution.title}</h3>
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                </div>
                <button className="flex items-center text-black hover:text-gray-700">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right Arrow */}
        <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg -mr-5"
          onClick={() => {
            const container = document.getElementById('services-container');
            if (container) container.scrollLeft += container.offsetWidth * 0.75;
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="#0A5C35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Scroll Indicator Text */}
        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-500 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Scroll for more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </p>
        </div>
      </div>
    </div>
  </section>
      <Footer />
  </div>
);
}
