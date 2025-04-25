'use client';

import React from 'react';
import ServiceDetailsCard from './ServiceDetailsCard';
// import ServiceCard from '@/components/ServiceCard'; // Adjust the path based on your project structure

// Define the service data interface
interface Service {
  discount: string;
  title: string;
  price: number;
  duration: string;
  originalPrice: string;
  galleryImages: string[];
}

const ServiceList: React.FC = () => {
  const services: Service[] = [
    {
      discount: 'Save up to 20%',
      title: 'Hair Cut blowout',
      price: 200,
      duration: '2h 30min',
      originalPrice: '175.00',
      galleryImages: [
        '/asset/Rectangle 48.png',
        '/asset/Rectangle 48.png',
        '/asset/Rectangle 48.png',
        '/asset/Rectangle 48.png',
        
      ],
    },
    {
      discount: 'Save up to 20%',
      title: 'Partial highlights',
      price: 200,
      duration: '2h 30min',
      originalPrice: '175.00',
      galleryImages: [
        '/asset/Rectangle 48.png',
        '/asset/Rectangle 48.png',
        '/asset/Rectangle 48.png',
        '/asset/Rectangle 48.png',
      ],
    },
    {
      discount: 'Save up to 20%',
      title: 'Olaplex treatment',
      price: 200,
      duration: '2h 30min',
      originalPrice: '175.00',
      galleryImages: [
       '/asset/Rectangle 48.png',
        '/asset/Rectangle 48.png',
        '/asset/Rectangle 48.png',
        '/asset/Rectangle 48.png',
      ],
    },
  ];

  const otherServices: Service[] = [
    {
      discount: 'Save up to 20%',
      title: "Men's Haircut",
      price: 80,
      duration: '30min',
      originalPrice: '175.00',
      galleryImages: [
        '/asset/Rectangle 48.png',
        '/asset/Rectangle 48.png',
        '/asset/Rectangle 48.png',
        '/asset/Rectangle 48.png',
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Service Section */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Service</h2>
      <hr className="border-t border-gray-300 mt-2" />
      <div className="flex flex-col gap-4">
        {services.map((service, index) => (
          <ServiceDetailsCard key={index} {...service} />
          
        ))}
      </div>

      {/* Other Service Section */}
      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Other Service</h2>
      <div className="flex flex-col gap-4">
        {otherServices.map((service, index) => (
          <ServiceDetailsCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;