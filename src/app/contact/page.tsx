'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  number: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    number: '',
    service: '',
    message: '',
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const serviceOptions = [
    { value: "", label: "Select Services" },
    { value: "brand", label: "Brand Strategy" },
    { value: "packaging", label: "Packaging Design" },
    { value: "media", label: "Photography & Videography" },
    { value: "social", label: "Social Media Management" },
    { value: "web", label: "Website Development" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
    setDropdownOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="font-poppins font-bold text-white uppercase" 
              style={{ 
                fontSize: "42px", 
              }}>
            Contact Us
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

      <div className="container mx-auto px-32 py-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-black">Leave a Message</h2>
          <p className="text-gray-600">
            lorem ipsum dolor sit amet, consectetur netted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 space-y-6 mb-8 lg:mb-0">
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-[#0A5C35] p-3 rounded-full">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-black">Phone Number</h3>
                <p className="text-gray-600">202-8767-452</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-[#0A5C35] p-3 rounded-full">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.8906 13.2604C11.5624 13.7394 12.4376 13.7394 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-black">Email Address</h3>
                <p className="text-gray-600">info@jivosolution.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-[#0A5C35] p-3 rounded-full">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C16 18 20 14.4183 20 11C20 7.13401 16.4183 4 12 4C7.58172 4 4 7.13401 4 11C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-black">Our Location</h3>
                <p className="text-gray-600">Space Business Park, Sector 66, Gurugram, Haryana 122102</p>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            {/* Form implementation */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none pr-10 text-gray-700"
                    />
                    <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none pr-10 text-gray-700"
                    />
                    <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.8906 13.2604C11.5624 13.7394 12.4376 13.7394 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      name="number"
                      placeholder="Number"
                      value={formData.number}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none pr-10 text-gray-700"
                    />
                    <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="relative">
                    <div 
                      className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none cursor-pointer flex justify-between items-center"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <span className="text-gray-700 font-light">
                        {formData.service ? serviceOptions.find(option => option.value === formData.service)?.label : "Select Services"}
                      </span>
                      <svg 
                        className={`w-4 h-4 text-gray-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    {dropdownOpen && (
                      <div className="absolute left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-20 border border-gray-100 py-1 max-h-48 overflow-y-auto text-gray-700">
                        {serviceOptions.map((option) => (
                          <div 
                            key={option.value} 
                            className="px-4 py-2 hover:bg-gray-50 cursor-pointer font-light text-gray-700"
                            onClick={() => handleServiceSelect(option.value)}
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none pr-10 text-gray-700"
                    />
                    <svg className="w-4 h-4 absolute right-3 top-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12H16M8 8H16M8 16H12M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="bg-[#0A5C35] p-4 mx-[-24px] mb-[-24px] mt-4 rounded-b-3xl">
                  <button
                    type="submit"
                    className="w-50 flex items-center justify-center gap-2 px-2 py-4 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition-colors duration-300 border border-gray-100 font-light"
                  >
                    Send Message
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 20L21 12L3 4V9L17 12L3 15V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* New map section with leaf.gif */}
      <div className="container mx-auto px-32 py-16 relative">
        <div className="w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9628524978647!2d77.06553537625544!3d28.44766449033805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d185f6ecc20fd%3A0x84c1de0bf4b2485a!2sSpace%20Business%20Park%2C%20Sector%2066%2C%20Gurugram%2C%20Haryana%20122102!5e0!3m2!1sen!2sin!4v1699988223093!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        <div className="absolute right-12 top-128">
          <Image 
            src="/leaf.gif" 
            alt="Decorative leaf" 
            width={75} 
            height={75}
            className="z-10"
          />
        </div>
      </div>

      <Footer />
    </div>
  );    
}