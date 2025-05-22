'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SolutionCard {
  image: string;
  title: string;
  description: string;
}

const OurSol: React.FC = () => {
  const solutions: SolutionCard[] = [
    {
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=600&auto=format',
      title: 'Brand Identity & Design',
      description: 'Shape how your brand is seen, understood, and remembered.',
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format',
      title: 'Performance Marketing',
      description: 'Build high-performing digital foundations that convert and rank.',
    },
    {
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=600&auto=format',
      title: 'Content Creation & Prod.',
      description: 'Tell stories that connect, educate, and resonate with your audience.',
    },
    {
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format',
      title: 'Social Media Management',
      description: 'Show up consistently where your audience spends their time.',
    },
    {
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=600&auto=format',
      title: 'Website Development & SEO',
      description: 'Build high-performing digital foundations that convert and rank.',
    },
    {
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format',
      title: 'Video and Animation',
      description: 'Build high-performing digital foundations that convert and rank.',
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Use intersection observer for header section
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Use intersection observer for solutions section
  const [solutionsRef, solutionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-[#ECECEC] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={headerRef}
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-[#0A5C35] mb-2"
            variants={fadeInUp}
          >
            Our Solutions
          </motion.p>
          <motion.h2 
            className="text-4xl font-bold mb-4 text-black"
            variants={fadeInUp}
          >
            Everything you need<br />
            to be <span className="text-[#0A5C35]">seen</span> and <span className="text-[#0A5C35]">remembered</span>
          </motion.h2>
          <motion.p 
            className="text-gray-700"
            variants={fadeInUp}
          >
            We help brands build and scale their digital presence through:
          </motion.p>
        </motion.div>

        <motion.div 
          ref={solutionsRef}
          className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide max-w-full"
          variants={staggerContainer}
          initial="hidden"
          animate={solutionsInView ? "visible" : "hidden"}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="max-w-[275px] h-[480px] bg-white rounded-lg overflow-hidden shadow-lg flex-shrink-0 flex flex-col"
              variants={fadeInUp}
              custom={index}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 25px 30px -12px rgba(0, 0, 0, 0.15)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="relative h-60"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <motion.h3 
                    className="text-lg font-bold mb-2 text-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                  >
                    {solution.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 * index, duration: 0.5 }}
                  >
                    {solution.description}
                  </motion.p>
                </div>
                <motion.button 
                  className="flex items-center text-black hover:text-gray-700"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                  <motion.svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurSol;