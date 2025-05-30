'use client';

import { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    name: 'BRAND IDENTITY & DESIGN',
    icon: '/servicesicons/Brand.png',
    description: 'Build a consistent visual identity across all platforms.',
  },
  {
    name: 'PERFORMANCE MARKETING',
    icon: '/servicesicons/Per Marketing.png',
    description: 'Drive measurable results through data-driven strategies.',
  },
  {
    name: 'CONTENT CREATION & PROD.',
    icon: '/servicesicons/Content.png',
    description: 'Tell stories that connect, educate, & resonate.',
  },
  {
    name: 'SOCIAL MEDIA MANAGEMENT',
    icon: '/servicesicons/Social.png',
    description: 'Engage your audience and grow your brand presence.',
  },
  {
    name: 'WEBSITE DEVELOPMENT & SEO',
    icon: '/servicesicons/Webstie.png',
    description: 'Optimize your online presence for visibility and performance.',
  },
  {
    name: 'VIDEO AND ANIMATION',
    icon: '/servicesicons/Video.png',
    description: 'Create compelling visual content that captivates.',
  },
];

export default function OurSolutionsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-white py-28 px-6 md:px-20">
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
      <div className="space-y-32">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="relative h-52 group cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Left Line on hover */}
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 left-1/2 bg-black h-[2px] transition-all duration-500 origin-left ${
                hovered === idx ? 'w-1/2 opacity-100' : 'w-0 opacity-0'
              }`}
            ></div>

            {/* Right Line on hover */}
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 right-1/2 bg-black h-[2px] transition-all duration-500 origin-right ${
                hovered === idx ? 'w-1/2 opacity-100' : 'w-0 opacity-0'
              }`}
            ></div>

            {/* Icon - triple size */}
            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-44 h-44">
              <Image
                src={svc.icon}
                alt={svc.name}
                width={168}
                height={168}
                className="object-contain drop-shadow-lg"
              />
            </div>

            {/* Description above line */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[160%] text-black text-lg md:text-xl text-center max-w-md px-6 transition-all duration-500 ${
                hovered === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
              }`}
            >
              {svc.description}
            </div>

            {/* Service Name Centered */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center">
              <span
                className={`px-8 py-2 bg-white text-3xl md:text-4xl font-bold text-black transition-transform duration-300 ${
                  hovered === idx ? 'scale-105 text-[#005F33]' : ''
                }`}
              >
                {svc.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
