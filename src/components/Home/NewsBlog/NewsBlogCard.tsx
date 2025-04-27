// app/components/Blog/BlogCard.tsx

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

type Props = {
  imageSrc: string;
  title: string;
  description: string;
};

export default function NewsBlogCard({
  imageSrc,
  title,
  description,
}: Props) {
  return (
    <div className="bg-white  flex flex-col h-full overflow-hidden gap-3">
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
      <div className="flex flex-col flex-1 gap-2 ">
        {/* Title */}
        <h3 className="text-[18px] font-semibold text-[#101010]">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3 mb-[24px]">{description}</p>
         <div className='flex-1'> </div>
        {/* Learn More Link */}
        <div className="flex items-center font-bold underline   gap-2 text-xs text-black">
          <span>Learn More</span>
          <FaArrowRight className="text-black" />
        </div>
        </div>
      
    </div>
  );
}