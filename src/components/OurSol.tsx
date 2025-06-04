  import React, { FC } from "react";
  import Image from "next/image";

  export const OurSolution: FC = () => {
    const services = [
      {
        link: '/services/brand-identity-&-design',
        name: 'BRAND IDENTITY & DESIGN',
        icon: '/servicesicons/Brand.png',
        description: 'Build a consistent visual identity across all platforms.',
        highlighted: false
      },
      {
        link: '/services/performance-marketing',
        name: 'PERFORMANCE MARKETING',
        icon: '/servicesicons/Per Marketing.png',
        description: 'Drive measurable results through data-driven strategies.',
        highlighted: false
      },
      {
        link: '/services/content-creation-&-production',
        name: 'CONTENT CREATION & PROD.',
        icon: '/servicesicons/Content.png',
        description: 'Tell stories that connect, educate, & resonate with your audience.',
        highlighted: false
      },
      {
        link: '/services/social-media-management',
        name: 'SOCIAL MEDIA MANAGEMENT',
        icon: '/servicesicons/Social.png',
        description: 'Engage your audience and grow your brand presence.',
        highlighted: false
      },
      {
        link: '/services/web-development-&-seo',
        name: 'WEBSITE DEVELOPMENT & SEO',
        icon: '/servicesicons/Webstie.png',
        description: 'Online presence for visibility and performance.',
        highlighted: false
      },
      {
        link: '/services/video-&-animation',
        name: 'VIDEO AND ANIMATION',
        icon: '/servicesicons/Video.png',
        description: 'Create compelling visual content that captivates.',
        highlighted: false
      }
    ];

    return (
      <section className="relative w-full max-w-[1440px] mx-auto py-16">
        <h1 className="text-center text-4xl font-extrabold font-['Poppins',Helvetica] leading-[69.2px] mb-12">
          <span className="text-black">Everything you need to be </span>
          <span className="text-[#055e31]">seen</span>
          <span className="text-black"> and </span>
          <span className="text-[#055e31]">remembered</span>
        </h1>

        <p className="text-xl text-[#596475] font-['Poppins',Helvetica] text-center mb-16">
          We help brands build and scale their digital presence through:
        </p>

        <div className="relative flex flex-col items-center space-y-2">
          {services.map((service, index) => (
            <div key={index} className="relative w-full flex flex-col items-center group py-2">
              {/* Row: Icon, Line, Title, Line */}
              <div className="relative w-full flex items-center justify-center">
                {/* Icon on the left, absolutely positioned, only visible on hover */} 
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ transform: 'translateY(20%)' }}>
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={300}
                    height={300}
                  />
                </div>
                {/* Left line */}
                <div className="flex-grow h-[2px] bg-[#055e31] transition-all duration-500 group-hover:mr-4 mr-0 opacity-0 group-hover:opacity-100" style={{ maxWidth: '100vw' }}></div>
                {/* Service Name */}
                <a
                  href={service.link}
                  className="block z-10 px-4 text-center flex-shrink-0"
                >
                  <div
                    className={`font-['Poppins',Helvetica] text-[30px] leading-[36.2px] whitespace-nowrap transition-all duration-300 font-light text-[#055e3142] group-hover:text-black group-hover:font-bold group-hover:text-[34px]`}
                  >
                    {service.name}
                  </div>
                </a>
                {/* Right line and Description above it */}
                <div className="relative flex-grow flex flex-col items-end justify-center">
                  <div className="h-[2px] bg-[#055e31] transition-all duration-500 group-hover:ml-4 ml-0 opacity-0 group-hover:opacity-100 w-full"></div>
                  {/* Description above the right line, aligned right, never overflowing */}
                  <div className="absolute -top-14 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 max-w-[90vw] w-[420px] flex justify-center">
                    <p className="text-sm text-black p-4 text-left w-full">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };