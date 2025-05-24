import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

interface SolutionCard {
  image: string;
  title: string;
  description: string;
}
export default function InsightsPage() {
  const solutions: SolutionCard[] = [
    {
      image: "/jabout1.svg",
      title: "Brand Identity & Design",
      description: "Shape how your brand is seen, understood, and remembered.",
    },
    {
      image: "/jabout2.svg",
      title: "Website Development & SEO",
      description:
        "Build high-performing digital foundations that convert and rank.",
    },
    {
      image: "/jabout3.svg",
      title: "Content Creation & Prod.",
      description:
        "Tell stories that connect, educate, and resonate with your audience.",
    },
    {
      image: "/jabout4.svg",
      title: "Social Media Management",
      description:
        "Show up consistently where your audience spends their time.",
    },
    {
      image: "/jabout2.svg",
      title: "Website Development & SEO",
      description:
        "Build high-performing digital foundations that convert and rank.",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
          <h1
            className="font-poppins font-bold text-white uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[42px]"
          >
            Performance Marketing
          </h1>
        </div>
        <Image
          src="/jivobn1.svg"
          alt="Jivo Hero"
          width={1000}
          height={100}
          className="w-full h-36 sm:h-48 object-cover"
          priority
        />
      </div>
      <div
        className="w-full px-4 py-8 md:py-16 flex justify-center items-center"
        style={{ backgroundImage: "url('/perfmark.png')" }}
      >
        <Image
          src="/herounder.svg"
          alt="Jivo Hero"
          width={300}
          height={100}
          className="w-3/4 md:w-1/2 object-contain"
          priority
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <Image
          src="/heround2.svg"
          alt="Jivo Hero"
          width={300}
          height={100}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <div>
        <Image
          src="/heround3.svg"
          alt="Jivo Hero"
          width={1000}
          height={100}
          className="w-full h-36 sm:h-48 object-contain md:object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-black">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Bing Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Bing Ads
              </h2>
              <Image src="/bing.svg" alt="Bing Logo" width={32} height={32} />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              Microsoft's bing search engine has more than 936 million unique
              monthly visitors! tap into this audience with adlift's bing ads
              services that include advanced targeting, ad scheduling, keyword
              research, ad copy, a/b testing, and budget control.
            </p>
          </div>

          {/* Facebook Advertising */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Facebook Advertising
              </h2>
              <Image src="/fb.svg" alt="Facebook Logo" width={32} height={32} />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              Be seen and heard on the world's largest social media network. our
              facebook advertising services include advanced targeting options,
              personalized ad creation, and retargeting website visitors to
              increase conversions and sales.
            </p>
          </div>

          {/* Google Display Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Google Display Ads
              </h2>
              <Image
                src="/da.svg"
                alt="Google Display Logo"
                width={32}
                height={32}
              />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              Advertise on a network of over two million websites, videos, and
              apps with our google display ads services. utilizing a wide range
              of ad formats and targeting options we create highly engaging and
              relevant ads to reach your target audience.
            </p>
          </div>

          {/* Google Paid Search */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Google Paid Search
              </h2>
              <Image
                src="/google.svg"
                alt="Google Logo"
                width={32}
                height={32}
              />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              We offer google paid search services, also known as google ads, to
              help you advertise on google serps. our google paid search
              services include keyword research, bid management, and ad creation
              to target users looking for products/services similar to what you
              offer.
            </p>
          </div>

          {/* Instagram Advertising */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Instagram Advertising
              </h2>
              <Image
                src="/insta.svg"
                alt="Instagram Logo"
                width={32}
                height={32}
              />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              We offer google paid search services, also known as google ads, to
              help you advertise on google serps. our google paid search
              services include keyword research, bid management, and ad creation
              to target users looking for products/services similar to what you
              offer.
            </p>
          </div>

          {/* LinkedIn PPC Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                LinkedIn PPC Ads
              </h2>
              <Image
                src="/linekdin.svg"
                alt="LinkedIn Logo"
                width={32}
                height={32}
              />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              We offer google paid search services, also known as google ads, to
              help you advertise on google serps. our google paid search
              services include keyword research, bid management, and ad creation
              to target users looking for products/services similar to what you
              offer.
            </p>
          </div>

          {/* Remarketing Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Remarketing Ads
              </h2>
              <Image
                src="/market.svg"
                alt="Remarketing Logo"
                width={32}
                height={32}
              />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              We offer google paid search services, also known as google ads, to
              help you advertise on google serps. our google paid search
              services include keyword research, bid management, and ad creation
              to target users looking for products/services similar to what you
              offer.
            </p>
          </div>

          {/* Shopping Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                Shopping Ads
              </h2>
              <Image
                src="/bag.svg"
                alt="Shopping Logo"
                width={32}
                height={32}
              />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              We offer google paid search services, also known as google ads, to
              help you advertise on google serps. our google paid search
              services include keyword research, bid management, and ad creation
              to target users looking for products/services similar to what you
              offer.
            </p>
          </div>

          {/* YouTube Video Ads */}
          <div className="border rounded-lg p-4 md:p-6 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                YouTube Video Ads
              </h2>
              <Image src="/yt.svg" alt="YouTube Logo" width={32} height={32} />
            </div>
            <p className="mt-4 text-black text-sm md:text-base">
              Advertise on the world's largest video-sharing site with our
              youtube video ads services. we create engaging video ads in
              various formats, such as skippable ads, non-skippable ads, and
              bumper ads, banner ads to reach your target audience.
            </p>
          </div>
        </div>
      </div>
           
      <div className="bg-[#ECECEC] px-4 py-8 md:p-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-black">
          Our PPC Case Studies
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-10">
          {/* Case Study 1 - Nidhi Chugh */}
          <div className="bg-white rounded-lg overflow-hidden shadow transform transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="relative h-48">
              <Image 
                src="/casestudies/ncdp.jpg" 
                alt="Nidhi Chugh Case Study" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <span className="bg-[#0A5C35] text-white px-3 py-1 rounded-full text-sm">Featured</span>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                <Image 
                  src="/casestudies/ncpost.png"
                  alt="Nidhi Chugh"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h3 className="font-medium text-gray-800">Nidhi Chugh</h3>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">83M+</h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Global spiritual brand growth through Meta Ads, Google Ads & YouTube
              </p>
              <Link 
                href="/services/performance-marketing/case-study-1" 
                className="flex items-center text-[#0A5C35] font-medium text-sm md:text-base group"
              >
                See Case Study
                <svg 
                  className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Case Study 2 - WitWise Education */}
          <div className="bg-white rounded-lg overflow-hidden shadow transform transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="relative h-48">
              <Image 
                src="/casestudies/witwise-hero.jpg" 
                alt="WitWise Education Case Study" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                <Image 
                  src="/casestudies/witwise-overview.jpg"
                  alt="WitWise Education"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h3 className="font-medium text-gray-800">WitWise Education</h3>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">2000+</h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Driving quality leads through strategic Meta advertising
              </p>
              <Link 
                href="/services/performance-marketing/case-study-2" 
                className="flex items-center text-[#0A5C35] font-medium text-sm md:text-base group"
              >
                See Case Study
                <svg 
                  className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Case Study 3 - Yashi Shukla Education */}
          <div className="bg-white rounded-lg overflow-hidden shadow transform transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="relative h-48">
              <Image 
                src="/casestudies/yashi-hero.jpg" 
                alt="Yashi Shukla Education Case Study" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                <Image 
                  src="/casestudies/yashi-overview.jpg"
                  alt="Yashi Shukla Education"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h3 className="font-medium text-gray-800">Yashi Shukla Education</h3>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">1000+</h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Global education marketing success through multi-platform strategy
              </p>
              <Link 
                href="/services/performance-marketing/case-study-3" 
                className="flex items-center text-[#0A5C35] font-medium text-sm md:text-base group"
              >
                See Case Study
                <svg 
                  className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Case Study 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow">
            <Image 
              src="/case-study-4.jpg" 
              alt="Case Study 4" 
              width={400} 
              height={300}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">24%</h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Full-funnel paid marketing strategies built for your business goals
              </p>
              <button className="flex items-center text-black font-medium text-sm md:text-base">
                See Case Study
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          <button className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center">
            <span className="sr-only">Previous</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-green-200 text-green-800 flex items-center justify-center">
            <span className="sr-only">Next</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
