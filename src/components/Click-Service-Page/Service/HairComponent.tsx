"use client";

import { FaStar, FaStarHalfAlt, FaInfoCircle, FaChevronCircleLeft } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface ServiceItem {
  title: string;
  description?: string;
  price: string;
  duration: string;
}

interface ServiceCardProps {
  images: string[];
  salonName: string;
  rating: number;
  ratingCount: number;
  location: string;
  distance: string;
  services: ServiceItem[];
  promoted?: boolean;
}

export default function Haircomponent({
  images,
  salonName,
  rating,
  ratingCount,
  location,
  distance,
  services,
  promoted = false,
}: ServiceCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); // Full stars
    const hasHalfStar = rating % 1 >= 0.5; // Check for half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

    return (
      <div className="flex items-center">
        {/* Full Stars */}
        {[...Array(fullStars)].map((_, idx) => (
          <FaStar key={`full-${idx}`} size={16} className="text-yellow-400" />
        ))}
        {/* Half Star */}
        {hasHalfStar && <FaStarHalfAlt size={16} className="text-yellow-400" />}
        {/* Empty Stars (if needed) */}
        {[...Array(emptyStars)].map((_, idx) => (
          <FaStar key={`empty-${idx}`} size={16} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full border-b border-gray-200 pb-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left - Image + Carousel */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-100 rounded-lg overflow-hidden">
            <Image
              src={images[currentImage]}
              alt="Salon"
              fill
              className="object-cover"
            />
          </div>

          {/* Thumbnails and Navigation Arrows */}
          <div className=" flex items-center gap-2 mt-2 relative">
            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-0 p-1 bg-gray-200 rounded-full hover:bg-gray-300 z-10 bg-white text-black rounded-full p-3 shadow hover:bg-gray-100 absolute left-0"
            >
              <FaChevronLeft className="text-gray-800"></FaChevronLeft>
            </button>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto mx-10">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${
                    idx === currentImage ? "border-blue-500" : "border-transparent"
                  }`}
                  onClick={() => setCurrentImage(idx)}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className=" bg-white text-black rounded-full p-3 shadow hover:bg-gray-100 absolute right-0"
            >
              <FaChevronRight></FaChevronRight>
            </button>
          </div>
        </div>

        {/* Right - Service Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="space-y-2">
            <p className="text-xs text-gray-500">Mobile Service</p>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {renderStars(rating)}
                <span className="text-gray-400 ml-1">({rating} ratings)</span>
                {/* <span className="text-gray-500 text-xs ml-1">({ratingCount} ratings)</span> */}
              </div>
            </div>

            <h2 className="text-xl font-semibold">{salonName}</h2>

            <p className="text-gray-600 text-sm">
              {distance} • {location}
            </p>

            {promoted && (
              <div className="flex items-center text-sm text-gray-600">
                <span>Promoted</span>
                <FaInfoCircle className="ml-1" />
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex justify-between items-center border-t border-gray-200 pt-4">
                <div className="space-y-4">
                  <h4 className="font-medium">{service.title}</h4>
                  {service.description && (
                    <p className="text-gray-500 text-sm">{service.description}</p>
                  )}
                  <button className="mt-1 rounded text-[#404040] bg-[#ECEEFF] px-[8px] py-[10px] text-xs font-semibold">
                    Save up to 20%
                  </button>
                </div>
                <div className="text-right gap-4 flex flex-row justify-center items-center">
                    <div className="flex flex-col gap-1 justify-center items-center">
                  <div className="font-bold">{service.price}</div>
                  <div className="text-gray-400 text-xs">{service.duration}</div>
                  </div>
                  <button className="mt-2 bg-[#FFA600] text-white px-4 py-2 rounded hover:bg-orange-500 text-sm">
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}