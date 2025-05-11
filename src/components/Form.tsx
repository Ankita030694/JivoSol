'use client'
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  number: string;
  service: string;
  message: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    number: '',
    service: '',
    message: '',
  });

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

  return (
    <div className="w-full min-h-screen bg-[url('/jvformbg.png')] bg-cover bg-center bg-green-800">
      <div className="container mx-auto px-4 py-16 flex items-center justify-between">
        {/* Form Container */}
        <div className="w-1/2">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="number"
                  placeholder="Number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">Select Services</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-48 flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition-colors duration-300 border border-gray-200"
                >
                  Send Message
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Text Container */}
        <div className="w-1/2 text-white pl-16">
          <h2 className="text-xl mb-8">Get in Touch</h2>
          <h3 className="text-5xl font-bold mb-4">You've Built Something Worth Seeing.</h3>
          <h3 className="text-5xl font-bold">Let's Make Sure The World Does.</h3>
        </div>
      </div>
    </div>
  );
};

export default Form;