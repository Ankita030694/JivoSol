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
        <h1 className="text-center text-6xl font-extrabold font-['Poppins',Helvetica] leading-[69.2px] mb-12">
          <span className="text-black">Everything you need to be </span>
          <span className="text-[#055e31]">seen</span>
          <span className="text-black"> and </span>
          <span className="text-[#055e31]">remembered</span>
        </h1>

        <p className="text-xl text-[#596475] font-['Poppins',Helvetica] text-center mb-16">
          We help brands build and scale their digital presence through:
        </p>

        <div className="relative flex flex-col items-center space-y-8">
          {services.map((service, index) => (
            <div key={index} className="group relative flex items-center w-full">
              <div className="absolute w-screen h-[1px] left-1/2 -translate-x-1/2 flex justify-between pointer-events-none">
                <div className="w-0 h-full bg-[#055e31] group-hover:w-[25vw] transition-all duration-500 origin-right"></div>
                <div className="w-0 h-full bg-[#055e31] group-hover:w-[25vw] transition-all duration-500 origin-left"></div>
              </div>
              
              {/* Description box that appears on hover */}
              <div className="absolute right-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform translate-x-[calc(50%+1rem)] top-1/2 -translate-y-1/2">
                <div className="text-black w-[300px] bg-white/90 p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500">
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>

              <div className="flex items-center w-full mx-auto">
                <div className="w-56 flex justify-start items-center">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    width={64}
                    height={64}
                  />
                </div>
                
                <a
                  href={service.link}
                  className="flex-grow text-center transition-all duration-300"
                >
                  <div
                    className={`font-['Poppins',Helvetica] text-[40px] leading-[46.2px] whitespace-nowrap transition-all duration-300 ${
                      service.highlighted || "group-hover:"
                    }font-semibold ${
                        service.highlighted || "group-hover:"
                      }text-black group-hover:text-[44px] group-hover:font-bold ${
                      !service.highlighted && "font-light text-[#055e3142] hover:text-black"
                    }`}
                  >
                    {service.name}
                  </div>
                </a>
                
                <div className="w-24"></div> {/* Spacer for balance */}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-[456px]">
          <img
            className="w-[472px] h-px object-cover"
            alt="Line"
            src="/line-1.svg"
          />
        </div>
      </section>
    );
  };