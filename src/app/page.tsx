import Image from "next/image";
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import OurSol from '@/components/OurSol';
import Brands from '@/components/Brands';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="w-full h-[60vh] relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="font-poppins font-bold text-white uppercase" 
              style={{ 
                fontSize: "60px", 
                lineHeight: "81px", 
                letterSpacing: "0%"
              }}>
            Presence is Everything
          </h1>
          <h2 className="font-poppins font-normal text-white" 
              style={{ 
                fontSize: "16px", 
                lineHeight: "100%", 
                letterSpacing: "0%"
              }}>
            in a digital-first world, how you're seen is how you're remembered.
          </h2>
        </div>
        <Image
          src="/jivobn1.svg"
          alt="Jivo Hero"
          width={1000}
          height={400}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <About />
      <WhyUs />
      <OurSol />
      <Brands />
      <Form />
      <Footer />
    </div>
  );
}
