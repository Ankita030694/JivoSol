import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  const images = [
    '/jabout1.svg',
    '/jabout2.svg',
    '/jabout3.svg',
    '/jabout4.svg',
  ];
  
  // Add client names corresponding to each image
  const clientNames = [
    'Client One',
    'Client Two',
    'Client Three', 
    'Client Four',
    'Client Five'
  ];

  return (
    <section className="py-16 px-4 text-center">
      {/* About Us Header */}
      <div className="mb-4">
        <h3 className="text-[#005F33] font-poppins">About Us</h3>
      </div>

      {/* Main Title */}
      <h2 className="text-4xl font-bold mb-6 text-black">We are JIVO Solutions</h2>

      {/* Description Text */}
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-700 mb-1">
          A Digital Solutions Company Focused On Building Strategic Visibility For Brands That Are Ready To Grow.
        </p>
        <p className="text-gray-700 mb-8 max-w-3xl text-center mx-auto">
          With 3+ Years Of Experience And Over 50 Brands Served Across Industries And Regions, We Create 
          Cohesive Digital Ecosystems That Align Content, Design, Performance, And Strategy.
        </p>
      </div>

      {/* Learn More Button */}
      <Link 
        href="/about"
        className="inline-flex items-center bg-[#005F33] text-white px-6 py-3 rounded-full mb-16 hover:bg-[#004525] transition-colors"
      >
        Learn More
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>

      {/* Image Grid */}
      <div className="flex justify-center gap-4 overflow-x-auto px-2">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative w-[315px] h-[560px] rounded-2xl overflow-hidden flex-shrink-0 group"
          >
            <Image
              src={image}
              alt={`Team member ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-3/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white px-4 pb-4 font-medium">{clientNames[index]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Our Work Button */}
      <div className="mt-16">
        <Link 
          href="/work"
          className="inline-flex items-center bg-[#005F33] text-white px-6 py-3 rounded-full hover:bg-[#004525] transition-colors"
        >
          Our Work
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default About; 