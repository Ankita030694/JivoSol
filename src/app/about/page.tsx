import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
interface SolutionCard {
    image: string;
    title: string;
    description: string;
  }
export default function InsightsPage() {
    const solutions: SolutionCard[] = [
        {
          image: '/jabout1.svg',
          title: 'Brand Identity & Design',
          description: 'Shape how your brand is seen, understood, and remembered.',
        },
        {
          image: '/jabout2.svg',
          title: 'Website Development & SEO',
          description: 'Build high-performing digital foundations that convert and rank.',
        },
        {
          image: '/jabout3.svg',
          title: 'Content Creation & Prod.',
          description: 'Tell stories that connect, educate, and resonate with your audience.',
        },
        {
          image: '/jabout4.svg',
          title: 'Social Media Management',
          description: 'Show up consistently where your audience spends their time.',
        },
        {
            image: '/jabout2.svg',
            title: 'Website Development & SEO',
            description: 'Build high-performing digital foundations that convert and rank.',
          },
      ];
  return (
    <div>
      <Navbar />
      <div className="w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1
            className="font-poppins font-bold text-white uppercase"
            style={{
              fontSize: "42px",
            }}
          >
            About Us
          </h1>
        </div>
        <Image
          src="/jivobn1.svg"
          alt="Jivo Hero"
          width={1000}
          height={100}
          className="w-full h-48 object-cover"
          priority
        />
      </div>

      {/* Founder Section */}
      <div className="w-full py-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 px-12">
          <h2 className="text-4xl font-bold mb-2 text-black">Aakanksha Chugh</h2>
          <p className="text-xl mb-6 text-black">Founder</p>
          
          <p className="text-sm mb-6 text-black">
            I Am Aakanksha Chugh, Founder Of JIVO Solutions <span className="italic">(formerly &apos;zeminik solutions&apos;)</span>
          </p>
          
          <p className="text-sm mb-6 text-black">
            With over three years in the digital marketing industry, I&apos;ve led brand strategy and execution for more than 50 businesses across hospitality, wellness, education, luxury, lifestyle and more. My academic background in Accounting And Finance from the University of London has given me a strong foundation in business thinking, which i bring into every creative decision and strategic framework we build at JIVO
          </p>
          
          <p className="text-sm mb-6 text-black">
            What started as a passion for helping brands communicate better has evolved into a purpose driven company focused on visibility as a growth driver. we&apos;ve worked with clients across India, the UAE, London, Australia and more, delivering digital solutions that are thoughtful, tailored and results oriented.
          </p>
          
          <p className="text-sm mb-6 text-black">
            I built JIVO to help ambitious brands take control of how they&apos;re seen because if what you&apos;ve built matters, the world should experience it that way.
          </p>
          
            <p className="text-sm italic mb-4 text-black">
            &quot;I&apos;ve seen too many great brands stay invisible for the wrong reasons. At JIVO, we exist to make sure that never happens.&quot;
          </p>
          
          <p className="text-sm text-black">
            - Aakanksha Chugh
          </p>
        </div>
        
        <div className="relative w-full md:w-1/2 h-[600px]">
          <div className="relative w-full h-[80%] mt-8">
            <Image
              src="/image3.png"
              alt="Founder"
              fill
              className="object-cover rounded-lg rounded-r-none"
              style={{
                clipPath: 'inset(0 0 0 0 round 16px 0 0 16px)'
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 bg-[#ECECEC] p-12">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-sm text-black">Brands Transformed</p>
            <p className="text-[#0A5C35] text-5xl font-bold">105+</p>
          </div>
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white p-8 rounded-lg">
              <p className="text-sm text-black">Clients Across The Globe</p>
              <p className="text-[#0A5C35] text-5xl font-bold">200+</p>
            </div>
          ))}
        </div>

        <div className="w-full py-16 flex flex-col md:flex-row items-center justify-center text-center px-80">
          <div className="w-full px-12">
            <h2 className="text-4xl font-bold mb-2 text-black">The Meaning Behind JIVO</h2>
            {/* <p className="text-xl mb-6 text-black">Founder</p> */}
            
            <p className="text-sm mb-6 text-black mt-5">
            JIVO is derived from the Sanskrit word <b>'Jeevan'</b>, which means <b>'Life'</b>. 
            </p>
            
            <p className="text-sm mb-6 text-black">
              At JIVO, we believe digital presence is life for any brand. In a world where online visibility determines credibility, your first impression is almost always digital. 
              Without strong visibility, even great brands get overlooked.
            </p>
            
            <p className="text-sm mb-6 text-black">
              JIVO was created to change that.
            </p>
            
            <p className="text-sm mb-6 text-black">
              We bring life to your business through strategic, high-impact digital solutions designed to make you seen, remembered, and trusted.
            </p>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="w-full bg-[#0A5C35] text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Who We Are?</h2>
            
            <p className="mb-8">
              JIVO solutions is a digital solutions company committed to helping brands become visible, relevant, and trusted in the digital world. we build end-to-end digital ecosystems tailored to each brand's vision, combining strategy, design, content, and performance to create a presence that drives growth.
            </p>

            <p className="mb-8">
              With over three years of hands-on experience and a portfolio of 50+ brands across hospitality, education, wellness, healthcare, lifestyle, and luxury and more, we understand how to translate business objectives into digital visibility that delivers results. from emerging startups to global businesses, our clients trust us to translate their business goals into high-performing digital ecosystems.
            </p>

            <p className="mb-8">
              our vision is to make digital visibility a strategic advantage, not just a byproduct of being online.
            </p>

            <p className="mb-8">
              We bring together branding, website development, seo, content marketing, social media management, and performance marketing into cohesive digital strategies that are built for long-term growth.
            </p>

            <p className="mb-4">
              At JIVO, we build presence with purpose.
            </p>

            <p className="italic">
              | because being online isn't enough anymore, being visible in the right way is everything.
            </p>
          </div>
        </div>
        <section className="bg-[#ffffff] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Services
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="max-w-[275px] h-[480px] bg-white rounded-lg overflow-hidden shadow-lg flex-shrink-0 flex flex-col"
            >
              <div className="relative h-60">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-black">{solution.title}</h3>
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                </div>
                <button className="flex items-center text-black hover:text-gray-700">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        <Footer />
    </div>
  );
}
