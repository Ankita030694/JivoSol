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
            Content Creation & Production
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

      {/* Visual Content Creation Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">Visual Content Creation</h2>
          <p className="text-black">
            We handle full production across industries, from concept to shoot to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 px-48">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Lifestyle Shoots</span> (hospitality, wellness, education, fashion)</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Product shoots</span> (fmcg, d2c, skincare, food & beverage)</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Service-based brand shoots</span> (clinics, salons, consulting, fitness)</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Founders/team photoshoots</span> for brand storytelling</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">BTS And Workspace Shoots</span></p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Reels and video</span> content captured during shoots</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Styled content</span> for instagram grids, stories, and ads</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-24">
          <Image src="/jabout1.svg" alt="About Example 1" width={300} height={300} className="rounded-lg shadow-lg w-full aspect-square object-cover" />
          <Image src="/jabout2.svg" alt="About Example 2" width={300} height={300} className="rounded-lg shadow-lg w-full aspect-square object-cover" />
          <Image src="/jabout3.svg" alt="About Example 3" width={300} height={300} className="rounded-lg shadow-lg w-full aspect-square object-cover" />
          <Image src="/jabout4.svg" alt="About Example 4" width={300} height={300} className="rounded-lg shadow-lg w-full aspect-square object-cover" />
        </div>
      </div>

      {/* Written Content Creation Section */}
      <div className="w-full px-4 py-16 bg-[#ECECEC]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">Written Content Creation</h2>
          <p className="text-black">
            We write content that reflects your tone, informs your audience,
            and drives action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 px-48">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Instagram Captions</span></p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Website Copy</span> (Home, About, Services, Landing Pages)</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Blogs</span>, articles, and newsletters</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Scripts</span> for videos, reels, and interviews</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Ad Copy</span> For Facebook, Google, And LinkedIn Ads</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-green-600 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Email</span> Sequences And Announcement Copy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Content Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Image 
            src="/cc.png" 
            alt="Content Example 1" 
            width={300} 
            height={400} 
            className="w-full rounded-lg shadow-lg"
          />
          <Image 
            src="/cc.png" 
            alt="Content Example 2" 
            width={300} 
            height={400} 
            className="w-full rounded-lg shadow-lg"
          />
          <Image 
            src="/cc.png" 
            alt="Content Example 3" 
            width={300} 
            height={400} 
            className="w-full rounded-lg shadow-lg"
          />
          <Image 
            src="/cc.png" 
            alt="Content Example 4" 
            width={300} 
            height={400} 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
