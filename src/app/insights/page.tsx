import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
export default function InsightsPage() {
  return (
    <div>
        <Navbar />
        <div className="w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="font-poppins font-bold text-white uppercase" 
              style={{ 
                fontSize: "42px", 
              }}>
            Insights
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

      {/* Blog Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-2 text-black">Jivo Solutions Blogs</h1>
        <p className="text-center text-black mb-8">People scroll fast. Your video has seconds to hook them.</p>
        
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-[#2B5741] text-white rounded-full">Popular</button>
          <button className="px-6 py-2 bg-gray-100 text-black rounded-full">Latest</button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src={`/jabout1.svg`}
                  alt="Blog thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-black mb-2">04 Mar, 2025</p>
                <h3 className="font-bold text-lg mb-2 text-black">EKKO Unplug N04 Neckband: Premium ENC, 40ms Latency, Max Bass</h3>
                <p className="text-sm text-black mb-4">Unleash the power of sound with the EKKO Unplug N04 Neckband, crafted for audiophiles who appreciate quality and innovation</p>
                <button className="w-full px-6 py-2 bg-gray-200 text-black rounded-full text-sm">Read More...</button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-[#2B5741] text-white rounded-full flex items-center gap-2">
            Loading More... <span>→</span>
          </button>
        </div>
      </div>

        <Footer />
    </div>
  );
}
