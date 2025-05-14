'use client'
import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 2,
    name: "Bradley Gordon",
    position: "CEO & Founder",
    comment: "A studio with passionate, professional and full creativity. much more than i'm expect. great services, high quality products & affordable prices. i'm extremely satisfied!.",
    image: "/bradley.jpg", // Replace with your image path
  },
  {
    id: 1,
    name: "Bradley Gordon",
    position: "CEO & Founder",
    comment: "A studio with passionate, professional and full creativity. much more than i'm expect. great services, high quality products & affordable prices. i'm extremely satisfied!.",
    image: "/bradley.jpg", // Replace with your image path
  },
  {
    id: 3,
    name: "Bradley Gordon",
    position: "CEO & Founder",
    comment: "A studio with passionate, professional and full creativity. much more than i'm expect. great services, high quality products & affordable prices. i'm extremely satisfied!.",
    image: "/bradley.jpg", // Replace with your image path
  },
  
  // Add more testimonials as needed
];

const Brands = () => {
    // Removed activeCard state as we're using hover instead
  
    return (
      <section className="pt-16 px-4 max-w-7xl mx-auto font-['Poppins',sans-serif]">
        <div className="text-center mb-12">
          <p className="text-[#0A5C35] font-medium mb-2 text-sm tracking-wide">Client Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">Brands That Grew With JIVO.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Here's What They Have To Say.</p>
        </div>
  
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="cursor-pointer rounded-2xl p-4 sm:p-6 transition-all duration-300 max-w-md
                bg-white text-black border border-gray-200 hover:bg-[#0A5C35] hover:text-white hover:shadow-lg"
            >
              <p className="text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">"{testimonial.comment}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/80">
                    {testimonial.position}
                  </p>
                </div>
                <div className="ml-auto">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-10 h-10 rounded-full bg-[#0A5C35] text-white flex items-center justify-center shadow-sm hover:bg-[#0A5C35]/90 transition-colors">
            ←
          </button>
          <button className="w-10 h-10 rounded-full bg-[#0A5C35]/20 text-[#0A5C35] flex items-center justify-center border border-[#0A5C35]/30 hover:bg-[#0A5C35]/30 transition-colors">
            →
          </button>
        </div>
      </section>
    );
  };

export default Brands;