'use client';

import React from 'react';
// import SalonCard from '@/components/SalonCard'; // Adjust the path based on your project structure
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails';
import { div } from 'framer-motion/client';
import ServiceList from '@/components/ServiceDetails/ServiceList';

// Define the salon data interface
interface Salon {
  mainImage: string;
  tag: string;
  rating: number;
  title: string;
  distance: string;
  address: string;
  promoted: boolean;
  galleryImages: string[];
}

const SalonList: React.FC = () => {
  const salons: Salon[] = [
    {
      mainImage: '/asset/Rectangle 41.png',
      tag: 'Mobile Service',
      rating: 4.5,
      title: 'Reflection Barber & Beauty Salon',
      distance: '4.3 mi',
      address: '710 university ave, la Mesa, 91942',
      promoted: true,
      galleryImages: [
        '/asset/Rectangle 43.png',
        '/asset/Rectangle 44.png',
        '/asset/Rectangle 45.png',
        '/asset/Rectangle 46.png',
        '/asset/Rectangle 47.png',
        
      ],
    },
  ];

  return (
    <div>
    <div className="max-w-5xl mx-auto p-6">
      {salons.map((salon, index) => (
        <ServiceDetails key={index} {...salon} />
      ))}
    </div>
    <ServiceList></ServiceList>
    </div>
  );
};

export default SalonList;