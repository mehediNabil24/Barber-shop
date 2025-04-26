// app/components/HowItWorks.tsx

import Image from "next/image";

const HowWork: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 xl:px-[200px] lg:px-[40px] px-[10px] lg:my-[100px] my-[50px]">
      {/* Title */}
      <h2 className="text-[40px] mb-[40px] font-bold text-gray-800">
        How our service works
      </h2>

      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="relative bg-gradient-to-br from-[#FFA50033] to-[#80008033] rounded overflow-hidden p-6 flex flex-col justify-between w-full h-[300px]">
          <div className="font-bold text-gray-600">Step 1</div>
          <div className="flex-1 flex items-center justify-center">
            <img src="/asset/Scissor.png" width={64} height={84} alt="Find Services" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">Find Services</h3>
            <p className="text-sm text-gray-500 mt-2">
              Explore top-rated professionals in your area.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative bg-gradient-to-br from-[#FFA50033] to-[#80008033] rounded overflow-hidden w-full h-[300px]">
          {/* Background Image */}
          <Image
            src="/asset/733160124f2f6646d068802d426c45991775d162-min.jpg"
            alt="Book Instantly"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute top-4 left-4 text-white font-bold z-10">Step 2</div>
          <div className="absolute bottom-6 left-6 right-6 text-center text-white z-10">
            <h3 className="text-lg font-semibold">Book Instantly</h3>
            <p className="text-sm mt-2">
              Choose your service and preferred time.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative bg-gradient-to-br from-[#FFA50033] to-[#80008033] rounded overflow-hidden p-6 flex flex-col justify-between w-full h-[300px]">
          <div className="font-bold text-gray-600">Step 3</div>
          <div className="flex-1 flex items-center justify-center">
            <img src="/asset/Scissor.png" width={64} height={84} alt="Complete Service" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">Complete Service</h3>
            <p className="text-sm text-gray-500 mt-2">
              Sit back and relax while experts work their magic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
