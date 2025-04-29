import React from 'react';
import Image from 'next/image';
import { CiCalendar } from "react-icons/ci";

interface ServiceCardProps {
  image: string;
  tag?: string;
  title: string;
  participants: string[];
  extraCount?: number;
  dateRange: string;
  isHighlighted?: boolean;
}

const ServiceCard2: React.FC<ServiceCardProps> = ({
  image,
  tag,
  title,
  participants,
  extraCount,
  dateRange,
  isHighlighted = false,
}) => {
  return (
    <div className={`flex gap-3 p-4 rounded-xl ${isHighlighted ? 'bg-gray-100' : 'bg-white'} shadow-sm`}>
      <div className="relative w-20 h-20 rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          {tag && (
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mb-1 font-medium">
              {tag}
            </span>
          )}
          <h3 className="text-base font-semibold text-gray-800">{title}</h3>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center -space-x-1">
            {participants.slice(0, 3).map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`user-${idx}`}
                width={20}
                height={20}
                className="rounded-full border-2 border-white"
              />
            ))}
            {extraCount && (
              <span className="ml-2 text-sm text-gray-500 font-medium">+{extraCount}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base"><CiCalendar></CiCalendar></span>
            <span>{dateRange}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard2;
