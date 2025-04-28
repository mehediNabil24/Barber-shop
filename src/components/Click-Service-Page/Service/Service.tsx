'use client';

import HairCutList from '@/components/HairCutService/HairCutList';
import HairCutDetails from '@/components/HairCutService/HairCutPic';
import React from 'react';
// import ServiceDetails from '../ServiceDetails/ServiceDetails';



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

const ServiceContent: React.FC = () => {
  const salons: Salon[] = [
    {
      mainImage: '/asset/Rectangle 41.png',
      tag: 'Mobile Service',
      rating: 4.5,
      title: 'Hair Salon Ruebzj',
      distance: '',
      address: '2.4 Km 1200 northside New Work Salons (0252) ',
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
        
    <div className=" lg:px-[0px] lg:my-[20px] my-[10px] px-[0px]  mx-auto">
      {salons.map((salon, index) => (
        <HairCutDetails key={index} {...salon} />
      ))}
    </div>
    

    

    
  
    </div>
  );
};

export default ServiceContent;