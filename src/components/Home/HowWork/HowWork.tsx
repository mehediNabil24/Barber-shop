// app/components/HowItWorks.tsx

import Image from 'next/image';
import { FaScissors } from "react-icons/fa6";

const HowWork: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-6 max-w-7xl mx-auto">
    {/* Title */}
    <h2 className="text-2xl font-bold text-gray-800">How our service works</h2>

    {/* Steps Container */}
    <div className="flex flex-col md:flex-row gap-4">
      {/* Step 1 */}
      <div className="w-[491px] h-[464px] relative flex-1 bg-gradient-to-br from-white to-pink-50 rounded-xl overflow-hidden">
  {/* Step 1 label */}
  <div className="absolute top-3 left-4 font-bold text-gray-600">
    Step 1
  </div>

  {/* Center Image */}
  <div className="flex items-center justify-center h-full">
    <img src="/asset/Scissor.png" width={64} height={84} alt="Find Services" />
  </div>

  {/* Bottom Text */}
  <div className="absolute bottom-6 left-6 right-6 text-center">
    <h3 className="text-lg font-semibold text-gray-800">Find Services</h3>
    <p className="text-sm text-gray-500 mt-2">
      Explore top-rated professionals in your area.
    </p>
  </div>
</div>


      {/* Step 2 */}
      <div className="relative flex-1 rounded-xl overflow-hidden">
  {/* Background Image */}
  <Image
    src="/asset/733160124f2f6646d068802d426c45991775d162-min.jpg"
    alt="Book Instantly"
    fill
    className="object-cover"
  />

  {/* Step 2 label */}
  <div className="absolute top-3 left-4 text-white  font-bold z-10">
    Step 2
  </div>

  {/* Bottom Text */}
  <div className="absolute bottom-6 left-6 right-6 text-center text-white z-10">
    <h3 className="text-lg font-semibold">Book Instantly</h3>
    <p className="text-sm mt-2">Choose your service and preferred time.</p>
  </div>

  {/* Optional dark overlay for better text visibility */}
  <div className="absolute inset-0 bg-black/30 z-0"></div>
</div>


      {/* Step 3 */}
      <div className="w-[491px] h-[464px] relative flex-1 bg-gradient-to-br from-white to-pink-50 rounded-xl overflow-hidden">
  {/* Step 1 label */}
  <div className="absolute top-3 left-4 font-bold text-gray-600">
    Step 3
  </div>

  {/* Center Image */}
  <div className="flex items-center justify-center h-full">
    <img src="/asset/Scissor.png" width={64} height={84} alt="Find Services" />
  </div>

  {/* Bottom Text */}
  <div className="absolute bottom-6 left-6 right-6 text-center">
    <h3 className="text-lg font-semibold text-gray-800">Get Reminders</h3>
    <p className="text-sm text-gray-500 mt-2">
    Stay updated with appointment notifications.
    </p>
  </div>
</div>

    </div>
  </div>
  );
};

export default HowWork;