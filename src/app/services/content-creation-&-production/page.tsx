"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import CTAComponent from "../CTAComponent";

export default function InsightsPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

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

      {/* Powerful Visuals Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-black">Powerful visuals that bring your brand to life</h2>
          <p className="mb-4 text-black max-w-4xl mx-auto">
            In a digital world, high-quality content isn't optional. At JIVO Solutions, we offer professional photoshoots and production services that help you build a strong, authentic visual identity that connects, communicates, and converts.
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
            Whether it's your first brand shoot or a full-scale production for a product line, we bring creative direction, professional photography, and seamless execution.
          </p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6 text-black">High-quality visuals are one of the most effective tools for brand building. With the right content, you can:</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#0a5c35] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 009 7.794l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 0018 4.794l.813-2.846A.75.75 0 0118 1.5zM9 12.75a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 009 15.794l.813-2.846A.75.75 0 019 12.75z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-center mb-2 text-black">Create a Professional, Polished Brand Image</h4>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#0a5c35] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-center mb-2 text-black">Communicate Your Product or Service Value Instantly</h4>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#0a5c35] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-center mb-2 text-black">Build Trust and Credibility With Your Audience</h4>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#0a5c35] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-center mb-2 text-black">Stand Out on Platforms Like Instagram, LinkedIn, and Your Website</h4>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#0a5c35] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-center mb-2 text-black">Boost Ad Performance With Better-Quality Creative</h4>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#0a5c35] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-center mb-2 text-black">Tell Your Story Through Visuals That Feel Real and Relatable</h4>
          </div>
        </div>
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
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Lifestyle Shoots</span> (hospitality, wellness, education, fashion)</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Product shoots</span> (fmcg, d2c, skincare, food & beverage)</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Service-based brand shoots</span> (clinics, salons, consulting, fitness)</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Founders/team photoshoots</span> for brand storytelling</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">BTS And Workspace Shoots</span></p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Reels and video</span> content captured during shoots</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
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
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Instagram Captions</span></p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Website Copy</span> (Home, About, Services, Landing Pages)</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Blogs</span>, articles, and newsletters</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Scripts</span> for videos, reels, and interviews</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Ad Copy</span> For Facebook, Google, And LinkedIn Ads</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="min-w-6 w-6 h-6 flex items-center justify-center bg-[#0a5c35] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black"><span className="font-semibold">Email</span> Sequences And Announcement Copy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">Our Process</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We follow a clear, collaborative process to make every shoot efficient, on-brand, and results-driven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0a5c35] rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Discovery & Planning</h3>
            <p className="text-gray-700 text-sm">
              We start by understanding your brand identity, content goals, preferred style, and platform requirements. This helps us plan a shoot that aligns with your visual strategy.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#0a5c35] rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Pre-Production</h3>
            <p className="text-gray-700 text-sm">
              Our team handles everything, from creating detailed moodboards, scripting, sourcing props, to location scouting, talent booking, styling, and preparing the shot list.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#0a5c35] rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Shoot Day</h3>
            <p className="text-gray-700 text-sm">
              We execute the shoot with a skilled team managing direction, lighting setups, framing, and styling. Whether in-studio or on-location, we ensure quality and efficiency.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#0a5c35] rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Post-Production</h3>
            <p className="text-gray-700 text-sm">
              Your images go through professional retouching, color correction, and format optimization. We deliver high-resolution, web- and social-ready visuals in the formats you need.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose JIVO Section */}
      <div className="w-full px-4 py-16 bg-[#ECECEC]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-black">Why Choose JIVO for Content Creation & Production?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-[#0a5c35] rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 009 7.794l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 0018 4.794l.813-2.846A.75.75 0 0118 1.5zM9 12.75a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 009 15.794l.813-2.846A.75.75 0 019 12.75z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">High Quality Visuals</h3>
              <p className="text-gray-700 text-sm">
                Every photo is styled and shot to fit your brand tone, color palette, and messaging, ensuring brand consistency across all platforms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-[#0a5c35] rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Strategic Planning</h3>
              <p className="text-gray-700 text-sm">
                We shoot with purpose. Whether it's for a product launch, campaign, or website revamp, the content supports your marketing goals and channel strategy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-[#0a5c35] rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Production You Can Trust</h3>
              <p className="text-gray-700 text-sm">
                We use professional-grade cameras, lenses, lighting gear, and editing tools, so every visual looks sharp, polished, and campaign-ready.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-[#0a5c35] rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">One Point of Contact</h3>
              <p className="text-gray-700 text-sm">
                You'll work directly with a dedicated Account Manager who handles coordination, timelines, and approvals from start to finish.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-[#0a5c35] rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Platform-Ready Deliverables</h3>
              <p className="text-gray-700 text-sm">
                All final content is formatted for the right use, from Instagram Reels covers and LinkedIn banners to website sliders and print assets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-[#0a5c35] rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Fast Turnaround</h3>
              <p className="text-gray-700 text-sm">
                We know marketing doesn't wait. Our team is equipped to plan, shoot, and deliver professional-grade photos quickly, without compromising quality.
              </p>
            </div>
          </div>

          {/* CTA Button */}

        </div>
      </div>

      {/* CTA Section */}
      <CTAComponent
        title="Ready to Transform Your Content Creation?"
        description="Let's discuss how we can help your brand create powerful visuals and compelling content."
      />

      {/* Our Content Section */}
      {/* <div className="container mx-auto px-4 py-16">
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
      </div> */}

      {/* FAQ Section */}
      <section className="py-12 bg-gradient-to-b from-[#0a5c35]/5 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 font-poppins text-[#0a5c35]">
              FAQs
            </h2>
            <p className="text-gray-700 text-sm max-w-2xl mx-auto">
              Find answers to common questions about our content creation and production services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What kind of content do you create?",
                answer: "We produce high-quality visual content like photos, reels, and videos, along with written content including captions, website copy, blogs, and ad scripts."
              },
              {
                question: "Do you offer both photo and video shoots?",
                answer: "Yes, we handle full production, concept, direction, shooting, and post-editing for both photos and videos."
              },
              {
                question: "Can you work with us if we're in a different city?",
                answer: "Absolutely. We coordinate remote shoots using detailed shot lists, references, and brand-aligned direction."
              },
              {
                question: "What industries do you work with?",
                answer: "We've worked across hospitality, wellness, fashion, education, and more, adapting content to each niche."
              },
              {
                question: "Do you help plan the shoot as well?",
                answer: "Yes, we offer creative direction, moodboards, styling suggestions, and location planning before the shoot."
              },
              {
                question: "What kind of writing do you offer?",
                answer: "We write conversion-focused website copy, social captions, blogs, email sequences, and ad copy for Meta, Google, and LinkedIn."
              },
              {
                question: "Can I get both visuals and written content in one package?",
                answer: "Yes, we offer bundled packages with photo/video production and copywriting for a cohesive content strategy."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-3">
                <button
                  className={`w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group
                    ${openIndex === index 
                      ? 'bg-[#0a5c35] text-white shadow-lg' 
                      : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                    }`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-semibold text-sm transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`text-lg transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-[#0a5c35]'
                  }`}>
                    {openIndex === index ? '↑' : '↓'}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="p-3 bg-white mt-1 rounded-md shadow-md border border-[#0a5c35]/10">
                    <p className="text-gray-700 leading-relaxed text-xs">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
