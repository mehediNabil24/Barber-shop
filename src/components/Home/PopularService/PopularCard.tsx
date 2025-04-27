// app/components/Service/ServiceCard.tsx

import Image from 'next/image';
import { FaStar, FaInfoCircle } from 'react-icons/fa';

type Props = {
  imageSrc: string;
  title: string;
  address: string;
  rating: number;
  promoted: boolean;
};

export default function PopularCard({
  imageSrc,
  title,
  address,
  rating,
  promoted,
}: Props) {
  return (
    <div className="bg-white  rounded-xl shadow-sm flex flex-col gap-3 w-full">
      {/* Main Image */}
      <div className="relative w-full h-[200px] rounded-t-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex p-4 flex-col gap-2">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
          <span className="text-xs text-gray-500">({rating} ratings)</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>

        {/* Address */}
        <p className="text-xs text-gray-500">{address}</p>

        {/* Promoted Label */}
        {promoted && (
          <div className="flex items-center gap-1 text-xs text-[#101010]">
            <span>Promoted</span>
            <FaInfoCircle className="text-gray-400" />
          </div>
        )}
      </div>
    </div>
  );
}