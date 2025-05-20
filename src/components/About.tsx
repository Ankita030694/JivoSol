'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const images = [
    '/jabout1.svg',
    '/jabout2.svg',
    '/jabout3.svg',
    '/jabout4.svg',
  ];
  
  // Add client names corresponding to each image
  const clientNames = [
    'Client One',
    'Client Two',
    'Client Three', 
    'Client Four',
    'Client Five'
  ];

  // Animation variants for different sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Use intersection observer for scroll animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 px-4 text-center overflow-hidden">
      {/* About Us Header */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-4">
        <h3 className="text-[#005F33] font-poppins">About Us</h3>
      </motion.div>

      {/* Main Title */}
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl font-bold mb-6 text-black">
        We are JIVO Solutions
      </motion.h2>

      {/* Description Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-4xl mx-auto mb-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-700 mb-1">
          A <b>Digital Solutions Company</b> focused on building strategic visibility for brands that are ready to grow.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-gray-700 mb-8 max-w-3xl text-center mx-auto">
          With 3+ years of experience and over 50 brands served across industries and regions, we create cohesive digital ecosystems that align Content, Design, Performance, and Strategy.
        </motion.p>
      </motion.div>

      {/* Learn More Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}>
        <Link 
          href="/about"
          className="inline-flex items-center bg-[#005F33] text-white px-6 py-3 rounded-full mb-16 hover:bg-[#004525] transition-colors"
        >
          Learn More
          <motion.svg 
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </Link>
      </motion.div>

      {/* Image Grid */}
      <motion.div 
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex justify-center gap-4 overflow-x-auto px-2">
        {images.map((image, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            custom={index}
            className="relative w-[315px] h-[560px] rounded-2xl overflow-hidden flex-shrink-0 group"
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={image}
              alt={`Team member ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <motion.div 
              className="absolute inset-x-0 bottom-0 h-3/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p 
                className="text-white px-4 pb-4 font-medium"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {clientNames[index]}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Our Work Button */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}>
          <Link 
            href="/work"
            className="inline-flex items-center bg-[#005F33] text-white px-6 py-3 rounded-full hover:bg-[#004525] transition-colors"
          >
            Our Work
            <motion.svg 
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 