'use client'
import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import { OurSolution } from '@/components/OurSol';
import Brands from '@/components/Brands';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
import FAQ from '@/components/FAQ';
import { useEffect, useState } from "react";

// Typewriter animation component
const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); 
       
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text]);

  return (
    <h1 className="font-poppins font-bold text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xxl:text-7xl leading-tight md:leading-normal xxl:leading-relaxed">
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </h1>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="w-full h-[60vh] md:h-[60vh] sm:h-[50vh] xxl:h-[70vh] relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 xxl:px-8 text-center">
          <TypewriterEffect text="Presence is Everything" />
          <h2 className="font-poppins font-light text-white text-sm xxl:text-base max-w-xl xxl:max-w-2xl">
            In a digital-first world, how you're seen is how you're remembered.
          </h2>
        </div>
        <Image
          src="/jivobn1.svg"
          alt="Jivo Hero"
          width={1000}
          height={400}
          className="w-full h-full object-cover"
          priority
        />
      </div>
        <About />
        <WhyUs />
        <OurSolution />


        <Brands />


        <Form />


        <FAQ />

      <Footer />
    </div>
  );
}
