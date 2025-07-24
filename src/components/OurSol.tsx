import React, { FC, useState } from "react";
import Image from "next/image";

export const OurSolution: FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      link: '/services/brand-identity-&-design',
      name: 'Brand Identity & Design',
      icon: '/servicesicons/Brand.png',
      description: 'Build a consistent visual identity across all platforms.',
      highlighted: false
    },
    {
      link: '/services/performance-marketing',
      name: 'Performance Marketing',
      icon: '/servicesicons/Per Marketing.png',
      description: 'Drive measurable results through data-driven strategies.',
      highlighted: false
    },
    {
      link: '/services/content-creation-&-production',
      name: 'Content Creation & Production',
      icon: '/servicesicons/Content.png',
      description: 'Tell stories that connect, educate, & resonate with your audience.',
      highlighted: false
    },
    {
      link: '/services/social-media-management',
      name: 'Social Media Management',
      icon: '/servicesicons/Social.png',
      description: 'Engage your audience and grow your brand presence.',
      highlighted: false
    },
    {
      link: '/services/web-development-&-seo',
      name: 'Website Development & SEO',
      icon: '/servicesicons/Webstie.png',
      description: 'Online presence for visibility and performance.',
      highlighted: false
    },
    {
      link: '/services/video-&-animation',
      name: 'Video & Animation',
      icon: '/servicesicons/Video.png',
      description: 'Create compelling visual content that captivates.',
      highlighted: false
    }
  ];

  const handleServiceClick = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section className="relative w-full max-w-[1440px] xxl:max-w-[1800px] mx-auto py-4 sm:py-8 xxl:py-12 px-4 sm:px-0 xxl:px-8">
      <h1 className="text-center text-3xl sm:text-3xl md:text-4xl xxl:text-5xl font-extrabold font-['Poppins',Helvetica] leading-tight sm:leading-[69.2px] xxl:leading-[80px] mb-2 sm:mb-4 xxl:mb-6">
        <span className="text-black">Everything you need to be </span>
        <span className="text-[#055e31]">seen</span>
        <span className="text-black"> and </span>
        <span className="text-[#055e31]">remembered</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl xxl:text-2xl text-[#596475] font-['Poppins',Helvetica] text-center mb-8 sm:mb-12 xxl:mb-16 px-4 xxl:px-8">
        We help brands build and scale their digital presence through:
      </p>

      <div className="relative flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10 xxl:space-y-12">
        {services.map((service, index) => (
          <div key={index} className={`relative w-full flex flex-col items-center group ${activeService === index ? 'active-service' : ''}`}>
            {/* Row: Icon, Line, Title, Line */}
            <div className="relative w-full flex items-center justify-center">
              {/* Icon on the left, absolutely positioned, only visible on hover - hidden on mobile */}
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 xxl:left-8 w-[300px] h-[300px] xxl:w-[350px] xxl:h-[350px]">
                <Image
                  src={service.icon}
                  alt={service.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain xxl:scale-110"
                />
              </div>
              {/* Left line - now extends to the edge, hidden on mobile */}
              <div className="hidden md:flex flex-grow h-[2px] bg-[#055e31] transition-all duration-500 group-hover:mr-4 mr-0 opacity-0 group-hover:opacity-100 xxl:h-[3px]"></div>
              {/* Service Name */}
              <div className="block z-10 px-2 sm:px-4 xxl:px-6 text-center flex-shrink-0 w-full md:w-auto">
                {/* Desktop: Direct link for navigation */}
                <a
                  href={service.link}
                  className="hidden md:block cursor-pointer"
                >
                  <div
                    className={`font-['Poppins',Helvetica] text-lg sm:text-xl md:text-[30px] xxl:text-[36px] leading-tight sm:leading-[36.2px] xxl:leading-[42px] whitespace-normal md:whitespace-nowrap transition-all duration-300 font-light text-[#055e3142] group-hover:text-black group-hover:font-bold group-hover:text-xl sm:group-hover:text-2xl md:group-hover:text-[34px] xxl:group-hover:text-[40px] text-center`}
                  >
                    {service.name}
                  </div>
                </a>
                {/* Mobile: Button for showing Learn More */}
                <button
                  onClick={() => handleServiceClick(index)}
                  className="md:hidden cursor-pointer"
                >
                  <div
                    className={`font-['Poppins',Helvetica] text-lg sm:text-xl md:text-[30px] xxl:text-[36px] leading-tight sm:leading-[36.2px] xxl:leading-[42px] whitespace-normal md:whitespace-nowrap transition-all duration-300 font-light text-[#055e3142] group-hover:text-black group-hover:font-bold group-hover:text-xl sm:group-hover:text-2xl md:group-hover:text-[34px] xxl:group-hover:text-[40px] text-center ${
                      activeService === index ? 'text-black font-bold text-xl sm:text-2xl md:text-[34px] xxl:text-[40px]' : ''
                    }`}
                  >
                    {service.name}
                  </div>
                </button>
              </div>
              {/* Right line - now extends to the edge, hidden on mobile */}
              <div className="hidden md:relative md:flex md:flex-grow md:flex-col md:items-end md:justify-center">
                <div className="h-[2px] xxl:h-[3px] bg-[#055e31] transition-all duration-500 group-hover:ml-4 ml-0 opacity-0 group-hover:opacity-100 w-full"></div>
                {/* Description above the right line, right-aligned - hidden on mobile */}
                <div className="absolute -top-14 xxl:-top-16 right-0 xxl:right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 max-w-[420px] xxl:max-w-[480px] w-full">
                  <p className="text-sm xxl:text-base text-black p-4 xxl:p-6 text-right">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile description and button - only rendered when active */}
            {activeService === index && (
              <div className="md:hidden w-full text-center mt-3">
                <p className="text-sm text-black px-4 mb-3">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-block bg-[#055e31] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#044a28] transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};