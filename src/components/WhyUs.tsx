"use client"
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

// Client logos array from local public folder
const clientLogos = [
    "/clientlogo/1.jpg",
    "/clientlogo/2.jpg",
    "/clientlogo/3.jpg",
    "/clientlogo/4.jpg",
    "/clientlogo/5.jpg",
    "/clientlogo/6.jpg",
    "/clientlogo/7.jpg",
    "/clientlogo/8.jpg",
    "/clientlogo/9.jpg",
    "/clientlogo/10.jpg",
    "/clientlogo/11.jpg",
    "/clientlogo/12.jpg",
    "/clientlogo/13.jpg",
    "/clientlogo/14.jpg",
    "/clientlogo/15.jpg",
    "/clientlogo/16.jpg",
    "/clientlogo/17.jpg",
    "/clientlogo/18.jpg",
    "/clientlogo/19.jpg",
    "/clientlogo/20.jpg",
    "/clientlogo/21.jpg",
    "/clientlogo/22.jpg",
    "/clientlogo/23.jpg",
    "/clientlogo/24.jpg",
    "/clientlogo/25.jpg",
    "/clientlogo/26.jpg",
    "/clientlogo/27.jpg",
    "/clientlogo/28.jpg",
    "/clientlogo/29.jpg",
    "/clientlogo/30.jpg",
    "/clientlogo/32.jpg",
    "/clientlogo/33.jpg",
    "/clientlogo/34.jpg",
    "/clientlogo/35.jpg",
    "/clientlogo/36.jpg"
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
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  
  const staggerContainer = {
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
        className="w-full bg-[#ECECEC] py-8"
      >
        <div className="container mx-auto px-4">
          <div 
            ref={headingRef}
            className="text-center mb-8"
          >
            <h2 
              className="text-4xl font-bold text-black mb-4"
            >
              Why brands work with us
            </h2>
            <div 
              className="text-black max-w-3xl mx-auto"
            >
              <p className="font-bold">We are a strategy-first digital partner focused on long-term impact.</p>
              <p>Our clients choose us for our clarity of thought, execution excellence, and commitment to lasting results.</p>
            </div>
            <Link href="/ourwork">
            <button 
              className="bg-[#0A5C35] text-white px-6 py-2 rounded-full mt-6 flex items-center mx-auto"
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
            className="flex flex-wrap justify-between max-w-full px-4"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg w-[220px] m-2"
              >
                <p className="text-sm text-black mb-3">{stat.label}</p>
                <p 
                  className="text-[#0A5C35] text-5xl font-bold"
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
        className="bg-white py-8 overflow-hidden"
      >
        <div 
          className="text-center mb-8"
        >
          <p 
            className="text-[#0A5C35] text-lg"
          >
            Our Clients
          </p>
          <h2 
            className="text-4xl font-bold text-black"
          >
            Trusted by businesses
          </h2>
        </div>
        
        <div 
          className="relative w-full overflow-hidden"
        >
         <Marquee speed={100} gradient={false} direction="left">
            {clientLogos.map((url, idx) => (
              <Image key={idx} src={url} alt="Client Logo" width={120} height={80} className="inline-block mx-4 object-contain" />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;