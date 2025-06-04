"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

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
              Frequently Asked Questions
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
