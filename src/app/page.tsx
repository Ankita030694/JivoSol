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
      <div className="w-full h-[60vh] md:h-[60vh] sm:h-[50vh] relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
          <h1 className="font-poppins font-bold text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-normal">
            Presence is Everything
          </h1>
          <h2 className="font-poppins font-normal text-white text-sm sm:text-base md:text-lg mt-2 md:mt-4 max-w-xl">
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
      <div className="mt-10">
        <Form />
      </div>
      <Footer />
    </div>
  );
}
