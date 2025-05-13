import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
export default function InsightsPage() {
  return (
    <div>
      <Navbar />
      <div className="w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1
            className="font-poppins font-bold text-white uppercase"
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
            }}
          >
            Our Work
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

      {/* Social Media Section */}
      <div className="py-16 mx-auto text-center">
        <p className="text-emerald-700 mb-2">Social Media Management</p>
        <h2 className="text-4xl font-bold mb-4 text-black">
          Be Seen Where It Matters Most
        </h2>
        <p className="mb-2 text-black">
          Your audience spends hours every day on social media. we make sure
          you're there,
        </p>
        <p className="mb-6 text-black">not just present, but unforgettable.</p>
        <p className="mb-8 text-black">
          At JIVO, we build <span className="italic">digital narratives</span>{" "}
          that drive engagement, loyalty, and action.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Instagram", "Facebook", "YouTube", "LinkedIn", "Pinterest"].map(
            (platform) => (
              <button
                key={platform}
                className="px-6 py-2 rounded-full border border-emerald-700 relative overflow-hidden group"
              >
                <span className="relative z-10 text-emerald-700 group-hover:text-white transition-colors duration-300">
                  {platform}
                </span>
                <div className="absolute inset-0 bg-emerald-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              </button>
            )
          )}
        </div>

        {/* Image grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-64">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={`/jabout${num}.svg`}
                alt={`Portfolio image ${num}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Carousel Navigation - moved outside the grid */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        {/* Web Development Projects Section */}
      </div>
      <div className="mt-16 bg-[#ECECEC] px-4 sm:px-8 md:px-16 lg:px-64 py-16 text-center">
        <p className="text-emerald-700 mb-2">Web Developments & SEO</p>
        <h2 className="text-4xl font-bold mb-12 text-black">
          Let's See Our Recent Work
          <br />
          Projects Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Zaavi", image: "/jabout1.svg" },
            { name: "Rikh ", image: "/jabout2.svg" },
            { name: "Essru", image: "/jabout3.svg" },
          ].map((project) => (
            <div
              key={project.name}
              className="relative rounded-2xl overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={500}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-emerald-800 p-4 md:p-8 flex justify-between items-center">
                <h3 className="text-white text-lg">{project.name}</h3>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-full flex items-center gap-2 transition-colors duration-300 text-md">
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation - moved outside the grid */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-16 mx-auto text-center">
        <p className="text-emerald-700 mb-2">Brand Identity & Design</p>
        <h2 className="text-4xl font-bold mb-4 text-black">
          Let's See Our Recent Work <br />
          Projects Gallery
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Logo",
            "Letterhead",
            "Business Card",
            "Brochure",
            "Pamphlets",
            "Bill Boards",
          ].map((platform) => (
            <button
              key={platform}
              className="px-6 py-2 my-1 md:my-0 rounded-full border border-emerald-700 relative overflow-hidden group"
            >
              <span className="relative z-10 text-emerald-700 group-hover:text-white transition-colors duration-300">
                {platform}
              </span>
              <div className="absolute inset-0 bg-emerald-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-64">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="relative overflow-hidden rounded-lg shadow-md aspect-square"
            >
              <Image
                src={`/jabout${num}.svg`}
                alt={`Portfolio image ${num}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Carousel Navigation - moved outside the grid */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Content Creation & Production Section */}
        <div className="mt-16 text-center bg-[#ECECEC] py-16">
          <p className="text-emerald-700 mb-2">Content Creation & Production</p>
          <h2 className="text-4xl font-bold mb-12 text-black">
            Let's See Our Recent Work
            <br />
            Projects Gallery
          </h2>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-64">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={`/jabout${num}.svg`}
                alt={`Portfolio image ${num}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full shadow-md transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
