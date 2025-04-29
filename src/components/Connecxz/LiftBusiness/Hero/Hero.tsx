import React from 'react';
import Image from 'next/image';
import image1 from '@/assets/Rectangle 85.png';

// Define the component with TypeScript
const Hero: React.FC = () => {
  return (
    <div className="bg-black min-h-screen xl:px-[250px] md:px-[100px] px-[10px]   flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          CONNECX
        </div>

        {/* Links */}
        <div className="flex items-center gap-10">
          <a href="#" className="text-white text-sm hover:underline">
            Why Connecx
          </a>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <a href="#" className="text-white text-sm hover:underline">
              Log in / Sign up
            </a>
          </div>
          <button className="bg-[#FFA500] text-white text-sm  px-5 py-2 rounded hover:bg-yellow-600">
            Start Free Now
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-[50px] py-20">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-white">
          <h1 className="text-[40px] font-bold leading-tight">
            OWN a BARBERshop? Get MORE Clients TODAY!
          </h1>
          <p className="text-[#FFFFFF] text-[16px] mt-5 leading-relaxed">
            List your barbershop and attract more local customers effectively. Expand your reach and showcase your services to a wider audience. Gain credibility with customer reviews and ratings. Make booking easier and grow your business online.
          </p>
          <button className="bg-[#FFA500] text-white text-[16px] px-8 py-3 rounded mt-8 hover:bg-yellow-600">
            List Your Business
          </button>
        </div>

        {/* Right Section - Dashboard Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="relative">
            <Image
              src={image1}
              alt="Dashboard Mockup"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;