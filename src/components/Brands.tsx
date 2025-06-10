'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Abhirup Biswas",
    position: "Founder, Ab Graaph Studios",
    comment: "Working with JIVO Solutions was fantastic. They handled our video editing for cinematic reels, podcasts, and events, plus helped build our company portfolio. The team was professional, punctual, and always supportive. They met all deadlines and even worked extra hours when needed. Our clients love the quality of their work. I highly recommend them for creative and video solutions.",
    image: "/bradley.jpg", // Replace with your image path
  },
  {
    id: 2,
    name: "Nidhi",
    position: "Vastu Expert",
    comment: "JIVO Solutions has really helped me grow my brand online. Their team managed my social media, did performance marketing (both Meta and Google Ads), and planned amazing content shoots. Many of my reels have hit views in the millions, with one even crossing 83 million. They understand what works and make everything look and feel just right. I'm very happy with their work and highly recommend them.",
    image: "/bradley.jpg", // Replace with your image path
  },
  {
    id: 3,
    name: "Dr. Divya Marwaha",
    position: "Dentist",
    comment: "I loved working with JIVO Solutions. They managed my social media and did beautiful photo and video shoots for my clinic. The content was clean, professional, and perfect for my brand. Patients often say they found me through Instagram, and the page now feels more trusted and polished. Highly recommend them!",
    image: "/bradley.jpg", // Replace with your image path
  }
];

const Brands = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Use intersection observer for header section
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Use intersection observer for testimonials section
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });
  
  // Use intersection observer for navigation buttons
  const [navRef, navInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.section 
      className="pt-16 px-4 max-w-7xl mx-auto font-['Poppins',sans-serif]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="text-center mb-12"
        ref={headerRef}
        variants={staggerContainer}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        <motion.p 
          className="text-[#0A5C35] font-medium mb-2 text-sm tracking-wide"
          variants={fadeInUp}
        >
          Client Testimonials
        </motion.p>
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-4 text-black"
          variants={fadeInUp}
        >
          Brands That Grew With JIVO
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Here's what they have to say:
        </motion.p>
      </motion.div>

      <motion.div 
        className="flex flex-col md:flex-row gap-6 justify-center items-center"
        ref={testimonialsRef}
        variants={staggerContainer}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="cursor-pointer rounded-2xl p-4 sm:p-6 transition-all duration-300 max-w-md
              bg-white text-black border border-gray-200 hover:bg-[#0A5C35] hover:text-white hover:shadow-lg"
            variants={fadeInUp}
            custom={index}
            whileHover={{ 
              y: -15, 
              scale: 1.02,
              boxShadow: "0 25px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.p 
              className="text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {testimonial.comment}
            </motion.p>
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div>
                <motion.h4 
                  className="font-semibold text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {testimonial.name}
                </motion.h4>
                <motion.p 
                  className="text-xs sm:text-sm text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {testimonial.position}
                </motion.p>
              </div>
              <motion.div 
                className="ml-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <motion.span 
                    key={star} 
                    className="text-yellow-400 text-sm"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.3 }}
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Brands;