// app/components/Blog/BlogCard.tsx

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

type Props = {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
};

export default function HomeBlogCard({
  imageSrc,
  date,
  title,
  description,
}: Props) {
  return (
  <div className="bg-[#F6F6F6] p-4 rounded-xl shadow-sm flex flex-col gap-3">
      {/* Main Image */}
      <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        {/* Date */}
        <p className="text-[16px] text-[#404040]">{date}</p>

        {/* Title */}
        <h3 className="text-[18px] font-[600] text-[#101010]">{title}</h3>

        {/* Description */}
        <p className="text-[16px] text-[#404040] line-clamp-2">{description}</p>

        {/* Learn More Link */}
        <div className="flex items-center gap-2 text-[16px] text-[#101010]">
          <span>Learn More</span>
          <FaArrowRight className="text-black" />
        </div>
      </div>
    </div>
  );
}