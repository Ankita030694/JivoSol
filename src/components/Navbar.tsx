'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile services dropdown
  const toggleMobileServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  useEffect(() => {
    return () => {
      // Clean up timeout when component unmounts
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu when window is resized beyond mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="flex items-center justify-between bg-[#ECECEC] px-4 py-4 relative">
      {/* Logo - always on the left */}
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

      {/* Mobile burger menu button - on the right */}
      <button 
        className="md:hidden text-gray-800 p-2 z-[60] relative"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'} absolute inset-0 flex items-center justify-center`}>
          <FaTimes size={24} />
        </div>
        <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
          <FaBars size={24} />
        </div>
      </button>

      {/* Desktop Navigation Links - hidden on mobile */}
      <div className="hidden md:flex gap-8 bg-white px-6 py-3 rounded-xl">
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

      {/* Desktop Contact Button - hidden on mobile */}
      <div className="hidden md:flex items-center gap-4">
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

      {/* Mobile menu - full screen overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-[#ECECEC]/95 backdrop-blur-sm px-6 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Centered logo at top of mobile menu */}
        <div className="flex justify-center pt-10 pb-8">
          <Link href="/" onClick={closeMobileMenu}>
            <Image
              src="/jivologo.png"
              alt="Jivo Solutions Logo"
              width={180}
              height={18}
              priority
            />
          </Link>
        </div>

        <div className="flex flex-col gap-6 max-w-md mx-auto">
          <Link 
            href="/" 
            className={`text-xl font-normal transition-colors hover:text-[#0A5C35] ${
              isActive('/') ? 'text-[#0A5C35] font-bold' : 'text-gray-800'
            }`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`text-xl font-normal transition-colors hover:text-[#0A5C35] ${
              isActive('/about') ? 'text-[#0A5C35] font-bold' : 'text-gray-800'
            }`}
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          
          {/* Mobile services dropdown with arrow */}
          <div className="flex flex-col gap-2">
            <button 
              onClick={toggleMobileServices}
              className={`text-xl font-normal flex items-center justify-between ${isServiceActive() ? 'text-[#0A5C35] font-bold' : 'text-gray-800'}`}
            >
              <span>Services</span>
              <FaChevronDown 
                className={`transition-transform duration-300 ml-2 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            <div className={`pl-4 flex flex-col gap-3 overflow-hidden transition-all duration-300 ${
              isMobileServicesOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}>
              {serviceLinks.map((service, index) => {
                const servicePath = `/services/${service.toLowerCase().replace(/\s+/g, '-')}`;
                return (
                  <Link 
                    key={index}
                    href={servicePath}
                    className={`text-lg transition-colors hover:text-[#0A5C35] ${
                      isActive(servicePath) ? 'text-[#0A5C35]' : 'text-gray-600'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {service}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <Link 
            href="/ourwork" 
            className={`text-xl font-normal transition-colors hover:text-[#0A5C35] ${
              isActive('/work') ? 'text-[#0A5C35] font-bold' : 'text-gray-800'
            }`}
            onClick={closeMobileMenu}
          >
            Our Work
          </Link>
          <Link 
            href="/insights" 
            className={`text-xl font-normal transition-colors hover:text-[#0A5C35] ${
              isActive('/insights') ? 'text-[#0A5C35] font-bold' : 'text-gray-800'
            }`}
            onClick={closeMobileMenu}
          >
            Insights
          </Link>
          <Link 
            href="/contact" 
            className={`text-xl font-normal transition-colors hover:text-[#0A5C35] ${
              isActive('/contact') ? 'text-[#0A5C35] font-bold' : 'text-gray-800'
            }`}
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
          
          {/* Mobile contact button */}
          <button 
            className="mt-8 bg-white text-black rounded-full border border-[#0A5C3580] flex items-center justify-center gap-3 px-4 py-3 hover:bg-[#0A5C35]/10 transition-all duration-300"
            aria-label="Get in touch with us"
            onClick={closeMobileMenu}
          >
            <div className="bg-[#005F33] rounded-full p-3 flex items-center justify-center">
              <FaPhone className="text-white text-lg" />
            </div>
            <span className="text-lg font-medium">Get In Touch</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;