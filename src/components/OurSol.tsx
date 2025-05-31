'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const services = [
  {
    link: '/services/brand-identity-&-design',
    name: 'BRAND IDENTITY & DESIGN',
    icon: '/servicesicons/Brand.png',
    description: 'Build a consistent visual identity across all platforms.',
  },
  {
    link: '/services/performance-marketing',
    name: 'PERFORMANCE MARKETING',
    icon: '/servicesicons/Per Marketing.png',
    description: 'Drive measurable results through data-driven strategies.',
  },
  {
    link: '/services/content-creation-&-production',
    name: 'CONTENT CREATION & PROD.',
    icon: '/servicesicons/Content.png',
    description: 'Tell stories that connect, educate, & resonate.',
  },
  {
    link: '/services/social-media-management',
    name: 'SOCIAL MEDIA MANAGEMENT',
    icon: '/servicesicons/Social.png',
    description: 'Engage your audience and grow your brand presence.',
  },
  {
    link: '/services/web-development-&-seo',
    name: 'WEBSITE DEVELOPMENT & SEO',
    icon: '/servicesicons/Webstie.png',
    description: 'Online presence for visibility and performance.',
  },
  {
    link: '/services/video-&-animation',
    name: 'VIDEO AND ANIMATION',
    icon: '/servicesicons/Video.png',
    description: 'Create compelling visual content that captivates.',
  },
];

export default function OurSolutionsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);

  const handleTouchStart = (idx: number) => {
    setTouchedIndex(idx === touchedIndex ? null : idx);
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-28">
        <p className="text-[#005F33] font-semibold text-base sm:text-lg mb-2 sm:mb-3">
          Our Solutions
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black leading-tight sm:leading-snug">
          Everything you need{" "}
          <span className="block sm:inline">
            to be <span className="text-[#005F33]">seen <span className="text-black">and</span> remembered</span>
          </span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-5 max-w-2xl mx-auto">
          We help brands build and scale their digital presence through:
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="relative h-32 sm:h-40 group cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onTouchStart={() => handleTouchStart(idx)}
            aria-label={svc.name}
          >
            {/* Horizontal Lines */}
            <div
              className={cn(
                "absolute top-1/2 transform -translate-y-1/2 left-1/2 bg-black h-[1px] sm:h-[2px] transition-all duration-500 origin-left",
                (hovered === idx || touchedIndex === idx) 
                  ? "w-1/3 sm:w-1/3 md:w-1/2 opacity-100" 
                  : "w-0 opacity-0"
              )}
            ></div>

            <div
              className={cn(
                "absolute top-1/2 transform -translate-y-1/2 right-1/2 bg-black h-[1px] sm:h-[2px] transition-all duration-500 origin-right",
                (hovered === idx || touchedIndex === idx) 
                  ? "w-1/3 sm:w-1/3 md:w-1/2 opacity-100" 
                  : "w-0 opacity-0"
              )}
            ></div>

            {/* Icon - responsive sizing */}
            <div 
              className={cn(
                "absolute left-1 sm:left-4 md:left-8 lg:left-10 top-1/2 transform -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 transition-all duration-500",
                (hovered === idx || touchedIndex === idx) 
                  ? "opacity-100" 
                  : "opacity-0"
              )}
            >
              <Image
                src={svc.icon}
                alt={svc.name}
                width={176}
                height={176}
                className="object-contain drop-shadow-lg"
              />
            </div>

            {/* Description - positioned responsively */}
            <div
              className={cn(
                "absolute top-0 right-2 sm:right-4 md:right-8 transform text-black text-xs sm:text-sm transition-all duration-500",
                (hovered === idx || touchedIndex === idx)
                  ? "opacity-100 -translate-y-6 sm:-translate-y-8 md:-translate-y-10"
                  : "opacity-0 translate-y-0"
              )}
            >
              <span className="hidden sm:inline">{svc.description}</span>
              <span className="sm:hidden">
                {svc.description.length > 30 
                  ? svc.description.substring(0, 30) + '...' 
                  : svc.description}
              </span>
            </div>

            {/* Service Name Centered */}
            <Link href={svc.link} className="block w-full h-full">
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center px-2 sm:px-4">
                <span
                  className={cn(
                    "px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 bg-white text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black transition-all duration-300 text-center",
                    (hovered === idx || touchedIndex === idx) 
                      ? "scale-105 text-[#005F33]" 
                      : ""
                  )}
                >
                  {/* For very small screens, abbreviate longer names */}
                  <span className="hidden xs:inline">{svc.name}</span>
                  <span className="xs:hidden">
                    {svc.name.length > 20 
                      ? svc.name.split(' ').map(word => word.charAt(0)).join('.') 
                      : svc.name}
                  </span>
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}