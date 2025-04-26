// app/components/Review/ReviewCard.tsx

import { FaStar } from 'react-icons/fa';

type Props = {
  rating: number;
  date: string;
  text: string;
  salon: string;
  distance: string;
  address: string;
};

export default function ReviewCard({
  rating,
  date,
  text,
  salon,
  distance,
  address,
}: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col gap-3">
      {/* Rating and Date */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < Math.floor(rating) ? 'text-[#FFA600]' : 'text-gray-300'}
          />
        ))}
        
      </div>
      <span className="text-xs text-gray-500">({rating} ratings) {date}</span>

      {/* Review Text */}
      <p className="text-sm text-gray-600 line-clamp-4">{text}</p>

      <hr className='border border-gray-200 '></hr>

      

      {/* Salon Info */}
      <div className="flex items-center gap-3">
        <div className="w-[50px] h-[40px] bg-gray-200 rounded-full" />
        <div>
          <p className="text-sm font-semibold text-black text-[20px]">{salon}</p>
          <p className="text-xs text-gray-500">
            {distance} • {address}
          </p>
        </div>
      </div>
    </div>
  );
}