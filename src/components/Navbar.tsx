'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaChevronDown } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const serviceLinks = [
    'Social Media Management',
    'Performance Marketing',
    'Brand Identity & Design',
    'Web Development & SEO',
    'Video & Animation',
    'Content Creation & Production'
  ];

  // Check if the current path matches the link
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  // Check if current path is a service page
  const isServiceActive = () => {
    return pathname.startsWith('/services/');
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 1000); // Keep dropdown open for 1 second after leaving
  };

  useEffect(() => {
    return () => {
      // Clean up timeout when component unmounts
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="flex items-center justify-around bg-[#ECECEC] px-4 py-4">
      {/* Logo */}
      <div className="nav-logo">
        <Link href="/">
          <Image
            src="/jivologo.png"
            alt="Jivo Solutions Logo"
            width={210}
            height={21}
            priority
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 bg-white px-6 py-3 rounded-xl">
        <Link 
          href="/" 
          className={`font-normal transition-colors ${
            isActive('/') ? 'text-[#0A5C35] font-bold' : 'text-gray-800 hover:text-green-700'
          }`}
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className={`font-normal transition-colors ${
            isActive('/about') ? 'text-[#0A5C35] font-bold' : 'text-gray-800 hover:text-green-700'
          }`}
        >
          About Us
        </Link>
        <div className="relative">
          <button 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`font-normal transition-colors flex items-center gap-1 ${
              isServiceActive() ? 'text-[#0A5C35]' : 'text-gray-800 hover:text-green-700'
            }`}
          >
            Services
            <FaChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isServicesOpen && (
            <div 
              className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg py-2 z-50"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {serviceLinks.map((service, index) => {
                const servicePath = `/services/${service.toLowerCase().replace(/\s+/g, '-')}`;
                return (
                  <Link 
                    key={index}
                    href={servicePath}
                    className={`block px-4 py-2 transition-colors ${
                      isActive(servicePath) ? 'text-[#0A5C35]' : 'text-gray-800 hover:bg-gray-50 hover:text-green-700'
                    }`}
                  >
                    {service}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <Link 
          href="/ourwork" 
          className={`font-normal transition-colors ${
            isActive('/work') ? 'text-[#0A5C35] font-bold' : 'text-gray-800 hover:text-green-700'
          }`}
        >
          Our Work
        </Link>
        <Link 
          href="/insights" 
          className={`font-normal transition-colors ${
            isActive('/insights') ? 'text-[#0A5C35] font-bold' : 'text-gray-800 hover:text-green-700'
          }`}
        >
          Insights
        </Link>
        <Link 
          href="/contact" 
          className={`font-normal transition-colors ${
            isActive('/contact') ? 'text-[#0A5C35] font-bold' : 'text-gray-800 hover:text-green-700'
          }`}
        >
          Contact Us
        </Link>
      </div>

      {/* Contact Buttons */}
      <div className="flex items-center gap-4">
        <button 
          className="bg-white text-black rounded-full border border-[#0A5C3580] flex items-center gap-3 px-2 py-2 hover:opacity-90 transition-opacity"
          aria-label="Get in touch with us"
        >
          <div className="bg-[#005F33] rounded-full p-3 flex items-center justify-center">
            <FaPhone className="text-white text-lg" />
          </div>
          <span className="text-lg">Get In Touch</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;