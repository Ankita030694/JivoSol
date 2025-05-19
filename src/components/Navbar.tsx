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

  // Add animation classes for staggered mobile menu items
  const mobileMenuItemClasses = "transform transition-all duration-500";
  const mobileMenuItemVariants = [
    "delay-100", "delay-150", "delay-200", "delay-250", "delay-300", "delay-350"
  ];

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-around bg-[#ECECEC] px-4 py-4 relative shadow-md backdrop-blur-sm transition-all duration-300">
      {/* Logo - always on the left */}
      <div className="nav-logo group">
        <Link href="/" className="transition-transform hover:scale-105 duration-300 block">
          <Image
            src="/jivologo.png"
            alt="Jivo Solutions Logo"
            width={210}
            height={21}
            priority
            className="transition-opacity duration-500 hover:opacity-90"
          />
        </Link>
      </div>

      {/* Mobile burger menu button - on the right */}
      <button 
        className="md:hidden text-gray-800 p-2 z-[60] relative transition-transform hover:scale-110 active:scale-95 duration-200 bg-white rounded-full shadow-sm"
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
      <div className="hidden md:flex gap-8 bg-white px-6 py-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
        <Link 
          href="/" 
          className={`font-normal transition-all duration-300 relative overflow-hidden group ${
            isActive('/') ? 'text-[#0A5C35] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0A5C35]' : 'text-gray-800 hover:text-[#0A5C35]'
          }`}
        >
          <span className="relative z-10">Home</span>
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A5C35] transform origin-left ${isActive('/') ? 'scale-x-100' : 'scale-x-0 transition-transform duration-300 group-hover:scale-x-100'}`}></span>
        </Link>
        <Link 
          href="/about" 
          className={`font-normal transition-all duration-300 relative overflow-hidden group ${
            isActive('/about') ? 'text-[#0A5C35] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0A5C35]' : 'text-gray-800 hover:text-[#0A5C35]'
          }`}
        >
          <span className="relative z-10">About Us</span>
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A5C35] transform origin-left ${isActive('/about') ? 'scale-x-100' : 'scale-x-0 transition-transform duration-300 group-hover:scale-x-100'}`}></span>
        </Link>
        <div className="relative">
          <button 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`font-normal transition-all duration-300 flex items-center gap-1 relative overflow-hidden group ${
              isServiceActive() ? 'text-[#0A5C35] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0A5C35]' : 'text-gray-800 hover:text-[#0A5C35]'
            }`}
          >
            <span className="relative z-10">Services</span>
            <FaChevronDown className={`transition-transform duration-300 ease-in-out ${isServicesOpen ? 'rotate-180' : ''}`} />
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A5C35] transform origin-left ${isServiceActive() ? 'scale-x-100' : 'scale-x-0 transition-transform duration-300 group-hover:scale-x-100'}`}></span>
          </button>
          
          {isServicesOpen && (
            <div 
              className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg py-2 z-50 
              animate-fadeIn overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {serviceLinks.map((service, index) => {
                const servicePath = `/services/${service.toLowerCase().replace(/\s+/g, '-')}`;
                return (
                  <Link 
                    key={index}
                    href={servicePath}
                    className={`block px-4 py-2 transition-all duration-300 hover:pl-6 relative group/item ${
                      isActive(servicePath) ? 'text-[#0A5C35] font-bold bg-green-50' : 'text-gray-800 hover:bg-gray-50 hover:text-[#0A5C35]'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {service}
                    <span className="absolute left-0 top-0 h-full w-1 bg-[#0A5C35] transform scale-y-0 origin-bottom transition-transform duration-300 group-hover/item:scale-y-100"></span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <Link 
          href="/ourwork" 
          className={`font-normal transition-all duration-300 relative overflow-hidden group ${
            isActive('/ourwork') ? 'text-[#0A5C35] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0A5C35]' : 'text-gray-800 hover:text-[#0A5C35]'
          }`}
        >
          <span className="relative z-10">Our Work</span>
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A5C35] transform origin-left ${isActive('/ourwork') ? 'scale-x-100' : 'scale-x-0 transition-transform duration-300 group-hover:scale-x-100'}`}></span>
        </Link>
        <Link 
          href="/insights" 
          className={`font-normal transition-all duration-300 relative overflow-hidden group ${
            isActive('/insights') ? 'text-[#0A5C35] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0A5C35]' : 'text-gray-800 hover:text-[#0A5C35]'
          }`}
        >
          <span className="relative z-10">Insights</span>
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A5C35] transform origin-left ${isActive('/insights') ? 'scale-x-100' : 'scale-x-0 transition-transform duration-300 group-hover:scale-x-100'}`}></span>
        </Link>
        <Link 
          href="/contact" 
          className={`font-normal transition-all duration-300 relative overflow-hidden group ${
            isActive('/contact') ? 'text-[#0A5C35] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0A5C35]' : 'text-gray-800 hover:text-[#0A5C35]'
          }`}
        >
          <span className="relative z-10">Contact Us</span>
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A5C35] transform origin-left ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0 transition-transform duration-300 group-hover:scale-x-100'}`}></span>
        </Link>
      </div>

      {/* Desktop Contact Button - hidden on mobile */}
      <div className="hidden md:flex items-center gap-4">
        <button 
          className="bg-[#ECECEC] text-black rounded-full border border-[#0A5C3580] flex items-center gap-3 px-2 py-1 
          hover:bg-[#0A5C35]/10 transition-all duration-300 transform hover:scale-105 active:scale-95 group"
          aria-label="Get in touch with us"
        >
          <div className="bg-[#005F33] rounded-full p-3 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0A5C35] group-hover:shadow-md">
            <FaPhone className="text-white text-lg transform scale-x-[-1] transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <span className="text-md group-hover:font-medium transition-all duration-300">Get In Touch</span>
        </button>
      </div>

      {/* Mobile menu - full screen overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-[#ECECEC] px-6 transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Centered logo at top of mobile menu */}
        <div className="flex justify-center pt-10 pb-8">
          <Link href="/" onClick={closeMobileMenu} className="transition-transform hover:scale-105 duration-300">
            <Image
              src="/jivologo.png"
              alt="Jivo Solutions Logo"
              width={180}
              height={18}
              priority
              className={`transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            />
          </Link>
        </div>

        <div className="flex flex-col gap-6 max-w-md mx-auto bg-white rounded-xl p-6 shadow-md">
          <Link 
            href="/" 
            className={`text-xl font-normal transition-all duration-300 ${mobileMenuItemClasses} ${mobileMenuItemVariants[0]} ${
              isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            } ${isActive('/') ? 'text-[#0A5C35] font-bold pl-4 border-l-4 border-[#0A5C35]' : 'text-gray-800 hover:text-[#0A5C35] hover:translate-x-2 p-2 rounded-lg hover:bg-gray-50'}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`text-xl font-normal transition-all duration-300 ${mobileMenuItemClasses} ${mobileMenuItemVariants[1]} ${
              isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            } ${isActive('/about') ? 'text-[#0A5C35] font-bold pl-4 border-l-4 border-[#0A5C35]' : 'text-gray-800 hover:text-[#0A5C35] hover:translate-x-2 p-2 rounded-lg hover:bg-gray-50'}`}
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          
          {/* Mobile services dropdown with arrow */}
          <div className={`flex flex-col gap-2 ${mobileMenuItemClasses} ${mobileMenuItemVariants[2]} ${
            isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <button 
              onClick={toggleMobileServices}
              className={`text-xl font-normal flex items-center justify-between transition-all duration-300 ${
                isServiceActive() ? 'text-[#0A5C35] font-bold' : 'text-gray-800 hover:text-[#0A5C35]'
              } p-2 rounded-lg hover:bg-gray-50 w-full`}
            >
              <span>Services</span>
              <FaChevronDown 
                className={`transition-transform duration-500 ease-bounce ml-2 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            <div className={`pl-4 flex flex-col gap-3 overflow-hidden transition-all duration-500 ease-in-out ${
              isMobileServicesOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}>
              {serviceLinks.map((service, index) => {
                const servicePath = `/services/${service.toLowerCase().replace(/\s+/g, '-')}`;
                return (
                  <Link 
                    key={index}
                    href={servicePath}
                    className={`text-lg transition-all duration-300 hover:translate-x-2 ${
                      isActive(servicePath) ? 'text-[#0A5C35] font-medium' : 'text-gray-600 hover:text-[#0A5C35]'
                    } p-2 rounded-lg hover:bg-gray-50 block`}
                    style={{ transitionDelay: isMobileServicesOpen ? `${index * 50}ms` : '0ms' }}
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
            className={`text-xl font-normal transition-all duration-300 ${mobileMenuItemClasses} ${mobileMenuItemVariants[3]} ${
              isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            } ${isActive('/ourwork') ? 'text-[#0A5C35] font-bold pl-4 border-l-4 border-[#0A5C35]' : 'text-gray-800 hover:text-[#0A5C35] hover:translate-x-2 p-2 rounded-lg hover:bg-gray-50'}`}
            onClick={closeMobileMenu}
          >
            Our Work
          </Link>
          <Link 
            href="/insights" 
            className={`text-xl font-normal transition-all duration-300 ${mobileMenuItemClasses} ${mobileMenuItemVariants[4]} ${
              isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            } ${isActive('/insights') ? 'text-[#0A5C35] font-bold pl-4 border-l-4 border-[#0A5C35]' : 'text-gray-800 hover:text-[#0A5C35] hover:translate-x-2 p-2 rounded-lg hover:bg-gray-50'}`}
            onClick={closeMobileMenu}
          >
            Insights
          </Link>
          <Link 
            href="/contact" 
            className={`text-xl font-normal transition-all duration-300 ${mobileMenuItemClasses} ${mobileMenuItemVariants[5]} ${
              isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            } ${isActive('/contact') ? 'text-[#0A5C35] font-bold pl-4 border-l-4 border-[#0A5C35]' : 'text-gray-800 hover:text-[#0A5C35] hover:translate-x-2 p-2 rounded-lg hover:bg-gray-50'}`}
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
          
          {/* Mobile contact button */}
          <button 
            className={`mt-8 bg-white text-black rounded-full border border-[#0A5C3580] flex items-center justify-center gap-3 px-4 py-3 
            hover:bg-[#0A5C35]/10 transition-all duration-500 transform hover:scale-105 active:scale-95 group 
            ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '400ms' }}
            aria-label="Get in touch with us"
            onClick={closeMobileMenu}
          >
            <div className="bg-[#005F33] rounded-full p-3 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0A5C35]">
              <FaPhone className="text-white text-lg transform scale-x-[-1] transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <span className="text-lg font-medium">Get In Touch</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;