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
  },
  {
    id: 4,
    name: "Sarika Nanda",
    position: "Business Owner",
    comment: "Working with JIVO Solutions has been such a great experience. They really took the time to understand what our brand is all about and designed everything from our logo to our full brand identity. The whole process was smooth and thoughtful, and the end result was exactly what we needed. They also manage our social media handles now, so I don't have to worry about a thing. It's made such a difference in how we show up as a business. I highly recommend JIVO!",
    image: "/bradley.jpg",
  },
  {
    id: 5,
    name: "Manisha Motarwar",
    position: "Business Owner",
    comment: "JIVO Solutions built our website and really understood our needs right from the first call. They explained the whole process clearly and were always there whenever we had a doubt or needed help. They're also handling our SEO, and we've already started getting more enquiries through the website. Really happy with how everything turned out.",
    image: "/bradley.jpg",
  },
  {
    id: 6,
    name: "Ambika Sood",
    position: "Business Owner",
    comment: "JIVO Solutions handles all our online platforms, Instagram, Facebook, and LinkedIn. They also run our Meta and Google ads. Since they started managing everything, we've seen a big difference. The leads we're getting now are actually relevant, and we've had real conversions from them. We used to struggle with getting the right audience, but now it feels like our marketing is finally working the way it should. They keep us in the loop and are quick to make changes whenever needed. It's been a really smooth experience.",
    image: "/bradley.jpg",
  }
];

const Brands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Get visible testimonials with wrapping
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < testimonialsPerPage; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();
  
  return (
    <motion.section 
      className="pt-8 px-4 max-w-7xl mx-auto font-['Poppins',sans-serif]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="text-center mb-8"
        ref={headerRef}
        variants={staggerContainer}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        <motion.p 
          className="text-[#0A5C35] font-medium mb-2 text-sm tracking-wide"
        >
          Client Testimonials
        </motion.p>
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-4 text-black"
        >
          Brands that grew with JIVO
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Here's what they have to say:
        </motion.p>
      </motion.div>

      <div className="relative">
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center items-stretch"
          ref={testimonialsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${currentIndex}`}
              className="cursor-pointer rounded-2xl p-4 sm:p-6 transition-all duration-300 flex-1 max-w-md
                bg-white text-black border border-gray-200 hover:bg-[#0A5C35] hover:text-white hover:shadow-lg flex flex-col"
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                boxShadow: "0 25px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
            >
              <motion.p 
                className="text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed flex-grow"
              >
                {testimonial.comment}
              </motion.p>
              <motion.div 
                className="flex items-center gap-3 mt-auto"
              >
                <div>
                  <motion.h4 
                    className="font-semibold text-sm sm:text-base"
                  >
                    {testimonial.name}
                  </motion.h4>
                  <motion.p 
                    className="text-xs sm:text-sm text-black"
                  >
                    {testimonial.position}
                  </motion.p>
                </div>
                <motion.div 
                  className="ml-auto"
                >
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <motion.span 
                      key={star} 
                      className="text-yellow-400 text-sm"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-[#0A5C35] hover:text-white transition-all duration-300"
          aria-label="Previous testimonials"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-[#0A5C35] hover:text-white transition-all duration-300"
          aria-label="Next testimonials"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.section>
  );
};

export default Brands;