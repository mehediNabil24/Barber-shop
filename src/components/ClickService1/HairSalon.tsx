// app/components/HairSalons.tsx

import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';

const HairSalons: React.FC = () => {
  return (
    <div className="flex flex-col  gap-6 p-6 xl:px-[200px] lg:px-[40px] px-[10px] mx-auto lg:my-[100px] my-[50px]">
      {/* Text Section */}
      <div className=" flex flex-col gap-4">
        <h1 className="text-[40px] mb-[40px] font-bold text-gray-800 leading-tight">
          Hair salons near me - the best hairdressers and hair stylists
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Have you been inspired by a trendy new hair from a fashion magazine? If you’re ready to transform your look, it’s time to visit a professional hair salon near you. Whether you’re going for a bold cut, a fresh color, or a complete makeover, experienced hairstylists are ready to bring your vision to life. These professionals have in-depth training and a creative eye for detail, making even the most complex styles achievable.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Finding the right salon has never been easier with Connex. Our platform helps explore a wide range of hair salons in your area—whether you’re looking for walk-in options or places open from Sunday to Thursday. You’ll be able to compare pricing, user ratings, and real-time availability all in one convenient space.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          At Connex, we highlight top-rated salons based on customer feedback, so you’re choosing quality you can trust. With Connex, discover the next quality salon is quick, simple, and can be done in just a few clicks. Filter salons that fit your style preferences and budget. Booking an appointment is fast and can be done on just a clicks. With Connex, discover your new favorite salon is quick, reliable, and stress-free. Get ready to elevate your look and feel amazing every time you walk out the door.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      {/* Background Image */}
      <Image
        src="/asset/Rectangle 102.png" // replace with correct path
        alt="Massage Service"
        fill
        className="object-cover"
      />

      {/* Floating Icons */}
      {/* Left Center Icon */}
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <FaPlus className="text-gray-600" />
      </div>

      {/* Top Right Icon */}
      <div className="absolute top-5 right-5 bg-white rounded-full p-2 shadow-md">
        <FaPlus className="text-gray-600" />
      </div>

      {/* Bottom Right Icon */}
      <div className="absolute bottom-5 right-5 bg-white rounded-full p-2 shadow-md">
        <FaPlus className="text-gray-600" />
      </div>

      {/* 24/7 Booking Floating Button */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black/50 text-white flex items-center gap-2 py-2 px-4 rounded-full text-sm shadow-lg">
        <FaPlus className="text-white" />
        <span>24/7 online booking</span>
      </div>
    </div>
    </div>
  );
};

export default HairSalons;