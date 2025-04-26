// app/components/AboutUs.tsx

import Image from 'next/image';

const Beauty: React.FC = () => {
  return (
    
    <div className="flex flex-col md:flex-row gap-[60px] py-[116px] px-[200px] max-w-full mx-auto bg-gradient-to-b from-[#FFA50033] to-[#80008033]">
        
      {/* Image Section */}
      <div className="relative w-full md:w-[600px]  h-[400px] rounded-xl overflow-hidden">
        <Image
          src="/asset/Rectangle 59.png"
          alt="Barber"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col gap-4 justify-center">
        {/* Title */}
        <h2 className="text-[16px] font-[400] text-[#101010]">About Us</h2>
        <h3 className="text-[32px] font-semibold text-gray-800">Beauty Crafted for You</h3>

        {/* Description */}
        <p className="text-sm text-[#404040] leading-relaxed">
          At Connect, beauty is more than just a service—it’s an experience. We blend artistry with innovation to bring out your natural glow, offering bespoke treatments tailored to your unique style. Whether it’s a flawless makeover, rejuvenating skincare, or precision hair styling, our expert touch ensures you leave feeling confident and radiant. Step into our world of elegance, where self-care meets sophistication. Because when you shine, we shine too!
        </p>
        <p className="text-sm text-[#404040] leading-relaxed">
          Connect is a free beauty scheduling and makes appointments easy to find and book within seconds. No more phone tag. Book anytime, from anywhere, 24/7.
        </p>

        {/* Button */}
        <button className="bg-[#FFA600] text-white font-[500] text-[16px] py-[16px] px-[40px] rounded-lg w-fit hover:bg-yellow-500 transition">
          See More
        </button>
      </div>
    </div>
    
  );
};

export default Beauty;