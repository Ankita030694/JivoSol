"use client"
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useEffect, useRef } from "react";

const WhyUs = () => {
  // Array of statistics with different values
  const stats = [
    { label: "Brands Transformed", value: 105 },
    { label: "Clients Globe", value: 200 },
    { label: "Projects Completed", value: 350 },
    { label: "Client Retention Rate", value: 95 }
  ];
  
  const [counters, setCounters] = useState(stats.map(() => 0));
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
  }, [stats]);
  
  return (
    <div>

    <div className="w-full bg-[#ECECEC] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black mb-4">Why Brands Work With Us</h2>
          <p className="text-black max-w-3xl mx-auto">
            At JIVO, we don't follow trends, we build strategies. our clients choose us because
            we think deeply, execute precisely, and care about long-term outcomes.
          </p>
          <button className="bg-[#0A5C35] text-white px-6 py-2 rounded-full mt-6 flex items-center mx-auto">
            Work With Us → 
          </button>
        </div>

        <div ref={statsRef} className="flex flex-wrap justify-between max-w-full px-4">
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
        <div className="relative mt-8">
          <Image
            src="/leaf.gif"
            alt="Leaf Animation"
            width={100}
            height={100}
            className="absolute -bottom-18 left-0 transform scale-x-[-1]"
          />
        </div>
      </div>
    </div>
     <div className="bg-white py-16 overflow-hidden">
     <div className="text-center mb-8">
       <p className="text-[#0A5C35] text-lg">Our Clients</p>
       <h2 className="text-4xl font-bold text-black">Trusted By Businesses</h2>
       <p className="text-black max-w-3xl mx-auto mt-4">
         At JIVO, we don't follow trends, we build strategies. our clients choose
         us because we think deeply, and care about long-term outcomes.
       </p>
     </div>
     
     <div className="relative w-full overflow-hidden max-w-6xl mx-auto">
       <Marquee 
         speed={100} 
         gradient={false} 
         direction="left"
       >
         <Image
           src="/clientslide.png"
           alt="Our Clients"
           width={1000}
           height={100}
           className="inline-block"
         />
         <Image
           src="/clientslide.png"
           alt="Our Clients"
           width={1000}
           height={100}
           className="inline-block"
         />
       </Marquee>
     </div>
   </div>
   </div>

  );
};

export default WhyUs;