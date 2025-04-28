'use client';

import React from 'react';
// import ServiceDetails from '../ServiceDetails/ServiceDetails';
import HairCutDetails from './HairCutPic';
import HairCutList from './HairCutList';


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

const HairCutContent: React.FC = () => {
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
    <div className=" lg:px-[0px]   mx-auto">
      {salons.map((salon, index) => (
        <HairCutDetails key={index} {...salon} />
      ))}
    </div>

    <HairCutList></HairCutList>
  
    </div>
  );
};

export default HairCutContent;