import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js

// Define the props interface
interface ActivityCardProps {
  type: 'profile' | 'booking' | 'payment' | 'cancellation';
  description: string;
  time: string;
}

// Define the image configuration type
interface ImageConfig {
  src: string; // Path to the image
  bgColor: string; // Background color for the circular container
}

const ActivityCard: React.FC<ActivityCardProps> = ({ type, description, time }) => {
  // Map activity types to image paths and styles
  const imageMap: Record<ActivityCardProps['type'], ImageConfig> = {
    profile: { src: '/asset/Recent-1.png', bgColor: 'bg-orange-100' },
    booking: { src: '/asset/Recent-2.png', bgColor: 'bg-purple-100' },
    payment: { src: '/asset/Recent-3.png', bgColor: 'bg-pink-100' },
    cancellation: { src: '/asset/Recent-4.png', bgColor: 'bg-red-100' },
  };

  const { src, bgColor } = imageMap[type];

  return (
    <div className="flex items-start gap-3 py-2">
      {/* Image */}
      <div className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center overflow-hidden`}>
        <Image
          src={src}
          alt={`${type} icon`}
          width={20} // Adjust size to fit within the 8x8 container (w-8 h-8)
          height={20}
          className="object-contain" // Ensure the image fits without distortion
        />
      </div>

      {/* Description and Time */}
      <div className="flex-1">
        <p className="text-sm text-gray-800">{description}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default ActivityCard;