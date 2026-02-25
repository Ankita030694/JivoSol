"use client"
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

// Client logos array from local public folder
const clientLogos = [
    "/clientlogos/1.jpeg",
    "/clientlogos/2.jpeg",
    "/clientlogos/3.jpeg",
    "/clientlogos/4.jpeg",
    "/clientlogos/5.jpeg",
    "/clientlogos/6.jpeg",
    "/clientlogos/7.jpeg",
    "/clientlogos/8.jpeg",
    "/clientlogos/9.jpeg",
    "/clientlogos/10.jpeg",
    "/clientlogos/11.jpeg",
    "/clientlogos/12.jpeg",
    "/clientlogos/13.jpeg",
    "/clientlogos/14.jpeg",
    "/clientlogos/15.jpeg",
    "/clientlogos/16.jpeg",
    "/clientlogos/17.jpeg",
    "/clientlogos/18.jpeg",
    "/clientlogos/19.jpeg",
    "/clientlogos/20.jpeg",
    "/clientlogos/21.jpeg",
    "/clientlogos/22.jpeg",
    "/clientlogos/23.jpeg",
    "/clientlogos/24.jpeg",
    "/clientlogos/25.jpeg",
    "/clientlogos/26.jpeg",
    "/clientlogos/27.jpeg",
    "/clientlogos/28.jpeg",
    "/clientlogos/29.jpeg",
    "/clientlogos/30.jpeg",
    "/clientlogos/31.jpeg",
    "/clientlogos/32.jpeg",
    "/clientlogos/33.jpeg",
    "/clientlogos/34.jpeg",
    "/clientlogos/35.jpeg"
];

export { clientLogos };

const WhyUs = () => {
  // Array of statistics with different values
  const stats = [
    { label: "Brands Transformed", value: 105 },
    { label: "Industries Served", value: 15 },
    { label: "Projects Completed", value: 350 },
    { label: "Client Retention Rate", value: 95 }
  ];
  
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);
  const animationTriggered = useRef(false);

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  // Use intersection observer for heading and description
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Use intersection observer for clients section
  

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
  }, [stats]);
  
  return (
    <div>
      <div 
        className="w-full bg-[#ECECEC] py-8 md:py-12 xxl:py-16"
      >
        <div className="container mx-auto px-4 xxl:px-8">
          <div 
            ref={headingRef}
            className="text-center mb-8 md:mb-12 xxl:mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl xxl:text-5xl font-bold text-black mb-4 xxl:mb-6 px-4 xxl:px-8"
            >
              Why brands work with us
            </h2>
            <div 
              className="text-black max-w-3xl xxl:max-w-4xl mx-auto px-4 xxl:px-8"
            >
              <p className="font-bold text-sm md:text-base xxl:text-lg">We are a strategy-first digital partner focused on long-term impact.</p>
              <p className="text-sm md:text-base xxl:text-lg mt-2">Our clients choose us for our clarity of thought, execution excellence, and commitment to lasting results.</p>
            </div>
            <Link href="/contact">
            <button 
              className="bg-[#0A5C35] text-white px-6 xxl:px-8 py-2 xxl:py-3 rounded-full xxl:rounded-2xl mt-6 xxl:mt-8 flex items-center mx-auto text-sm md:text-base xxl:text-lg"
            >
              Work With Us {" "}
              <span>
                →
              </span>
            </button>
            </Link>
          </div>

          <div 
            ref={statsRef} 
            className="flex flex-wrap justify-center gap-4 xxl:gap-6 max-w-full px-4 xxl:px-8"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-4 md:p-6 xxl:p-8 rounded-lg xxl:rounded-xl w-full sm:w-[200px] md:w-[220px] xxl:w-[260px] text-center"
              >
                <p className="text-xs md:text-sm xxl:text-base text-black mb-2 md:mb-3 xxl:mb-4">{stat.label}</p>
                <p 
                  className="text-[#0A5C35] text-3xl md:text-5xl xxl:text-6xl font-bold"
                >
                  {counters[index]}
                  {stat.label === "Client Retention Rate" ? "%" : "+"}
                  </p>
              </div>
            ))}
          </div>
          
          
        </div>
      </div>
      
      <div 
        className="bg-white py-8 md:py-12 xxl:py-16 overflow-hidden"
      >
        <div 
          className="text-center mb-8 xxl:mb-12 px-4 xxl:px-8"
        >
          <p 
            className="text-[#0A5C35] text-base md:text-lg xxl:text-xl"
          >
            Our Clients
          </p>
          <h2 
            className="text-3xl md:text-4xl xxl:text-5xl font-bold text-black"
          >
            Trusted by businesses
          </h2>
        </div>
        
        <div 
          className="relative w-full overflow-hidden"
        >
         <Marquee speed={100} gradient={false} direction="left">
            {clientLogos.map((url, idx) => (
              <Image 
                key={idx} 
                src={url} 
                alt="Client Logo" 
                fill={false}
                width={0}
                height={0}
                sizes="200px"
                quality={1000}
                unoptimized={true}
                className="inline-block mx-2 md:mx-4 xxl:mx-6 w-[60px] h-[60px] md:w-[100px] md:h-[100px] xxl:w-[120px] xxl:h-[120px] object-contain" 
                style={{
                  filter: 'none',
                  transform: 'translateZ(0)'
                }}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;