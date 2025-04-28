"use client"; // Mark as a client component since we're using useState

import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaInfoCircle, FaEdit, FaTrash, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

const HairCutDetails: React.FC<SalonCardProps> = ({
  mainImage,
  tag,
  rating,
  title,
  distance,
  address,
  promoted,
  galleryImages,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 4; // Number of images to show at a time, matching the screenshot

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - imagesPerView : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + imagesPerView >= galleryImages.length ? 0 : prev + 1));
  };

  return (
    <div className="bg-white  rounded-xl  flex flex-row gap-3 relative">
      {/* Top Right Icons */}
     
<div>
      <div className="flex flex-col  gap-10">
        {/* Main Image */}
        <div className="relative md:w-full w-[300px] h-[500px] rounded-lg overflow-hidden">
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

       
      </div>

      {/* Gallery Images Carousel */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 p-1 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
          disabled={galleryImages.length <= imagesPerView}
        >
          <FaChevronLeft className="text-gray-600" />
        </button>

        {/* Gallery Images */}
        <div className="flex gap-2 overflow-hidden w-full">
          {galleryImages.slice(currentIndex, currentIndex + imagesPerView).map((image, index) => (
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

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 p-1 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
          disabled={galleryImages.length <= imagesPerView}
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>
      </div>
      <div>
         {/* Content */}
       <div className="flex flex-col gap-2 justify-center">
          {/* Tag and Rating */}
          <div className="flex flex-col gap-2">
            
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
      
    </div>
  );
};

export default HairCutDetails;