'use client'
import Image from "next/image";
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import OurSol from '@/components/OurSol';
import Brands from '@/components/Brands';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
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
    <h1 className="font-poppins font-bold text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-normal">
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </h1>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="w-full h-[60vh] md:h-[60vh] sm:h-[50vh] relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
          <TypewriterEffect text="Presence is Everything" />
          <h2 className="font-poppins font-light text-white text-sm max-w-xl">
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
      <OurSol />
      <Brands />
      <div className="-mt-30">
        <Form />
      </div>
      <Footer />
    </div>
  );
}
