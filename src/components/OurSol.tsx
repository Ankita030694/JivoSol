'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    description: 'Tell stories that connect, educate, & resonate with your audience.',
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

  return (
    <section className="bg-[#EFEFEF] py-28 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-28">
        <p className="text-[#005F33] font-semibold text-lg mb-3">Our Solutions</p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-black leading-snug">
          Everything you need <br />
          to be <span className="text-[#005F33]">seen <span className="text-black">and</span> remembered</span>
        </h2>
        <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto">
          We help brands build and scale their digital presence through:
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-12">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="relative min-h-[80px] group cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Left Line on hover */}
            <div
              className={`absolute top-1/2 left-0 bg-black h-[1px] transition-all duration-500 transform -translate-y-1/2 z-10 ${
                hovered === idx ? 'w-[calc(50%-220px)] opacity-100' : 'w-0 opacity-0'
              }`}
              style={{ transformOrigin: 'left center' }}
            ></div>

            {/* Right Line on hover */}
            <div
              className={`absolute top-1/2 right-0 bg-black h-[1px] transition-all duration-500 transform -translate-y-1/2 z-10 ${
                hovered === idx ? 'w-[calc(50%-300px)] opacity-100' : 'w-0 opacity-0'
              }`}
              style={{ transformOrigin: 'right center' }}
            ></div>

            {/* Icon - Green rounded rectangle with white icon */}
            <div className={`absolute left-12 transform transition-all duration-500 z-20 ${
              hovered === idx ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={svc.icon}
                    alt={svc.name}
                    width={250}
                    height={250}
                    className="object-cover"
                    // style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              </div>
            </div>

            {/* Description positioned to the right */}
            <div
              className={`absolute right-12 top-1/2 transform -translate-y-1/2 transition-all duration-500 z-20 ${
                hovered === idx ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="text-[#666666] text-base max-w-[320px] text-right leading-relaxed font-medium">
                {svc.description}
              </div>
            </div>

            {/* Service Name Centered */}
            <Link href={svc.link}>
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <span
                  className={`px-12 text-2xl md:text-3xl font-bold transition-all duration-300 whitespace-nowrap bg-[#EFEFEF] ${
                    hovered === idx 
                      ? 'text-black scale-105' 
                      : 'text-[#B8C5BC]'
                  }`}
                >
                  {svc.name}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}