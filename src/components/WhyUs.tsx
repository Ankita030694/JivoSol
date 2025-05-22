"use client"
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  // Use intersection observer for heading and description
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Use intersection observer for clients section
  const [clientsRef, clientsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      <motion.div 
        className="w-full bg-[#ECECEC] py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            ref={headingRef}
            className="text-center mb-8"
            variants={staggerContainer}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-4xl font-bold text-black mb-4"
              variants={fadeInUp}
            >
              Why Brands Work With Us
            </motion.h2>
            <motion.div 
              className="text-black max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              <p className="font-bold">We are a strategy-first digital partner focused on long-term impact.</p>
              <p>Our clients choose us for our clarity of thought, execution excellence, and commitment to lasting results.</p>
            </motion.div>
            <motion.button 
              className="bg-[#0A5C35] text-white px-6 py-2 rounded-full mt-6 flex items-center mx-auto"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Work With Us {" "}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          <motion.div 
            ref={statsRef} 
            className="flex flex-wrap justify-between max-w-full px-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg w-[220px] m-2"
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-sm text-black mb-3">{stat.label}</p>
                <motion.p 
                  className="text-[#0A5C35] text-5xl font-bold"
                  // animate={pulseAnimation}
                >
                  {counters[index]}
                  {stat.label === "Client Retention Rate" ? "%" : "+"}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
          
          
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-white py-16 overflow-hidden"
        ref={clientsRef}
        initial={{ opacity: 0 }}
        animate={clientsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-center mb-8"
          variants={staggerContainer}
          initial="hidden"
          animate={clientsInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-[#0A5C35] text-lg"
            variants={fadeInUp}
          >
            Our Clients
          </motion.p>
          <motion.h2 
            className="text-4xl font-bold text-black"
            variants={fadeInUp}
          >
            Trusted By Businesses
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="relative w-full overflow-hidden max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={clientsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Marquee 
            speed={100} 
            gradient={false} 
            direction="left"
          >
            <Image src="/client/logo1.jpg" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo2.jpeg" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo3.jpeg" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo4.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo6.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo7.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo9.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo10.jpg" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo11.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo12.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo13.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo14.jpg" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo15.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo16.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo17.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo18.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo19.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo20.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo21.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo22.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo23.jpeg" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo24.png" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo25.jpg" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
            <Image src="/client/logo26.jpeg" alt="Client Logo" width={150} height={100} className="inline-block mx-4" />
          </Marquee>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyUs;