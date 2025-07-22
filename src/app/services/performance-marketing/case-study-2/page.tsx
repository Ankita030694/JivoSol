import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFacebookF, FaInstagram, FaChartLine, FaUsers, FaCheckCircle, FaLightbulb } from "react-icons/fa";

export default function CaseStudyPage() {
  const metrics = [
    { number: "2,500+", label: "Leads Generated" },
    { number: "10-12%", label: "Lead to Sign-Up Conversion" },
    { number: "₹20-23", label: "Average Cost per Lead" },
    { number: "15+", label: "Creative Variations Tested" },
  ];

  const platforms = [
    { icon: FaFacebookF, name: "Facebook Ads", color: "bg-blue-500" },
    { icon: FaInstagram, name: "Instagram Ads", color: "bg-pink-500" },
    { icon: FaChartLine, name: "Performance Tracking", color: "bg-green-500" },
    { icon: FaUsers, name: "Lead Generation", color: "bg-purple-500" },
  ];

  const funnelStages = [
    { stage: "TOFU", objective: "Awareness & Reach", format: "Reels + Carousels" },
    { stage: "MOFU", objective: "LP Views & Engagement", format: "Story Ads + Carousel" },
    { stage: "BOFU", objective: "Retargeting + Lead Gen", format: "Instant Forms + Testimonial Reels" },
  ];

  const challenges = [
    { challenge: "High initial CPL", solution: "Narrowed interest targeting + shifted to reels" },
    { challenge: "Creative fatigue", solution: "Introduced fresh creative themes bi-weekly" },
    { challenge: "Tier 1 skepticism", solution: "Built social proof using alumni success videos" },
  ];

  const takeaways = [
    "Short-form videos consistently outperformed static creatives",
    "Testimonial-led storytelling delivered better trust and CTR",
    "Combining metro + non-metro targeting helped balance CPL and scale",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-[#0A5C35] to-[#0B4619]">

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              WitWise Education: Career Counseling Course Success Story
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Driving high-quality leads for career counseling certification through strategic Meta advertising across Facebook and Instagram
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-[#0A5C35] hover:border-[#0A5C35] transition-all duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Performance Snapshot</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-[#0A5C35] mb-2">{metric.number}</h3>
                <p className="text-gray-600">{metric.label}</p>
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
              <h2 className="text-3xl font-bold mb-6 text-black">About WitWise Education</h2>
              <p className="text-gray-600 mb-6">
                WitWise Education is a future-ready EdTech brand offering premium upskilling programs for students, educators, and professionals. Their flagship Career Counseling Certification Course empowers individuals to guide students toward the right career paths with international counseling frameworks, practical tools, and mentorship.
              </p>
              <p className="text-gray-600 mb-6">
                In collaboration with JIVO Solutions, WitWise aimed to drive high-quality leads for this course via Meta Ads across Facebook and Instagram, targeting educators, psychology graduates, and professionals seeking career transition.
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
                src="/perfmark/casestudy2/Copy of WW1.png"
                alt="WitWise Education Overview"
                fill
                className="object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Objectives */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Campaign Objectives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-black">Build Awareness</h3>
              <p className="text-gray-600">Build widespread awareness for the Career Counseling Course</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4 text-black">Generate Quality Leads</h3>
              <p className="text-gray-600">Generate a steady stream of high-intent leads interested in education and counseling careers</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-4 text-black">Optimize Spend</h3>
              <p className="text-gray-600">Optimize campaign spend and reduce the overall cost per lead (CPL)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/perfmark/casestudy2/Copy of WW2.png"
                alt="Target Audience Strategy"
                fill
                className="object-contain rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Target Audience</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-black">Age Group:</h4>
                  <p className="text-gray-600">22–40 years</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-black">Audience Profiles:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Teachers, school counselors, educators</li>
                    <li>• Psychology and education graduates</li>
                    <li>• Professionals seeking career transition</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-black">Geographies:</h4>
                  <p className="text-gray-600">Delhi, Mumbai, Bangalore, Lucknow, Jaipur, Indore (Tier 1 & 2 cities)</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-black">Interest Tags:</h4>
                  <p className="text-gray-600">Counseling, Psychology, Student Guidance, Coaching, Government Exams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy & Execution */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Strategy & Execution</h2>
          
          {/* Creative Direction */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-black">Creative Direction</h3>
            <p className="text-gray-600 mb-6">
              We positioned the course as a transformative tool for aspiring counselors with compelling ad hooks and diverse creative formats.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-3 text-black">Ad Hooks:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• "Elevate your expertise with the WitWise Career Counseling Course"</li>
                  <li>• "Guide students to success with a global counseling framework"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-black">Creative Types:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Reels with expert mentors, alumni success stories</li>
                  <li>• Carousels featuring course modules & certifications</li>
                  <li>• Story ads for retargeting with strong CTAs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Funnel Structure */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-black">Funnel Structure</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-[#0A5C35] text-white">
                  <tr>
                    <th className="p-4 text-left">Funnel Stage</th>
                    <th className="p-4 text-left">Objective</th>
                    <th className="p-4 text-left">Creative Format</th>
                  </tr>
                </thead>
                <tbody>
                  {funnelStages.map((stage, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4 font-bold text-[#0A5C35]">{stage.stage}</td>
                      <td className="p-4 text-gray-600">{stage.objective}</td>
                      <td className="p-4 text-gray-600">{stage.format}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Landing Page & Optimization */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg mb-4 text-black">Landing Page Funnel</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Mobile-optimized LP with minimal friction</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Global Application Guidance</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Business Coaching & Internship Support</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Live Mentor Sessions</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg mb-4 text-black">Optimization Highlights</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Prioritized Landing Page Views to filter casual traffic</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Used Custom Audiences from existing CRM + Lookalike Modeling</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Bi-weekly creative refresh based on top CTR performers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Challenges & Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#0A5C35]">
                <h4 className="font-bold text-lg mb-3 text-red-600">Challenge:</h4>
                <p className="text-gray-600 mb-4">{item.challenge}</p>
                <h4 className="font-bold text-lg mb-3 text-green-600">Solution:</h4>
                <p className="text-gray-600">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Key Takeaways</h2>
          <div className="max-w-4xl mx-auto">
            {takeaways.map((takeaway, index) => (
              <div key={index} className="flex items-start mb-6 bg-white p-6 rounded-lg shadow-lg">
                <FaLightbulb className="text-yellow-500 text-2xl mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-lg">{takeaway}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">Conclusion</h2>
            <p className="text-gray-600 text-lg mb-8">
              Through a deeply optimized Meta Ads approach, JIVO Solutions helped WitWise Education establish a high-converting lead funnel. The campaign not only delivered over 2,500 leads but also proved the impact of storytelling, creative testing, and audience segmentation in EdTech advertising.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              This success now serves as the foundation for WitWise's future expansion across Google Ads and LinkedIn.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Ready to Scale Your EdTech Brand?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a data-driven strategy that delivers quality leads and builds lasting trust in the education sector.
          </p>
          <Link href="/contact">
            <button className="bg-[#0A5C35] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0B4619] transition-all duration-300 flex items-center gap-2 mx-auto">
              Get Started Today
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
} 