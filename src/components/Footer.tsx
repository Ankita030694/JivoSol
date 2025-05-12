import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Newsletter and Logo Column */}
          <div className="md:col-span-2 pr-4">
            <h3 className="text-2xl mb-4">
              Get the latest inspiration & insights
            </h3>
            <div className="flex w-full max-w-md mb-8">
              <input
                type="email"
                placeholder="Your Email..."
                className="flex-1 p-3 rounded-l-md text-black bg-white"
              />
              <button className="bg-[#0B4619] text-white px-6 rounded-r-md">
                <span className="transform rotate-90 inline-block">→</span>
              </button>
            </div>

            {/* Logo below newsletter */}
            <Image
              src="/jivologo.png"
              alt="Jivo Solutions"
              width={200}
              height={50}
              className="mb-4"
            />
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4 text-[#7AA792]">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/social-media-management">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services/performance-marketing">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/brand-identity-&-design">
                  Brand Identity & Design
                </Link>
              </li>
              <li>
                <Link href="/services/web-development-&-seo">
                  Web Development & SEO
                </Link>
              </li>
              <li>
                <Link href="/services/video-&-animation">
                  Video & Animation
                </Link>
              </li>
              <li>
                <Link href="/services/content-creation-&-production">
                  Content Creation & Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-semibold mb-4 text-[#7AA792]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/ourwork"
                  className="hover:text-green-400 transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-green-400 transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4 text-[#7AA792]">Head office</h4>
            <p className="mb-4">
              Space business park, Sector 66, Gurugram, Haryana 122102
            </p>
            <a
              href="mailto:info@jivosolutions.com"
              className="text-[#7AA792] block mb-2"
            >
              info@jivosolutions.com
            </a>
            <a href="tel:+919844494599" className="text-[#7AA792] block">
              +91 9844494599
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="mb-4 md:mb-0">
            <p>
              © 2023-2024{" "}
              <Link href="#" className="underline">
                Dtech
              </Link>
              . All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Follow Us</span>
            <Link href="#" className="hover:text-[#7AA792]">
              Facebook
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="#" className="hover:text-[#7AA792]">
              Instagram
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="#" className="hover:text-[#7AA792]">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
