// app/components/Service/ServiceCard.tsx

import Image from 'next/image';
import { FaStar, FaInfoCircle, FaEdit, FaTrash } from 'react-icons/fa';

type Props = {
  imageSrc: string;
  title: string;
  address: string;
  rating: number;
  promoted: boolean;
};

export default function Recommend({
  imageSrc,
  title,
  address,
  rating,
  promoted,
}: Props) {
  return (
    <div className="bg-white  rounded-xl shadow-sm flex flex-col gap-3  relative">
      {/* Edit and Delete Icons
      <div className="absolute top-4 right-4 flex gap-2">
        <button className="text-gray-500 hover:text-gray-700">
          <FaEdit className="w-5 h-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <FaTrash className="w-5 h-5" />
        </button>
      </div> */}

      {/* Main Image */}
      <div className="relative w-full h-[150px] rounded-t-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4">
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
        <h3 className="text-[16px] font-semibold text-gray-800">{title}</h3>

        {/* Address */}
        <p className="text-xs text-gray-500">{address}</p>

        {/* Promoted Label */}
        {promoted && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span>Promoted</span>
            <FaInfoCircle className="text-gray-400" />
          </div>
        )}
      </div>
    </div>
  );
}