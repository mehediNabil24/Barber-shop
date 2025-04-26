// app/components/HairSalons.tsx

import Image from 'next/image';

const HairSalons: React.FC = () => {
  return (
    <div className="flex flex-col  gap-6 p-6 max-w-5xl mx-auto">
      {/* Text Section */}
      <div className=" flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800 leading-tight">
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
      <div className="relative  h-[500px] rounded-xl ">
        <Image
          src="/asset/Rectangle 102.png"
          alt="Hair Salon"
          fill
          className="object-cover"
        />
        {/* Button Overlay */}
        <button className="absolute bottom-10 right-[20%] bg-gray-900 text-white text-xs font-semibold py-2 px-4 rounded-full flex items-center gap-2">
          <span>24/7 online booking</span>
          {/* <span className="w-5 h-5 bg-white text-gray-900 rounded-full flex items-center justify-center">+</span> */}
        </button>
      </div>
    </div>
  );
};

export default HairSalons;