import React from 'react';
import Image from 'next/image';

interface SolutionCard {
  image: string;
  title: string;
  description: string;
}

const OurSol: React.FC = () => {
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
    <section className="bg-[#ECECEC] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-green-700 mb-2">Our Solutions</p>
          <h2 className="text-4xl font-bold mb-4 text-black">
            Everything you need<br />
            to be seen and remembered.
          </h2>
          <p className="text-gray-700">
            We Help Brands Build And Scale Their Digital Presence Through:
          </p>
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
  );
};

export default OurSol;