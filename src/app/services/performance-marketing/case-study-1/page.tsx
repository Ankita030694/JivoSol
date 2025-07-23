import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaYoutube, FaSpotify, FaInstagram, FaFacebookF, FaGoogle, FaGlobe, FaUsers, FaChartLine, FaTrophy } from "react-icons/fa";

export default function CaseStudyPage() {
  const keyMetrics = [
    { number: "83M+", label: "Meta Impressions" },
    { number: "3100+", label: "Total Leads" },
    { number: "₹30L+", label: "Revenue Generated" },
    { number: "2M+", label: "YouTube Views" },
  ];

  const detailedResults = [
    { number: "2000+", label: "Meta High-Intent Leads", platform: "Meta" },
    { number: "1100+", label: "Google Search Leads", platform: "Google" },
    { number: "7.5K+", label: "YouTube Subscribers", platform: "YouTube" },
    { number: "70K+", label: "New Social Followers", platform: "Social" },
    { number: "35%", label: "International Leads", platform: "Global" },
    { number: "5000+", label: "Podcast Streams", platform: "Podcast" },
  ];

  const platforms = [
    { icon: FaFacebookF, name: "Meta Ads", color: "bg-blue-500", description: "Lead generation targeting spirituality and healing audiences" },
    { icon: FaGoogle, name: "Google Ads", color: "bg-red-500", description: "Search campaigns for astrology consultation keywords" },
    { icon: FaYoutube, name: "YouTube Growth", color: "bg-red-600", description: "Channel positioning as spiritual guidance platform" },
    { icon: FaSpotify, name: "Podcast Branding", color: "bg-green-500", description: "Beyond the Stars podcast organization" },
  ];

  const objectives = [
    "Generate high-quality leads for astrology consultations and programs",
    "Build massive brand visibility and social proof",
    "Grow YouTube as an educational and discovery platform", 
    "Organize and brand her podcast to enhance authority",
    "Expand lead generation globally across Indian diaspora markets",
    "Capture high-intent leads via Google Search for astrology services"
  ];

  const highlights = [
    {
      title: "Omnichannel Funnel Design",
      description: "Google search for high-intent users, Meta for broad nurturing, YouTube for community building"
    },
    {
      title: "Localized Diaspora Strategy", 
      description: "Targeted ad sets across continents ensured global scalability"
    },
    {
      title: "Smart Budget Allocation",
      description: "Dynamic reallocation based on CPL across platforms weekly"
    },
    {
      title: "Spiritual Funnels",
      description: "Journey-driven ads from awareness to consultation bookings"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-[#0A5C35] to-[#0B4619]">

        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nidhi Chugh: Global Spiritual Brand Growth
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Meta Ads, Google Ads, YouTube Growth & Podcast Branding
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              A comprehensive digital strategy spanning multiple platforms to empower individuals through astrology, 
              numerology, and cosmic healing while driving measurable business results.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <button className="bg-white text-[#0A5C35] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300">
                  Get Similar Results
                </button>
              </Link>
            
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Campaign Results (6-Month Period)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-[#0A5C35] mb-2">{metric.number}</h3>
                <p className="text-gray-600 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {detailedResults.map((result, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 className="text-2xl font-bold text-[#0A5C35] mb-2">{result.number}</h4>
                <p className="text-gray-600 text-sm">{result.label}</p>
                <p className="text-xs text-gray-500 mt-1">{result.platform}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction & Client Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0A5C35]">About Nidhi Chugh</h2>
              <p className="text-gray-600 mb-6">
                Nidhi Chugh is a well-known astrologer, spiritual coach, and intuitive energy guide. She empowers 
                individuals to navigate personal and professional challenges through astrology, numerology, and cosmic healing. 
                With a growing digital footprint, Nidhi partnered with JIVO Solutions to expand her presence across Meta, 
                Google, and YouTube platforms, and to create a structured content ecosystem including a branded podcast.
              </p>
              <div className="bg-[#0A5C35] text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Partnership Goals</h3>
                <p className="text-white/90">
                  Transform spiritual guidance into a scalable digital business with global reach across Indian diaspora markets.
                </p>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/perfmark/casestudy1/Copy of Nidhi 1.png"
                alt="Nidhi Chugh Profile"
                fill
                className="object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Campaign Objectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0A5C35] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campaign Strategy */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Campaign Strategy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`${platform.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}>
                  <platform.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Strategy Breakdown */}
          <div className="space-y-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-900 flex items-center gap-3">
                <FaFacebookF className="text-blue-600" /> Meta Ads Strategy
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-black">Lead Generation Focus</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Targeted audiences in spirituality, healing, and self-awareness</li>
                    <li>• Geography: India, UAE, Canada, UK, USA, Australia</li>
                    <li>• Focus on Indian diaspora with astrology affinity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-black">Creative Direction</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Short-form reels with voiceovers</li>
                    <li>• Client testimonials and workshop invites</li>
                    <li>• Landing page views optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-red-900 flex items-center gap-3">
                <FaGoogle className="text-red-600" /> Google Ads Strategy
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-black">Search Campaigns</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• "Online astrology consultation"</li>
                    <li>• "Numerology for business"</li>
                    <li>• "Astrology for marriage"</li>
                    <li>• "Spiritual life coach"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-black">Location Targeting</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• NRI clusters in Dubai, Toronto</li>
                    <li>• Sydney, London markets</li>
                    <li>• Indian metro cities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-black">Ad Extensions</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Structured snippets for services</li>
                    <li>• Spiritual theme callouts</li>
                    <li>• Direct consultation CTAs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-red-900 flex items-center gap-3">
                <FaYoutube className="text-red-600" /> YouTube Growth Strategy
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-black">Channel Positioning</h4>
                  <p className="text-gray-700 mb-3">"Spiritual Guidance with Nidhi Chugh"</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Live tarot readings</li>
                    <li>• Weekly horoscopes</li>
                    <li>• Spiritual Q&As</li>
                    <li>• Guided rituals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-black">Optimization</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Keyword-rich titles</li>
                    <li>• Hindi + English dual-language</li>
                    <li>• 5-7 videos/week publishing</li>
                    <li>• YouTube Shorts for discovery</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-green-900 flex items-center gap-3">
                <FaSpotify className="text-green-600" /> Podcast Strategy
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-black">"Beyond the Stars with Nidhi Chugh"</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Solo episodes and guest interviews</li>
                    <li>• Healers, astrologers, life coaches</li>
                    <li>• Energy rituals and guided sessions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-black">Distribution & Themes</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Spotify, YouTube, Apple Podcasts</li>
                    <li>• Moon cycles and manifestation</li>
                    <li>• Feminine energy and inner child work</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Execution Overview */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Execution Overview</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0A5C35] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <p className="text-gray-700">Integrated content calendar combining Meta, Google, YouTube, and podcast publishing</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0A5C35] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <p className="text-gray-700">Regional ad sets for Dubai, Toronto, Sydney, and London based on diaspora behavior</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0A5C35] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <p className="text-gray-700">UTM tracking and Google Analytics integrations for funnel performance measurement</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0A5C35] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <p className="text-gray-700">RLSA and custom intent audiences in Google for efficient ad delivery</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0A5C35] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <p className="text-gray-700">Weekly keyword optimization for Google campaigns to maintain CPL</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/perfmark/casestudy1/Copy of Nidhi 2.png"
                alt="Campaign Execution"
                fill
                className="object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Results */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Detailed Results Breakdown</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaFacebookF /> Meta Performance
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between"><span>High-intent leads:</span><strong>2,000+</strong></li>
                <li className="flex justify-between"><span>Total impressions:</span><strong>83M+</strong></li>
                <li className="flex justify-between"><span>New followers:</span><strong>70k+</strong></li>
                <li className="flex justify-between"><span>International leads:</span><strong>35%+</strong></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaGoogle /> Google Ads Results
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between"><span>Search leads:</span><strong>1,100+</strong></li>
                <li className="flex justify-between"><span>Remarketing conversion:</span><strong>High</strong></li>
                <li className="flex justify-between"><span>Keyword coverage:</span><strong>Niche</strong></li>
                <li className="flex justify-between"><span>Geographic reach:</span><strong>Global</strong></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-700 to-red-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaYoutube /> YouTube Growth
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between"><span>Subscribers:</span><strong>7.5k+</strong></li>
                <li className="flex justify-between"><span>Total views:</span><strong>2M+</strong></li>
                <li className="flex justify-between"><span>Engagement:</span><strong>High</strong></li>
                <li className="flex justify-between"><span>Growth rate:</span><strong>Consistent</strong></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaSpotify /> Podcast Impact
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between"><span>Episodes published:</span><strong>15</strong></li>
                <li className="flex justify-between"><span>Total streams:</span><strong>5,000+</strong></li>
                <li className="flex justify-between"><span>Category ranking:</span><strong>Top 100</strong></li>
                <li className="flex justify-between"><span>Reach:</span><strong>Global</strong></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0A5C35] to-[#0B4619] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaTrophy /> Overall Impact
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between"><span>Total revenue:</span><strong>₹30,00,000+</strong></li>
                <li className="flex justify-between"><span>Consultation bookings:</span><strong>Primary</strong></li>
                <li className="flex justify-between"><span>Brand authority:</span><strong>Enhanced</strong></li>
                <li className="flex justify-between"><span>Global positioning:</span><strong>Achieved</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights & Differentiators */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Highlights & Differentiators</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-[#0A5C35]">{highlight.title}</h3>
                <p className="text-gray-700">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Challenges & Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-bold mb-3 text-red-900">Challenge: Search Keyword Saturation</h3>
                <p className="text-gray-700">High competition in astrology-related search terms affecting ad placement and costs.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-bold mb-3 text-red-900">Challenge: Creative Burnout</h3>
                <p className="text-gray-700">Maintaining fresh content across multiple platforms while staying authentic to spiritual themes.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-bold mb-3 text-green-900">Solution: Long-tail Keywords & Day-parting</h3>
                <p className="text-gray-700">Introduced specific keyword groups and optimized ad scheduling for better placement efficiency.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-bold mb-3 text-green-900">Solution: Astrology Calendar Planning</h3>
                <p className="text-gray-700">Bi-weekly content planning using astrology calendar and energy themes for consistent creativity.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold mb-3 text-red-900">Challenge: Timezone Targeting & Attribution</h3>
              <p className="text-gray-700">Managing global campaigns across different timezones and tracking cross-platform attribution accurately.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold mb-3 text-green-900">Solution: Segmented Geo-campaigns & UTM Tracking</h3>
              <p className="text-gray-700">Synchronized CTA schedules and integrated dashboarding with consistent UTM tracking for accurate attribution.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="py-16 bg-gradient-to-r from-[#0A5C35] to-[#0B4619] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Conclusion</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Nidhi Chugh's multi-platform strategy demonstrates the fusion of spiritual service branding with 
              performance-led advertising. With targeted execution across Meta, Google, YouTube, and podcasting, 
              JIVO Solutions empowered her to scale outreach, convert interest into income, and position her as 
              a global spiritual authority.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-8">
              <p className="text-xl font-semibold mb-4">
                The campaign successfully transformed a spiritual practice into a scalable digital business 
                with global reach and measurable ROI.
              </p>
              
            </div>
            <Link href="/contact">
              <button className="bg-white text-[#0A5C35] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300">
                Get Your Custom Strategy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
