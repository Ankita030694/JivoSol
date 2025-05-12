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
            Brand Identity & Design
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
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Shape How Your Brand Is Seen, Understood, And Remembered
          </h2>
          <p className="text-md text-gray-600 mb-6">
            your brand identity is not just how you look — it's how you're remembered.
          </p>
          <p className="text-md text-gray-600">
            At JIVO, we build sharp, strategic visual systems that define your presence and make it impossible to ignore.
          </p>
        </div>
      </div>

      <div className="px-48 py-16 bg-[#ECECEC]">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">What We Offer</h2>
          <p className="text-gray-600 mb-8 text-black">
            We offer end-to-end branding services, from concept to final delivery — across <br /> digital, print, and real-world experiences.
          </p>
          
          <h3 className="text-2xl font-bold mb-6 text-black">We Manage And Optimize Paid Marketing Across:</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group">
              <span className="relative z-10 group-hover:text-white transition-colors">Logo designing & branding</span>
              <div className="absolute top-0 left-0 h-full w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
            <button className="px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group">
              <span className="relative z-10 group-hover:text-white transition-colors">Event & print design</span>
              <div className="absolute top-0 left-0 h-full w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
            <button className="px-6 py-2 rounded-full border border-green-700 hover-fill-effect relative overflow-hidden transition-colors text-black group">
              <span className="relative z-10 group-hover:text-white transition-colors">Brand Stationery Kit</span>
              <div className="absolute top-0 left-0 h-full w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {[
              "Concept development and mood boarding",
              "Typography hierarchy and usage",
              "Multiple logo concepts + revisions",
              "Iconography or custom elements (if applicable)",
              "Primary and secondary logo versions",
              "Brand guideline document (tone of voice, usage rules, logo placement)",
              "Brand color palette",
              "Final delivery in all formats (print and digital)",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-green-700">✓</span>
                <span className="text-black text-sm text-start">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <Image
                key={num}
                src={`/jabout${num}.svg`}
                alt={`Brand Example ${num}`}
                width={300}
                height={300}
                className="w-full aspect-square object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-16 w-full px-48">
            <Image src="/process2.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
        </div>

      <div className="flex justify-center items-center py-16 w-full">
            <Image src="/result.svg" alt="Jivo Hero" width={1000} height={100} className="w-full h-full object-cover" priority />
        </div>
        <Footer />
    </div>
  );
}
