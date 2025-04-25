import React from 'react';
import Image from 'next/image';
import { FaStar, FaInfoCircle } from 'react-icons/fa';

// Define the props interface
interface SalonCardProps {
  mainImage: string;
  tag: string;
  rating: number;
  title: string;
  distance: string;
  address: string;
  promoted: boolean;
  galleryImages: string[];
}

const ServiceDetails: React.FC<SalonCardProps> = ({
  mainImage,
  tag,
  rating,
  title,
  distance,
  address,
  promoted,
  galleryImages,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col gap-3 ">
        <div className='flex  gap-10'>
      {/* Main Image */}
      <div className="relative w-[550px] h-[288px] rounded-lg overflow-hidden">
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 justify-center">
  {/* Tag and Rating */}
  <div className="flex flex-col gap-2">
    <p className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded font-medium self-start">
      {tag}
    </p>
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
        />
      ))}
      <span className="text-xs text-gray-500">({rating} ratings)</span>
    </div>
  </div>

  {/* Title */}
  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

  {/* Distance and Address */}
  <p className="text-sm text-gray-500">
    {distance} • {address}
  </p>

  {/* Promoted Label */}
  {promoted && (
    <div className="flex items-center gap-1 text-sm text-gray-500">
      <span>Promoted</span>
      <FaInfoCircle className="text-gray-400" />
    </div>
  )}
</div>
      </div>

      {/* Gallery Images */}
      <div className="flex gap-2 overflow-x-auto">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative w-[105px] h-[105px] rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;