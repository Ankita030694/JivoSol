'use client'
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What does JIVO Solutions do?",
    answer: "JIVO Solutions is a digital solutions company that helps businesses build a strong online presence. We offer brand strategy, visual identity development, custom website design, search engine optimization (SEO), content creation, social media marketing, and performance advertising to drive growth and visibility."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is based on your goals, business size, and service requirements. Whether you're looking for a full digital transformation package or a one-time branding project, we'll create a custom quote after understanding your needs."
  },
  {
    question: "How long does it take to build a brand or website?",
    answer: "Most brand identity projects take 3 to 4 weeks. Website development timelines range from 4 to 8 weeks depending on the scope, features (e.g., e-commerce, CMS integration), and platform (WordPress, Webflow, Shopify, etc.)."
  },
  {
    question: "Do you offer content creation and social media management?",
    answer: "Yes, we offer full content production services (photography, video, copywriting) and end-to-end social media management including content calendars, post scheduling, audience engagement, and analytics reporting."
  },
  {
    question: "Can I hire JIVO for a single service (like SEO or branding)?",
    answer: "Yes. You can start with one focused solution such as SEO optimization, brand identity design, or landing page development, and scale up later as needed."
  },
  {
    question: "Which industries do you specialize in?",
    answer: "We've worked with over 105 brands in industries like hospitality, wellness, education, luxury retail, lifestyle, and healthcare. Whether you're a startup or an established business, we customize strategies to fit your market."
  },
  {
    question: "How do your digital ad campaigns work?",
    answer: "We build full-funnel performance marketing campaigns using platforms like Meta Ads, Google Ads, LinkedIn Ads, and YouTube Ads. Our team handles everything from audience targeting and media buying to A/B testing, conversion tracking, and ROI optimization."
  },
  {
    question: "What's included in a branding package?",
    answer: "Our complete brand identity packages include: Logo design (primary, secondary, icon), Brand color palette and typography, Brand guidelines document, Business stationery (letterhead, business cards, email signatures), Optional: packaging design, merchandise, and presentation templates"
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we offer full website redesign services. Whether you need better UX/UI design, mobile optimization, technical SEO improvements, or faster load speed, we'll upgrade your site for better performance and conversions."
  },
  {
    question: "How do I get started with JIVO Solutions?",
    answer: "Visit our Contact Page, fill out the inquiry form, and we'll schedule a discovery call. We'll understand your brand goals, suggest the right digital services, and build a plan designed for growth and visibility."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 bg-gradient-to-b from-[#0a5c35]/5 to-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 font-poppins text-[#0a5c35]">
            Frequently asked questions
          </h2>
          <p className="text-gray-700 text-sm max-w-2xl mx-auto">
            Find answers to common questions about our services and how we can help your business grow
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-3">
              <button
                className={`w-full text-left p-3 rounded-md transition-all duration-300 flex justify-between items-center group
                  ${openIndex === index 
                    ? 'bg-[#0a5c35] text-white shadow-lg' 
                    : 'bg-white hover:bg-[#0a5c35]/5 text-gray-800 shadow-md hover:shadow-lg border border-[#0a5c35]/10'
                  }`}
                onClick={() => toggleFAQ(index)}
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
  );
};

export default FAQ; 