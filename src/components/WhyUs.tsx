"use client"
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Client logos array from Firebase
const clientLogos = [
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2F1%20(2).jpg?alt=media&token=f15b1d7f-a65f-463b-b160-81f17669ac6e",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2F84515ced-e02b-4d1d-a484-4d533da326a2.jpeg?alt=media&token=bce8e46d-84a5-4f3c-b78f-51c7046070fa",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2F9161631f-239f-4d83-b450-5406045dbca9.jpeg?alt=media&token=0838e2e1-ac73-449b-9633-634304479763",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FAFD%20Black%20(1).png?alt=media&token=86885422-55a7-42e3-8572-63b2bfc4c8b5",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FAngelopedia_Logo-removebg-preview.png?alt=media&token=f96f6f75-e96a-445f-b5fc-a57785c94548",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FArtboard%201%20copy%202%403x.png?alt=media&token=4a235b9f-0acd-44a1-991f-9ea7c611b6df",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FColor%203.1.png?alt=media&token=433a3959-a49c-4972-bac0-67fc49eba045",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FCure_Surgicals_Logo-removebg-preview.png?alt=media&token=a11ef991-2e65-4f26-bd8e-64f1203acb08",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FFez_logo-removebg-preview.png?alt=media&token=d2fdc9df-32fb-4073-a448-6135ab6e1167",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FGRACE%20final.png?alt=media&token=8b20c285-aa30-4ac3-a39b-7e9465b8fa44",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FGoing%20Bananas.png?alt=media&token=67f76051-5bc5-4482-b682-31f0647a4583",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FJai%20Jalaram-PNG.png?alt=media&token=d34b7878-dd16-4bb6-882a-2661321555a3",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FLOGO%20b.png?alt=media&token=19dd00c7-c9fb-4623-9ea1-8c0b1df36c75",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FLogo%20(1).png?alt=media&token=a6cf142d-c097-4870-ac92-b5df65b65556",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FLogo%207-01.png?alt=media&token=54d57f98-9aab-469b-bff3-4629e3f6ae78",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FMDC_Logo-removebg-preview.png?alt=media&token=5083a36b-e197-4fe5-80ec-8aaf452baa94",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FRIC_Energy_logo-removebg-preview.png?alt=media&token=0edfdf89-9569-4300-8ac5-6974dafee7b1",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FRadha%20House%20SIOLIM.png?alt=media&token=aa3c9f80-0376-4d83-b362-213729da597a",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FVastuVison_Logo-removebg-preview.png?alt=media&token=ceb59b6a-8edb-4b9e-bb4f-98db362679d4",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FWhatsApp%20Image%202025-03-25%20at%2015.38.36.jpeg?alt=media&token=24031bb6-197c-452d-8fe9-27e472168b25",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FYSE%201.png?alt=media&token=73fd0ef2-9cfd-4b52-92c6-7dae7b553b17",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2FZ-6.jpg?alt=media&token=5fbc0f72-a7a7-4aee-8943-4b22bde24132",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Fama_legal_solutions_logo.jpeg?alt=media&token=7b1330a8-117e-4744-901e-5519e83aa2d0",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Famar%20file%20(1).png?alt=media&token=22b66ba8-96cc-4066-8214-d91707d53fd7",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Fbaba%20logo.png?alt=media&token=6b37a920-e461-47a6-a122-eccc276aab5c",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Fcropped-logo-removebg-preview-circle-235d77cf1cbd2adf0c43ebc6296f03c8-.png?alt=media&token=e1c218e7-1b14-4885-a49c-5880f922ed4d",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Fe46a41b5-947d-4cf2-a9ce-cff16f0e01cc.jpeg?alt=media&token=f7f9dcf1-4f0b-4132-afda-691f1179a81b",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Fimages.png?alt=media&token=e4e4a2f0-5784-4c3f-95ff-3d9afca1dbdb",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Flogo-black.png?alt=media&token=317940af-78df-4fa3-a015-3a63a0faadf1",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Flong.jpg?alt=media&token=39eea10c-1d0a-451b-8f65-67a34d28923e",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Fmpowerbiz-technologies-squarelogo-1500389602975.png?alt=media&token=33ee1c5d-e85a-40ce-ac93-e10b74476701",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Fudaawat%20logo%20ft%20(1).png?alt=media&token=8ace3693-df77-4a5e-86e2-6ddd0c98b254",
    "https://firebasestorage.googleapis.com/v0/b/jivosol.firebasestorage.app/o/clientlogos%2Fwhite.png?alt=media&token=690c56dc-394b-45e3-8f59-d7c7bc24af55"
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
        className="w-full bg-[#ECECEC] py-16"
      >
        <div className="container mx-auto px-4">
          <div 
            ref={headingRef}
            className="text-center mb-8"
          >
            <h2 
              className="text-4xl font-bold text-black mb-4"
            >
              Why Brands Work With Us
            </h2>
            <div 
              className="text-black max-w-3xl mx-auto"
            >
              <p className="font-bold">We are a strategy-first digital partner focused on long-term impact.</p>
              <p>Our clients choose us for our clarity of thought, execution excellence, and commitment to lasting results.</p>
            </div>
            <button 
              className="bg-[#0A5C35] text-white px-6 py-2 rounded-full mt-6 flex items-center mx-auto"
            >
              Work With Us {" "}
              <span>
                →
              </span>
            </button>
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
        className="bg-white py-16 overflow-hidden"
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
            Trusted By Businesses
          </h2>
        </div>
        
        <div 
          className="relative w-full overflow-hidden max-w-6xl mx-auto"
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