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
            Social Media Management
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
      <div className="py-16 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">
          Be Seen Where It Matters Most
        </h2>
        <p className="mb-2 text-black">
        In today's digital-first landscape, your brand's social media presence is often your first and most important impression.
        </p>
        <p className="mb-6 text-black">We manage and grow your brand across all leading platforms:
        </p>

        <div className="flex justify-center gap-4 mb-12">
          {["Instagram", "Facebook", "YouTube", "LinkedIn", "Pinterest", "Twitter", "Threads"].map(
            (platform) => (
              <button
                key={platform}
                className="px-6 py-2 rounded-full border border-emerald-700 relative overflow-hidden group"
              >
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                  {platform}
                </span>
                <div className="absolute inset-0 bg-emerald-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              </button>
            )
          )}
        </div>

        

        {/* Image grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-64">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={`/jabout${num}.svg`}
                alt={`Portfolio image ${num}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Carousel Navigation - moved outside the grid */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        {/* Web Development Projects Section */}
      </div>
      {/* Why Choose JIVO Section */}
      <div className="bg-[#0A5C35] text-white py-16 px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose JIVO as<br />Your Social Media Partner?
          </h2>
          <p className="mb-8">Here's What Sets Us Apart:</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <p className="text-start text-xs">Comprehensive execution spanning ideation, production, and publishing</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <p className="text-start text-xs">Cohesive visual and verbal branding tailored to your market positioning</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <p className="text-start text-xs">Efficient systems and fast turnaround</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <p className="text-start text-xs">Trusted by 105+ brands across hospitality, lifestyle, education, wellness, and more</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <p className="text-start text-xs">Strategy-driven content crafted to achieve defined objectives</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <p className="text-start text-xs">High-quality content built to perform</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-16">
            <Image src="/process.svg" alt="Jivo Hero" width={1000} height={100} className=" h-full object-cover" priority />
        </div>

        <div className="flex justify-center items-center py-16 w-full">
            <Image src="/result.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
        </div>
        <Footer />
    </div>
  );
}
