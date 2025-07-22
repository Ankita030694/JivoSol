  import React, { FC } from "react";
  import Image from "next/image";

  export const OurSolution: FC = () => {
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

    return (
      <section className="relative w-full max-w-[1440px] mx-auto py-4 sm:py-8 px-4 sm:px-0">
        <h1 className="text-center text-3xl sm:text-3xl md:text-4xl font-extrabold font-['Poppins',Helvetica] leading-tight sm:leading-[69.2px] mb-2 sm:mb-4">
          <span className="text-black">Everything you need to be </span>
          <span className="text-[#055e31]">seen</span>
          <span className="text-black"> and </span>
          <span className="text-[#055e31]">remembered</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#596475] font-['Poppins',Helvetica] text-center mb-8 sm:mb-12 px-4">
          We help brands build and scale their digital presence through:
        </p>

        <div className="relative flex flex-col items-center space-y-1 sm:space-y-2">
          {services.map((service, index) => (
            <div key={index} className="relative w-full flex flex-col items-center group py-1 sm:py-2">
              {/* Row: Icon, Line, Title, Line */}
              <div className="relative w-full flex items-center justify-center">
                {/* Icon on the left, absolutely positioned, only visible on hover - hidden on mobile */}
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ transform: 'translateY(20%)' }}>
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={300}
                    height={300}
                  />
                </div>
                {/* Left line - now extends to the edge, hidden on mobile */}
                <div className="hidden md:flex flex-grow h-[2px] bg-[#055e31] transition-all duration-500 group-hover:mr-4 mr-0 opacity-0 group-hover:opacity-100"></div>
                {/* Service Name */}
                <a
                  href={service.link}
                  className="block z-10 px-2 sm:px-4 text-center flex-shrink-0 w-full md:w-auto"
                >
                  <div
                    className={`font-['Poppins',Helvetica] text-lg sm:text-xl md:text-[30px] leading-tight sm:leading-[36.2px] whitespace-normal md:whitespace-nowrap transition-all duration-300 font-light text-[#055e3142] group-hover:text-black group-hover:font-bold group-hover:text-xl sm:group-hover:text-2xl md:group-hover:text-[34px] text-center`}
                  >
                    {service.name}
                  </div>
                </a>
                {/* Right line - now extends to the edge, hidden on mobile */}
                <div className="hidden md:relative md:flex md:flex-grow md:flex-col md:items-end md:justify-center">
                  <div className="h-[2px] bg-[#055e31] transition-all duration-500 group-hover:ml-4 ml-0 opacity-0 group-hover:opacity-100 w-full"></div>
                  {/* Description above the right line, right-aligned - hidden on mobile */}
                  <div className="absolute -top-14 right-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 max-w-[420px] w-full">
                    <p className="text-sm text-black p-4 text-right">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mobile description - shown below the service name on mobile */}
              <div className="md:hidden w-full text-center mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm text-black px-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };