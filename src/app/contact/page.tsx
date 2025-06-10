'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

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
          <h1 className="font-poppins font-bold text-white uppercase text-center px-4" 
              style={{ 
                fontSize: "clamp(28px, 5vw, 42px)", 
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

      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-8 md:py-8">
        <div className="text-center mb-8">
          <p className="text-gray-600">
          You've built something worth seeing. Let's make sure the world does.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <div className="w-full h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.4958664935525!2d77.05617997573074!3d28.404290875790192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22605251b88f%3A0x3a3287d47a73088!2sSPAZE%20BUSINESS%20PARK!5e0!3m2!1sen!2sin!4v1749532028011!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0, minHeight: '400px', borderRadius: '12px'}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
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

                <div className="bg-[#0A5C35] p-4 mx-[-24px] mb-[-24px] mt-4 rounded-b-3xl text-right justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto ml-auto flex items-center gap-2 px-4 py-4 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition-colors duration-300 border border-gray-100 font-light"
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

      {/* Moved contact information here */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-8 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-[#0A5C35] p-3 rounded-full flex-shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <a href="tel:+918130380131">             <h3 className="font-semibold text-black">Phone Number</h3>
              <p className="text-gray-600">
                +91 8130380131
                </p>
                </a>
 
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-[#0A5C35] p-3 rounded-full flex-shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8L10.8906 13.2604C11.5624 13.7394 12.4376 13.7394 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <a href="mailto:info@jivosolutions.com">
              <h3 className="font-semibold text-black">Email Address</h3>
              <p className="text-gray-600">
              info@jivosolutions.com
              </p>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-[#0A5C35] p-3 rounded-full flex-shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C16 18 20 14.4183 20 11C20 7.13401 16.4183 4 12 4C7.58172 4 4 7.13401 4 11C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-black">Our Location</h3>
              <p className="text-gray-600">Spaze Business park, sector 66, Tower B unit no 108, 1st floor Gurugram</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Connect With Us</h2>
          <p className="text-gray-600 mb-6">Follow us on social media for the latest updates</p>
        </div>
        <div className="flex justify-center gap-6">
          {[
            { href: "https://www.facebook.com/profile.php?id=61557791590642", icon: FaFacebook },
            { href: "https://www.instagram.com/zeminik_?igsh=bzZxZTV0M2NkcW1l&utm_source=qr", icon: FaInstagram },
            { href: "https://www.youtube.com/@jivosolutions", icon: FaYoutube },
            { href: "https://www.linkedin.com/company/zeminik/?viewAsMember=true", icon: FaLinkedin },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A5C35] p-4 rounded-full hover:bg-[#08482a] transition-colors duration-300"
              >
                <Icon className="w-6 h-6 text-white" />
              </a>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );    
}