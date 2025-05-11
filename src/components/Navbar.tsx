'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceLinks = [
    'Social Media Management',
    'Performance Marketing',
    'Brand Identity & Design',
    'Web Development & SEO',
    'Video & Animation',
    'Content Creation & Production'
  ];

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
          className="text-gray-800 font-normal hover:text-green-700 transition-colors"
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className="text-gray-800 font-normal hover:text-green-700 transition-colors"
        >
          About Us
        </Link>
        <div className="relative">
          <button 
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className="text-gray-800 font-normal hover:text-green-700 transition-colors flex items-center gap-1"
          >
            Services
            <FaChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isServicesOpen && (
            <div 
              className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg py-2 z-50"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              {serviceLinks.map((service, index) => (
                <Link 
                  key={index}
                  href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-green-700 transition-colors"
                >
                  {service}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link 
          href="/work" 
          className="text-gray-800 font-normal hover:text-green-700 transition-colors"
        >
          Our Work
        </Link>
        <Link 
          href="/insights" 
          className="text-gray-800 font-normal hover:text-green-700 transition-colors"
        >
          Insights
        </Link>
        <Link 
          href="/contact" 
          className="text-gray-800 font-normal hover:text-green-700 transition-colors"
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