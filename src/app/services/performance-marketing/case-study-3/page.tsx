import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFacebookF, FaInstagram, FaGoogle, FaGraduationCap, FaCheckCircle, FaRocket, FaChartBar, FaUsers, FaTrophy } from "react-icons/fa";

export default function CaseStudyPage() {
  const objectives = [
    "Generate qualified leads for 1-on-1 consultations, webinars, and seminars",
    "Build brand visibility across Instagram and student-centric digital platforms",
    "Increase engagement-to-conversion rate from ads to counseling sessions"
  ];

  const platforms = [
    { icon: FaFacebookF, name: "Meta Ads", color: "bg-blue-500" },
    { icon: FaGoogle, name: "Google Ads", color: "bg-red-500" },
    { icon: FaInstagram, name: "Instagram Growth", color: "bg-pink-500" },
    { icon: FaGraduationCap, name: "Education", color: "bg-purple-500" },
  ];

  const results = [
    { metric: "1,100+", description: "Qualified leads generated", icon: FaUsers },
    { metric: "4.17%", description: "Average CTR", icon: FaChartBar },
    { metric: "₹11.85", description: "Cost per Click", icon: FaTrophy },
    { metric: "₹343", description: "Cost per Lead", icon: FaRocket },
  ];

  const instagramMetrics = [
    { metric: "5,000+", description: "New followers in 3 months" },
    { metric: "1M+", description: "Reels impressions" },
    { metric: "3x", description: "Increase in inbound DMs" },
    { metric: "High", description: "Reel engagement impact" },
  ];

  const challenges = [
    {
      challenge: "Ad Fatigue in Summer Months",
      solution: "Introduced intake-specific content (Fall/Spring timelines)"
    },
    {
      challenge: "Low Instagram Engagement Initially",
      solution: "Deployed reels, live Q&As, and infographics to re-engage the audience"
    },
    {
      challenge: "Last-Minute Webinar Drop-offs",
      solution: "Added automation + countdown flows to improve attendance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-[#0A5C35] to-[#0B4619]">
        <div className="absolute inset-0">
          <Image
            src="/perfmark/casestudy3/Cover Image YSE.jpg"
            alt="Yashi Shukla Education Case Study"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-white mr-3 text-3xl" />
              <span className="text-white/90 text-lg font-medium">Case Study</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Yashi Shukla Education: Study Abroad Lead Generation & Awareness Campaign
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              A leading overseas education advisory firm specializing in personalized guidance for students aspiring to study abroad. Discover how we built a scalable lead generation funnel and boosted brand awareness.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <button className="bg-[#0A5C35] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0B4619] transition-all duration-300 flex items-center">
                  Get Similar Results <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0A5C35]">1. Introduction</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Yashi Shukla Education is a leading overseas education advisory firm specializing in personalized guidance for students aspiring to study abroad. Their services include profile building, SOP review, counseling, and pre-departure sessions.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                JIVO Solutions was engaged to build a lead generation funnel and boost brand awareness using data-driven Meta and Google ad strategies.
              </p>
              <div className="flex gap-4">
                {platforms.map((platform, index) => (
                  <div key={index} className={`${platform.color} p-3 rounded-full text-white`}>
                    <platform.icon size={24} />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/perfmark/casestudy3/Copy of yashi 1.png"
                alt="Yashi Shukla Education Overview"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#0A5C35]">2. Objectives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <FaCheckCircle className="text-[#0A5C35] text-4xl mx-auto mb-4" />
                <p className="text-gray-700 font-medium">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campaign Strategy */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#0A5C35]">3. Campaign Strategy</h2>
          
          {/* Meta Ads Strategy */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#0B4619] flex items-center">
                  <FaFacebookF className="mr-3 text-blue-500" />
                  Meta Ads (Facebook & Instagram)
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Targeting Strategy:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Age groups: Students (17–25), Parents (35–50)</li>
                      <li>• Interests: Study Abroad, IELTS/TOEFL, Ivy League, College Admissions</li>
                      <li>• Locations: Tier 1 & Tier 2 cities across India</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Creative Strategy:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>🎥 Reels: Real student journeys, application tips, testimonials</li>
                      <li>📚 Carousels: "Top 5 Scholarships for 2025," "Timeline to Apply"</li>
                      <li>📢 Stories: Swipe-up polls, event countdowns, Q&A snippets</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative h-[350px]">
                <Image
                  src="/perfmark/casestudy3/Copy of yashi 2.png"
                  alt="Meta Ads Strategy"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Google Ads Strategy */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[350px] order-2 md:order-1">
                <Image
                  src="/perfmark/casestudy3/Copy of yashi 3.png"
                  alt="Google Ads Strategy"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-6 text-[#0B4619] flex items-center">
                  <FaGoogle className="mr-3 text-red-500" />
                  Google Ads (Search + Display)
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Keywords:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• "Study abroad consultants near me"</li>
                      <li>• "How to apply to US/UK universities"</li>
                      <li>• "Overseas education counseling"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Ad Formats:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Responsive Search Ads</li>
                      <li>• Smart Display Retargeting</li>
                      <li>• Call Extensions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Location Focus:</h4>
                    <p className="text-gray-600">Delhi NCR, Pune, Bangalore, Hyderabad, Mumbai, Chandigarh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#0A5C35]">5. Results & Insights</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {results.map((result, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <result.icon className="text-[#0A5C35] text-4xl mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-[#0B4619] mb-2">{result.metric}</h3>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-[#0B4619]">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Over 1,100+ qualified leads generated across campaigns
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Best-performing campaigns: Webinar leads and Lead Guidance ads
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  CTR averaged 4.17%, with some campaigns reaching as high as 7%
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Cost per Click held strong at ₹11.85, with Cost per Lead at ₹343
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Reels + Meta lead forms proved to be the highest-converting combo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Growth */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#0A5C35]">6. Instagram Growth & Engagement</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {instagramMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-lg text-center">
                <h3 className="text-3xl font-bold mb-2">{metric.metric}</h3>
                <p className="text-white/90">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#0A5C35]">7. Challenges & Solutions</h2>
          <div className="space-y-8">
            {challenges.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-red-600 mb-2">Challenge</h4>
                    <p className="text-gray-700">{item.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-600 mb-2">Solution</h4>
                    <p className="text-gray-700">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#0A5C35]">8. Conclusion</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Yashi Shukla Education's digital journey shows how <strong>personalized creative + precise targeting + funnel automation = high-performance lead gen</strong>. By focusing on storytelling, retargeting, and audience relevance, we've built a scalable model that consistently delivers ROI-positive leads.
            </p>
            <div className="bg-gradient-to-r from-[#0A5C35] to-[#0B4619] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Education Business?</h3>
              <p className="mb-6">Let's create a data-driven strategy that delivers qualified leads and builds lasting brand trust.</p>
              <Link href="/contact">
                <button className="bg-white text-[#0A5C35] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300">
                  Start Your Success Story
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 