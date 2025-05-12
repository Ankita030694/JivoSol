import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
export default function InsightsPage() {
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
            Web Development & SEO
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

      {/* Content Section */}
      <div className="bg-[#ECECEC] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Your Website Is Your Brand's <br /> Digital Home
          </h2>
          <p className="text-md mb-12 text-black">
            At JIVO, we design and develop fast, functional, and search-optimized websites that
            are easy to navigate, easy to find, and built to convert.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#006B3F]">We Build On</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['WordPress', 'Webflow', 'Shopify', 'HTML/CSS', 'React'].map((tech) => (
                <button
                  key={tech}
                  className="px-6 py-2 rounded-full bg-white text-black 
                    relative overflow-hidden group transition-colors duration-300
                    hover:text-white"
                >
                  <span className="relative z-10">{tech}</span>
                  <div className="absolute inset-0 bg-[#006B3F] transform -translate-x-full 
                    group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-16 w-full px-48">
            <Image src="/specialize.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
        </div>

      <div className="flex justify-center items-center py-16 w-full">
            <Image src="/result.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
        </div>

      <Footer />
    </div>
  );
}
