'use client';
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  // Use intersection observer to trigger animations when footer is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.footer 
      ref={ref}
      className="bg-black text-white py-12"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Newsletter and Logo Column */}
          <motion.div 
            className="md:col-span-2 pr-4"
            variants={fadeInUp}
          >
            <motion.h3 
              className="text-2xl mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Get the latest inspiration & insights
            </motion.h3>
            <motion.div 
              className="flex w-full max-w-md mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.input
                type="email"
                placeholder="Your Email..."
                className="flex-1 p-3 rounded-l-md text-black bg-white"
                whileFocus={{ scale: 1.01, boxShadow: "0 0 8px rgba(255,255,255,0.3)" }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <motion.button 
                className="bg-[#0B4619] text-white px-6 rounded-r-md"
                whileHover={{ backgroundColor: "#0D5520" }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="transform rotate-90 inline-block"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >→</motion.span>
              </motion.button>
            </motion.div>

            {/* Logo below newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/jivologo.png"
                alt="Jivo Solutions"
                width={200}
                height={50}
                className="mb-4"
              />
            </motion.div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={fadeInUp}>
            <motion.h4 
              className="font-semibold mb-4 text-[#7AA792]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Services
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {[
                { href: "/services/social-media-management", text: "Social Media Management" },
                { href: "/services/performance-marketing", text: "Performance Marketing" },
                { href: "/services/brand-identity-&-design", text: "Brand Identity & Design" },
                { href: "/services/web-development-&-seo", text: "Web Development & SEO" },
                { href: "/services/video-&-animation", text: "Video & Animation" },
                { href: "/services/content-creation-&-production", text: "Content Creation & Production" },
              ].map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                >
                  <motion.div
                    whileHover={{ x: 5, color: "#7AA792" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href={link.href}>
                      {link.text}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={fadeInUp}>
            <motion.h4 
              className="font-semibold mb-4 text-[#7AA792]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {[
                { href: "/about", text: "About Us" },
                { href: "/ourwork", text: "Our Work" },
                { href: "/insights", text: "Insights" },
                { href: "/contact", text: "Contact" },
              ].map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                >
                  <motion.div
                    whileHover={{ x: 5, color: "#7AA792" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      href={link.href}
                      className="hover:text-green-400 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={fadeInUp}>
            <motion.h4 
              className="font-semibold mb-4 text-[#7AA792]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Head office
            </motion.h4>
            <motion.p 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Space business park, Sector 66, Gurugram, Haryana 122102
            </motion.p>
            <motion.a
              href="mailto:info@jivosolutions.com"
              className="text-[#7AA792] block mb-2"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              info@jivosolutions.com
            </motion.a>
            <motion.a 
              href="tel:+919844494599" 
              className="text-[#7AA792] block"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              +91 9844494599
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div 
            className="mb-4 md:mb-0"
            whileHover={{ scale: 1.01 }}
          >
            <p>
              © 2023-2024{" "}
              <motion.span whileHover={{ color: "#7AA792" }}>
                <Link href="#" className="underline">
                  Dtech
                </Link>
              </motion.span>
              . All Rights Reserved.
            </p>
          </motion.div>
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <motion.span 
              className="text-gray-400"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Follow Us
            </motion.span>
            {[
              { href: "#", icon: FaFacebook },
              { href: "#", icon: FaInstagram },
              { href: "#", icon: FaYoutube },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link href={social.href} className="hover:text-[#7AA792]">
                    <Icon className="text-white text-xl hover:text-[#7AA792]" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;