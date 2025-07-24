"use client"
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { OurSolution } from '@/components/OurSol';
interface SolutionCard {
    image: string;
    title: string;
    description: string;
  }
export default function InsightsPage() {
  const solutions: SolutionCard[] = [
    {
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=600&auto=format',
      title: 'Brand Identity & Design',
      description: 'Shape how your brand is seen, understood, and remembered.',
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format',
      title: 'Performance Marketing',
      description: 'Build high-performing digital foundations that convert and rank.',
    },
    {
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=600&auto=format',
      title: 'Content Creation & Prod.',
      description: 'Tell stories that connect, educate, and resonate with your audience.',
    },
    {
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format',
      title: 'Social Media Management',
      description: 'Show up consistently where your audience spends their time.',
    },
    {
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=600&auto=format',
      title: 'Website Development & SEO',
      description: 'Build high-performing digital foundations that convert and rank.',
    },
    {
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format',
      title: 'Video and Animation',
      description: 'Build high-performing digital foundations that convert and rank.',
    },
  ];

    // Array of statistics for the counter section
    const stats = [
      { label: "Brands Transformed", value: 105 },
      { label: "Industries Served", value: 15 },
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
      <div className="w-full h-[50vh] sm:h-[50vh] md:h-[60vh] xxl:h-[70vh] relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 xxl:px-8 text-center">
          <h1
            className="font-poppins font-bold text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xxl:text-7xl leading-tight md:leading-normal xxl:leading-relaxed"
          >
            About Us
          </h1>
        </div>
        <Image
          src="/jivobn1.svg"
          alt="Jivo Hero"
          width={1000}
          height={100}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Founder Section - Desktop */}
      <div className="w-full py-8 sm:py-12 md:py-16 hidden md:flex flex-row items-start max-w-[90%] mx-auto">
        <div className="w-2/3 p-4 sm:p-5 flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-black">Aakanksha Chugh</h2>
          <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-black">Founder</p>
          
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-black text-justify">
            I am Aakanksha Chugh, Founder of JIVO Solutions <span>(Formerly &apos;Zeminik Solutions&apos;)</span>
          </p>
          
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-black text-justify">
            With over three years in the digital marketing industry, I&apos;ve led brand strategy and execution for more than 105+ businesses across hospitality, wellness, education, luxury, lifestyle and more. My academic background in Accounting & Finance from the University of London has given me a strong foundation in business thinking, which I bring into every creative decision and strategic framework we build at JIVO.
          </p>
          
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-black text-justify">
            What started as a passion for helping brands communicate better has evolved into a purpose driven company focused on visibility as a growth driver. we&apos;ve worked with clients across India, the UAE, London, Australia and more, delivering digital solutions that are thoughtful, tailored and results oriented.
          </p>
          
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-black text-justify">
            I built JIVO to help ambitious brands take control of how they&apos;re seen because if what you&apos;ve built matters, the world should experience it that way.
          </p>
          
          <p className="text-xs sm:text-sm italic mb-4 text-black text-justify">
            &quot;I&apos;ve seen too many great brands stay invisible for the wrong reasons. At JIVO, we exist to make sure that never happens.&quot;
          </p>
          

        </div>
        
        <div className="w-1/3 flex justify-center items-center">
          <div className="relative w-full h-full min-h-[500px] sm:min-h-[600px]">
            <Image
              src="/akanksha.jpeg"
              alt="Founder"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Founder Section - Mobile */}
      <div className="w-full py-8 sm:py-12 flex md:hidden flex-col items-center px-4 sm:px-6 max-w-[95%] mx-auto">
        <div className="relative w-56 sm:w-64 h-72 sm:h-80 mb-6 sm:mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/akanksha.jpeg"
            alt="Founder"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-black">Aakanksha Chugh</h2>
          <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-black">Founder</p>
          
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-black text-justify">
            I Am Aakanksha Chugh, Founder Of JIVO Solutions <span>(Formerly &apos;Zeminik Solutions&apos;)</span>
          </p>
          
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-black text-justify">
            With over three years in the digital marketing industry, I&apos;ve led brand strategy and execution for more than 50 businesses across hospitality, wellness, education, luxury, lifestyle and more. My academic background in Accounting And Finance from the University of London has given me a strong foundation in business thinking, which i bring into every creative decision and strategic framework we build at JIVO
          </p>
          
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-black text-justify">
            What started as a passion for helping brands communicate better has evolved into a purpose driven company focused on visibility as a growth driver. we&apos;ve worked with clients across India, the UAE, London, Australia and more, delivering digital solutions that are thoughtful, tailored and results oriented.
          </p>
          
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-black text-justify">
            I built JIVO to help ambitious brands take control of how they&apos;re seen because if what you&apos;ve built matters, the world should experience it that way.
          </p>
          
          <p className="text-xs sm:text-sm italic mb-4 text-black text-justify">
            &quot;I&apos;ve seen too many great brands stay invisible for the wrong reasons. At JIVO, we exist to make sure that never happens.&quot;
          </p>
        </div>
      </div>

      <div ref={statsRef} className="flex flex-wrap justify-center max-w-full p-6 sm:p-8 md:p-12 bg-[#ECECEC]">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg w-full sm:w-[200px] md:w-[220px] m-2 text-center">
            <p className="text-xs sm:text-sm text-black mb-2 sm:mb-3">{stat.label}</p>
            <p className="text-[#0A5C35] text-3xl sm:text-4xl md:text-5xl font-bold transition-all duration-300">
              <span className="inline-block">
                {counters[index]}
              </span>
              {stat.label === "Client Retention Rate" ? "%" : "+"}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full py-8 sm:py-12 md:py-16 flex flex-col items-center justify-center">
        <div className="w-full px-4 sm:px-6 md:px-12 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-black">The Meaning Behind JIVO</h2>
          
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-black mt-4 sm:mt-5">
          JIVO is derived from the Sanskrit word <b>'Jeevan'</b>, which means <b>'Life'</b>. 
          </p>
          
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-black">
            At JIVO, we believe digital presence is life for any brand. In a world where online visibility determines credibility, your first impression is almost always digital. 
            Without strong visibility, even great brands get overlooked.
          </p>
          
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-black font-bold">
            JIVO was created to change that.
          </p>
          
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-black">
            We bring life to your business through strategic, high-impact digital solutions designed to make you seen, remembered, and trusted.
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="w-full bg-[#0A5C35] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Who We Are?</h2>
          
          <p className="mb-6 sm:mb-8 text-xs sm:text-sm">
            JIVO solutions is a digital solutions company committed to helping brands become visible, relevant, and trusted in the digital world. we build end-to-end digital ecosystems tailored to each brand's vision, combining strategy, design, content, and performance to create a presence that drives growth.
          </p>

          <p className="mb-6 sm:mb-8 text-xs sm:text-sm">
            With over three years of hands-on experience and a portfolio of 105+ brands across hospitality, education, wellness, healthcare, lifestyle, and luxury and more, we understand how to translate business objectives into digital visibility that delivers results. from emerging startups to global businesses, our clients trust us to translate their business goals into high-performing digital ecosystems.
          </p>

          <p className="mb-6 sm:mb-8 text-xs sm:text-sm">
            Our vision is to make digital visibility a strategic advantage, not just a byproduct of being online.
          </p>

          <p className="mb-6 sm:mb-8 text-xs sm:text-sm">
            We bring together <b>Branding</b>, <b>Website Development</b>, <b>SEO</b>, <b>Content Marketing</b>, <b>Social Media Management</b>, and <b>Performance Marketing</b> into cohesive digital strategies that are built for long-term growth.
          </p>

          <p className="mb-4 text-xs sm:text-sm">
            At JIVO, we build presence with purpose.
          </p>

          <p className="italic text-xs sm:text-sm">
            | because being online isn't enough anymore, being visible in the right way is everything.
          </p>
        </div>
      </div>
      <div className="w-full mx-auto px-4 sm:px-6">
        <OurSolution />
      </div>
      <Footer />
  </div>
);
}
