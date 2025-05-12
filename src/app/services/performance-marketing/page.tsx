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
            Performance Marketing
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
      <div className="w-full px-4 py-16 text-center bg-[#ECECEC]">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">
          Reach The Right Audience With<br />
          The Right Message
        </h2>
        <p className="text-sm mb-8 max-w-3xl mx-auto text-black">
          In today's digital-first landscape, your brand's <span className="font-semibold">Social Media Presence</span> is often your <br />
          first and most important impression.
        </p>
        <p className="text-sm mb-12 mx-auto text-black">
          We help your brand run strategic, roi-driven campaigns across platforms where your customers are already active.
        </p>
        <h3 className="text-2xl font-semibold text-green-700 mb-8 ">
          We Manage And Optimize Paid Marketing Across:
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-6 py-2 bg-white rounded-full shadow text-black hover:bg-green-700 hover:text-white transition-colors duration-300">Google Ads</div>
          <div className="px-6 py-2 bg-white rounded-full shadow text-black hover:bg-green-700 hover:text-white transition-colors duration-300">Meta Ads</div>
          <div className="px-6 py-2 bg-white rounded-full shadow text-black hover:bg-green-700 hover:text-white transition-colors duration-300">YouTube Ads</div>
          <div className="px-6 py-2 bg-white rounded-full shadow text-black hover:bg-green-700 hover:text-white transition-colors duration-300">LinkedIn Ads</div>
        </div>
      </div>
      <section className="bg-[#ECECEC] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">
            What We Offer
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
    <div>
        <Image src="/choose.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-48 object-cover" priority />
    </div>

    <div className="flex justify-center items-center py-16">
            <Image src="/perf.svg" alt="Jivo Hero" width={1000} height={100} className=" h-full object-cover" priority />
        </div>
        <div className="flex justify-center items-center py-16 w-full">
            <Image src="/result.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
        </div>
        <Footer />
    </div>
  );
}
