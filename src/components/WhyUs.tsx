import Image from "next/image";
import Marquee from "react-fast-marquee";

const WhyUs = () => {
  return (
    <div>

    <div className="w-full bg-[#ECECEC] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black mb-4">Why Brands Work With Us</h2>
          <p className="text-black max-w-3xl mx-auto">
            At JIVO, we don't follow trends, we build strategies. our clients choose us because
            we think deeply, execute precisely, and care about long-term outcomes.
          </p>
          <button className="bg-[#0A5C35] text-white px-6 py-2 rounded-full mt-6 flex items-center mx-auto">
            Work With Us →
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-sm text-black">Brands Transformed</p>
            <p className="text-[#0A5C35] text-5xl font-bold">105+</p>
          </div>
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white p-8 rounded-lg">
              <p className="text-sm text-black">Clients Across The Globe</p>
              <p className="text-[#0A5C35] text-5xl font-bold">200+</p>
            </div>
          ))}
        </div>
        <div className="relative mt-8">
          <Image
            src="/leaf.gif"
            alt="Leaf Animation"
            width={100}
            height={100}
            className="absolute -bottom-18 left-0 transform scale-x-[-1]"
          />
        </div>

       

        
      </div>
    </div>
     <div className="bg-white py-8 overflow-hidden">
     <div className="text-center mb-8">
       <p className="text-[#0A5C35] text-lg">Our Clients</p>
       <h2 className="text-4xl font-bold text-black">Trusted By Businesses</h2>
       <p className="text-black max-w-3xl mx-auto mt-4">
         At JIVO, we don't follow trends, we build strategies. our clients choose
         us because we think deeply, and care about long-term outcomes.
       </p>
     </div>
     
     <div className="relative w-full overflow-hidden max-w-6xl mx-auto">
       <Marquee 
         speed={100} 
         gradient={false} 
         direction="left"
       >
         <Image
           src="/clientslide.png"
           alt="Our Clients"
           width={1000}
           height={100}
           className="inline-block"
         />
         <Image
           src="/clientslide.png"
           alt="Our Clients"
           width={1000}
           height={100}
           className="inline-block"
         />
       </Marquee>
     </div>
   </div>
   </div>

  );
};

export default WhyUs;