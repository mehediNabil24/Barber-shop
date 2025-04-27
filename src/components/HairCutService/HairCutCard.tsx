import React from 'react';
import Image from 'next/image';

// Define the props interface
interface ServiceCardProps {
  discount: string;
  title: string;
  price: number;
  duration: string;
  originalPrice: string;
  galleryImages: string[];
}

const HairCutCard: React.FC<ServiceCardProps> = ({
  discount,
  title,
  price,
  duration,
  originalPrice,
  galleryImages,
}) => {
  return (
    <div className="flex flex-col gap-3 py-4">
      {/* Discount and Title */}
      <div className='flex flex-row justify-between items-center'>
      <div className="flex flex-col gap-1">
        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded font-medium self-start">
          {discount}
        </span>
        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">
          Lowest price in 30 days, before discount: ${originalPrice}
        </p>
      </div>

      {/* Price, Duration, and Book Button */}
      <div className="flex flex-col items-center md:flex-row gap-2">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-800">${price}</span>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
        <button className="bg-[#FFA600] text-white text-sm font-medium px-[24px] py-[12px] rounded-lg hover:bg-yellow-500">
          Book
        </button>
      </div>
      </div>

      {/* Gallery Images */}
      <div className="flex gap-2 overflow-x-auto ">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <hr className="border-t border-gray-300 mt-2" />
    </div>
  );
};

export default HairCutCard;