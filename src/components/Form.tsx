'use client'
import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../lib/firebase';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  number: string;
  service: string;
  message: string;
}

const Form = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    number: '',
    service: '',
    message: '',
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const serviceOptions = [
    { value: "", label: "Select Services" },
    { value: "brand", label: "Brand Strategy" },
    { value: "packaging", label: "Packaging Design" },
    { value: "media", label: "Photography & Videography" },
    { value: "social", label: "Social Media Management" },
    { value: "web", label: "Website Development" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.4
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
    },
    tap: { scale: 0.95 }
  };
  
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0,
      height: 'auto',
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      height: 0,
      transition: { 
        duration: 0.2, 
        ease: "easeIn" 
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Validate name (only alphabets and whitespaces)
    if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      setError('Name should contain only alphabets and spaces.');
      setIsSubmitting(false);
      return;
    }
    
    // Validate email (must contain @ and .com)
    if (!formData.email.includes('@') || !formData.email.includes('.com')) {
      setError('Please enter a valid email address containing @ and .com');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const db = getFirestore(app);
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        timestamp: new Date()
      });
      
      // Redirect to thank you page
      router.push('/thankyou');
    } catch (err) {
      console.error("Error submitting form:", err);
      setError('There was a problem submitting your form. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Real-time validation
    if (name === 'name' && !/^[A-Za-z\s]*$/.test(value)) {
      return; // Prevent updating state if name contains non-alphabets or spaces
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Additional handler for name field to prevent numeric input
  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow only letters, spaces, and control keys (backspace, delete, arrows, etc.)
    if (!/^[A-Za-z\s]$/.test(e.key) && e.key.length === 1) {
      e.preventDefault();
    }
  };

  const handleServiceSelect = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
    setDropdownOpen(false);
  };

  return (
    <div className="w-full min-h-screen relative">
      {/* Desktop Form - Hidden on mobile */}
      <div className="hidden md:block">
        {/* Background Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-contain bg-center z-0" 
          style={{ backgroundImage: "url('/jvformbg.png')", backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        ></motion.div>
        
        <div className="container mx-auto relative z-10">
          {/* Form Container with specific dimensions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute" 
            style={{ 
              width: '500px', 
              height: '500px',
              top: '250px', 
              left: '70px'
            }}
          >
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col"
              initial={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
              animate={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.form 
                onSubmit={handleSubmit} 
                className="flex-1 flex flex-col"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex-1 space-y-3">
                  <motion.div variants={itemVariants} className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.01, boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      onKeyDown={handleNameKeyDown}
                      className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none pr-10 text-gray-700"
                    />
                    <motion.svg 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.01, boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none pr-10 text-gray-700"
                    />
                    <motion.svg 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.8906 13.2604C11.5624 13.7394 12.4376 13.7394 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.01, boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      type="tel"
                      name="number"
                      placeholder="Number"
                      value={formData.number}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none pr-10 text-gray-700"
                    />
                    <motion.svg 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none cursor-pointer flex justify-between items-center"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <span className="text-gray-700 font-light">
                        {formData.service ? serviceOptions.find(option => option.value === formData.service)?.label : "Select Services"}
                      </span>
                      <motion.svg 
                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-4 h-4 text-gray-400" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </motion.svg>
                    </motion.div>
                    
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div 
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-20 border border-gray-100 py-1 max-h-48 overflow-y-auto text-gray-700"
                        >
                          {serviceOptions.map((option, index) => (
                            <motion.div 
                              key={option.value} 
                              className="px-4 py-2 hover:bg-gray-50 cursor-pointer font-light text-gray-700"
                              onClick={() => handleServiceSelect(option.value)}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ backgroundColor: "#f3f4f6", x: 5 }}
                            >
                              {option.label}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    <motion.textarea
                      whileFocus={{ scale: 1.01, boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none pr-10 text-gray-700"
                    />
                    <motion.svg 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="w-4 h-4 absolute right-3 top-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12H16M8 8H16M8 16H12M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div 
                  className="bg-[#0A5C35] p-4 mx-[-24px] mb-[-24px] mt-4 rounded-b-3xl"
                  variants={itemVariants}
                >
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-50 flex items-center justify-center gap-2 px-2 py-4 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition-colors duration-300 border border-gray-100 font-light"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && (
                      <motion.svg 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-4 h-4" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 20L21 12L3 4V9L17 12L3 15V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </motion.svg>
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
          
          {/* Leaf decoration - desktop */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                src="/leaf.gif"
                alt="Leaf Animation"
                width={100}
                height={100}
                className="absolute top-160 right-20"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Form - Hidden on desktop */}
      <div className="md:hidden min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
        <motion.div 
          className="px-6 py-10 flex-1 flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl font-bold text-[#0A5C35] mb-3"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 mb-8"
          >
            We'd love to hear from you. Fill out the form below.
          </motion.p>
          
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6 mb-6 relative overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-0 left-0 w-20 h-20 bg-[#0A5C35] opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-0 right-0 w-32 h-32 bg-[#0A5C35] opacity-10 rounded-full transform translate-x-1/2 translate-y-1/2"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            ></motion.div>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="relative z-10 space-y-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-4">
                <motion.div variants={itemVariants}>
                  <label className="text-sm text-gray-600 mb-1 block">Your Name</label>
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.01, boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      onKeyDown={handleNameKeyDown}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700"
                    />
                    <motion.svg 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="text-sm text-gray-600 mb-1 block">Your Email</label>
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.01, boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700"
                    />
                    <motion.svg 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.8906 13.2604C11.5624 13.7394 12.4376 13.7394 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="text-sm text-gray-600 mb-1 block">Phone Number</label>
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.01, boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      type="tel"
                      name="number"
                      placeholder="Enter your number"
                      value={formData.number}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700"
                    />
                    <motion.svg 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="text-sm text-gray-600 mb-1 block">Service Needed</label>
                  <div className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none cursor-pointer flex justify-between items-center bg-white"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <span className="text-gray-700">
                        {formData.service ? serviceOptions.find(option => option.value === formData.service)?.label : "Select Services"}
                      </span>
                      <motion.svg 
                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5 text-gray-400" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </motion.svg>
                    </motion.div>
                    
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div 
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-20 border border-gray-100 py-1 max-h-48 overflow-y-auto"
                        >
                          {serviceOptions.map((option, index) => (
                            <motion.div 
                              key={option.value} 
                              className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                              onClick={() => handleServiceSelect(option.value)}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ backgroundColor: "#f3f4f6", x: 5 }}
                            >
                              {option.label}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="text-sm text-gray-600 mb-1 block">Your Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01, boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)" }}
                    transition={{ type: "spring", stiffness: 400 }}
                    name="message"
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700"
                  />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#0A5C35] text-white rounded-xl flex items-center justify-center gap-2 shadow-md"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  ></motion.div>
                ) : (
                  <>
                    Send Message
                    <motion.svg 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 20L21 12L3 4V9L17 12L3 15V20Z" />
                    </motion.svg>
                  </>
                )}
                
              </motion.button>
            </motion.form>
          </motion.div>
          
          {/* Leaf decoration - mobile */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                src="/leaf.gif"
                alt="Leaf Animation"
                width={80}
                height={80}
                className="absolute right-0"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Form;